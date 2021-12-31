interface IValidateUserCreate {
  email: string;
  username: string;
  password: string;
  messageError: string | undefined;
}

export class ValidateUserCreate {
  private email: string;
  private username: string;
  private password: string;
  private messageError: string | undefined;

  constructor(props: IValidateUserCreate) {
    this.email = props.email;
    this.username = props.username;
    this.password = props.password;
    this.messageError = props.messageError;
  }

  showErrorMessage(): string | undefined {
    if (!this.emailValidation(this.email))
      this.messageError = 'Invalid or not informed email!';

    return this.messageError;
  }

  emailValidation(email: string): boolean {
    // eslint-disable-next-line no-useless-escape
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  }
}
