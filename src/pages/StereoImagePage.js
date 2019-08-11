import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import THREE from 'three';

const mapStateToProps=function(state)
{
  return {};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());}
  });
};

const gridShader={
vert:`
in vec2 pos;
out vec2 out_uv;
uniform mat4 mvp;
uniform float heightScale;
uniform sampler2D gridDepth;

void main()
{
  float height = texture(gridDepth,out_uv).x;
  gl_Position = vec4(pos,heightScale*height,1.0)*vmp;
  out_uv=pos;
}
`,
frag:`
uniform sampler2D gridColor;
in vec2 out_uv;
out vec3 color;

void main()
{
  color = texture(gridColor,out_uv);
}
`
};
const pixelDisplacementShader={
vert:`
in vec2 pos;

void main()
{
  gl_Position = vec2();
}
`,
frag:`
uniform vec2 iResolution;
uniform vec2 shift;
uniform sampler2D gridColor;
uniform sampler2D gridDepth;
out vec3 color;

void main()
{
  vec2 uv = gl_FragCoord.xy/iResolution;
  float scale = texture(gridDepth,uv)-0.5;
  color = texture(gridColor,uv+shift*scale);
}
`
};


class StereoImagePage extends Component {
  constructor(props)
  {
      super(props);
      this.screenRef = React.createRef();
      this.fileInput1 = React.createRef();
      this.fileInput2 = React.createRef();

      this.parameterChange = this.parameterChange.bind(this);
      this.updateGridDimension = this.loop.bind(this);
      this.dimensionChange = this.dimensionChange.bind(this);
      this.onLoad = this.onLoad.bind(this);
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
      this.update = this.update.bind(this);
      this.draw = this.draw.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      document.addEventListener('mousemove',onMouseMove,false)

      this.state = {drawGrid:false,gridDimension:100};
  }
  componentDidMount()
  {
    const width=this.screenRef.clientWidth;
    const height = this.screenRef.clientHeight;
    this.glprops=
    {
        camera:new THREE.PerspectiveCamera(70,width/height,0.1,100.0),
        scene: new THREE.Scene(),
        renderer:new THREE.WebGLRenderer(),
        textures:[],
        gridMesh:null,
        screenSpaceMesh:null,
        gridMaterial:new THREE.RawShaderMaterial(
            {
              uniforms:{
              mvp:{value:new THREE.Matrix4()},
              heightScale:{value:1.0},
              gridColor:{value:0},
              gridDepth:{value:1}
            },
            vertexShader: gridShader.vert,
            fragmentShader:gridShader.frag
            }
        ),
        screenSpaceMaterial:new THREE.RawShaderMaterial(
          {
            uniforms:{
            iResolution:{value:new THREE.Vector2()},
            shift:{value:new THREE.Vector2()},
            gridColor:{value:0},
            gridDepth:{value:1}
            },
            vertexShader:pixelDisplacementShader.vert,
            fragmentShader:pixelDisplacementShader.frag
          }
        ),
    };
    this.glprops.renderer.setClearColor("#000000");
    this.glprops.renderer.setSize(width,height);
    this.screenRef.appendChild(this.glprops.renderer.domElement);

  }
  loop()
  {
    this.update();
    this.draw();
    this.frameId = requestAnimationFrame(this.frameId);
  }
  onMouseMove(e)
  {
      this.mouse.x=event.clientX;
      this.mouse.y=event.clientY;
  }
  updateGridDimension()
  {
    let vertices=[];
    let indicies=[];
    var dx=1.0/gridDimension;
    for(var i = 0; i<gridDimension+1; i++)
    {
      let y=dx*i;
      for(var j = 0; j<gridDimension+1; j++)
      {
        let x=dx*j;
        vertices.concat([x,y]);
      }
    }

    for(var i = 0; i<gridDimension; i++)
    {
      for(var j = 0; j<gridDimension; j++)
      {
        let index = j + i * (gridDimension + 1);
        let index2 = j + (i + 1)*(gridDimension + 1);
        indicies.concat([index,index2,index2 + 1]);
        indicies.concat([index,index2 + 1,index + 1]);
      }
    }
    let geometry = new THREE.BufferGeometry();
    geometry.setIndex(indicies);
    geometry.addAttribute('pos',new THREE.BufferAttribute(vertices,2));
    mesh = new THREE.Mesh(geometry).onBeforeRender(
      function(data){
        
      }.bind(this)
    );
    this.scene.add(mesh,material);
  }
  update()
  {
    this.camera.updateProjectionMatrix();
  }
  draw()
  {
    if(this.state.drawGrid)
    {
      let {gridMesh,gridMaterial,renderer} = this.glprops;
      let matProps = renderer.properties.get(gridMaterial);
      let program = matProps.program;
      renderer.renderBufferImmediate(gridMesh,program,gridMaterial)
    }else
    {
      let {screenSpaceMesh,screenSpaceMaterial,renderer} = this.glprops;
      let matProps = renderer.properties.get(screenSpaceMaterial);
      let program = matProps.program;
      this.glprops.renderer.renderBufferImmediate(screenSpaceMesh,program,screenSpaceMaterial);
    }
  }
  start()
  {
    if(!this.frameId)
    {
      this.frameId = requestAnimationFrame(this.loop);
    }
  }
  stop()
  {
    cancelAnimationFrame(this.frameId);
  }
  componentWillUnmount()
  {
    this.stop();
    this.screenRef.removeChild(this.renderer.domElement);
  }
  dimensionChange(e)
  {
      this.setState({gridDimension:e.value});
  }
  parameterChange(e)
  {
    this.setState({[e.target.name]:(e.target.type === 'checkbox' ? e.target.checked : e.target.value)});
  }
  onLoad(e)
  {
    e.preventDefault();

    //load both images as textures
    this.start();
  }
  render() {
    let {} = this.props;
    return (
      <div className='stereImageContainer'>
        <div ref={this.screenRef} style={{display:"block",width:"400px",height:"400px"}}/>
        <div style={{display:"table"}}>
          <div style={{display:"table-row"}}>
            <label style={{display:"table-cell"}}>Dimension</label>
            <input style={{display:"table-cell"}} type="number" style={{display:'block'}} min="1" max="1000" value={this.state.gridDimension} onChange={this.dimensionChange}/>
          </div>
          <div style={{display:"table-row"}}>
            <label style={{display:"table-cell"}}>FOV</label>
            <input style={{display:"table-cell"}} type="number" style={{display:'block'}} min="1" max="1000" value={this.state.gridDimension} onChange={this.parameterChange}/>
          </div>
          <div style={{display:"table-row"}}>
            <label style={{display:"table-cell"}}>shift scale</label>
            <input style={{display:"table-cell"}} type="number" style={{display:'block'}} min="1" max="1000" value={this.state.heightScale} onChange={this.parameterChange}/>
          </div>
          <input style={{display:"table-row"}} type="button" value="update geometry" onClick={this.updateGridDimension}/>
        </div>
        <form>
          <input type="file" style={{display:'block'}}/>
          <input type="file" style={{display:'block'}}/>
          <button onClick={this.onLoad}>
            Load
          </button>
        </form>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(StereoImagePage));