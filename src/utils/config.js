// config.js
export const config = {
    baseUrl: '',
    apiKey: ''
  };
  
  export function initializeConfig(options) {
    Object.assign(config, options);
    console.log('SDK initialized with config:', config);
  }
  