declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    DATABASE_URL: string;
    ACCESS_TOKEN_SECRET: string;
    BCRYPT_SALT_ROUNDS: string;
    SENDGRID_API_KEY: string;
    CLIENT_URL: string;
    APP_MAIL_ADDRESS: string;
    VERIFICATION_MAIL_TEMPLATE_ID: string;
  }
}
