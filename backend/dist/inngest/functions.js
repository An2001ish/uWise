"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.inngest = void 0;
const inngest_1 = require("inngest");
const aiFunctions_1 = require("./aiFunctions");
exports.inngest = new inngest_1.Inngest({ id: "uwise" });
exports.functions = [
    ...aiFunctions_1.functions
];
//# sourceMappingURL=functions.js.map