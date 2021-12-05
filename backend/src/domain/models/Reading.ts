import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export type readStatus =
  | "Lendo"
  | "Dropado"
  | "Para ler"
  | "Esperando novos capítulos"
  | "Finalizado";

export type typeOfReading = "Mangá" | "Manhwa" | "Novel";

@Entity("reading")
class Reading {
  @PrimaryColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  chapter: number;

  @Column()
  image: string;

  @Column()
  link: string;

  @Column()
  status: readStatus;

  @Column()
  type: typeOfReading;

  constructor() {
    if (!this.uuid) {
      this.uuid = uuidV4();
    }
  }
}

export { Reading };
