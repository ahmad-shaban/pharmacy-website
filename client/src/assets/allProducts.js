
import drug0 from './medicine (3).svg';
import drug from './medicine 4.svg';
import taps from './medicine (2).svg';

import panadol from './panadol.jpg';
import baby1 from './baby1.jpg';
import baby2 from './baby2.jpg';
import baby3 from './baby3.jpg';
import baby4 from './baby4.jpg';
import baby5 from './baby5.jpg';
import drug1 from './drug1.jpg';
import drug2 from './drug2.jpg';
import drug3 from './drug3.jpg';
import drug4 from './drug4.jpg';
import drug5 from './drug5.jpg';
import skin1 from './skin1.jpg';
import skin2 from './skin2.jpg';
import skin3 from './skin3.jpg';
import skin4 from './skin4.jpg';
import men1 from './men1.jpg'
import men2 from './men2.jpg'
import men3 from './men3.jpg'

import home1 from './home1.jpg';
import home2 from './home2.jpg';
import home3 from './home3.jpg';
import home4 from './home4.jpg';
import home5 from './home5.jpg';
import women1 from './women1.jpg';
import women2 from './women2.jpg';
import women3 from './women3.jpg';
import women4 from './women4.jpg';


let allProducts = [
  {
    id: 1,
    name: 'Abimol 150mg/5ml Syrup 125ml',
    category: 'drugs',
    image: drug3,
    old_price: 30.0,
    new_price: 25.0,
  },
  {
    id: 2,
    name: 'Abilify 10mg 10 Tablets',
    category: 'drugs',
    image: drug4,
    old_price: 60.0,
    new_price: 54.0,
  },
  {
    id: 3,
    name: 'Acilight 150mg 14 capsules',
    category: 'drugs',
    image: drug5,
    old_price: 15.0,
    new_price: 13.5,
  },
  {
    id: 4,
    name: "Africa's Best Kids Organics Hair Nutrition Protein Enriched Conditioner 426 gm",
    category: 'baby-care',
    image: baby1,
    old_price: 300.0,
    new_price: 250.0,
  },
  {
    id: 5,
    name: 'A1 Baby Skin Cream 50 gm',
    category: 'baby-care',
    image: baby2,
    old_price: 70.0,
    new_price: 55.0,
  },
  {
    id: 6,
    name: 'Algo Glass Feeding Bottle with Handles 120 ml',
    category: 'baby-care',
    image: baby3,
    old_price: 20.0,
    new_price: 15.0,
  },
  {
    id: 7,
    name: 'Amore Kids Eau De Parfum - Fairy Girl 50 ml',
    category: 'baby-care',
    image: baby4,
    old_price: 85.0,
    new_price: 80.0,
  },
  {
    id: 8,
    name: 'Amore Kids Eau De Parfum - Funny 50 ml',
    category: 'baby-care',
    image: baby5,
    old_price: 85.0,
    new_price: 80.0,
  },
  {
    id: 9,
    name: 'panadol',
    category: 'drugs',
    image: panadol,
    old_price: 30.0,
    new_price: 25.0,
  },
  {
    id: 10,
    name: 'A-Viton 50.000 I.U. 20 Capsules',
    category: 'drugs',
    image: drug1,
    old_price: 40.0,
    new_price: 35.0,
  },
  {
    id: 11,
    name: 'Accolate 20mg 28 Tablets',
    category: 'drugs',
    image: drug2,
    old_price: 50.0,
    new_price: 45.0,
  },
  {
    id: 12,
    name: "Cantu Men's Collection Smooth Shaving Gel 142 gm",
    category: 'skin-care',
    image: skin1,
    old_price: 30.0,
    new_price: 25.0,
  },
  {
    id: 13,
    name: 'Areej Beard Oil 60 m',
    category: 'skin-care',
    image: skin2,
    old_price: 20.0,
    new_price: 16.0,
  },
  {
    id: 14,
    name: 'Air Wick Fresh Matic Refill Lemon 250 ml 2 Pcs',
    category: 'home-care',
    image: home1,
    old_price: 65.0,
    new_price: 59.0,
  },
  {
    id: 15,
    name: 'Bembo Wet Wipes 24 Pcs',
    category: 'home-care',
    image: home2,
    old_price: 35.0,
    new_price: 32.0,
  },
  {
    id: 16,
    name: 'Dettol Antiseptic Disinfectant 475ml',
    category: 'home-care',
    image: home3,
    old_price: 75.0,
    new_price: 67.0,
  },
  {
    id: 17,
    name: 'Carmen Smart Pack Tissues- White 160 Pieces - Pack Of 6 Pcs',
    category: 'home-care',
    image: home4,
    old_price: 42.0,
    new_price: 40.0,
  },
  {
    id: 18,
    name: 'Familia Kitchen Paper Towels 5 Rolls with 1 Extra Roll',
    category: 'home-care',
    image: home5,
    old_price: 48.0,
    new_price: 42.5,
  },
  {
    id: 19,
    name: 'Dry Fresh Feminine Intimate Wash Chamomile & Flowers 200 ml',
    category: 'women-care',
    image: women1,
    old_price: 65.0,
    new_price: 53.5,
  },
  {
    id: 20,
    name: 'DR.RASHEL Whiten & Tightening Feminine Wash 50 ml',
    category: 'women-care',
    image: women2,
    old_price: 90.0,
    new_price: 60.5,
  },
  {
    id: 21,
    name: 'Dream Look Rose Water Make-Up Removal Spray 150ml',
    category: 'women-care',
    image: women3,
    old_price: 30.0,
    new_price: 28.5,
  },
  {
    id: 22,
    name: 'Bredona Feminine wash 120ml',
    category: 'women-care',
    image: women4,
    old_price: 40.0,
    new_price: 33.0,
  },
  {
    id: 23,
    name: 'Amanda BB Cream 01 - 30 ml',
    category: 'skin-care',
    image: skin3,
    old_price: 45.0,
    new_price: 37.0,
  }
  ,
  {
    id: 24,
    name: 'Cleo whitening intimate cleanser - 200ml',
    category: 'skin-care',
    image: skin4,
    old_price: 40.0,
    new_price: 33.0,
  },
  {
    id: 25,
    name: 'Nivea MEN Fresh & Cool Shaving Foam 200ml',
    category: 'men-care',
    image: men1,
    old_price: 40.0,
    new_price: 33.0,
  },
  {
    id: 26,
    name: 'Gillette Pro Icy Cool Shaving Foam 250 ml',
    category: 'men-care',
    image: men2,
    old_price: 40.0,
    new_price: 33.0,
  },
  {
    id: 27,
    name: 'Lord Big Ben Shaving Foam Marine Cool 200 ml',
    category: 'men-care',
    image: men3,
    old_price: 40.0,
    new_price: 33.0,
  }
  ,
];

export default allProducts;
