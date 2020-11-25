import axios from "axios";
import { getUsers, getUser } from "./twitterApiGateway";

jest.mock('axios');
const mockAxiosGet = jest.fn();
axios.get = mockAxiosGet;

const twitterUser = {
  id: 1,
  name: "twitter dev",
  screen_name: "twitterdev",
  profile_image_url: "abc.png",
  followers_count: 100,
};

describe("when getting users", () => {
  describe("and it returns data", () => {
    mockAxiosGet.mockResolvedValueOnce({
      data: [twitterUser],
    });

    it("should return list of users", async () => {
      const result = await getUsers("123");
      const expectedResult = [{ userId: 1, name: "twitter dev" }];

      expect(result).toEqual(expectedResult);
    });
  });

  describe("and it doesn't return data", () => {
    mockAxiosGet.mockResolvedValueOnce({
      data: [],
    });

    it("should return empty list", async () => {
      const result = await getUsers("123");

      expect(result).toEqual([]);
    });
  });
});

describe("when getting users", () => {
  describe("and it returns data", () => {
    mockAxiosGet.mockResolvedValueOnce({
      data: twitterUser,
    });

    it("should return user object", async () => {
      const result = await getUser("123");
      const expectedResult = {
        userId: 1,
        name: "twitter dev",
        twitterHandle: "twitterdev",
        profileImage: "abc.png",
        followerCount: 100,
      };

      expect(result).toEqual(expectedResult);
    });
  });

  describe("and it doesn't return data", () => {
    mockAxiosGet.mockResolvedValueOnce({
      data: {},
    });

    it("should return empty object", async () => {
      const result = await getUser("123");

      expect(result).toEqual({});
    });
  });
});
