// form.js
import { createUser } from './utils/api.js';

export function renderRegistrationForm(targetElement) {
  const formHtml = `
    <form id="registrationForm">
      <input type="text" id="name" placeholder="Name" required/>
      <input type="email" id="email" placeholder="Email" required/>
      <button type="submit">Submit</button>
    </form>
  `;

  targetElement.innerHTML = formHtml;

  document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
      const response = await createUser({ name, email });
      console.log('User created:', response);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  });
}
