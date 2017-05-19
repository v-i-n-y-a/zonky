import React, { Component } from "react";
import Img from "../components/Img";
import { Link } from "react-router-dom";

export default class ShortLoanView extends Component {
  //This function will make text shorter than 200 symbols
  //and shoter than 20 words
  shortText(text, maxLen = 200, maxWordsNum = 20) {
    if (!text) return;

    //split by the spases and newlines
    let words = text.split(/\r?\n|\s/);
    let addEllipsis = false;
    if (words.length > maxWordsNum) {
      words = words.slice(0, maxWordsNum);
      text = words.join(" ");
      addEllipsis = true;
    }
    if (text.length > maxLen) {
      text = text.substr(0, max);
      addEllipsis = true;
    }
    return addEllipsis ? text = `${text}...` : text;
  }

  render() {
    const { loan } = this.props;
    return (
      <div class="short-loan-view col-md-4">
        <Link class="link list-group-item" to={`/loan/${loan.id}`}>
          <h2>
            {loan.name}
          </h2>
          {loan.photos.map((photo, index) => (
            <div key={index}>
              <Img src={photo.url} alt={photo.name} />
            </div>
          ))}
          <p>
            {loan.story && this.shortText(loan.story)}
          </p>
        </Link>
      </div>
    );
  }
}
