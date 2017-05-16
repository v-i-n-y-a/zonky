import React, { Component } from "react";
import SortItem from "./SortItem";
import { sortItems } from "../../../config";

export default class SortBar extends Component {
  render() {
    const { sortMethod, sorted } = this.props;
    return (
      <div>
        {sortItems.map(({id, title}, index) => {
          const order = id === sorted.id ? sorted.order : null;
          return (
            <SortItem key={index} title={title} id={id} sortMethod={sortMethod} order={order}/>
          );
        })}
      </div>
    );
  }
}
