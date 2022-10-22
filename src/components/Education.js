import { useState } from "react";
import styles from "../styles/styles.css";

let EducationId = 0;
const Education = () => {
  const [Value, setValue] = useState("");
  const [EducationData, setEducationData] = useState([]);
  const addEducationValue = () => {
    setEducationData([...EducationData, { id: EducationId++, Value: Value }]); // create new array with old items and 1 new item at the end.
  };

  const EducationInformation = document.querySelector(".EducationInformation");

  return (
    <div className="EducationContainer">
      <div className="EducationInformation">Education:</div>
      <form
        className="SchoolForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addEducationValue();
        }}
      >
        <div className="SchoolInput">
          <input placeholder="School" /> <button>Add School</button>
        </div>
      </form>

      <form
        className="DegreeForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addEducationValue();
        }}
      >
        <div className="DegreeInput">
          <input placeholder="Degree" /> <button>Add Degree</button>
        </div>
      </form>

      <form
        className="TimeOfStudyForm"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addEducationValue();
          EducationInformation.style.display = "flex";
          EducationInformation.style.justifyContent = "center";
          EducationInformation.style.marginTop = "10px";
        }}
      >
        <div className="TimeOfStudyInput">
          <input placeholder="Time Of Study" />
          <button className="yearsButton">Add Years</button>
        </div>
      </form>

      <div className="cvEduContainer">
        {EducationData.map((data) => (
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

export default Education;
