import React from "react/addons"
import Blinder from "./Blinder"

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Blinder>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <Blinder>
            <ul>
              <li>1</li>
              <Blinder>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </Blinder>
              <li>2</li>
              <li>3</li>
            </ul>
          </Blinder>
        </ul>
      </Blinder>
    );
  }
}

export default Main
