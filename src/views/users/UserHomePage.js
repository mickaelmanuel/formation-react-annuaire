import React from "react";
import { selectUsers } from "../../selectors";
import { connect } from "react-redux";
import { updateNewsletterSubscriptionOfUser, deleteUser } from "../../action";
import Filter from "../../components/Filter";
import produce from "immer";
import Card from "../../components/Card";
import CheckBox from "../../components/CheckBox";
import { USERS_EDIT_ROUTE, USERS_DETAIL_ROUTE } from "../../consts";

const mapStateToProps = state => ({
  users: selectUsers(state)
});

const mapDispatchToProps = {
  updateNewsletterSubscriptionOfUser,
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
            ? x.newsletter === true
            : x.newsletter === false
          : x.newsletter == x.newsletter)
    );
  }

  render() {
    var updateNewsletterSubscriptionOfUser = this.props.updateNewsletterSubscriptionOfUser;
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
                  <div>
                    <CheckBox
                      name="newsletter"
                      checked={user.newsletter}
                      onChange={() => {
                        updateNewsletterSubscriptionOfUser(user.username);
                        var index = this.state.users.findIndex(x => x.username === user.username);
                        var newstate = produce(this.state, draftState => {
                          draftState.users[index].newsletter = !this.state.users[index].newsletter;
                        });
                        this.setState({
                          users: newstate.users
                        });
                      }}
                      label={user.newsletter ? "Abonné" : "Non abonné"}
                    />
                  </div>
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
