import { authClient } from "@/lib/auth-client";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try{
        const { password } = await req.json()

        const { data, error } = await authClient.resetPassword({
            newPassword: password
          });
          if (error){
            console.log(error)
          }
          NextResponse.json(data)
    }catch(error){
        console.log(error)
        NextResponse.json(
            {messaage: "this resulted in an error check your console"},
            {status: 400}
        )
    }
}