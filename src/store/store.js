import { createStore } from "redux"; 
import rootReducer from "../reducers/rootReducer.js";


let gallery=[
	{
		previewSrc:"https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg",
		name:"Ray tracing 1",
		imgs:[
			"http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg",
			"https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg"
		],
		description:'this is a description'},
	{
		previewSrc:"http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg",
		name:"Ray tracing 2",
		imgs:[
			"http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg",
			"https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg"
		],
		description:'this is a description'},
	{
		previewSrc:"https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg",
		name:"Ray tracing 3",
		imgs:[
			"http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg",
			"https://live.staticflickr.com/65535/48511156301_be8169d7f0_b.jpg"
		],
		description:'this is a description'}
];

const initialState=(function(){
		let state={};
		let links=[{link:'',
		description:'Link to some great site whatever fuck this shit gay earth im out ok fine nvm brb asap fubar afk'}];
		state.links=links;
		let about=[];
		state.about=about;
		state.title="";
		state.language = "ru";
		state.posts = [
			{
				name:'Light in 2D',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/48852471061_a3930b5f77_m.jpg',//200px
				mainImg:'https://live.staticflickr.com/65535/48852471061_a3930b5f77_z.jpg',//600px
				images:[
					'https://live.staticflickr.com/65535/49564399532_98ee41b365_o.png',
					'https://live.staticflickr.com/65535/48852112793_643c64cd2b_o.png',
					'https://live.staticflickr.com/65535/48852471061_ef7ed2da48_o.png'
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
					'https://live.staticflickr.com/65535/48511339627_7c19deeeac_o.jpg',
					'https://live.staticflickr.com/65535/48511159671_5b9fba0a76_o.jpg',
					'https://live.staticflickr.com/65535/48511339487_4d75b59848_o.jpg',
					'https://live.staticflickr.com/65535/48511339892_c39091b57d_o.jpg',
					'https://live.staticflickr.com/65535/48760575083_57b430046c_o.png'
				],
				tags:['3d','graphics','glsl','ray-marching','path-tracing']
			},
			{
				name:'2D Fractals',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/48511333112_c4813c0b49_o.png',
				mainImg:'https://live.staticflickr.com/65535/48511333112_c4813c0b49_o.png',
				images:
				[
					'https://live.staticflickr.com/65535/48511333112_c4813c0b49_o.png',
					'https://live.staticflickr.com/65535/48761085457_0bc4afc155_o.png',
					'https://live.staticflickr.com/65535/48760580418_e141b28cb7_o.png',
					'https://live.staticflickr.com/65535/48852677637_6dcf962e0b_o.png'
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
					'https://live.staticflickr.com/65535/49715790047_5d01edc106_o.png',
					'https://live.staticflickr.com/65535/48511156301_8d9d21f65d_o.png',
					'https://live.staticflickr.com/65535/48511338257_c525d5aaed_o.jpg',
					'https://live.staticflickr.com/65535/48852163898_7c1be00139_o.png',
					'https://live.staticflickr.com/65535/48852516286_8f2bc3d27d_o.png',
					'https://live.staticflickr.com/65535/48852328736_7abb73b2b6_o.png'
				],
				tags:['3d','fractal','glsl']
			},
			{
				name:'Bokeh',
				description:'',
				thumbnail:'https://live.staticflickr.com/65535/49564397922_197845d3d5_m.jpg',//200px
				mainImg:'https://live.staticflickr.com/65535/49564397922_197845d3d5_b.jpg',//400px
				images:[
					'https://live.staticflickr.com/65535/49564397922_644396f490_o.png',
					'https://live.staticflickr.com/65535/49564395007_e791e84b69_o.png',
					'https://live.staticflickr.com/65535/49563673993_0159dd0ce6_o.jpg',
					'https://live.staticflickr.com/65535/49564176471_3d4f268443_o.png',
					'https://live.staticflickr.com/65535/49563671123_d962634eac_o.png',
					'https://live.staticflickr.com/65535/49715468276_6e4c3edafe_o.png'
				],
				tags:['3d','graphics','processing','glsl','openframeworks']
			}
		];
		state.tags = {};
		state.posts.forEach(function(value)
		{
			value.tags.forEach(function(value)
			{
				state.tags[value]=true;
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
		}
		return state;
})();


const store = createStore(rootReducer,initialState
	,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  


export default store;