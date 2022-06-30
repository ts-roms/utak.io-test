import {
  database,
  ref,
  set,
  get,
  child,
  remove,
  update,
} from "../firebase-service";

const create = (product) => {
  set(ref(database, "products/" + product.id), {
    category: product.category,
    name: product.name,
    size: product.size,
    price: product.price,
    cost: product.cost,
    in_stock: product.in_stock,
  });
};

const updateProductData = async (product, productId) => {
  update(ref(database, "products/" + productId), {
    category: product.category,
    name: product.name,
    size: product.size,
    price: product.price,
    cost: product.cost,
    in_stock: product.in_stock,
  })
};

const getProductCollection = async () => {
  return await get(child(ref(database), "products"))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch((error) => console.log("Catch Exception: ", error));
};

const getProduct = async (productId) => {};

const deleteById = (productId) => {
  const db = database;
  remove(ref(db, `products/${productId}`))
    .then(() => {})
    .catch((e) => console.log("Catch Exception: ", e));
};

const removeProductCollection = async () => {
  const db = database;
  remove(ref(db, "products"))
    .then(() => {})
    .catch((e) => console.log("Catch Exception: ", e));
};

export {
  create,
  updateProductData,
  getProductCollection,
  getProduct,
  deleteById,
  removeProductCollection,
};
