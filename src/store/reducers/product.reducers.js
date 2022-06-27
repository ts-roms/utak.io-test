import { CREATE_PRODUCT, DELETE_PRODUCTS } from "../actions/types";

const initialState = [];

const productReducer = (product = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PRODUCT:
      return [...product, payload];
    case DELETE_PRODUCTS:
      return [];
    default:
      return product;
  }
};

export default productReducer;
