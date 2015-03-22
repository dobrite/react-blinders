import React from "react/addons"

class Blinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: { display: "block" },
      onClick: this.handleClick.bind(this)
    }
  }

  handleClick(e) {
    e.stopPropagation()
    this.setState({
      style: { display: this.toggledDisplay }
    })
  }

  get toggledDisplay() {
    let display = this.state.style.display
    return (display === "block") ? "none" : "block"
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick.bind(this)}>Click me!</div>
        <div {...this.state} {...this.props} />
      </div>
    )
  }
}

export default Blinder
