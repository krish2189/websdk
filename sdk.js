(function(global) {
    const SDK = {
      config: {
        baseUrl: '',
        apiKey: ''
      },
      
      initialize(options) {
        SDK.config = { ...SDK.config, ...options };
        console.log('SDK initialized with config:', SDK.config);
      },
      
      async createUser(userData) {
        const response = await fetch(`${SDK.config.baseUrl}/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SDK.config.apiKey}`
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
  
    global.MySDK = SDK; // Exposing SDK to global object
  })(window);
  