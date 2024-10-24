import { createAuthClient } from "better-auth/react"
import { usernameClient } from "better-auth/client/plugins"
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [ 
        usernameClient() 
    ]  
})

export const { signIn, signUp, useSession } = createAuthClient()