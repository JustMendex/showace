import Image from "next/image"
import { HydrateClient } from "~/trpc/server";
import { LoginCard } from "./_components/loginCard";

export default async function Home() {


  return (
    <HydrateClient>

      <div className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-2 xl:min-h-screen">
        <div className="flex flex-col gap-10 items-center justify-center py-12">
          <Image src="/logo.jpeg" alt="Logo" width={300} height={200} className="w-auto h-auto" />
          <LoginCard />
        </div>
        <div className="hidden bg-muted lg:block rounded-3xl  my-5 mr-5 w-auto h-auto">
          <Image
            src="/banner.jpeg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full  w-full object-cover  dark:brightness-[0.2] dark:grayscale rounded-3xl"
          />
        </div>
      </div>
    </HydrateClient>
  );
}
