<script setup>

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <b-navbar toggleable="lg" type="light" variant="light" class="navbar">
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
          <b-navbar-toggle class="navbar-burger" target="nav-collapse">
          </b-navbar-toggle>
        </div>

        <div>
          <b-collapse id="nav-collapse" is-nav class="navbar-collapse">
            <b-navbar-nav class="menu-items">
              <b-nav-item href="#">Zimmer</b-nav-item>
              <b-nav-item href="#">
                <RouterLink to="/about">Über uns</RouterLink>
              </b-nav-item>
              <b-nav-item>
              <RouterLink to="/contact">Anfahrt und Kontakt</RouterLink>
              </b-nav-item>

              <b-nav-item href="#">Login</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto menu-items">

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Buchungshistorie</b-dropdown-item>
                <b-dropdown-item href="#">Logout</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-container>
    </b-navbar>

</template>

<style scoped>
/* Hauptcontainer der Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 5px;
}

/* Stil für den Hotelnamen */
.navbar-titel {
  font-size: 24px;
  font-weight: bold;
}
.navbar-burger{
  border: none;
}

.navbar-collapse {
  width: 100%;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  width: auto;
  max-height: 60px;
}


@media (max-width: 991px) {
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
}
@media (min-width: 992px) {
  .navbar-collapse {
    background-color: transparent;
    box-shadow: none;
  }
  .menu-items {
    display: flex;
    align-items: flex-end;
  }
}

/* Zwischengröße von 600px bis 900px */
@media (min-width: 600px) and (max-width: 993px) {
  .navbar-logo {
    max-height: 50px;
  }
}

</style>