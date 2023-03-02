const membershipDiv = document.querySelector('#membership-div');
const cardContainer = document.createElement('section');
cardContainer.classList.add('card-container');

const PORT = 'http://127.0.0.1:3000/memberships';

async function getMemberships() {
  try {
    const res = await fetch(PORT);
    const data = await res.json();

    data.forEach((entry) => {
      const membershipCard = document.createElement('div');
      membershipCard.classList.add('msCard');

      const priceAndName = document.createElement('h3');
      priceAndName.textContent = `$${entry.price} ${entry.name}`;

      const description = document.createElement('p');
      description.textContent = entry.description;

      const deleteTab = document.createElement('div');
      const deleteButton = document.createElement('button');

      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fa', 'fa-trash');
      deleteButton.append(deleteIcon);

      let membershipId = entry._id;
      let membershipUsers = entry.users;
      deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        handleDeleteMembership(membershipId, membershipUsers, event.target);
      });

      deleteTab.append(deleteButton);
      membershipCard.append(priceAndName, description, deleteTab);
      membershipDiv.append(cardContainer);
      cardContainer.append(membershipCard);
    });
  } catch (e) {
    console.log(e);
  }
}

async function handleDeleteMembership(membershipId, membershipUsers, target) {
  if (!membershipUsers.length) {
    const res = await fetch(PORT + `?id=${membershipId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    const parent = target.parentElement.parentElement.parentElement;
    console.log(parent);
    cardContainer.removeChild(parent);
  } else {
    alert('you cannot delete membership that has active users');
  }
}

getMemberships();
