import { useState } from "react";
import styles from "../styles/styles.css";

let PersonalId = 0;
const Personal = () => {
  const [Value, setValue] = useState("");
  const [PersonalData, setPersonalData] = useState([]);

  const addPersonalValue = () => {
    setPersonalData([...PersonalData, { id: PersonalId++, Value: Value }]);
    // create new array with old items and 1 new item at the end.
  };

  const GeneralInformation = document.querySelector(".GeneralInformation");
  return (
    <div className="PersonalContainer">
      <div className="GeneralInformation">General Information:</div>
      <form
        className="NameForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addPersonalValue();
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
          addPersonalValue();
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
          addPersonalValue();
          GeneralInformation.style.display = "flex";
          GeneralInformation.style.justifyContent = "center";
        }}
      >
        <div className="NumberInput">
          <input placeholder="Phone Number" /> <button>Add Phone Number</button>
        </div>
      </form>

      <div className="cvPersonalContainer">
        {PersonalData.map((data) => (
          <li
            contentEditable="true"
            suppressContentEditableWarning={true}
            key={data.id}
          >
            {data.Value}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Personal;
