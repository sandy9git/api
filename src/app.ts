import * as express from "express";
import * as cors from "cors";
import { getUsers, getUser } from "./data/twitterApiGateway";

const app = express();
const port = 3000;

app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const userIds: string = req.query["user_ids"] as string;
    // for prod the search logs could be sent to cloudwatch and some perssistent store 
    console.log("search log - searched userIds: ", userIds);
    const users = await getUsers(userIds);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.get("/user/:userId", async (req, res) => {
  try {
    const userId: string = req.params["userId"];
    const users = await getUser(userId);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.listen(port, () => {
  console.log(`Usser api listening at http://localhost:${port}`);
});