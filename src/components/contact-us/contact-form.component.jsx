import React from "react";
import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";
// import useStyles from './styles';


class ContactUs extends React.Component {
  
  constructor() {
    super();
    // this.classes = this.useStyles();
    this.state = {
      displayName: "",
      email: "",
      query: "",
    };
  }

  handleSubmit = async (event) => {};

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, query } = this.state;
    return (
      <div>
        <h2>Contact us</h2>
        <span>Send us your query and our customer support will get back to you as soon as possible.</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Name*"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email*"
            required
          />
          <FormInput
            type="text"
            name="query"
            value={query}
            onChange={this.handleChange}
            label="How can we help you?*"
            required
          />
          <CustomButton type="button">Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactUs;
