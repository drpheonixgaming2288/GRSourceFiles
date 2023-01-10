import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-black text-white" style={{height: '100vh'}}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Our social networks:</span>
          </div>
          <div>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100084756103143" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/GarageRekordz" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCkQDiDlt7b4LNqr25A3VHxA" className="me-4 text-reset">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/garagerekordzofficial/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-music me-3"></i>Garage Rekordz
                </h6>
                <p style={{fontStyle: 'italic'}}>
                  Website made by <a target={"_blank"} href="https://twitter.com/TheOnlyDylanR">Dylan</a>.
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Artists
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" target="_blank" href="https://garagerekordz.com/">
            {""} Garage Rekordz
          </a>
        </div>
      </footer>
    </div>
  );
}
