export const usePottery = () => potteryPrices.slice()

const potteryPrices = []

export const toSellOrNotToSell = (potteryObject) => {
  if (potteryObject.weight >= 6 && potteryObject.cracked === false) {
    potteryObject.price = 40
  } else if (potteryObject.weight < 6 && potteryObject.cracked === false) {
    potteryObject.price = 20
  }
  if (potteryObject.cracked === false) {
    potteryPrices.push(potteryObject)
  }
  return potteryObject
}


