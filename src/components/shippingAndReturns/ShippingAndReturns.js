import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./ShippingAndReturns.module.css";

const ShippingAndReturns = () => {
  useEffect(() => {
    document.title = "Shipping & Returns";
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.location}>
        <Link to="/">HOME</Link> / SHIPPING & RETURNS
      </p>
      <h1 className={styles.header}>SHIPPING & RETURNS</h1>
      <div>
        <p>
          PLEASE NOTE: ALL FINAL CLEARANCE ITEM PURCHASES ARE FINAL. WE DO NOT
          OFFER REFUNDS, EXCHANGES or CREDITS for change of mind / incorrectly
          chosen size on FINAL CLEARANCE SALE ITEMS.
        </p>
        <p>
          We offer COMPLIMENTARY SHIPPING on all Australian domestic orders over
          $200.
        </p>
        Bohemian Traders aims to provide best in class customer service.
      </div>
      <div>
        We pride ourselves on our ability to provide you with a streamlined,
        personalised experience; we’re here to help you find the perfect size,
        fit and fabrication for your needs.
      </div>
      <div>
        <p>
          Please do get in touch via phone, email or social media if you would
          like assistance with any of your purchases.
        </p>
        <p className={styles.italic}>
          PLEASE NOTE: We process Store Credits for the amount paid (which can
          be used to re-purchase an alternative size or style), we do not
          process exchanges. We do not offer refunds for change of mind or
          incorrectly selected sizes.
        </p>
        <p className={styles.italic}>SHIPPING</p>
        <p>
          AUSTRALIAN DOMESTIC ORDERS
          <br />
          We ship all domestic orders using Australia Post / eParcel.
        </p>
        <p>We offer the following domestic shipping options:</p>
        <ul>
          <li>
            "COMPLIMENTARY SHIPPING" on all Australian domestic orders over
            $200.
          </li>
          <li>
            $10 flat rate shipping on all Australian domestic orders under $200.
          </li>
          <li>
            $15 EXPRESS SHIPPING - all EXPRESS orders are shipped same business
            day using Australia Post's Express Service, provided your order is
            placed before 2 pm AEST. (Note: during sale events, Express Orders
            will be prioritised, but please expect longer shipping times)
          </li>
        </ul>
        Your domestic order can be fully tracked using the tracking number
        provided via email once your order has shipped.
      </div>
      <div>
        <p>
          NEW ZEALAND ORDERS
          <br />
          We offer $20 flat rate Express Shipping for all orders to New Zealand,
          using DHL Express. Your order can be fully tracked using the tracking
          number provided once your order ships and you can expect to receive
          your order in 2 - 3 business days.
        </p>
        Please note that Bohemian Holdings Pty Ltd ships orders to NZ in
        accordance with the low value goods GST threshold. Details can be found
        here:
        https://www.classic.ird.govt.nz/campaigns/2018/gst-policy-update.html{" "}
      </div>
      <div>
        <p>
          NORTH AMERICA ORDERS
          <br />
          We offer Free Shipping on all orders over $300 to North America, using
          DHL Express. Your order can be fully tracked using the tracking number
          provided once your order ships.
        </p>
        <p>
          INTERNATIONAL ORDERS
          <br />
          All international orders ship with DHL Express based on weight and
          destination, with costs advised at checkout. Your order can be fully
          tracked using the tracking number provided once your order ships -
          shipping times will vary depending on your location.{" "}
        </p>
        <p className={styles.italic}>
          WORLDWIDE SHIPPING AND DUTIES
          <br />
          We ship worldwide, so wherever you are, you can get your hands on some
          Bohemian Traders treasures. To calculate shipping costs, follow the
          prompts at checkout. Please note that all international customers are
          responsible for the payment of customs duties / charges on any
          imports. Please contact your customs office to confirm the relevant
          thresholds in your area. If required, Bohemian Traders can be
          contacted via phone on +612 4327 8640, however please note that the
          quickest way to contact us is by email.
        </p>
        <p className={styles.italic}>...</p>
        <p className={styles.italic}>
          During holiday periods, please allow up to 5 business days for us to
          pack your order. Once your order has been shipped you will receive a
          confirmation email containing your tracking information. As we aim to
          have your orders packed quickly, we are unable to make amendments to
          any orders once they have been completed at checkout - for this
          reason, please choose carefully.
        </p>
        <p className={styles.italic}>...</p>
        <p className={styles.italic}>RETURNS</p>
        <p className={styles.italic}>
          PLEASE NOTE: We process Store Credits for the amount paid (which can
          be used to re-purchase an alternative size or style), we do not
          process exchanges. We do not offer refunds for change of mind or
          incorrectly selected sizes.
        </p>
        <p>
          HOW TO RETURN ITEM/S:
          <br />
          Within 10 business days (domestic) or 18 days (international) of
          receipt of your order, you have the option to raise an RMA number &
          return your item/s. Step 1. Log into your account and Request an RMA
          number (If you have checked out as a guest please email customer
          service for your returns request)
        </p>
        <p>
          Step 2. You will receive an email within 2 - 3 business days from our
          Customer Service Team with further instructions.
        </p>
        <p>
          Typically this will include sending the unworn item/s along with your
          NAME, EMAIL and ORDER NUMBER and RMA number to the address below. (If
          you do not provide this information, we may not be able to process
          your return). Note that Bohemian Traders cannot guarantee the
          processing of returns where an RMA number has not been generated.
          Please allow 5 business days once your parcel is received for us to
          process your return:
        </p>
        BOHEMIAN TRADERS
        <br />
        Unit 3, 13 Bonnal Rd ,<br />
        ERINA,
        <br />
        NSW 2250
      </div>
      <div>
        PLEASE DO NOT SEND A REPLY PAID SATCHEL BACK WITH YOUR RETURN. Please do
        not return your item in the original satchel via a "Return to Sender"
        method.
      </div>
      <div>
        <p>
          Any items returned in this manner will have the return postage & any
          additional carrier costs deducted from the credited amount. Note:
          Online orders should be returned to the address above by post.
          <br />
          We do not process returns in our boutique. For prompt processing, all
          items should be returned to the above address. If you return your
          order to our Erina Heights boutique, the Store Credit will be
          processed once your parcel reaches our Fulfilment Centre which may
          delay the processing of your Store Credit.
        </p>
        Items purchased at our Erina Heights boutique need to be returned within
        7 days of receipt of purchase.
      </div>
      <div>
        STORE CREDIT
        <br />
        Store Credit is offered for exchanges in accordance with the terms
        outlined on this page. We offer Store Credit for any full price, unworn
        item/s returned within 10 business days (domestic) or 18 days
        (international) of receipt of your order.
      </div>
      <div>
        We will provide a Store Credit for Items purchased during promotional
        sales are able to be returned for a Store Credit for the amount paid.
      </div>
      <div>
        Once processed, you will receive an email containing your credit note
        details.
      </div>
      <div>
        Orders placed during clearance sales are final and will not be accepted
        for Store Credit for change of mind or incorrect size chosen.
      </div>
      <div>
        Where marketing collateral outlines "All sales are final", the same
        rules apply as for Clearance Sales.
      </div>
      <div>
        <p>
          (We do not offer refunds for change of mind or incorrect purchase).
        </p>
        Store Credit is applied as credit to your Bohemian Traders account (if
        you have not established an account, we will set one up for you - you
        will receive confirmation via email with a prompt to set your unique
        password).
      </div>
      <div>
        To use your Store Credit, simply log into your account and shop in our
        store as usual - at checkout you will be given the option to use any
        available store credit as a form of payment.
      </div>
      <div>
        Your Store Credit has no expiry and is deducted after product and
        shipping costs are calculated. Should you have any trouble using your
        Store Credit please feel free to contact our Customer Service team via
        email on service@bohemiantraders.com or phone on +612 4327 8640.
      </div>
      <div>
        Items must be returned in the original condition with all tags attached;
        without makeup stains or perfume odours (any returns where these are
        present will not be accepted).
      </div>
      <div>
        Please note that the customer is responsible for shipping and handling
        charges to return the item; should the package not reach us safely we
        will not be able to complete the transaction, so we strongly recommend
        using a trackable post option when returning your items to us, along
        with keeping a record of your posted item and cost of postage.
      </div>
      <div>
        <p>
          Please note that Bohemian Traders is not responsible for any returned
          items until they reach our fulfilment centre and you are notified of
          receipt.
        </p>
        Where an item is included as a "Gift with Purchase" promotion and item/s
        from an order are returned for credit, the gift must also be returned.
        In the case that it is not returned, the RRP of the gifted item will be
        deducted from the credit amount.
      </div>
      <div>
        GIFT CERTIFICATES
        <br />
        Our Gift Certificates are offered in accordance with the terms outlined
        on this page. Gift Certificates are used in a similar manner to Store
        Credit, with the exception being that they reference a Gift Certificate
        code entered at checkout. Our Gift Certificates can be purchased using
        the link at the bottom of our website "Gift Certificates". Gift
        Certificates cannot be purchased during Sales, Spend & Save promotions
        or any other promotion unless specifically noted.
      </div>
      <div>
        FAULTY PRODUCTS
        <br />
        Please note that garment and leather colours may look slightly different
        depending on your computer monitor; this is not a manufacturing fault.
      </div>
      <div>
        <p>
          Many of our garments are made by a small community workshops, in
          particular our stunning hand made collection items that are hand block
          printed, vintage kanthas and antique embellished fabrics. They wear a
          story on their skin and visible irregularities are to be considered
          part of their charm, rather than faults (these will not be considered
          faulty if returned).
          <br />
          Every product we send out is quality controlled, however if you have
          received a product with a manufacturing fault (excluding suspected
          shrinkage), please send it back for assessment. Once we have reviewed
          the item we will happily offer a replacement or repair as long as it
          has been returned within 14 days of receiving your purchase. Anything
          outside of this time frame will be assessed at our discretion.
        </p>
        Wear and tear in the course of normal use is not considered a
        manufacturing fault.
      </div>
      <div>
        If you believe your item has shrunk after following the washing
        instructions on the inside of the garment, please take the time to
        review the measurements on the product listing after pressing your item
        in accordance with the instructions. If you send your item back for
        review and we find the measurements to be within tolerance, the item
        will not be replaced and return shipping costs will remain with the
        customer.
      </div>
    </div>
  );
};

export default ShippingAndReturns;
