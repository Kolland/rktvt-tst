import Http from "../../Shared/Http.js";

export default class BooksModel {
  getAll = async () => await Http.get("/");

  createBook = async ({ id, ownerId, name, author }) =>
    await Http.post("/", { id, ownerId, name, author });
}
