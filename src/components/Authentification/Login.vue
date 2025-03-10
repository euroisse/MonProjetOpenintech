<template>
  <div class="pt-10 flex mx-auto items-center justify-center">
    <form @submit.prevent="seConnecter" class="mt-6 bg-white w-[60%] p-10 rounded-lg shadow-md">
      <h2 class="text-3xl font-semibold text-gray-700 text-center">Se connecter</h2>

      <!-- Email -->
      <div class="mb-4 relative">
        <label class="block text-black">Email <span class="text-red-500">*</span></label>
        <div class="relative">
          <span class="icon-style"><i class="ri-mail-fill"></i></span>
          <input
            type="email"
            v-model="utilisateur.email"
            class="w-full px-4 py-2 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            placeholder="Entrez votre Email"
            @mouseover="showError.email = true"
            @mouseleave="showError.email = false"
          />
          <!-- Message d'erreur qui apparaît en survol -->
          <div v-if="showError.email && erreurs.email" class="absolute top-[-30px] left-0 bg-red-500 text-white text-sm px-2 py-1 rounded shadow-md">
            {{ erreurs.email }}
          </div>
        </div>
      </div>

      <!-- Mot de passe -->
      <div class="mb-4 relative">
        <label class="block text-black">Mot de passe <span class="text-red-500">*</span></label>
        <div class="relative">
          <span class="icon-style"><i class="ri-lock-fill"></i></span>
          <input
            type="password"
            v-model="utilisateur.password"
            class="w-full px-4 py-2 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            placeholder="Entrez votre mot de passe"
            @mouseover="showError.password = true"
            @mouseleave="showError.password = false"
          />
          <!-- Message d'erreur qui apparaît en survol -->
          <div v-if="showError.password && erreurs.password" class="absolute top-[-30px] left-0 bg-red-500 text-white text-sm px-2 py-1 rounded shadow-md">
            {{ erreurs.password }}
          </div>
        </div>
      </div>

      <!-- Bouton Se connecter -->
      <div class="mt-10">
        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          @click="handleLogin">
          Se connecter
        </button>
      </div>

      <div class="mt-5">
        <p class="text-black cursor-pointer text-center">
          Pas encore inscrit ?
          <router-link to="/registerForm">
            <span class="text-blue-400 hover:text-blue-700"> Créez un compte</span>
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { defineEmits } from "vue";

const emit = defineEmits(["login"]);

const router = useRouter();
const utilisateur = ref({
    email: "",
    password: "",
});

const erreurs = ref({
    email: "",
    password: "",
});

const showError = ref({
    email: false,
    password: false,
});

const handleLogin = () => {
    emit("login");
};

const seConnecter = async () => {
    erreurs.value.email = utilisateur.value.email ? "" : "L'email est obligatoire.";
    erreurs.value.password = utilisateur.value.password ? "" : "Le mot de passe est obligatoire.";

    if (!utilisateur.value.email || !utilisateur.value.password) {
        return;
    }

    try {
        const response = await axios.post("https://booking.openintech.app/api/login", utilisateur.value, {
            headers: {
                "Content-Type": "application/json",
                "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
            },
        });

        console.log("Réponse de l'API :", response.data);
        alert("Connexion réussie !");
        if(response.data && response.data.token){
            localStorage.setItem("token", response.data.token);
           
        } else {
            alert("Erreur: Le token n'a pas été reçu.");
        }

        utilisateur.value = { email: "", password: "" };

        router.push("/");
    } catch (error) {
        console.error("Erreur de connexion :", error);
        if (error.response) {
            if (error.response.status === 401) {
                alert("Identifiants incorrects.");
            } else if (error.response.status === 500) {
                alert("Erreur serveur. Veuillez réessayer plus tard.");
            } else {
                alert(`Erreur : ${error.response.data.message || "Une erreur est survenue."}`);
            }
        } else {
            alert("Une erreur est survenue. Veuillez vérifier votre connexion.");
        }
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
