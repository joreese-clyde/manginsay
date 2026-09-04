const loadBtn = document.getElementById("loadBtn");
const statusDiv = document.getElementById("status");
const list = document.getElementById("users");

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
        item.textContent = `${user.name} (@${user.username}) - ${user.email} | ${user.phone} | ${user.company.name}`;
        list.appendChild(item);
      });
    })
    .catch(error => {
      statusDiv.textContent = "Error loading users. Please try again.";
    });
});