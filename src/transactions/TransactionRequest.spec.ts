import { ethers } from "ethers";
import { TransactionRequest } from "./TransactionRequest"; // Assuming your TransactionRequest class is in a separate file

describe("TransactionRequest", () => {
  it("should create a valid TransactionRequest object", () => {
    const toAddress = "0xYourDestinationAddress";
    const valueInEther = ethers.utils.parseEther("1");
    const options = {
      gasLimit: ethers.BigNumber.from(50000),
      gasPrice: ethers.utils.parseUnits("30", "gwei"),
      nonce: 1,
      data: "0x0123456789abcdef",
    };

    const transactionRequest =
      TransactionRequest.createTransactionRequestObject(
        toAddress,
        valueInEther,
        options
      );

    // Assert individual properties
    expect(transactionRequest.to).toBe(toAddress);
    expect(transactionRequest.value).toEqual(valueInEther);
    expect(transactionRequest.gasLimit).toEqual(options.gasLimit);
    expect(transactionRequest.gasPrice).toEqual(options.gasPrice);
    expect(transactionRequest.nonce).toEqual(options.nonce);
    expect(transactionRequest.data).toEqual(options.data);

    // You can add more specific assertions based on your needs
  });
});
