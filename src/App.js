import styles from "./App.module.css";
import Item from "./components/Item";
import Dropdown from "./components/Dropdown";

function App() {
  let data = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Lyndsay Bonne",
    "Mo Totty",
  ];

  //Pass in data array to initiate the Dropdown component
  //Dropdown component takes two input props:
  //    **Data:  Array of item
  //    **multi: true or false
  //        (Used to indicate whether you are creating a
  //          component that takes multiple selections)
  return (
    <div>
      <div className={styles.containerdiv}>
        <h2>Multi Select Component</h2>
        <Dropdown data={data} multi={true} />
      </div>
      <div className={styles.containerdiv}>
        <h2>Single Select Component</h2>
        <Dropdown data={data} multi={false} />
      </div>
    </div>
  );
}

export default App;
