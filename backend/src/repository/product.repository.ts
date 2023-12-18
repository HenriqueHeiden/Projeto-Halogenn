
import { Product } from "../model/Product";
import { prisma } from "../services/prisma";

export const  create = async (data: Product) => {
  return await prisma.produtos.create({data})
}

export const  get = async () => {
  return await prisma.produtos.findMany()
}
