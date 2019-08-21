"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loader_utils_1 = require("loader-utils");
function ReplaceAttributeLoader(source) {
    // @ts-ignore
    var attribute = loader_utils_1.getOptions(this).attribute;
    var isString = (typeof attribute === 'string');
    var isArray = Array.isArray(attribute);
    var attributes = (isString)
        ? [attribute]
        : (!isArray)
            ? Object.keys(attribute)
            : attribute;
    attributes.forEach(function (attr) {
        var value = (isArray || isString) ? '' : attribute[attr];
        var regex = RegExp(attr + "=[{|\"].*[}|\"][ |?/>]", 'gi');
        var result;
        while ((result = regex.exec(source))) {
            source = source.replace(result[0].slice(0, -1), value);
        }
    });
    return source;
}
exports.default = ReplaceAttributeLoader;
