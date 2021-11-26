/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { PostController } from "./postController"; // import service

export class PostRouter {
  public router: Router;
  private postController: PostController;

  constructor() {
    this.postController = new PostController(); // Create a new instance of UserController
  }

  handleEvent (eventName: string, data : any) {
    switch(eventName) {
        case "createPost" : {
            this.postController.createPost(data);
            break;
        }
        case "commentsOnPost" : {
            this.postController.commentsOnPost(data);
            break;
        }
        case "likeOnComments" : {
            this.postController.likeOnComments(data);
            break;
        }
        case "removelikeOnComments" : {
            this.postController.removelikeOnComments(data);
            break;
        } 
    }
  }

}