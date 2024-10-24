import { NextResponse, NextRequest } from "next/server";
import { authClient } from "@/lib/auth-client";

export async function POST(req: Request) {
    try {const { email, password } = await req.json()
    
    const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
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