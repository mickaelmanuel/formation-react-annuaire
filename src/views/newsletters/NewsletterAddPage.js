import React from "react";
import { AddEditNewsletter } from "../../components/AddEditNewsletter";
import Card from "../../components/Card";

const NewsletterAddPage = ({ history }) => {
  return (
    <div className="container">
      <Card title="Nouvelle newsletter ">
        <AddEditNewsletter history={history} />
      </Card>
    </div>
  );
};

export default NewsletterAddPage;
