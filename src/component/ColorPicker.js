import React from 'react';

class ColorPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            colors : ['red','green','blue','black']
        };
    }
    showColor(color) {
        console.log(this.props.color)
        return {
            backgroundColor: color,
        }
      
    }
    activeColor(color) {
        this.props.onReceiveColor(color)
    }

  render() {
    var elmColors = this.state.colors.map((color, index) => {
        return <span 
        key={index} 
        style={this.showColor(color)}
        className={this.props.color ===color ? 'active' : ''}
        onClick={ () => this.activeColor(color)}
        ></span>
    });

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
                 {elmColors}
              <hr/>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPicker