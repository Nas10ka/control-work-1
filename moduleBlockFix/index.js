var postcss = require('postcss');

// https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md
module.exports = postcss.plugin('moduleBlockFix', function moduleBlockFix(options) {
    return function (css) {
        options = options || {};
        css.walkRules(function (rule) {
            rule.walkDecls(function (decl, i) {
                 var value = decl.value;
                if (value.indexOf( 'table' ) !== -1) {
                    console.log("table value detected!");
                    decl.value = value.replace('table', 'block')
                }
            });
        });
    }
});