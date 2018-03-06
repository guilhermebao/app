<template>
  <div class="col-md-12">
    <div id="map"></div>
  </div>
    
</template>

<script>
  export default {
    name: 'Map',
    data () {
      return {
        
      }
    },
    mounted:()=>{
      initMap()
    }
  }
      const initMap=()=> {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    </script>
    

<style>

 #map {
    position: relative;
    width: 100%;
    height: calc(100% - 60px);
    margin-top: 70px;
  }
position: relative;
    width: 100%;
    height: calc(100% - 60px);
    margin-top: 70px;
</style>
