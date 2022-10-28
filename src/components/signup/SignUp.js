import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Google recaptcha
import ReCaptchaV2 from "react-google-recaptcha";

// Styles
import styles from "./SignUp.module.css";

// Assets
import redCross from "../../assets/redCross.svg";
import check from "../../assets/check.svg";

// functions
import { validateEmail, validatePass } from "../../helpers/functions";

// Countries and states
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
  // Set email error
  const [emailErr, setEmailErr] = useState("");
  // Set password error
  const [passErr, setPassErr] = useState("");
  // Set password
  const [pass, setPass] = useState("");
  // Set confirm password error
  const [confirmPassErr, setConfirmPassErr] = useState("");
  // Set first name error
  const [fNameErr, setFName] = useState("");
  // Set last name error
  const [lNameErr, setLName] = useState("");
  // Set phone number error
  const [phoneErr, setPhoneErr] = useState("");
  // Set address 1 error
  const [address1Err, setAddress1Err] = useState("");
  // Set city error
  const [cityErr, setCityErr] = useState("");
  // Set country error
  const [countryErr, setCountryErr] = useState("");
  // Set state error
  const [stateErr, setStateErr] = useState("");
  // Set selected country states
  const [states, setStates] = useState([]);
  // Set zip code error
  const [zipErr, setZipErr] = useState("");
  // Set is policy check or not
  const [policyCheck, setPolicyCheck] = useState("uncheck");
  // Set page Title
  useEffect(() => {
    document.title = "Bohemian Traders - Create Account";
  });

  return (
    <div className={styles.container}>
      {/* User location in site */}
      <p className={styles.location}>
        <Link to="/">HOME</Link> / CREATE ACCOUNT
      </p>
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
                // set email error if email is empty
                setEmailErr("empty");
              } else if (!validateEmail(e.target.value)) {
                // set email error if email is invalid
                setEmailErr("invalid");
              } else {
                // set email error if email is valid
                setEmailErr("valid");
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                // set email error if email is empty
                setEmailErr("empty");
              } else if (!validateEmail(e.target.value)) {
                // set email error if email is invalid
                setEmailErr("invalid");
              } else {
                // set email error if email is valid
                setEmailErr("valid");
              }
            }}
            className={
              // change input style according to email error
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
                // show error message
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
                // set password error if password is empty
                setPassErr("empty");
              } else if (!validatePass(e.target.value)) {
                // set password error if password is invalid
                setPassErr("invalid");
              } else {
                // set password error if password is valid
                setPassErr("valid");
              }
            }}
            onBlur={(e) => {
              setPass(e.target.value);
              if (e.target.value === "") {
                // set password error if password is empty
                setPassErr("empty");
              } else if (!validatePass(e.target.value)) {
                // set password error if password is invalid
                setPassErr("invalid");
              } else {
                // set password error if password is valid
                setPassErr("valid");
              }
            }}
            className={
              // change input style according to password error
              passErr === "invalid" || passErr === "empty"
                ? styles.invalid
                : passErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
                // set confirm password error if confirm password is empty
                setConfirmPassErr("empty");
              } else if (e.target.value !== pass) {
                // set confirm password error if confirm password is invalid
                setConfirmPassErr("notMatch");
              } else {
                // set confirm password error if confirm password is valid
                setConfirmPassErr("match");
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                // set confirm password error if confirm password is empty
                setConfirmPassErr("empty");
              } else if (e.target.value !== pass) {
                // set confirm password error if confirm password is invalid
                setConfirmPassErr("notMatch");
              } else {
                // set confirm password error if confirm password is valid
                setConfirmPassErr("match");
              }
            }}
            className={
              // change input style according to confirm password error
              confirmPassErr === "notMatch" || confirmPassErr === "empty"
                ? styles.invalid
                : confirmPassErr === "match"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
            // set first name error if first name is empty
            onChange={(e) =>
              e.target.value === "" ? setFName("empty") : setFName("valid")
            }
            // set first name error if first name is empty
            onBlur={(e) =>
              e.target.value === "" ? setFName("empty") : setFName("valid")
            }
            className={
              // change input style according to first name error
              fNameErr === "empty"
                ? styles.invalid
                : fNameErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
            // set last name error if last name is empty
            onChange={(e) =>
              e.target.value === "" ? setLName("empty") : setLName("valid")
            }
            // set last name error if last name is empty
            onBlur={(e) =>
              e.target.value === "" ? setLName("empty") : setLName("valid")
            }
            className={
              // change input style according to last name error
              lNameErr === "empty"
                ? styles.invalid
                : lNameErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
            // set phone number error if phone number is empty
            onChange={(e) =>
              e.target.value === ""
                ? setPhoneErr("empty")
                : setPhoneErr("valid")
            }
            // set phone number error if phone number is empty
            onBlur={(e) =>
              e.target.value === ""
                ? setPhoneErr("empty")
                : setPhoneErr("valid")
            }
            className={
              // change input style according to phone number error
              phoneErr === "empty"
                ? styles.invalid
                : phoneErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
            // set address 1 error if address 1 is empty
            onChange={(e) =>
              e.target.value === ""
                ? setAddress1Err("empty")
                : setAddress1Err("valid")
            }
            // set address 1 error if address 1 is empty
            onBlur={(e) =>
              e.target.value === ""
                ? setAddress1Err("empty")
                : setAddress1Err("valid")
            }
            className={
              // change input style according to address 1 error
              address1Err === "empty"
                ? styles.invalid
                : address1Err === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
            // set city error if city is empty
            onChange={(e) =>
              e.target.value === "" ? setCityErr("empty") : setCityErr("valid")
            }
            // set city error if city is empty
            onBlur={(e) =>
              e.target.value === "" ? setCityErr("empty") : setCityErr("valid")
            }
            className={
              // change input style according to city error
              cityErr === "empty"
                ? styles.invalid
                : cityErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
            // set country error if country is empty and set country
            onChange={(e) => {
              e.target.value === ""
                ? setCountryErr("empty")
                : setCountryErr("valid");
              setStates(e.target.value);
            }}
            // set country error if country is empty and set country
            onBlur={(e) => {
              e.target.value === ""
                ? setCountryErr("empty")
                : setCountryErr("valid");
              setStates(e.target.value);
            }}
            className={
              // change input style according to country error
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
            {/* show error message */}
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
            // set state error if state is empty
            onChange={(e) => {
              e.target.value === ""
                ? setStateErr("empty")
                : setStateErr("valid");
            }}
            // set state error if state is empty
            onBlur={(e) => {
              e.target.value === ""
                ? setStateErr("empty")
                : setStateErr("valid");
            }}
            className={
              // change input style according to state error
              stateErr === "empty"
                ? styles.invalid
                : stateErr === "valid"
                ? styles.green
                : ""
            }
            defaultValue=""
          >
            <option value="">Choose a State/Province</option>
            {/* make an array for states and show them in options */}
            {states.length !== 0 &&
              states.split(",").map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
          <div className={styles.err}>
            {/* show error message */}
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
            // set zip code error if zip code is empty
            onChange={(e) =>
              e.target.value === "" ? setZipErr("empty") : setZipErr("valid")
            }
            // set zip code error if zip code is empty
            onBlur={(e) =>
              e.target.value === "" ? setZipErr("empty") : setZipErr("valid")
            }
            className={
              // change input style according to zip code error
              zipErr === "empty"
                ? styles.invalid
                : zipErr === "valid"
                ? styles.green
                : ""
            }
          />
          <div className={styles.err}>
            {/* show error message */}
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
              // change style according to policy checked
              className={policyCheck === "checked" ? styles.checked : ""}
            />
          </div>
          <label
            htmlFor="policy"
            // set wheter policy is checked or not
            onClick={() => {
              policyCheck === "uncheck"
                ? setPolicyCheck("checked")
                : setPolicyCheck("uncheck");
            }}
          >
            I DO NOT PROVIDE AUTHORITY TO LEAVE
          </label>
        </div>
        <div className={styles.strech}>
          <div className={styles.reCapcha}>
            {/* Google recaptcha */}
            <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY} />
          </div>

          <button className={styles.signUpBtn}>CREATE ACCOUNT</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
