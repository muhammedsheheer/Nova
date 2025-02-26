import Navbar from "@/components/Navbar"
import BreakfastLunch from "./(section)/BreakfastLunch"

const page = ({ }) => {
    return (
        <section className="w-full bg-[#070d0f]">
            <Navbar position="absolute" />
            <div className="h-[90px] w-full"></div>
            <BreakfastLunch />
        </section>
    )
}

export default page