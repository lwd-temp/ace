"use strict";

var oop = require("../lib/oop");
var TypeScriptHighlightRules = require("./javascript_highlight_rules").TypeScriptHighlightRules;


var TsxHighlightRules = function () {
  TypeScriptHighlightRules.call(this, {
    jsx: true
  });
};
oop.inherits(TsxHighlightRules, TypeScriptHighlightRules);

exports.TsxHighlightRules = TsxHighlightRules;