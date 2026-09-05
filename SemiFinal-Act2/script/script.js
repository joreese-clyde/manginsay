const loadBtn = document.getElementById("loadBtn");
const statusDiv = document.getElementById("status");
const list = document.getElementById("users");
const yearSpan = document.getElementById('year');

loadBtn.addEventListener("click", () => {
  list.innerHTML = "";
  statusDiv.textContent = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      //erase loading message
      statusDiv.textContent = "";

      //user details
      users.forEach(user => {
        const item = document.createElement("li");

        item.innerHTML = `
          <span>${user.name}</span> <span>@${user.username}</span> <span>${user.email}</span> <span>${user.phone}</span> <span>${user.company.name}</span>
        `;
        list.appendChild(item);
      });
    })
    .catch(error => {
      statusDiv.textContent = "Error loading users. Please try again.";
    });
});

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }