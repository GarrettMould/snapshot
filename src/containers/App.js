import React from "react";
import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  cameras,
  films,
  accessories,
  buttonsCameras,
  buttonsFilms,
} from "../shared/shared";
import Home from "../components/Home/Home";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import PageDescription from "../components/PageDescription/PageDescription";
import Header from "../components/Header/Header";
import FilterList from "../components/FilterList/FilterList";
import ProductPage from "../components/ProductPage/ProductPage";
import FillFormProduct from "../elements/FillFormProduct/FillFormProduct";
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

  update = (e) => {
    var value = e.currentTarget.id;
    this.setState({
      display: value,
      dropdownMenu: false,
    });
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
    return (
      <Container className={classes.appContainer}>
        <Header update={this.update}></Header>

        <Routes>
          <Route
            path="/GarrettMould/cameraShopMobile"
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
