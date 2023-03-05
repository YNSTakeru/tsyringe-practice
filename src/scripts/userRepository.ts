import User from "./user";

export interface IUserRepository {
  create(user: User): User;
  findById(id: string): User;
}

export default class UserRdbRepository implements IUserRepository {
  create(user: User): User {
    console.log("RDBにUserを登録");
    return user;
  }
  findById(id: string): User {
    console.log(`ID: ${id}のユーザーを検索`);
    return new User();
  }
}
