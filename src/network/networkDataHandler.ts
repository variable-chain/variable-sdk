import { NetworkConfig } from "../types";
import { Configs } from "./config"



export class NetworkDataHandler {
    private config: NetworkConfig | undefined;

    constructor(configNameOrChainIdOrFileLocation: string | number) {
        if (typeof configNameOrChainIdOrFileLocation === 'number') {
            // user entered a chain id
            this.config = this.getConfigByChainId(configNameOrChainIdOrFileLocation);
        } else if (typeof configNameOrChainIdOrFileLocation === "string") {
            if (/\.json$/.test(configNameOrChainIdOrFileLocation)) {
              // user entered a string that ends in .json
              this.config = this.getConfigByLocation(configNameOrChainIdOrFileLocation);
            } else {
              // user entered a name
              this.config = this.getConfigByName(configNameOrChainIdOrFileLocation);
            }
          } else {
            throw Error(`Please specify a chain ID, config name, or custom file location.`);
          }
          if (this.config == undefined) {
            throw Error(`Config ${configNameOrChainIdOrFileLocation} not found.`);
          }
    }

    private getConfigByChainId(chainId: number): NetworkConfig | undefined {
        return Configs.find(config => config.chainId === chainId);
    }

    private getConfigByName(name: string): NetworkConfig | undefined {
        return Configs.find(config => config.name === name);
    }

    private getConfigByLocation(filename: string) {
        // file path: this throws a warning during build - that's ok, it just won't work in react apps
        // eslint-disable-next-line
        let configFile = require(filename) as NetworkConfig;
        return configFile;
      }

    getConfig(): NetworkConfig {
        if (this.config == undefined) throw Error(`No SDK config found `);
        return this.config;
    }
}


