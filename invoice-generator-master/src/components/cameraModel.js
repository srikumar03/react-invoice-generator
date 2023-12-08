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

    pdf.save("CIC.pdf");
  });
}

class CameraModel extends React.Component {
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
    const fow = {
      fontWeight: "700",
    };
    const line = {
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
                      paddingBottom: "5px;",
                    }}
                  >
                    <span style={line}>
                      CERTIFICATE OF INSTALLATION OF CAMERA
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
              <Row className="mb-4" style={customStyle2}>
                <Col md={4}>
                  We the above named company certify that
                  <span style={fow}>
                    {this.props.info.Sldto.toUpperCase()}
                  </span>{" "}
                  has been installation of{" "}
                  <span style={fow}>{this.props.info.Sldto.toUpperCase()}</span>{" "}
                  and is hereby certifies as competent to install the named
                  <span style={fow}>
                    {this.props.info.Sldto.toUpperCase()}
                  </span>{" "}
                  equipment.
                </Col>
                {/* 
                <Col md={{ span: 6, offset: 8 }}>
                  <span className=" mb-2" style={fow}>
                    SLD Fitment date: -{this.props.info.dateOfIssue || ""}
                  </span>{" "}
                </Col> */}
              </Row>
              <Row style={customStyle2}>
                <Col>
                  <b>
                    MODELS:{" "}
                    <span style={fow}>
                      {this.props.info.Sldto.toUpperCase()}
                    </span>
                  </b>
                </Col>
              </Row>

              <Row className="my-3" style={customStyle2}>
                <Col>Dear Sir,</Col>
              </Row>
              <Row style={customStyle2}>
                <Col>
                  The installation was carned out at PERUNDURAI Regional
                  Transport Ottice On the dates listed and the named person has
                  been issued With a certificate of competency
                </Col>
              </Row>

              <Row>
                <Col>
                  Our retro-fitment center is approved by state Government
                  Transport Department for fitment of Speed Limiting Device.
                </Col>
              </Row>

              <Row>
                <Col>
                  According to TAC/COP No :{" "}
                  <span style={fow}>
                    {this.props.info.TACCOPNo.toUpperCase()}
                  </span>{" "}
                  Dated{" "}
                  <span style={fow}>
                    {this.props.info.TACCOPdate.toUpperCase()}
                  </span>{" "}
                  , the SLD so fitted is type approved by for the vehicle make :{" "}
                  <span style={fow}>{this.props.info.vmake.toUpperCase()}</span>{" "}
                  Vehicle Model :{" "}
                  <span style={fow}>
                    {this.props.info.vmodel.toUpperCase()}
                  </span>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  The set speed of the vehicle is:{" "}
                  <span style={fow}>{this.props.info.speed.toUpperCase()}</span>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  The SLD is duly sealed using Seal no:{" "}
                  <span style={fow}>
                    {this.props.info.SealNo.toUpperCase()}
                  </span>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  Unique Identification Number of SLD is:{" "}
                  <span style={fow}>
                    {this.props.info.SLDUINno.toUpperCase()}
                  </span>{" "}
                </Col>
              </Row>

              <Row>
                <Col className="my-5">
                  Registration number of the vehicle is engraved on the SLD
                  fitted.
                </Col>
              </Row>

              <Row>
                <Col>
                  <div>Thanking You </div>

                  <div>(Authorized Signatory)</div>

                  <div>
                    {" "}
                    Fitment Center Name:{" "}
                    <span style={fow}>{this.props.info.fcn.toUpperCase()}</span>
                  </div>
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

export default CameraModel;
