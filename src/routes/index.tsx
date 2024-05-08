import { Grid } from "~/components/Grid";
import { Layout } from "~/components/Layout";
import { GridChallenge } from "~/types/GridChallenge";

export default function Home() {
  const challengeTestList: GridChallenge[] = Array.from({ length: 25 }).map(
    (_, index) => ({
      name: `challenge ${index}`,
      description: `this is the challenge n°${index}`,
    })
  );

  return (
    <Layout>
      <Grid challenges={challengeTestList}/>
    </Layout>
  );
}
