<template>
 
  <div
    class=" pt-10 flex w-full max-w-full mx-auto items-center justify-center"
  >
    <div
      class="bg-[#F9FAFB] rounded-lg shadow-lg md:w-full overflow-hidden max-w-4xl flex"
    >
      <!-- image a gauche -->
      <div class="relative w-1/2 hidden md:block">
        <img
          src="../Images/voiture10.png"
          class="h-full w-full object-cover"
          alt="Voiture de luxe"
        />
        <div class="absolute" style="z-index: 99; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <img
            src="../Images/logo.png"
            alt="logo-image"
            class=" left-4 w-16"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 p-8">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">
          Créer votre compte
        </h2>
        <form @submit.prevent="soumettreFormulaire" class="mt-6">
          <!-- Champ Nom -->
          <div class="mb-4">
            <div class="flex flex-col gap-1">
              <label class="block text-black"
                >Nom <span class="text-red-500"> *</span></label
              >
              <div class="relative w-full">
                <span class="icon-style">
                  <i class="ri-user-fill"></i>
                </span>
                <input
                  type="text"
                  v-model="utilisateur.firstname"
                  class="w-full px-4 py-2 border text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                  placeholder="Entrez votre nom"
                />
              </div>
            </div>

            <div class="flex"></div>
            <p v-if="erreurs.firstname" class="text-red-500 text-sm">
              {{ erreurs.firstname }}
            </p>
          </div>
          <div class="mb-4">
            <div class="flex flex-col gap-1">
              <label class="block text-black">Prénom</label>
              <div class="relative">
                <span class="icon-style">
                  <i class="ri-user-fill"></i>
                </span>
                <input
                  type="text"
                  v-model="utilisateur.lastname"
                  class="w-full px-4 py-2 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Entrez votre prénom"
                />
              </div>
            </div>
            <!-- Champ Email -->
            <div class="mb-4">
              <div class="flex flex-col gap-1">
                <label class="block text-black "
                  >Email <span class="text-red-500"> *</span></label
                >
                <div class="relative">
                  <span class="icon-style">
                    <i class="ri-mail-fill"></i>
                  </span>
                  <input
                    type="email"
                    v-model="utilisateur.email"
                    class="w-full px-4 py-2 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                    placeholder="Entrez votre Email"
                  />
                  <p v-if="erreurs.email" class="text-red-500 text-sm">
                    {{ erreurs.email }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <div class="flex flex-col gap-1">
                <label class="block text-black"
                  >Mot de passe <span class="text-red-500"> *</span></label
                >
                <div class="relative">
                  <span class="icon-style">
                    <i class="ri-eye-off-fill"></i>
                  </span>
                  <input
                    type="password"
                    v-model="utilisateur.password"
                    class="w-full px-4 py-2 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                    placeholder="Entrez votre mot de passe"
                  />
                  <p v-if="erreurs.password" class="text-red-500 text-sm">
                    {{ erreurs.password }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <div class="flex flex-col gap-1">
                <label class="block text-black"
                  >Confirmer votre mot de passe</label
                >
                <div class="relative">
                  <span class="icon-style">
                    <i class="ri-eye-off-fill"></i>
                  </span>
                  <input
                    type="password"
                    v-model="utilisateur.password_confirmation"
                    class="w-full px-4 py-2 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                    placeholder="Entrez votre mot de passe"
                  />
                
                </div>
              </div>
            </div>

            <!-- Champ Téléphone -->
            <div class="mb-4">
              <div class="flex flex-col gap-1">
                <label class="block text-black">Téléphone</label>
                <div class="relative">
                  <span class="icon-style">
                    <i class="ri-phone-fill"></i>
                  </span>
                  <input
                    type="tel"
                    v-model="utilisateur.phone"
                    class="w-full px-4 py-2 border text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Entrez votre numéro"
                  />
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Créer un compte
              </button>
            </div>
            <div class="mt-5 flex flex-row gap-10">
              <div class="flex flex-col gap-1">
                <div class="relative">
                  <span class="icon-style"
                    ><i class="ri-login-box-line text-black cursor-pointer hover:text-gray-700"></i
                  ></span>
                  <p class="text-black pl-10 cursor-pointer hover:text-gray-700">
                    <RouterLink to="/login">Déjà inscrit ?</RouterLink>
                  </p>
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-1">
                  <div class="relative">
                    <span class="icon-style"
                      ><i class="ri-question-fill text-black cursor-pointer hover:text-gray-700"></i
                    ></span>
                    <p class="text-black pl-10 cursor-pointer hover:text-gray-700">Besoin d'aide ?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from 'axios';
import { RouterLink } from "vue-router";
const utilisateur = ref(
  {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password:"",
    password_confirmation:""
  },
);
const erreurs = ref(
  {
    firstname: "",
    email: "",
    password:""
  },
);

const soumettreFormulaire = async () => {
  erreurs.value.firstname = utilisateur.value.firstname ? "" : "Le nom est obligatoire.";
  erreurs.value.email = utilisateur.value.email ? "" : "L'email est obligatoire.";
  erreurs.value.password = utilisateur.value.password? "" : "Le mot de passe est obligatoire";

  if (!utilisateur.value.firstname || !utilisateur.value.email) {
    return;
  }

  try {
  const response = await axios.post("https://booking.openintech.app/api/register",
    utilisateur.value, 
    {
      headers: {
        "Content-Type": "application/json",
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
       
      },
    }
  );

  console.log("Réponse de l'API :", response.data);
  alert("Inscription réussie !");
  localStorage.setItem('token', response.data.token); 


  utilisateur.value = { firstname: "", lastname: "", email: "", phone: "", password:"", password_confirmation:"" };
} catch (error) {
  console.error("Erreur lors de l'inscription :", error);
  alert(`Erreur : ${error.response?.data?.message || "Une erreur est survenue !"}`);
}

};

</script>
<style scoped>
.icon-style {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  
}
</style>
