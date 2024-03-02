import {makeAutoObservable} from "mobx";
import {createContext} from "react";
import {categories} from "../../../constants/category";

class Store {
  // state
  category = categories[0]

  constructor() {
    makeAutoObservable(this)
  }

  // actions
  setCategory(value) {
    this.category = value
  }

}

const store = new Store()
const context = createContext(store);

export {store,context}
