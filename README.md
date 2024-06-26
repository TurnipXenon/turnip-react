# Turnip React

A react version for our website.

## Why?

I realized that my React skills are getting rusty. This might seem so inefficient but I'm making a subdomain react.turnipxenon.com using React solely for refreshing myself with how to use React. I also don't have any public repository with more refined React examples, so here it is.

To be honest, the reason why I'm starting this is that I had a coding interview where I had to code in React. I was so rusty in React that it took me almost two hours making a calculator app that was so unsatisfactory with what I could have had. Next time, I want to be prepared. I'll try swapping between Svelte and React, because I personally love Svelte, and I don't wanna quit using it to focus on React solely for skill purposes.

Is this a blatant resume padder? Yep! <3 But hey, I gotta I know all of these, and I'm not bluffing.

## Tech Stack

- Docker
- Porkbun
- NextJS
- TailwindCSS
- React
- Typescript

## Using Docker

> from https://github.com/vercel/next.js/tree/canary/examples/with-docker

1. Install Docker on your machine.
2. Build your container: `docker build -t nextjs-docker .`.
3. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with docker images.

## Notes

- generate OpenAPI using typescript-axios
    - should be in src/lib/openapi
- Change of approach, I'll keep my job posting server offline, and only post the results later

## TODO

- Add job events
- Add ability to update job events
- Add ability to delete job events
