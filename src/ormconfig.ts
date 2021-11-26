import { ConnectionOptions } from "typeorm";
import { PostCommentsEntity } from "./database/entities/postCommentsEntity";
import { UserEntity } from "./database/entities/userEntity";
import { PostLikesEntity } from "./database/entities/postLikesEntity";
import { PostEntity } from "./database/entities/postEntity";

const ormConfig: ConnectionOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    insecureAuth: true,
    entities: [
        PostCommentsEntity,
        PostLikesEntity,
        PostEntity,
        UserEntity
    ],
    synchronize: false,
    logging: true
};

export = ormConfig;