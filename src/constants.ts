import { ethers } from "ethers";
export const networkId: number = 123; 
export const gasLimitValue: ethers.BigNumber = ethers.BigNumber.from(21000);
export const gasPriceValue: ethers.BigNumber = ethers.utils.parseUnits("20", "gwei");