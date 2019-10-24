import React from "react";
import TextBox from "./TextBox";
import CheckBox from "./CheckBox";
import { addUser, updateUser } from "../action";
import { connect } from "react-redux";
import { selectUsers } from "../selectors";
import { USERS_HOME_ROUTE } from "../consts";

function ValidateEmail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

const mapStateToProps = state => ({
  users: selectUsers(state)
});

// const mapDispatchToProps = dispatch => ({
//   addUser: user => dispatch(addUser(user))
// });

const mapDispatchToProps = {
  addUser,
  updateUser
};

class AddEditUserRender extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.isEditMode) {
      var userIndex = props.users.findIndex(x => x.username === this.props.username);

      if (userIndex !== -1) {
        let user = props.users[userIndex];
        this.state = {
          editMode: true,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          mail: user.mail,
          newsletter: user.newsletter,
          errorMessage: ""
        };
      }

      return;
    }
    this.state = {
      editMode: true,
      username: "",
      firstname: "",
      lastname: "",
      mail: "",
      newsletter: false,
      errorMessage: ""
    };
  }

  render() {
    const manageHistoryRedirection = this.props.history !== undefined;
    return (
      <div>
        <div>
          <TextBox
            name="username"
            placeholder="Utilisateur"
            label="Utilisateur :"
            readOnly={this.props.isEditMode}
            orientation={this.props.isEditMode ? "horizontal" : "vertical"}
            value={this.state.username}
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <TextBox
            name="firstname"
            placeholder="Prénom"
            label="Prénom :"
            orientation={this.props.isEditMode ? "horizontal" : "vertical"}
            value={this.state.firstname}
            onChange={e => {
              this.setState({ firstname: e.target.value });
            }}
          />
          <TextBox
            name="lastname"
            placeholder="Nom"
            label="Nom :"
            orientation={this.props.isEditMode ? "horizontal" : "vertical"}
            value={this.state.lastname}
            onChange={e => {
              this.setState({ lastname: e.target.value });
            }}
          />
          <TextBox
            name="email"
            placeholder="Email"
            label="Email :"
            orientation={this.props.isEditMode ? "horizontal" : "vertical"}
            value={this.state.mail}
            onChange={e => {
              this.setState({ mail: e.target.value });
            }}
          />
          <CheckBox
            label="Souscrit à la newsletter"
            checked={this.state.newsletter}
            onChange={e => {
              this.setState({ newsletter: !this.state.newsletter });
            }}
          />
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
                newsletter: this.state.newsletter
              };

              if (this.props.isEditMode) {
                this.props.updateUser({ user: newUser });
              } else {
                this.props.addUser({ user: newUser });
                this.setState({
                  username: "",
                  firstname: "",
                  lastname: "",
                  mail: "",
                  newsletter: false,
                  errorMessage: ""
                });
              }

              if (manageHistoryRedirection) {
                this.props.history.push(USERS_HOME_ROUTE);
              }
            }}
          >
            {this.props.isEditMode ? "Mettre à jour" : "Ajouter"}
          </button>
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
