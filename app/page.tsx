
import { title, subtitle } from "@/components/primitives";
import { Cover } from "@/components/ui/cover";

export default function Home() {
  return (
   
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make </span>
        <Cover><span className={title({ color: "violet" })}>beautiful</span></Cover>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

    </section>
  
  );
}
