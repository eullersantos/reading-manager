import { UserRepository } from "../repository/UserRepository";

export class AuthService {
  constructor(private userRepository: UserRepository) {}
  public authenticate(usernameOrEmail: string, password: string) {
    const user = await this.userRepository.findByUsernameOrEmail(usernameOrEmail);
  }
}