import { makeAutoObservable } from "mobx";

export class Crumbs {
  constructor() {
    this._crumbs = [
      {
        to: "/",
        name: "Головна",
      },
    ];
    makeAutoObservable(this);
  }

  setCrumbs(crumbs) {
    this._crumbs = crumbs;
  }

  setCrumb(crumb, index) {
    this._crumbs[index] = crumb;
  }

  get crumbs() {
    return this._crumbs;
  }
}
