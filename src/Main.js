var React = require('react/addons'),
    Blinder = require('./Blinder');

class Main extends React.Component {
  constructor() {
    this.state = { };
  }

  render() {
    return (
      <Blinder>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </Blinder>
    );
  }
}

export default Main;
