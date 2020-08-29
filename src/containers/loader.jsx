import React, { Component } from 'react';


class Loader extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {isLoading} = this.props;
        if(isLoading)
            return (<div className="loaderBackground">
                        <div className="loader">
                            <div></div><div></div><div></div>
                        </div>
                    </div>);
      return this.props.children;
    }
}

export default Loader;