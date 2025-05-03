const friends = ["priti","neha","nikita","surbhi","priya"]; 
const friends = ["priti","neha","vaibhavi"]; 

function renderCards() {
  const container = document.getElementById("card-container");
  container.innerHTML = ""; 
  friends.forEach(friend => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = friend;
    container.appendChild(card);

    

  });
}

renderCards();
