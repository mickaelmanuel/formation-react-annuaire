import React from "react";
import TextBox from "./TextBox";
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
            label="Abonnés :"
            name="premiumaccount"
            value={this.state.premiumaccount}
            options={[
              { key: "all", text: "Tous" },
              { key: "yes", text: "Premium" },
              { key: "no", text: "Non abonnés" }
            ]}
            onChange={e => {
              let tmp = { ...this.state };
              console.log(e.target.value);
              tmp.premiumaccount = e.target.value;
              this.setState({ premiumaccount: e.target.value });
              this.props.onChange(tmp);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
