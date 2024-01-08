import { NetworkConfig } from "../types";

const testnetConfig: NetworkConfig = {
    "name": "zkevmTestnet",
    "chainId": 1442,
    "version": 1,
    "smartContractAddress": "0x0e23619704556945B1C7CB550Dee6D428f7d2E2B",
    "nodeURL": "https://rpc.public.zkevm-test.net",
    "websocketURL": "",
    "gas_limit": ""
}

const mainnetConfig: NetworkConfig = {
    "name": "zkevmMainnet",
    "chainId": 1444,
    "version": 1,
    "smartContractAddress": "0x0e23619704556945B1C7CB550Dee6D428f7d2E2B",
    "nodeURL": "https://rpc.public.zkevm-main.net",
    "websocketURL": "",
    "gas_limit": ""
}

export const Configs = [testnetConfig,mainnetConfig]