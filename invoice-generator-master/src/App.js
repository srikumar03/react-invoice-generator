import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Pages from "./pages";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPCView: true,
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    // isPCView based on the window width
    this.setState({ isPCView: window.innerWidth >= 768 });
  };

  handleLoginSuccess = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    const { isPCView, isAuthenticated } = this.state;

    return (
      <div
        className={`App ${
          isPCView ? "d-flex" : ""
        } flex-column align-items-center justify-content-center w-100`}
      >
        {isAuthenticated ? (
          <Container>
            <Pages />
          </Container>
        ) : (
          <Login onLoginSuccess={this.handleLoginSuccess} />
        )}
      </div>
    );
  }
}

export default App;
