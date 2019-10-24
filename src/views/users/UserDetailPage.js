import React from "react";
import { connect } from "react-redux";
import { selectUsers, selectNewsletters } from "../../selectors";
import { USERS_EDIT_ROUTE } from "../../consts";

const mapStateToProps = state => ({
  users: selectUsers(state)
  //  newsletters: selectNewslettersOfUser(state)
});

const mapDispatchToProps = null;

const UserDetailPageRender = ({ username, users, history }) => {
  const userIndex = users.findIndex(x => x.username === username);
  const user = users[userIndex];
  return (
    <div>
      <h3>Bienvenue sur la page detail de l'utilisateur : {user.username}</h3>
      <div>Username : {user.username}</div>
      <div>Prénom : {user.firstname}</div>
      <div>Nom : {user.lastname}</div>
      <div>Email : {user.mail}</div>
      <div>Abonnement : {user.premiumaccount ? "Premium" : "Aucun"}</div>
      <div>
        Newsletters :
        <ul>
          {user.newsletters.map(newsletter => {
            return <li>{newsletter}</li>;
          })}
        </ul>
      </div>
      <button
        onClick={() => {
          history.push(USERS_EDIT_ROUTE.create(username));
        }}
      >
        Editer
      </button>
    </div>
  );
};

export const UserDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailPageRender);
