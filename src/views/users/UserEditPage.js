import React from "react";
import { AddEditUser } from "../../components/AddEditUser";

const UserEditPage = ({ username, history }) => {
  return (
    <div>
      <h3>Bienvenue sur la page d'edition d'un utilisateur :</h3>
      <AddEditUser isEditMode={true} history={history} username={username} />
    </div>
  );
};

export default UserEditPage;
