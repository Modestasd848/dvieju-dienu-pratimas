const membershipDiv = document.querySelector('main');

const PORT = 'http://127.0.0.1:3000/Memberships';

async function getMemberships() {
  try {
    const res = await fetch(PORT);
    const data = await res.json();

    data.forEach((entry) => {
      const membershipCard = document.createElement('div');
      membershipCard.classList.add('msCard');

      const priceAndName = document.createElement('h2');
      priceAndName.textContent = `$${entry.price} ${entry.name}`;

      const description = document.createElement('p');
      description.textContent = entry.description;

      const deleteTab = document.createElement('div');
      const deleteButton = document.createElement('button');

      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fa', 'fa-trash');
      deleteButton.append(deleteIcon);

      deleteButton.addEventListener('click', () => {});

      deleteTab.append(deleteButton);
      membershipCard.append(priceAndName, description, deleteTab);
      membershipDiv.append(membershipCard);
    });
  } catch (e) {
    console.log(e);
  }
}

getMemberships();
