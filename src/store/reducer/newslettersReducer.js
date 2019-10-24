import { ADD_NEWSLETTER, UPDATE_NEWSLETTER, DELETE_NEWSLETTER } from "../../action";
import { uniqueId } from "../../utils";
import produce from "immer";

export const initialState = [
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 1"
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 2"
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 3"
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 4"
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 5"
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 6"
  }
];

const initialNewsletter = { id: "", title: "" };

export const newslettersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWSLETTER:
      return produce(state, draftState => {
        draftState.push({ ...initialNewsletter, ...action.payload.newsletter });
      });

    case UPDATE_NEWSLETTER:
      var index = state.findIndex(x => x.id === action.payload.newsletter.id);
      return produce(state, draftState => {
        draftState[index] = { ...draftState[index], ...action.payload.newsletter };
      });

    case DELETE_NEWSLETTER:
      var indexToDelete = state.findIndex(x => x.id === action.payload);
      return produce(state, draftState => {
        draftState.splice(indexToDelete, 1);
      });

    default:
      return state;
  }
};
