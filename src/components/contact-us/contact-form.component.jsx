import React, {useState} from "react";
import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";
import {Typography} from "@material-ui/core";

import {useStyles} from './styles';

const ContactUs = () => {
  const classes = useStyles();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  return (
    <div className={classes.mainContent}>
      <div className={classes.alignTextCenter}>
        <Typography variant="h4" component="h1">Contact us</Typography>
        <Typography variant="subtitle1">
          Send us your query and our customer support will get back to you as soon as possible.
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormInput
            className={classes.formField}
            type="text"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            label="Name"
            required
          />
          <FormInput
            className={classes.formField}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          />
          <FormInput
            className={classes.formField}
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            label="How can we help you?"
            required
            rows={5}
            multiline
          />
          <CustomButton type="button">Submit</CustomButton>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
