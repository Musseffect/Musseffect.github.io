import { createStore, applyMiddleware } from "redux"; 
import rootReducer from "../reducers/rootReducer.js";
import thunkMiddleware from 'redux-thunk';
import {fetchPosts} from '../actions/actions.js';

const initialState=(function(){
		let state={};
		let links=[{link:'',
		description:'Link to some great site whatever fuck this shit gay earth im out ok fine nvm brb asap fubar afk'}];
		state.links=links;
		let about=[];
		state.about=about;
		state.title="";
		state.language = "ru";
		state.isFetching = false;
		state.hasError = false;
		state.tags = {};
		state.posts = [];
		/*
		
		
		
		
		*/
		/*state.posts = [
			{
				name:'Light in 2D',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/48852471061_a3930b5f77_m.jpg',//200px
				mainImg:'https://live.staticflickr.com/65535/48852471061_a3930b5f77_z.jpg',//600px
				images:[
					{
						thumbnail: 'https://live.staticflickr.com/65535/49564399532_e8a5f2cef7_n.jpg',//300px
						full:'https://live.staticflickr.com/65535/49564399532_e8a5f2cef7_b.png',//1080px max
						original:'https://live.staticflickr.com/65535/49564399532_98ee41b365_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48852112793_96c3ed6942_n.jpg',
						full:'https://live.staticflickr.com/65535/48852112793_96c3ed6942_b.png',
						original:'https://live.staticflickr.com/65535/48852112793_643c64cd2b_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48852471061_a3930b5f77_n.jpg',
						full:'https://live.staticflickr.com/65535/48852471061_a3930b5f77_b.jpg',
						original:'https://live.staticflickr.com/65535/48852471061_ef7ed2da48_o.png'
					}
				],
				tags:['glsl','2d','graphics','cuda','opengl']
			},
			{
				name:'Balls',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/48511339892_c39091b57d_o.jpg',
				mainImg:'https://live.staticflickr.com/65535/48511339892_c39091b57d_o.jpg',
				images:
				[
					{
						thumbnail: 'https://live.staticflickr.com/65535/48511339627_048ba4bdfc_n.jpg',
						full:'https://live.staticflickr.com/65535/48511339627_048ba4bdfc_b.jpg',
						original:'https://live.staticflickr.com/65535/48511339627_7c19deeeac_o.jpg'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48511159671_f3999c5004_n.jpg',
						full: 'https://live.staticflickr.com/65535/48511159671_f3999c5004_b.jpg',
						original:'https://live.staticflickr.com/65535/48511159671_5b9fba0a76_o.jpg'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48511339487_684c479654_n.jpg',
						full: 'https://live.staticflickr.com/65535/48511339487_684c479654_b.jpg',
						original:'https://live.staticflickr.com/65535/48511339487_4d75b59848_o.jpg'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48511339892_ce117ac936_n.jpg',
						full: 'https://live.staticflickr.com/65535/48511339892_ce117ac936_b.jpg',
						original:'https://live.staticflickr.com/65535/48511339892_c39091b57d_o.jpg'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48760575083_4ba537c575_n.jpg',
						full: 'https://live.staticflickr.com/65535/48760575083_4ba537c575_b.jpg',
						original:'https://live.staticflickr.com/65535/48760575083_57b430046c_o.png'
					}
				],
				tags:['3d','graphics','glsl','ray-marching','path-tracing']
			},
			{
				name:'2D Fractals',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/48511333112_aa0cbecb8a_m.jpg',
				mainImg:'https://live.staticflickr.com/65535/48511333112_c4813c0b49_o.png',
				images:
				[
					{
						thumbnail: 'https://live.staticflickr.com/65535/48511333112_aa0cbecb8a_n.jpg',
						full: 'https://live.staticflickr.com/65535/48511333112_aa0cbecb8a_b.jpg',
						original:'https://live.staticflickr.com/65535/48511333112_c4813c0b49_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48761085457_2d40cd9dff_n.jpg',
						full: 'https://live.staticflickr.com/65535/48761085457_2d40cd9dff_b.jpg',
						original:'https://live.staticflickr.com/65535/48761085457_0bc4afc155_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48760580418_a5b6f8d3e5_n.jpg',
						full: 'https://live.staticflickr.com/65535/48760580418_a5b6f8d3e5_b.jpg',
						original:'https://live.staticflickr.com/65535/48760580418_e141b28cb7_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48852677637_2b05f8ec60_n.jpg',
						full: 'https://live.staticflickr.com/65535/48852677637_2b05f8ec60_b.jpg',
						original:'https://live.staticflickr.com/65535/48852677637_6dcf962e0b_o.png'
					}
				],
				tags:['2d','fractal','glsl']
			},
			{
				name:'3D Fractals',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/49715790047_5d01edc106_o.png',
				mainImg:'https://live.staticflickr.com/65535/49715790047_5d01edc106_o.png',
				images:
				[
					{
						thumbnail: 'https://live.staticflickr.com/65535/49715790047_aac847b6c4_n.jpg',
						full: 'https://live.staticflickr.com/65535/49715790047_aac847b6c4_b.jpg',
						original:'https://live.staticflickr.com/65535/49715790047_5d01edc106_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48511156301_be8169d7f0_n.jpg',
						full: 'https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg',
						original:'https://live.staticflickr.com/65535/48511156301_8d9d21f65d_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48511338257_98e2c3c312_n.jpg',
						full: 'https://live.staticflickr.com/65535/48511338257_98e2c3c312_b.jpg',
						original:'https://live.staticflickr.com/65535/48511338257_c525d5aaed_o.jpg'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48852163898_ea62379d43_n.jpg',
						full: 'https://live.staticflickr.com/65535/48852163898_ea62379d43_b.jpg',
						original:'https://live.staticflickr.com/65535/48852163898_7c1be00139_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48852516286_85b8c968c0_n.jpg',
						full: 'https://live.staticflickr.com/65535/48852516286_85b8c968c0_b.jpg',
						original:'https://live.staticflickr.com/65535/48852516286_8f2bc3d27d_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/48852328736_ec36df16c6_n.jpg',
						full: 'https://live.staticflickr.com/65535/48852328736_ec36df16c6_b.jpg',
						original:'https://live.staticflickr.com/65535/48852328736_7abb73b2b6_o.png'
					}
				],
				tags:['3d','fractal','glsl']
			},
			{
				name:'Bokeh',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/49564397922_197845d3d5_m.jpg',//200px
				mainImg:'https://live.staticflickr.com/65535/49564397922_197845d3d5_b.jpg',//400px
				images:[
					{
						thumbnail: 'https://live.staticflickr.com/65535/49564397922_197845d3d5_n.jpg',
						full: 'https://live.staticflickr.com/65535/49564397922_197845d3d5_b.jpg',
						original:'https://live.staticflickr.com/65535/49564397922_644396f490_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49564395007_66b200c23c_n.jpg',
						full: 'https://live.staticflickr.com/65535/49564395007_66b200c23c_b.jpg',
						original:'https://live.staticflickr.com/65535/49564395007_e791e84b69_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49563673993_343d5434d3_n.jpg',
						full: 'https://live.staticflickr.com/65535/49563673993_343d5434d3_b.jpg',
						original:'https://live.staticflickr.com/65535/49563673993_0159dd0ce6_o.jpg'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49564176471_1df0d499a3_n.jpg',
						full: 'https://live.staticflickr.com/65535/49564176471_1df0d499a3_b.jpg',
						original:'https://live.staticflickr.com/65535/49564176471_3d4f268443_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49563671123_f90aff5fcb_n.jpg',
						full: 'https://live.staticflickr.com/65535/49563671123_f90aff5fcb_b.jpg',
						original:'https://live.staticflickr.com/65535/49563671123_d962634eac_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49715468276_8022aec772_n.jpg',
						full: 'https://live.staticflickr.com/65535/49715468276_8022aec772_b.jpg',
						original:'https://live.staticflickr.com/65535/49715468276_6e4c3edafe_o.png'
					}
				],
				tags:['3d','graphics','processing','glsl','openframeworks']
			},
			{
				name:'Lines',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/49742552207_01c05e25fc_m.jpg',//200px
				mainImg:'https://live.staticflickr.com/65535/49742552207_01c05e25fc_b.jpg',//400px
				images:[
					{
						thumbnail: 'https://live.staticflickr.com/65535/49742552207_01c05e25fc_n.jpg',
						full: 'https://live.staticflickr.com/65535/49742552207_01c05e25fc_b.jpg',
						original:'https://live.staticflickr.com/65535/49742552207_081981ca8c_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49741679373_e0c9781729_n.jpg',
						full: 'https://live.staticflickr.com/65535/49741679373_e0c9781729_b.jpg',
						original:'https://live.staticflickr.com/65535/49741679373_d64222abc9_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49742228746_304f93101d_n.jpg',
						full: 'https://live.staticflickr.com/65535/49742228746_304f93101d_b.jpg',
						original:'https://live.staticflickr.com/65535/49742228746_980c96ef49_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49742228691_c4bbe2a3aa_n.jpg',
						full: 'https://live.staticflickr.com/65535/49742228691_c4bbe2a3aa_b.jpg',
						original:'https://live.staticflickr.com/65535/49742228691_bf7d82f7b4_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49741679008_a1cb8c42f8_n.jpg',
						full: 'https://live.staticflickr.com/65535/49741679008_a1cb8c42f8_b.jpg',
						original:'https://live.staticflickr.com/65535/49741679008_1556c02e09_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49742228356_512eb097a7_n.jpg',
						full: 'https://live.staticflickr.com/65535/49742228356_512eb097a7_b.jpg',
						original:'https://live.staticflickr.com/65535/49742228356_42def4fc40_o.png'
					},
					{
						thumbnail: 'https://live.staticflickr.com/65535/49741678678_9597c57a82_n.jpg',
						full: 'https://live.staticflickr.com/65535/49741678678_9597c57a82_b.jpg',
						original:'https://live.staticflickr.com/65535/49741678678_7b7bfe016c_o.png'
					}
				],
				tags:['2d','processing','generative','openframeworks']
			}
		];
		state.tags = {};
		state.posts.forEach(function(value)
		{
			value.tags.forEach(function(value)
			{
				state.tags[value]=false;
			});
		});
		if(localStorage)
		{
			if (localStorage.getItem("tags") !== null) {
				let tags = JSON.parse(localStorage.getItem("tags"));
				Object.entries(tags).forEach(function([key,value])
				{
					if(state.tags[key]!==undefined)
					{
						state.tags[key] = value;
					}
				});
			}else
			{
				localStorage.setItem("tags", JSON.stringify(state.tags));
			}
		}*/
		return state;
})();


const store = createStore(rootReducer,initialState,applyMiddleware(thunkMiddleware)
	,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  

store.dispatch(fetchPosts());

export default store;