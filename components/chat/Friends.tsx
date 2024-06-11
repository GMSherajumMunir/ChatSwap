import React from "react";
import Friend from "./Friend";
import { auth } from "@/auth";
import { getUsersForSidebar } from "@/lib/data";

// const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));

const Friends = async () => {
  const authUser = await auth();
  // sleep(1000);
  const otherUsers: any = authUser?.user
    ? await getUsersForSidebar(authUser?.user?._id)
    : [];

  return (
    <div className="flex-1 overflow-y-auto ">
      {otherUsers?.map((user: any) => {
        return <Friend key={user._id} user={user} />;
      })}
    </div>
  );
};
export default Friends;
