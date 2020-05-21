
export namespace Constants {
    export namespace Env {
        export const MONGO_USER: string = process.env.MONGO_USER || "covid-db"
        export const MONGO_PASSWORD: string = process.env.MONGO_USER || "pswd123"
        export const MONGO_PATH: string = process.env.MONGO_PATH || "localhost:27017/db"
        export const MONGO_PORT: string = process.env.MONGO_PATH || "5000"
        export const PORT: string = process.env.PORT || "4000"
        export const ALLOWED_HOSTS: string[] = (process.env.ALLOWED_HOSTS || "http://localhost:4200|http://localhost:4000").split('|')
        export const JWT_SECRET: string = process.env.JWT_SECRET || "don't tell anyone"
        export const CAPTCHA_SECRET_KEY: string = process.env.CAPTCHA_SECRET_KEY || "6LfObu4UAAAAAG4TSyuuHGoUqUO9nqHMWIOoc-Q62"
    }
    export namespace MailJet {
        export const MJ_OWNER_NAME: string = process.env.MJ_OWNER_NAME || "Jimmy Vo"
        export const MJ_OWNER_EMAIL: string = process.env.MJ_OWNER_EMAIL || "jimmy.vo.2410@gmail.com"
        export const MJ_SENDER_EMAIL: string = process.env.MJ_SENDER_EMAIL || "jimmy.vo.2410.gae@gmail.com"
        export const MJ_APIKEY_PUBLIC: string = process.env.MJ_APIKEY_PUBLIC || "34d299191b225ca4fe1670cd4cb251ba"
        export const MJ_APIKEY_PRIVATE: string = process.env.MJ_APIKEY_PRIVATE || "b26bbefb2b727a49619e4019b3c3fdbe"
    }
    export namespace User {
        export const OWNER_EMAIL: string = process.env.OWNER_EMAIL || "jimmy.vo.2410@gmail.com"
        export const OWNER_PASSWORD: string = process.env.OWNER_PASSWORD || "jimmy.vo.2410@gmail.com"
    }
}