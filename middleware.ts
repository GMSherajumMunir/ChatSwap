import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

// We add a little extra rule (config) saying that the authentication should apply to most paths, but not to paths that include "api," "_next/static," "_next/image," or have a file extension of ".png."
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
// import { Server } from "socket.io";
// import http from "http";

// const server = http.createServer();
// const io = new Server(server, {
//   pingTimeout: 60000,
//   cors: {
//     origin: "http://localhost:3000",
//     // credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log("Connected to socket.io");

//   socket.on("setup", (userData: any) => {
//     socket.join(userData._id);
//     socket.emit("connected");
//   });

//   socket.on("join chat", (room: string) => {
//     socket.join(room);
//     console.log("User Joined Room: " + room);
//   });

//   socket.on("typing", (room: string) => socket.in(room).emit("typing"));
//   socket.on("stop typing", (room: string) =>
//     socket.in(room).emit("stop typing")
//   );

//   socket.on("new message", (newMessageRecieved: any) => {
//     const chat = newMessageRecieved.chat;

//     if (!chat.users) return console.log("chat.users not defined");

//     chat.users.forEach((user: any) => {
//       if (user._id == newMessageRecieved.sender._id) return;

//       socket.in(user._id).emit("message recieved", newMessageRecieved);
//     });
//   });

//   socket.on("disconnect", () => {
//     console.log("USER DISCONNECTED");
//     // Handle user disconnect logic here
//   });
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
