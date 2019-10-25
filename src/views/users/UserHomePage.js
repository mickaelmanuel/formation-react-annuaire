import React from "react";
import { selectUsers } from "../../selectors";
import { connect } from "react-redux";
import { deleteUser } from "../../action";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import { USERS_EDIT_ROUTE, USERS_DETAIL_ROUTE } from "../../consts";

const mapStateToProps = state => ({
  users: selectUsers(state)
});

const mapDispatchToProps = {
  deleteUser
};

class UserHomePageRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      userToSearch: {
        username: "",
        firstname: "",
        lastname: "",
        mail: "",
        premiumaccount: "all",
        newsletter: "all"
      }
    };
  }

  filteredList(userToSearch) {
    return this.props.users.filter(
      x =>
        x.username.toLowerCase().indexOf(userToSearch.username.toLowerCase()) !== -1 &&
        x.firstname.toLowerCase().indexOf(userToSearch.firstname.toLowerCase()) !== -1 &&
        x.lastname.toLowerCase().indexOf(userToSearch.lastname.toLowerCase()) !== -1 &&
        x.mail.toLowerCase().indexOf(userToSearch.mail.toLowerCase()) !== -1 &&
        (userToSearch.newsletter !== "all"
          ? userToSearch.newsletter === "yes"
            ? x.newsletters.length > 0
            : x.newsletters.length === 0
          : true) &&
        (userToSearch.premiumaccount !== "all"
          ? userToSearch.premiumaccount === "yes"
            ? x.premiumaccount === true
            : x.premiumaccount === false
          : true)
    );
  }

  render() {
    var deleteUser = this.props.deleteUser;

    return (
      <div>
        <Filter
          value={this.state.userToSearch}
          onChange={userToSearch => {
            this.setState({
              userToSearch: userToSearch
            });
          }}
        />

        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
              <table>
                <thead>
                  <tr className="table100-head">
                    <th className="column1">Utilisateur</th>
                    <th className="column2">Premium</th>
                    <th className="column3">Email</th>
                    <th className="column4">Prenom</th>
                    <th className="column5">Nom</th>
                    <th className="column6">Nb newsletters</th>
                    <th className="column7">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.filteredList(this.state.userToSearch).map(user => {
                    return (
                      <tr key={user.username}>
                        <td> {user.username}</td>
                        <td>{user.premiumaccount ? " ⭐ " : ""}</td>
                        <td>{user.mail}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.newsletters.length > 0 ? `${user.newsletters.length} newsletter(s)` : "Aucun"}</td>
                        <td>
                          <div className="button-container">
                            <button
                              className="button"
                              onClick={() => this.props.history.push(USERS_DETAIL_ROUTE.create(user.username))}
                            >
                              Details
                            </button>
                            <button
                              className="button"
                              onClick={() => this.props.history.push(USERS_EDIT_ROUTE.create(user.username))}
                            >
                              Editer
                            </button>
                            <button className="button" onClick={() => deleteUser(user.username)}>
                              Supprimer
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const UserHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHomePageRender);
