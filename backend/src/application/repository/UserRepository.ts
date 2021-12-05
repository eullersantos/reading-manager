import { User } from "../../domain/models/User";

export class UserRepository {
  public async findByUsernameOrEmail(usernameOrEmail: string): Promise<User | undefined> {
    console.log(usernameOrEmail);
    return undefined;
  }
}
