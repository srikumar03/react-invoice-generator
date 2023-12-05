import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// function GenerateInvoice() {
//   html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
//     const imgData = canvas.toDataURL("image/png", 1.0);
//     const pdf = new jsPDF({
//       orientation: "portrait",
//       unit: "pt",
//       format: [612, 792],
//     });
//     pdf.internal.scaleFactor = 1;
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

//     pdf.save("invoice-001.pdf");
//   });
// }

function GenerateInvoice() {
  const scale = 5; // Adjust the scale factor to increase quality

  html2canvas(document.querySelector("#invoiceCapture"), {
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

    pdf.save("invoice-001.pdf");
  });
}

class InvoiceModal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const customStyle = {
      fontFamily: 'Georgia, "Times", "Times New Roman", serif',
      fontSize: "1rem",
    };
    const line = {
      border: "1px solid transparent",
      borderBottomColor: "black",
    };

    return (
      <div style={customStyle}>
        <Modal
          show={this.props.showModal}
          onHide={this.props.closeModal}
          size="lg"
          centered
        >
          <div id="invoiceCapture">
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
              <div className="w-100">
                <h4 className="fw-bold my-2 text-center" style={customStyle}>
                  <span
                    style={{
                      border: "10px solid black;",
                      borderBottomColor: "black;",
                      paddingBottom: "5px;",
                    }}
                  >
                    <span style={line}> SLD FITMENT CERTIFICATE </span>
                    <br />
                  </span>
                  (Generated online in VAHAN)
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
              <Row className="mb-4">
                <Col md={4}>
                  <div>To,</div>
                  <div>The Registering Authority</div>
                  <div>Transport Deportment</div>
                  <div className="fw-bolder">
                    {" "}
                    {this.props.info.Sldto &&
                      this.props.info.Sldto.toUpperCase()}
                  </div>

                  <div>{this.props.info.billToAddress || ""}</div>
                  <div>{this.props.info.billToEmail || ""}</div>
                </Col>
              </Row>
              <Row>
                {" "}
                <Col md={{ span: 6, offset: 8 }}>
                  <div className="fw-bold mt-2 text-dark">
                    SLD Fitment date: {this.props.info.dateOfIssue || ""}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>Subject</b>: Endorsement of SLD UIN no: METN40170 and Seal
                  No: MCD000352 in the vehicle registration No: TN33P4970
                </Col>
              </Row>
              {/* 
              {this.props.info.notes && (
                <div className="bg-light py-3 px-4 rounded">
                  {this.props.info.notes}
                </div>
              )} */}
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

export default InvoiceModal;
