import Image from "next/image";
import { S1 } from "./S1";
import Testimonials from "./Testamonials";
import { Stuff } from "./Stuff";

export default function Home() {
  return (
    <main className="gap-10">
      <div className="h-20 md:h-28" />
      <S1 />
      <br />
      <Stuff />
      <br></br>
      <Testimonials />asdasd
    </main>
  );
}
