<template>
  <div>
    <img src="../assets/entrance-logo-white.png" alt="Entrance Design Logo" :class="logoClass" >
  </div>
</template>

<script>
export default {
  name: 'HeaderBarLogo',
  props: {
    logoClass: String
  }
}
</script>
