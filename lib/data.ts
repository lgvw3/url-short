'use server'

import { mapToLongs } from "./maps"

export async function getLongURL(shortURL: string) {
    return mapToLongs.get(shortURL)
}