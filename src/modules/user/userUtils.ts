// import { getRepository } from "typeorm";
// import { CONSTANTS } from "../../config/constants";
// import { UsersDetailEntity } from "../../database/entities/userDetailEntity";
// import { UserEntity } from "../../database/entities/userEntity";
// import { CustomError } from "../../utils/customError";
// export class UserUtils {

//   public async createUser(phoneNumber: string, userInfo: UserEntity) {
//     try {
//       const userData: any = this.defaultUserValue();

//       userData.onboardingStatusId = 1;
//       userData.firebase_uid = userInfo.firebase_uid;
//       userData.domain = userInfo.domain;

//       const savedUser = await getRepository(UserEntity).save(userData);

//       const userDetailData: any = this.defaultUserDetailValue();
//       userDetailData.phone = phoneNumber;
//       userDetailData.user_id = savedUser.id;

//       await getRepository(UsersDetailEntity).save(userDetailData);

//       return savedUser;
//     } catch (error) {
//       throw error;
//     }
//   }

//   public async updateUser(id: number, userData: UserEntity, userDetailData?: UsersDetailEntity) {
//     try {
//       userData.id = id;
//       if (userDetailData) {
//         await this.findUserAndUpdateDetail(id, userDetailData);
//       }
//       // check if emmail already exists
//       const checkIfEmailExists = await this.checkIfEmailExists(userData.email);
//       if (checkIfEmailExists) {
//         throw new CustomError(CONSTANTS.MESSAGES.EMAIL_EXISTS, 422, -1);
//       }
//       return await getRepository(UserEntity).update({ id }, userData);
//     } catch (error) {
//       throw new CustomError((error as Error).message, 422, -1);
//     }
//   }

//   public async findUserFromNumber(phoneNumber: string) {
//     try {
//       return getRepository(UsersDetailEntity).findOne({ phone: phoneNumber });
//     } catch (error) {
//       throw error;
//     }
//   }

//   public async findUserFromId(id: number) {
//     try {
//       return getRepository(UserEntity).findOne({ id });
//     } catch (error) {
//       throw error;
//     }
//   }

//   public async checkIfEmailExists(email: string) {
//     try {
//       return await getRepository(UserEntity).findOne({ email });
//     } catch (error) {
//       return false;
//     }
//   }

//   public async findUserAndUpdateDetail(user_id: number, data: UsersDetailEntity) {
//     try {
//       data.user_id = user_id;
//       // check if data already exists
//       const userData = await getRepository(UsersDetailEntity).findOne({ user_id });
//       if (userData) {
//         return await getRepository(UsersDetailEntity).update({ id: userData.id }, data);
//       }
//       // If no data exists, create new row
//       return await getRepository(UsersDetailEntity).insert(data);
//     } catch (error) {
//       throw error;
//     }
//   }

//   public defaultUserValue() {
//     return {
//       email: Date.now() + "_NULL@Test.com",
//       is_admin: 0,
//       admin_status: 0,
//       soft_delete: 0,
//       tenent_id: 1,
//       user_type: 0,
//       xlm_in_total: 0,
//       all_decimal: 0,
//       payment_status: 0,
//       eurd_funded: 0
//     };
//   }

//   public defaultUserDetailValue() {
//     return {
//       state: 0,
//       dispute_status: 0,
//       unlock_status: 1,
//       phone: "",
//       user_id: null
//     };
//   }

// }