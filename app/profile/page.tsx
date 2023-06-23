import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.name && (
        <Image
          src={`${session?.user?.image}`}
          alt="image"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};

export default ProfilePage;
