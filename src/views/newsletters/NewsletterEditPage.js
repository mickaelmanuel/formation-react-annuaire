import React from "react";
import { AddEditNewsletter } from "../../components/AddEditNewsletter";

const NewsletterEditPage = ({ id, history }) => {
  return (
    <div>
      <h3>Bienvenue sur la page d'edition d'une newsletter :</h3>
      <AddEditNewsletter isEditMode={true} history={history} id={id} />
    </div>
  );
};

export default NewsletterEditPage;
