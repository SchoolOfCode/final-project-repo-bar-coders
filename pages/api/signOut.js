import cookie from "cookie";

export default function handler(req, res) {
  res.setHeader(
    "set-cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      sameSite: true,
      path: "/",
    })
  );

  res.status(200);
  res.json({ success: true });
}
