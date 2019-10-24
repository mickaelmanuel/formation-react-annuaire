import React from "react";
import { AddEditUser } from "../../components/AddEditUser";

const UserAddPage = ({ history }) => {
  return (
    <div>
      <h3>Bienvenue sur la page d'ajout d'un utilisateur :</h3>
      <AddEditUser history={history} />
    </div>
  );
};

export default UserAddPage;
