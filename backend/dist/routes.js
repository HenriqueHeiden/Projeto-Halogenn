"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
var CreateProductsService_1 = __importDefault(require("./CreateProductsService"));
function createProduct(request, response) {
    CreateProductsService_1.default.execute("Nodejs", "img", 1200, 1.2);
    return response.send();
    //nome: string, imagem: string, valor: number, nota: number
}
exports.createProduct = createProduct;
//# sourceMappingURL=routes.js.map