import { inject, injectable } from "tsyringe";
import User from "./user";
import { IUserRepository } from "./userRepository";

export interface IUserService {
  create(user: User): User;
  findById(id: string): User;
}

@injectable()
export default class UserService implements IUserService {
  constructor(
    @inject("IUserRepository") private userRdbRepository: IUserRepository
  ) {}
  create(user: User): User {
    return this.userRdbRepository.create(user);
  }
  findById(id: string): User {
    return this.userRdbRepository.findById(id);
  }
}
