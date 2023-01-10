import React from "react";

export default function Home() {
  return (
    <div style={{background: '#99d8ff'}} className="pb-2 pt-2">
      <div
        className="mx-auto shadow bg-light text-dark rounded-1"
        style={{ width: "60vw", color: "white" }}
      >
        <img
          src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/GRLogo.png"
          className="img-fluid hover-shadow rounded"
          alt="Garage Records Logo"
          width={"200px"}
          style={{ marginTop: "30px", marginBottom: "30px" }}
        />
        <h4 className="pb-3" style={{marginLeft: '5px', marginRight: '5px', fontFamily: 'Josefin Sans'}}>
          Garage Rekordz is a small record label based out of Tuttle Oklahoma
          and was originally made because an artist by the name of "Diamond"
          wanted to have a label for artists to be able to say whatever they
          wanted in songs and not get restricted or censored. The label
          currently consists of 5 artists.
        </h4>
      </div>
    </div>
  );
}
