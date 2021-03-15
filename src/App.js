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
    fontSize: 12
  };
  this.onSetColor=this.onSetColor.bind(this);
  this.onChangeSize=this.onChangeSize.bind(this);
  this.onSetingDefault=this.onSetingDefault.bind(this);

}

onSetColor(params){
  this.setState({
    color: params,
  })
}

onChangeSize(value){
  if(this.state.fontSize + value >=8 && this.state.fontSize + value <=36) {
    this.setState({
      fontSize : this.state.fontSize + value
    });
  }
}

onSetingDefault(value){
  if(value){
    this.setState({
      color: 'red',
      fontSize: 12
    });
  }
}

  render() {
    return (
      <div className='container mt-50'>
        <div className='row'>
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting 
            fontSize={this.state.fontSize}
            onChangeSize={this.onChangeSize}
            />
            <Reset onSetingDefault={this.onSetingDefault}/>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    )
  }
}

export default Main
