"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  useEffect(() => {
    redirect(
      "https://open.spotify.com/artist/6t7uj5uSApVdULpiJLK1sR?si=DEtRR_4-T4m9yrJBUQLkqg"
    );
  }, []);

  return;
};

export default Page;
