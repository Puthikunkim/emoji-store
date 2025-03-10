import avocado from '../assets/images/avocado.png';
import banana from '../assets/images/banana.png';
import bellPepper from '../assets/images/bell-pepper.png';
import blueberries from '../assets/images/blueberries.png';
import cherries from '../assets/images/cherries.png';
import coconut from '../assets/images/coconut.png';
import cucumber from '../assets/images/cucumber.png';
import eggplant from '../assets/images/eggplant.png';
import grapes from '../assets/images/grapes.png';
import greenApple from '../assets/images/green-apple.png';
import hotPepper from '../assets/images/hot-pepper.png';
import pumpkin from '../assets/images/jack-o-lantern.png';
import kiwi from '../assets/images/kiwi-fruit.png';
import lemon from '../assets/images/lemon.png';
import mango from '../assets/images/mango.png';
import melon from '../assets/images/melon.png';
import olive from '../assets/images/olive.png';
import peach from '../assets/images/peach.png';
import pear from '../assets/images/pear.png';
import pineapple from '../assets/images/pineapple.png';
import redApple from '../assets/images/red-apple.png';
import strawberry from '../assets/images/strawberry.png';
import tangerine from '../assets/images/tangerine.png';
import tomato from '../assets/images/tomato.png';
import watermelon from '../assets/images/watermelon.png';

export const fruits = [
    {
        id: 0,
        name: 'Avocado',
        price: 3,
        img: avocado,
        description: 'A fruit that is native to south-central Mexico, classified as a member of the flowering plant family Lauraceae.',
        category: ['Green', 'Brown', 'Vitamin E', 'Vitamin K'],
        family: 'Laurel',
        isFavourited: false,
        quantity: 3,
    },
    {
        id: 1,
        name: 'Banana',
        price: 5,
        img: banana,
        description: 'A long, curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.',
        category: ['Yellow', 'Vitamin C', 'Vitamin B6'],
        family: 'Other',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 2,
        name: 'Bell Pepper',
        price: 1.3,
        img: bellPepper,
        description: 'A fruit of the Capsicum annuum species, which are members of the nightshade family Solanaceae.',
        category: ['Green', 'Red', 'Yellow', 'Vitamin C'],
        family: 'Nightshade',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 3,
        name: 'Blueberries',
        price: 2.5,
        img: blueberries,
        description: 'A fruit that is native to North America, and is a flowering plant in the family Ericaceae.',
        category: ['Blue', 'Vitamin C', 'Vitamin K'],
        family: 'Berry',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 4,
        name: 'Cherries',
        price: 4,
        img: cherries,
        description: 'A small, round stone fruit that is typically bright or dark red.',
        category: ['Red', 'Vitamin C'],
        family: 'Rose',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 5,
        name: 'Coconut',
        price: 2.5,
        img: coconut,
        description: 'A fruit that is native to the tropical and subtropical regions of the world.',
        category: ['Brown', 'Vitamin C'],
        family: 'Palm',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 6,
        name: 'Cucumber',
        price: 1.5,
        img: cucumber,
        description: 'A fruit that is widely cultivated in the gourd family Cucurbitaceae.',
        category: ['Green', 'Vitamin K'],
        family: 'Gourd',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 7,
        name: 'Eggplant',
        price: 2,
        img: eggplant,
        description: 'A fruit that is native to the Indian subcontinent, and is a member of the nightshade family Solanaceae.',
        category: ['Purple', 'Vitamin K'],
        family: 'Nightshade',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 8,
        name: 'Grapes',
        price: 3,
        img: grapes,
        description: 'A fruit that grows in clusters of 15 to 300, and is a berry.',
        category: ['Purple', 'Vitamin C'],
        family: 'Berry',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 9,
        name: 'Green Apple',
        price: 2,
        img: greenApple,
        description: 'A fruit that is crisp, juicy, and is a member of the rose family Rosaceae.',
        category: ['Green', 'Vitamin C'],
        family: 'Rose',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 10,
        name: 'Hot Pepper',
        price: 1.5,
        img: hotPepper,
        description: 'A fruit that is a member of the Capsicum annuum species, which are members of the nightshade family Solanaceae.',
        category: ['Red', 'Vitamin C'],
        family: 'Nightshade',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 11,
        name: 'Pumpkin',
        price: 3,
        img: pumpkin,
        description: 'A fruit that is native to North America, and is a member of the gourd family Cucurbitaceae.',
        category: ['Orange', 'Vitamin A'],
        family: 'Gourd',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 12,
        name: 'Kiwi',
        price: 2.5,
        img: kiwi,
        description: 'A fruit that is native to China, and is a member of the berry family Actinidiaceae.',
        category: ['Brown', 'Vitamin C'],
        family: 'Berry',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 13,
        name: 'Lemon',
        price: 1.5,
        img: lemon,
        description: 'A fruit that is native to South Asia, and is a member of the citrus family Rutaceae.',
        category: ['Yellow', 'Vitamin C'],
        family: 'Citrus',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 14,
        name: 'Mango',
        price: 3,
        img: mango,
        description: 'A fruit that is native to South Asia, and is a member of the cashew family Anacardiaceae.',
        category: ['Yellow', 'Vitamin C'],
        family: 'Cashew',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 15,
        name: 'Melon',
        price: 2,
        img: melon,
        description: 'A fruit that is native to Central Asia, and is a member of the gourd family Cucurbitaceae.',
        category: ['Green', 'Vitamin C'],
        family: 'Gourd',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 16,
        name: 'Olive',
        price: 3,
        img: olive,
        description: 'A fruit that is native to the Mediterranean Basin, and is a member of the laurel family Lauraceae.',
        category: ['Green', 'Vitamin E'],
        family: 'Laurel',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 17,
        name: 'Peach',
        price: 2.5,
        img: peach,
        description: 'A fruit that is native to Northwest China, and is a member of the rose family Rosaceae.',
        category: ['Orange', 'Vitamin C'],
        family: 'Rose',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 18,
        name: 'Pear',
        price: 2,
        img: pear,
        description: 'A fruit that is native to coastal and mildly temperate regions of the Old World.',
        category: ['Green', 'Vitamin C'],
        family: 'Rose',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 19,
        name: 'Pineapple',
        price: 3,
        img: pineapple,
        description: 'A fruit that is native to South America, and is a member of the cashew family Bromeliaceae.',
        category: ['Yellow', 'Vitamin C'],
        family: 'Cashew',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 20,
        name: 'Red Apple',
        price: 2,
        img: redApple,
        description: 'A fruit that is crisp, juicy, and is a member of the rose family Rosaceae.',
        category: ['Red', 'Vitamin C'],
        family: 'Rose',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 21,
        name: 'Strawberry',
        price: 2.5,
        img: strawberry,
        description: 'A fruit that is native to North America, and is a member of the rose family Rosaceae.',
        category: ['Red', 'Vitamin C'],
        family: 'Rose',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 22,
        name: 'Tangerine',
        price: 1.5,
        img: tangerine,
        description: 'A fruit that is native to East Asia, and is a member of the citrus family Rutaceae.',
        category: ['Orange', 'Vitamin C'],
        family: 'Citrus',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 23,
        name: 'Tomato',
        price: 1.5,
        img: tomato,
        description: 'A fruit that is native to western South America, and is a member of the nightshade family Solanaceae.',
        category: ['Red', 'Vitamin'],
        family: 'Nightshade',
        isFavourited: false,
        quantity: 0,
    },
    {
        id: 24,
        name: 'Watermelon',
        price: 2.5,
        img: watermelon,
        description: 'A fruit that is native to Southern Africa, and is a member of the gourd family Cucurbitaceae.',
        category: ['Green', 'Vitamin C'],
        family: 'Gourd',
        isFavourited: false,
        quantity: 0,
    }
];