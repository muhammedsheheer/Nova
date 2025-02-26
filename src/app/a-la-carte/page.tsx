import Navbar from "@/components/Navbar";
import ALaCarta from "./(section)/ALaCarta";

const page = ({}) => {
  return (
    <section className="w-full bg-[#070d0f]">
      <Navbar position="absolute" />
      <div className="h-[90px] w-full"></div>
      <ALaCarta />
    </section>
  );
};

export default page;
