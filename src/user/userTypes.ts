export interface User {
  userId: string;
  name: string;
  twitterHandle?: string;
  profileImage?: string;
  followerCount?: number;
  lastFiveTweets?: string[];
}