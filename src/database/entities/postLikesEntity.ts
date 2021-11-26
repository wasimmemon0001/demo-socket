import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post_likes")
export class PostLikesEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  post_id: number;

  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  like: number;
}