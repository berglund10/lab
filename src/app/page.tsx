import { Main } from "@/ui/layouts/";
import { PageTitle } from "@/ui/text/pagetitle";

const data = {
  name: "Johan",
  lastname: "Johansson"
}

export default function Home() {
  return (
    <Main>
    <PageTitle text="Member"/>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </Main>
  );
}
