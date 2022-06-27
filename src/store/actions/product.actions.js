import { create } from "../../api/services/product.services";
import { CREATE_PRODUCT } from "./types";

export const createProduct = (product) => async (dispatch) => {
  try {
    await create(product);
    dispatch({
      type: CREATE_PRODUCT,
      payload: product,
    });

    return Promise.resolve(product);
    
  } catch (error) {
    return Promise.reject(error);
  }
};
