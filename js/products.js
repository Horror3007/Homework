var products = [
    {
        id: 1,
        name: "Xracer headphones",
        category: "Headphones",
        price: 900,
        emoji: "🎧",
        desc: "Good quality headphones for gaming"
    },
    {
        id: 2,
        name: "RGB Xracer keyboard ",
        category: "Keyboards",
        price: 1350,
        emoji: "⌨️",
        desc: "Customizable RGB keyboard"
    },
    {
        id: 3,
        name: "logistep mouse",
        category: "Mouses",
        price: 1100,
        emoji: "🖱️",
        desc: "Comfortable mouse for work and gaming"
    },
    {
        id: 4,
        name: "4K HQ monitor",
        category: "Monitors",
        price: 2500,
        emoji: "🖥️",
        desc: "4K monitor 60cm"
    },
    {
        id: 5,
        name: "Mousepad Red",
        category: "accessories",
        price: 200,
        emoji: "🟥",
        desc: "Red colored Mousepad"
    },
    {
        id: 6,
        name: "Mousepad Blue",
        category: "accessories",
        price: 200,
        emoji: "🟦",
        desc: "Blue colored Mousepad"
    },
    {
        id: 7,
        name: "Ace Logic microphone",
        category: "Microphones",
        price: 200,
        emoji: "🎤",
        desc: "Good-Quality microphone for content-creation"
    },
    {
        id: 8,
        name: "RGB Bloodes mouse",
        category: "Mouses",
        price: 900,
        emoji: "🖱️",
        desc: "Customizable RGB mouse for gaming"
    },
    {
        id: 9,
        name: "Logistep sound-proof headphones",
        category: "Headphones",
        price: 2000,
        emoji: "🎧",
        desc: "Sound-proof headphones for comfortable work"
    },
    {
        id: 10,
        name: "RGB Xracer headphones",
        category: "Headphones",
        price: 1100,
        emoji: "🎧",
        desc: "Customizable RGB heaphones for gaming"
    },
    {
        id: 11,
        name: "Xracer headphones 2.3",
        category: "Headphones",
        price: 1500,
        emoji: "🎧",
        desc: "Good quality headphones with mic and better sound"
    },
    {
        id: 12,
        name: "Logistep mouse 2",
        category: "Mouses",
        price: 1500,
        emoji: "🖱️",
        desc: "A mouse for studing and working with comfort"
    },
    {
        id: 13,
        name: "Bloodes mouse 5.6",
        category: "Mouses",
        price: 1200,
        emoji: "🖱️",
        desc: "The newest mouse from Bloodes"
    },
    {
        id: 14,
        name: "HQ mouse",
        category: "Mouses",
        price: 1350,
        emoji: "🖱️",
        desc: "Mouse for multiple tasks for any person"
    },
    {
        id: 15,
        name: "Logistep Keyboard",
        category: "Keyboards",
        price: 1350,
        emoji: "⌨️",
        desc: "Confortable small keyboard"
    },
    {
        id: 16,
        name: "Keyboard HQ M7 Black",
        category: "Keyboards",
        price: 1000,
        emoji: "⌨️",
        desc: "Black keyboard from HQ"
    },
    {
        id: 17,
        name: "Keyboard HQ M7 White",
        category: "Keyboards",
        price: 1000,
        emoji: "⌨️",
        desc: "White keyboard from HQ"
    },
    {
        id: 18,
        name: "Keyboard HQ M7 Black",
        category: "Keyboards",
        price: 1000,
        emoji: "⌨️",
        desc: "Black keyboard from HQ"
    },
    {
        id: 19,
        name: "RGB Ace logic Microphone",
        category: "Microphones",
        price: 2300,
        emoji: "🎤",
        desc: "Customizable RGB microphone from Ace logic"
    },
    {
        id: 20,
        name: "Xracer Microphone",
        category: "Microphones",
        price: 1500,
        emoji: "🎤",
        desc: "Small but good mictorphone from Xracer"
    },
    {
        id: 21,
        name: "Logistep Monitor Black",
        category: "Monitors",
        price: 2100,
        emoji: "🖥️",
        desc: "Black monitor from Logistep"
    },
    {
        id: 22,
        name: "Xracer Monitor s-6",
        category: "Monitors",
        price: 2500,
        emoji: "🖥️",
        desc: "Elite display and good quality"
    },
    {
        id: 23,
        name: "Logistep Monitor White",
        category: "Monitors",
        price: 2000,
        emoji: "🖥️",
        desc: "White monitor from Logistep"
    }

];

function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products [i].id === id) return products [i];
    }

    return null;
}