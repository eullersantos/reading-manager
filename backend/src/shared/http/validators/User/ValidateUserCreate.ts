import regexHelper from '@shared/http/validators/User/helper';

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

  public showErrorMessage(): string | undefined {
    /*
      TODO: Válidar caso usuario mande um campo que não deveria.
      EX: { aaa: 'aaa' }
    */

    if (!regexHelper.forEmailValidation.test(this.email))
      this.messageError = 'Invalid or not informed email!';

    if (!this.password) this.messageError = 'Invalid or not informed username!';

    if (!regexHelper.forPasswordValidation.test(this.password))
      this.messageError = 'Invalid or not informed password!';

    return this.messageError;
  }
}
