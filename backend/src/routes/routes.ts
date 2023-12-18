import { Router } from "express";
import { createProduct, getProduct } from "../controller/product.controller";

const productRoutes = Router();

productRoutes.post("/product", async (request, response) => {
  createProduct(request, response);
});

productRoutes.get("/product", async (request, response) => {
  getProduct(request, response);
});

export { productRoutes };
