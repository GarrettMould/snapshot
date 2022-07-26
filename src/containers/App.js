import React from "react";
import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  cameras,
  films,
  accessories,
  buttonsCameras,
  buttonsFilms,
} from "../shared/shared";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import ProductPage from "../components/ProductPage/ProductPage";

import FormPageProduct from "../components/FormPageProduct/FormPageProduct";
import PaymentConfirmation from "../elements/PaymentConfirmation/PaymentConfirmation";
import OrderConfirmation from "../components/OrderConfirmation/OrderConfirmation";
import Footer from "../components/Footer/Footer";
import classes from "./App.module.css";

class App extends Component {
  state = {
    componentDisplay: {
      formFill: false,
      formFillAddress: false,
    },

    dropdownMenu: false,
    paymentMethod: "transfer",
    display: "Cameras",
    selectedProduct: "",
    cameras: cameras,
    films: films,
    accessories: accessories,
    buttonsFilms: buttonsFilms,
    buttonsCameras: buttonsCameras,
  };

  dropdownToggle = () => {
    if (this.state.dropdownMenu) {
      this.setState({ dropdownMenu: false });
    } else {
      this.setState({ dropdownMenu: true });
    }
  };

  update = (e) => {
    var value = e.currentTarget.id;
    console.log(value);
    this.setState({ display: value });
  };

  updateCheckedValue = (e) => {
    console.log(this.state.paymentMethod);
  };

  select = (e) => {
    var id = e.currentTarget.id;
    var productInfo;

    if (this.state.display == "Cameras") {
      productInfo = cameras[id];
    } else if (this.state.display == "Film") {
      productInfo = films[id];
    } else if (this.state.display == "Accessories") {
      productInfo = accessories[id];
    }

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
    console.log(this.state.dropdownMenu);
    return (
      <Container className={classes.appContainer}>
        <Header
          ref={this.myRef}
          update={this.update}
          dropdownToggle={this.dropdownToggle}
        ></Header>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                buttonsFilms={this.state.buttonsFilms}
                buttonsCameras={this.state.buttonsCameras}
                display={this.state.display}
                update={this.update}
                cameras={this.state.cameras}
                films={this.state.films}
                accessories={this.state.accessories}
                select={this.select}
              ></Home>
            }
          />
          <Route
            path="productPage"
            element={
              <ProductPage selectedProduct={this.state.selectedProduct} />
            }
          />
          <Route
            path="formPageProduct"
            element={
              <FormPageProduct
                selectedProduct={this.state.selectedProduct}
                onDropDownChange={this.onDropDownChange}
              ></FormPageProduct>
            }
          />
          <Route
            path="paymentConfirmation"
            element={
              <PaymentConfirmation
                defaultValue={this.state.paymentMethod}
                onPaymentMethodChange={this.updateCheckedValue}
                selectedProduct={this.state.selectedProduct}
              ></PaymentConfirmation>
            }
          />
          <Route
            path="orderConfirmation"
            element={<OrderConfirmation></OrderConfirmation>}
          />
        </Routes>
        <Footer></Footer>
      </Container>
    );
  }
}

export default App;
