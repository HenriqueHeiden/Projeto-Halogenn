"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.get('/', routes_1.createProduct);
app.listen(3333);
//# sourceMappingURL=server.js.map