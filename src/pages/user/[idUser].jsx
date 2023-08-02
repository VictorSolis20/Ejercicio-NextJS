import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const {
    query: { idUser },
  } = router;
  console.log("router", router);
  return (
    <div className="bg-white py-24 sm:py-32">
      <h1>{idUser}</h1>
    </div>
  );
};

export default User;
