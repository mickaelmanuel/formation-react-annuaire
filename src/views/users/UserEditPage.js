import React from "react";
import { AddEditUser } from "../../components/AddEditUser";
import { selectNewsletters, selectUser } from "../../selectors";
import Card from "../../components/Card";
import { connect } from "react-redux";
import ToggleButton from "../../components/ToogleButton";
import { updateUserNewsletters } from "../../action";

const mapStateToProps = (state, ownprops) => ({
  user: selectUser(state, ownprops.username),
  newsletters: selectNewsletters(state)
});

const mapDispatchToProps = {
  updateUserNewsletters
};

// const UserEditPageRender = ({ username, history, newsletters, user }) => {
//   this.state = {
//     subscribedNewsletters: user.newsletters
//   };

class UserEditPageRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribedNewsletters: props.user.newsletters
    };
  }

  render() {
    const username = this.props.username;
    const history = this.props.history;
    const newsletters = this.props.newsletters;

    return (
      <div className="containerhorizontal">
        <Card title={"Utilisateur " + username}>
          <AddEditUser isEditMode={true} history={history} username={username} />
        </Card>

        <div>
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table100">
                <table>
                  <thead>
                    <tr className="table100-head">
                      <th className="column1">Titre</th>
                      <th className="column7">Abonné</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsletters.map(newsletter => {
                      return (
                        <tr key={newsletter.id}>
                          <td>{newsletter.title}</td>
                          <td>
                            <div className="button-container">
                              <ToggleButton
                                isToggleOn={this.state.subscribedNewsletters.includes(newsletter.id)}
                                onToggleChange={() => {
                                  if (this.state.subscribedNewsletters.includes(newsletter.id)) {
                                    this.setState({
                                      subscribedNewsletters: this.state.subscribedNewsletters.filter(
                                        x => x !== newsletter.id
                                      )
                                    });
                                  } else {
                                    let copy = [...this.state.subscribedNewsletters];
                                    copy.push(newsletter.id);
                                    this.setState({
                                      subscribedNewsletters: copy
                                    });
                                  }
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <button
                  onClick={() => {
                    this.props.updateUserNewsletters(username, this.state.subscribedNewsletters);
                    // if (this.props.history !== undefined) {
                    //   // this.props.history.push(USERS_HOME_ROUTE);
                    // }
                  }}
                >
                  Mettre à jour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const UserEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEditPageRender);

export default UserEditPage;
