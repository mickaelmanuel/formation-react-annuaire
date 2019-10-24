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
        <div className="panels">
          {this.props.newsletters.map(newsletter => {
            return (
              <div className="panel" key={newsletter.id}>
                <Card title={newsletter.title}>
                  <p>Nb d'utilisateurs abonnés : {newsletter.nbusers}</p>
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
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export const NewsletterHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsletterHomePageRender);
