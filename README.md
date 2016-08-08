## How to start

**Note** that this project requires node v4.x.x or higher and npm 2.14.7.


In order to start the project development:
### Installation

####1.  Make sure you have [npm](https://www.npmjs.org/) installed globally

You must have `ts-node` installed as global. If you don't, use:

```bash
npm install -g ts-node
```

####2. On the command prompt run the following commands

```sh
$ cd `ed-admin`
```

```sh
$ npm install 
```

```sh
$ npm start
```

####4. In your browser go to:   http://localhost:8080/dist/dev/

### Configuration

Default application server configuration

```javascript
var PORT             = 8080;
var LIVE_RELOAD_PORT = 4002;
var APP_BASE         = '/';
```

### Directory Structure

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── app
├── dist
├── test
├── tools
│   ├── manual_typings
│   ├── tasks
│   ├── utils
│   ├── config.ts
│   └── utils.ts
├── appveyor.yml
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── test-main.js
├── tsconfig.json
├── tslint.json
└── typings.json
```
