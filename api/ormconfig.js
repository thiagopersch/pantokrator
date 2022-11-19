const entities_config =
  process.env.NODE_ENV === "production"
    ? {
        entities: ["./dist/modules/**/infra/typeorm/entities/*.js"],
        migrations: ["./dist/shared/infra/typeorm/migrations/*.js"],
        cli: {
          migrationsDir: "./dist/shared/infra/typeorm/migrations",
        },
        extra: {
          ssl: true,
        },
      }
    : {
        entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
        migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
        cli: {
          migrationsDir: "./src/shared/infra/typeorm/migrations",
        },
      };

module.exports = {
  name: "default",
  type: "postgres",
  host: process.env.POSTGRES_HOST ?? "127.0.0.1",
  port: process.env.POSTGRES_PORT ?? 5432,
  username: process.env.POSTGRES_USERNAME ?? "postgres",
  password: process.env.POSTGRES_PASSWORD ?? "pantokrator",
  database: process.env.POSTGRES_DATABASE ?? "pantokrator",
  ...entities_config,
};
