const div = document.querySelector('.create-membership-container');
const nameInput = document.querySelector('#name');
const membershipPriceInput = document.querySelector('#price');
const descriptionInput = document.querySelector('#description');

const POST_ENDPOINT = 'http://127.0.0.1:3000/memberships';

div.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(PORT, {
    method: 'POST',
    headers: {
      Content_Type: 'application/json',
    },
    body: JSON.stringify({
      name: nameInput.value,
      price: priceInput.value,
      description: descriptionInput.value,
    }),
  });
  const sentData = await res.json();
  console.log(JSON.stringify(sentData));
  window.location.assign('../membership-page/membership.html');
});
