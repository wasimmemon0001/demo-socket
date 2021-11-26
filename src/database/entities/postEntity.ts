import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class PostEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  post: string;

  @Column({ nullable: true })
  user_id: string;
}