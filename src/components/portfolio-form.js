import React, { Component } from "react";
import "../styles/portfolio-form.css";

class PortfolioForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      portfolio: "", 
      message:"" 
    };
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();   
  };

  render() {
    return (
    <form onSubmit={this.handleFormSubmit}>
        <p>3. Portfolio</p>
        <hr />
        <p>
          Prove you are IBM's next great designer by showing us who you are.
          What you've done.How you think.Tell us your story.
        </p>
        <div>
          <input type="url" id="portfolio" name="portfolio" placeholder="Porfolio Link*" value={this.state.portfolio} onChange={e => this.setState(
                { portfolio: e.target.value }
              )} />
        </div>
        <div>
          <textarea id="msg" name="user_message" placeholder="Anything else (another link, availability etc.)?" value={this.state.message} onChange={e => this.setState(
                { message: e.target.value }
              )} />
        </div>

        <button type="submit" value="Submit" className="portfolioSubmitBtn" id="confirm">   Submit
        </button>
    </form>
    );
  }
}

export default PortfolioForm;