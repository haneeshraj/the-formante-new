import { getInfo } from "@/functions/data";

export const revalidate = 30;

const page = async () => {
  const socials = await getInfo();

  console.log(socials);

  return <div>{socials?.apple}</div>;
};

export default page;
