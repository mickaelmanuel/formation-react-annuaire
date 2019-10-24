export const ADD_USER = "ADD_USER";
export const UPDATE_ACCOUNT_SUBSCRIPTION_OF_USER = "UPDATE_ACCOUNT_SUBSCRIPTION_OF_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_NEWSLETTER = "ADD_NEWSLETTER";
export const UPDATE_NEWSLETTER = "UPDATE_NEWSLETTER";
export const DELETE_NEWSLETTER = "DELETE_NEWSLETTER";
export const REMOVE_NEWSLETTER_OF_USERS = "REMOVE_NEWSLETTER_OF_USERS";

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const updateAccountSubscriptionOfUser = username => {
  return {
    type: UPDATE_ACCOUNT_SUBSCRIPTION_OF_USER,
    payload: username
  };
};

export const deleteUser = username => {
  return {
    type: DELETE_USER,
    payload: username
  };
};

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};

export const addNewsletter = newsletter => {
  return {
    type: ADD_NEWSLETTER,
    payload: newsletter
  };
};

export const updateNewsletter = newsletter => {
  return {
    type: UPDATE_NEWSLETTER,
    payload: newsletter
  };
};

export const deleteNewsletter = id => {
  return {
    type: DELETE_NEWSLETTER,
    payload: id
  };
};

export const removeNewsletterOfUsers = newsletterId => {
  return {
    type: REMOVE_NEWSLETTER_OF_USERS,
    payload: newsletterId
  };
};
