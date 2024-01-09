import { ethers } from "ethers";
import { gasLimitValue, gasPriceValue } from "../constants";

export class TransactionRequest {
  to: string;
  value: ethers.BigNumber;
  gasLimit: ethers.BigNumber;
  gasPrice: ethers.BigNumber;
  nonce: number;
  data: string;

  constructor(
    to: string,
    value: ethers.BigNumber,
    gasLimit: ethers.BigNumber = gasLimitValue,
    gasPrice: ethers.BigNumber = gasPriceValue,
    nonce: number = 0,
    data: string = "0x"
  ) {
    this.to = to;
    this.value = value;
    this.gasLimit = gasLimit;
    this.gasPrice = gasPrice;
    this.nonce = nonce;
    this.data = data;
  }

  public createTransactionRequestObject(
    to: string,
    value: ethers.BigNumber,
    options: Partial<TransactionRequest> = {}
  ): TransactionRequest {
    const { gasLimit, gasPrice, nonce, data } = options;

    return new TransactionRequest(to, value, gasLimit, gasPrice, nonce, data);
  }
}
