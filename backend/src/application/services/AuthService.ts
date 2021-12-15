import { UserRepository } from "../infra/repositories/UserRepository";

export class AuthService {
  constructor(private userRepository: UserRepository) {}
  public authenticate(usernameOrEmail: string, password: string) {
    const user = await this.userRepository.findByUsernameOrEmail(usernameOrEmail);
  }
}
