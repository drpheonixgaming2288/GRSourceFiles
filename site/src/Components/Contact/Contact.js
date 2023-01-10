import React from "react";
import { Link } from "react-router-dom";
import { mobileView, BrowserView, MobileView } from "react-device-detect";

export default function Contact() {
  return (
    <>
      <BrowserView>
      <div className="row">
          <div style={{ background: "#99d8ff" }} className="pb-2 pt-2 mx-auto">
            <div
              style={{ fontFamily: "Josefin Sans", width: "50vw" }}
              className="pt-5 bg-white mx-auto rounded"
            >
              <h1>Contact us!</h1>
              <h4
                as={{ Link }}
                style={{ color: "black", cursor: "pointer" }}
                className="fa-solid fa-envelope mb-5"
                onClick={() =>
                  (window.location = "mailto:diamonddoesmusic@gmail.com")
                }
              >
                {""} diamonddoesmusic@gmail.com
              </h4>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
          <div style={{ background: "#99d8ff", width: '100vw' }} className="pb-2 pt-2">
            <div
              style={{ fontFamily: "Josefin Sans", width: "90vw" }}
              className="pt-5 bg-white mx-auto rounded"
            >
              <h1>Contact us!</h1>
              <h4
                as={{ Link }}
                style={{ color: "black", cursor: "pointer", fontSize: '17px', }}
                className="fa-solid fa-envelope mb-5"
                onClick={() =>
                  (window.location = "mailto:diamonddoesmusic@gmail.com")
                }
              >
                {""} diamonddoesmusic@gmail.com
              </h4>
            </div>
          </div>
      </MobileView>
    </>
  );
}
