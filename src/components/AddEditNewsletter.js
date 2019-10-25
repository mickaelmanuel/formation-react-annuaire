import React from "react";
import TextBox from "./TextBox";
import { addNewsletter, updateNewsletter } from "../action";
import { connect } from "react-redux";
import { selectNewsletters } from "../selectors";
import { NEWSLETTERS_HOME_ROUTE } from "../consts";

const mapStateToProps = state => ({
  newsletters: selectNewsletters(state)
});

const mapDispatchToProps = {
  addNewsletter,
  updateNewsletter
};

class AddEditNewsletterRender extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.isEditMode) {
      var newsletterIndex = props.newsletters.findIndex(x => x.id === this.props.id);

      if (newsletterIndex !== -1) {
        let newsletter = props.newsletters[newsletterIndex];
        this.state = {
          editMode: true,
          id: newsletter.id,
          title: newsletter.title,
          content: newsletter.content,
          errorMessage: ""
        };
      }

      return;
    }

    this.state = {
      editMode: true,
      id: "",
      title: "",
      content: "",
      errorMessage: ""
    };
  }

  render() {
    const manageHistoryRedirection = this.props.history !== undefined;
    return (
      <div>
        <div>
          <TextBox
            name="title"
            placeholder="Titre"
            label="Titre :"
            value={this.state.title}
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
          <div>
            <textarea
              value={this.state.content}
              onChange={e => {
                this.setState({ contenu: e.target.value });
              }}
            />
          </div>

          <button
            className="button"
            onClick={() => {
              var haserror = false;
              var errorMessage = "";

              if (this.state.title.length === 0) {
                haserror = true;
                errorMessage += "Veuillez renseigner un titre\r\n";
              }

              if (haserror) {
                this.setState({
                  errorMessage: errorMessage
                });
                return;
              }

              var newNewsletter = {
                id: this.state.id,
                title: this.state.title,
                conten: this.state.content
              };

              if (this.props.isEditMode) {
                this.props.updateNewsletter({ newsletter: newNewsletter });
              } else {
                this.props.addNewsletter({ newsletter: newNewsletter });
                this.setState({
                  title: "",
                  content: "",
                  errorMessage: ""
                });
              }

              if (manageHistoryRedirection) {
                this.props.history.push(NEWSLETTERS_HOME_ROUTE);
              }
            }}
          >
            {this.props.isEditMode ? "Mettre à jour" : "Ajouter"}
          </button>
        </div>
        <div>
          <span style={{ color: "red" }}>{this.state.errorMessage}</span>
        </div>
      </div>
    );
  }
}

export const AddEditNewsletter = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditNewsletterRender);
