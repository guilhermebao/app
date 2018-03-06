<template>
  <div class="gridcontainer" id="app">
    <router-link to="/">List</router-link>
    <router-link to="/1">Input</router-link>
    <div class="gridmenu">
      <router-view></router-view>
    </div>

    <div class="gridbox gridmap">
      <Map></Map>
    </div>
  </div>
</template>

<script>

import Map from './components/Map'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  Map
}

}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.gridmenu {
  float: left; 
  width: 30%;
    
}

.gridmap {
    float: right; 
    width: 60%;
    height: 600px;
    background-color: #ebedef;
    
}

.gridbox {
        margin-right: 0;
        float: left;
    }

@media only screen and (max-width: 500px) {
.gridmenu {
    width: 100%;
}

.gridmap {
    width: 100%;
}

.gridbox {
        margin-right: 0;
        float: left;
    }
}

</style>
