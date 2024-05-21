# Experience
- Briefly describe what the code is supposed to do.
    - It's doing team assignments using sorted pairs putting strictly least worked pairs together and displaying the roster as well as the created teams and their members.
- Does the code work? If not, what's broken.
    - The code works pretty well from a display / ui pov. It does create and display subgroupss properly.
- How is the code better than what the team currently has?
    - I like the fact that it used a dropdown to choose number of subgroups instead of the number input method we had used.
- How is the code worse?
    - I like our version of the algorithm a bit better. 
- How many tries did it take to get the code? Main struggles?
    - It didn't take too many tries to get the main part of it, like 2 or 3. Refining it took quite a few attempts though.
- Overall impression of the experience
    - It was certainly pretty efficient to just get something right off the bat.


# React Vitest Template

A starter template for building React apps with Vite. Includes Vitest for unit testing and
a hefty .gitignore file.

# Requirements

Node 20 or greater.

## Usage

```
mkdir your-app-name
cd your-app-name
npx degit criesbeck/react-vitest
npm install
```
If the third step hangs after printing ``> cloned criesbeck/react-vitest#HEAD``, 
just control-C to exit then run ``npm install``.

## Test

Verify that the initial app works. Run

```
npm start
```

and open the URL displayed.

Verify that the unit tests work with

```
npm test
```

Two tests should run and pass. 

## Scripts

**package.json** defines the following scripts:

| Script           | Description                                         |
| -----------------| --------------------------------------------------- |
| npm start        | Runs the app in the development mode.               |
| npm run dev      | Runs the app in the development mode.               |
| npm run build    | Builds the app for production to the `dist` folder. |
| npm run serve    | Serves the production build from the `dist` folder. |
| npm test         | Starts a Jest-like test loop                        |
| npm run coverage | Runs the tests, displays code coverage results      |


## Git

If everything is working, set up [your local and remote repositories](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).

## Folder Structure

```
your-app-name
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Credits

React-Vitest built and maintained by [Chris Riesbeck](https://github.com/criesbeck).

Inspired by [SafdarJamal/vite-template-react](https://github.com/SafdarJamal/vite-template-react).
Expanded to include Vitest and some sample tests.

Thanks to Rich Harris for [degit](https://www.npmjs.com/package/degit).

Gitignore file created with [the Toptal tool](https://www.toptal.com/developers/gitignore/api/react,firebase,visualstudiocode,macos,windows).


## License

This project is licensed under the terms of the [MIT license](./LICENSE).
