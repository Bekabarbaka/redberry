import { useState } from "react";
import Button from "../../UI/Button";
import IsNotValidLogo from "../../UI/IsNotValidLogo";
import IsValidLogo from "../../UI/IsValidLogo";
import classes from "./PersonalInfo.module.css";

const PersonalInfo = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameInValid, setFirstNameInValid] = useState();
  const [secondName, setSecondName] = useState("");
  const [secondNameInvalid, setSecondNameInvalid] = useState();
  const [photo, setPhoto] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [email, setEmail] = useState("");
  const [emailIsvalid, setEmailIsvalid] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsvalid, setPhoneNumberIsvalid] = useState();

  const regEx = /^[\u10A0-\u10FF]*$/;
  const emailReGex = /^[a-zA-Z0-9.]+@redberry.ge$/;
  const phoneReGex = /^(\+?995)?(79\d{7}|5\d{8})$/;

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const secondNameChangeHandler = (event) => {
    setSecondName(event.target.value);
  };

  const photoChangeHandler = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
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
    const firstNameGe = regEx.test(firstName);
    setFirstNameInValid(firstName.trim().length < 2 || !firstNameGe);
  };

  const validateSecondNamehandler = () => {
    const secondNameGe = regEx.test(secondName);
    setSecondNameInvalid(secondName.trim().length < 2 || !secondNameGe);
  };

  const validateEmailhandler = () => {
    setEmailIsvalid(emailReGex.test(email));
  };

  const validatePhoneNumberhandler = () => {
    setPhoneNumberIsvalid(phoneReGex.test(phoneNumber));
  };

  return (
    <form className={classes.personalInfo}>
      <div className={classes.personalInfoHeader}>
        <h2 className={classes.headerTitle}>პირადი ინფო</h2>
        <p className={classes.pageNumber}>1/3</p>
      </div>

      <img src={photo} alt="fdd" />

      <div className={classes.userName}>
        <div className={classes.usernameSection}>
          <label
            className={`${classes.inputTitle} ${
              firstNameInValid === true && classes.nameInvalid
            }`}
          >
            სახელი
          </label>

          <input
            className={`${classes.inputName} ${
              (firstNameInValid === true && classes.invalid) ||
              (firstNameInValid === false && classes.isvalid)
            } `}
            type="text"
            placeholder="ანზორ"
            onChange={firstNameChangeHandler}
            onBlur={validateFirstNamehandler}
            value={firstName}
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
          <label
            className={`${classes.inputTitle} ${
              secondNameInvalid === true && classes.nameInvalid
            }`}
          >
            გვარი
          </label>
          <input
            className={`${classes.inputName} ${
              (secondNameInvalid === true && classes.invalid) ||
              (secondNameInvalid === false && classes.isvalid)
            } `}
            type="text"
            placeholder="მუმლაძე"
            onChange={secondNameChangeHandler}
            onBlur={validateSecondNamehandler}
            value={secondName}
          />

          {secondNameInvalid === false && (
            <IsValidLogo className={classes.isValidSecondName} />
          )}

          {secondNameInvalid === true && (
            <IsNotValidLogo className={classes.inValidSecondName} />
          )}
          <p className={classes.inputHint}>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
      </div>

      <div className={classes.upload}>
        <p className={classes.uploadName}>პირადი ფოტოს ატვირთვა</p>
        <input type="file" id="upload" hidden onChange={photoChangeHandler} />
        <label className={classes.uploadButton} htmlFor="upload">
          ატვირთვა
        </label>
      </div>

      <div className={classes.inputSection}>
        <label
          className={classes.inputTitle}
        >{`ჩემ შესახებ (არასავალდებულო)`}</label>
        <textarea
          className={`${classes.textarea} 
          ${aboutMe.trim().length > 0 ? classes.textareaFill : ""}`}
          placeholder="ზოგადი ინფო შენს შესახებ"
          onChange={aboutMeChangeHandler}
          value={aboutMe}
        />
      </div>

      <div className={classes.inputSection}>
        <label
          className={`${classes.inputTitle} ${
            emailIsvalid === false && classes.nameInvalid
          }`}
        >
          ელ.ფოსტა
        </label>
        <input
          type="email"
          className={`${classes.inputStyle} ${
            (emailIsvalid === true && classes.isvalid) ||
            (emailIsvalid === false && classes.invalid)
          } `}
          placeholder="anzorr666@redberry.ge"
          onChange={emailChangeHandler}
          onBlur={validateEmailhandler}
          value={email}
        />
        {emailIsvalid === true && (
          <IsValidLogo className={classes.isValidEmail} />
        )}

        {emailIsvalid === false && (
          <IsNotValidLogo className={classes.inValidEmail} />
        )}
        <p className={classes.inputHint}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
      </div>

      <div className={classes.inputSection}>
        <label
          className={`${classes.inputTitle} ${
            phoneNumberIsvalid === false && classes.nameInvalid
          }`}
        >
          მობილურის ნომერი
        </label>
        <input
          type="text"
          className={`${classes.inputStyle} ${
            (phoneNumberIsvalid === true && classes.isvalid) ||
            (phoneNumberIsvalid === false && classes.invalid)
          }`}
          placeholder="+995 551 12 34 56"
          onChange={phoneNumberChangeHandler}
          onBlur={validatePhoneNumberhandler}
          value={phoneNumber}
        />
        {phoneNumberIsvalid === true && (
          <IsValidLogo className={classes.isValidPhone} />
        )}

        {phoneNumberIsvalid === false && (
          <IsNotValidLogo className={classes.inValidPhone} />
        )}
        <p className={classes.inputHint}>
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>

      <Button
        className={classes.nextBtn}
        onClick={() => {
          props.myprops.setTurnPage("2");
        }}
      >
        შემდეგი
      </Button>
    </form>
  );
};

export default PersonalInfo;
