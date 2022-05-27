import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { cameras, films, buttonsCameras, buttonsFilms } from "../shared/shared";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import PageDescription from "../components/PageDescription/PageDescription";
import Header from "../components/Header/Header";
import FilterList from "../components/FilterList/FilterList";
import ProductPage from "../components/ProductPage/ProductPage";
import FormPageDevelop from "../components/FormPageDevelop/FormPageDevelop";
import FormPageProduct from "../components/FormPageProduct/FormPageProduct";
import PaymentConfirmation from "../elements/PaymentConfirmation/PaymentConfirmation";
import classes from "./App.module.css";

class App extends Component {
  state = {
    componentDisplay: {
      formFill: false,
      formFillAddress: false,
    },
    paymentMethod: "transfer",
    display: "cameras",
    selectedProduct: "",
    cameras: cameras,
    films: films,
    buttonsFilms: buttonsFilms,
    buttonsCameras: buttonsCameras,
  };

  update = (e) => {
    var value = e.target.id;
    this.setState({
      display: value,
    });
  };

  updateCheckedValue = (e) => {
    console.log(this.state.paymentMethod);
  };

  select = (e) => {
    var id = e.target.id;
    var productInfo = this.state.display == "cameras" ? cameras[id] : films[id];
    console.log(productInfo);
    this.setState({
      selectedProduct: productInfo,
    });
  };

  displayFormFill = () => {
    this.setState({
      componentDisplay: {
        formFill: true,
      },
    });
    console.log("Blah");
  };

  displayFormFillAddress = () => {
    this.state.componentDisplay.formFillAddress
      ? this.setState({
          componentDisplay: {
            formFill: true,
            formFillAddress: false,
          },
        })
      : this.setState({
          componentDisplay: {
            formFill: true,
            formFillAddress: true,
          },
        });
  };

  onDropDownChange = (e) => {
    var value = e.target.value;

    this.setState({
      paymentMethod: value,
    });
    console.log(this.state.paymentMethod);
  };

  render() {
    return (
      <Container className={classes.appContainer}>
        <Header></Header>
        <PageDescription></PageDescription>
        <FilterList
          buttonsFilms={this.state.buttonsFilms}
          buttonsCameras={this.state.buttonsCameras}
          display={this.state.display}
          update={this.update}
        ></FilterList>
        <ProductSlider
          cameras={this.state.cameras}
          films={this.state.films}
          display={this.state.display}
          select={this.select}
        ></ProductSlider>
        <ProductPage selectedProduct={this.state.selectedProduct}></ProductPage>
        <FormPageProduct
          selectedProduct={this.state.selectedProduct}
          onDropDownChange={this.onDropDownChange}
        ></FormPageProduct>
        <PaymentConfirmation
          defaultValue={this.state.paymentMethod}
          onPaymentMethodChange={this.updateCheckedValue}
          selectedProduct={this.state.selectedProduct}
        ></PaymentConfirmation>
      </Container>
    );
  }
}

export default App;
