export default function ListItem({ item, items, setItems }) {
  const { id, description, checked } = item;

  const handleDelete = () => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
    // console.log(items);
  };

  const handleCBoxChange = () => {
    const newList = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !checked
        };
      }
      return item;
    });
    setItems(newList);
    // setItems(newList);
  };

  return (
    <div className="li-item">
      <input
        className="c-box"
        type="checkbox"
        checked={checked}
        onChange={handleCBoxChange}
      />
      <p className={`desc ${checked && "checked"}`}>{description}</p>
      <button className="close" onClick={handleDelete}>
        <span className="x" role="img" aria-label="accessibilty-emoji">
          ❌
        </span>
      </button>
    </div>
  );
}
