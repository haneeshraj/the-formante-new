import { useRouter } from "next/router";

const SinglePage = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>{id}</div>;
};

export default SinglePage;
