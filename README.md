<h1 align="center">
  <img src="./build/icons/256x256.png" width="128">
  <br>
  Sparks
</h1>
<p align="center" style="font-style: italic;">Minimal / Fast / Open-Source</p>

### Install

Sparks is still under development. You can get the latest release [here](https://github.com/sjliang/sparks).

### Features

- Live preview
- Markdown syntax highlighting
- Light/Dark theme
- Emojis support :fire:
- Task lists support
- Foot notes support

### Screenshots

![screenshot](./app/static/screenshot-0.png)

### Usage

- Shortcuts:
  - `Command (Ctrl) + N`: Create a new file
  - `Command (Ctrl) + O`: Open a file
  - `Command (Ctrl) + S`: Save a file
  - `Command (Ctrl) + Shift + S`: Save a file as...
  - `Command (Ctrl) + P`: Toggle half preview
  - `Command (Ctrl) + Shift + P`: Toggle full preview


### Todos

- [x] Fix image's width in preview area.
- [x] Add screenshots to README.
- [x] Configure `WordCounter` to only count alphanumeric words.
- [ ] Add Wiki.
- [ ] Add PDF export support.

### Tech Stack

- [Electron](http://electron.atom.io/) - Build cross platform desktop apps with JavaScript, HTML, and CSS.
- [React](https://facebook.github.io/react/) - JavaScript library for building interfaces.
- [Redux](http://redux.js.org/) - Predictable state container for JavaScript apps.
- [CodeMirror](https://codemirror.net/) - Versatile text editor implemented in JavaScript for the browser.

### Inspiration

Sparks is inspired by [Caret](https://caret.io/), [Moeditor](http://moeditor.org/) and [iA Writer](https://ia.net/writer). This app is in no competition with these listed apps.

Sparks was built mainly for the author to learn the tech stack mentioned above. It also does not have as many advanced features as the listed apps. If you like this app, the author highly recommends you to try out and use the mentioned apps above.

### Contribution Guidelines

Sparks is an open-source app, you can contribute to the app by [reporting issues](https://github.com/sjliang/sparks/issues) or [forking the repo and making pull requests](https://github.com/sjliang/sparks/pulls) on GitHub. If you would like any new feature to be implemented, please post the request on [the Issues page](https://github.com/sjliang/sparks/issues).

**Build**

> To build the app, you must have `NodeJS` and `npm` installed

1. Download or clone the repository.
2. In the Terminal, `cd` to the repository's dicrectory and run `npm install` to install the dependencies.
3. Run the command `npm run build:test` to build the unpacked version of the app.
  > To build the production version, you can run `npm run build:prod`.
4. After building completes, the app will be available in the `dist` directory.

### License

MIT License. Copyright (c) 2016 Chi To.