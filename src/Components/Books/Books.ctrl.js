import { makeAutoObservable } from "mobx";
import BookModel from "../Books/Books.model";

export default class BooksController {
  constructor() {
    this.model = new BookModel();
    this.list = [];
    this.privateList = [];
    this.stateLoading = false;
    this.error = null;
    this.privateMode = false;
    makeAutoObservable(this);
  }

  createBook = async (book) => {
    this.stateLoading = true;

    try {
      await this.model.createBook(book);
    } catch (e) {
      this.error = e;
    }

    this.stateLoading = false;
  };

  loadList = async () => {
    this.stateLoading = true;

    try {
      this.list = await this.model.getAll();
    } catch (e) {
      this.error = e;
    }

    this.stateLoading = false;
  };

  loadPrivateList = async () => {
    this.stateLoading = true;

    try {
      this.privateList = await this.model.getPrivate();
    } catch (e) {
      this.error = e;
    }

    this.stateLoading = false;
  };
}
