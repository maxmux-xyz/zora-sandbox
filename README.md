Error installing `npm install @zoralabs/protocol-sdk`:

```
➜  zora-sdk npm install @zoralabs/protocol-sdk
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: zora-sdk@1.0.0
npm ERR! Found: viem@2.7.16
npm ERR! node_modules/viem
npm ERR!   viem@"^2.7.16" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer viem@"^1.19.15" from @zoralabs/protocol-sdk@0.5.4
npm ERR! node_modules/@zoralabs/protocol-sdk
npm ERR!   @zoralabs/protocol-sdk@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! /Users/maxime/.npm/_logs/2024-03-01T14_59_52_038Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/maxime/.npm/_logs/2024-03-01T14_59_52_038Z-debug-0.log
```

un-install viem and install `npm install viem@"^1.19.15"`
`npm install @zoralabs/protocol-sdk` works with vulnerability.

```
npm install @zoralabs/protocol-sdk
npm WARN skipping integrity check for git dependency ssh://git@github.com/foundry-rs/forge-std.git
npm WARN skipping integrity check for git dependency ssh://git@github.com/dapphub/ds-test.git
npm WARN deprecated @zoralabs/protocol-sdk@0.5.4: this package version has been deprecated

added 20 packages, and audited 51 packages in 4s

12 packages are looking for funding
  run `npm fund` for details

4 vulnerabilities (3 moderate, 1 high)

To address issues that do not require attention, run:
  npm audit fix

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
```

Running the script returns error:

```
➜  zora-sdk tsc script.ts
node_modules/@zoralabs/protocol-sdk/dist/mint/mint-api-client.d.ts:2:31 - error TS2307: Cannot find module 'src/apis/chain-constants' or its corresponding type declarations.

2 import { NetworkConfig } from "src/apis/chain-constants";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@zoralabs/protocol-sdk/dist/mint/mint-api-client.d.ts:3:37 - error TS2307: Cannot find module 'src/types' or its corresponding type declarations.

3 import { GenericTokenIdTypes } from "src/types";
                                      ~~~~~~~~~~~

node_modules/@zoralabs/protocol-sdk/dist/mint/mint-client.d.ts:5:37 - error TS2307: Cannot find module 'src/types' or its corresponding type declarations.

5 import { GenericTokenIdTypes } from "src/types";
                                      ~~~~~~~~~~~

node_modules/@zoralabs/protocol-sdk/dist/premint/conversions.d.ts:1:23 - error TS2307: Cannot find module 'src/apis/generated/premint-api-types' or its corresponding type declarations.

1 import { paths } from "src/apis/generated/premint-api-types";
                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@zoralabs/protocol-sdk/dist/premint/premint-api-client.d.ts:4:31 - error TS2307: Cannot find module 'src/apis/chain-constants' or its corresponding type declarations.

4 import { NetworkConfig } from "src/apis/chain-constants";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@zoralabs/protocol-sdk/dist/premint/premint-client.d.ts:6:29 - error TS2307: Cannot find module 'src/apis/http-api-base' or its corresponding type declarations.

6 import { IHttpClient } from "src/apis/http-api-base";
                              ~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@zoralabs/protocol-sdk/dist/premint/premint-client.d.ts:7:27 - error TS2307: Cannot find module 'src/mint/mint-client' or its corresponding type declarations.

7 import { MintCosts } from "src/mint/mint-client";
                            ~~~~~~~~~~~~~~~~~~~~~~

node_modules/@zoralabs/protocol-sdk/dist/premint/preminter.d.ts:5:27 - error TS2307: Cannot find module 'src/mint/mint-client' or its corresponding type declarations.

5 import { MintCosts } from "src/mint/mint-client";
                            ~~~~~~~~~~~~~~~~~~~~~~


Found 8 errors in 6 files.

Errors  Files
     2  node_modules/@zoralabs/protocol-sdk/dist/mint/mint-api-client.d.ts:2
     1  node_modules/@zoralabs/protocol-sdk/dist/mint/mint-client.d.ts:5
     1  node_modules/@zoralabs/protocol-sdk/dist/premint/conversions.d.ts:1
     1  node_modules/@zoralabs/protocol-sdk/dist/premint/premint-api-client.d.ts:4
     2  node_modules/@zoralabs/protocol-sdk/dist/premint/premint-client.d.ts:6
     1  node_modules/@zoralabs/protocol-sdk/dist/premint/preminter.d.ts:5
```
