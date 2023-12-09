import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BiCloudDownload } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function GenerateInvoice() {
  const scale = 5; // Adjust the scale factor to increase quality

  html2canvas(document.querySelector("#invoiceCapture1"), {
    scale: scale,
    useCORS: true, // Add this option
    dpi: window.devicePixelRatio * 96,
    logging: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF();

    pdf.internal.scaleFactor = 1 / scale; // Adjust for the increased scale
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.setFont("times");

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("RCIC.pdf");
  });
}

class ReverseModel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const customStyle = {
      fontFamily: 'Georgia, "Times", "Times New Roman", serif',
      fontSize: "1rem",
    };
    const customStyle2 = {
      fontFamily: "Arial, Helvetica, sans-serif ",
    };

    const line = {
      fontFamily: "Arial, Helvetica, sans-serif ",
      border: "1px solid transparent",
      borderBottomColor: "black",
    };

    return (
      <div style={customStyle2}>
        <Modal
          show={this.props.showModal}
          onHide={this.props.closeModal}
          size="lg"
          centered
        >
          <div id="invoiceCapture1">
            <div className="d-flex flex-row justify-content-between align-items-start w-100 p-4">
              <div className="w-100">
                <h4 className="fw-bold my-2 text-center" style={customStyle}>
                  <span
                    style={{
                      border: "10px solid black;",
                      borderBottomColor: "black;",
                    }}
                  >
                    <span style={line}>
                      CERTIFICATE OF INSTALLATION OF CAMERA & REVERSE SENSOR
                    </span>
                    <br />
                  </span>

                  {/* {this.props.info.billFrom || "Name"} */}
                </h4>
              </div>
              {/* <div className="text-end ms-4">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
                <h5 className="fw-bold text-secondary">
                  {" "}
                  {this.props.currency} {this.props.total}
                </h5>
              </div> */}
            </div>

            <div className="p-4">
              <Row style={customStyle2}>
                <Col>
                  We the above named company certify that{" "}
                  <span style={{ color: "darkred" }}>
                    {this.props.info.companyorentityname.toUpperCase()}
                  </span>{" "}
                  has been installation of{" "}
                  <span style={{ color: "darkred" }}>
                    {this.props.info.typeofcamera.toUpperCase()}
                  </span>{" "}
                  and is hereby certifies as competent to install the named{" "}
                  <span>{this.props.info.equipmentname.toUpperCase()}</span>{" "}
                  equipment.
                </Col>
              </Row>
              <Row style={customStyle2} className="my-4">
                <Col>
                  <b>
                    MODELS:{" "}
                    <span style={line}>
                      {this.props.info.model.toUpperCase()}
                    </span>
                  </b>
                </Col>
              </Row>

              <Row style={customStyle2}>
                <Col>
                  The installation was carned out at{" "}
                  <span>{this.props.info.RTOname.toUpperCase()}</span> Regional
                  Transport Office on the dates listed and the named person has
                  been issued With a certificate of competency.
                </Col>
              </Row>

              <Row>
                <Col className="my-2 mt-4">
                  <b style={line}>INSTALLATION DELAILS</b>
                </Col>
              </Row>
              <Row className="my-2">
                <Col>REGISTRATION NO</Col>

                <Col>
                  {" :"}
                  <span style={{ color: "darkred" }}>
                    {this.props.info.regno.toUpperCase()}
                  </span>
                </Col>
              </Row>
              <Row className="my-2">
                <Col>MAKE/MODEL</Col>
                <Col>
                  {":"}
                  <span>{this.props.info.makemodel.toUpperCase()}</span>
                </Col>
              </Row>
              <Row className="my-2">
                <Col>CHASSIS NO</Col>
                <Col>
                  {":"}
                  <span>{this.props.info.chassisno.toUpperCase()}</span>
                </Col>
              </Row>

              <Row className="my-2">
                <Col>NAME & ADDRESS</Col>
                <Col>
                  {":"}
                  <span>{this.props.info.nameaddress.toUpperCase()}</span>
                </Col>
              </Row>

              <Row>
                <Col className="my-3">
                  I confirm that I installed{" "}
                  <span style={{ color: "darkred" }}>
                    {this.props.info.model.toUpperCase()}
                  </span>{" "}
                  is working as good condition and satisfied.
                </Col>
              </Row>

              <Row>
                <Col>
                  <span className=" mb-2">
                    DATE:{"    "}
                    {this.props.info.dateOfIssue || ""}
                  </span>{" "}
                </Col>
              </Row>
            </div>
          </div>
          <div className="pb-4 px-4">
            <Row>
              {/* <Col md={6}>
                <Button
                  variant="primary"
                  className="d-block w-100"
                  onClick={GenerateInvoice}
                >
                  <BiPaperPlane
                    style={{ width: "15px", height: "15px", marginTop: "-3px" }}
                    className="me-2"
                  />
                  Send Invoice
                </Button>
              </Col> */}
              <Col md={6} className="mx-auto">
                <Button
                  variant="outline-primary"
                  className="d-block w-100 mt-3 mt-md-0"
                  onClick={GenerateInvoice}
                >
                  <BiCloudDownload
                    style={{ width: "16px", height: "16px", marginTop: "-3px" }}
                    className="me-2"
                  />
                  Download Copy
                </Button>
              </Col>
            </Row>
          </div>
        </Modal>
        <hr className="mt-4 mb-3" />
      </div>
    );
  }
}

export default ReverseModel;
