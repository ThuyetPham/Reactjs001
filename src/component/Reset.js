import React from 'react';

class Reset extends React.Component {

  onResultDefault = () => {
    this.props.onSetingDefault(true);
  }
  render() {
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={this.onResultDefault}>reset</button>
        </>
    )
  }
}

export default Reset
