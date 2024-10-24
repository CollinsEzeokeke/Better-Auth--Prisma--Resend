import { authClient } from "@/lib/auth-client";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try{
        const { email } = await req.json()

        const { data, error } = await authClient.forgetPassword({
            email: email,
            redirectTo: "/api/auth/reset-password",
          });
    }catch(error){
        console.log(error)
        NextResponse.json(
            {messaage: "this resulted in an error check your console"},
            {status: 400}
        )
    }
}