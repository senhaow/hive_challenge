import Item from "./Item";
import { useState } from "react";
import styles from "./Dropdown.module.css";

//This component takes care of the general logic of expanding menu, setting selection.
function Dropdown({ multi, data }) {
  const [selected, setSelect] = useState([]);
  const [expand, setExpand] = useState(false);

  //this function handles multiple selection with checkbox
  function handleMulti(e, ind) {
    if (e.target.checked) {
      setSelect((prev) => [...prev, ind]);
    } else {
      setSelect((prev) => prev.filter((val) => val !== ind));
    }
  }

  //This function handles single selection with checkbox
  function handleSingle(ind) {
    setSelect([ind]);
    setExpand(false);
  }

  return (
    <div>
      <div className={styles.dropDownContainer}>
        <div className={styles.headingContainer}>
          <p>Make a Selection</p>
          <button onClick={() => setExpand((prev) => !prev)}>Drop Down</button>
          {selected.length !== 0 ? (
            <button
              onClick={() => {
                setSelect([]);
                setExpand(false);
              }}
            >
              Reset
            </button>
          ) : null}
        </div>
        {expand
          ? data.map((ele, ind) => (
              <Item
                name={ele}
                multi={multi}
                onSelect={multi ? handleMulti : handleSingle}
                ind={ind}
                key={ind}
                selState={selected.includes(ind)}
              />
            ))
          : null}
      </div>
      <h4>
        Selected:
        <h4 style={{ color: "grey" }}>
          {selected.map((ele) => (multi ? `${data[ele]}, ` : `${data[ele]}`))}
        </h4>
      </h4>
    </div>
  );
}

export default Dropdown;
