import React, { useState } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import BooksController from "./Components/Books/Books.ctrl";
import "./styles.css";

function App() {
  const [controller] = useState(new BooksController());
  const handleOnClick = async () => {
    await controller.createBook({
      id: 1914,
      ownerId: 2022,
      name: "The First World War",
      author: "People"
    });
    await controller.loadList();
  };

  React.useEffect(() => {
    controller.loadList();
  }, [controller]);

  if (controller.stateLoading) {
    return <>Loading...</>;
  }

  if (controller.error) {
    return (
      <>
        <div>The error bellow has happend</div>
        <div className="error">{controller.error.toString()}</div>
      </>
    );
  }

  return (
    <div>
      {controller.list.map((book, i) => (
        <div key={i}>
          {book.author}: {book.name}
        </div>
      ))}
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
}

const ObservedApp = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<ObservedApp />, rootElement);
