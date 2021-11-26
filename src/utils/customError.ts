export class CustomError {
    message!: string;
    code!: number;
    status!: number;
    additionalInfo!: any;

    constructor(message: string, status: number = 500, code: number = 500, additionalInfo: any = {}) {
        this.message = message;
        this.status = status;
        this.code = code;
        this.additionalInfo = additionalInfo;
    }
}