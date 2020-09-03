export const firePottery = (mug, tempature) => {
mug.fired = true
if ( tempature > 2200) {
    mug.cracked = true
}
    else {
        mug.cracked = false
    }
    return mug
}