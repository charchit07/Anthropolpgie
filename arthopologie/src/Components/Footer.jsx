import React from "react";
import styles from "./Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { GrMailOption } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.emaildiv}>
        <div style={{ marginTop: "23px" }}>
          <p>Sign Up for Email</p>
          <p>
            Receive early access to new arrivals, sales, exclusive content,
            events and much more!
          </p>
        </div>
        <div>
          <label>Email Address*</label>
          <br />
          <input type="email" />
          <button>SUBMIT</button>
        </div>
      </div>

      <p className={styles.midp}>
        By signing up, you will receive Anthropologie offers, promotions and
        other commercial messages. You are also agreeing to Anthropologie’s{" "}
        <a href="#">Privacy Policy.</a> You may unsubscribe at any time.
      </p>

      <br />
      <hr />
      <br />

      <div className={styles.flexdiv}>
        <div>
          <h3 className={styles.flexh3}>Help</h3>
          <a href="">Track Your Order</a>
          <a href="">Start A Return Or Exchange(US)</a>
          <a href="">Returns & Exchanges</a>
          <a href="">Shipping</a>
          <a href="">Customer Service</a>
          <a href="">Current Promotions</a>
          <a href="">Product Recalls</a>
          <a href="">COVID-19 Update</a>
        </div>
        <div>
          <h3 className={styles.flexh3}>About Us</h3>
          <a href="">Our Story</a>
          <a href="">Events</a>
          <a href="">A Greater Good</a>
          <a href="">Diversity & Inclusion</a>
          <a href="">Stories</a>
        </div>
        <div>
          <h3 className={styles.flexh3}>Services</h3>
          <a href="">AnthroPerks</a>
          <a href="">Gift Cards</a>
          <a href="">Trade Membership</a>
          <a href="">Furniture: Guides & Services</a>
          <a href="">Store Pickup & Collection Points</a>
        </div>
        <div>
          <h3 className={styles.flexh3}>Connect</h3>
          <a href="">Contact Us</a>
          <a href="">Stay Connected</a>
          <a href="">Careers</a>
          <a href="">Styling Services</a>
          <a href="">Request A Catalog</a>
        </div>
        <div>
          <div>
            <GrLocation className={styles.grtag} />
            <a href="#" className={styles.mtag}>
              Store Locator{" "}
            </a>
          </div>
          <div>
            <GrMailOption className={styles.gmtag} />
            <a href="#" className={styles.mtag}>
              Get Email
            </a>
          </div>

          {/* <a href="#"> <i className="fa-thin fa-envelope"></i> Get Email</a> */}
        </div>
      </div>
      <div className={styles.instadiv}>
        <div>
          <img
            src="https:////images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"
            alt=""
          />
        </div>
       
        <div>
            <Flex>
          <FaPinterest className={styles.insta} />
          <AiFillInstagram className={styles.insta} />
          <AiFillFacebook className={styles.insta} />
          <FaTwitter className={styles.insta} />
          </Flex>
        </div>
       
      </div>
      <img  className={styles.image}src="https://images.ctfassets.net/5de70he6op10/6QWLFz6Lw3Gua0R6sZm9OU/61d2acdd321f73a35d140957a266f02c/Holiday22_SiteFooter_DownloadTheApp_LS.jpg" alt="" />

      <div className={styles.fdiv}>
        <p>
          <a href="#">US</a>
        </p>
        <hr />
        <p>
          <a href="#">France</a>
        </p>
        <hr />
        <p>
          <a href="#">Germany</a>
        </p>
        <hr />
        <p>
          <a href="#">UK</a>
        </p>
      </div>

      <div className={styles.lastdiv}>
        <div className={styles.bfdiv}>
          <a href="#">Privacy Policy</a>
          <hr />
          <a href="#">Privacy Policy</a>
          <hr />
          <a href="#">CA Transparency</a>
          <hr />
          <a href="#">Accessibility</a>
          <hr />
          <a href="#">URBN.com</a>
          <hr />
          <a href="#">For CA Residents</a>
        </div>

        <div className={styles.bffdiv}>
          <p>2022 URBN.com. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
