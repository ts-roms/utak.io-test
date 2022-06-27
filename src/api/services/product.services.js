import {database, ref, set} from "../firebase-service";

const create = (product) => {
  const db = database;
  return set(ref(db, 'products'), {product})
}

const getProducts = async () => {

}

export {
  create,
  getProducts
}
