export type TBook = {
  id: number;
  categoryId: number;
  title: string;
  author: string;
};

export type TCategory = {
  id: number;
  title: string;
};

export type TUser = {
  id: number;
  username: string;
  password: string;
};
