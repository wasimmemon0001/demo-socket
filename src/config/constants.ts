export class CONSTANTS {
    public static readonly MESSAGES = {
        EMAIL_EXISTS: "Email already exists!",
        ERR_URL_NOT_FOUND: "Url not found.",
        PHONE_REQUIRED: "Phone Number required.",
        ONBOARD_STATUS_REQUIRED: "OnBoarding Status Id required.",
        USER_EXISTS: "User already exists.",
        USER_REGISTER_SUCCESS: "User registered successfully!",
        USER_UPDATE_SUCCESS: "User info updated successfully!",
        USER_GET_SUCCESS: "User info fetched successfully!",
        USER_GET_FAIL: "User not found",
        INVALID_ONBOARDING_STATUS: "Invalid Onboarding Status. Please contact admin",
        UNAUTHORIZED: "Unauthorized"
    };

    public static readonly ENTITIES = {
        USER_DETAIL: {
            DOCUMENT_TYPE_ENUM: ["passport", "id_card", "drivers_license"]
        }
    };
}