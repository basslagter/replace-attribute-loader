<div>
    <a href="https://npmcharts.com/compare/webpack?minimal=true">
        <img src="https://img.shields.io/npm/dm/replace-attribute-loader.svg">
    </a>
    <a href="https://packagephobia.now.sh/result?p=webpack">
        <img src="https://packagephobia.now.sh/badge?p=replace-attribute-loader" alt="install size">
    </a>
    <a href="https://github.com/webpack/webpack/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/basslagter/replace-attribute-loader.svg">
    </a>
</div>
	
<h1>replace-attribute-loader</h1>
<p>Replaces the specified attributes with an optional value</p>

## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Get started](#get-started)
4. [Configuration](#configuration)

<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save-dev replace-attribute-loader
```

Install with yarn:

```bash
yarn add replace-attribute-loader --dev
```

<h2 align="center">Introduction</h2>

replace-attribute-loader enables you to replace attributes from your source code. For example when you
have test attributes that you do not want in a production build. This loader can be configured to replace
one or more attributes, optionally with a new value.

**TL;DR**

* Replace attributes
* Optional replacement values
* Easy configuration

<h2 align="center">Get started</h2>

Open the webpack configuration file in which you have specified the loaders.
Add the loader wherever you like.
<br/><br/>
Example 1:
```javascript
module.exports = {
    ...,

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'replace-attribute-loader',
                options: {
                  attribute: 'data-test-hook',
                },
              },
            ],
          },
        ]
    }
};
```

<h2 align="center">Configuration</h2>

Options can be specified in multiple ways.
<br/><br/>
Example 1: removes all occurrences of 'data-test-hook'
```javascript
module.exports = {
    ...,

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'replace-attribute-loader',
                options: {
                  attribute: 'data-test-hook',
                },
              },
            ],
          },
        ]
    }
};
```

<br/><br/>
Example 2: removes all occurrences of 'data-test-hook' and 'data-test'
```javascript
module.exports = {
    ...,

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'replace-attribute-loader',
                options: {
                  attribute: ['data-test-hook', 'data-test'],
                },
              },
            ],
          },
        ]
    }
};
```

<br/><br/>
Example 3: replaces all occurrences of 'data-test-hook' and 'data-test' with the specified value
```javascript
module.exports = {
    ...,

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'replace-attribute-loader',
                options: {
                  attribute: {
                    'data-test-hook': 'data-foo="bar"',
                    'data-test': 'data-foo="bar"',
                  },
                },
              },
            ],
          },
        ]
    }
};
```