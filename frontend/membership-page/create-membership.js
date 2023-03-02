const form = document.querySelector('.create-membership-container');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const descriptionInput = document.querySelector('#description');

const POST_ENDPOINT = 'http://127.0.0.1:3000/memberships';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('issikviete');
  console.log(nameInput.value);
  const res = await fetch(POST_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameInput.value,
      price: priceInput.value,
      description: descriptionInput.value,
    }),
  });
  const sentData = await res.json();
  alert(JSON.stringify(sentData));
  window.location.assign('./membership.html');
});
