// form.js
import { createUser } from './utils/api.js';

export function renderRegistrationForm(targetElement) {
    const formHtml = `
    <form id="registrationForm" class="form-container">
      <h2>Registration Form</h2>
      
      <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" required/>
  
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" required/>
  
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" required/>
  
      <label for="postalCode">Postal Code:</label>
      <input type="text" id="postalCode" placeholder="Enter your postal code" required/>
  
      <label for="gender">Gender:</label>
      <select id="gender" required>
        <option value="" disabled selected>Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
  
      <button type="submit">Submit</button>
    </form>
  `;
  

  targetElement.innerHTML = formHtml;

  document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const postalCode = document.getElementById('postalCode').value;
    const gender = document.getElementById('gender').value;

    console.log({
      name,
      email,
      dob,
      postalCode,
      gender
    });
    
    try {
      const response = await createUser({ name, email });
      console.log('User created:', response);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  });
}
