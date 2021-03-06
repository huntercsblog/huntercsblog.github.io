# The Icarus ![Deploy](https://github.com/huntercsblog/huntercsblog.github.io/workflows/Deployment/badge.svg)

The Daedalus News Website

### Live

The master branch is always live [here](https://huntercsblog.github.io/).

### Dependencies

- `yarn`: Installs previous dependencies and updates lockfile (shouldn't be used by everyone).
- `npm run deps`: Installs previously listed dependencies, relying solely on lockfile (should be used).
- `yarn add <PACKAGE>`: Installs a new package, make sure you need it and someone else hasn't installed it already.

### Commands

It's worth noting `npm run <command>` just runs the command listed in the [package.json](../package.json). You can also use `yarn <command>`. There shouldn't be a difference, but when installing dependencies, use `yarn`.

- `npm run develop`: Run Gatsby website locally ([http://localhost:8000/](http://localhost:8000/)) with hot reload.
- `npm run build`: Create static production build for website into `build/`.
- `npm run clean`: Get rid of previous cache of builds (usually unnecessary).

## Code of Conduct

  Although code of conducts usually aren't needed, people should think before working with others and likewise people
  should be able to work without stress. Follow our [code of conduct](./CODE_OF_CONDUCT.md) to help maintain a healthy community.

## Contributing

  There are many ways in which you can participate in the project, for example:

  - See an open pull request? You can try reviewing it!
  - Find a pesky bug or perhaps a neat place to refactor? [Report it](https://github.com/huntercsblog/huntercsblog.github.io/issues/new?assignees=&labels=&template=bug_report.md&title=) or fix it with a PR!
  - Notice some weird or missing documentation? Fix or add it with a PR! (Feeling a bit lazy, just [report it](https://github.com/huntercsblog/huntercsblog.github.io/issues/new?assignees=&labels=&template=bug_report.md&title=) :satisfied:)
  - Want to give a recommendation for a feature? Go ahead and open an issue with [this template](https://github.com/huntercsblog/huntercsblog.github.io/issues/new?assignees=&labels=&template=feature_request.md&title=).

  Feel free to open a pull request, check our [contributing guide](./CONTRIBUTING.md) for more details.

## License

  This project uses an MIT license, which can be viewed [here](./LICENSE).
