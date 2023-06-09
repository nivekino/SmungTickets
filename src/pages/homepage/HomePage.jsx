import React from "react";
import "./assets/home.css";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/card";

export const HomePage = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-text">
          <h1 className="txt-banner">¡Reserva tu aventura con nosotros!</h1>
        </div>
      </div>
      <div className="container">
        <h1 className="title-page">Eventos próximos...</h1>
        <div className="container-cards">
          <Card />

          <Card />

          <Card />
        </div>

        <button className="btn-load-more">Cargar más eventos</button>
      </div>
      <Footer />
    </>
  );
};
