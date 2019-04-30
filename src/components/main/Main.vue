<template>
    <div id="main">
      <TabBar></TabBar>
      <router-view />
    </div>
</template>

<script>
  import  TabBar from "../public/TabBar"
    export default {
        name: "Main",
      components:{
         TabBar
      }
    }
</script>

<style scoped>

</style>
