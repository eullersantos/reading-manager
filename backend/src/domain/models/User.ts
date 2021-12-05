import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

interface IUser {
  id?: string;
  password: string;
  email: string;
  username: string;
  created_at: Date;
  updated_at: Date;
}

class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor(props: IUser) {
    this.id = props.id;
    this.password = props.password;
    this.email = props.email;
    this.username = props.username;
    this.created_at = props.created_at;
    this.updated_at = props.updated_at;

    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
