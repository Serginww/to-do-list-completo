<template>
  <div id = "app" > 
    <ul class="step">
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
      </li>
      <li class="step-item active">
        <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
      </li>
    </ul>

    <div class="container-board">
      <div class="columns">
        <!-- Seção "A fazer" -->
        <div class="column col-4">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title"><center>A fazer</center></div>
            </div>
            <div class="panel-body">
              <tarefa v-for="tarefa in uncheckends" :tarefa="tarefa" @toggle="toggleTarefa" @remove="removeTarefa" :key="tarefa.id" />
            </div>
            <div class="panel-footer">
            
      </div>
    </div>
  </div>

        <!-- Seção "Concluído" -->
        <div class="column col-4">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title"><center>Concluído</center></div>
            </div>
            <div class="panel-body">
              <tarefa v-for="tarefa in checkeds" :tarefa="tarefa" @toggle="toggleTarefa" @remove="removeTarefa" :key="tarefa.id" />
            </div>
            <div class="panel-footer"></div>
          </div>
        </div>

        <!-- Seção "Observações" -->
        <div class="column col-4">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title"><center>Observações</center></div>
            </div>
            <div class="panel-nav">
              <div class="input-group">
                <input type="text" class="form-input" id="observa" placeholder="Adicionar um lembrete">
                <button class="btn btn-success input-group-btn" @click=" adicionarobservaçao"><i class="icon icon-arrow-right"></i>Adicionar</button>
              </div>
            </div>
            <div class="panel-body">
           
              <ul id="observationList"></ul>
            </div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tarefa from '@/components/Tarefa';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Tarefa
  },
  computed: {
    ...mapGetters(['uncheckends', 'checkeds'])
  },
  methods: {
    ...mapActions(['removeTarefa', 'toggleTarefa']),
    adicionarobservaçao() {
  var input = document.getElementById("observa"); // Corrigindo o ID aqui
  var text = input.value.trim();

  if (text !== "") {
    var list = document.getElementById("observationList");
    var listItem = document.createElement("li");
    listItem.textContent = text;
    list.appendChild(listItem);
    input.value = "";
      }
    }
  }
}
</script>

<style>
.container-board {

  height: calc(100vh - 100px);
  padding: 15px;
  margin: 0px 100px 0px 100px;
 
}

.columns {
  height: 100%;
  display: flex;
  justify-content: space-between;
  
}

.column {
  flex: 1;

}

.columns .column .panel {
  height: 100%;
  border: 0px;
  box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);
  
}

.input-group {
  padding: 0px 10px 0px 10px;
}



#app {
  min-height: 100vh;
  background-color: #011222; 
  color: white;

}



</style>
