var styles = [
  '_mixins',

  '_normalize',
  '_print',

  '_reboot',
  '_type',
  '_images',
  '_code',
  '_tables',
  '_forms',
  '_buttons',

  '_alert',
  '_animation',
  '_breadcrumb',
  '_button-group',
  '_card',
  '_carousel',
  '_close',
  '_custom-forms',
  '_dropdown',
  '_grid',
  '_input-group',
  '_jumbotron',
  '_labels',
  '_list-group',
  '_media',
  '_modal',
  '_nav',
  '_navbar',
  '_pager',
  '_pagination',
  '_popover',
  '_progress',
  '_responsive-embed',
  '_tooltip',
  '_utilities-responsive',
  '_utilities-spacing',
  '_utilities',
  'bootstrap-grid',
  'bootstrap-reboot'
];

module.exports = function (content) {
  this.cacheable(true);
  var config = this.exec(content, this.resourcePath);
  var start =
    "@import          \"~bootstrap/scss/_variables.scss\";\n"
    + "@import          \"./bootstrap.config.scss\";\n";
  source = start + styles.filter(function (style) {
      return config.styles[style];
    }).map(function (style) {
      return "@import \"~bootstrap/scss/" + style + ".scss\";";
    }).join("\n");
  return source;
};
