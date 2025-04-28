document.addEventListener("DOMContentLoaded", () => {
  const userData = {
    lastname: "",
    firstname: "",
    telephone: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: [],
    image: "",
  };

  // Fonction de validation
  function validateForm() {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
    const phoneRegex = /^(?:\+33|0)[1-9](?:[-. ]?\d{2}){4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const lastname = document.getElementById("lastname").value;
    const firstname = document.getElementById("firstname").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const role = Array.from(
      document.querySelectorAll(".checkboxes input:checked")
    ).map((input) => input.value);

    if (!nameRegex.test(lastname)) {
      alert(
        "Le nom doit commencer par une majuscule et ne contenir que des lettres et espaces."
      );
      return false;
    }
    if (!nameRegex.test(firstname)) {
      alert(
        "Le prénom doit commencer par une majuscule et ne contenir que des lettres et espaces."
      );
      return false;
    }
    if (!phoneRegex.test(telephone)) {
      alert("Veuillez entrer un numéro valide.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return false;
    }
    if (!passwordRegex.test(password)) {
      alert(
        "Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule et 1 caractère spécial."
      );
      return false;
    }
    if (password !== confirmpassword) {
      alert("Les mots de passe ne correspondent pas.");
      return false;
    }

    userData.lastname = lastname;
    userData.firstname = firstname;
    userData.telephone = telephone;
    userData.email = email;
    userData.password = password;
    userData.confirmpassword = confirmpassword;
    userData.role = role;

    console.log("Données de l'utilisateur :", userData);
    return true;
  }

  document.querySelector(".form1").addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Inscription réussie !");
    }
  });

  // Gestion de l'image de profil
  const imageInput = document.getElementById("newImage");
  const imageDisplay = document.getElementById("image");

  imageDisplay.addEventListener("click", () => {
    imageInput.click();
  });

  imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        userData.image = e.target.result;
        imageDisplay.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});
