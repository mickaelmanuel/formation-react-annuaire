import React from "react";
import TextBox from "./TextBox";
import CheckBox from "./CheckBox";
import { addUser, updateUser } from "../action";
import { connect } from "react-redux";
import { selectUser } from "../selectors";
import { USERS_HOME_ROUTE } from "../consts";

function ValidateEmail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

const mapStateToProps = (state, ownprops) => ({
  user: selectUser(state, ownprops.username)
});

const mapDispatchToProps = {
  addUser,
  updateUser
};

const initialState = {
  editMode: true,
  username: "",
  firstname: "",
  lastname: "",
  mail: "",
  premiumaccount: false,
  errorMessage: ""
};

class AddEditUserRender extends React.Component {
  constructor(props) {
    super(props);

    const user = this.props.user;

    if (this.props.isEditMode) {
      this.state = {
        editMode: true,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        mail: user.mail,
        premiumaccount: user.premiumaccount,
        errorMessage: ""
      };

      return;
    }
    this.state = initialState;
  }

  render() {
    const manageHistoryRedirection = this.props.history !== undefined;
    return (
      <div style={{ width: "450px" }}>
        <div>
          <TextBox
            name="username"
            placeholder="Utilisateur"
            label="Utilisateur :"
            readOnly={this.props.isEditMode}
            value={this.state.username}
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <TextBox
            name="firstname"
            placeholder="Prénom"
            label="Prénom :"
            value={this.state.firstname}
            onChange={e => {
              this.setState({ firstname: e.target.value });
            }}
          />
          <TextBox
            name="lastname"
            placeholder="Nom"
            label="Nom :"
            value={this.state.lastname}
            onChange={e => {
              this.setState({ lastname: e.target.value });
            }}
          />
          <TextBox
            name="email"
            placeholder="Email"
            label="Email :"
            value={this.state.mail}
            onChange={e => {
              this.setState({ mail: e.target.value });
            }}
          />
          <CheckBox
            label="Abonnement premium"
            checked={this.state.premiumaccount}
            onChange={e => {
              this.setState({ premiumaccount: !this.state.premiumaccount });
            }}
          />
          <div className="button-container">
            <button
              className="button"
              onClick={() => {
                var haserror = false;
                var errorMessage = "";

                if (this.state.username.length === 0) {
                  haserror = true;
                  errorMessage += "Veuillez renseigner un username\r\n";
                }
                if (this.state.firstname.length === 0) {
                  haserror = true;
                  errorMessage += "Veuillez renseigner un prenom\r\n";
                }
                if (this.state.lastname.length === 0) {
                  haserror = true;
                  errorMessage += "Veuillez renseigner un nom de famille\r\n";
                }

                if (this.state.mail.length === 0) {
                  haserror = true;
                  errorMessage += "Veuillez renseigner un email\r\n";
                } else {
                  if (!ValidateEmail(this.state.mail)) {
                    haserror = true;
                    errorMessage += `le mail ${this.state.mail} n'est pas valide.\r\n`;
                  }
                }

                if (
                  !this.props.isEditMode &&
                  this.props.users.findIndex(x => x.username === this.state.username) !== -1
                ) {
                  haserror = true;
                  errorMessage += `l'username ${this.state.username} existe déjà. Veuillez essayer avec un autre username.\r\n`;
                }

                if (haserror) {
                  this.setState({
                    errorMessage: errorMessage
                  });
                  return;
                }

                var newUser = {
                  username: this.state.username,
                  firstname: this.state.firstname,
                  lastname: this.state.lastname,
                  mail: this.state.mail,
                  premiumaccount: this.state.premiumaccount
                };

                if (this.props.isEditMode) {
                  this.props.updateUser({ user: newUser });
                } else {
                  this.props.addUser({ user: newUser });
                }

                if (manageHistoryRedirection && !this.props.isEditMode) {
                  this.props.history.push(USERS_HOME_ROUTE);
                }
              }}
            >
              {this.props.isEditMode ? "Mettre à jour" : "Ajouter"}
            </button>
          </div>
        </div>
        <div>
          <span style={{ color: "red" }}>{this.state.errorMessage}</span>
        </div>
      </div>
    );
  }
}

export const AddEditUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditUserRender);
