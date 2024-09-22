// global storage as a kind of singleton. This is the only way I've been able to get nextjs to consistently
// maintain some type of global while still allowing for HMR during dev
// since we aren't using a database this doesn't check for dev vs prod, it's just always the same

let mapToShorts: Map<string, string>;
let mapToLongs: Map<string, string>;

let increment: number

const globalMaps = global as typeof globalThis & {
    _mapToShorts?: Map<string, string>;
    _mapToLongs?: Map<string, string>
    _increment?: number
};

export function incrementCounter(): number {
    // Ensure the counter is defined
    globalMaps._increment = globalMaps._increment || 0;
    return ++globalMaps._increment;
  }

if (!globalMaps._mapToShorts) {
    mapToShorts = new Map<string, string>()
    globalMaps._mapToShorts = mapToShorts
}
if (!globalMaps._mapToLongs) {
    mapToLongs = new Map<string, string>()
    globalMaps._mapToLongs = mapToLongs
}
if (!globalMaps._increment) {
    globalMaps._increment = 0
}
mapToLongs = globalMaps._mapToLongs;
mapToShorts = globalMaps._mapToShorts
increment = globalMaps._increment

export { mapToShorts, mapToLongs, increment };