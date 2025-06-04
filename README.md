# Welcome to "What's For Dinner", an app that suggests recipes based on what you already have in your kitchen!

[Live Demo](https://whatsfordinner-beta.vercel.app/)

I created this project as a fun way to demonstrate my front end, UI/UX, and design skills. Before I speak on those, however, I should probably mention that since this is a front end demonstration, I chose to integrate OpenAI/ChatGPT in place of an data-rich back end or an specifically trained generative model. What I'm trying to say is, the results you get back from using the tool may not actually work! Try not to worry too much about this.

Now, on to the good stuff!

## UI/UX

I'd like to point out a few fun UX pieces to this project.

My strongest opinion about UX is that users want things to be fast and take minimal work on their end - especially when it comes to number of clicks. We can make a few subtle code additions that make the UX way better in this regard.

1. The textarea, which is the most important and interactive element, is focused as soon as you hit the page. Thus, you can just start typing immediately - you don't have to click anything.
2. The submit button is also triggerable by pressing command+enter. And it's not only triggerable with that shortcut when you're focused on the textbox. It's still triggerable when you've clicked anything else on the page. Bam - that's two clicks saved.
3. The form has been simplified into a single field that gets parsed, rather that entering individual list items. Now we've saved 3+ clicks total, allowing experienced users to use the product at lightning speed with no interruptions.

These things together create an app that feels a lot smoother to use than much of the web. But I didn't stop there! A couple more fun UX additions...

- Pizza Spinner: A pizza icon spins while ChatGPT is thinking. Any spinner or loader really helps users relax and feel like the work is being done for them. I try to add spinners and skeletons to pretty much anything I make.
- True Single Page: This app is minimal enough that I was able to keep everything in the design to a single view height, which feels great to users - there's no question about whether they're in the "right place" or not.

## Design

The main design of this app is themed around upscale food publications like Bon Appetit. I created a background image in photoshop of editorial food photography that I arranged into a balanced (but not too symmetrical) collage. I chose an editorial font called Instrument Serif for the title and a classy sans-serif font called Raleway for the rest, in the hopes of capturing that magazine aesthetic. I used a slightly warm/creamy/beige white for the site background and a gentle dark gray for the text, to create a relaxing feel for users (and inverted them for dark mode). And fun fact - that dark gray is actually a super dark *shade* of the beige! Users will never notice this but it creates visual harmony in a subtle way. Everything fades in and slides down, which I felt added to the relaxed and elegant vibe I was trying to create.

I also included a totally different theme - a Partiful-inspired "party" theme, which also works with dark mode. This one is definitely fun but a little less baked. Honestly I mainly included it to 1) show I can design in other styles and 2) as a tailwind demonstration of multiple themes and modes (more on this in the next section).

## Notable Front End Bits

I used React, Next JS, Tailwind, and Typescript for this project. Here are some scattered tech notes!

- I'm loving using Next these days, and I server side rendered the title and subtitle of the site. In a production environment this would help a ton with SEO.

- Between Next and Typescript, which is my typical set up these days, I feel React now has a ton of structure. This is a bit of a barrier to entry for junior engineers, but it really promotes better code practices.

- I included both a dark theme and a party theme, and neither actually conflicts with the other at all, so there are four themes total: Editorial Light, Editorial Dark, Party Light and Party Dark. I totally did this to show off and also to demonstrate that when using Tailwind (or similar libraries), you can have a huge amount of flexibility while preserving code speed if you use variables/themes from the start. This is a huge boon in a start up environment, because you can demo anything from a font change to an entire reskin on the fly (and as we all know, things change fast at start ups). I've fallen in love with Tailwind these days and don't see myself skipping it in any personal projects for quite a while.

## How I'd Improve This App

My goal was to finish this idea in exactly one day, so there is a *ton* of stuff missing - which is okay, but I'd like to list it in hopes of adding it one day!

- Barely and comments, no testing
I'm actually a monster when it comes to commenting, and I've definitely had colleagues tell me I comment too much! In this case though, I wanted to move really fast, so there's almost no commenting. Usually you should expect doc blocks and any line that's even a little complicated to have a comment. There's also literally no testing, not that there's a lot to test here, but I'd usually use something like Jest or React Testing Library.

- Not much leveraging of TypeScript
Again, because of speed, I didn't leverage TypeScript much for it's pre-testing or strongly-typed capabilities, like I usually would. But it did catch a few errors for me!

- Probably too much vibe coding
I definitely let GitHub CoPilot and ChatGPT do more lifting for me than I would in a professional production codebase, and this code could use a refactor. That said, these are powerful tools that are just going to get better, so I do think they have a place in the daily toolkit of any good engineer! I stand by using these tools but I'd be more conservative in a production environment.

- Party Mode
I'd love to flesh out the party theme more! It was a bit of an afterthought but it was really fun.

- General Organization
I'd probably want a slightly more thought out app architecture usually, but again, time was of the essence!


That's it from me! I'm very happy with how this turned out. Read on if you'd like to set up the app locally.

Thank you for reading,
Ian


## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
