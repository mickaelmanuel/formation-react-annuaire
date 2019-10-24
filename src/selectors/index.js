export function selectUsers(state) {
  return state.users;
}

export function selectUsersByFilter(state, user) {
  return state.users;
}

export function selectNewsletters(state) {
  return state.newsletters;
}

export function selectNewslettersWithUsersCount(state) {
  return state.newsletters.map(newsletter => {
    let cpt = 0;
    state.users.forEach(user => {
      if (user.newsletters.includes(newsletter.id)) {
        cpt = cpt + 1;
      }
    });

    return {
      ...newsletter,
      nbusers: cpt
    };
  });
}
