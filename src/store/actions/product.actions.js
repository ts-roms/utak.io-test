import {
  create,
  deleteById,
  getProductCollection,
  updateProductData,
  removeProductCollection,
} from "../../api/services/product.services";
import {
  CREATE_PRODUCT,
  GET_PRODUCTS,
  DELETE_PRODUCT,
  DELETE_PRODUCTS,
  UPDATE_PRODUCT,
} from "./types";
import { v4 as uuid } from "uuid";

const createProduct = (product) => async (dispatch) => {
  try {
    create({ ...product, id: uuid() });
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
    return Promise.resolve([]);
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeProduct = (productId) => async (dispatch) => {
  try {
    deleteById(productId);
    dispatch({
      type: DELETE_PRODUCT,
      payload: productId,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateProduct = (product, productId) => async (dispatch) => {
  try {
    await updateProductData(product, productId);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: product,
    });

    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeProducts = () => async (dispatch) => {
  try {
    await removeProductCollection();
    dispatch({
      type: DELETE_PRODUCTS,
      payload: [],
    });

    return Promise.resolve([]);
  } catch (error) {
    return Promise.reject(error);
  }
};

export {
  createProduct,
  getProducts,
  removeProduct,
  updateProduct,
  removeProducts,
};
