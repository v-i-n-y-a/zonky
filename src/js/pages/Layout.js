import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { ListHeader, ViewHeader } from "../components/Header";
import LoansList from "../components/LoansList";
import LoanView from "../components/LoanView";
import SortBar from "../components/SortBar";
import _ from "lodash";

//TODO show errors
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: null,
      sorted: {}
    };
  }

  componentDidMount() {
    this.componentFetch();
  }

  componentFetch() {
    fetch("/loans/marketplace")
      .then(loans => loans.json())
      .then(loans => {
        console.log("data updated");
        this.setState(state => { return {...state, loans}; });
      })
      .catch(error => {
        console.log(error);
      });
    this.checkAgain();
  }

  checkAgain() {
    setTimeout(
      () => {
        this.componentFetch();
      },
      5 * 60 * 1000
    );
  }

  getLoan(id) {
    const { loans } = this.state;
    if (!loans) return;
    return loans.find(l => `${l.id}` === id);
  }

  changeOrder = (id, order) => {
    const { loans } = this.state;
    const newLoans = _.orderBy(loans, [id], [order]);
    this.setState({loans: newLoans, sorted: {id: id, order: order} });
  };

  render() {
    const { loans, sorted } = this.state;
    return (
      <Router>
        <div class="container">
          <div class="row">
            {loans
              ? <div class="col-lg-12">
                  <Route
                    path="/loan/:loanId"
                    render={({ match }) => (
                      <div>
                        <ViewHeader title="Zonky" />
                        <LoanView loan={this.getLoan(match.params.loanId)} />
                        <Footer />
                      </div>
                    )}
                  />
                  <Route
                    path="/"
                    exact={true}
                    render={() => (
                      <div>
                        <ListHeader title="Zonky">
                          <SortBar sortMethod={this.changeOrder} sorted={sorted}/>
                        </ListHeader>
                        <LoansList loans={loans} />
                        <Footer />
                      </div>
                    )}
                  />
                </div>
              : <div class="loader"></div>}
          </div>
        </div>
      </Router>
    );
  }
}
