// import { CONSTANTS } from "../../config/constants";
// import { UserUtils } from "./userUtils";
// import _ from "lodash";
// import { NextFunction, Request } from "express";
// import { getRepository } from "typeorm";
// import { UserEntity } from "../../database/entities/userEntity";
// import { UsersDetailEntity } from "../../database/entities/userDetailEntity";

// export class UserMiddleware {
//     private userUtils: UserUtils = new UserUtils();

//     public isUserExistsByPhoneNumber(isValid?: boolean) {
//         return async (req: Request, res: any, next: NextFunction) => {
//             let phoneNumber: string = req.query.phoneNumber ? req.query.phoneNumber : req.body.phoneNumber;
//             phoneNumber = phoneNumber.charAt(0) != "+" ? `+${phoneNumber.trim()}` : phoneNumber;
//             const existsUser = await getRepository(UsersDetailEntity).createQueryBuilder("users_detail")
//                 .where({ phone: `${phoneNumber.trim()}` })
//                 .getOne();
//             if (existsUser) {
//                 if (isValid) {
//                     res.user = existsUser;
//                     return next();
//                 }
//                 return res.status(403).send({
//                     code: -1,
//                     message: CONSTANTS.MESSAGES.USER_EXISTS
//                 });
//             }
//             if (isValid) {
//                 return res.status(403).send({
//                     code: -1,
//                     message: CONSTANTS.MESSAGES.USER_GET_FAIL
//                 });
//             }
//             next();
//         };
//     }

//     public isUserExistsById(isValid?: boolean) {
//         return async (req: Request, res: any, next: NextFunction) => {
//             const existsUser = await this.userUtils.findUserFromId(Number(req.params.id));
//             if (existsUser) {
//                 if (isValid) {
//                     res.user = existsUser;
//                     return next();
//                 }
//                 return res.status(403).send({
//                     code: -1,
//                     message: CONSTANTS.MESSAGES.USER_EXISTS
//                 });
//             }
//             if (isValid) {
//                 return res.status(403).send({
//                     code: -1,
//                     message: CONSTANTS.MESSAGES.USER_GET_FAIL
//                 });
//             }
//             next();
//         };
//     }
// }