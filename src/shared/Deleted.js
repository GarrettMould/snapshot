//<FilterList
/*buttonsFilms={this.state.buttonsFilms}
buttonsCameras={this.state.buttonsCameras}
display={this.state.display}
></FilterList>

<MainCard
          text={this.state.MainCardCameras.text}
          image={this.state.MainCardCameras.image}
        ></MainCard>
        <MainCard
          text={this.state.MainCardFilm.text}
          image={this.state.MainCardFilm.image}
        ></MainCard>

*/

<FormPageDevelop
  paymentMethod={this.state.paymentMethod}
  onDropDownChange={this.onDropDownChange}
  display={this.state.componentDisplay.formFill}
  onClick={this.displayFormFill}
  checkboxClick={this.displayFormFillAddress}
  displayAddress={this.state.componentDisplay.formFillAddress}
></FormPageDevelop>;

// Payment Notice Bank Transfer
<div className={classes.paymentNotice}>
  <span style={{ fontFamily: "NexaRegular" }}>Note:</span> Please send bank
  transfer within 24 hours of purchase
</div>;
