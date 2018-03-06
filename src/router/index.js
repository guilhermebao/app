import Vue from 'vue'
import Router from 'vue-Router'
import List from '../components/List'
import Input from '../components/Input'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path:'/', 
			component:List
		},
		{
			path:'/:id', 
			component:Input
		}

	]
})

