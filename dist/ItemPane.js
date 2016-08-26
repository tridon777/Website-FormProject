"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require("react-bootstrap");
/*interface MyProps {}
interface MyState {}*/
var ItemPane = (function (_super) {
    __extends(ItemPane, _super);
    function ItemPane() {
        _super.apply(this, arguments);
    }
    ItemPane.prototype.render = function () {
        return (React.createElement(react_bootstrap_1.Col, {xs: 2, md: 3, style: { border: "1px solid blue",
            boxshadow: "0.9px 1px 10px 1px black" }}));
    };
    return ItemPane;
}(React.Component));
exports.ItemPane = ItemPane;
//# sourceMappingURL=ItemPane.js.map