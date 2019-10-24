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
        <div className="panels">
          {this.filteredList(this.state.userToSearch).map(user => {
            return (
              <div className="panel" key={user.username}>
                <Card title={user.username}>
                  <p>{user.mail}</p>
                  <p>
                    {user.newsletters.length > 0
                      ? `Abonné à ${user.newsletters.length} newsletter(s)`
                      : "Aucun abonnement"}
                  </p>
                  <div className="button-container">
                    <button
                      className="button"
                      onClick={() => this.props.history.push(USERS_DETAIL_ROUTE + user.username)}
                    >
                      Details
                    </button>
                    <button
                      className="button"
                      onClick={() => this.props.history.push(USERS_EDIT_ROUTE + user.username)}
                    >
                      Editer
                    </button>
                    <button className="button" onClick={() => deleteUser(user.username)}>
                      Supprimer
                    </button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export const UserHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHomePageRender);
