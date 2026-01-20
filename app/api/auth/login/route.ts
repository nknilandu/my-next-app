import { NextRequest, NextResponse } from "next/server";

// Mock credentials
const MOCK_USER = {
  email: "test@example.com",
  password: "123456",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      // Set cookie
      const res = NextResponse.json({ message: "Login successful" });
      res.cookies.set({
        name: "auth",
        value: "true",
        path: "/",
        httpOnly: true,
      });
      return res;
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
