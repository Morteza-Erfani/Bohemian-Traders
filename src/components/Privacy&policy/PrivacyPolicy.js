import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Terms & Privacy Policy";
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.location}>
        <Link to="/">HOME</Link> / TERMS & PRIVACY POLICY
      </p>
      <h1 className={styles.header}>TERMS & PRIVACY POLICY</h1>
      <h6>TERMS & CONDITIONS</h6>
      <div>
        <p className={styles.italic}>
          PLEASE READ THE FOLLOWING TERMS AND CONDITIONS OF USE CAREFULLY BEFORE
          USING THIS WEBSITE. All users of this site agree that access to and
          use of this site are subject to the following terms and conditions and
          other applicable law. If you do not agree to these terms and
          conditions, please do not use this site. By continuing to use our
          website on or after May 25, 2018, you’ll be agreeing to the terms and
          conditions set-out below.
        </p>
        <span></span>
        Bohemian Traders is a registered trademark of Bohemian Holdings Pty Ltd.
        Bohemian Traders & Bohemian Holdings Pty Ltd are used throughout these
        terms to represent the same entity.
      </div>
      <h6>SHIPPING & RETURNS</h6>
      <div>
        By purchasing with Bohemian Traders you are agreeing to be bound by our
        shipping and returns policy which can be found <a>here</a>.
      </div>
      <h6>PRIVACY</h6>
      <h6 className={styles.italic}>SECURE ONLINE ORDERING</h6>
      <div>
        At Bohemian Traders, we value our customers and want to make shopping
        online comfortable and safe. We take precautions to safeguard your
        financial information. Your credit card numbers are protected while in
        transit using the industry standard Secure Sockets Layer (SSL)
        encryption*. Moreover, your credit card information is encrypted when it
        is stored on our network, protecting it from theft or internal
        compromise. * SSL encryption ensures that your information is protected
        and cannot be read by others as it travels over the Internet. The secure
        mode begins when you begin the checkout process. Your web browser will
        indicate when you're on a secure page. You also can verify that your
        information is encrypted by looking at the URL line of your browser.
        When visiting a secure server, the first characters of the site address
        will change from http to https. Furthermore, we will never se or hold
        your credit card details on our system; these details are held and
        processed by an accredited secure third party service so you can be
        assured that your card details are never held by us. We use Braintree
        Payments as our secure third party for payment processing.
      </div>
      <h6 className={styles.italic}>
        INFORMATION WE COLLECT WHEN PLACING AN ORDER
      </h6>
      <div>
        We ask you for information such as your name, e­mail address, shipping
        address, billing address and payment information so we can process your
        order. If necessary, we might use this information to contact you during
        the processing of your order. We also use your information to
        personalise your shopping experience (such as a personal greeting,
        making automated marketing decisions on how to best serve you
        information, re-targeting ads through linked social channels etc). At
        any time, you may contact us to request the information that we have
        stored - we will happily provide this information to you, but may ask
        for you to verify your identity.
        <br />
        Please note: we are unable to serve you as a customer if you are not
        willing to provide as a minimum, the details outlined above.
      </div>
      <h6 className={styles.italic}>WHEN SUBSCRIBING TO OUR NEWSLETTER</h6>
      <div>
        Our newsletter is an optional service to our customers and the visitors
        to our site. Our newsletter keeps you up to date with any upcoming
        events, product promotions and other special announcements. Your email
        address is required to receive our newsletter. We will not share your
        email address with any third­ party without your explicit consent. You
        are able to unsubscribe at any time on your account page or by following
        the instructions at the bottom of each newsletter that we send you. You
        may also request for your email and data to be completely erased -
        please contact us to process this request.
      </div>
      <h6 className={styles.italic}>COMPETITIONS & PROMOTIONS</h6>
      <div>
        From time to time, Bohemian Traders may partner with other agencies and
        websites to provide promotions and giveaways. Information gathered
        during these promotions will not be shared with any third parties and
        only used by Bohemian Traders. Participation in these events is
        acceptance of these terms and privacy conditions. <a>Games of Chance</a>
      </div>
      <h6 className={styles.italic}>SENDING US CORRESPONDENCE</h6>
      <div>
        When we receive email, letters, or entries to our contests we may
        collect and store the information you submit. We only use the
        information you provide to respond to your communication unless you
        explicitly opt-­in to receive our newsletter.
      </div>
      <h6 className={styles.italic}>COOKIES</h6>
      <div>
        www.bohemiantraders.com uses cookies to allow you to log­in, to keep
        items in your shopping basket during your visit and to allow you to
        proceed through the checkout process. As such, we require cookies to be
        enabled in your web browser.
        <br />
        The cookies are also used for personalized ads and mailing list
        applications including Rakuten. Rakuten Advertising Company may collect
        personal information when you interact with our digital property,
        including IP addresses, digital identifiers, information about your web
        browsing and app usage and how you interact with our properties and ads
        for a variety of purposes, such as personalization of offers or
        advertisements, analytics about how you engage with websites or ads and
        other commercial purposes. For more information about the collection,
        use and sale of your personal data and your rights, please use the below
        links.” Rakuten Advertising services privacy policy:
        https://rakutenadvertising.com/legal-notices/services-privacy-policy/
        Rakuten Advertising Opt-Out URL:
        https://rakutenadvertising.com/legal-notices/services-privacy-rights-request-form/
      </div>
      <h6 className={styles.italic}>
        DISCLOSURE OF INFORMATION TO THIRD PARTIES SERVICE PROVIDERS
      </h6>
      <div>
        Only the portions of your personal information that are required to
        process and ship your order are shared with our payment processing
        provider and our shipping carrier. They will only use this information
        in the service of fulfilling your order and will never use it for
        marketing purposes.
      </div>
      <h6 className={styles.italic}>ANONYMOUS ANALYTICS</h6>
      <div>
        "This website uses Google Analytics, a web analytics service provided by
        Google, Inc. ("Google"). Google Analytics uses "cookies", which are text
        files placed on your computer, to help the website analyse how users use
        the site. The information generated by the cookie about your use of the
        website (including your IP address) will be transmitted to and stored by
        Google on servers in the United States. Google will use this information
        for the purpose of evaluating your use of the website, compiling reports
        on website activity for website operators and providing other services
        relating to website activity and internet usage. Google may also
        transfer this information to third parties where required to do so by
        law, or where such third parties process the information on Google's
        behalf. Google will not associate your IP address with any other data
        held by Google. You may refuse the use of cookies by selecting the
        appropriate settings on your browser, however please note that if you do
        this you may not be able to use the full functionality of this website.
        By using this website, you consent to the processing of data about you
        by Google in the manner and for the purposes set out above." We may
        share information with governmental agencies or other companies
        assisting us in investigation of fraud or prevention of it. We may do so
        when: (1) permitted or required by law; or, (2) trying to protect
        against or prevent actual or potential fraud or unauthorised
        transactions; or, (3) investigating fraud which has already taken place.
        The information is not provided to these agencies or companies for
        marketing purposes. We will NOT give, sell, or lease your personal
        information to third parties!
      </div>
      <h6 className={styles.italic}>HOW WE SHARE YOUR INFORMATION</h6>
      <div>
        (a) Personally Identifiable Information: Bohemian Traders will not rent
        or sell your personally identifiable information to others. We may store
        personal information in locations outside the direct control of Bohemian
        Traders (for instance, on servers or databases co-located with hosting
        providers). Any personally identifiable information you elect to make
        publicly available on our Sites or Bohemian Traders Services, such as
        posting comments on our blog page, will be available to others. If you
        remove information that you have made public on our Sites or Bohemian
        Traders Services, copies may remain viewable in cached and archived
        pages of our Sites or Bohemian Traders Services, or if other users have
        copied or saved that information. Our blog is managed by a third party
        application that may require you to register to post a comment. We do
        not have access or control of the information posted to the blog. You
        will need to contact or login into the third party application if you
        want the personal information that was posted to the comments section
        removed. To learn how the third party application uses your information,
        please review their privacy policy.
      </div>
      <div>
        (b) Non-Personally Identifiable Information: We may share non-personally
        identifiable information (such as anonymous usage data, referring/exit
        pages and URLs, platform types, number of clicks, etc.) with interested
        third parties to help them understand the usage patterns for certain
        Bohemian Traders Services and those of our partners. Non-personally
        identifiable information may be stored indefinitely.
      </div>
      <div>
        (c) Instances Where We Are Required To Share Your Information: Bohemian
        Holdings will disclose your information where required to do so by law,
        if subject to subpoena or other legal proceeding or if we reasonably
        believe that such action is necessary to (a) comply with the law and the
        reasonable requests of law enforcement; (b) to enforce our Terms of
        Service or to protect the security or integrity of our Service; and/or
        (c) to exercise or protect the rights, property, or personal safety of
        Bohemian Holdings, our users or others.
      </div>
      <div>
        (d) What Happens In The Event Of A Change Of Control: We may buy or
        sell/divest/transfer the company (including any shares in the company),
        or any combination of its products, services, assets and/or businesses.
        Your information such as customer names and email addresses, and other
        User information related to the Bohemian Traders Service may be among
        the items sold or otherwise transferred in these types of transactions.
        We may also sell, assign or otherwise transfer such information in the
        course of corporate divestitures, mergers, acquisitions, bankruptcies,
        dissolutions, reorganizations, liquidations, similar transactions or
        proceedings involving all or a portion of the company. You will be
        notified via email and/or a prominent notice on our Site of any change
        in ownership or uses of your personal information, as well as any
        choices you may have regarding your personal information.
      </div>
      <div>
        (f) Testimonials: We display personal reviews of satisfied customers on
        our Site in addition to other endorsements. By completing our product
        review, you consent to us posting your review along with your name, on
        our website. If you wish to update or delete your review, you can
        contact us at accounts@bohemiantraders.com.
      </div>
      <h6 className={styles.italic}>ACCURACY OF INFORMATION</h6>
      <div>
        It is our utmost goal to provide complete, accurate and current
        information on this website. However it is possible that this site may
        contain typographical mistakes, inaccuracies, or omissions, some of
        which may relate to product description, pricing and availability. In
        addition, some information may be incomplete or not current. We reserve
        the right to correct any errors, inaccuracies or omissions at any time
        without any prior notice, which may occur after an order has been
        placed. We apologise for any inconvenience this may cause.
      </div>
      <h6 className={styles.italic}>COPYRIGHT</h6>
      <div>
        The entire content included in this site, including but not limited to
        text, graphics or code is copyrighted as a collective work under the
        Commonwealth of Australia and other copyright laws, and is the property
        of Bohemian Holdings Pty Ltd. The collective work includes works that
        are licensed to Bohemian Holdings Pty Ltd. Bohemian Holdings Pty Ltd ALL
        RIGHTS RESERVED. Permission is granted to electronically copy and print
        hard copy portions of this site for the sole purpose of placing an order
        with Bohemian Holdings Pty Ltd or purchasing Bohemian Holdings Pty Ltd
        products. You may display and, subject to any expressly stated
        restrictions or limitations relating to specific material, download or
        print portions of the material from the different areas of the site
        solely for your own non-commercial use, or to place an order with
        Bohemian Holdings Pty Ltd or to purchase Bohemian Holdings Pty Ltd
        products. Any other use, including but not limited to the reproduction,
        distribution, display or transmission of the content of this site is
        strictly prohibited, unless authorized by Bohemian Holdings Pty Ltd. You
        further agree not to change or delete any proprietary notices from
        materials downloaded from the site.
      </div>
      <h6 className={styles.italic}>TRADEMARKS</h6>
      <div>
        All trademarks, service marks and trade names of Bohemian Holdings Pty
        Ltd used in the site are trademarks or registered trademarks of Bohemian
        Holdings Pty Ltd. "Bohemian Traders" is a trademark of Bohemian Holdings
        Pty Ltd.
      </div>
      <h6 className={styles.italic}>WARRANTY DISCLAIMER</h6>
      <div>
        This site and the materials and products on this site are provided "as
        is" and without warranties of any kind, whether express or implied. To
        the fullest extent permissible pursuant to applicable law, Bohemian
        Holdings Pty Ltd disclaims all warranties, express or implied,
        including, but not limited to, implied warranties of merchantability and
        fitness for a particular purpose and non ­infringement. Bohemian
        Holdings Pty Ltd does not represent or warrant that the functions
        contained in the site will be uninterrupted or error­ free, that the
        defects will be corrected, or that this site or the server that makes
        the site available are free of viruses or other harmful components.
        Bohemian Holdings Pty Ltd does not make any warranties or
        representations regarding the use of the materials in this site in terms
        of their correctness, accuracy, adequacy, usefulness, timeliness,
        reliability or otherwise. Some states do not permit limitations or
        exclusions on warranties, so the above limitations may not apply to you.
      </div>
      <h6 className={styles.italic}>TERMINATION</h6>
      <div>
        These terms and conditions are applicable to you upon your accessing the
        site and/or completing the registration or shopping process. These terms
        and conditions, or any part of them, may be terminated by Bohemian
        Holdings Pty Ltd without notice at any time, for any reason. The
        provisions relating to Copyrights, Trademark, Disclaimer, Limitation of
        Liability, Indemnification and Miscellaneous, shall survive any
        termination.
      </div>
      <h6 className={styles.italic}>NOTICE</h6>
      <div>
        Bohemian Holdings Pty Ltd may deliver notice to you by means of e­mail,
        a general notice on the site, or by other reliable method to the address
        you have provided to Bohemian Holdings Pty Ltd.
      </div>
      <h6 className={styles.italic}>MISCELLANEOUS</h6>
      <div>
        Your use of this site shall be governed in all respects by the laws of
        the Commonwealth of Australia, without regard to choice of law
        provisions, and not by the 1980 U.N. Convention on contracts for the
        international sale of goods. You agree that jurisdiction over and venue
        in any legal proceeding directly or indirectly arising out of or
        relating to this site (including but not limited to the purchase of
        Bohemian Holdings Pty Ltd products) shall be in the state or federal
        courts located in NSW, Australia. Any cause of action or claim you may
        have with respect to the site (including but not limited to the purchase
        of Bohemian Holdings Pty Ltd products) must be commenced within six (6)
        months after the claim or cause of action arises. Bohemian Holdings Pty
        Ltd's failure to insist upon or enforce strict performance of any
        provision of these terms and conditions shall not be construed as a
        waiver of any provision or right. Neither the course of conduct between
        the parties nor trade practice shall act to modify any of these terms
        and conditions. Bohemian Holdings Pty Ltd may assign its rights and
        duties under this Agreement to any party at any time without notice to
        you.
      </div>
      <h6 className={styles.italic}>USE OF SITE</h6>
      <div>
        Harassment in any manner or form on the site, including via e­mail,
        chat, or by use of obscene or abusive language, is strictly forbidden.
        Impersonation of others, including a Bohemian Holdings Pty Ltd or other
        licensed employee, host, or representative, as well as other members or
        visitors on the site is prohibited. You may not upload to, distribute,
        or otherwise publish through the site any content which is libelous,
        defamatory, obscene, threatening, invasive of privacy or publicity
        rights, abusive, illegal, or otherwise objectionable which may
        constitute or encourage a criminal offense, violate the rights of any
        party or which may otherwise give rise to liability or violate any law.
        You may not upload commercial content on the site or use the site to
        solicit others to join or become members of any other commercial online
        service or other organization.
      </div>
      <h6 className={styles.italic}>PARTICIPATION DISCLAIMER</h6>
      <div>
        Bohemian Holdings Pty Ltd does not and cannot review all communications
        and materials posted to or created by users accessing the site, and is
        not in any manner responsible for the content of these communications
        and materials. You acknowledge that by providing you with the ability to
        view and distribute user­ generated content on the site, Bohemian
        Holdings Pty Ltd is merely acting as a passive conduit for such
        distribution and is not undertaking any obligation or liability relating
        to any contents or activities on the site. However, Bohemian Holdings
        Pty Ltd reserves the right to block or remove communications or
        materials that it determines to be (a) abusive, defamatory, or obscene,
        (b) fraudulent, deceptive, or misleading, (c) in violation of a
        copyright, trademark or; other intellectual property right of another or
        (d) offensive or otherwise unacceptable to Bohemian Holdings Pty Ltd in
        its sole discretion.
      </div>
      <h6 className={styles.italic}>INDEMNIFICATION</h6>
      <div>
        You agree to indemnify, defend, and hold harmless Bohemian Holdings Pty
        Ltd, its officers, directors, employees, agents, licensors and suppliers
        (collectively the "Service Providers") from and against all losses,
        expenses, damages and costs, including legal fees, resulting from any
        violation of these terms and conditions or any activity related to your
        account (including negligent or wrongful conduct) by you or any other
        person accessing the site using your Internet account.
      </div>
      <h6 className={styles.italic}>THIRD PARTY LINKS</h6>
      <div>
        In an attempt to provide increased value to our visitors, Bohemian
        Holdings Pty Ltd may link to sites operated by third parties. However,
        even if the third party is affiliated with Bohemian Holdings Pty Ltd,
        Bohemian Holdings Pty Ltd has no control over these linked sites, all of
        which have separate privacy and data collection practices, independent
        of Bohemian Holdings Pty Ltd. These linked sites are only for your
        convenience and therefore you access them at your own risk. Nonetheless,
        Bohemian Holdings Pty Ltd seeks to protect the integrity of its web site
        and the links placed upon it and therefore requests any feedback on not
        only its own site, but for sites it links to as well (including if a
        specific link does not work).
      </div>
      <h6 className={styles.italic}>HOW TO CONTACT US</h6>
      <div>
        You can contact us at any time if you are concerned about the use of
        your information. Please email us at accounts@bohemiantraders.com or
        phone us on +612 4327 8640. Our office are located at Units 3, 13 Bonnal
        Rd, Erina, NSW, 2250.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
