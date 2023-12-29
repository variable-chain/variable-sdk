class order {}

class PerpOrder extends order {
  /**
   * Places a limit order in the perpetual market.
   * @param quantity - The quantity of the order.
   * @param price - The price at which the order is placed.
   * @param inputToken - The token to be used as input in the order.
   * @param outputToken - The token to be received as output in the order.
   * @param direction - The direction of the order, e.g., "buy" or "sell".
   * @param leverage - The leverage applied to the order.
   */
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

  /**
   * Places a market order in the perpetual market.
   * @param quantity - The quantity of the order.
   * @param inputToken - The token to be used as input in the order.
   * @param outputToken - The token to be received as output in the order.
   * @param direction - The direction of the order, e.g., "buy" or "sell".
   * @param leverage - The leverage applied to the order.
   */
  market(
    quantity: number,
    inputToken: string,
    outputToken: string,
    direction: string,
    leverage: number
  ): void {
    console.log("Market order placed");
  }

  /**
   * Places a conditional limit order in the perpetual market.
   * @param triggerPrice - The price that triggers the order.
   * @param executionPrice - The price at which the order is executed.
   * @param direction - The direction of the order, e.g., "buy" or "sell".
   * @param leverage - The leverage applied to the order.
   */
  conditionalLimit(
    triggerPrice: number,
    executionPrice: number,
    direction: string,
    leverage: number
  ): void {
    console.log("Conditional Limit order placed");
  }

  /**
   * Places a conditional market order in the perpetual market.
   * @param triggerPrice - The price that triggers the order.
   * @param direction - The direction of the order, e.g., "buy" or "sell".
   * @param position - The desired position of the order.
   * @param quantity - The quantity of the order.
   * @param leverage - The leverage applied to the order.
   */
  conditionalMarket(
    triggerPrice: number,
    direction: string,
    position: boolean,
    quantity: number,
    leverage: number
  ): void {
    console.log("Conditional Market order placed");
  }

  /**
   * Places a stop loss order in the perpetual market.
   * @param triggerPrice - The price that triggers the stop loss.
   * @param quantity - The quantity of the order.
   * @param direction - The direction of the order, e.g., "buy" or "sell".
   * @param leverage - The leverage applied to the order.
   */
  stop(
    triggerPrice: number,
    quantity: number,
    direction: string,
    leverage: number
  ): void {
    console.log("Stop loss order placed");
  }

  /**
   * Places a trailing price order in the perpetual market based on a price difference.
   * @param diff - The price difference used for trailing.
   * @param direction - The direction of the order, e.g., "buy" or "sell".
   * @param quantity - The quantity of the order.
   * @param leverage - The leverage applied to the order.
   */
  trailByPriceDiff(
    diff: number,
    direction: string,
    quantity: number,
    leverage: number
  ): void {
    console.log("Trailing Price order placed");
  }

  /**
   * Places a trailing order in the perpetual market based on a percentage difference.
   * @param diff - The percentage difference used for trailing.
   * @param direction - The direction of the order, e.g., "buy" or "sell".
   * @param quantity - The quantity of the order.
   * @param leverage - The leverage applied to the order.
   */
  trailByDiffPerc(
    diff: number,
    direction: string,
    quantity: number,
    leverage: number
  ): void {
    console.log("Trailing order placed");
  }
}

/**
 * Represents a class for Spot Orders in a trading system.
 */
class SpotOrder extends order {
  /**
   * Places a limit order in the spot market.
   * @param quantity - The quantity of the order.
   * @param price - The price at which the order is placed.
   * @param inputToken - The token to be used as input in the order.
   * @param outputToken - The token to be received as output in the order.
   */
  limit(
    quantity: number,
    price: number,
    inputToken: string,
    outputToken: string
  ): void {
    console.log("Limit order placed");
  }

  /**
   * Places a market order in the spot market.
   * @param quantity - The quantity of the order.
   * @param inputToken - The token to be used as input in the order.
   * @param outputToken - The token to be received as output in the order.
   */
  market(quantity: number, inputToken: string, outputToken: string): void {
    console.log("Market order placed");
  }

  /**
   * Places a conditional limit order in the spot market.
   * @param triggerPrice - The price that triggers the order.
   * @param executionPrice - The price at which the order is executed.
   */
  conditionalLimit(triggerPrice: number, executionPrice: number): void {
    console.log("Conditional Limit order placed");
  }

  /**
   * Places a conditional market order in the spot market.
   * @param triggerPrice - The price that triggers the order.
   * @param position - The desired position of the order.
   * @param quantity - The quantity of the order.
   */
  conditionalMarket(
    triggerPrice: number,
    position: boolean,
    quantity: number
  ): void {
    console.log("Conditional Market order placed");
  }

  /**
   * Places a stop loss order in the spot market.
   * @param triggerPrice - The price that triggers the stop loss.
   * @param quantity - The quantity of the order.
   */
  stop(triggerPrice: number, quantity: number): void {
    console.log("Stop loss order placed");
  }

  /**
   * Places a trailing price order in the spot market based on a price difference.
   * @param diff - The price difference used for trailing.
   * @param quantity - The quantity of the order.
   */
  trailByPriceDiff(diff: number, quantity: number): void {
    console.log("Trailing Price order placed");
  }

  /**
   * Places a trailing order in the spot market based on a percentage difference.
   * @param diff - The percentage difference used for trailing.
   * @param quantity - The quantity of the order.
   */
  trailByDiffPerc(diff: number, quantity: number): void {
    console.log("Trailing order placed");
  }
}
