document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your registration logic here

    alert(`Registration successful!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
});
