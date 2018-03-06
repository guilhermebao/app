<template>
  <div>
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
          <h1 class="card-header">LISTA DE CLIENTES</h1>
            <table class="table table-hover">
                <thead class="text-secondary">
                  <th>Nome</th>
                  <th>Telefone</th>
                </thead>
                <tbody>
                  <tr v-for="item in list" :key=item.id>
                    <td ><a @click="editar(item.id)">{{item.nome}}</a></td>
                    <td >{{item.telefone}}</td>
                  </tr>
                </tbody>
            </table>
        <router-link to="/1" class='btn btn-outline-primary'>Novo cliente</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  computed: {
    list(){
      console.log(this.$store.getters.getList)
      return this.$store.getters.getList
    }
  },
  methods:{
    editar(id){
      this.$router.push({path:'/' + id})
    }
  }
}
</script>

<style scoped>
.card-header{
  background: linear-gradient(60deg, #92111c, #92111c);
  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);
}
h1{
  font-size: 16px;
  color: #fff;
}
tr{
  list-style: none;
  text-align: left;
}  
td{
  list-style: none;
  text-align: center;
}
</style>
