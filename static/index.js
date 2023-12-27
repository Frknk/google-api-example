function handleCredentialResponse(response) {
    console.log("handleCredentialResponse called")

    // Send the ID token to your server
    fetch('/decode_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: response.credential,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("ID: " + data.sub);
        console.log('Full Name: ' + data.name);
        console.log('Given Name: ' + data.given_name);
        console.log('Family Name: ' + data.family_name);
        console.log("Image URL: " + data.picture);
        console.log("Email: " + data.email);
        var element = document.getElementById("user-info");
        element.style.display = 'flex';
        document.getElementById('id').textContent = "ID: " + data.sub;
        document.getElementById('name').textContent = 'Full Name: ' + data.name;
        document.getElementById('given_name').textContent = 'Given Name: ' + data.given_name;
        document.getElementById('family_name').textContent = 'Family Name: ' + data.family_name;
        document.getElementById('picture').textContent = "Image URL: " + data.picture;
        document.getElementById('email').textContent = "Email: " + data.email;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}