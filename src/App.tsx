import { useState } from "react";
import "./App.css";

type ItemType = {
  title: string;
  description: string;
};

type ItemsType = ItemType[];

function App() {
  const [items, setItems] = useState<ItemsType>([]);

  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const addItem = () => {
    const item: ItemType = { title: taskName, description: taskDescription };
    if (item.title !== "" && item.description !== "") {
      setItems((prev) => [...prev, item]);
      setTaskName("");
      setTaskDescription("");
    }
  };

  const clearTaskList = () => {
    setItems([]);
  };
  return (
    <div className="container">
      <div className="items">
        {items.map((i) => {
          return <Item item={i} />;
        })}
      </div>
      <div className="input-wrapper">
        <label>Task name</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
      </div>

      <div className="input-wrapper">
        <label>Description</label>
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>

      <div className="actions">
        <button type="button" onClick={addItem}>
          Novi task
        </button>
        <button type="button" onClick={clearTaskList}>
          Clear task list
        </button>
      </div>
    </div>
  );
}

export default App;

type ItemPropsType = { item: ItemType };

const Item = (props: ItemPropsType) => {
  return (
    <div className="item-wrapper">
      <p>
        {props.item.title} {props.item.description}
      </p>
    </div>
  );
};
