import mongoose from "mongoose";

class DB {
  #mongoURI;
  async DB(mongoURI) {
    this.#mongoURI = mongoURI;
    try {
      const success = await mongoose.connect(this.#mongoURI);
      console.log(success, "successfully connected to db");
    } catch (error) {
      console.log(error, "Occured error on connecting");
    }
  }
}

export default DB;
