import { useState } from "react";
import styles from "../styles/styles.css";

let ExperienceId = 0;
const Experience = () => {
  const [Value, setValue] = useState("");
  const [ExperienceData, setExperienceData] = useState([]);
  const addExperienceValue = () => {
    setExperienceData([
      ...ExperienceData,
      { id: ExperienceId++, Value: Value },
    ]); // create new array with old items and 1 new item at the end.
  };

  const ExperienceInformation = document.querySelector(
    ".ExperienceInformation"
  );
  return (
    <div className="ExperienceContainer">
      <div className="ExperienceInformation">Professional Experience:</div>
      <form
        className="CompanyForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addExperienceValue();
        }}
      >
        <div className="CompanyInput">
          <input placeholder="Company" /> <button>Add Company</button>
        </div>
      </form>

      <form
        className="PositionForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addExperienceValue();
        }}
      >
        <div className="PositionInput">
          <input placeholder="Position" /> <button>Add Position</button>
        </div>
      </form>

      <form
        className="TasksForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addExperienceValue();
        }}
      >
        <div className="TasksInput">
          <textarea placeholder="Tasks" />
          <button className="TasksButton">Add Tasks</button>
        </div>
      </form>

      <form
        className="DatesForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addExperienceValue();
          ExperienceInformation.style.display = "flex";
          ExperienceInformation.style.justifyContent = "center";
          ExperienceInformation.style.marginTop = "10px";
        }}
      >
        <div className="DatesInput">
          <input placeholder="Dates" />
          <button className="DatesButton">Add Dates</button>
        </div>
      </form>

      <div className="cvExpContainer">
        {ExperienceData.map((data) => (
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

export default Experience;
