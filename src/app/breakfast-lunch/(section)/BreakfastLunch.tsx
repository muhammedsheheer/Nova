const starters = [
    {
        name: "Tempura Prawns",
        price: 13,
        description: "Fried Prawns in Tempura & Spicy Mayo",
    },
    {
        name: "Bao Ban",
        price: 12,
        description:
            "Traditional Steamed Japanese Bread, BBQ Beef, Crispy Onion, Chives, Homemade Red Onion & Raspberry Sauce",
    },
    {
        name: "Gyoza (VG)",
        price: 12,
        description:
            "Fried vegetables or prawns dumplings served with sweet chilli sauce.",
    },
    {
        name: "Chicken Lollipop",
        price: 12,
        description: "Spicy wings served with lime and sesame seeds.",
    },
    {
        name: "Crispy Squid",
        price: 10,
        description: "Deep fried squid served with tartare sauce",
    },
    {
        name: "Greek Salad (V)",
        price: 14,
        description:
            "Feta Cheese, Green Olives, Cherry Tomatoes, Cucumber, Red Onion, Oregano & House Dressing",
    },
];

const sushi = [
    {
        name: "Seared Salmon",
        price: 18,
        description:
            "Salmon avocado and cucumber roll topped with seared salmon, spicy mayo and tobiko.",
    },
    {
        name: "Dragon Roll",
        price: 19,
        description:
            "Tempura prawn, cucumber roll topped with avocado, tobiko, crispy onion, teriyaki and mayo sauce.",
    },
    {
        name: "California Roll",
        price: 17,
        description:
            "Crab meat roll with avocado, cucumber, Kampyo, tobiko and mayo sauce.",
    },
];

const mains = [
    {
        name: "Pumpkin Ravioli (V, N)",
        price: 17,
        description:
            "Fresh Pasta, Filled With Pumpkin, Butter, Sage & Toasted Almond Flakes.",
    },
    {
        name: "Tagliatelle Ragu",
        price: 26,
        description:
            "Dry Porcini Mushroom, Fresh Tagliatelle, White Veal Ragu, Parmesan Fondue & Fresh Black Truffle.",
    },
    {
        name: "Nova Burger",
        price: 19,
        description:
            "Homemade Burger, Caramelised Tomato, Caramelised Red Onion, Baby Gem, Pickles, Saffron Mayo, Smoked Cheese & Chips.",
    },
    {
        name: "Caesar Salad",
        price: 16,
        description:
            "Sliced Chicken Breast, Baby Gem, Homemade Caesar’s Dressing, Carasau Bread, Parmesan Flakes & Crispy Onion.",
    },
    {
        name: "Chicken Cubes (GF)",
        price: 20,
        description: "Marinated Chicken Breast, Smoked Yoghurt & Mixed Leaves.",
    },
    {
        name: "Salmon Fillet (GF)",
        price: 32,
        description: "Served with Caponata, Parsley Oil & Fresh Mixed Herbs.",
    },
    {
        name: "Lamb Chops (N)",
        price: 36,
        description:
            "Grilled Lamb Chops with Couscous, Courgette, Raisins, Carrots, Saffron & Pistachio.",
    },
    {
        name: "Sirloin",
        price: 36,
        description:
            "Sirloin Beef, Crushed Potatoes & Parmesan and Gravy Sauce.",
    },
];

const sides = [
    { name: "Mixed Mushrooms" },
    { name: "Crushed Potatoes" },
    { name: "Grilled Asparagus" },
    { name: "Purple Broccoli" },
    { name: "Mixed Vegetables" },
    { name: "House Seasoned Chips" },
    { name: "Sweet Potato Fries" },
    { name: "Steamed Edamame" },
    { name: "Seasonal Mixed Salad" },
    { name: "Bread Basket" },
];

const desserts = [
    { name: "Pistachio Baklava (N)" },
    { name: "Red Velvet Cake (N)" },
    { name: "Chocolate Pudding (N)" },
    { name: "Lemon Cheesecake" },
    { name: "Ferrero Rocher Cake (N)" },
    { name: "Strawberry Cheesecake (N)" },
];

const BreakfastLunch = ({ }) => {
    return (
        <section className="h-full w-full bg-[#070d0f] px-4 py-6 md:px-[50px] 2xl:px-[120px]">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex flex-col gap-1 items-center justify-center">
                    <p className="w-full max-w-[1000px] text-center font-inter text-base font-[600] text-white md:text-2xl">
                        2 COURSES 30 / 3 COURSES 35
                    </p>
                    <p className="w-full text-center italic font-[400] text-white">Everyday until 2pm</p>
                </div>
                <div className="w-full max-w-[1300px] flex flex-col gap-10">
                    <div className="w-full columns-1 md:columns-3 space-y-2 gap-3">

                        <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8 shadow-lg break-inside-avoid-column">
                            <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                                Starters
                                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                                    <div className="h-[1px] w-3/5 bg-primary"></div>
                                </div>
                            </div>
                            {starters.map((item, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <div className="flex flex-row justify-between gap-4">
                                        <h3 className="font-open_sans flex flex-row gap-0 text-base font-[500] text-white md:text-xl">
                                            {item.name}
                                        </h3>
                                        <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                                            {item.price}
                                        </h3>
                                    </div>
                                    <p className="font-open_sans text-sm font-[400] text-white">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8 shadow-lg break-inside-avoid-column">
                            <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                                Sushi Rolls
                                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                                    <div className="h-[1px] w-3/5 bg-primary"></div>
                                </div>
                            </div>
                            {sushi.map((item, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <div className="flex flex-row justify-between gap-4">
                                        <h3 className="font-open_sans flex flex-row gap-0 text-base font-[500] text-white md:text-xl">
                                            {item.name}
                                        </h3>
                                        <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                                            {item.price}
                                        </h3>
                                    </div>
                                    <p className="font-open_sans text-sm font-[400] text-white">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8 shadow-lg break-inside-avoid-column">
                            <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                                Mains
                                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                                    <div className="h-[1px] w-3/5 bg-primary"></div>
                                </div>
                            </div>
                            {mains.map((item, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <div className="flex flex-row justify-between gap-4">
                                        <h3 className="font-open_sans flex flex-row gap-0 text-base font-[500] text-white md:text-xl">
                                            {item.name}
                                        </h3>
                                        <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                                            {item.price}
                                        </h3>
                                    </div>
                                    <p className="font-open_sans text-sm font-[400] text-white">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8 shadow-lg break-inside-avoid-column">
                            <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                                Sides £6
                                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                                    <div className="h-[1px] w-3/5 bg-primary"></div>
                                </div>
                            </div>
                            {sides.map((item, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <div className="flex flex-row justify-between gap-4">
                                        <h3 className="font-open_sans flex flex-row gap-0 text-base font-[500] text-white md:text-xl">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8 shadow-lg break-inside-avoid-column">
                            <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                                DESSERTS £10
                                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                                    <div className="h-[1px] w-3/5 bg-primary"></div>
                                </div>
                            </div>
                            {desserts.map((item, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <div className="flex flex-row justify-between gap-4">
                                        <h3 className="font-open_sans flex flex-row gap-0 text-base font-[500] text-white md:text-xl">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="w-full py-6 px-5 bg-[#dbb968] flex flex-col gap-7 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-2">
                            <p className="text-4xl font-[600] uppercase">Breakfast</p>
                            <p className="text-base font-[500] capitalize">Available Saturday & Sunday from 10:00 to 14:00</p>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex justify-between items-center">
                                    <p className="uppercase text-lg font-[500]">TURKISH</p>
                                    <p className="uppercase text-lg font-[500]">15.95</p>
                                </div>
                                <p className="w-full font-[400]">
                                    Fried eggs / menemen / scrambled eggs, kaymak cheese, mini chicken sausages, cucumber, cherry tomatoes, mixed olives, walnuts, strawberries,Turkish feta cheese, honey, strawberry jam, bread and traditional Turkish tea
                                </p>
                            </div>

                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex justify-between items-center">
                                    <p className="uppercase text-lg font-[500]">VEGETARIAN</p>
                                    <p className="uppercase text-lg font-[500]">14.95</p>
                                </div>
                                <p className="w-full font-[400]">
                                    2 Free range fried eggs, mushrooms, roasted tomatoes, vegetarian sausages, hash brown, beans, deep fried crispy halloumi and white or brown toasted bread
                                    <br />
                                    <span className="font-[600] text-xl">V</span>
                                </p>
                            </div>

                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex justify-between items-center">
                                    <p className="uppercase text-lg font-[500]">English</p>
                                    <p className="uppercase text-lg font-[500]">15.95</p>
                                </div>
                                <p className="w-full font-[400]">
                                    2 Free range fried or scrambled eggs, mushrooms, roasted tomatoes, beef sausages, hash browns, beans, beef bacon and white or brown toasted bread
                                </p>
                            </div>

                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex justify-between items-center">
                                    <p className="uppercase text-lg font-[500]">Pancakes</p>
                                    <p className="uppercase text-lg font-[500]">9.95</p>
                                </div>
                                <p className="w-full font-[400]">
                                    5 Pancakes with strawberries, raspberries, blueberries, creamy cheese and maple syrup<br />
                                    <span className="font-[600] text-xl">V</span>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BreakfastLunch