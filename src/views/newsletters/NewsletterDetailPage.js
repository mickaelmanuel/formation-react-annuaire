import React from "react";
import { connect } from "react-redux";
import { selectNewsletters } from "../../selectors";
import { NEWSLETTERS_EDIT_ROUTE } from "../../consts";

const mapStateToProps = state => ({
  newsletters: selectNewsletters(state)
});

const mapDispatchToProps = null;

const NewsletterDetailPageRender = ({ id, newsletters, history }) => {
  const newsletterIndex = newsletters.findIndex(x => x.id === id);
  const newsletter = newsletters[newsletterIndex];
  return (
    <div>
      <h3>Bienvenue sur la page detail d'une newsletter : {newsletter.id}</h3>
      <div>Titre : {newsletter.title}</div>

      <button
        onClick={() => {
          history.push("../.." + NEWSLETTERS_EDIT_ROUTE.create(id));
        }}
      >
        Editer
      </button>
    </div>
  );
};

export const NewsletterDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsletterDetailPageRender);
