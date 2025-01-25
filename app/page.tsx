import { Herosection } from "@/components/Home/Herosection";
import { TimelineDemo } from "@/components/Home/TimelineDemo";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <section className="box-border flex flex-col items-center gap-10 p-8">
 
      <div className="w-full">
      <Herosection />
      </div>

   
      <div className="w-full mt-0 md:mt-32 ">
     <TimelineDemo/>
      </div>
    </section>
  );
}
