import axios from "axios";
import { USERS_URL, AUTH_TOKEN, USER_URL } from "../config";
import { User } from "../user/userTypes";

export const getUsers = async (userIds: string): Promise<User[]> => {
  const url = `${USERS_URL}?user_id=${userIds}`;
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });

  const users: User[] = response.data.map(user => ({
    userId: user["id"],
    name: user["name"]
  }));
  return users
};

export const getUser = async (userId: string): Promise<User> => {
  const url = `${USER_URL}?user_id=${userId}`;
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });

  const user: User = {
    userId: response.data["id"],
    name: response.data["name"],
    twitterHandle: response.data["screen_name"],
    profileImage: response.data["profile_image_url"],
    followerCount: response.data["followers_count"],
  };
  return user;
};
