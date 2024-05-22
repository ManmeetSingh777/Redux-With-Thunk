export const showUser = users => ({ type: "success", payload: users });

export const showError = error => ({ type: "error", payload: error });
