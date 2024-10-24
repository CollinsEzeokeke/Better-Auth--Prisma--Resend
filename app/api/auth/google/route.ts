import { authClient } from "@/lib/auth-client"
import { NextResponse } from "next/server"

export async function GET() {
    try{
        const signin = async () => {
            const data = await authClient.signIn.social({
                provider: "google"
            })
        }
        NextResponse.json(
            {message: "user created successfully using google"},
            {status: 200}
        )
    }catch(error){
        console.log(error)
        NextResponse.json(error)
    }
}