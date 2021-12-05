import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { LiteraryWork } from "./LiteraryWork";
import { User } from "./User";

export type readStatus =
  | "Lendo"
  | "Dropado"
  | "Para ler"
  | "Esperando novos capítulos"
  | "Finalizado";

@Entity("reading")
class Reading {
  @PrimaryColumn()
  id?: string;

  @JoinColumn({ referencedColumnName: "id" })
  literaryWork: LiteraryWork;

  @Column()
  current_chapter: number;

  @Column()
  url_to_current_chapter: string;

  @JoinColumn({ referencedColumnName: "id" })
  user: User;

  @Column()
  status: readStatus;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Reading };
