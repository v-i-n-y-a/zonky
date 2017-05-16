import React from "react";

export default class SortItem extends React.Component {
  getIcon(order) {
    if (order === "asc")
      return "glyphicon-sort-by-attributes";
    if (order === "desc")
      return "glyphicon-sort-by-attributes-alt";
    return "glyphicon-sort";
  }

  toggleOrder = e => {
    e.preventDefault();
    const { id, sortMethod, order } = this.props;
    if (order === null || order === "desc") {
      return sortMethod(id, "asc"); 
    }
    if (order === "asc") {
      return sortMethod(id, "desc"); 
    }
    return;
  };

  render() {
    const { title, order } = this.props;
    const icon = this.getIcon(order);
    return (
      <a href="#" class="btn btn-link" onClick={this.toggleOrder}>
        <span class={`glyphicon ${icon}`} aria-hidden="true" />
        <span class="sort-item-title">{title}</span>
      </a>
    );
  }
}
