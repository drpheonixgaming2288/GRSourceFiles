import React from "react";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView } from "react-device-detect";

export default function Artists() {
  return (
    <>
      <MobileView>
        <>
          <Helmet>
            <title>GR | Artists</title>
          </Helmet>
          <div style={{ width: "50vw" }} className="col-1-md mx-auto">
            <div className="card mb-3 mt-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/g.png"
                className="card-img-top"
                alt="Picture of Diamond"
              />
              <div className="card-body">
                <h5 className="card-title">Diamond</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-twitter"
                  target={"_blank"}
                  href="https://twitter.com/GarageRekordz/media"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCvame3PbrtHN_jU3P7tzduA"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-facebook"
                  target={"_blank"}
                  href="https://www.facebook.com/profile.php?id=100083634846167"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-instagram"
                  target="_blank"
                  href="https://www.instagram.com/garagerekordzofficial/"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-soundcloud"
                  target="_blank"
                  href="https://soundcloud.com/garagerekordz"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "50vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/c.png"
                className="card-img-top"
                alt="Picture of Tristen"
              />
              <div className="card-body">
                <h5 className="card-title">Tristen</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCWf2iz58imEECWpFRdArtVg"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-facebook"
                  target={"_blank"}
                  href="https://www.facebook.com/profile.php?id=100083081116661"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-spotify"
                  target={"_blank"}
                  href="https://open.spotify.com/artist/1gpJYgGwRIbudCfMinEVfS?si=CcAHjD8rSoqvH-CEgc3mnQ&utm_medium=share&utm_source=linktree&nd=1"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-soundcloud"
                  target={"_blank"}
                  href="https://soundcloud.com/thetristy"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "50vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/channels4_profile.jpg"
                className="card-img-top"
                alt="Picture of Uncle Skrimp"
              />
              <div className="card-body">
                <h5 className="card-title">Uncle Skrimp</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/@uncleskrimp"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "50vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/channels7_profile.jpg"
                className="card-img-top"
                alt="A-Gray logo"
              />
              <div className="card-body">
                <h5 className="card-title">A-Gray</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/@A-Gray/"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "50vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/channels9_profile.jpg"
                className="card-img-top"
                alt="Weston logo"
              />
              <div className="card-body">
                <h5 className="card-title">Weston</h5>
                <a style={{ width: "20px" }} className="fab fa-twitter"></a>
                <a style={{ width: "20px" }} className="fab fa-youtube"></a>
                <a style={{ width: "20px" }} className="fab fa-facebook"></a>
                <a style={{ width: "20px" }} className="fab fa-instagram"></a>
              </div>
            </div>
          </div>
        </>
      </MobileView>
      <BrowserView>
        <div className="row mx-auto mb-5 mt-5">
          <Helmet>
            <title>GR | Artists</title>
          </Helmet>
          <div style={{ width: "30vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/g.png"
                className="card-img-top"
                alt="Picture of Diamond"
              />
              <div className="card-body">
                <h5 className="card-title">Diamond</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-twitter"
                  target={"_blank"}
                  href="https://twitter.com/GarageRekordz/media"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCvame3PbrtHN_jU3P7tzduA"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-facebook"
                  target={"_blank"}
                  href="https://www.facebook.com/profile.php?id=100083634846167"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-instagram"
                  target="_blank"
                  href="https://www.instagram.com/garagerekordzofficial/"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-soundcloud"
                  target="_blank"
                  href="https://soundcloud.com/garagerekordz"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "30vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/c.png"
                className="card-img-top"
                alt="Picture of Tristen"
              />
              <div className="card-body">
                <h5 className="card-title">Tristen</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCWf2iz58imEECWpFRdArtVg"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-facebook"
                  target={"_blank"}
                  href="https://www.facebook.com/profile.php?id=100083081116661"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-spotify"
                  target={"_blank"}
                  href="https://open.spotify.com/artist/1gpJYgGwRIbudCfMinEVfS?si=CcAHjD8rSoqvH-CEgc3mnQ&utm_medium=share&utm_source=linktree&nd=1"
                ></a>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-soundcloud"
                  target={"_blank"}
                  href="https://soundcloud.com/thetristy"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "30vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/channels4_profile.jpg"
                className="card-img-top"
                alt="Picture of Uncle Skrimp"
              />
              <div className="card-body">
                <h5 className="card-title">Uncle Skrimp</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/@uncleskrimp"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "30vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/channels7_profile.jpg"
                className="card-img-top"
                alt="A-Gray logo"
              />
              <div className="card-body">
                <h5 className="card-title">A-Gray</h5>
                <a
                  style={{ width: "20px" }}
                  className="fab fa-youtube"
                  target={"_blank"}
                  href="https://www.youtube.com/@A-Gray/"
                ></a>
              </div>
            </div>
          </div>
          <div style={{ width: "30vw" }} className="col-1-md mx-auto">
            <div className="card mb-3">
              <img
                src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/channels9_profile.jpg"
                className="card-img-top"
                alt="Weston logo"
              />
              <div className="card-body">
                <h5 className="card-title">Weston</h5>
                <a style={{ width: "20px" }} className="fab fa-twitter"></a>
                <a style={{ width: "20px" }} className="fab fa-youtube"></a>
                <a style={{ width: "20px" }} className="fab fa-facebook"></a>
                <a style={{ width: "20px" }} className="fab fa-instagram"></a>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  );
}
