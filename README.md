# PoCreate

> Add missing keys to .po files from JavaScript

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install pocreate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('pocreate');
```

## The "pocreate" task

PoCreate lets you maintain your .po files by adding new keys to them after they've already been created.

Often you'll create your .po files, make changes to them (either by annotating them or by sending them to translators),
and then want add new keys without regenerating the file completely and losing changes.

PoCreate simplifies this process by adding keys only where they don't exist.

### Overview
In your project's Gruntfile, add a section named `pocreate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pocreate: {
    src: ['path/to/js/files/*.js'],
    options: {
      pos: ['path/to/po/files/*.po'],
      add_comments: '/',
      keyword: ['tr', 'translate']
    }
  },
})
```

### Options

#### options.pos (__Required__)
Type: `Array`

An array of .po files to add translation keys to. These files will be updated with new keys found in the source files if
the keys don't already exist.

#### options.add_comments
Type: `String`
Default value: `'/'`

A string that is used to scan for contextual comments for translators. This character must be the first character after
a double slash comment. For insance, this is an example with the default value.

```js
/// This is a contextual comment
gettext('Key');
```

#### options.keyword
Type: `Array`

An array of translation function keywords to scan the source files for.

The default value is `["gettext"]`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- 0.1.0: Initial release

## License
Copyright (c) 2014 Paul LeMarquand. Licensed under the MIT license.
