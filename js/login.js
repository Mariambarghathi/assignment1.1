document.getElementById('LoginForm').addEventListener('submit', async function (e) {
        e.preventDefault(); 

        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            });

            const result = await response.json();
            
            if (response.ok) {
          
                document.getElementById('loginStatus').innerHTML = `<div class="alert alert-success">Login Successful!</div>`;
                
                localStorage.setItem('token', result.token);
                window.location.href = 'home.html'; 
            } else {
                document.getElementById('loginStatus').innerHTML = `<div class="alert alert-danger">${result.message}</div>`;
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('loginStatus').innerHTML = `<div class="alert alert-danger">An error occurred during login.</div>`;
        }
    });

