import { cn } from "@/lib/utils"

const cocktail1 = [
    {
        head: "Nova island ice tea",
        number: "16",
        description: "Grey Goose Vodka, Don Juilo Tequila, Bombay Premier Gin, Barcardi Carta Blanca, Blue Orange Liqueur, Fresh Pineapple and Lime Juice"
    },
    {
        head: "Cocconana",
        number: "14",
        description: "Barcardi Coconut and Pineapple Spiced Rum, Liquor 43, Coconut and Banana Syrup, Pinapple and Lime Juice"
    },
    {
        head: "Bramble Rumble",
        number: "14",
        description: "Bomnay Bramble Ezquiste Gin, Aperol Aperitif, Chambord Liqueur, Raspberry Puree and Lemon Juice"
    },
    {
        head: "Greenovation",
        number: "15",
        description: "Casamigo's Finest Silver Tequila, Midori Liqueur, Apple and Lime Juice, Blue Curacao Liqueur"
    },
    {
        head: "Smoke and Fashion",
        number: "18",
        description: "Smoke infused Cherry Wood with Jack Daniels Single Barrel Whiskey, Luxurious Luxardo Liqueur, Angostura, Lemon and Orange Bitters and Sugar"
    },
    {
        head: "Elderose Spritz",
        number: "14",
        description: "St Germain Elderflower Liqueur, Pink Rose Syrup, Grenadine, Lime Juice and Prosecco"
    },
]

const cocktail2 = [
    {
        head: "Nova Express",
        number: "15",
        description: "Belvedere Vodka, Coffee Liqueur, Amaretto Disaronno infused with Turkish Coffee and Vanilla Syrup"
    },
    {
        head: "Ice Creamy Heaven",
        number: "15",
        description: "Havana 3 Years, Havana 7 Years, Frangelico Hazelnut Liqueur, Bailey's Chocolat Luxe Irish Cream, Double Cream and Chocolate Syrup"
    },
    {
        head: "Big Boy Nova",
        number: "49",
        description: "A big sharing bowl of Grey Goose, Belvedere and Ciroc, Bacardi 8 year, Bombay Gin, Patron Anejo Tequila, Peach Schnapps, Cazacabel Honey Tequila mixed with Tropical Guava Juice, Cranberry, Orange Juice and a lot of Exotic Fruits"
    }
];

const novaClassics = [
    {
        head: "Renovate",
        number: "15",
        description: "Bacardi 4 Years, Bombay Sapphire Gin, Bacardi Blanca, Mango and Lime"
    },
    {
        head: "Novas",
        number: "15",
        description: "Bacardi 8 Years, Watermelon and Grenadine Syrup with Lime Juice and Guava Juice"
    },
];

const cocktail3 = [
    {
        head: "NOVASTAR MARTINI",
        number: "16",
        description: "Ciroc Passionfruit Vodka, Passionfruit Flavoured Liqueur, Syrup, Passionfruit Juice and Puree with Vanilla Syrup"
    },
    {
        head: "BUBBLEPOLITAN",
        number: "15",
        description: "Raspberry Vodka, Bubblegum Syrup, Cranberry Juice, Raspberry Puree"
    }
];

const mocktails = [
    {
        head: "TUTTI FRUITI",
        number: "9",
        description: "Mango-based springtime delicacy, Grenadine with Banana, Pineapple, and Lemon Juice"
    },
    {
        head: "I AM BLUE",
        number: "9",
        description: "Blue Orange attraction with Lychee and Lemon Juice topped with Lemonade"
    },
    {
        head: "STRAWBERRY CHOCO-QUIRI",
        number: "10",
        description: "Non-Alcoholic Strawberry and Chocolate Whipped Creamy Delight! Binding it all with Lime and Cranberry Juice"
    },
    {
        head: "TROPICAL PASSION",
        number: "9",
        description: "Pineapple and Cranberry Juice mixed with Coconut Cream, Lemon Juice for the Citrusy, Grenadine for the Sweetness, Passionfruit for the finale"
    },
    {
        head: "MIXITO",
        number: "9",
        description: "Non-Alcoholic Mojito, Mint and Coconut mixed with Lychee, Mango, and Pineapple Juice. Also comes in Strawberry, Raspberry, Peach, and Passionfruit"
    },
    {
        head: "NOVIOLETTE",
        number: "9",
        description: "Floral Violet Syrup spiced with Ginger, paved with Lime and Lychee aftertaste"
    }
];

const wines = [
    {
        name: "Sauvignon Blanc, Marquis de Goulaine, France",
        prices: {
            ml175: 9,
            ml250: 12.25,
            bottle: 36
        }
    },
    {
        name: "Pinot Grigio, Bericanto, Italy",
        prices: {
            ml175: 9.50,
            ml250: 12.50,
            bottle: 37
        }
    },
    {
        name: "Bio 3 Passo Bianco, Italy",
        prices: {
            ml175: 11,
            ml250: 14.25,
            bottle: 43
        }
    },
    {
        name: "Gavi, La Soraia Docg, Italy",
        prices: {
            ml175: 11.75,
            ml250: 14.75,
            bottle: 45
        }
    },
    {
        name: "Vermentino Dolianova Prendas Doc, Italy",
        prices: {
            ml175: 12,
            ml250: 15,
            bottle: 48
        }
    },
    {
        name: "Malat Crazy Creatures Gruner Veltliner, Austria",
        prices: {
            ml175: 12.50,
            ml250: 15.50,
            bottle: 52
        }
    },
    {
        name: "Chardonnay, J Moreau Et Fils Chablis, France",
        prices: {
            ml175: 14,
            ml250: 17.75,
            bottle: 60
        }
    },
    {
        name: "Sauvignon Blanc, Matahiwi, New Zealand",
        prices: {
            bottle: 62
        }
    },
    {
        name: "Domaine Morey Coffinet La Romanee, France",
        prices: {
            bottle: 435
        }
    }
];

const sake = [
    {
        name: "Akashi-Tai Kunmai Ginjo Sparkling Sake 30cl",
        prices: {
            bottle: 90
        }
    },
    {
        name: "Akashi-Tai Siraume Umeshu Sake 50cl",
        prices: {
            bottle: 84
        }
    }
];

const champagneAndProsecco = [
    {
        name: "Bericanto Prosecco DOC, Italy",
        prices: {
            ml175: 12,
            bottle: 37
        }
    },
    {
        name: "Col Vetoraz DOCG Extra Dry Valdobbiadene, Italy",
        prices: {
            ml175: 14,
            bottle: 59
        }
    },
    {
        name: "Bottega Gold Prosecco, Italy",
        prices: {
            ml175: 17,
            bottle: 80
        }
    },
    {
        name: "Moet & Chandon Brut Imperial",
        prices: {
            ml175: 14,
            bottle: 96
        }
    },
    {
        name: "Bollinger Brut Special",
        prices: {
            ml175: 18,
            bottle: 130
        }
    },
    {
        name: "Laurent Perrier Cuvee Rose, France",
        prices: {
            bottle: 250
        }
    },
    {
        name: "Lamborghini Champagne",
        prices: {
            bottle: 400
        }
    },
    {
        name: "Perrier-Jouet Belle Epoque",
        prices: {
            bottle: 480
        }
    },
    {
        name: "Veuve Clicquot La Grande Dame",
        prices: {
            bottle: 500
        }
    },
    {
        name: "Dom Perignon Vintage 2013",
        prices: {
            bottle: 600
        }
    },
    {
        name: "Armand de Brignac Gold Champagne",
        prices: {
            bottle: 750
        }
    },
    {
        name: "Armand de Brignac Rose, France",
        prices: {
            bottle: 1000
        }
    },
    {
        name: "Dom Perignon Vintage 2010 1.5ltr",
        prices: {
            bottle: 3000
        }
    }
];

const redWines = [
    {
        name: "Merlot, Central Monte, Chile",
        prices: {
            ml175: 8,
            ml250: 10.50,
            bottle: 32
        }
    },
    {
        name: "Malbec Casarena Areyna, Spain",
        prices: {
            ml175: 9,
            ml250: 12.25,
            bottle: 36
        }
    },
    {
        name: "Progresco Malbec Syrah, Argentina",
        prices: {
            ml175: 11.50,
            ml250: 14.50,
            bottle: 45
        }
    },
    {
        name: "Gran Maestro Primitivo Di Manduria DOC, Italy",
        prices: {
            ml175: 11.25,
            ml250: 14.75,
            bottle: 48
        }
    },
    {
        name: "Rioja Faustino Rivero Reserve Doca, Argentina",
        prices: {
            ml175: 12.50,
            ml250: 15.50,
            bottle: 51
        }
    },
    {
        name: "Chateau Cissac Bourgeois Haut Medoc, France",
        prices: {
            ml175: 13.75,
            ml250: 16.75,
            bottle: 56
        }
    },
    {
        name: "Tempus Two Pewter Series Shiraz, Australia",
        prices: {
            ml175: 14.50,
            ml250: 17.50,
            bottle: 59
        }
    },
    {
        name: "Pinot Noir, Joel Gott, USA",
        prices: {
            ml175: 16.75,
            ml250: 19.75,
            bottle: 65
        }
    },
    {
        name: "Monteci Amarone Della Valpolicella, Italy",
        prices: {
            bottle: 115
        }
    },
    {
        name: "Malbec, Finca Sophenia, Argentina 1.5ltr",
        prices: {
            bottle: 130
        }
    },
    {
        name: "Donatella Colombini Brunello Di Montalcino 1.5ltr",
        prices: {
            bottle: 467
        }
    }
];

const alcoholFreeWines = [
    {
        name: "Belle and Co Alcohol Free Sparkling",
        prices: {
            ml175: 8,
            bottle: 33
        }
    },
    {
        name: "Belle and Co Alcohol Free Sparkling Rose",
        prices: {
            ml175: 8,
            bottle: 33
        }
    }
];

const beers = [
    {
        name: "Peroni",
        price: 7
    },
    {
        name: "Guinness",
        price: 7
    },
    {
        name: "Corona",
        price: 7
    }
];

const roseWines = [
    {
        name: "L’Oasis, France",
        prices: {
            ml175: 10,
            ml250: 12,
            bottle: 40
        }
    },
    {
        name: "Dolianova Roasado Cannonau, Italy",
        prices: {
            ml175: 12,
            ml250: 14,
            bottle: 59
        }
    },
    {
        name: "Whispering Angel, France",
        prices: {
            bottle: 65
        }
    }
];

const vodkas = [
    {
        name: "Ciroc",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Ciroc Red Berry / Pomegranate",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Ciroc Passionfruit",
        prices: {
            ml50: 12,
            bottle: 170
        }
    },
    {
        name: "Belvedere",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Greygoose",
        prices: {
            ml50: 12,
            bottle: 180
        }
    },
    {
        name: "Greygoose L’Orange / La Poire",
        prices: {
            ml50: 14,
            bottle: 180
        }
    },
    {
        name: "Greygoose Le Citron",
        prices: {
            ml50: 12,
            bottle: 180
        }
    },
    {
        name: "Crystal Head",
        prices: {
            ml50: 15,
            bottle: 200
        }
    },
    {
        name: "Greygoose 1.5ltr Magnum",
        prices: {
            bottle: 500
        }
    }
];

const whiskies = [
    {
        name: "Jack Daniels",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Jameson",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Monkey Shoulder",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Woodford Reserve",
        prices: {
            ml50: 12,
            bottle: 170
        }
    },
    {
        name: "Maker’s Mark",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Johnnie Walker Black",
        prices: {
            ml50: 16,
            bottle: 165
        }
    },
    {
        name: "Nikka from the Barrel",
        prices: {
            ml50: 15,
            bottle: 210
        }
    },
    {
        name: "Aberfeldy 12 Years",
        prices: {
            ml50: 15,
            bottle: 200
        }
    },
    {
        name: "Jack Daniels Single Barrel",
        prices: {
            ml50: 18,
            bottle: 260
        }
    },
    {
        name: "Johnnie Walker Gold",
        prices: {
            ml50: 15,
            bottle: 210
        }
    },
    {
        name: "Johnnie Walker Blue",
        prices: {
            ml50: 45,
            bottle: 650
        }
    },
    {
        name: "Macallan 18 Years",
        prices: {
            ml50: 70,
            bottle: 950
        }
    }
];

const rums = [
    {
        name: "Bacardi Carta Blanca",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Bacardi Spiced / Caribbean Spiced",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Bacardi Ocho Anos",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Bacardi Cuatro Anos",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Havana Club 3 Years",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Havana Club 7 Years",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Koko Kanu",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Kraken",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Plantation 3 Stars",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Wray & Nephew",
        prices: {
            ml50: 12,
            bottle: 165
        }
    }
];

const gins = [
    {
        name: "Bombay Sapphire",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Bombay Premier Cru",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Bombay Lemon",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Roku",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Mermaid Pink",
        prices: {
            ml50: 14,
            bottle: 180
        }
    },
    {
        name: "Hendricks",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Tanqueray",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Malfy Lemon / Blood Orange",
        prices: {
            ml50: 12,
            bottle: 170
        }
    },
    {
        name: "Monkey 47",
        prices: {
            ml50: 14,
            bottle: 180
        }
    },
    {
        name: "Whitley Neill Raspberry / Rhubarb and Ginger",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Whitley Neill Pink Grapefruit",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Martin’s Miller",
        prices: {
            ml50: 14,
            bottle: 180
        }
    }
];

const cognacs = [
    {
        name: "Courvoisier VS",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Hennessy VS",
        prices: {
            ml50: 12,
            bottle: 165
        }
    },
    {
        name: "Hennessy XO",
        prices: {
            ml50: 40,
            bottle: 600
        }
    },
    {
        name: "MARTELL XO",
        prices: {
            ml50: 45,
            bottle: 630
        }
    },
    {
        name: "Remy Martin",
        prices: {
            ml50: 45,
            bottle: 630
        }
    }
];

const tequilas = [
    {
        name: "Cazcabel Honey / Cafe",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Rose Tequila",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Patron Silver",
        prices: {
            ml50: 14,
            bottle: 190
        }
    },
    {
        name: "Patron Resposado",
        prices: {
            ml50: 15,
            bottle: 220
        }
    },
    {
        name: "Patron Anejo",
        prices: {
            ml50: 16,
            bottle: 230
        }
    },
    {
        name: "Casamigos Silver / Mezcal",
        prices: {
            ml50: 22,
            bottle: 320
        }
    },
    {
        name: "Reposado Clase Azul",
        prices: {
            ml50: 55,
            bottle: 700
        }
    },
    {
        name: "Don Julio 1942 Anejo",
        prices: {
            ml50: 65,
            bottle: 800
        }
    }
];

const bar = [
    {
        name: "Amaretto Disaronno",
        prices: {
            ml50: 12,
            bottle: 150
        }
    },
    {
        name: "Disaronno Velvet",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Aperol",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Baileys",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Cachaca",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Campari",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Chambord",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Fernet Branca",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Jagermeister",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Limoncello",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Liquor 43",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Midori",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Pimm’s",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Pisco",
        prices: {
            ml50: 12,
            bottle: 160
        }
    },
    {
        name: "Sambuca",
        prices: {
            ml50: 12,
            bottle: 160
        }
    }
];

const waterOptions = [
    {
        name: "VOSS Sparkling",
        prices: {
            small: 6,
            large: 8.50
        }
    },
    {
        name: "VOSS Still",
        prices: {
            small: 6,
            large: 8.50
        }
    },
    {
        name: "Sparkling/Still",
        prices: {
            small: 4,
            large: 5.50
        }
    }
];

const softDrinks = [
    { name: "Coke", price: 4.50 },
    { name: "Diet Coke", price: 4.50 },
    { name: "Coke Zero", price: 4.50 },
    { name: "Lemonade", price: 4.50 },
    { name: "Fanta", price: 4.50 },
    { name: "Ginger Beer", price: 4.50 },
    { name: "Ginger Ale", price: 4.50 },
    { name: "Red Bull", price: 4.50 },
    { name: "Tonic Water", price: 3.50 },
    { name: "Light Tonic Water", price: 3.50 },
    { name: "Soda Water", price: 3.50 }
];

const flavoredLemonades = [
    { name: "Red Strawberry Lemonade", price: 5.25 },
    { name: "Blue Orange Lemonade", price: 5.25 },
    { name: "Purple Violet Lemonade", price: 5.25 },
    { name: "Green Mint Lemonade", price: 5.25 }
];

const freshlySqueezedJuices = [
    { name: "Freshly Squeezed Orange", price: 6 },
    { name: "Freshly Squeezed Apple", price: 6 },
    { name: "Freshly Squeezed Carrot", price: 6 }
];

const juices = [
    { name: "Cranberry Juice", price: 3.50 },
    { name: "Mango Juice", price: 3.50 },
    { name: "Guava Juice", price: 3.50 },
    { name: "Lychee Juice", price: 3.50 },
    { name: "Passionfruit Juice", price: 3.50 },
    { name: "Pineapple Juice", price: 3.50 }
];

const hotDrinks = [
    { name: "Espresso", price: 3 },
    { name: "Double Espresso", price: 3.50 },
    { name: "Americano", price: 3.50 },
    { name: "Latte", price: 4 },
    { name: "Cappuccino", price: 4 },
    { name: "Hot Chocolate", price: 4 },
    { name: "Iced Caramel/Vanilla Latte", price: 5 },
    { name: "Turkish Coffee", price: 5 },
    { name: "Turkish Tea", price: 3 },
    { name: "Earl Grey Tea", price: 3 },
    { name: "Green Tea", price: 3 },
    { name: "English Breakfast Tea", price: 3 },
    { name: "Fresh Mint Tea", price: 3 }
];


const Drinks = ({ }) => {
    return (
        <section className="w-full h-fit py-12 px-4 flex flex-col gap-6 justify-center items-center">
            <div className="w-full max-w-[1300px] flex flex-col-reverse md:flex-row gap-4">
                <div className="w-full columns-1 md:columns-2 space-y-2 gap-3">

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {cocktail1.map((item, index) => (
                            <div className={cn("flex flex-col justify-center items-center gap-2 border-b-[0.5px] pb-4",
                                cocktail1.length - 1 === index && "border-b-0"
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[600] text-2xl uppercase">{item.head}</p>
                                <p className="font-opens text-[#6C7F85] font-[400] max-w-[300px] text-xl">{item.number}</p>
                                <p className="text-[#CCD8DC] font-opens text-base font-[300] text-center max-w-[500px]">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {cocktail2.map((item, index) => (
                            <div className={cn("flex flex-col justify-center items-center gap-2 border-b-[0.5px] pb-4",
                                cocktail2.length - 1 === index && "border-b-0"
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[600] text-2xl uppercase">{item.head}</p>
                                <p className="font-opens text-[#6C7F85] font-[400] max-w-[300px] text-xl">{item.number}</p>
                                <p className="text-[#CCD8DC] font-opens text-base font-[300] text-center max-w-[500px]">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Nova Classics
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {novaClassics.map((item, index) => (
                            <div className={cn("flex flex-col justify-center items-center gap-2 border-b-[0.5px] pb-4",
                                novaClassics.length - 1 === index && "border-b-0"
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[600] text-2xl uppercase">{item.head}</p>
                                <p className="font-opens text-[#6C7F85] font-[400] max-w-[300px] text-xl">{item.number}</p>
                                <p className="text-[#CCD8DC] font-opens text-base font-[300] text-center max-w-[500px]">{item.description}</p>
                            </div>
                        ))}
                        <div className="w-full flex justify-center items-center">
                            <p className="text-[#CCD8DC] font-opens text-base font-[300] text-center max-w-[500px]">Please Note: Some of our cocktails will contain allergens, please ask your server for further information.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Cocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {cocktail3.map((item, index) => (
                            <div className={cn("flex flex-col justify-center items-center gap-2 border-b-[0.5px] pb-4",
                                cocktail3.length - 1 === index && "border-b-0"
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[600] text-2xl uppercase">{item.head}</p>
                                <p className="font-opens text-[#6C7F85] font-[400] max-w-[300px] text-xl">{item.number}</p>
                                <p className="text-[#CCD8DC] font-opens text-base font-[300] text-center max-w-[500px]">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Mocktails
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {mocktails.map((item, index) => (
                            <div className={cn("flex flex-col justify-center items-center gap-2 border-b-[0.5px] pb-4",
                                mocktails.length - 1 === index && "border-b-0"
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[600] text-2xl uppercase">{item.head}</p>
                                <p className="font-opens text-[#6C7F85] font-[400] max-w-[300px] text-xl">{item.number}</p>
                                <p className="text-[#CCD8DC] font-opens text-base font-[300] text-center max-w-[500px]">{item.description}</p>
                            </div>
                        ))}
                        <div className="w-full flex justify-center items-center">
                            <p className="text-[#CCD8DC] font-opens text-base font-[300] text-center max-w-[500px]">Please Note: some of our cocktails will contain allergens, please ask your server for further information</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Wine List
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <p className="uppercase text-base font-inter font-[500] text-primary">White</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">175ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">250ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {wines.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/3 flex justify-between items-center gap-6 md:gap-10 pl-6 md:pl-0">
                                    <p className="text-[#CCD8DC] font-opens font-[500] text-xs md:text-base text-center">{item.prices.ml175}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml250}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Wine & Beer List
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <p className="uppercase text-base font-inter font-[500] text-primary">Sake</p>
                        {sake.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/3 flex justify-end items-center gap-6 md:gap-10 pl-6 md:pl-0">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">CHAMPAGNE AND SPARKLING</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">175ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {champagneAndProsecco.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens font-[500] text-xs md:text-base text-center">{item.prices.ml175}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">Red</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">175ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">250ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {redWines.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/3 flex justify-between items-center gap-6 md:gap-10 pl-6 md:pl-0">
                                    <p className="text-[#CCD8DC] font-opens font-[500] text-xs md:text-base text-center">{item.prices.ml175}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml250}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">NON ALCOHOLIC CHAMPAGNE</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">175ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {alcoholFreeWines.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens font-[500] text-xs md:text-base text-center">{item.prices.ml175}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">Beer</p>
                        {beers.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-6 md:gap-10 pl-6 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">Rose</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">175ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">250ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {roseWines.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/3 flex justify-between items-center gap-6 md:gap-10 pl-6 md:pl-0">
                                    <p className="text-[#CCD8DC] font-opens font-[500] text-xs md:text-base text-center">{item.prices.ml175}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml250}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Spirits
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <p className="uppercase text-base font-inter font-[500] text-primary">VODKA</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">50ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {vodkas.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml50}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Spirits
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <p className="uppercase text-base font-inter font-[500] text-primary">Whiskey</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">50ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {whiskies.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml50}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">Rum</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">50ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {rums.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml50}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">Gin</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">50ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {gins.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml50}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                        <div className="w-full flex justify-center items-center">
                            <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[300] text-center max-w-[500px]">Please note that 25ml measure is also available</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">BRANDY AND COGNAC</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">50ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {cognacs.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml50}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Spirits
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <p className="uppercase text-base font-inter font-[500] text-primary">TEQUILA</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">50ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {tequilas.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml50}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">BAR’S KEEP SELECTION</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">50ml</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Bottle</p>
                        </div>
                        {bar.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.ml50}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.bottle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">WATER</p>
                        <div className="w-full flex justify-end items-center gap-3 md:gap-6">
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Small</p>
                            <p className="uppercase text-xs md:text-base font-inter font-[500] text-white">Large</p>
                        </div>
                        {waterOptions.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-1/4 md:w-1/4 flex justify-between items-center gap-6 md:gap-10 pl-0 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.small}</p>
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.prices.large}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            soft drinks
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <p className="uppercase text-base font-inter font-[500] text-primary">Soft Drinks</p>
                        {softDrinks.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-6 md:gap-10 pl-6 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">FIZZY LEMONADES</p>
                        {flavoredLemonades.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-6 md:gap-10 pl-6 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">FRESH JUICES</p>
                        {freshlySqueezedJuices.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-6 md:gap-10 pl-6 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            Soft Drinks
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <p className="uppercase text-base font-inter font-[500] text-primary">FRESH JUICES</p>
                        {juices.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-6 md:gap-10 pl-6 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="w-full flex flex-col gap-4 py-7 px-4 md:px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <p className="uppercase text-base font-inter font-[500] text-primary">FRESH JUICES</p>
                        {hotDrinks.map((item, index) => (
                            <div className={cn("flex justify-between items-start gap-2",
                            )} key={index}>
                                <p className="text-[#CCD8DC] font-opens font-[400] text-xs md:text-base uppercase max-w-[100px] md:max-w-[270px]">{item.name}</p>
                                <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-6 md:gap-10 pl-6 md:pl-6">
                                    <p className="text-[#CCD8DC] font-opens text-xs md:text-base font-[500] text-center">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="text-[#CCD8DC] font-opens text-base italic font-[300] text-center max-w-[500px]">A discretionary 12.5% service charge will be added to every bill.</p>
            </div>
        </section>
    )
}

export default Drinks