import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import dateFormat from "dateformat";

// import InvoiceItem from "./InvoiceItem";
import InvoiceModal from "./InvoiceModal";
import InputGroup from "react-bootstrap/InputGroup";

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,

      invoiceNumber: 1,

      currentDate: "",
      dateOfIssue: "",
      Sldto: "",
      SLDUINno: "",
      SealNo: "",
      Ro: "",
      SLDmake: "",
      SLDModel: "",
      vrn: "",
      ChassisNo: "",
      EngineNo: "",
      vcolor: "",
      vmodel: "",
      vfuel: "",
      TACCOPNo: "",
      TACCOPdate: "",
      vmake: "",
      speed: "",
      fcn: "MERCYDA",
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
      invoiceNumber: 1,
      currentDate: "",
      dateOfIssue: "",
      Sldto: "",
      SLDUINno: "",
      SealNo: "",
      Ro: "",
      SLDmake: "",
      SLDModel: "",
      vrn: "",
      ChassisNo: "",
      EngineNo: "",
      vcolor: "",
      vmodel: "",
      vfuel: "",
      TACCOPNo: "",
      TACCOPdate: "",
      vmake: "",
      speed: "",
      fcn: "MERCYDA",
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
        <div className="one">
          <h2>SLD FITMENT CERTIFICATE GENERATOR</h2>
        </div>
        <Row>
          <Col md={12} lg={12}>
            <Card className="p-4 p-xl-5 my-3 my-xl-4">
              <div className="d-flex flex-row align-items-start justify-content-between mb-1">
                <div class="d-flex flex-column">
                  <div className="d-flex flex-column">
                    <div class="mb-2">
                      <span className="fw-bold">Current&nbsp;Date:&nbsp;</span>
                      <span className="current-date">
                        {dateFormat(
                          new Date().toLocaleDateString(),
                          "yyyy-mm-dd"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold d-block me-2">
                    SLD Fitment Date:
                  </span>
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
                  <Form.Label className="fw-bold">SLD To:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : ERODE RTO"}
                    rows={3}
                    value={this.state.Sldto}
                    type="text"
                    name="Sldto"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    autoComplete="name"
                    required="required"
                  />

                  <Form.Label className="fw-bold">SLD UIN no:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : ABCD13245"}
                    value={this.state.SLDUINno}
                    type="text"
                    name="SLDUINno"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">Seal No:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : ABC000123"}
                    value={this.state.SealNo}
                    type="text"
                    name="SealNo"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">R/o:</Form.Label>
                  <Form.Control
                    placeholder={'Eg : ("MAMARATHUPALAYAM",ERODE,638004,TN)'}
                    rows={3}
                    value={this.state.Ro}
                    type="text"
                    name="Ro"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    autoComplete="name"
                    required="required"
                  />

                  <Form.Label className="fw-bold">SLD Make:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : Mercydaz Instrumentation"}
                    value={this.state.SLDmake}
                    type="text"
                    name="SLDmake"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">SLD Model:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : ABC123"}
                    value={this.state.SLDModel}
                    type="text"
                    name="SLDModel"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                  <Form.Label className="fw-bold">
                    Vehicle Registration Number:
                  </Form.Label>
                  <Form.Control
                    placeholder={"TN01AA3690"}
                    rows={3}
                    value={this.state.vrn}
                    type="text"
                    name="vrn"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    autoComplete="name"
                    required="required"
                  />

                  <Form.Label className="fw-bold">Chassis No:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : WKABC4GM0053691"}
                    value={this.state.ChassisNo}
                    type="text"
                    name="ChassisNo"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                </Col>
                {/* ************************************************************************************************************* */}
                <Col className="col-12 col-lg-6">
                  <Form.Label className="fw-bold">Engine No:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : SLCAB1236"}
                    value={this.state.EngineNo}
                    type="text"
                    name="EngineNo"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">Vehicle Color:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : BLUE"}
                    value={this.state.vcolor}
                    type="text"
                    name="vcolor"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                  <Form.Label className="fw-bold">Vehicle Model:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : SWARAJ MAZDA 3500"}
                    value={this.state.vmodel}
                    type="text"
                    name="vmodel"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                  <Form.Label className="fw-bold">Vehicle Fuel:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : DIESEL"}
                    value={this.state.vfuel}
                    type="text"
                    name="vfuel"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">TAC/COP No:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : AA1234"}
                    value={this.state.TACCOPNo}
                    type="text"
                    name="TACCOPNo"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">TAC/COP Date:</Form.Label>
                  <Form.Control
                    placeholder={"Eg : SLCAB1236"}
                    value={this.state.TACCOPdate}
                    type="date"
                    name="TACCOPdate"
                    className="mb-2"
                    autoComplete="address"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />

                  <Form.Label className="fw-bold">Vehicle Make :</Form.Label>
                  <Form.Control
                    placeholder={"ABC ISUZU LTD"}
                    rows={3}
                    value={this.state.vmake}
                    type="text"
                    name="vmake"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    autoComplete="name"
                    required="required"
                  />

                  <Form.Label className="fw-bold">Set Speed :</Form.Label>
                  <Form.Control
                    placeholder={"Eg : 60"}
                    value={this.state.speed}
                    type="number"
                    max={350}
                    name="speed"
                    className="mb-2"
                    onChange={(event) => this.editField(event)}
                    required="required"
                  />
                </Col>
              </Row>
              {/* ------------------------- */}
              <Form.Label className="fw-bold text-center">
                Fitment Center Name:{" "}
              </Form.Label>
              <Form.Control
                placeholder={"Eg : MERCYDA"}
                value={this.state.fcn}
                type="text"
                max={350}
                name="fcn"
                className="mb-2 text-center"
                onChange={(event) => this.editField(event)}
                required="required"
              />
              {/* ------------------------- */}
              {/* <InvoiceItem
                onItemizedItemEdit={this.onItemizedItemEdit.bind(this)}
                onRowAdd={this.handleAddEvent.bind(this)}
                onRowDel={this.handleRowDel.bind(this)}
                currency={this.state.currency}
                items={this.state.items}
              /> */}

              {/* <Form.Label className="fw-bold">Notes:</Form.Label>
              <Form.Control
                placeholder="Thanks for your business!"
                name="notes"
                value={this.state.notes}
                onChange={(event) => this.editField(event)}
                as="textarea"
                className="my-2"
                rows={1}
              /> */}
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
              <InvoiceModal
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

export default InvoiceForm;
