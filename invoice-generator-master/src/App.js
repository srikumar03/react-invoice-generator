import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPCView: true,
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
    // Update isPCView based on the window width
    this.setState({ isPCView: window.innerWidth >= 768 });
  };

  render() {
    const { isPCView } = this.state;

    return (
      <div
        className={`App ${
          isPCView ? "d-flex" : ""
        } flex-column align-items-center justify-content-center w-100`}
      >
        {isPCView ? (
          <Container>
            <InvoiceForm />
          </Container>
        ) : (
          <div className="non-pc-view">
            {/* GIF for non-PC views as a clickable link */}
            <a
              href="#"
              onClick={() =>
                alert(
                  "Please open this site on a PC or laptop for the optimal experience."
                )
              }
              
            >
              <img
                src="https://media.giphy.com/media/3oKGzgNfssFG1xlwC4/giphy.gif"
                alt="Best Viewed on PC or Laptop"
                style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
              />
            </a>

            {/* Message for non-PC views */}
            <p className="text-center mt-3">
              This content is best viewed on PC or laptop. Click the GIF to view
              the site on a PC or laptop for the optimal experience.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
