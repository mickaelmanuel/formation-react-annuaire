import React from "react";
import { IconChecked, IconUnchecked } from "../components/Icons";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: props.isToggleOn };
  }

  render() {
    return (
      <div
        onClick={() => {
          this.setState({ isToggleOn: !this.state.isToggleOn });
          this.props.onToggleChange();
        }}
      >
        {this.state.isToggleOn ? <IconChecked /> : <IconUnchecked />}
      </div>
    );
  }
}

export default ToggleButton;
