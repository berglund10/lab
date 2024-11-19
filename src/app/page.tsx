import { Page } from "@/ui";

const data = {
  name: "Johan",
  lastname: "Johansson"
}
// Only allow text to put in text: 

export default function Home() {
  return (
    <Page title="Members">
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </Page>
  );
}
