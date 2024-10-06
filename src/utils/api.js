// api.js
import { config } from './config.js';

export async function createUser(userData) {
  const response = await fetch(`${config.baseUrl}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  return response.json();
}
