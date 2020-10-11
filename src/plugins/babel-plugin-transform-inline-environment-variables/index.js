"use strict";

var myKeys = {
  STRIPE_SECRET_KEY: true,
  GATSBY_STRIPE_PUBLIC_KEY: true
};
module.exports = function({ types: t }) {
  function isLeftSideOfAssignmentExpression(path) {
    return (
      t.isAssignmentExpression(path.parent) && path.parent.left === path.node
    );
  }
  return {
    name: "transform-inline-environment-variables",
    visitor: {
      MemberExpression(path, { opts: { include, exclude } = {} }) {
        if (path.get("object").matchesPattern("process.env")) {
          const key = path.toComputedKey();
          if (
            t.isStringLiteral(key) &&
            !isLeftSideOfAssignmentExpression(path) &&
            (!include || include.indexOf(key.value) !== -1) &&
            (!exclude || exclude.indexOf(key.value) === -1)
          ) {
            if (myKeys[key.value]) {
              console.debug(
                `[BRADY] transforming '${key.value}' into '${process.env[
                  key.value
                ].substring(0, 7)}'`
              );
            }
            let node = t.valueToNode(process.env[key.value]);
            if (node.type === "StringLiteral") {
              console.debug("[BRADY] to be:", {
                ...node,
                value: node.value && node.value.substring(0, 7)
              });
            }
            path.replaceWith(t.valueToNode(process.env[key.value]));
          }
        }
      }
    }
  };
};
