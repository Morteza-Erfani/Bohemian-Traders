import React, { useEffect, useState } from "react";
import ReCaptchaV2 from "react-google-recaptcha";

// Styles
import styles from "./SignUp.module.css";

// Assets
import redCross from "../../assets/redCross.svg";
import check from "../../assets/check.svg";

// functions
import { validateEmail, validatePass } from "../../helpers/functions";

const country = [
  {
    name: "Australia",
    states: [
      "New South Wales",
      "Queensland",
      "Northern Territory",
      "Western Australia",
      "South Australia",
      "Victoria",
      "the Australian Capital Territory",
      "Tasmania",
    ],
  },
  {
    name: "United State",
    states: ["California", "Minnesota", "Oregon", "Kansas"],
  },
];

const SignUp = () => {
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPassErr, setConfirmPassErr] = useState("");
  const [fNameErr, setFName] = useState("");
  const [lNameErr, setLName] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [address1Err, setAddress1Err] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [countryErr, setCountryErr] = useState("");
  const [stateErr, setStateErr] = useState("");
  const [states, setStates] = useState([]);
  const [zipErr, setZipErr] = useState("");
  const [policyCheck, setPolicyCheck] = useState("uncheck");

  useEffect(() => {
    document.title = "Bohemian Traders - Create Account";
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>NEW ACCOUNT</h1>
      <form className={styles.form}>
        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="email"
            inputMode="email"
            id="email"
            name="email"
            onChange={(e) => {
              if (e.target.value === "") {
                setEmailErr("empty");
              } else if (!validateEmail(e.target.value)) {
                setEmailErr("invalid");
              } else {
                setEmailErr("valid");
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                setEmailErr("empty");
              } else if (!validateEmail(e.target.value)) {
                setEmailErr("invalid");
              } else {
                setEmailErr("valid");
              }
            }}
            className={
              emailErr === "invalid" || emailErr === "empty"
                ? styles.invalid
                : emailErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p
              className={
                emailErr === "invalid" || emailErr === "empty"
                  ? styles.show
                  : ""
              }
            >
              <img src={redCross} alt="cross" />
              You must enter a valid email.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="password">PASSWORD</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="password"
            inputMode="password"
            id="password"
            name="password"
            onChange={(e) => {
              setPass(e.target.value);
              if (e.target.value === "") {
                setPassErr("empty");
              } else if (!validatePass(e.target.value)) {
                setPassErr("invalid");
              } else {
                setPassErr("valid");
              }
            }}
            onBlur={(e) => {
              setPass(e.target.value);
              if (e.target.value === "") {
                setPassErr("empty");
              } else if (!validatePass(e.target.value)) {
                setPassErr("invalid");
              } else {
                setPassErr("valid");
              }
            }}
            className={
              passErr === "invalid" || passErr === "empty"
                ? styles.invalid
                : passErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={passErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              You must enter a password.
            </p>
            <p className={passErr === "invalid" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              Passwords must be at least 7 characters and contain both
              alphabetic and numeric characters.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="password"
            inputMode="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => {
              if (e.target.value === "") {
                setConfirmPassErr("empty");
              } else if (e.target.value !== pass) {
                setConfirmPassErr("notMatch");
              } else {
                setConfirmPassErr("match");
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                setConfirmPassErr("empty");
              } else if (e.target.value !== pass) {
                setConfirmPassErr("notMatch");
              } else {
                setConfirmPassErr("match");
              }
            }}
            className={
              confirmPassErr === "notMatch" || confirmPassErr === "empty"
                ? styles.invalid
                : confirmPassErr === "match"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={confirmPassErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              You must enter a password.
            </p>
            <p className={confirmPassErr === "notMatch" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              Yout password do not match.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="fName">FIRST NAME</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="text"
            inputMode="text"
            id="fName"
            name="fName"
            onChange={(e) =>
              e.target.value === "" ? setFName("empty") : setFName("valid")
            }
            onBlur={(e) =>
              e.target.value === "" ? setFName("empty") : setFName("valid")
            }
            className={
              fNameErr === "empty"
                ? styles.invalid
                : fNameErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={fNameErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Fisrt Name' field cannot be blank.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="lName">LAST NAME</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="text"
            inputMode="text"
            id="lName"
            name="lName"
            onChange={(e) =>
              e.target.value === "" ? setLName("empty") : setLName("valid")
            }
            onBlur={(e) =>
              e.target.value === "" ? setLName("empty") : setLName("valid")
            }
            className={
              lNameErr === "empty"
                ? styles.invalid
                : lNameErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={lNameErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Last Name' field cannot be blank.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="company">COMPANY NAME</label>
          </div>
          <input type="text" inputMode="text" id="company" name="company" />
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="phone">PHONE NUMBER</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="text"
            inputMode="tel"
            id="phone"
            name="phone"
            onChange={(e) =>
              e.target.value === ""
                ? setPhoneErr("empty")
                : setPhoneErr("valid")
            }
            onBlur={(e) =>
              e.target.value === ""
                ? setPhoneErr("empty")
                : setPhoneErr("valid")
            }
            className={
              phoneErr === "empty"
                ? styles.invalid
                : phoneErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={phoneErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Phone Number' field cannot be blank.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="address1">ADDRESS LINE 1</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="text"
            inputMode="text"
            id="address1"
            name="address1"
            onChange={(e) =>
              e.target.value === ""
                ? setAddress1Err("empty")
                : setAddress1Err("valid")
            }
            onBlur={(e) =>
              e.target.value === ""
                ? setAddress1Err("empty")
                : setAddress1Err("valid")
            }
            className={
              address1Err === "empty"
                ? styles.invalid
                : address1Err === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={address1Err === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Address Line 1' field cannot be blank.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="adress2">ADDRESS LINE 2</label>
          </div>
          <input type="text" inputMode="text" id="address2" name="address2" />
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="city">SUBURB/CITY</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="text"
            inputMode="text"
            id="city"
            name="city"
            onChange={(e) =>
              e.target.value === "" ? setCityErr("empty") : setCityErr("valid")
            }
            onBlur={(e) =>
              e.target.value === "" ? setCityErr("empty") : setCityErr("valid")
            }
            className={
              cityErr === "empty"
                ? styles.invalid
                : cityErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={cityErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Suburb/City' field cannot be blank.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="country">COUNTRY</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <select
            type="text"
            inputMode="text"
            id="country"
            name="country"
            onChange={(e) => {
              e.target.value === ""
                ? setCountryErr("empty")
                : setCountryErr("valid");
              setStates(e.target.value);
            }}
            onBlur={(e) => {
              e.target.value === ""
                ? setCountryErr("empty")
                : setCountryErr("valid");
              setStates(e.target.value);
            }}
            className={
              countryErr === "empty"
                ? styles.invalid
                : countryErr === "valid"
                ? styles.green
                : ""
            }
            defaultValue=""
          >
            <option value="">Choose a Country</option>
            {country.map((country) => (
              <option value={country.states} key={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div className={styles.err}>
            <p className={countryErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Country' field cannot be blank.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="state">STATE/PROVINCE</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <select
            type="text"
            inputMode="text"
            id="state"
            name="state"
            onChange={(e) => {
              e.target.value === ""
                ? setStateErr("empty")
                : setStateErr("valid");
            }}
            onBlur={(e) => {
              e.target.value === ""
                ? setStateErr("empty")
                : setStateErr("valid");
            }}
            className={
              stateErr === "empty"
                ? styles.invalid
                : stateErr === "valid"
                ? styles.green
                : ""
            }
            defaultValue=""
          >
            <option value="">Choose a State/Province</option>
            {states.length !== 0 &&
              states.split(",").map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
          <div className={styles.err}>
            <p className={stateErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Country' field cannot be blank.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.requiredLabel}>
            <label htmlFor="zip">ZIP/POSTCODE</label>
            <p className={styles.required}>REQUIRED</p>
          </div>
          <input
            type="text"
            inputMode="text"
            id="zip"
            name="zip"
            onChange={(e) =>
              e.target.value === "" ? setZipErr("empty") : setZipErr("valid")
            }
            onBlur={(e) =>
              e.target.value === "" ? setZipErr("empty") : setZipErr("valid")
            }
            className={
              zipErr === "empty"
                ? styles.invalid
                : zipErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            <p className={zipErr === "empty" ? styles.show : ""}>
              <img src={redCross} alt="cross" />
              The 'Zip/Postcode' field cannot be blank.
            </p>
          </div>
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" id="policy" name="policy" />
          <div className={styles.check}>
            <img
              src={check}
              alt="check"
              className={policyCheck === "checked" ? styles.checked : ""}
            />
          </div>
          <label
            htmlFor="policy"
            onClick={() => {
              policyCheck === "uncheck"
                ? setPolicyCheck("checked")
                : setPolicyCheck("uncheck");
            }}
          >
            I DO NOT PROVIDE AUTHORITY TO LEAVE
          </label>
        </div>

        <div className={styles.reCapcha}>
          <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY} />
        </div>

        <button className={styles.signUpBtn}>CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default SignUp;
