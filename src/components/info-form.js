import React, { Component } from "react";
import "../styles/info-form.css";

class InfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email1: "",
      email2: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      how_did_you_hear: ""
    };
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();    
  };

  render() {
    return (
    <form onSubmit={this.handleFormSubmit}>
      <div>
        <p>1. Personal information</p>
        <hr />
      </div>
      <div className="name-phone">
        <div className="half-name">
          <input type="text" id="name" name="name" placeholder="Full name*" pattern="^[a-zA-Z][a-zA-Z0-9-_\.\s]{2,20}" value={this.state.name} onChange={e => this.setState(
          { name: e.target.value }
          )} required 
        />
        </div>
        <div className="half-phone">
          <input type="text" id="phone" name="phone" placeholder="Phone*" pattern="^(\+|00)358-?0?(457|50|4[0-9])-?\d{7}" value={this.state.phone} onChange={e => this.setState(
          { phone: e.target.value }
          )} required />
        </div>
        </div>
        <div>
          <input type="email" id="mail" name="mail" placeholder="E-mail*" value={this.state.email1} onChange={e => this.setState(
          { email1: e.target.value }
          )} required />
        </div>
        <div>
          <input type="email" id="remail" name="mail" placeholder="Re-enter E-mail*" value={this.state.email2} onChange={e => this.setState(
            { email2: e.target.value }
          )} required />
        <span id="confirmEmail" className="confirmEmail" />
        </div>
        <div>
          <input type="text" id="address" name="address" placeholder="Address*" pattern="\w+(\s\w+)*" value={this.state.address} onChange={e => this.setState(
          { address: e.target.value }
          )} required />
        </div>
        <div className="csrz">
          <div className="quarter-city">
            <input type="text" id="city" name="city" placeholder="City*" pattern="[a-zA-Z]{2,}" value={this.state.city} onChange={e => this.setState(
            { city: e.target.value }
            )} required />
          </div>
          <div className="quarter-state">
            <input type="text" id="state" name="state" placeholder="State" pattern="[a-zA-Z]{2,}" value={this.state.state} onChange={e => this.setState(
            { state: e.target.value }
            )} />
          </div>
          <div className="quarter-region">
            <input type="text" id="country" name="country" placeholder="Country/Region*" pattern="[a-zA-Z]{2,}" value={this.state.country} onChange={e => this.setState(
            { country: e.target.value }
             )} required />
          </div>
          <div className="quarter-zip">
            <input type="text" id="zipcode" name="zip" placeholder="Zip/Postal Code" pattern="[0-9]{5}" value={this.state.zipcode} onChange={e => this.setState(
            { zipcode: e.target.value }
            )} />
          </div>
        </div>
        <div>
          <input type="text" id="how_did_you_hear" name="remarks" placeholder="How did you hear about us" />
        </div>
        <button type="submit" value="Submit" className="submitBtn" id="confirm">
          Submit
        </button>
    </form>
    );
  }
}

export default InfoForm;