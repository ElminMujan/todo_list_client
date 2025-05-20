import { useState } from "react";
import "./App.css";

type ItemsType = number[];

function App() {
  const [items, setItems] = useState<ItemsType>([1, 2, 3, 4]);

  const addItem = () => {
    const n = items.slice(-1)[0] + 1;
    setItems((prev) => [...prev, n]);
  };

  return (
    <div>
      {items.map((i) => {
        return <Item item={i} label={"Predmet: "} />;
      })}

      <button type="button" onClick={addItem}>
        Novi task
      </button>
    </div>
  );
}

export default App;

type ItemPropsType = { item: number; label: string };

const Item = (props: ItemPropsType) => {
  return (
    <div>
      <p>
        {props.label} {props.item}
      </p>
    </div>
  );
};
