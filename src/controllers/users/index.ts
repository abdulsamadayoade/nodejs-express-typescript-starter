import { Request, Response } from "express";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export const getUsers = (req: Request, res: Response) => {
  res.send(users);
};

export const getUserById = (req: Request, res: Response) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.send(user);
};
