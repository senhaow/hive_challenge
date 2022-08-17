import styles from "./Dropdown.module.css";
import { useState } from "react";

function Item({ name, multi, onSelect, ind, selState }) {
  const [select, setSelect] = useState(selState);

  return multi ? (
    <div className={select ? styles.selected : styles.wrapper}>
      <input
        id={ind}
        type="checkbox"
        checked={select}
        onChange={(e) => {
          onSelect(e, ind);
          setSelect((prev) => !prev);
        }}
      />
      <label htmlFor={ind}>{name}</label>
    </div>
  ) : (
    <div
      className={select ? styles.selected : styles.wrapper}
      onClick={() => onSelect(ind)}
    >
      {name}
    </div>
  );
}

export default Item;
