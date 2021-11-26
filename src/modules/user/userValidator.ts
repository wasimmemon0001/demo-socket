// import { Column } from "typeorm";
// import { IsDefined, IsEmail, IsOptional, IsString, IsNumberString, MaxLength, MinLength, Length, IsEnum } from "class-validator";
// import _ from "lodash";
// import { Validator } from "../../validate";
// import { CONSTANTS } from "../../config/constants";
// import { NextFunction } from "express";

// const validator: Validator = new Validator();

// class onboardingStepOne {
//     @IsDefined()
//     @IsString()
//     @MinLength(10)
//     @MaxLength(15)
//     @Column()
//     phoneNumber: string;

//     @IsString()
//     @Column()
//     firebaseUid: string;

//     @IsString()
//     @Column()
//     domain: string;
// }

// class onboardingStepTwo {
//     @IsDefined()
//     @IsString()
//     @Column()
//     stellarAddress: string;
// }

// class onboardingStepThree {
//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @MaxLength(15)
//     @Column()
//     firstName: string;

//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @MaxLength(15)
//     lastName: string;

//     @IsOptional()
//     @IsString()
//     @Column()
//     additionalName: string;

//     @IsDefined()
//     @IsEmail()
//     @Column()
//     email: string;

//     @IsDefined()
//     @Column()
//     dateOfBirth: string;
// }

// class onboardingStepFour {
//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @MaxLength(20)
//     @Column()
//     residentialAddress: string;

//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @MaxLength(15)
//     @Column()
//     city: string;

//     @IsString()
//     @IsOptional()
//     @Column()
//     state: string;

//     @IsOptional()
//     @Column()
//     postcode: string;

//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @MaxLength(15)
//     @Column()
//     country: string;
// }

// class onboardingStepFive {
//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @MaxLength(20)
//     @Column()
//     documentNumber: string;

//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @MaxLength(20)
//     @IsEnum(CONSTANTS.ENTITIES.USER_DETAIL.DOCUMENT_TYPE_ENUM)
//     @Column()
//     documentType: string;

//     @IsDefined()
//     @Column()
//     dateOfIssue: string;

//     @IsOptional()
//     @Column()
//     dateOfExpire: string;

//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     idFrontLink: string;

//     @IsDefined()
//     @IsString()
//     @IsOptional()
//     idBackLink: string;

//     @IsDefined()
//     @IsString()
//     @MinLength(3)
//     @Column()
//     idSelfieLink: string;
// }



// export class UserValidator {
//     public userUpdateValidation = async (req: any, res: any, next: NextFunction) => {
//         try {
//             const onboardingStatusId: number = res.user.onboardingStatusId || 0;
//             // Validation logic if "onboardingStep" is present in Query params
//             if (_.has(req.query, "onboardingStep")) {
//                 if (req.query.onboardingStep === "stellarAddress") {
//                     // check for valid "onboardingStatusId"
//                     if (onboardingStatusId !== 1) {
//                         throw { message: CONSTANTS.MESSAGES.INVALID_ONBOARDING_STATUS };
//                     }
//                     const body = new onboardingStepTwo();
//                     await validator.customValidate(Object.assign(body, req.body, req.query));
//                     req.body.onboardingStatusId = 2;
//                     req.body.stellar_address = body.stellarAddress;
//                     delete req.body.stellarAddress;
//                     return next();
//                 } else if (req.query.onboardingStep === "generalInformation") {
//                     // check for valid "onboardingStatusId"
//                     if (onboardingStatusId !== 2) {
//                         throw { message: CONSTANTS.MESSAGES.INVALID_ONBOARDING_STATUS };
//                     }
//                     const body = new onboardingStepThree();
//                     await validator.customValidate(Object.assign(body, req.body, req.query));
//                     req.body.userdetail = {};
//                     req.body.userdetail.birth_date = new Date(body.dateOfBirth.replace(/\-/g, "/"));
//                     req.body.onboardingStatusId = 3;
//                     req.body.first_name = body.firstName;
//                     req.body.last_name = body.lastName;
//                     req.body.additional_name = body.additionalName;
//                     delete req.body.firstName;
//                     delete req.body.lastName;
//                     delete req.body.dateOfBirth;
//                     delete req.body.onboardingStep;
//                     delete req.body.additionalName;
//                     return next();
//                 } else if (req.query.onboardingStep === "residentialAddress") {
//                     // check for valid "onboardingStatusId"
//                     if (onboardingStatusId !== 3) {
//                         throw { message: CONSTANTS.MESSAGES.INVALID_ONBOARDING_STATUS };
//                     }
//                     const body = new onboardingStepFour();
//                     await validator.customValidate(Object.assign(body, req.body, req.query));
//                     req.body.onboardingStatusId = 4;
//                     req.body.userdetail = {};
//                     req.body.userdetail.address_line1 = body.residentialAddress;
//                     req.body.userdetail.town_city = body.city;
//                     req.body.userdetail.post_code = body.postcode;
//                     req.body.userdetail.state_op = body.state;
//                     req.body.userdetail.country = body.country;

//                     delete req.body.residentialAddress;
//                     delete req.body.onboardingStep;
//                     delete req.body.postcode;
//                     delete req.body.city;
//                     delete req.body.state;
//                     delete req.body.country;
//                     return next();
//                 } else if (req.query.onboardingStep === "documentInformation") {
//                     // check for valid "onboardingStatusId"
//                     if (onboardingStatusId !== 4) {
//                         throw { message: CONSTANTS.MESSAGES.INVALID_ONBOARDING_STATUS };
//                     }
//                     const body = new onboardingStepFive();
//                     await validator.customValidate(Object.assign(body, req.body, req.query));
//                     req.body.onboardingStatusId = 5;
//                     req.body.userdetail = {};
//                     req.body.userdetail.document_number = body.documentNumber;
//                     req.body.userdetail.document_type = body.documentType;
//                     req.body.userdetail.id_issue_date = new Date(body.dateOfIssue.replace(/\-/g, "/"));
//                     req.body.userdetail.id_expiry_date = new Date(body.dateOfExpire.replace(/\-/g, "/"));
//                     req.body.userdetail.id_photo_url = body.idFrontLink;
//                     req.body.userdetail.id_back_url = body.idBackLink;
//                     req.body.userdetail.id_selfie_url = body.idSelfieLink;
//                     req.body.userdetail.state = 1;
//                     delete req.body.documentNumber;
//                     delete req.body.documentType;
//                     delete req.body.dateOfIssue;
//                     delete req.body.dateOfExpire;
//                     delete req.body.idFrontLink;
//                     delete req.body.idBackLink;
//                     delete req.body.idSelfieLink;
//                     delete req.body.onboardingStep;
//                     return next();
//                 }

//             }
//             return next();
//         } catch (error) {
//             return res.status(422).json(error);
//         }
//     };
//     public createUserValidation = async (req: any, res: any, next: NextFunction) => {
//         try {
//             const body = new onboardingStepOne();
//             await validator.customValidate(Object.assign(body, req.body, req.query));
//             req.body.firebase_uid = body.firebaseUid;
//             delete req.body.firebaseUid;
//             return next();
//         } catch (error) {
//             return res.status(422).json(error);
//         }
//     };
// }