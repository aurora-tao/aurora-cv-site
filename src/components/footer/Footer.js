import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by YUNXING TAO")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © 2025 Aurora. All rights reserved.
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          "This was the very first page, not where the story line ends"
        </p>
      </div>
    </Fade>
  );
}
