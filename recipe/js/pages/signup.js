document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // In a real application, you would send this data to a server
        console.log('Sign up data:', { name, email, password });
        
        // Show success message
        alert('Sign up successful! Welcome to Recipe Hub!');
        
        // Clear form
        signupForm.reset();
    });
});