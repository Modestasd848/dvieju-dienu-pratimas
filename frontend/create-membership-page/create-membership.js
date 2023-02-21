const POST_ENDPOINT = 'http://127.0.0.1:3000/Memberships';
const nameInput = document.querySelector('#name-input');
const membershipPriceInput = document.querySelector('#membership-price');
const descriptionInput = document.querySelector('#description-input');

document
  .getElementsByClassName('.new-membership-button')
  .addEventListener('click', async () => {
    const name = nameInput.value;
    const price = membershipPriceInput.value;
    const description = descriptionInput.value;

    const res = await fetch(POST_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
        description,
      }),
      headers: {
        Content_Type: 'application/json',
      },
    });
    const resData = await res.json();
    console.log(resData);
  });
