import React from "react";
import { AddEditNewsletter } from "../../components/AddEditNewsletter";

const NewsletterAddPage = ({ history }) => {
  return (
    <div>
      <h3>Bienvenue sur la page d'ajout d'une newsletter :</h3>
      <AddEditNewsletter history={history} />
    </div>
  );
};

export default NewsletterAddPage;
