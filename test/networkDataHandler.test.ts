import { NetworkDataHandler } from "../src"

// Mocking Configs
jest.mock('../src/network/config', () => ({
  Configs: [
    {
      name: 'zkevmTestnet',
      chainId: 1442,
      version: 1,
      smartContractAddress: '0x0e23619704556945B1C7CB550Dee6D428f7d2E2C',
      nodeURL: 'https://rpc.public.zkevm-test.net',
      websocketURL: '',
      gas_limit: '',
    },
    {
      name: 'zkevmMainnet',
      chainId: 1444,
      version: 1,
      smartContractAddress: '0x0e23619704556945B1C7CB550Dee6D428f7d2E2B',
      nodeURL: 'https://rpc.public.zkevm-main.net',
      websocketURL: '',
      gas_limit: '',
    },
  ],
}));

describe('NetworkDataHandler', () => {
  it('should create an instance with chainId 1442', () => {
    const handler = new NetworkDataHandler(1442);
    expect(handler.getConfig().name).toBe('zkevmTestnet');
  });

  it('should create an instance with config name "zkevmMainnet"', () => {
    const handler = new NetworkDataHandler('zkevmMainnet');
    expect(handler.getConfig().chainId).toBe(1444);
  });

//   it('should create an instance with file location', () => {
//     const handler = new NetworkDataHandler('./path/to/config.json');
//     expect(handler.getConfig().name).toBe('zkevmTestnet');
//   });

  it('should throw an error for invalid input', () => {
    expect(() => new NetworkDataHandler(123)).toThrowError('Config 123 not found.');
  });
});
