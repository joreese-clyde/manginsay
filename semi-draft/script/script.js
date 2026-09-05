
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  const loadBtn = document.getElementById('loadBtn');
  const statusEl = document.getElementById('status');
  const listEl = document.getElementById('list');

  function setStatus(message, state){
    statusEl.textContent = message || '';
    if(state){
      statusEl.setAttribute('data-state', state);
    } else {
      statusEl.removeAttribute('data-state');
    }
  }

  function renderUsers(users){
    listEl.innerHTML = '';
    users.forEach(function(user){
      const card = document.createElement('div');
      card.className = 'card';

      const companyName = (user.company && user.company.name) ? user.company.name : 'Not listed';

      card.innerHTML =
        '<p class="name">' + escapeHtml(user.name) + '</p>' +
        '<p class="username">@' + escapeHtml(user.username) + '</p>' +
        '<div class="field">Email<span>' + escapeHtml(user.email) + '</span></div>' +
        '<div class="field">Phone<span>' + escapeHtml(user.phone) + '</span></div>' +
        '<div class="field">Company<span>' + escapeHtml(companyName) + '</span></div>';

      listEl.appendChild(card);
    });
  }

  function escapeHtml(str){
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  async function loadUsers(){
    loadBtn.disabled = true;
    listEl.innerHTML = '';
    setStatus('Loading…');

    try {
      const response = await fetch(API_URL);

      if(!response.ok){
        throw new Error('Server responded with status ' + response.status);
      }

      const users = await response.json();

      if(!Array.isArray(users) || users.length === 0){
        setStatus('No users were found.');
        return;
      }

      setStatus(users.length + ' users loaded.');
      renderUsers(users);

    } catch (err){
      setStatus('Could not load users. Check your connection and try again.', 'error');
    } finally {
      loadBtn.disabled = false;
    }
  }

  loadBtn.addEventListener('click', loadUsers);