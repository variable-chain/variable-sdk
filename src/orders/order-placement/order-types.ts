class PerpOrder {
  constructor() {}

  limit(
    quantity: number,
    price: number,
    inputToken: string,
    outputToken: string,
    direction: string,
    leverage: number
  ): void {
    console.log("Limit order placed");
  }

  market(
    quantity: number,
    inputToken: string,
    outputToken: string,
    direction: string,
    leverage: number
  ): void {
    console.log("Market order placed");
  }

  conditionalLimit(
    triggerPrice: number,
    executionPrice: number,
    direction: string,
    leverage: number
  ): void {
    console.log("Conditional Limit order placed");
  }

  conditionalMarket(
    triggerPrice: number,
    direction: string,
    position: boolean,
    quantity: number,
    leverage: number
  ): void {
    console.log("Conditional Market order placed");
  }

  stop(
    triggerPrice: number,
    quantity: number,
    direction: string,
    leverage: number
  ): void {
    console.log("Stop loss order placed");
  }

  trailByPriceDiff(
    diff: number,
    direction: string,
    quantity: number,
    leverage: number
  ): void {
    //This is according to Price Difference
    console.log("Trailing Price order placed");
  }

  trailByDiffPerc(
    diff: number,
    direction: string,
    quantity: number,
    leverage: number
  ): void {
    //This is according to Percentage Difference
    console.log("Trailing order placed");
  }
}

class SpotOrder {
  constructor() {}
  limit(
    quantity: number,
    price: number,
    inputToken: string,
    outputToken: string
  ): void {
    console.log("Limit order placed");
  }

  market(quantity: number, inputToken: string, outputToken: string): void {
    console.log("Market order placed");
  }

  conditionalLimit(triggerPrice: number, executionPrice: number): void {
    console.log("Conditional Limit order placed");
  }

  conditionalMarket(
    triggerPrice: number,
    position: boolean,
    quantity: number
  ): void {
    console.log("Conditional Market order placed");
  }

  stop(triggerPrice: number, quantity: number): void {
    console.log("Stop loss order placed");
  }

  trailByPriceDiff(diff: number, quantity: number): void {
    //This is according to Price Difference
    console.log("Trailing Price order placed");
  }

  trailByDiffPerc(diff: number, quantity: number): void {
    //This is according to Percentage Difference
    console.log("Trailing order placed");
  }
}
