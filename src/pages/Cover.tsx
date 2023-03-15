import { FunctionComponent } from "react";
import styles from "./Cover.module.css";

const Cover: FunctionComponent = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.coverChild} />
      <img
        className={styles.curvedSectionDivider12}
        alt=""
        src="/curved-section-divider-121.svg"
      />
      <div className={styles.coverItem} />
      <div className={styles.navBar}>
        <img className={styles.logoIcon} alt="" src="/logo1.svg" />
        <div className={styles.navContent}>
          <div className={styles.tille}>
            <b className={styles.home}>{`Home `}</b>
            <div className={styles.home}>{`About Us `}</div>
            <div className={styles.home}>Pricing</div>
            <div className={styles.home}>Contact Us</div>
          </div>
          <div className={styles.buttonBase}>
            <div className={styles.text}>Contact Us</div>
          </div>
        </div>
      </div>
      <img className={styles.coverInner} alt="" src="/ellipse-21.svg" />
      <div className={styles.frameParent}>
        <div className={styles.yourDigitalBusinessIsInGoParent}>
          <div className={styles.yourDigitalBusiness}>
            Your digital business is in good hands with us!
          </div>
          <div className={styles.makeYourWork}>
            Make your work easier with an integrated ecosystem that lets all
            departments work properly together.
          </div>
        </div>
        <div className={styles.buttonBaseParent}>
          <div className={styles.buttonBase1}>
            <div className={styles.text1}>Get Started</div>
          </div>
          <div className={styles.buttonBase2}>
            <div className={styles.text1}>Watch Video</div>
            <img
              className={styles.buttonBaseChild}
              alt=""
              src="/group-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.macbookPro16Mockup}>
            <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
            <img
              className={styles.macbookPro16}
              alt=""
              src="/macbook-pro-16@2x.png"
            />
            <img className={styles.cameraIcon} alt="" src="/camera@2x.png" />
            <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
            <div className={styles.screenMockupReplaceFill}>
              <img
                className={styles.image40Icon}
                alt=""
                src="/image-40@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
