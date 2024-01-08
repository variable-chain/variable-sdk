import { ethers } from "ethers";

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
    gasLimit: ethers.BigNumber = ethers.BigNumber.from(21000),
    gasPrice: ethers.BigNumber = ethers.utils.parseUnits("20", "gwei"),
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

  static createTransactionRequestObject(
    to: string,
    value: ethers.BigNumber,
    options: Partial<TransactionRequest> = {}
  ): TransactionRequest {
    const { gasLimit, gasPrice, nonce, data } = options;

    return new TransactionRequest(to, value, gasLimit, gasPrice, nonce, data);
  }
}
