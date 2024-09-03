import React from "react";
import { useState, useEffect } from "react";
function ListItems() {
  const [inpValue, setInpValue] = useState("");
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, []);
  function addPlan() {
    setPlans((prewPlans) => [...prewPlans, inpValue]);
  }

  return (
    <>
      <input
        onChange={(event) => setInpValue(event.target.value)}
        type="text"
        value={inpValue}
      />
      <button onClick={addPlan}>Add</button>
      <div>
        <p>Plan</p>
        <ul>
          {plans.map((onePlan, ind) => (
            <li key={ind}>{onePlan}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListItems;
