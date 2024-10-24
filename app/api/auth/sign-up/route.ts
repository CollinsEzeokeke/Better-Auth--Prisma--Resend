import { NextResponse, NextRequest } from "next/server";
import { authClient } from "@/lib/auth-client";

export async function POST(req: Request) {
    try {const { name, email, password,username } = await req.json()
    
    const { data, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
        username: username,
        image: "https://example.com/image.png",
        callbackURL: "/",
      });
      if (data){
      return NextResponse.json({data})
      }
      return NextResponse.json({error})
      } catch (error) {
        NextResponse.json(
            {message: "this was an error" + error},
            {status: 400}
        )
      }
}