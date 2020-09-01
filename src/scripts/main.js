// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js";


// Make 5 pieces of pottery at the wheel
let mug = makePottery("cup", 3, 3);
let platter = makePottery("oval", 6, 6);
let ornament = makePottery("circle", 2, 2);
let vase = makePottery("round", 1, 1);
let penHolder = makePottery("cup", 4, 4);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1800);
let firedPlatter = firePottery(platter, 2000);
let firedOrnament = firePottery(ornament, 2500);
let firedVase = firePottery(vase, 1600);
let firedPenHolder = firePottery(penHolder, 2200);

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

