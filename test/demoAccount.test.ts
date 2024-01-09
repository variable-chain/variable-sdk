import { DemoAccounts } from '../src/accounts/demoAccount';

describe('DemoAccounts', () => {
  it('should print "Hello, World!" and network Id to console', () => {
    // Arrange
    const demoAccounts = new DemoAccounts();
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Act
    demoAccounts.printHelloWorld();

    // Assert
    expect(consoleLogSpy).toHaveBeenCalledWith('Hello, World!');
    expect(consoleLogSpy).toHaveBeenCalledWith(`network Id ${123}`);

    // Clean up
    consoleLogSpy.mockRestore();
  });
});
