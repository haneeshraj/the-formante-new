"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  useEffect(() => {
    redirect("https://www.instagram.com/theformante/");
  }, []);

  return;
};

export default Page;
