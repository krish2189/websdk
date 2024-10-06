(function(global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    // CommonJS module for Node or bundlers
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    // AMD module for RequireJS or similar loaders
    define(factory);
  } else {
    // Browser global (window)
    global.MySDK = factory();
  }
})(typeof window !== "undefined" ? window : this, function() {
  // Your SDK code goes here
  const SDK = {
    config: {
      baseUrl: '',
      apiKey: ''
    },
    
    initialize(options) {
      this.config = { ...this.config, ...options };
      console.log('SDK initialized with config:', this.config);
    },
    
    async createUser(userData) {
      const response = await fetch(`${this.config.baseUrl}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify(userData)
      });
      return response.json();
    },
    
    renderRegistrationForm(targetElement) {
      const formHtml = `
        <form id="registrationForm">
          <input type="text" id="name" placeholder="Name" required/>
          <input type="email" id="email" placeholder="Email" required/>
          <button type="submit">Submit</button>
        </form>
      `;
      targetElement.innerHTML = formHtml;

      document.getElementById('registrationForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        SDK.createUser({ name, email }).then(response => {
          console.log('User created:', response);
        });
      });
    }
  };

  return SDK; // Returning the SDK object for use
});
