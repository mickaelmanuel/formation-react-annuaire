export function selectUsers(state) {
  return state.users;
}

export function selectUser(state, username) {
  let user = state.users.find(x => x.username === username);

  let newsletters = [];
  if (user !== undefined && user.newsletters !== undefined) {
    user.newsletters.forEach(newsletter => {
      newsletters.push(state.newsletters.find(x => x.id === newsletter));
    });
  }

  return { ...user, newslettersList: newsletters };
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
