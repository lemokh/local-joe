import { takeEvery } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsStartAsync
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  //  all generator functions must yield
  yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
  // takeEvery creates a non-blocking call
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
