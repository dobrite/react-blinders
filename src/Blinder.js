var React = require('react/addons');

class Blinder extends React.Component {
  constructor() {
    this.state = { display: 'block' };
  }

  render() {
    return (
      <ul
        style={this.state}
        children={this.props.children}
      />
    );
  }
}

export default Blinder;
