document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');
    
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
      
      let isValid = true;
  
      
      if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameError.style.display = "block";
        isValid = false;
      } else {
        usernameError.style.display = "none";
      }
  
      
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }
  
      
      if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        isValid = false;
      } else {
        passwordError.style.display = "none";
      }
  
      
      if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        isValid = false;
      } else {
        confirmPasswordError.style.display = "none";
      }
  
      
      if (!termsCheckbox.checked) {
        termsError.textContent = "You must agree to the terms and conditions.";
        termsError.style.display = "block";
        isValid = false;
      } else {
        termsError.style.display = "none";
      }
  
      if (isValid) {
        alert("Registration Successful!");
        form.reset(); 
      }
    });
  });