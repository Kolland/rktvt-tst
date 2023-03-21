import React from "react";
import { observer } from "mobx-react";

function BookList({ controller }) {
  const list = controller.privateMode
    ? controller.privateList
    : controller.list;

  const handleOnClick = controller.privateMode
    ? async () => {
        await controller.createBook({
          id: 999,
          ownerId: 666,
          name: "The Private Book",
          author: "Some Author",
          isPrivate: true
        });

        await controller.loadPrivateList();
      }
    : async () => {
        await controller.createBook({
          id: 1914,
          ownerId: 2022,
          name: "The First World War",
          author: "People"
        });

        await controller.loadList();
      };

  return (
    <>
      <div>
        <label>
          <input
            onChange={() => (controller.privateMode = false)}
            type="radio"
            value="public"
            name="mode"
            checked={controller.privateMode === false}
          />{" "}
          Public
        </label>
        <label>
          <input
            onChange={() => (controller.privateMode = true)}
            type="radio"
            value="private"
            name="mode"
            checked={controller.privateMode === true}
          />{" "}
          Private
        </label>
      </div>
      {list.map((book, i) => (
        <div key={i}>
          {book.author}: {book.name}
        </div>
      ))}
      <button onClick={handleOnClick}>Add</button>
    </>
  );
}

export default observer(BookList);
