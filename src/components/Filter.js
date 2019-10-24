import React from "react";
import TextBox from "./TextBox";
import CheckBox from "./CheckBox";
import { Select } from "./Select";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.value;
  }

  render() {
    return (
      <div className="panelsFilter">
        <div className="panelFilter">
          <TextBox
            label="Utilisateur :"
            name="username"
            placeholder="UserName"
            value={this.state.username}
            onChange={e => {
              let tmp = { ...this.state };
              tmp.username = e.target.value;
              this.setState({ username: e.target.value });
              this.props.onChange(tmp);
            }}
          />
        </div>
        <div className="panelFilter">
          <TextBox
            label="Prénom :"
            name="firstname"
            placeholder="Prénom"
            value={this.state.firstname}
            onChange={e => {
              let tmp = { ...this.state };
              tmp.firstname = e.target.value;
              this.setState({ firstname: e.target.value });
              this.props.onChange(tmp);
            }}
          />
        </div>
        <div className="panelFilter">
          <TextBox
            label="Nom :"
            name="lastname"
            placeholder="Nom"
            value={this.state.lastname}
            onChange={e => {
              let tmp = { ...this.state };
              tmp.lastname = e.target.value;
              this.setState({ lastname: e.target.value });
              this.props.onChange(tmp);
            }}
          />
        </div>
        <div className="panelFilter">
          <TextBox
            label="Email :"
            name="email"
            placeholder="Email"
            value={this.state.mail}
            onChange={e => {
              let tmp = { ...this.state };
              tmp.mail = e.target.value;
              this.setState({ mail: e.target.value });
              this.props.onChange(tmp);
            }}
          />
        </div>
        <div className="panelFilter">
          <Select
            label="Newsletter :"
            name="newsletter"
            value={this.state.newsletter}
            options={[
              { key: "all", text: "Tous" },
              { key: "yes", text: "Abonnés" },
              { key: "no", text: "Non abonnés" }
            ]}
            onChange={e => {
              let tmp = { ...this.state };
              console.log(e.target.value);
              tmp.newsletter = e.target.value;
              this.setState({ newsletter: e.target.value });
              this.props.onChange(tmp);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
