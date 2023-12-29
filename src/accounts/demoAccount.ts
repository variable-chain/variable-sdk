import { networkId } from "..";

export class DemoAccounts {
    printHelloWorld(): void {
      console.log("Hello, World!");
      console.log(`network Id ${networkId}`)
    }
}