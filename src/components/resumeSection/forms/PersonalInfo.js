import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import IsNotValidLogo from "../../UI/IsNotValidLogo";
import IsValidLogo from "../../UI/IsValidLogo";
import classes from "./PersonalInfo.module.css";

const PersonalInfo = (props) => {
  const [firstNameInValid, setFirstNameInValid] = useState();
  const [secondNameInvalid, setSecondNameInvalid] = useState();
  const [emailIsvalid, setEmailIsvalid] = useState();
  const [phoneNumberIsvalid, setPhoneNumberIsvalid] = useState();

  const regEx = /^[\u10A0-\u10FF]*$/;
  const emailReGex = /^[a-zA-Z0-9.]+@redberry.ge$/;
  const phoneReGex = /^(\+?995)?(79\d{7}|5\d{8})$/;

  const firstNameChangeHandler = (event) => {
    props.personalInfo.setFirstName(event.target.value);

    sessionStorage.setItem("firstName", event.target.value);
  };

  const secondNameChangeHandler = (event) => {
    props.personalInfo.setSecondName(event.target.value);

    sessionStorage.setItem("secondName", event.target.value);
  };

  const photoChangeHandler = (event) => {
    props.personalInfo.setPhoto(URL.createObjectURL(event.target.files[0]));

    sessionStorage.setItem("photo", URL.createObjectURL(event.target.files[0]));
  };

  const aboutMeChangeHandler = (event) => {
    props.personalInfo.setAboutMe(event.target.value);

    sessionStorage.setItem("aboutMe", event.target.value);
  };

  const emailChangeHandler = (event) => {
    props.personalInfo.setEmail(event.target.value);

    sessionStorage.setItem("email", event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    props.personalInfo.setPhoneNumber(event.target.value);

    sessionStorage.setItem("phoneNumber", event.target.value);
  };

  const validateFirstNamehandler = () => {
    const firstNameGe = regEx.test(props.personalInfo.firstName);
    setFirstNameInValid(
      props.personalInfo.firstName.trim().length < 2 || !firstNameGe
    );
  };

  const validateSecondNamehandler = () => {
    const secondNameGe = regEx.test(props.personalInfo.secondName);
    setSecondNameInvalid(
      props.personalInfo.secondName.trim().length < 2 || !secondNameGe
    );
  };

  const validateEmailhandler = () => {
    setEmailIsvalid(emailReGex.test(props.personalInfo.email));
  };

  const validatePhoneNumberhandler = () => {
    setPhoneNumberIsvalid(phoneReGex.test(props.personalInfo.phoneNumber));
  };

  const validatePersonalInfoHandler = (event) => {
    event.preventDefault();

    firstNameInValid === false &&
    firstNameInValid === false &&
    emailIsvalid === true &&
    phoneNumberIsvalid === true
      ? props.personalInfo.setTurnPage("2")
      : props.personalInfo.setTurnPage("1");
  };

  useEffect(() => {
    props.personalInfo.setFirstName(sessionStorage.getItem("firstName"));
    props.personalInfo.setSecondName(sessionStorage.getItem("secondName"));
    props.personalInfo.setPhoto(sessionStorage.getItem("photo"));
    props.personalInfo.setAboutMe(sessionStorage.getItem("aboutMe"));
    props.personalInfo.setEmail(sessionStorage.getItem("email"));
    props.personalInfo.setPhoneNumber(sessionStorage.getItem("phoneNumber"));
  });

  return (
    <form
      className={classes.personalInfo}
      onSubmit={validatePersonalInfoHandler}
    >
      <div className={classes.personalInfoHeader}>
        <h2 className={classes.headerTitle}>?????????????????? ????????????</h2>
        <p className={classes.pageNumber}>1/3</p>
      </div>

      <div className={classes.userName}>
        <div className={classes.usernameSection}>
          <label
            className={`${classes.inputTitle} ${
              firstNameInValid === true && classes.nameInvalid
            }`}
          >
            ??????????????????
          </label>

          <input
            className={`${classes.inputName} ${
              (firstNameInValid === true && classes.invalid) ||
              (firstNameInValid === false && classes.isvalid)
            } `}
            type="text"
            placeholder="???????????????"
            onChange={firstNameChangeHandler}
            onBlur={validateFirstNamehandler}
            value={props.personalInfo.firstName}
          />
          {firstNameInValid === false && (
            <IsValidLogo className={classes.isValidName} />
          )}

          {firstNameInValid === true && (
            <IsNotValidLogo className={classes.inValidName} />
          )}

          <p className={classes.inputHint}>????????????????????? 2 ?????????, ????????????????????? ??????????????????</p>
        </div>

        <div className={classes.usernameSection}>
          <label
            className={`${classes.inputTitle} ${
              secondNameInvalid === true && classes.nameInvalid
            }`}
          >
            ???????????????
          </label>
          <input
            className={`${classes.inputName} ${
              (secondNameInvalid === true && classes.invalid) ||
              (secondNameInvalid === false && classes.isvalid)
            } `}
            type="text"
            placeholder="?????????????????????"
            onChange={secondNameChangeHandler}
            onBlur={validateSecondNamehandler}
            value={props.personalInfo.secondName}
          />

          {secondNameInvalid === false && (
            <IsValidLogo className={classes.isValidSecondName} />
          )}

          {secondNameInvalid === true && (
            <IsNotValidLogo className={classes.inValidSecondName} />
          )}
          <p className={classes.inputHint}>????????????????????? 2 ?????????, ????????????????????? ??????????????????</p>
        </div>
      </div>

      <div className={classes.upload}>
        <p className={classes.uploadName}>?????????????????? ??????????????? ????????????????????????</p>
        <input type="file" id="upload" hidden onChange={photoChangeHandler} />
        <label className={classes.uploadButton} htmlFor="upload">
          ????????????????????????
        </label>
      </div>

      <div className={classes.inputSection}>
        <label
          className={classes.inputTitle}
        >{`????????? ????????????????????? (??????????????????????????????????????????)`}</label>
        <textarea
          className={`${classes.textarea} 
          ${
            props.personalInfo.aboutMe !== null &&
            props.personalInfo.aboutMe.trim().length !== 0
              ? classes.textareaFill
              : ""
          }`}
          placeholder="?????????????????? ???????????? ???????????? ?????????????????????"
          onChange={aboutMeChangeHandler}
          value={props.personalInfo.aboutMe}
        />
      </div>

      <div className={classes.inputSection}>
        <label
          className={`${classes.inputTitle} ${
            emailIsvalid === false && classes.nameInvalid
          }`}
        >
          ??????.???????????????
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
          value={props.personalInfo.email}
        />
        {emailIsvalid === true && (
          <IsValidLogo className={classes.isValidEmail} />
        )}

        {emailIsvalid === false && (
          <IsNotValidLogo className={classes.inValidEmail} />
        )}
        <p className={classes.inputHint}>???????????? ???????????????????????????????????? @redberry.ge-??????</p>
      </div>

      <div className={classes.inputSection}>
        <label
          className={`${classes.inputTitle} ${
            phoneNumberIsvalid === false && classes.nameInvalid
          }`}
        >
          ??????????????????????????? ??????????????????
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
          value={props.personalInfo.phoneNumber}
        />
        {phoneNumberIsvalid === true && (
          <IsValidLogo className={classes.isValidPhone} />
        )}

        {phoneNumberIsvalid === false && (
          <IsNotValidLogo className={classes.inValidPhone} />
        )}
        <p className={classes.inputHint}>
          ???????????? ?????????????????????????????????????????? ????????????????????? ??????????????????????????? ?????????????????? ?????????????????????
        </p>
      </div>

      <Button
        className={classes.nextBtn}
        type="submit"
        onClick={() => {
          props.personalInfo.setPersonalInfoSection(true);
        }}
      >
        ?????????????????????
      </Button>
    </form>
  );
};

export default PersonalInfo;
