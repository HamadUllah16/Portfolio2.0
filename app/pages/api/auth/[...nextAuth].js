// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

// export const authOptions = {
//     // Configure one or more authentication providers
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             profile(profile) {
//                 return {
//                     // Return all the profile information you need.
//                     // The only truly required field is `id`
//                     // to be able identify the account when added to a database
//                 }
//             },
//         })
//     ],
// }

// export default NextAuth(authOptions)