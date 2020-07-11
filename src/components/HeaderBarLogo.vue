<template>
  <div :class="logoClass">
    <img src="../assets/entrance-logo-white.png" alt="Entrance Design Logo" >
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
