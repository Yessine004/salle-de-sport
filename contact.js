document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    
    document.getElementById('response-message').textContent = 'Merci pour votre message, nous vous contacterons bientôt !';

    
    document.getElementById('contact-form').reset();
});