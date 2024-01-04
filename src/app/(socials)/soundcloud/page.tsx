"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  useEffect(() => {
    redirect("https://soundcloud.com/candy-heist");
  }, []);

  return;
};

export default Page;
