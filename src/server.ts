import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function server() {
  await mongoose.connect(config.db_uri as string);
  app.listen(config.port, () => {
    console.log(`Car Store Server app is listening on port ${config.port}`);
  });
}

server();
