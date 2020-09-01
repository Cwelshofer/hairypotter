export const firePottery = (cup, tempature) => {
cup.fired = true
if ( tempature > 2200) {
    cup.cracked = true
}
    else {
        cup.cracked = false
    }
    return cup
}