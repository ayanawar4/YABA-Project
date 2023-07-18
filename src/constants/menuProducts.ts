import { StaticImageData } from 'next/image';
import firstMenuItem from '../assets/menu-item-1.png'
import secondMenuItem from '../assets/menu-item-2.png'
import thirdMenuItem from '../assets/menu-item-3.png'
import fourthMenuItem from '../assets/menu-item-4.png'
import fifthMenuItem from '../assets/menu-item-5.png'
import sixthMenuItem from '../assets/menu-item-6.png'
import seventhMenuItem from '../assets/menu-item-7.png'
import eighthMenuItem from '../assets/menu-item-8.png'

export interface MenuItem {
    id: number,
    name: string,
    imageSrc: StaticImageData,
    imageAlt: string,
}


export type MenuCategory = MenuItem[];

export interface  MenuProductType {
  [category: string]: MenuCategory;
}

export const menuProducts : MenuProductType = {

    hotSetters: [
        {
            id: 1,
            name: 'Chips Karrada',
            imageSrc: firstMenuItem,
            imageAlt: "Chips Karrada",
        },
        {
            id: 2,
            name: 'Black Kubba',
            imageSrc: secondMenuItem,
            imageAlt: "Black Kubba",
        },
        {
            id: 3,
            name: 'Smoked Kubba',
            imageSrc: thirdMenuItem,
            imageAlt: "Smoked Kubba",
        },
        {
            id: 4,
            name: 'Gus Taco',
            imageSrc: fourthMenuItem,
            imageAlt: "Gus Taco",
        },
        {
            id: 5,
            name: 'Aroog',
            imageSrc: fifthMenuItem,
            imageAlt: "Aroog",
        },
        {
            id: 6,
            name: 'Yaki Liver',
            imageSrc: sixthMenuItem,
            imageAlt: "Yaki Liver",
        },

    ],
    soups: [
        {
            id: 1,
            name: 'Yaki Lamb',
            imageSrc: eighthMenuItem,
            imageAlt: "Yaki Lamb",
        },
        {
            id: 2,
            name: 'Smoked Kubba',
            imageSrc: thirdMenuItem,
            imageAlt: "Smoked Kubba",
        },
        {
            id: 3,
            name: 'Gus Taco',
            imageSrc: fourthMenuItem,
            imageAlt: "Gus Taco",
        },
        {
            id: 4,
            name: 'Aroog',
            imageSrc: fifthMenuItem,
            imageAlt: "Aroog",
        },
        {
            id: 5,
            name: 'Yaki Liver',
            imageSrc: sixthMenuItem,
            imageAlt: "Yaki Liver",
        },
        {
            id: 6,
            name: 'Aroog',
            imageSrc: fifthMenuItem,
            imageAlt: "Aroog",
        },

    ],
    salads: [
        {
            id: 1,
            name: 'Chips Karrada',
            imageSrc: firstMenuItem,
            imageAlt: "Chips Karrada",
        },
        {
            id: 2,
            name: 'Black Kubba',
            imageSrc: secondMenuItem,
            imageAlt: "Black Kubba",
        },
        {
            id: 3,
            name: 'Smoked Kubba',
            imageSrc: thirdMenuItem,
            imageAlt: "Smoked Kubba",
        },
        {
            id: 4,
            name: 'Gus Taco',
            imageSrc: fourthMenuItem,
            imageAlt: "Gus Taco",
        },
        {
            id: 5,
            name: 'Aroog',
            imageSrc: fifthMenuItem,
            imageAlt: "Aroog",
        },
        {
            id: 6,
            name: 'Yaki Liver',
            imageSrc: sixthMenuItem,
            imageAlt: "Yaki Liver",
        },
        {
            id: 7,
            name: 'Yaki Chicken',
            imageSrc: seventhMenuItem,
            imageAlt: "Yaki Chicken",
        },
        {
            id: 8,
            name: 'Yaki Lamb',
            imageSrc: eighthMenuItem,
            imageAlt: "Yaki Lamb",
        },

    ],
    mainCourses: [
        {
            id: 1,
            name: 'Chips Karrada',
            imageSrc: firstMenuItem,
            imageAlt: "Chips Karrada",
        },
        {
            id: 2,
            name: 'Black Kubba',
            imageSrc: secondMenuItem,
            imageAlt: "Black Kubba",
        },
        {
            id: 3,
            name: 'Smoked Kubba',
            imageSrc: thirdMenuItem,
            imageAlt: "Smoked Kubba",
        },
        {
            id: 4,
            name: 'Gus Taco',
            imageSrc: fourthMenuItem,
            imageAlt: "Gus Taco",
        },
        {
            id: 5,
            name: 'Yaki Chicken',
            imageSrc: seventhMenuItem,
            imageAlt: "Yaki Chicken",
        },
        {
            id: 6,
            name: 'Yaki Lamb',
            imageSrc: eighthMenuItem,
            imageAlt: "Yaki Lamb",
        },

    ],
    desserts: [
        {
            id: 1,
            name: 'Chips Karrada',
            imageSrc: firstMenuItem,
            imageAlt: "Chips Karrada",
        },
        {
            id: 2,
            name: 'Black Kubba',
            imageSrc: secondMenuItem,
            imageAlt: "Black Kubba",
        },
        {
            id: 3,
            name: 'Smoked Kubba',
            imageSrc: thirdMenuItem,
            imageAlt: "Smoked Kubba",
        },
        {
            id: 4,
            name: 'Gus Taco',
            imageSrc: fourthMenuItem,
            imageAlt: "Gus Taco",
        },
        {
            id: 5,
            name: 'Yaki Chicken',
            imageSrc: seventhMenuItem,
            imageAlt: "Yaki Chicken",
        },
        {
            id: 6,
            name: 'Yaki Lamb',
            imageSrc: eighthMenuItem,
            imageAlt: "Yaki Lamb",
        },

    ],
    drinks: [
        {
            id: 1,
            name: 'Chips Karrada',
            imageSrc: firstMenuItem,
            imageAlt: "Chips Karrada",
        },
        {
            id: 2,
            name: 'Black Kubba',
            imageSrc: secondMenuItem,
            imageAlt: "Black Kubba",
        },
        {
            id: 3,
            name: 'Aroog',
            imageSrc: fifthMenuItem,
            imageAlt: "Aroog",
        },
        {
            id: 4,
            name: 'Yaki Liver',
            imageSrc: sixthMenuItem,
            imageAlt: "Yaki Liver",
        },
        {
            id: 5,
            name: 'Yaki Chicken',
            imageSrc: seventhMenuItem,
            imageAlt: "Yaki Chicken",
        },
        {
            id: 6,
            name: 'Yaki Lamb',
            imageSrc: eighthMenuItem,
            imageAlt: "Yaki Lamb",
        },
    ]
}