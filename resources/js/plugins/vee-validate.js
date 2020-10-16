import Vue from "vue"
import { extend, localize } from "vee-validate";
// import { min, required, email, image, numeric }  from "vee-validate/dist/rules";
import * as rules from 'vee-validate/dist/rules';

import en from "vee-validate/dist/locale/en.json";
import { validate } from "vee-validate";
// import { setInteractionMode } from 'vee-validate';

// setInteractionMode('eager');
// Install rules
// extend('required', {
//     ...required,
//     message: 'The {_field_} field is required'
//   });


extend('date_format', {
  message: 'The {_field_} field is not valid',
  validate (value, { other }) {
     const parsed = moment(value, "DD-MM-YYYY", true).isValid();

     if (!parsed) return false;

     return true
  },
});

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// extend("min", min);
// extend("email", email);
// extend("image", image);

// Install messages
localize({
  en
});


Vue.use(validate)
