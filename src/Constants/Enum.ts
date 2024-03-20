export const categories = ['Speciality', 'Atta', 'Dal', 'Dry Fruits', 'Masale', 'Millets', 'Ready Mix', 'Rice', 'Sugar & Jaggery', 'Super Foods & Seeds'];

export interface IProducts {
    id: number;
    category: number;
    name: string;
    price: string;
    unit: string;
    quantity: number;
};

export interface ICategory {
    id: number;
    name: string;
    slug: string;
    products: IProducts[]
};

export const units = [
    {
        label: "Kg",
        value: "KG"
    },
    {
        label: "Gm",
        value: "GM"
    },
    {
        label: "Pc",
        value: "Pc"
    }
];

export const categoryValueMap: {[categoryName: string]: string} = {
    "SPECIALITY": "19no SPECIALITY",
    "ATTA": "ATTA",
    "DAL": "DAL",
    "DRY FRUITS": "DRY FRUITS",
    "MASALE": "MASALE",
    "MILLETS": "MILLETS",
    "READY MIX": "READY MIX",
    "RICE": "RICE",
    "SUGAR & JAGGERY": "SUGAR & JAGGERY",
    "SUPER FOODS & SEEDS": "SUPER FOODS & SEEDS"
};

export const initialState: any  = [
    {
        "id": 10,
        "name": "19no SPECIALITY",
        "slug": "19no SPECIALITY",
        "products": [
            {
                "id": 123,
                "category": 10,
                "name": "Bedmi Puri Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 127,
                "category": 10,
                "name": "Chai Masala",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 128,
                "category": 10,
                "name": "Chatu Chat Masala",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 124,
                "category": 10,
                "name": "Hing",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 126,
                "category": 10,
                "name": "Instant Pudina Chutney",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 125,
                "category": 10,
                "name": "Methi Chutney",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 129,
                "category": 10,
                "name": "Ready Seasoning",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 130,
                "category": 10,
                "name": "Tea Special",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 16,
        "name": "ATTA",
        "slug": "ATTA",
        "products": [
            {
                "id": 189,
                "category": 16,
                "name": "Ararot",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 190,
                "category": 16,
                "name": "Bajra Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 191,
                "category": 16,
                "name": "Bajra Khichdi",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 192,
                "category": 16,
                "name": "Bajra Kutta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 193,
                "category": 16,
                "name": "Bajra Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 194,
                "category": 16,
                "name": "Bedmi Puri Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 195,
                "category": 16,
                "name": "Besan",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 197,
                "category": 16,
                "name": "Besan Mota",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 196,
                "category": 16,
                "name": "Besan (Rajdhani)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 198,
                "category": 16,
                "name": "Chakki Atta ( Ash)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 199,
                "category": 16,
                "name": "Chakki Atta Loose",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 200,
                "category": 16,
                "name": "Channa Roasted",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 201,
                "category": 16,
                "name": "Channa Sattu",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 202,
                "category": 16,
                "name": "Chawal Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 203,
                "category": 16,
                "name": "Desi Channa Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 205,
                "category": 16,
                "name": "Joe Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 204,
                "category": 16,
                "name": "Joe Sattu",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 206,
                "category": 16,
                "name": "Jwar Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 208,
                "category": 16,
                "name": "Kuttu Giri",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 207,
                "category": 16,
                "name": "Kuttu Giri Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 209,
                "category": 16,
                "name": "Maida",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 210,
                "category": 16,
                "name": "Makka Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 211,
                "category": 16,
                "name": "Moong Dhuli Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 212,
                "category": 16,
                "name": "Mota Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 213,
                "category": 16,
                "name": "Mp Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 214,
                "category": 16,
                "name": "Oats Αtta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 221,
                "category": 16,
                "name": "Quinoa Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 215,
                "category": 16,
                "name": "Raggi Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 216,
                "category": 16,
                "name": "Rajgiri (Amranth) Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 217,
                "category": 16,
                "name": "Samak Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 218,
                "category": 16,
                "name": "Samak Chawal",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 219,
                "category": 16,
                "name": "Singhara Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 220,
                "category": 16,
                "name": "Urad Dhuli Atta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 7,
        "name": "DAL",
        "slug": "DAL",
        "products": [
            {
                "id": 5,
                "category": 7,
                "name": "Arhar Choti",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 4,
                "category": 7,
                "name": "Arhar special",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 6,
                "category": 7,
                "name": "Chiwra Poha",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 7,
                "category": 7,
                "name": "Dal Chana",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 8,
                "category": 7,
                "name": "Dalia",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 9,
                "category": 7,
                "name": "Dalia joe",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 10,
                "category": 7,
                "name": "Daliya Roasted",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 11,
                "category": 7,
                "name": "Kala Channa Desi",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 12,
                "category": 7,
                "name": "Kulth Dal",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 13,
                "category": 7,
                "name": "Lobiya Lal",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 14,
                "category": 7,
                "name": "Lobiya Safed",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 35,
                "category": 7,
                "name": "Maida (Superfine)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 15,
                "category": 7,
                "name": "Malka Lal",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 16,
                "category": 7,
                "name": "Malka Lal Dali",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 17,
                "category": 7,
                "name": "Masoor Kaali Barrik",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 18,
                "category": 7,
                "name": "Masoor Kali",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 19,
                "category": 7,
                "name": "Matar Safed",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 20,
                "category": 7,
                "name": "Mix Dal",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 21,
                "category": 7,
                "name": "Moong Chilka",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 22,
                "category": 7,
                "name": "Moong Dhuli",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 24,
                "category": 7,
                "name": "Moongfali Dana",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 23,
                "category": 7,
                "name": "Moong Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 25,
                "category": 7,
                "name": "Moth Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 26,
                "category": 7,
                "name": "Popcorn",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 27,
                "category": 7,
                "name": "Rajma Chitra",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 28,
                "category": 7,
                "name": "Rajma Kashmiri",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 29,
                "category": 7,
                "name": "Rajma Kullu Mota",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 30,
                "category": 7,
                "name": "Sabudana",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 31,
                "category": 7,
                "name": "Safed Chana Dollar",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 33,
                "category": 7,
                "name": "Safed Chana Medium",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 32,
                "category": 7,
                "name": "Safed Chana Pindi",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 34,
                "category": 7,
                "name": "Soyabean",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 36,
                "category": 7,
                "name": "Suji Barrik",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 37,
                "category": 7,
                "name": "Suji Moti",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 38,
                "category": 7,
                "name": "Tea Special (19no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 39,
                "category": 7,
                "name": "Urad Chilka",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 40,
                "category": 7,
                "name": "Urad Dhuli",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 41,
                "category": 7,
                "name": "Urad Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 11,
        "name": "DRY FRUITS",
        "slug": "DRY FRUITS",
        "products": [
            {
                "id": 131,
                "category": 11,
                "name": "Akhrot Giri",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 132,
                "category": 11,
                "name": "Anjeer",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 134,
                "category": 11,
                "name": "Badam Giri (American)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 133,
                "category": 11,
                "name": "Badam (Gurbandi)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 135,
                "category": 11,
                "name": "Badam Maamra",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 136,
                "category": 11,
                "name": "Chironji",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 137,
                "category": 11,
                "name": "Chuwara (kala)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 138,
                "category": 11,
                "name": "Chuwara (Pila)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 139,
                "category": 11,
                "name": "Gola Kas",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 140,
                "category": 11,
                "name": "Gola Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 141,
                "category": 11,
                "name": "Gond",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 142,
                "category": 11,
                "name": "Gond Katira",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 143,
                "category": 11,
                "name": "Kaju 2pc",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 144,
                "category": 11,
                "name": "Kaju 4Pc",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 145,
                "category": 11,
                "name": "Kaju W-240",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 146,
                "category": 11,
                "name": "Kaju W-320",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 147,
                "category": 11,
                "name": "Khumani",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 148,
                "category": 11,
                "name": "Kishmish Gol",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 149,
                "category": 11,
                "name": "Kishmish Lambi",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 150,
                "category": 11,
                "name": "Magaj Kharbuja",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 151,
                "category": 11,
                "name": "Magaj Mota",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 152,
                "category": 11,
                "name": "Makhane",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 153,
                "category": 11,
                "name": "Munnakka",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 154,
                "category": 11,
                "name": "Pista Dodi",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 155,
                "category": 11,
                "name": "Pista Pishori",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 8,
        "name": "MASALE",
        "slug": "MASALE",
        "products": [
            {
                "id": 42,
                "category": 8,
                "name": "Aam Achar Masala",
                "price": "0",
                "quantity": 0,
                "unit": "GM"
            },
            {
                "id": 43,
                "category": 8,
                "name": "Ajwain",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 44,
                "category": 8,
                "name": "Amchur powder",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 45,
                "category": 8,
                "name": "Amchur Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 97,
                "category": 8,
                "name": "Biryani Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 46,
                "category": 8,
                "name": "Chai Masala (19 no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 98,
                "category": 8,
                "name": "Chana Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 47,
                "category": 8,
                "name": "Chatu Chat Masala (19no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 99,
                "category": 8,
                "name": "Chicken Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 48,
                "category": 8,
                "name": "Chilli Flakes (19no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 100,
                "category": 8,
                "name": "Chunky Chat (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 101,
                "category": 8,
                "name": "Dal Makhni Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 102,
                "category": 8,
                "name": "Deggi mirch (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 49,
                "category": 8,
                "name": "Deggi Mirch pd (19no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 50,
                "category": 8,
                "name": "Dhaniya Koota",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 51,
                "category": 8,
                "name": "Dhaniya Powder",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 52,
                "category": 8,
                "name": "Dhaniya Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 103,
                "category": 8,
                "name": "Garam Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 53,
                "category": 8,
                "name": "Garam Masala pd",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 54,
                "category": 8,
                "name": "Garam Masala Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 55,
                "category": 8,
                "name": "Green Tea",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 56,
                "category": 8,
                "name": "Haldi Powder",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 57,
                "category": 8,
                "name": "Haldi Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 58,
                "category": 8,
                "name": "Hing (Ram Dev)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 59,
                "category": 8,
                "name": "Hing Special (19no)( 20/50 gm)",
                "price": "0",
                "quantity": 0,
                "unit": "GM"
            },
            {
                "id": 60,
                "category": 8,
                "name": "Imli (Chapati)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 61,
                "category": 8,
                "name": "Jaljeera Masala",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 62,
                "category": 8,
                "name": "Jeera Kala Namak",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 63,
                "category": 8,
                "name": "Jeera Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 86,
                "category": 8,
                "name": "Kala Chat Masala(19no) (100g)",
                "price": "0",
                "quantity": 0,
                "unit": "Pc"
            },
            {
                "id": 64,
                "category": 8,
                "name": "Kala Jeera (shah)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 65,
                "category": 8,
                "name": "Kali Mirch Powder",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 66,
                "category": 8,
                "name": "Kali Mirch Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 104,
                "category": 8,
                "name": "Kasuri Methi (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 105,
                "category": 8,
                "name": "Kitchen King (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 67,
                "category": 8,
                "name": "Lal Mirch Kuti",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 68,
                "category": 8,
                "name": "Lal Mirch pd",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 69,
                "category": 8,
                "name": "Lal Mirch Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 70,
                "category": 8,
                "name": "Loung",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 87,
                "category": 8,
                "name": "Matra Kulcha Masala 19no (100g)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 106,
                "category": 8,
                "name": "Meat Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 71,
                "category": 8,
                "name": "Meetha Soda",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 72,
                "category": 8,
                "name": "Meethi Saunth",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 73,
                "category": 8,
                "name": "Methi Chutney(longi)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 74,
                "category": 8,
                "name": "Methi Dana",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 223,
                "category": 8,
                "name": "Namak kala",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 222,
                "category": 8,
                "name": "Namak sendha( vart wala)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 75,
                "category": 8,
                "name": "Namak Tata",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 76,
                "category": 8,
                "name": "Panipuri Masala",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 77,
                "category": 8,
                "name": "Pao Bhaji (Everest)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 79,
                "category": 8,
                "name": "Peepal",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 78,
                "category": 8,
                "name": "Pizza & Pasta Masala 19no (Seasoning)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 80,
                "category": 8,
                "name": "Pudina Chat Masala(Instant chutney)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 81,
                "category": 8,
                "name": "Rai pd",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 82,
                "category": 8,
                "name": "Rai Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 107,
                "category": 8,
                "name": "Rajma Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 83,
                "category": 8,
                "name": "Safed Mirch",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 84,
                "category": 8,
                "name": "Safed Mirch pd",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 85,
                "category": 8,
                "name": "Safed Til",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 108,
                "category": 8,
                "name": "Sambar Masala (MDH)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 88,
                "category": 8,
                "name": "Sambhar Masala (everest)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 89,
                "category": 8,
                "name": "Sarson Kali",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 90,
                "category": 8,
                "name": "Sarson Peeli",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 91,
                "category": 8,
                "name": "Saunf Barrik",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 92,
                "category": 8,
                "name": "Saunf Moti",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 93,
                "category": 8,
                "name": "Shikanji Masala",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 94,
                "category": 8,
                "name": "Sounth pd",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 95,
                "category": 8,
                "name": "Sounth Sabut",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 96,
                "category": 8,
                "name": "Tej Patta",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 109,
                "category": 8,
                "name": "Thandai",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 15,
        "name": "MILLETS",
        "slug": "MILLETS",
        "products": [
            {
                "id": 181,
                "category": 15,
                "name": "Banyard Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 185,
                "category": 15,
                "name": "Brown Top Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 188,
                "category": 15,
                "name": "Buckwheat Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 184,
                "category": 15,
                "name": "Foxtail Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 182,
                "category": 15,
                "name": "Kodo Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 183,
                "category": 15,
                "name": "Little Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 187,
                "category": 15,
                "name": "Pearl Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 186,
                "category": 15,
                "name": "Raggi Millet",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 13,
        "name": "READY MIX",
        "slug": "READY MIX",
        "products": [
            {
                "id": 163,
                "category": 13,
                "name": "Bedmi Puri Atta(19no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 164,
                "category": 13,
                "name": "Bhatura Mix",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 166,
                "category": 13,
                "name": "Dhokla Mix (420)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 165,
                "category": 13,
                "name": "Missi Roti Atta Mix",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 167,
                "category": 13,
                "name": "Moong Dal Pakodi(420)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 169,
                "category": 13,
                "name": "Rice Dosa Mix (19no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 168,
                "category": 13,
                "name": "Rice Idli Mix (19no)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 9,
        "name": "RICE",
        "slug": "RICE",
        "products": [
            {
                "id": 121,
                "category": 9,
                "name": "Black Rice",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 119,
                "category": 9,
                "name": "Brown Rice",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 112,
                "category": 9,
                "name": "Chawal Basmati 110",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 113,
                "category": 9,
                "name": "Chawal Basmati 80",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 115,
                "category": 9,
                "name": "Chawal Dehraduni 150",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 110,
                "category": 9,
                "name": "Chawal Parmal Silky",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 111,
                "category": 9,
                "name": "Chawal Parmal Staff",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 116,
                "category": 9,
                "name": "Chawal Special 170",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 114,
                "category": 9,
                "name": "Chawal Tibar 130",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 117,
                "category": 9,
                "name": "Lal Quilla",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 120,
                "category": 9,
                "name": "Red Rice",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 122,
                "category": 9,
                "name": "Samak Chawal",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 118,
                "category": 9,
                "name": "Sela Golden (Special)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 12,
        "name": "SUGAR & JAGGERY",
        "slug": "SUGAR & JAGGERY",
        "products": [
            {
                "id": 156,
                "category": 12,
                "name": "Bura",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 157,
                "category": 12,
                "name": "Desi Khand",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 158,
                "category": 12,
                "name": "Gur",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 159,
                "category": 12,
                "name": "Karara",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 160,
                "category": 12,
                "name": "Shakkar",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 161,
                "category": 12,
                "name": "Sugar Branded",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 162,
                "category": 12,
                "name": "Sugar Loose (Mawana)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    },
    {
        "id": 14,
        "name": "SUPER FOODS & SEEDS",
        "slug": "SUPER FOODS & SEEDS",
        "products": [
            {
                "id": 170,
                "category": 14,
                "name": "Alsi",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 171,
                "category": 14,
                "name": "Barley Flakes",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 172,
                "category": 14,
                "name": "Black Rice",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 173,
                "category": 14,
                "name": "Brown Rice",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 174,
                "category": 14,
                "name": "Chia Seeds",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 180,
                "category": 14,
                "name": "Millets (all types)",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 175,
                "category": 14,
                "name": "Oats Regular",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 176,
                "category": 14,
                "name": "Oats Rolled",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 177,
                "category": 14,
                "name": "Pumpkin Seeds",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 178,
                "category": 14,
                "name": "Quinoa",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            },
            {
                "id": 179,
                "category": 14,
                "name": "Sunflower Seeds",
                "price": "0",
                "quantity": 0,
                "unit": "KG"
            }
        ]
    }
];