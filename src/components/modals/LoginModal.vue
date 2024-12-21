<script>

import LoginForm from "@/components/forms/Login.vue";

export default {
  name: "LoginModal",
  components: {LoginForm},
}
</script>

<template>
 <login-form @finish="$emit('finish')"/>
</template>
