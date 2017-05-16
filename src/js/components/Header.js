import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div class="header page-header">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    );
  }
}

export class ListHeader extends React.Component {
  render () {
    const { title, children } = this.props;
    return (
      <Header title={title}>
        {children}
      </Header>
    );
  }
};

export const ViewHeader = ({ title }) => {
  const homeLink = (<Link to="/">{title}</Link>);
  return <Header title={homeLink} />;
};
