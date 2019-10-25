import React from "react";
import { AddEditUser } from "../../components/AddEditUser";
import Card from "../../components/Card";

const UserAddPage = ({ history }) => {
  return (
    <div className="container">
      <Card title="Nouvel utilisateur ">
        <AddEditUser history={history} />
      </Card>
    </div>
  );
};

export default UserAddPage;
