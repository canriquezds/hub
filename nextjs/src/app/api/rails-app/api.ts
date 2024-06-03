export async function signInToBackend(idToken: string) {
  const response = await fetch('http://localhost:4000/sign_in', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to sign in to backend');
  }

  return response.json();
}
