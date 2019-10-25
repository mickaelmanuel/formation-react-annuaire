import React from "react";
import { selectNewslettersWithUsersCount } from "../../selectors";
import { connect } from "react-redux";
import { deleteNewsletter, removeNewsletterOfUsers } from "../../action";
import Card from "../../components/Card";
import { NEWSLETTERS_EDIT_ROUTE, NEWSLETTERS_DETAIL_ROUTE } from "../../consts";

const mapStateToProps = state => ({
  newsletters: selectNewslettersWithUsersCount(state)
});

const mapDispatchToProps = {
  deleteNewsletter,
  removeNewsletterOfUsers
};

class NewsletterHomePageRender extends React.Component {
  render() {
    var deleteNewsletter = this.props.deleteNewsletter;
    var removeNewsletterOfUsers = this.props.removeNewsletterOfUsers;

    return (
      <div>
        <h3>Newsletters</h3>
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
              <table>
                <thead>
                  <tr className="table100-head">
                    <th className="column1">Titre</th>
                    <th className="column2">Description</th>
                    <th className="column3">Nb abonnés</th>
                    <th className="column7">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.newsletters.map(newsletter => {
                    return (
                      <tr key={newsletter.id}>
                        <td>{newsletter.title}</td>
                        <td></td>
                        <td>{newsletter.nbusers}</td>
                        <td>
                          <div className="button-container">
                            <button
                              className="button"
                              onClick={() => this.props.history.push(NEWSLETTERS_DETAIL_ROUTE.create(newsletter.id))}
                            >
                              Details
                            </button>
                            <button
                              className="button"
                              onClick={() => this.props.history.push(NEWSLETTERS_EDIT_ROUTE.create(newsletter.id))}
                            >
                              Editer
                            </button>
                            <button
                              className="button"
                              onClick={() => {
                                removeNewsletterOfUsers(newsletter.id);
                                deleteNewsletter(newsletter.id);
                              }}
                            >
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

export const NewsletterHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsletterHomePageRender);
