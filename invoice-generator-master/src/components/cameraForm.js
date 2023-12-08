import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

// import InvoiceItem from "./InvoiceItem";
import CameraModel from "./cameraModel";
// import InputGroup from "react-bootstrap/InputGroup";

class CameraForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dateOfIssue: new Date().toISOString().substr(0, 10),
      typeofcamera: "",
      companyorentityname: "",
      equipmentname: "",
      model: "",
      RTOname: "",
      regno: "",
      makemodel: "",
      chassisno: "",
      cameraserialno: "",
      nameaddress: "",
    };
    this.handleReset = this.handleReset.bind(this);

    this.state.items = [
      {
        id: 0,
        name: "",
        description: "",
        price: "1.00",
        quantity: 1,
      },
    ];
    this.editField = this.editField.bind(this);
  }

  handleReset() {
    this.setState({
      isOpen: false,
      dateOfIssue: new Date().toISOString().substr(0, 10),
      typeofcamera: "",
      companyorentityname: "",
      equipmentname: "",
      model: "",
      RTOname: "",
      regno: "",
      makemodel: "",
      chassisno: "",
      cameraserialno: "",
      nameaddress: "",
      items: [
        {
          id: 0,
          name: "",
          description: "",
          price: "1.00",
          quantity: 1,
        },
      ],
    });
  }

  componentDidMount(prevProps) {
    this.handleCalculateTotal();
  }
  handleRowDel(items) {
    var index = this.state.items.indexOf(items);
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
  }
  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var items = {
      id: id,
      name: "",
      price: "1.00",
      description: "",
      quantity: 1,
    };
    this.state.items.push(items);
    this.setState(this.state.items);
  }
  handleCalculateTotal() {
    var items = this.state.items;
    var subTotal = 0;

    items.map(function (items) {
      subTotal = parseFloat(
        subTotal + parseFloat(items.price).toFixed(2) * parseInt(items.quantity)
      ).toFixed(2);
      return subTotal;
    });

    this.setState(
      {
        subTotal: parseFloat(subTotal).toFixed(2),
      },
      () => {
        this.setState(
          {
            taxAmmount: parseFloat(
              parseFloat(subTotal) * (this.state.taxRate / 100)
            ).toFixed(2),
          },
          () => {
            this.setState(
              {
                discountAmmount: parseFloat(
                  parseFloat(subTotal) * (this.state.discountRate / 100)
                ).toFixed(2),
              },
              () => {
                this.setState({
                  total:
                    subTotal -
                    this.state.discountAmmount +
                    parseFloat(this.state.taxAmmount),
                });
              }
            );
          }
        );
      }
    );
  }
  onItemizedItemEdit(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    var items = this.state.items.slice();
    var newItems = items.map(function (items) {
      for (var key in items) {
        if (key === item.name && items.id === item.id) {
          items[key] = item.value;
        }
      }
      return items;
    });
    this.setState({ items: newItems });
    this.handleCalculateTotal();
  }
  editField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.handleCalculateTotal();
  };
  onCurrencyChange = (selectedOption) => {
    this.setState(selectedOption);
  };
  openModal = (event) => {
    event.preventDefault();
    this.handleCalculateTotal();
    this.setState({ isOpen: true });
  };
  closeModal = (event) => this.setState({ isOpen: false });
  render() {
    return (
      <Form onSubmit={this.openModal}>
        <div className="one mt-1 mt-md-5 pt-md-5 pt-3">
          <h2>CAMERA INSTALLATION CERTIFICATE GENERATOR</h2>
        </div>
        <Row>
          <Col md={12} lg={12}>
            <Card className="p-4 p-xl-5 my-3 my-xl-4">
              <div className="d-flex flex-row align-items-start justify-content-between mb-1">
                <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold d-block me-2">Issued Date:</span>
                  <Form.Control
                    type="date"
                    value={this.state.dateOfIssue}
                    name={"dateOfIssue"}
                    onChange={(event) => this.editField(event)}
                    style={{
                      maxWidth: "150px",
                    }}
                    required="required"
                  />
                </div>
              </div>
              <hr className="my-4" />
              <Row className="mb-5">
                <Col className="col-12 col-lg-6">
                  <Form.Label className="fw-bold">
                    Company or Entity Name:
                  </Form.Label>
                  <Form.Control
                    placeholder={"Eg : EZVIZ CIC SMART TRACKING"}
                    rows={3}
                    value={this.state.companyorentityname}
                    type="text"
                    name="companyorentityname"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    autoComplete="name"
                    required="required"
                  />

                  <Form.Label className="fw-bold">Type of Camera:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : WI-FI CAMERA"}
                    value={this.state.typeofcamera}
                    type="text"
                    name="typeofcamera"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">Equipment Name:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : SECURITY CAMERA"}
                    value={this.state.equipmentname}
                    type="text"
                    name="equipmentname"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">Model Name:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : EZVIZ CIC WI-FI SECURITY CAMERA"}
                    rows={3}
                    value={this.state.model}
                    type="text"
                    name="model"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    autoComplete="name"
                    required="required"
                  />

                  <Form.Label className="fw-bold">RTO Name:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : PERUNDURAI"}
                    value={this.state.RTOname}
                    type="text"
                    name="RTOname"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                </Col>
                {/* ************************************************************************************************************* */}
                <Col className="col-12 col-lg-6">
                  <Form.Label className="fw-bold">Registration No:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : TN33X0369"}
                    value={this.state.regno}
                    type="text"
                    name="regno"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                  <Form.Label className="fw-bold">Make/Model:</Form.Label>
                  <Form.Control
                    placeholder={"EICHER"}
                    rows={3}
                    value={this.state.makemodel}
                    type="text"
                    name="makemodel"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    autoComplete="name"
                    required="required"
                  />

                  <Form.Label className="fw-bold">Chassis No:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : WKABC4GM0053691"}
                    value={this.state.chassisno}
                    type="text"
                    name="chassisno"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                  <Form.Label className="fw-bold">Camera Serial no:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : AFFDDFG"}
                    value={this.state.cameraserialno}
                    type="text"
                    name="cameraserialno"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">Name & Address:</Form.Label>
                  <Form.Control
                    placeholder={
                      "Eg : Kongu Engineering College,Perundurai,Erode"
                    }
                    value={this.state.nameaddress}
                    type="text"
                    name="nameaddress"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={12} lg={12}>
            <Row>
              <Col>
                <Button
                  md={12}
                  lg={5}
                  type="submit"
                  variant="success"
                  className="d-block w-100  mx-auto my-3"
                >
                  Review PDF
                </Button>
              </Col>

              <Col>
                <Button
                  md={12}
                  lg={5}
                  type="reset"
                  onClick={this.handleReset}
                  variant="danger"
                  className="d-block w-100  mx-auto my-3"
                >
                  Reset
                </Button>
              </Col>
            </Row>
            <div className="sticky-top pt-md-3 pt-xl-4">
              <CameraModel
                showModal={this.state.isOpen}
                closeModal={this.closeModal}
                info={this.state}
                items={this.state.items}
                currency={this.state.currency}
                subTotal={this.state.subTotal}
                taxAmmount={this.state.taxAmmount}
                discountAmmount={this.state.discountAmmount}
                total={this.state.total}
              />
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default CameraForm;
