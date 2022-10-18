import { useState } from "react";
import styles from "../styles/styles.css";

let EducationId = 0;
const Education = () => {
  const [Value, setValue] = useState("");
  //“setName” function sets state variable "Name". useState("") call initializes variable "Name" with an empty string.
  const [EducationData, setEducationData] = useState([]);
  //“setEducationData” function sets state variable "EducationData". useState([]) call initializes variable "PersonalData" with an empty array.
  const SchoolInput = document.querySelector(".SchoolInput");
  const DegreeInput = document.querySelector(".DegreeInput");
  const TimeOfStudyInput = document.querySelector(".TimeOfStudyInput");
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
          setEducationData([
            ...EducationData,
            { id: EducationId++, Value: Value },
          ]); // create new array with old items and 1 new item at the end.
          SchoolInput.style.display = "none";
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
          setEducationData([
            ...EducationData,
            { id: EducationId++, Value: Value },
          ]); // create new array with old items and 1 new item at the end.
          DegreeInput.style.display = "none";
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
          setEducationData([
            ...EducationData,
            { id: EducationId++, Value: Value },
          ]); // create new array with old items and 1 new item at the end.
          TimeOfStudyInput.style.display = "none";
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
          <li key={data.id}>{data.Value} </li>
        ))}
      </div>
    </div>
  );
};

export default Education;
