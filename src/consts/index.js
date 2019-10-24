export const USERS_HOME_ROUTE = "/users/";
export const USERS_ADD_ROUTE = "/users/add/";
export const USERS_EDIT_ROUTE = { pattern: "/users/edit/:username", create: username => `/users/edit/${username}` };
export const USERS_DETAIL_ROUTE = {
  pattern: "/users/detail/:username",
  create: username => `/users/detail/${username}`
};

export const NEWSLETTERS_HOME_ROUTE = "/newsletters/";
export const NEWSLETTERS_ADD_ROUTE = "/newsletters/add/";
export const NEWSLETTERS_EDIT_ROUTE = {
  pattern: "/newsletters/edit/:id",
  create: newsletterId => `/newsletters/edit/${newsletterId}`
};
export const NEWSLETTERS_DETAIL_ROUTE = {
  pattern: "/newsletters/detail/:id",
  create: newsletterId => `/newsletters/detail/${newsletterId}`
};
