import Navbar from "@/components/Navbar"
import Drinks from "./(section)/Drinks"

const page = ({ }) => {
    return (
        <section className="w-full bg-[#070d0f]">
            <Navbar position="absolute" />
            <div className="w-full h-[90px]"></div>
            <Drinks />
        </section>
    )
}

export default page