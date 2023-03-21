import Http from "../src/Shared/Http";
import BookModel from "../src/Components/Books/Books.model";

const bookModel = new BookModel();

it("api work", async () => {
  await Http.get("/");
});

it("book is createable", async () => {
  const bookToCreate = {
    id: 1914,
    ownerId: 2022,
    name: "The First World War",
    author: "People"
  };

  await bookModel.createBook(bookToCreate);

  const books = await bookModel.getAll();
  const bookIsCreated = books.filter((book) => book.id === bookToCreate.id)
    .length;

  expect(bookIsCreated > 0).toBe(true);
});

it("book has necessary properties", async () => {
  const books = await bookModel.getAll();

  let passed = true;

  books.forEach((book) => {
    passed = "id" in book;
    passed = "name" in book;
    passed = "ownerId" in book;
    passed = "author" in book;
  });

  expect(passed).toBe(true);
});
