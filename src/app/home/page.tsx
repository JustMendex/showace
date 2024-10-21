import { HydrateClient } from "~/trpc/server";
import { Charts } from "../_components/stats"

export default async function Home() {


  return (
    <HydrateClient>
      <main>
        <Charts />
      </main>
    </HydrateClient>
  );
}
