"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateProductService = /** @class */ (function () {
    function CreateProductService() {
    }
    CreateProductService.prototype.execute = function (nome, imagem, valor, nota) {
        console.log("nome => ", nome, " => ", imagem, " valor => ", valor, " nota => ", nota);
    };
    return CreateProductService;
}());
exports.default = new CreateProductService();
//# sourceMappingURL=CreateProductsService.js.map