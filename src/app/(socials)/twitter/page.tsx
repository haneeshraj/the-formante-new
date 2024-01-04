"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  useEffect(() => {
    redirect("https://twitter.com/candy_heist");
  }, []);

  return;
};

export default Page;
