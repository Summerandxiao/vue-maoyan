import Vue from 'vue'
import Router from 'vue-router'
import Cinema from 'pages/Cinema'
import ComingSoon from 'pages/ComingSoon'
import Film from 'pages/Film'
import Hot from 'pages/Hot'
import My from 'pages/My'
import MovieDetail from "common/MovieDetail"
import WillDetail from "pages/WillDetail.vue"
import Mtzh from "pages/Mtzh"
import Phone from "pages/Phone"
import Cinemadetail from "pages/cinemadetail.vue"
import Address from "pages/address.vue"
import Search from "pages/search.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'film'
    },
     {
      path: '/film',
      name:'film',
      component: Film,
      children:[
      {
      path: 'hot',
      name:'hot',
      component: Hot,
      children:[{
	      	path: 'movieDetail',
		      name:'movieDetail',
		      component: MovieDetail
	      }]
    },
    {
      path: 'coming',
      name:'coming',
      component: ComingSoon,
      children:[{
      	path: 'willDetail',
	      name:'willDetail',
	      component: WillDetail
      }]
    },
    {
    	path: 'address',
      name:'address',
      component: Address,
    },
    {
    	path: 'search',
      name:'search',
      component: Search,
    },
    {
      path: '/film',
      redirect: 'hot'
    },
      ]
    },
     {
			path: '/cinema',
			name: 'cinema',
			component: Cinema,
			children:[{
				path:"cinemadetail",
				name:"cinemadetail",
				component:Cinemadetail
			}]
		},
		{
      path: '/my',
      name:'my',
      component: My,
      children:[
      {
      	path:"phone",
      	name:"phone",
      	component:Phone
      },
       {
      	path:"mtzh",
      	name:"mtzh",
      	component:Mtzh
      },
      {
      path: '/my',
      redirect: 'mtzh'
     }
      ]
      }
  ]
})
