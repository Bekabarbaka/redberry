import classes from "./Education.module.css";
import Button from "../../UI/Button";
import { useEffect, useState } from "react";
import IsValidLogo from "../../UI/IsValidLogo";
import IsNotValidLogo from "../../UI/IsNotValidLogo";

const Education = (props) => {
  const [schoolIsvalid, setSchoolIsvalid] = useState();
  const [degree, setDegree] = useState();

  const schoolChangeHandler = (event) => {
    props.education.setSchool(event.target.value);

    sessionStorage.setItem("school", event.target.value);
  };

  const degreeChangeHandler = (event) => {
    props.education.setDegree(event.target.value);

    sessionStorage.setItem("degree", event.target.value);
  };

  const schoolEndingDateChangeHandler = (event) => {
    props.education.setSchoolEndingDate(event.target.value);

    sessionStorage.setItem("schoolEndingDate", event.target.value);
  };

  const aboutEducationChangeHandler = (event) => {
    props.education.setAboutEucation(event.target.value);

    sessionStorage.setItem("aboutAducation", event.target.value);
  };

  const validateSchoolHandler = () => {
    setSchoolIsvalid(props.education.school.trim().length < 2);
  };

  const getApiData = async () => {
    const response = await fetch(
      "https://resume.redberryinternship.ge/api/degrees"
    ).then((response) => response.json());

    setDegree(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    props.education.setSchool(sessionStorage.getItem("school"));
    props.education.setDegree(sessionStorage.getItem("degree"));
    props.education.setSchoolEndingDate(
      sessionStorage.getItem("schoolEndingDate")
    );
    props.education.setAboutEucation(sessionStorage.getItem("aboutAducation"));
  });

  const validateEducationHandler = () => {
    if (
      schoolIsvalid === false &&
      props.education.degree &&
      props.education.schoolEndingDate &&
      props.education.aboutEducation
    ) {
      props.education.setTurnPage("");
    }
    if (props.education.school === undefined) {
      props.education.setTurnPage(3);
    } else {
      props.education.setTurnPage(3);
    }
  };

  return (
    <form
      className={`${classes.eucationPage}  `}
      onSubmit={validateEducationHandler}
    >
      <div className={classes.educationInfoHeader}>
        <h2 className={classes.headerTitle}>განათლება</h2>
        <p className={classes.pageNumber}>3/3</p>
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>სასწავლებელი</label>
        <input
          className={`${classes.inputStyle} ${
            (schoolIsvalid === true && classes.invalid) ||
            (schoolIsvalid === false && classes.isvalid)
          }`}
          type="text"
          placeholder="სასწავლებელი"
          onChange={schoolChangeHandler}
          onBlur={validateSchoolHandler}
          value={props.education.school}
        />
        {schoolIsvalid === false && (
          <IsValidLogo className={classes.isValidSchool} />
        )}

        {schoolIsvalid === true && (
          <IsNotValidLogo className={classes.inValidSchool} />
        )}
        <p className={classes.inputHint}>მინიმუმ 2 სიმბოლო</p>
      </div>

      <div className={classes.degreeInputSection}>
        <div className={classes.degreeContainer}>
          <label className={classes.inputTitle}>ხარისხი</label>
          <select
            className={`${classes.selectDegree} ${
              props.education.degree !== null &&
              props.education.degree.trim().length > 0
                ? classes.fill
                : ""
            }`}
            onChange={degreeChangeHandler}
            value={props.education.degree}
          >
            <option value="" disabled selected hidden>
              აირჩიეთ ხარისხი
            </option>
            {degree &&
              degree.map((degree, index) => (
                <option key={index} className={classes.degree}>
                  {degree.title}
                </option>
              ))}
          </select>
        </div>

        <div className={classes.degreeContainer}>
          <label className={classes.inputTitle}>დამთავრების რიცხვი</label>
          <input
            type="date"
            className={`${classes.selectDegree} ${
              props.education.schoolEndingDate !== null &&
              props.education.schoolEndingDate.trim().length > 0
                ? classes.fill
                : ""
            }`}
            onChange={schoolEndingDateChangeHandler}
            value={props.education.schoolEndingDate}
          />
        </div>
      </div>

      <div className={classes.textareaSection}>
        <label className={classes.inputTitle}>აღწერა</label>
        <textarea
          placeholder="განათლების აღწერა"
          className={`${classes.textareaInput} ${
            props.education.aboutEducation !== null &&
            props.education.aboutEducation.trim().length > 0
              ? classes.fill
              : ""
          }`}
          onChange={aboutEducationChangeHandler}
          value={props.education.aboutEducation}
        ></textarea>
      </div>

      <div className={classes.btnContainer}>
        <div className={classes.addMoreSchoolBtn}>
          სხვა სასწავლებლის დამატება
        </div>
      </div>

      <div className={classes.nextPrevBtn}>
        <Button
          onClick={() => {
            props.education.setTurnPage("2");
          }}
        >
          უკან
        </Button>
        <Button
          type="submit"
          onClick={() => {
            props.education.setEducationSection(true);
            props.education.setPopUp(true);
          }}
        >
          შემდეგ
        </Button>
      </div>
    </form>
  );
};

export default Education;
