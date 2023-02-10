import { useState } from "react";
import Button from "../../UI/Button";
import IsNotValidLogo from "../../UI/IsNotValidLogo";
import IsValidLogo from "../../UI/IsValidLogo";
import classes from "./PersonalInfo.module.css";

const PersonalInfo = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameInValid, setFirstNameInValid] = useState();
  const [secondName, setSecondName] = useState(undefined);
  const [aboutMe, setAboutMe] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);

  const regEx = /^[\u10A0-\u10FF]*$/;
  const name = regEx.test(firstName);
  console.log(name);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const secondNameChangeHandler = (event) => {
    setSecondName(event.target.value);
  };

  const aboutMeChangeHandler = (event) => {
    setAboutMe(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const validateFirstNamehandler = () => {
    setFirstNameInValid(firstName.trim().length < 2);
  };

  return (
    <form className={classes.personalInfo}>
      <div className={classes.personalInfoHeader}>
        <h2 className={classes.headerTitle}>პირადი ინფო</h2>
        <p className={classes.pageNumber}>1/3</p>
      </div>

      <div className={classes.userName}>
        <div className={classes.usernameSection}>
          <label className={classes.inputTitle}>სახელი</label>

          <input
            className={`${classes.inputName} ${
              (firstNameInValid === true && classes.invalid) ||
              (firstNameInValid === false && classes.isvalid)
            } `}
            type="text"
            placeholder="ანზორ"
            onChange={firstNameChangeHandler}
            onBlur={validateFirstNamehandler}
            onKeyDown={(e) => {
              // regEx.test(e.key);
              // console.log(e.key);
            }}
            value={firstName}
            lang="ka-GE"
          />
          {firstNameInValid === false && (
            <IsValidLogo className={classes.isValidName} />
          )}

          {firstNameInValid === true && (
            <IsNotValidLogo className={classes.inValidName} />
          )}

          <p className={classes.inputHint}>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>

        <div className={classes.usernameSection}>
          <label className={classes.inputTitle}>გვარი</label>
          <input
            className={classes.inputName}
            type="text"
            placeholder="მუმლაძე"
            onChange={secondNameChangeHandler}
            value={secondName}
          />
          <p className={classes.inputHint}>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
      </div>

      <div className={classes.upload}>
        <p className={classes.uploadName}>პირადი ფოტოს ატვირთვა</p>
        <input type="file" id="upload" hidden />
        <label className={classes.uploadButton} htmlFor="upload">
          ატვირთვა
        </label>
      </div>

      <div className={classes.inputSection}>
        <label
          className={classes.inputTitle}
        >{`ჩემ შესახებ (არასავალდებულო)`}</label>
        <textarea
          className={classes.textarea}
          placeholder="ზოგადი ინფო შენს შესახებ"
          onChange={aboutMeChangeHandler}
          value={aboutMe}
        />
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>ელ.ფოსტა</label>
        <input
          type="email"
          className={classes.inputStyle}
          placeholder="anzorr666@redberry.ge"
          onChange={emailChangeHandler}
          value={email}
        />
        <p className={classes.inputHint}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
      </div>

      <div className={classes.inputSection}>
        <label className={classes.inputTitle}>მობილურის ნომერი</label>
        <input
          type="text"
          className={classes.inputStyle}
          placeholder="+995 551 12 34 56"
          onChange={phoneNumberChangeHandler}
          value={phoneNumber}
        />
        <p className={classes.inputHint}>
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>

      {/* <button className={classes.isvalid}>{isvalido}</button> */}

      <Button
        className={classes.nextBtn}
        onClick={() => {
          props.setTurnPage("2");
        }}
      >
        შემდეგი
      </Button>
    </form>
  );
};

export default PersonalInfo;
