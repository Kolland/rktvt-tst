import { makeAutoObservable } from "mobx";
import BookModel from "../Books/Books.model";

export default class BooksController {
  constructor() {
    this.model = new BookModel();
    this.list = [];
    this.stateLoading = false;
    this.error = null;

    makeAutoObservable(this);
  }

  createBook = async (book) => {
    this.stateLoading = true;

    try {
      await this.model.createBook(book);
    } catch (e) {
      console.log(e);
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
}
