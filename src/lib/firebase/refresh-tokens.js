import { post } from "../HTTP_Functions/POST";

export async function getIDToken(userToken) {
  const firebaseGetTokenUrl = `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;
  if (!userToken) throw new Error("no data");
  const getIDToken = await post(firebaseGetTokenUrl, {
    grant_type: "refresh_token",
    refresh_token: userToken,
  });
  if (getIDToken?.error) {
    const errMsg = getIDToken?.error.message;
    throw new Error(errMsg);
  }

  return { getIDToken };
}
