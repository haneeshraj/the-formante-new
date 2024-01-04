"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  useEffect(() => {
    redirect("https://www.youtube.com/channel/UCJIFPDt4YfEDdgs9gvdCnUw");
  }, []);

  return;
};

export default Page;
