import { PostUtils } from "./postUtils";

export class PostController {

    private postUtils: PostUtils = new PostUtils();

  public async createPost(data: any) {
    try {
        await this.postUtils.createPost(data);
    } catch (error) {
      throw error;
    }
  }

  public async commentsOnPost(data: any) {
    try {
        await this.postUtils.commentsOnPost(data);
    } catch (error) {
      throw error;
    }
  }

  public async likeOnComments(data: any) {
    try {
        await this.postUtils.likeOnComments(data);
    } catch (error) {
      throw error;
    }
  }

  public async removelikeOnComments(data: any) {
    try {
        await this.postUtils.removelikeOnComments(data);
    } catch (error) {
      throw error;
    }
  }

}