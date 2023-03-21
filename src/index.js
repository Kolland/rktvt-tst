import React, { useState } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import BooksController from "./Components/Books/Books.ctrl";
import "./styles.css";
import BookList from "./Components/Books/BookList";

function App() {
  const [controller] = useState(new BooksController());
  const controllerInit = () => {
    controller.loadList();
    controller.loadPrivateList();
  };

  React.useEffect(controllerInit, [controller]);

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

  return <BookList controller={controller} />;
}

const ObservedApp = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<ObservedApp />, rootElement);
