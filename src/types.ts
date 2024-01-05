export interface NetworkConfig {
    name: string;
    chainId: number;
    version: number;
    smartContractAddress: string;
    nodeURL: string;
    websocketURL?: string;
    gas_limit?: string;
  }