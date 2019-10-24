import {
  ADD_USER,
  UPDATE_NEWSLETTER_SUBSCRIPTION_OF_USER,
  DELETE_USER,
  UPDATE_USER,
  SEARCH_USER,
  REMOVE_NEWSLETTER_OF_USERS
} from "../../action";
import produce from "immer";
import { initialState as newsletters } from "./newslettersReducer";
const randomNewsletterId = () => newsletters[Math.floor(newsletters.length * Math.random())].id;

export const initialState = [
  {
    username: "mika",
    firstname: "Mickael",
    lastname: "Manuel",
    mail: "mickael.manuel@adevinta.com",
    newsletter: false,
    newsletters: [randomNewsletterId()]
  },
  {
    username: "dodo42",
    firstname: "Doriane",
    lastname: "Bonfils",
    mail: "doriane.bonfils@adevinta.com",
    newsletter: true,
    newsletters: [randomNewsletterId()]
  },
  {
    username: "pierre.b",
    firstname: "Pierre",
    lastname: "Bouille",
    mail: "pierre.bouille@adevinta.com",
    newsletter: false,
    newsletters: [randomNewsletterId()]
  },
  {
    username: "sophie32",
    firstname: "Sophie",
    lastname: "Martins",
    mail: "Sophie.Martins@adevinta.com",
    newsletter: false,
    newsletters: [randomNewsletterId()]
  },
  {
    username: "gwacamole",
    firstname: "Laeticia",
    lastname: "Frieux",
    mail: "Laeticia.Frieux@adevinta.com",
    newsletter: true,
    newsletters: [randomNewsletterId()]
  },
  {
    username: "Karine45",
    firstname: "Karine",
    lastname: "Jaulin",
    mail: "k.jaulin@gmail.com",
    newsletter: false,
    newsletters: [randomNewsletterId()]
  }
];

const initialUser = {
  username: "",
  firstname: "",
  lastname: "",
  mail: "",
  newsletter: false,
  newsletters: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return produce(state, draftState => {
        draftState.push({ ...initialUser, ...action.payload.user });
      });

    case UPDATE_NEWSLETTER_SUBSCRIPTION_OF_USER:
      var index = state.findIndex(x => x.username === action.payload);
      return produce(state, draftState => {
        draftState[index].newsletter = !state[index].newsletter;
      });

    case DELETE_USER:
      var index = state.findIndex(x => x.username === action.payload);
      return produce(state, draftState => {
        draftState.splice(index, 1);
      });

    case UPDATE_USER:
      var index = state.findIndex(x => x.username === action.payload.user.username);
      return produce(state, draftState => {
        draftState[index] = { ...draftState[index], ...action.payload.user };
      });

    case REMOVE_NEWSLETTER_OF_USERS:
      return produce(state, draftState => {
        state.forEach((user, index) => {
          var indexNewsletter = user.newsletters.indexOf(action.payload);
          if (indexNewsletter !== -1) {
            draftState[index].newsletters.splice(indexNewsletter, 1);
          }
        });
      });

    default:
      return state;
  }
};
