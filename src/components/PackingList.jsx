import ListItem from "./ListItem";

export default function PackingList({ items, setItems }) {
  return (
    <div className="list">
      {items.map((item, index) => {
        return (
          <ListItem key={index} item={item} items={items} setItems={setItems} />
        );
      })}
    </div>
  );
}
