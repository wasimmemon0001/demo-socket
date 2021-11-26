import { NextFunction } from "express";

export class Authenticator {
    public Authenticate = async (req: any, res: any, next: NextFunction) => {
        return next();
    };
}