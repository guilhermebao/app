<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
      <h1 class="card-header">CADASTRO DE CLIENTES</h1>
      <div class="text-input">
        <div>
          <label class="text-secondary">Nome</label>
          <input type="text" id="txtNome" v-model="entidade.nome">
        </div>
        <div>
          <label class="text-secondary text-input">CPF/CNPJ</label>
          <input :class="{ 'not-input': nomeVazio }" type="text" id="txtCnpj" v-model="entidade.cnpj">
        </div>
         <div>
          <label class="text-secondary text-input">Latitude</label>
          <input type="number" id="txtLatitude" v-model="entidade.latitude">
         </div>
         <div>
          <label class="text-secondary text-input">Longitude</label>
          <input type="number" id="txtLongitude" v-model="entidade.longitude">
         </div>
         <div>
           <label class="text-secondary text-input">Telefone</label>
           <input type="text" id="txtTelefone" v-model="entidade.telefone">
         </div>
         <div>
          <label class="text-secondary text-input">Email</label>
          <input type="email" id="txtEmail" v-model="entidade.email">
         </div>
    </div>
    <div class="btn-input">
      <router-link to="/" class='btn btn-danger'>Cancelar</router-link>
      <button @click="salvar" :disabled='botaoDesabilitado' class='btn btn-outline-success'> Salvar</button>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Input', 
  data () {
    return {
      entidade: {}
    }
  },
  methods:{
    salvar(){
      this.$store.dispatch('addEntidade',this.entidade)
      alert(JSON.stringify(this.entidade));
    }
  },
  computed: {
    nomeVazio(){
      return !this.entidade.nome
    },
    cnpjVazio(){
      return !this.entidade.cnpj
    },
    latitudeVazio(){
      return !this.entidade.latitude
    },
    longitudeVazio(){
      return !this.entidade.longitude
    },
    telefoneVazio(){
      return !this.entidade.telefone
    },
    emailVazio(){
      return !this.entidade.email
    },
    botaoDesabilitado(){
      return this.nomeVazio || this.cnpjVazio || this.latitudeVazio || this.longitudeVazio || this.telefoneVazio || this.emailVazio

    }
  },
  mounted: ()=> {
    this.entidade = this.$store.getters.getEntidade(this.$route.params.id)
  }
}


</script>



<style>

.not-input{
  color: red;

}

h1{
  font-size: 16px;
  color: #fff;
}
.card-header{
  background: linear-gradient(60deg, #92111c, #92111c);
  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);
}

.text-input{
  margin-top: 15px;
  list-style: none;
  text-align: left;
}

.btn-input {
  margin: 10px;
  float: left; 
}

input{
  width: 90%;
}

.menu {
    text-align: left;
    display: inline-block;
    position: relative;
    width: 100%;
    margin: 15px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 3px;
    color: rgba(0,0,0, 0.87);
    background: #fff;
}

table{
  padding: 15px 20px;
}

</style>
