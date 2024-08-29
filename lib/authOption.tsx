import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn, signOut } from "next-auth/react";


const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Email", type: "text"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials: any, req: any): Promise<any> {
                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error("All fields are required");
                }

                try {
                    const response = await axios.post('http://ec2-43-205-127-140.ap-south-1.compute.amazonaws.com/api/v1/users/login', { email, password })
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
            if (user) {
                token.id = user.userId;
                token.name = user.userName; 
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.userId = token.id;
                session.user.userName = token.name; 
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
