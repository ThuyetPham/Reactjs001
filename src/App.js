import React from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';


class Main extends React.Component {

constructor(props){
  super(props) 
  this.state = {
    color: 'red',
    fontSize: 15
  };
}

onSetColor(params) {
  console.log(params)
}


  render() {
    return (
      <div className='container mt-50'>
        <div className='row'>
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting/>
            <Reset/>
          </div>
          <Result/>
        </div>
      </div>
    )
  }
}

export default Main
