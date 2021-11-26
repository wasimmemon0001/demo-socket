// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Router, Response, Request, NextFunction } from "express";
// import { UserEntity } from "../../database/entities/userEntity";
// import { UserUtils } from "./userUtils"; // import service
// import { CONSTANTS } from "../../config/constants";
// import { UsersDetailEntity } from "../../database/entities/userDetailEntity";
// import { getRepository } from "typeorm";

// export class UserController {
//   public router: Router;
//   private userUtils: UserUtils;

//   constructor() {
//     this.userUtils = new UserUtils(); // Create a new instance of UserController
//   }

//   public create = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const user = req["body"];
//       const userData: UserEntity = await this.userUtils.createUser(user.phoneNumber, user);
//       return res.status(200)
//         .json({ code: 1, responseMessage: CONSTANTS.MESSAGES.USER_REGISTER_SUCCESS, data: { id: userData.id } });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public update = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const user = req["body"];
//       const userdetail = req.body.userdetail as UsersDetailEntity;
//       delete user.userdetail;
//       await this.userUtils.updateUser(Number(req.params.id), user, userdetail);

//       return res.status(200)
//         .json({ code: 1, responseMessage: CONSTANTS.MESSAGES.USER_UPDATE_SUCCESS });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public getUser = async (req: Request, res: any, next: NextFunction) => {
//     try {
//       const userData = await getRepository(UserEntity).createQueryBuilder("users")
//         .where({ id: res.user.user_id })
//         .leftJoinAndMapOne("users.user_details", UsersDetailEntity, "users_detail", "users.id = users_detail.user_id")
//         .getOne();
//       return res.status(200)
//         .json({ code: 1, responseMessage: CONSTANTS.MESSAGES.USER_GET_SUCCESS, data: userData });
//     } catch (error) {
//       next(error);
//     }
//   };

// }