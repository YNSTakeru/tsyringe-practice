import { inject, injectable } from "tsyringe";
import User from "./user";
import { IUserService } from "./userService";

@injectable()
export default class UserController {
  constructor(@inject("IUserService") private userService: IUserService) {}
  create(user: User): User {
    return this.userService.create(user);
  }

  findById(id: string): User {
    return this.userService.findById(id);
  }
}
