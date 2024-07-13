declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_SECRET: string;
      DATABASE_URL: string;
      CLOUDINARY_NAME: string;
      CLOUDINARY_API_KEY: string;
      CLOUDINARY_API_SECRET: string;
      NEXTAUTH_URL: string;
      CLOUDINARY_URL: string;
      APP_ENV: "development" | "staging" | "production";
      [key: string]: string | undefined;
    }
  }
}

export {};
