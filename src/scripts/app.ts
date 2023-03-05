import "reflect-metadata";
import { container } from "tsyringe";
import "../styles/main.scss";
import "../styles/vendors/css-reset.css";
import UserController from "./userController";
import UserRdbRepository from "./userRepository";
import UserService from "./userService";

container.register("IUserRepository", { useClass: UserRdbRepository });
container.register("IUserService", { useClass: UserService });

export const userService = container.resolve(UserService);
export const userController = container.resolve(UserController);

function run() {
  userController.findById("123");
}

run();
