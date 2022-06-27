import { database, ref, set, get, child } from "../firebase-service";

const create = (product) => {
  const db = database;
  return set(ref(db, "products"), { product });
};

const update = async (productId, product) => {};

const getProductCollection = async () => {
  const dbRef = ref(database);
  return get(child(dbRef, "products"))
    .then((snapshot) => {
      if (!snapshot.exists()) {
        return [];
      }
      return [snapshot.val()]
    })
    .catch((error) => console.log(error));
};

const getProduct = async (productId) => {
  const dbRef = ref(database);
  return get(child(dbRef, `product/${productId}`))
    .then((snapshot) => {
      if (!snapshot.exists()) {
        return "No data available";
      }
      return snapshot.val();
    })
    .catch((error) => console.log(error));
};

const deleteById = async (id) => {};

const deleteAll = async () => {};

export {
  create,
  update,
  getProductCollection,
  getProduct,
  deleteById,
  deleteAll,
};
