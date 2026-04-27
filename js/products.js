var products = [
    {
        id: 1,
        name: "da binky",
        category: "Something ig",
        price: 1000,
        emoji: "👶",
        desc: "Dog with da binky"
    },
    {
        id: 2,
        name: "JACKPOT🎲🎲🎲",
        category: "Something ig",
        price: 777,
        emoji: "🎰",
        desc: "Hold on wait..."
    },
    {
        id: 3,
        name: "PEAR",
        category: "Food",
        price: 1000,
        emoji: "🍐",
        desc: "teto."
    },
    {
        id: 4,
        name: "Dang man",
        category: "Something ig",
        price: 1000,
        emoji: "😔",
        desc: "I was so close twin"
    },
    {
        id: 5,
        name: "💛piss💛",
        category: "mystery gift",
        price: 1000,
        emoji: "💛",
        desc: "Pihh."
    },
    {
        id: 6,
        name: "WOAH",
        category: "Something ig",
        price: 1000,
        emoji: "👀",
        desc: "Did you see that???"
    },
    {
        id: 7,
        name: "Truck",
        category: "Vechicle",
        price: 1000,
        emoji: "🚘",
        desc: "Get a free beer for buying "
    },
    {
        id: 8,
        name: "baguette",
        category: "Food",
        price: 1000,
        emoji: "🥖",
        desc: "I HATE FRENCH"
    }
];

function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products [i].id === id) return products [i];
    }

    return null;
}