import { PostRouter } from "./modules/post/postRoute";

export class Routes {
  protected basePath: string;
  private postRouter: PostRouter = new PostRouter();

  public path(socket: any) {

    socket.on("createPost", (data: any) => {
      this.postRouter.handleEvent("createPost", data);
    });
    socket.on("commentsOnPost", (data: any) => {
      this.postRouter.handleEvent("commentsOnPost", data);
    });
    socket.on("likeOnComments", (data: any) => {
      this.postRouter.handleEvent("likeOnComments", data);
    });
    socket.on("removelikeOnComments", (data: any) => {
      this.postRouter.handleEvent("removelikeOnComments", data);
    });
  }
}
