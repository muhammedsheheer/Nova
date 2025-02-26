import React from "react";

const appetisers = [
  {
    name: "Grilled Halloumi (GF/V)",
    price: 11,
    description: "Honey & Crispy Mint Leaves",
  },
  {
    name: "Fried Squid",
    price: 10,
    description: "Deep Fried Squid, Homemade Tartare Sauce & Lime",
  },
  {
    name: "Nova Meze Platter (V)",
    price: 16,
    description:
      "Homemade Hummus, Baba Ghanoush, Cacik, Couscous With Caponata & Bread",
  },
  {
    name: "Bread & Olives",
    price: 7,
    description: "Mixed Marinated Olives with Focaccia Bread",
  },
  {
    name: "Crispy Focaccia (V)",
    price: 7,
    description: "Focaccia bread, Ricotta & Truffle Honey",
  },
];

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
    name: "Lollipops",
    price: 12,
    description: "Fried Chicken Wings & Chilli Sauce",
  },
  {
    name: "Spicy Salmon Tartare",
    price: 14,
    description:
      "Raw Salmon, Avocado, Red Sweet Chilli, Mint, Tobico, Lemon & Virgin Olive Oil",
  },
  {
    name: "Short Ribs (GF)",
    price: 20,
    description: "Slow Cooked Short Rib Beef, Truffle Mash Potato & Demi Glace",
  },
  {
    name: "Scallops (GF)",
    price: 14,
    description: "Grilled Scallop Skewers, Parsley Cream & Saffron Mayo",
  },
  {
    name: "Gyoza (GF/V)",
    price: 12,
    description: "Vegetables or Prawn Dumplings & Sweet Chilli Sauce",
  },
  {
    name: "Wagyu Tartare",
    price: 20,
    description:
      "Raw Wagyu Beef Tartare on Parmesan Fondue, Fresh Black Truffle, Lemon Dressing & Chives",
  },
];

const salads = [
  {
    name: "Caesar Salad",
    price: 16,
    description:
      "Sliced Chicken Breast, Grilled Baby Gem, Homemade Caesar’s Dressing, Carasau Bread, Parmesan Flakes & Crispy Onion",
  },
  {
    name: "Goats Cheese Salad (GF/V)",
    price: 15,
    description:
      "Mixed Salad, Goats Cheese, Walnuts, Cherry Tomatoes, Pomegranate Seeds, Sweet Corn, Olive Oil & Pomegranate Sauce",
    contains: ["Nuts"],
  },
  {
    name: "Fennel Salad",
    price: 13,
    description:
      "Fresh Fennel, Asparagus, Grapefruit, Olives, Lemon Dressing & Beetroot",
  },
  {
    name: "Greek Salad (GF/V)",
    price: 14,
    description:
      "Feta Cheese, Green Olives, Cherry Tomatoes, Cucumber, Red Onion, Oregano & House Dressing",
  },
];

const steaks = [
  {
    name: "Wagyu Rib Eye (GF)",
    price: 96,
    description: "Served with 'Millefoglie' Potatoes & Gravy",
  },
  {
    name: "Tomahawk (650g - 750g) ",
    price: 98,
    description: "Thick bone-in Ribeye, Mixed Aromatic Herbs & Garlic Puree",
  },
  {
    name: "Dallas (350g - 450g) (GF) ",
    price: 50,
    description: "Ribeye on the bone, Wild Rocket, Tomatoes & Red Onions",
  },
  {
    name: "Fillet Minion (200g - 250g) (GF) ",
    price: 45,
    description:
      "Beef Tenderloin, Mashed Potatoes, Blue Cheese, Rosemary, Virgin Olive Oil",
  },
  {
    name: "Sirloin (250g - 300g) (GF)",
    price: 36,
    description: "Sirloin Beef, Crushed Potatoes & Parmesan",
  },
  {
    name: "Picanha (Brazilian Style) (GF)",
    price: 32,
    description: "Grilled Courgette, Semidry Tomatoes & Chimichurri",
  },
  {
    name: "Lamb Chops",
    price: 36,
    description:
      "Mediterranean Couscous, Courgette, Raisins, Saffron & Pistachio",
    contains: ["contains nuts"],
  },
  {
    name: "Chicken Cubes",
    price: 20,
    description: "Marinated Chicken Breast, Smoked Yoghurt & Mixed Leaves",
  },
  {
    name: "Super Nova Mixed Grill",
    price: 90,
    description:
      "Short Lamb Ribs, Lamb Chops, Chicken Cubes, Half Baby Chicken, Picanha Steak served with Mixed Leaves Salad, Mushrooms, Crushed Potatoes & Gravy Sauce",
  },
];

const mains = [
  {
    name: "Veal Milano",
    price: 34,
    description:
      "Deep fried Veal, Millefoglie Potatoes & Homemade Truffle Mayo",
  },
  {
    name: "Sea Bass (GF) ",
    price: 35,
    description:
      "Marinated in Lemon Zest, Garlic, Mixed Herbs & Crushed Pistachio",
  },
  {
    name: "Baby Chicken",
    price: 30,
    description:
      "Whole Baby Chicken Slow Cooked With Miso Sauce & Grilled Baby Carrots",
  },
  {
    name: "Lobster (GF) ",
    price: 90,
    description: "Whole Grilled Lobster, Chives Oil & Saffron Mayo",
  },
  {
    name: "Chicken Katsu Curry",
    price: 28,
    description:
      "Special Curry Sauce, Red & Green Sweet Chilli, Fried Onions, Baby Carrots & Rice",
  },
  {
    name: "Salmon Fillet",
    price: 32,
    description: "Served with Caponata, Parsley oil & Fresh Mixed Herbs",
  },
  {
    name: "Wagyu Rib Eye",
    price: 49,
    description:
      "Sliced Wagyu, Smoked Purple Aubergine, Marinated Red Onions & Raspberry, Dry Cherry Tomatoes, Parsley & Virgin Olive Oil",
  },
  {
    name: "Aubergine Steak (GF) ",
    price: 18,
    description:
      "Grilled Aubergine, Miso Sauce, Baba Ganoush, Capers, Sun Dried Tomatoes, Marjoram & Mint",
  },
];

const pastas = [
  {
    name: "Lobster Spaghetti",
    price: 45,
    description: "Fresh Spaghetti Pasta With Lobster, cooked with bisque sauce",
    extras: [{ name: "Add half Lobster", price: 40 }],
  },
  {
    name: "Tagliatelle Ragu",
    price: 26,
    description:
      "Dry Porcini Mushroom, Fresh Tagliatelle, White Veal Ragu, Parmesan Fondue & Fresh Black Truffle",
  },
  {
    name: "Pumpkin Ravioli",
    price: 17,
    description:
      "Fresh Pasta, Filled With Pumpkin, Butter, Sage & Toasted Almond Flakes",
    dietary: ["Contains nuts"],
  },
];

const signatureBurgers = [
  {
    name: "NOVA Burger",
    price: 19,
    description:
      "Homemade Burger, Caramelised Tomato, Caramelised Red Onion, Baby Gem, Pickles, Saffron Mayo, Smoked Cheese & Chips",
  },
  {
    name: "Chicken Burger",
    price: 19,
    description:
      "Chicken breast, Cornflakes, Red cabbage, Caesar sauce, Tomato, Cheddar & Chips",
  },
  {
    name: "Veggie Burger",
    price: 16,
    description:
      "Grilled Aubergine, Halloumi, Mixed Leaves, Tomato, Hummus & Sweet Potato Fries",
  },
];

const goldMenu = [
  {
    name: "Wagyu Beef (250G)",
    price: 280,
  },
  {
    name: "Tomahawk (650G-750G)",
    price: 250,
  },
  {
    name: "Fillet Minion (200G-250G)",
    price: 100,
  },
  {
    name: "Dallas (400G-500G)",
    price: 280,
  },
  {
    name: "Sirloin (260G-300G)",
    price: 85,
  },
  {
    name: "Lamb Chops",
    price: 80,
  },
  {
    name: "Nova Beef Burger",
    price: 80,
  },
];

const sidesMenu = [
  {
    name: "Mixed Mushrooms (GF)",
    price: 8,
    description: "Panfried Seasonal Mushrooms, Garlic & Parsley",
  },
  {
    name: "Crushed Potatoes",
    price: 6,
    description: "Parmesan & Mixed Herbs",
  },
  {
    name: "Homemade Mac & Cheese (V)",
    price: 10,
    description: "Parmesan & Truffle",
  },
  {
    name: "Grilled Asparagus (GF)",
    price: 6,
    description: "Lemon Zest & Olive Oil",
  },
  {
    name: "Purple Broccoli (GF)",
    price: 7,
    description: "Panfried, Garlic & Sweet Chilli",
  },
  {
    name: "Mixed Vegetables",
    price: 9,
    description: "Crushed Potatoes, Asparagus, Broccoli & Oyster Mushroom",
  },
  {
    name: "Mashed Potato (French Style)",
    price: 8,
    description: "Creamy Mash, Butter Milk & Nutmeg",
  },
  {
    name: "House Seasoned Chips",
    price: 6,
  },
  {
    name: "Sweet Potato Fries",
    price: 7,
  },
  {
    name: "Steamed Edamame (Salted or Spicy)",
    price: 7,
  },
  {
    name: "Seasonal Mixed Salad (GF)",
    price: 5,
  },
  {
    name: "Bread Basket",
    price: 4,
  },
  {
    name: "Add Truffle",
    price: 3.5,
  },
];

const sushi = [
  {
    name: "Sushi Platter",
    price: 90,
    description:
      "Nigiri and Sashimi 2pcs Tuna, Salmon, Seabass, Hamachi, Octopus, and Unagi, 2pcs Nigiri Prawns, 8pcs Salmon Avocado Roll and 8pcs Dragon Roll",
  },
  {
    name: "Three Variation Sashimi (6 pcs)",
    price: 25,
    description: "Choose one or mix & match: Salmon, Sea Bass, Tuna, Prawns",
  },
  {
    name: "Five Variation Sashimi (15 pcs)",
    price: 45,
    description:
      "Choose one or mix & match: Salmon, Tuna, Hamachi, Unagi, Prawns",
  },
  {
    name: "Three Variation Nigiri (9 pcs)",
    price: 22,
    description: "Choose one or mix & match: Salmon, Sea Bass, Tuna, Prawns",
  },
  {
    name: "Six Variation Nigiri (12 pcs)",
    price: 38,
    description:
      "Choose one or mix & match: Salmon, Tuna, Hamachi, Unagi, Prawns, Octopus",
  },
];

const roll = [
  {
    name: "Rainbow",
    price: 19,
    description:
      "Crab Roll topped with Salmon, Tuna, Unagi, Prawns, Avocado, and Spicy Mayo",
  },
  {
    name: "Sushi Ebi",
    price: 20,
    description:
      "Deep fried Futomaki roll filled with Tempura Prawns, Cucumber, and Avocado finished with Nova Sushi Sauce",
  },
  {
    name: "Vegetable (V)",
    price: 15,
    description:
      "Kanpyo Asparagus, Cucumber, Red and Yellow Bell Peppers, and Avocado in Sweet Soy Sauce",
  },
  {
    name: "Seared Salmon",
    price: 18,
    description:
      "Salmon Avocado and Cucumber Roll topped with Seared Salmon, Spicy Mayo, and Tobiko",
  },
  {
    name: "Avocado Salmon",
    price: 19,
    description: "Raw Salmon, Avocado, Cucumber, Mayo, Sesame Seeds",
  },
  {
    name: "California Roll",
    price: 17,
    description:
      "Crab Meat Roll with Avocado, Cucumber, Kampyo, and Tobiko in Mayo Sauce",
  },
  {
    name: "Dragon Roll",
    price: 19,
    description:
      "Tempura Prawn, Cucumber Roll topped with Avocado in Tobiko, Crispy Onion, Teriyaki, and Mayo Sauce",
  },
  {
    name: "Pirikara Tuna",
    price: 16,
    description:
      "Tuna and Cucumber inside, topped with Tuna Meat, Sichimi Powder, Spicy Sauce, and Green Chillies",
  },
];

const classicOysters = [
  { name: "3pcs", price: 12 },
  { name: "6pcs", price: 20 },
];

const ALaCarta: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#070d0f] px-4 py-12 md:px-[50px] 2xl:px-[120px]">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center justify-center">
          <p className="w-full max-w-[1000px] text-center font-inter text-sm font-[400] text-white md:text-base">
            Welcome to Nova Park Royal: A Culinary Journey of Mediterranean and
            Pan-Asian Flavours. At Nova Park Royal, we invite you to indulge in
            an exquisite dining experience that blends the best of Mediterranean
            cuisine with a delightful Pan-Asian twist. Dive into our fresh sushi
            selection, where traditional techniques meet innovative flavours.
            Each roll is made with the finest ingredients, guaranteeing a
            delightful burst of taste in every bite. Our seafood dishes are
            expertly prepared, offering a perfect complement to your dining
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* first row */}
          <div className="flex flex-col gap-4">
            {/* 1 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                APPETISERS
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {appetisers.map((item, index) => (
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

            {/* 2 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
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

            {/* 3 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                Salads
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {salads.map((item, index) => (
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
          </div>

          {/* second row */}
          <div className="flex flex-col gap-4">
            {/* 1 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                Steak & Grill
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {steaks.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                      {item.name}
                    </h3>
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                      {item.price}
                    </h3>
                  </div>
                  <p className="font-open_sans text-sm font-[400] text-white">
                    {item.description}
                  </p>
                  <p className="font-open_sans text-sm font-[400] text-white">
                    {item.contains}
                  </p>
                </div>
              ))}
            </div>

            {/* 2 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                MAINS{" "}
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {mains.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
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

            {/* 3 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                PASTAS{" "}
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {pastas.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
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
          </div>

          {/* third row */}
          <div className="flex flex-col gap-4">
            {/* 1 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                SIGNATURE BURGERS
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {signatureBurgers.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
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

            {/* 2 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                24 CARAT GOLD DISHES
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {goldMenu.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                      {item.name}
                    </h3>
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                      {item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                SIDES
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {sidesMenu.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
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
          </div>

          {/* fourth row */}
          <div className="flex flex-col gap-4">
            {/* 1 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                CLASSIC ROCK OYSTERS
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {classicOysters.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <p className="font-open_sans text-sm font-[400] text-white">
                    Our oysters are only available on weekends
                  </p>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                      {item.name}
                    </h3>
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
                      {item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* 2 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                SUSHI/SASHIMI
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {sushi.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
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

            {/* 3 column */}
            <div className="flex flex-col gap-4 bg-[#0a1214] px-4 py-4 md:gap-6 md:px-8 md:py-8">
              <div className="relative w-fit pb-2 font-inter text-xl font-[500] uppercase text-primary">
                SPECIAL ROLL
                <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
                  <div className="h-[1px] w-3/5 bg-primary"></div>
                </div>
              </div>
              {roll.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-row justify-between">
                    <h3 className="font-open_sans flex flex-row text-base font-[500] text-white md:text-xl">
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
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="w-full max-w-[1000px] text-center font-inter text-sm font-[400] text-white md:text-base">
            Savour our mouthwatering steaks, grilled to perfection and seasoned
            with unique marinades that highlight Mediterranean spices. Whether
            you prefer a classic ribeye or a tender filet mignon, our grill
            masters ensure that each steak is cooked just the way you like
            it—juicy, flavourful, and unforgettable. Experience the comfort of
            our homemade pasta dishes, infused with Mediterranean influences.
            From rich, creamy sauces to vibrant, fresh ingredients, our pasta
            offerings are a fusion of flavours that will transport you to a
            world of culinary delight.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ALaCarta;
