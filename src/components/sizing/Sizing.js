import React from "react";

// Styles
import styles from "./sizing.module.css";

// Assets
import firstPic from "../../assets/size-guide-working-2a.jpg";
import secondPic from "../../assets/top_CROP2.png";
import thirdPic from "../../assets/bot_CROP3.png";

const Sizing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>INCLUSIVE SIZE RANGE</h1>
      <div>
        <p>
          At Bohemian Traders we care about providing on-trend fashion
          essentials for the everyday bohemian woman. This means offering all of
          our styles in a size-inclusive range, from 6 to 22 (2XS to 4XL).
        </p>
        <h6>WE ARE HERE TO HELP</h6>
        <p>
          We know that when shopping online, it can be tricky to settle on the
          style and size that is right for you. Please know that you can always
          get in touch with us for further assistance. Our team all have
          first-hand experience with our garments and would be more than happy
          to talk through the fit, feel and styling recommendations of any
          garment. There is a size and style for every body type and we would
          love to help you find it!
        </p>
        <p>
          The easiest avenues for assistance would be to either email our
          customer service team at <a>customerservice@bohemiantraders.com</a>,
          or give us a call on <a>+61 2 4327 8640</a> (Mon-Fri 9am - 5pm AEDT).
        </p>
        <p>
          On the web listing for each of our garments, there is a size guide
          that has been created specifically for that item. We take great care
          ensuring that the charts are accurate - serving you as an essential
          tool in selecting the correct product.
        </p>
      </div>
      <img src={firstPic} alt="sizing" />
      <div>
        <h6>READING THE SIZE CHART</h6>
        <p>
          All of our garments are measured in centimetres, and are of the
          garment laid flat. For measurements that go around the body (eg. bust,
          hip and waist) the measurement across the garment is doubled (to
          account for front and back).
        </p>
        <p>
          The following diagram and info indicates exactly where on the garment
          the measurements are taken. In order to find the best size for you,
          measure the corresponding part of your body or compare to garments
          that you already own.
        </p>
        <img src={secondPic} alt="sizing" />
      </div>
      <div>
        <h5>DRESSES, TOPS & OUTERWEAR</h5>
        <p>
          (A) LENGTH is measured from the highest point on the neck seam
          straight down to the bottom hemline.
        </p>
        <p>
          (B) SLEEVE LENGTH is measured from the highest point on the shoulder
          seam along the outside edge to the cuff.
        </p>
        <p>
          (C) BICEP is measured from the underarm seam to the outside edge of
          the sleeve, perpendicular to the length of the sleeve, and doubled.
        </p>
        <p>
          (D) BUST is measured from one underarm seam to the other, and doubled.
        </p>
        <p>
          (E) WAIST is measured across the torso at the narrowest point, and
          doubled.
        </p>
        <p>
          (F) HIP is measured along the edge of the bottom opening of the top,
          and doubled.
        </p>
        <img src={thirdPic} alt="sizing" />
      </div>
      <div>
        <h5>BOTTOMS</h5>
        <p>
          (A) INSIDE LEG is measured from the crotch seam straight down the
          inside edge to the bottom of the leg.
        </p>
        <p>
          (B) WAIST is measured along the top opening of the item, and doubled.
        </p>
        <p>
          (C) HIP is generally measured across the fullest part of the bottom,
          and doubled. Note: hip measurement can differ with style, if in doubt
          please get in touch.
        </p>
        <h6>TIPS FOR MEASURING YOURSELF</h6>
        <p>
          Measure your body wearing the underwear that you would like to wear
          with the particular garment.
        </p>
        <p>
          Stand in front of a mirror and take note of the measuring tape's
          position around your body. When measuring around your body, such as
          bust, waist and hips, you want to ensure that it is as horizontal as
          possible.
        </p>
        <p>
          Ensure that the tape is always close against your body, but don't hold
          it too tight. The general rule is close but comfortable - not tight
          and not loose.
        </p>
      </div>
    </div>
  );
};

export default Sizing;
