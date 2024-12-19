<script>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/user';
import LoginForm from '@/components/forms/Login.vue';

export default {
  name: 'Navbar',
  components: {LoginForm},
  data() {
    return {
      showLoginModal: false, // Controls modal visibility
    };
  },
  methods: {
    useAuthStore,
    hide() {
      this.$refs.navCollapse.classList.remove('show');
    },
    openLoginModal() {
      this.showLoginModal = true;
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
  },
};
</script>

<template>
  <b-navbar toggleable="md" type="light" variant="light" class="navbar">
    <b-container class="navbar-container">
      <div>
        <b-navbar-brand>
          <RouterLink to="/">
            <img alt="Hotellogo" src="../assets/Logos/Logo2_clean.png" class="navbar-logo" height="60"/>
          </RouterLink>
        </b-navbar-brand>
      </div>

      <div>
        <b-navbar-brand class="navbar-titel">
          <img alt="HotelName" src="../assets/Logos/Logo3_clean.png" class="navbar-logo" height="60"/>
        </b-navbar-brand>
      </div>

      <!-- Burger-Menu rechts -->
      <div class="navbar-right">
        <b-navbar-toggle class="navbar-burger" target="nav-collapse"></b-navbar-toggle>
      </div>

      <div>
        <b-collapse id="nav-collapse" ref="navCollapse" class="navbar-collapse" @mouseleave="hide">
          <b-navbar-nav class="menu-items">
            <b-nav-item>
              <RouterLink to="/">Start</RouterLink>
            </b-nav-item>
            <b-nav-item>
              <RouterLink to="/rooms">Zimmer</RouterLink>
            </b-nav-item>
            <b-nav-item>
              <RouterLink to="/about">Über uns</RouterLink>
            </b-nav-item>
            <b-nav-item>
              <RouterLink to="/contact">Anfahrt und Kontakt</RouterLink>
            </b-nav-item>
            <b-nav-item>
              <RouterLink to="/imprint">Impressum</RouterLink>
            </b-nav-item>

            <!-- Show Login Link -->
            <b-nav-item v-if="!useAuthStore().user" @click="openLoginModal">Login</b-nav-item>

            <!-- Show Dropdown if Logged In -->
            <b-nav-item-dropdown v-if="useAuthStore().user" right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item @click="useAuthStore().logout()">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-container>
  </b-navbar>

  <!-- Login Modal -->
  <b-modal v-model="showLoginModal" title="Login" hide-footer>
    <login-form @finish="closeLoginModal"/>
  </b-modal>
</template>

<style scoped>
/* Hauptcontainer der Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1) !important;
  background-color: white !important; /* Stelle sicher, dass der Hintergrund weiß bleibt */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 5px;
}

.navbar-container a {
  color: #000 !important;
  text-decoration: none;
}

.navbar-container a:hover {
  text-decoration: underline !important;
}

/* Stil für den Hotelnamen */
.navbar-titel {
  font-size: 24px;
  font-weight: bold;
}

.navbar-burger {
  border: none;
}

.navbar-collapse {
  width: 100%;
  background-color: white !important;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}

.navbar-logo {
  width: auto;
  max-height: 60px;
}

.menu-items a {
  white-space: nowrap;
  font-weight: normal; /* Stelle sicher, dass es normal bleibt */
}

@media (max-width: 768px) {
  .navbar-logo {
    max-height: 30px;
  }

  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 1rem;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .menu-items a {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
}

@media (min-width: 992px) {
  .navbar-collapse {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  .menu-items {
    display: flex;
    align-items: flex-end;
  }
}

@media (min-width: 600px) and (max-width: 993px) {
  .navbar-logo {
    max-height: 50px;
  }
  .navbar-collapse {
    background-color: transparent !important;
    box-shadow: none !important;
  }
}

</style>
