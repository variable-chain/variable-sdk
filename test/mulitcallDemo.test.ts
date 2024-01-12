import { ethers } from 'ethers';
import { Interface } from '@ethersproject/abi';
import MulticallJson from '../src/contracts/abi/Multicall.json';
import MintTokenDemoJson from '../src/contracts/abi/MintTokenDemo.json';
import { Multicall } from '../src';

const mintTokenInterface = new Interface(MintTokenDemoJson.abi);
const addressA = '0xD80c7889C331fC884310B7a900BA84289e3B2aa9';
const addressB = '0x57b195c11A7f4c9f0b0aA58E9abB9b40791F122b';

const valueA = ethers.utils.parseEther('0.1');
const valueB = ethers.utils.parseEther('0.5');

const calldataForAddressA = mintTokenInterface.encodeFunctionData('mint', [addressA, valueA]);
const calldataForAddressB = mintTokenInterface.encodeFunctionData('mint', [addressB, valueB]);

// Encode the multicall
const multicallCalldata = Multicall.encodeMulticall([calldataForAddressA, calldataForAddressB]);

const provider = new ethers.providers.JsonRpcProvider('http://35.190.182.136:8123');

const privateKey = 'd9a6497a84196660068d45f7281d47f0ad0ebf6ec48509d99071f17b28c7d516';

const wallet = new ethers.Wallet(privateKey, provider);

const MintTokenContractAddress = '0x308986991549a7495B8E282982FAD198c72BFc53';

const MulticallContract = new ethers.Contract(
  MintTokenContractAddress,
  MulticallJson.abi as ethers.ContractInterface,
  wallet
);

test('signs and sends transaction', async () => {
  // Sign the transaction
  const signedTransaction = await wallet.signTransaction({
    to: MintTokenContractAddress,
    gasPrice: await provider.getGasPrice(),
    gasLimit: await MulticallContract.estimateGas.multicall([calldataForAddressA, calldataForAddressB]),
    nonce: await wallet.getTransactionCount(),
    data: multicallCalldata,
  });

  // Send the signed transaction
  const transactionResponse = await provider.sendTransaction(signedTransaction);

  console.log('Transaction hash:', transactionResponse.hash);
  expect(transactionResponse.hash).toBeDefined();
},10000);
