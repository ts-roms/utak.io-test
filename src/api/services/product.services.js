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
  console.log("product", product);
  // const db = database;
  // const refData = ref(db, "products");
  // const pushedData = push(refData);
  // return set(pushedData, { product });
  set(ref(database, "products/" + product.id), {
    category: product.category,
    name: product.name,
    size: product.size,
    price: product.price,
    cost: product.cost,
    in_stock: product.in_stock,
  })
    .then((data) => console.log("data", data))
    .error((error) => console.log("Error", error));
  /**
   * same as update
   set(ref(db, 'collection'/id or something), { mapped obj}).then(() => alert()).catch(() => alert('error))
  update(ref(db, 'collection'/id or something), { mapped obj}).then(() => alert()).catch(() => alert('error))
   */
};

const updateProductData = async (product, productId) => {
  console.log('Pdcuct', product)
  update(ref(database, "products/" +productId), {
    category: product.category,
    name: product.name,
    size: product.size,
    price: product.price,
    cost: product.cost,
    in_stock: product.in_stock,
  })
    .then((data) => console.log("data", data))
    .error((error) => console.log("Error", error));
};

const getProductCollection = async () => {
  // const dbRef = ref(database, "products");
  // const dbSnapshot = await get(query(dbRef));
  // const parentData = [];
  // dbSnapshot.forEach((product) => {
  //   parentData.push(product.val());
  // });
  // return parentData;
  // this makes works
  return await get(child(ref(database), "products"))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch((error) => console.log("Err Exception: ", error));
  /**
   const dbRefs = ref(db)
   get(child(dbRef, "collection/", id or something)).then(snapshot => {
    if (snapshot.exist()) {
      product.data = snapshot.val().field
      ...
    } else {
      alert('no_data)
    }
   }).catch((err )=> alert(err))
   */
};

const getProduct = async (productId) => {};

const deleteById = (productId) => {
  const db = database;
  remove(ref(db, `products/${productId}`))
    .then(() => console.log("Deleted"))
    .catch((e) => console.log(e));
};

const removeProductCollection = async () => {
  const db = database;
  remove(ref(db, 'products'))
    .then(() => console.log("Deleted"))
    .catch((e) => console.log(e));
};

export {
  create,
  updateProductData,
  getProductCollection,
  getProduct,
  deleteById,
  removeProductCollection,
};
