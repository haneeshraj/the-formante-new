import { getInfo } from "@/functions/data";

const page = async () => {
  const socials = await getInfo();

  console.log(socials);

  return <div>{socials?.apple} - test</div>;
};

export default page;
