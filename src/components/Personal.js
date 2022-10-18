import { useState } from "react";
import styles from "../styles/styles.css";

let PersonalId = 0;
const Personal = () => {
  const [Value, setValue] = useState("");
  //“setValue” function sets state variable "Value". useState("") call initializes variable "Value" with an empty string.
  const [PersonalData, setPersonalData] = useState([]);
  //“setPersonalData” function sets state variable "PersonalData". useState([]) call initializes variable "PersonalData" with an empty array.
  const NameInput = document.querySelector(".NameInput");
  const EmailInput = document.querySelector(".EmailInput");
  const NumberInput = document.querySelector(".NumberInput");
  return (
    <div className="PersonalContainer">
      <div>General Information:</div>
      <form
        className="NameForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          setPersonalData([
            ...PersonalData,
            { id: PersonalId++, Value: Value },
          ]); // create new array with old items and 1 new item at the end.
          NameInput.style.display = "none";
        }}
      >
        <div className="NameInput">
          <input placeholder="Name" /> <button>Add Name</button>
        </div>
      </form>

      <form
        className="EmailForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          setPersonalData([
            ...PersonalData,
            { id: PersonalId++, Value: Value },
          ]); // create new array with old items and 1 new item at the end.
          EmailInput.style.display = "none";
        }}
      >
        <div className="EmailInput">
          <input placeholder="Email" /> <button>Add Email</button>
        </div>
      </form>

      <form
        className="NumberForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          setPersonalData([
            ...PersonalData,
            { id: PersonalId++, Value: Value },
          ]); // create new array with old items and 1 new item at the end.
          NumberInput.style.display = "none";
        }}
      >
        <div className="NumberInput">
          <input placeholder="Phone Number" /> <button>Add Phone Number</button>
        </div>
      </form>

      <div className="cvContainer">
        {PersonalData.map((data) => (
          <li key={data.id}>{data.Value} </li>
        ))}
      </div>
    </div>
  );
};

export default Personal;
