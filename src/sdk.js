// src/sdk.js
import { initializeConfig } from './utils/config.js';
import { renderRegistrationForm } from './form.js';

const SDK = {
  initialize: initializeConfig,
  renderRegistrationForm: renderRegistrationForm
};

export default SDK;
