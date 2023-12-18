import { create, get } from "../repository/product.repository";

export const createProduct = async (request, response) =>{
    try {
        const product = await create(request.body)
        response.status(200).send(product)
    } catch (error) {
        response.status(400).send(error)
    }
}

export const getProduct = async (request, response) =>{
    try {
        const product = await get()
        response.status(200).send(product)
    } catch (error) {
        response.status(400).send(error)
    }
}
