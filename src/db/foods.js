import Beef from "@/assets/Foods/beef.svg";
import HealthyNoodle from "@/assets/Foods/healthy-noodle.svg";
import HotRice from "@/assets/Foods/hot-rice.svg";
import HotSpicy from "@/assets/Foods/hot-spicy.svg";
import Mushroom from "@/assets/Foods/mushroom.svg";
import NoodleOmelette from "@/assets/Foods/noodle-omelette.svg";
import NoodleSpinachLeaf from "@/assets/Foods/noodle-spinach-leaf.svg";
import Noodles from "@/assets/Foods/noodles.svg";
import SpicyInstant from "@/assets/Foods/spicy-instant.svg";
import PhiladelphiaRoll from "@/assets/Foods/Philadelphia-Rol.jpeg";

import TunaRoll from "@/assets/Foods/Tuna-Roll.jpeg";
import UnagiSushi from "@/assets/Foods/Unagi-Sushi.jpeg";
import EbiSushi from "@/assets/Foods/Ebi-Sushi.jpeg";
import Temaki from "@/assets/Foods/Temaki.jpeg";
import Sashimi from "@/assets/Foods/Sashimi.jpeg";
import Maki from "@/assets/Foods/maki.png";

export const categories = [
  {
    id: 1,
    name: "All",
    key: "all",
  },

  {
    id: 2,
    name: "Cold Dishes",
    key: "cold-dishes",
  },

  {
    id: 3,
    name: "Grill",
    key: "grill",
  },

  {
    id: 4,
    name: "Appetizer",
    key: "appetizer",
  },
  {
    id: 5,
    name: "Dessert",
    key: "dessert",
  },
  {
    id: 6,
    name: "Soup",
    key: "soup",
  },
  {
    id: 7,
    name: "Sushi",
    key: "sushi",
  },
];

const [_, coldDishes, grill, appetizer, dessert, soup, sushi] = categories;
export const foods = [
  {
    id: 1,
    name: "Beef dumpling in hot and sour soup",
    price: 10,
    description: "Tasty",
    image: Beef,

    category: coldDishes,
  },
  {
    id: 2,
    name: "Healthy noodle with spinach leaf",
    price: 15,
    description: "Cheesy",
    image: HealthyNoodle,
    category: grill,
  },
  {
    id: 3,
    name: "Hot spicy fried rice with omelet",
    price: 8,
    description: "appetizer",
    image: HotRice,
    category: appetizer,
  },
  {
    id: 4,
    name: "Hot spicy fried rice with omelet",
    price: 7,
    description: "Dessert",
    image: HotSpicy,
    category: dessert,
  },
  {
    id: 5,
    name: "Spicy seasoned seafood noodles ",
    price: 15,
    description: "Cold Dishes",
    image: Mushroom,
    category: coldDishes,
  },
  {
    id: 6,
    name: "Spicy instant noodle with special omelette",
    price: 9,
    description: "Dessert",
    image: NoodleOmelette,
    category: dessert,
  },
  {
    id: 7,
    name: "Healthy noodle with spinach leaf",
    price: 6,
    description: "Cold Dishes",
    image: NoodleSpinachLeaf,
    category: coldDishes,
  },
  {
    id: 8,
    name: "Salted Pasta with mushroom sauce",
    price: 26,
    description: "Grill",
    image: Noodles,
    category: grill,
  },
  {
    id: 9,
    name: "Spicy instant noodle with special omelette",
    price: 4,
    description: "Soup",
    image: SpicyInstant,
    category: soup,
  },
  {
    id: 10,
    name: "Philadelphia Roll Sushi",
    price: 4,
    description: "Philadelphia Roll Sushi",
    image: PhiladelphiaRoll,
    category: sushi,
  },
  {
    id: 11,
    name: "Tuna Roll Maki sushi made with tuna",
    price: 4,
    description: "Tuna Roll",
    image: TunaRoll,
    category: sushi,
  },
  {
    id: 12,
    name: "Unagi Sushi  ",
    price: 4,
    description: "Unagi Sushi",
    image: UnagiSushi,
    category: sushi,
  },
  {
    id: 13,
    name: "Ebi Sushi Sushi made with shrimp.",
    price: 4,
    description: "Ebi Sushi",
    image: EbiSushi,
    category: sushi,
  },
  {
    id: 14,
    name: "Temaki Cone-shaped, hand-held sushi.",
    price: 6,
    description: "Temaki",
    image: Temaki,
    category: sushi,
  },
  {
    id: 15,
    name: "Sashimi Thinly sliced raw fish or seafood.",
    price: 8,
    description: "Sashimi",
    image: Sashimi,
    category: sushi,
  },
  {
    id: 16,
    name: "Maki a type of rolled sushi ",
    price: 4,
    description: "Maki",
    image: Maki,
    category: sushi,
  },
];
