import Http from "../../Shared/Http.js";

export default class BooksModel {
  getAll = async () => await Http.get("/");

  getPrivate = async () => {
    const all = await Http.get("/");

    return all.filter((item) => item.isPrivate);
  };

  createBook = async ({ id, ownerId, name, author, isPrivate }) =>
    await Http.post("/", { id, ownerId, name, author, isPrivate });
}
