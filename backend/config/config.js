import "dotenv/config";

//checking if there are any missing env files
const loadEnv = (key) => {
  if (key === undefined || key === "" || key.trim() === "") {
    console.error("Missing env variable(s)");
    process.exit(1);
  }

  return key.trim();
};

//DB Access token 
const DB_ACCESS = loadEnv(process.env.DB_ACCESS);
//port config
const PORT = loadEnv(process.env.PORT);

export {DB_ACCESS,PORT}