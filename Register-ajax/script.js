const form = document.getElementById('form');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Create user object
      const user = { name, email, password };

      // Save to local storage
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      // Fake AJAX POST request
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Data sent:', data);
        // Redirect to user list page
        window.location.href = 'data.html';
      });
    });