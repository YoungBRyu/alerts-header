"use strict";

const build = require("@microsoft/sp-build-web");

build.addSuppression(
  `Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`
);
build.addSuppression(/error semicolon: Unnecessary semicolon$/);
build.addSuppression(/error semicolon: Missing semicolon$/);
build.addSuppression(/filename should end with module.sass or module.scss$/);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);
 
  result.set('serve', result.get('serve-deprecated'));
 
  return result;
};

require("./spfx-versioning")(build);
build.initialize(require("gulp"));
