import app from './app';
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT || 5000;
mongoose.connect(env.MONGO_CONNECTIONS)
.then(() => {
  console.log("MongoDB is connected!");
  app.listen(port, () => console.log(`Listening on port ${port}`));
})
.catch(err => console);