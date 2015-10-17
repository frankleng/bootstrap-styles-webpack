bootstrap-styles-webpack
=================

forked from [bootstrap-webpack](https://github.com/gowravshekar/bootstrap-webpack)

### Usage
Same as bootstrap-webpack

Modify your webpack entry:
```
  entry: {
    'main': [
      'bootstrap-styles-webpack!./local/path/bootstrap.config.js',
      'font-awesome-webpack!./src/theme/font-awesome.config.js'
    ]
  }
```
Since Bootstrap 4 removed the glyphicons, I'm using font-awesome as replacement.

No JS support for now since I'm using React and do not feel the need to introduce dependencies on JQuery.
Happy to accept PR for it though.
