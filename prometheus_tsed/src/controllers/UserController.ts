import { Controller, Post, BodyParams } from "@tsed/common";
import { User } from "../models/User";

@Controller("/users")
export class UserController {
  @Post()
  public async create(@BodyParams(User) users: User[]): Promise<User[]> {
    console.log("users", users);
    return users;
  }
}
