
## Implementation Details

I started off with next init and used shadcn to speed up the UI development for this prototype.

We have a home page that allows for url creation and then the link can immediately be click on to navigate. A secondary dynamic route just called 'slug' is what allows for the redirect if the link is used on another browser or tab. I opted for this since nextjs middleware basically acts like an island right now since it's on the edge and doesn't seem to be aware of global variables.

I added a few toasts and basic warnings to communicate to the end user.

The backend is simply using zod to validate the url which could be made more user friendly since zod wants to see things like https:// and a user may not add that.

To be quick in a prototype I just used a global increment counter for the shortened URL. This could be made more interesting if it was, for example, something tied to the user if we added account features.

I tried to mirror some of the file structure I would use if I had a database and a more complete project with the lib file containing actions, and data. Didn't need types or much more division on this prototype though.

## How to Run

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.


## Testing

I did run out of my 2 hours for testing. I actually used more like 2:15 because I realized I had forgotten to make the incrementer a global variable.

For the testing I did do, it was all manually entering in various correctly formatted and incorrectly formatted URLs for several minutes and seeing if I could open them in another tab.

## Tools Used

I used Shadcn for some quick improvements to the UI, the nextjs CLI init, tailwindcss.

For AI, I hope I understood your prompt on judicious use. I took that to mean "try to rely on your own skills so we can see what you know". So I used ChatGPT when I was trying to remember how I had previously done some global variables in nextjs. I also used it to see if I could potentially use middleware for the dynamic routing to be a bit more effecient, because I couldn't remember for sure and figured it would be faster.

In practice, when I'm actually at my current job, my approach to AI in a situation of prototyping or building out a new tool, page, or larger component has lately been use v0.dev to generate several iterations of the main UI structure, and to do the details myself using claude or chatgpt when I'm looking for some specific guidance that doesn't require me to share a lot of context or code with the assistant.
