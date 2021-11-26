import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post_comments")
export class PostCommentsEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  comments: string;

  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  post_id: number;

  @Column({ nullable: false })
  parent: number;

}