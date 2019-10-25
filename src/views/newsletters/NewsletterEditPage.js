import React from "react";
import { AddEditNewsletter } from "../../components/AddEditNewsletter";
import Card from "../../components/Card";

const NewsletterEditPage = ({ id, history }) => {
  return (
    <div className="container">
      <Card title="Newsletter">
        <AddEditNewsletter isEditMode={true} history={history} id={id} />
      </Card>
    </div>
  );
};

export default NewsletterEditPage;
