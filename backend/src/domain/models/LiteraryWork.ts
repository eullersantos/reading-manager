import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export type typeOfLiteraryWork = "Mangá" | "Manhwa" | "Novel";

@Entity("literary_work")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  type: typeOfLiteraryWork;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  home_page_url: string;

  @Column()
  cover_url: string;

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

export { User };
