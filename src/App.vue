<template>
 <div id="app">
  <div class="container grid-xs py-2">
    <header class="navbar">
      <section class="navbar-section">
        <router-link to ='/' class="btn btn-link">Home</router-link>
        <router-link to ='/display' class = "btn btn-link">tarefas</router-link>
        <img class="img-responsive" src="@/assets/lista.png" alt="coffetag">
        <a href="https://www.linkedin.com/in/sergio-pinheiro-517978210/" class="btn btn-link" >Linkedin</a>
        <a href="https://github.com/Serginww" class="btn btn-link">GitHub</a>
      </section>
      
  </header>
</div>
<router-view/>
</div>
</template>

<style scoped>

  img {

    max-width: 100px;
    margin: 0 auto;
}


</style>
