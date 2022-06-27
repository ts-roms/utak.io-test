import {
  create,
  getProductCollection,
} from "../../api/services/product.services";
import { CREATE_PRODUCT, GET_PRODUCTS } from "./types";
import { v4 as uuidv4 } from "uuid";

const createProduct = (product) => async (dispatch) => {
  try {
    await create({ ...product, id: uuidv4() });
    dispatch({
      type: CREATE_PRODUCT,
      payload: product,
    });

    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getProducts = () => async (dispatch) => {
  try {
    const products = await getProductCollection();
    if (products) {
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
      return Promise.resolve(products);
    }
    return Promise.reject();
  } catch (error) {
    return Promise.reject(error);
  }
};

export { createProduct, getProducts };
