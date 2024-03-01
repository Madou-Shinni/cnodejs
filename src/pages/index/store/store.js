import {makeAutoObservable} from "mobx";
import {createContext} from "react";

class Store {
  // state
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  // actions
  increment() {
    console.log(1)
    this.count++
  }

  set(value) {
    this.count = value
  }

}

const store = new Store()
const context = createContext(store);

export {store,context}
