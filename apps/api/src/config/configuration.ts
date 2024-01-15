export default () => ({
  port: parseInt(process.env.PORT, 10) || 8082,
  database: { host: process.env.HOST_DB, password: process.env.PASSWORD_DB },
  secretToken: process.env.SECRET_TOKEN,
});
