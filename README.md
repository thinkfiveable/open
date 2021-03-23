# [Open Source Intiative](https://open.fiveable.me)
We're building a community for discovery and learning.

## To get started, follow these steps:

**Prerequisites**: Node.js ( [Install Here](https://nodejs.org/en/download/) ), Git ( [Install Here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) )

1. Clone the repository using the following command in your terminal: `git clone https://github.com/ThinkFiveable/open fiveable-open`
2. Go into that project's directory using `cd fiveable-open`
3. Do `npm install` to install required dependencies
4. Then, `npm run dev` which will run the site locally at [http://localhost:3000](http://localhost:3000)

## Frameworks/Libraries this project uses
- Tailwind CSS (no more going through the installation guide!) - for styling components easily
- `next-themes` (@pacocoursey) - for going to the dark side
- `swr` (@vercel) - for fetching constantly mutating data
  - `fetcher.js` so you don't have to keep writing return functions
- `framer-motion` - for making interactive components and eye-catching animations
- `react-icons` - for including your favorite icon packs without increasing bundle size significantly. Tree shaking included.

## How do I contribute?
Great question! You are expected to fork this repository and to create PRs when you want to merge your changes. Your commits are expected to follow our [Commit Convention](https://github.com/ThinkFiveable/open/blob/main/CONTRIBUTING.md#commiting), so some example ones are:
- `fix: broken button on index.html`
- `fix(Index): broken button`
- `chore: add NEWFILE.md`
- `feat: new button!!!`
Before making a PR, make sure to run `npm run lint:fix` and fix any warnings or errors that might be shown in your terminal to ensure consistent code style.

You can find more information regarding contributing to this project in our [CONTRIBUTING.md](https://github.com/ThinkFiveable/open/blob/main/CONTRIBUTING.md)


Licensed under [MIT](LICENSE).
