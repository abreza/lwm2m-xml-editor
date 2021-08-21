export type userType = {
  username: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  id: string;
};

export type loginActionType = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export type updateProfileActionType = {
  username: string;
  firstName: string;
  lastName: string;
  nationalId: string;
};
