import React from "react";
import styles from "./Bio.module.css";
// import bioPic from "./bio-pic.jpg";

function Bio(props) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      {/* <img src={bioPic} alt="James K Nelson" /> */}
      <p>
        Welcome to my new blog made with <a href="https://mdxjs.com/">MDX</a>,
        and <a href="https://frontarm.com/navi/">Navi</a> <br />
        Thanks to{" "}
        <a href="https://github.com/frontarm/create-react-blog">
          create react blog
        </a>{" "}
        made by <a href="https://twitter.com/james_k_nelson/">James K Nelson</a>
      </p>
    </div>
  );
}

export default Bio;
