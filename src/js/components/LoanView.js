import React, { Component } from "react";
import moment from "moment";
import Img from "./Img";

const Info = ({ title, value }) => {
  if (value === true) value = "Ano";
  else if (value === false) value = "Ne";
  return (
    <p class="info">
      <span class="info-title">{title}:</span>
      <span class="info-value">{value}</span>
    </p>
  );
};

const LoanView = ({ loan }) => {
  return (
    <div class="loan-view jumbotron list-group">
      <div class="row">
        <div class="col-md-4">
          {loan.photos.map((photo, index) => (
            <Img key={index} src={photo.url} alt={photo.name} />
          ))}

          <h2>Další informace</h2>
          <Info title="Úroková sazba" value={`${loan.interestRate}%`} />
          <Info
            title="Uzávěrka"
            value={moment(loan.deadline).format("YYYY-MM-DD")}
          />
          <Info title="Částka" value={`${loan.amount}Kč`} />
          <Info title="Na jak dlouho" value={`${loan.termInMonths} Měsicu`} />
        </div>
        <div class="col-md-6">
          <h1> {loan.name} </h1>
          <div> {loan.story} </div>
          <div class="loan-view-details">
            <Info title="Autor" value={loan.nickName} />
            <Info
              title="Bylo Publikováno"
              value={moment(loan.datePublished).format("YYYY-MM-DD")}
            />
            <Info title="Hodnocení" value={loan.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanView;
