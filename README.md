# Password Component

This is a password validator component developed as a Take Home Assessment for Qventus.


## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)


## Getting Started

First, clone this repository in you machine by running:

```bash
git clone https://github.com/JulianaBurzlaff/qventus-challenge.git
```

Then, navigate to the project folder and install the dependencies by running:

```bash
npm install
```

After that, run the development server:

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) with your browser to see the application.


## Available Commands

- `dev`: runs the application on `localhost:3000`
- `build`: creates the production build version
- `test`: runs jest to test all components and pages

## Adding validations

You can add as much validation as you want. You just need to add the label and the validation function in the `src/utils/passwordReqs/index.ts`file.
Do not forget to add tests for your new validation on the `src/utils/passwordReqs/index.test.ts`file.

## Deploy 

Here is a DEMO for testings!

## Next Steps

- Add Storybook as a component documentation.
- Use React Hook Form, or similar, to manage complex forms.
