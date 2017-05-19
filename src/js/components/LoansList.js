import React, { Component } from "react";
import ShortLoanView from "./ShortLoanView";
import _ from "lodash";

export default class LoansList extends Component {
  render() {
    const { loans } = this.props;
    const rows = _.chunk(loans, 3);

    return (
      <div>
        {rows
          ? rows.map((loans, index) => (
              <div class="row container-fluid" key={index}>
                {loans &&
                  loans.map((loan, index) => (
                    <ShortLoanView loan={loan} key={index} />
                  ))}
              </div>
            ))
          : <div>Dnes nejsou žadnych pujček</div>}
      </div>
    );
  }
}
