import React, { Component } from "react";
import "../styles/info-form.css";

const validate = (name, phone, email1, email2, address, city, state, country, zipcode,    how_did_you_hear) => {
  const nameReg = /^[a-zA-Z][a-zA-Z0-9-_.\s]{2,20}/;
  const phoneReg = /^(\+|00)358-?0?(457|50|4[0-9])-?\d{7}/;
  const emailReg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
  const addressReg = /\w+(\s\w+)*/; 
  const cityReg = /[a-zA-Z]{2,}/;
  const stateReg = /[a-zA-Z]{2,}/;
  const countryReg = /[a-zA-Z]{2,}/;
  const zipcodeReg = /[0-9]{5}/;
  const how_did_you_hearReg = /\w+(\s\w+)*/;

  return {   
    name: !nameReg.test(name) ? 'Not a valid name !' : '',
    phone: !phoneReg.test(phone) ? 'Not a valid phone number !' : '',
    email1: !emailReg.test(email1) ? 'Not a valid email !' : '',
    email2: !emailReg.test(email2) ? 'Please re-enter email !' :'',
    address: !addressReg.test(address) ? 'Not a valid address !' : '',
    city: !cityReg.test(city) ? 'Not a valid city !' : '',
    state: !stateReg.test(state) ? 'Not a valid state !' : '',
    country: !countryReg.test(country) ? 'Not a valid country !' : '',
    zipcode: !zipcodeReg.test(zipcode) ? 'Not a valid zipcode !' : '',
    how_did_you_hear: !how_did_you_hearReg.test(how_did_you_hear) ? 'Please enter the details *' : ''
  };
}

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
      how_did_you_hear: "",
      
      touched: {
        name: false,
        phone: false,
        email1: false,
        email2: false,
        address: false,
        state: false,
        city: false,       
        country: false,
        zipcode: false,
        how_did_you_hear: false      
      }
    }

    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showError = this.showError.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  handleBlur(e) {
    this.setState({
      touched: {
        ...this.state.touched,
        [e.target.name]: true,
      }
    });
  }

  showError() {
    const { name, phone, email1, email2, address, city, state, country, zipcode, how_did_you_hear, touched } = this.state;
    const errors = validate(name, phone, email1, email2, address, city, state, country, zipcode, how_did_you_hear);

    return {
      name: errors.name && touched.name,
      phone: errors.phone && touched.phone,
      email1: errors.email1 && touched.email1,
      email2: errors.email2 && touched.email2,
      address: errors.address && touched.address,      
      city: errors.city && touched.city,    
      state: errors.state && touched.state,
      country: errors.country && touched.country,
      zipcode: errors.zipcode && touched.zipcode,
      how_did_you_hear: errors.how_did_you_hear && touched.how_did_you_hear,
    }
  }

  render() {
    const { name, phone, email1, email2, address, city, state, country, zipcode, how_did_you_hear } = this.state;
    const errors = validate(name, phone, email1, email2, address, city, state, country, zipcode, how_did_you_hear);
    const showErrors = this.showError();
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <p>1. Personal information</p>
        <hr />
      </div>
      <div className="name-phone">
        <div className="half-name">
          <input
            className={`${showErrors.name ? 'invalid' : ''}`}
            type="text"          
            name="name" 
            placeholder="Full name*" 
            value={name}
            onBlur={this.handleBlur} 
            onChange={e => this.setState({ name: e.target.value })}
          />
          {showErrors.name && <span className="error-msg">{errors.name}</span>}
        </div>
        <div className="half-phone">
          <input
            className={`${showErrors.phone ? 'invalid' : ''}`}
            type="text"          
            name="phone" 
            placeholder="Phone*" 
            value={phone}
            onBlur={this.handleBlur}
            onChange={e => this.setState({ phone: e.target.value })} 
          />
          {showErrors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>
      </div>
      <div>
        <input            
          className={`${showErrors.email1 ? 'invalid' : ''}`}
          type="email"          
          name="email1" 
          placeholder="E-mail*" 
          value={email1}
          onBlur={this.handleBlur}
          onChange={e => this.setState({ email1: e.target.value })} 
        />
        {showErrors.email1 && <span className="error-msg">{errors.email1}</span>}
      </div>
      <div>
        <input
          className={`${showErrors.email2 ? 'invalid' : ''}`}
          type="email"         
          name="email2" 
          placeholder="Re-enter E-mail*" 
          value={email2}
          onBlur={this.handleBlur}
          onChange={e => this.setState({ email2: e.target.value })} 
        />
        {showErrors.email2 && <span className="error-msg">{errors.email2}</span>}
      </div>
      <div>
        <input
          className={`${showErrors.address ? 'invalid' : ''}`}
          type="text"           
          name="address" 
          placeholder="Address*"           
          value={address}
          onBlur={this.handleBlur}
          onChange={e => this.setState({ address: e.target.value })}
        />
        {showErrors.address && <span className="error-msg">{errors.address}</span>}
      </div>
      <div className="csrz">
        <div className="quarter-city">
          <input
            className={`${showErrors.city ? 'invalid' : ''}`}    
            type="text"            
            name="city" 
            placeholder="City*"            
            value={city}
            onBlur={this.handleBlur}
            onChange={e => this.setState({ city: e.target.value })}
          />
          {showErrors.city && <span className="error-msg">{errors.city}</span>}
        </div>
        <div className="quarter-state">
          <input
            className={`${showErrors.state ? 'invalid' : ''}`}            
            type="text"             
            name="state" 
            placeholder="State"            
            value={state}
            onBlur={this.handleBlur}          
            onChange={e => this.setState({ state: e.target.value })} 
          />
          {showErrors.state && <span className="error-msg">{errors.state}</span>}
        </div>
        <div className="quarter-region">
          <input
            className={`${showErrors.country ? 'invalid' : ''}`} 
            type="text"            
            name="country" 
            placeholder="Country/Region*"    
            value={country} 
            onBlur={this.handleBlur}
            onChange={e => this.setState({ country: e.target.value })}
          />
            {showErrors.country && <span className="error-msg">{errors.country}</span>}
        </div>
        <div className="quarter-zip">
          <input
            className={`${showErrors.zipcode ? 'invalid' : ''}`}
            type="text"             
            name="zipcode" 
            placeholder="Zip/Postal Code" 
            value={zipcode}
            onBlur={this.handleBlur}
            onChange={e => this.setState({ zipcode: e.target.value })} 
          />
          {showErrors.zipcode && <span className="error-msg">{errors.zipcode}</span>}
        </div>
      </div>
      <div>
        <input
          className={`${showErrors.how_did_you_hear ? 'invalid' : ''}`}
          type="text"          
          name="how_did_you_hear" 
          placeholder="How did you hear about us"
          value={how_did_you_hear}
          onBlur={this.handleBlur}
          onChange={e => this.setState({ how_did_you_hear: e.target.value })} 
        />
        {showErrors.how_did_you_hear && <span className="error-msg">{errors.how_did_you_hear}</span>}
      </div>        

      <button 
        type="submit" 
        value="Submit" 
        className="submitBtn"        
        disabled={Object.keys(errors).some((key) => errors[key])}>
        Submit
      </button>
    </form>
    );
  }
}

export default InfoForm;