import { useEffect, useState } from "react";
import "../styles.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import data from "./seeder";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items} setItems={setItems} />
      <Stats />
    </div>
  );
}
