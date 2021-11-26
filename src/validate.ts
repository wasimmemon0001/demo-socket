import { validate } from "class-validator";
import { EntitySchema } from "typeorm";

export class Validator {
  public validate(arg: any) {
    return (req: any, res: any, next: any) => {

      validate(Object.assign(arg, req.body, req.query)).then(errors => {
        // errors is an array of validation errors
        if (errors.length > 0) {
          return res.status(422).json({ errors, code: 422 });
        } else {
          next();
        }
      });
    };
  }

  public customValidate(data: EntitySchema) {
    return new Promise<void>((resolve, reject) => {
      validate(data).then(errors => {
        // errors is an array of validation errors
        if (errors.length > 0) {
          reject({ errors, code: 422 });
        } else {
          resolve();
        }
      });
    });
  }
}