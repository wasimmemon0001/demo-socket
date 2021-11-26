import { getRepository } from "typeorm";
import { PostEntity } from "../../database/entities/postEntity";
import { PostCommentsEntity } from "../../database/entities/postCommentsEntity";
import { PostLikesEntity } from "../../database/entities/postLikesEntity";

export class PostUtils {

  public createPost(data: any) {
    try {
      return getRepository(PostEntity).save(data);
    } catch (error) {
      throw error;
    }
  }

  public commentsOnPost(data: any) {
    try {
        return  getRepository(PostCommentsEntity).save(data);
      } catch (error) {
        throw error;
      }
  }

  public likeOnComments(data: any) {
    try {
        return  getRepository(PostLikesEntity).save(data);
      } catch (error) {
        throw error;
      }
  }

  public removelikeOnComments(data: any) {
    try {
         const deleteQueryBuilder =  getRepository(PostLikesEntity).createQueryBuilder("post").delete();
         return deleteQueryBuilder.where("post_id = :post_id", {post_id: data.post_id})
                            .andWhere("user_id = :user_id", {user_id: data.user_id}).execute();
      } catch (error) {
        throw error;
      }
  }

}