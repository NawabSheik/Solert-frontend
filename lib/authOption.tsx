import axios from "axios";
import { Session } from "inspector";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn, signOut } from "next-auth/react";


const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "xyz@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "********" }
            },
            async authorize(credentials: any, req: any): Promise<any> {
                const { email, password } = credentials;

                console.log("here we go", email, password)

                if (!email || !password) {
                    throw new Error("All fields are required");
                }

                try {
                    const response = await axios.post('http://localhost:3001/api/v1/users/login', { email, password })
                    const user = response.data;

                    if (!user) {
                        throw new Error("Invalid credentials");
                    }

                    return user;
                } catch (error) {
                    throw new Error("Authentication failed");
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            console.log("morer raam", token, user);  // Check values of token and user
            if (user) {
                token.id = user.id;
                console.log("aflajld;fjaoe", token.id);
                token.name = user.name; 
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                console.log("aflajld;fjaoe2", token.id);
                session.user.name = token.name; 
            }
            return session;
        }
    },

    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
        signOut: '/',
        Error: '/'
    },
    session: {
        jwt: true
    }

}


export default authOptions;