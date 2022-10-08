import React, { useEffect, useState } from "react";
import ReCaptchaV2 from "react-google-recaptcha";

// Styles
import styles from "./ContactUs.module.css";

// Assets
import redCross from "../../assets/redCross.svg";

// functions
import { validateEmail } from "../../helpers/functions";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("0");

  useEffect(() => {
    document.title = "Contact Us";
  });

  const isEmpty = (value) =>
    value !== "" && value !== "0" ? styles.green : "";

  const clickHandler = (event) => {
    event.preventDefault();
    if (comment && email && isValid) {
      // codes to send data to backend
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.location}>
        <Link to="/">HOME</Link> / CONTACT US
      </p>
      <div className={styles.headContainer}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.return}>Return address for online orders:</div>
        <div className={styles.address}>
          Bohemian Traders
          <br />
          3 / 13 Bonnal Rd
          <br />
          Erina, NSW, 2250
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div>
          Bohemian Traders Erina Boutique:
          <br />
          Shop 1, 490A Central Coast Hwy
          <br />
          Erina Heights, NSW, 2260
        </div>
        <div>
          Ph: <a>+61 2 4367 0709</a>
        </div>
        <div>
          <a>erina.boutique@bohemiantraders.com</a>
        </div>
        <div>
          Mon-Sat 8:30am - 5:00pm
          <br />
          Sun 9:30am - 2:30pm
        </div>
        <div>
          Bohemian Traders Darby Street Pop-Up Boutique:
          <br />
          175 Darby Street
          <br />
          Cooks Hill, NSW, 2300
        </div>
        <div>
          Ph: <a>+61 2 8376 2179</a>
        </div>
        <a>darby.boutique@bohemiantraders.com</a>
        <div>
          Mon-Sat 9:00am - 5:00pm
          <br />
          Sun 10:00am - 4:00pm
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.question}>
          Do you have a general enquiry about sizing, fit, fabric or just want
          to chat?
        </div>
        <div>
          We're here to help! Contact us via the form below, or email us here:
          <a>customerservice@bohemiantraders.com</a>, alternatively, feel free
          to call us on <a>+61 2 4327 8640</a>
        </div>
        <div className={styles.question}>
          Do you have a question about the status of an existing online order?
        </div>
        <div>
          Please email us here: <a>fulfilment@bohemiantraders.com</a>, or call
          us on <a>+61 2 4327 8640</a>, Mon-Fri 9am - 5pm
        </div>
        <div className={styles.question}>
          For all PR and Marketing enquiries:
        </div>
        <div>
          Please email us here: <a>pr@bohemiantraders.com</a>, or call us on{" "}
          <a>+61 2 4327 8640</a>
        </div>
        <div className={styles.question}>
          Enquiring about Wholesale of Bohemian Traders:
        </div>
        <div>
          Please email us here: <a>wholesale@bohemiantraders.com</a>, or call us
          on <a>+61 2 4327 8640</a>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.formInnerContainer}>
          <div>
            <label htmlFor="fullName">FULL NAME</label>
            <input
              id="fullName"
              type="string"
              inputMode="text"
              name="fullName"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">PHONE NUMBER</label>
            <input
              id="phoneNumber"
              type="tel"
              inputMode="tel"
              name="phoneNumber"
            />
          </div>
          <div>
            <div className={styles.requiredLabel}>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <p className={styles.required}>REQUIRED</p>
            </div>
            <input
              id="email"
              type="email"
              inputMode="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValid(validateEmail(email));
                // console.log(email);
              }}
              onBlur={() => setIsValid(validateEmail(email))}
              className={isValid ? isEmpty(email) : styles.invalid}
            />
            <div className={styles.err}>
              <p className={isValid ? "" : styles.show}>
                <img src={redCross} alt="cross" />
                Please use a valid email address, such as user@example.com.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.requiredLabel}>
          <label htmlFor="comment">COMMENTS/QUESTIONS</label>
          <p className={styles.required}>REQUIRED</p>
        </div>
        <textarea
          id="comment"
          name="comment"
          rows="5"
          cols="50"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          className={comment ? isEmpty(comment) : styles.invalid}
          onBlur={(e) => setComment(e.target.value)}
        />
        <div className={styles.err}>
          <p className={comment ? "" : styles.show}>
            <img src={redCross} alt="cross" />
            You must enter your question.
          </p>
        </div>
        <div className={styles.reCapcha}>
          <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY} />
        </div>
        <button
          type="submit"
          className={styles.submit}
          onClick={(e) => clickHandler(e)}
        >
          SUBMIT FORM
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
