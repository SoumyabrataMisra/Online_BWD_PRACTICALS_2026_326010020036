const form = document.getElementById("registrationForm");

const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirmPassword"),
  dob: document.getElementById("dob"),
  course: document.getElementById("course"),
  city: document.getElementById("city"),
  address: document.getElementById("address"),
  terms: document.getElementById("terms")
};

function setError(field, message) {
  const errorElement = document.getElementById(field + "Error");
  if (errorElement) errorElement.textContent = message;

  if (fields[field]) {
    fields[field].classList.add("input-error");
    fields[field].classList.remove("input-success");
  }
}

function clearError(field) {
  const errorElement = document.getElementById(field + "Error");
  if (errorElement) errorElement.textContent = "";

  if (fields[field]) {
    fields[field].classList.remove("input-error");
    fields[field].classList.add("input-success");
  }
}

function validateName() {
  const name = fields.name.value.trim();
  if (name === "") {
    setError("name", "Name is required.");
    return false;
  }
  if (!/^[A-Za-z ]{2,50}$/.test(name)) {
    setError("name", "Use only letters and spaces (2–50 characters).");
    return false;
  }
  clearError("name");
  return true;
}

function validateEmail() {
  const email = fields.email.value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    setError("email", "Email is required.");
    return false;
  }
  if (!pattern.test(email)) {
    setError("email", "Enter a valid email address.");
    return false;
  }
  clearError("email");
  return true;
}

function validatePhone() {
  const phone = fields.phone.value.trim();

  if (phone === "") {
    setError("phone", "Phone number is required.");
    return false;
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    setError("phone", "Enter a valid 10-digit Indian mobile number.");
    return false;
  }
  clearError("phone");
  return true;
}

function validatePassword() {
  const password = fields.password.value;

  if (password === "") {
    setError("password", "Password is required.");
    return false;
  }
  if (password.length < 8) {
    setError("password", "Password must contain at least 8 characters.");
    return false;
  }
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) ||
      !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
    setError("password", "Use uppercase, lowercase, number and special character.");
    return false;
  }
  clearError("password");
  return true;
}

function validateConfirmPassword() {
  if (fields.confirmPassword.value === "") {
    setError("confirmPassword", "Please confirm your password.");
    return false;
  }
  if (fields.confirmPassword.value !== fields.password.value) {
    setError("confirmPassword", "Passwords do not match.");
    return false;
  }
  clearError("confirmPassword");
  return true;
}

function validateDOB() {
  if (fields.dob.value === "") {
    setError("dob", "Date of birth is required.");
    return false;
  }

  const selectedDate = new Date(fields.dob.value);
  const today = new Date();

  if (selectedDate > today) {
    setError("dob", "Date of birth cannot be in the future.");
    return false;
  }

  clearError("dob");
  return true;
}

function validateGender() {
  const selected = document.querySelector('input[name="gender"]:checked');

  if (!selected) {
    setError("gender", "Please select your gender.");
    return false;
  }

  clearError("gender");
  return true;
}

function validateCourse() {
  if (fields.course.value === "") {
    setError("course", "Please select a course.");
    return false;
  }

  clearError("course");
  return true;
}

function validateCity() {
  if (fields.city.value.trim() === "") {
    setError("city", "City is required.");
    return false;
  }

  if (fields.city.value.trim().length < 2) {
    setError("city", "Enter a valid city name.");
    return false;
  }

  clearError("city");
  return true;
}

function validateAddress() {
  if (fields.address.value.trim() === "") {
    setError("address", "Address is required.");
    return false;
  }

  if (fields.address.value.trim().length < 10) {
    setError("address", "Address should contain at least 10 characters.");
    return false;
  }

  clearError("address");
  return true;
}

function validateTerms() {
  if (!fields.terms.checked) {
    setError("terms", "You must agree to the terms and conditions.");
    return false;
  }

  clearError("terms");
  return true;
}

function validateForm() {
  const results = [
    validateName(),
    validateEmail(),
    validatePhone(),
    validatePassword(),
    validateConfirmPassword(),
    validateDOB(),
    validateGender(),
    validateCourse(),
    validateCity(),
    validateAddress(),
    validateTerms()
  ];

  return results.every(Boolean);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const successMessage = document.getElementById("successMessage");

  if (validateForm()) {
    successMessage.textContent =
      "Registration successful! Student details have been validated.";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
});

fields.name.addEventListener("input", validateName);
fields.email.addEventListener("input", validateEmail);
fields.phone.addEventListener("input", validatePhone);
fields.password.addEventListener("input", function() {
  validatePassword();
  if (fields.confirmPassword.value !== "") {
    validateConfirmPassword();
  }
});
fields.confirmPassword.addEventListener("input", validateConfirmPassword);
fields.dob.addEventListener("change", validateDOB);
fields.course.addEventListener("change", validateCourse);
fields.city.addEventListener("input", validateCity);
fields.address.addEventListener("input", validateAddress);
fields.terms.addEventListener("change", validateTerms);

document.querySelectorAll('input[name="gender"]').forEach(function(radio) {
  radio.addEventListener("change", validateGender);
});

form.addEventListener("reset", function() {
  setTimeout(function() {
    document.querySelectorAll(".error").forEach(function(error) {
      error.textContent = "";
    });

    document.querySelectorAll("input, select, textarea").forEach(function(field) {
      field.classList.remove("input-error", "input-success");
    });

    document.getElementById("successMessage").style.display = "none";
  }, 0);
});
