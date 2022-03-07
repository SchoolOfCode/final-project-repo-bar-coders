import cookie from "cookie";

export default function handler(req, res) {
  const refreshToken = req.body.refreshToken;
  console.log(res.body);

  res.setHeader(
    "set-cookie",
    cookie.serialize("token", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 3,
      sameSite: true,
      path: "/",
    })
  );

  res.status(200);
  res.json({ success: true });
}
