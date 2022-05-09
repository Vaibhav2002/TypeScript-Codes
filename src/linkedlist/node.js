"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return Node;
}());
exports.Node = Node;
