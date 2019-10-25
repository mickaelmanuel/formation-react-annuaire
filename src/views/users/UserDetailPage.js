import React from "react";
import { connect } from "react-redux";
import { selectUser } from "../../selectors";
import { USERS_EDIT_ROUTE } from "../../consts";
import Card from "../../components/Card";

const mapStateToProps = (state, ownprops) => ({
  user: selectUser(state, ownprops.username)
  //  newsletters: selectNewslettersOfUser(state)
});

const mapDispatchToProps = null;

const UserDetailPageRender = ({ username, user, history }) => {
  return (
    <div className="container">
      <Card title={user.username}>
        <h3>Bienvenue sur la page detail de l'utilisateur : </h3>
        <p>Username : {user.username}</p>
        <p>Prénom : {user.firstname}</p>
        <p>Nom : {user.lastname}</p>
        <p>Email : {user.mail}</p>
        <p>Abonnement : {user.premiumaccount ? "Premium" : "Aucun"}</p>
        <div>
          Newsletters :
          <table>
            <tbody>
              {user.newslettersList.map(newsletter => {
                return (
                  <tr key={newsletter.id}>
                    <td className="column1">{newsletter.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => {
            history.push(USERS_EDIT_ROUTE.create(username));
          }}
        >
          Editer
        </button>
      </Card>
    </div>
  );
};

export const UserDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailPageRender);
