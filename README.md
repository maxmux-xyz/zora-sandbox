Docs: https://docs.zora.co/docs/smart-contracts/creator-tools/ProtocolSDK

```
npm install @zoralabs/protocol-sdk
npm install viem
```

Running the script returns error. `ts-node script.ts`:
```
➜  zora-sdk git:(main) ✗ ts-node script.ts
blockNumber 11534017n
/Users/maxime/dev/personal/zora-sdk/node_modules/viem/utils/rpc/http.ts:111
          throw new HttpRequestError({
                ^
HttpRequestError: HTTP request failed.

Status: 403
URL: https://mainnet.base.org
Request body: {"method":"eth_signTypedData_v4","params":["0x65318ba4d49C1da4B05F2632bB50e29637ed5A64","{\"domain\":{\"chainId\":8453,\"name\":\"Preminter\",\"version\":\"1\",\"verifyingContract\":\"0xe59c7040baf7d94c3ff740b1f7bf5ba74dbb75d4\"},\"message\":{\"deleted\":false,\"uid\":1,\"version\":0,\"tokenConfig\":{\"fixedPriceMinter\":\"0x04e2516a2c207e84a1839755675dfd8ef6302f0a\",\"maxSupply\":\"18446744073709551615\",\"maxTokensPerAddress\":\"0\",\"pricePerToken\":\"0\",\"mintDuration\":\"604800\",\"mintStart\":\"0\",\"royaltyMintSchedule\":0,\"royaltyBPS\":1000,\"royaltyRecipient\":\"0x65318ba4d49c1da4b05f2632bb50e29637ed5a64\",\"tokenURI\":\"ipfs://bafkreice23maski3x52tsfqgxstx3kbiifnt5jotg3a5ynvve53c4soi2u\"}},\"primaryType\":\"CreatorAttribution\",\"types\":{\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"},{\"name\":\"verifyingContract\",\"type\":\"address\"}],\"CreatorAttribution\":[{\"name\":\"tokenConfig\",\"type\":\"TokenCreationConfig\"},{\"name\":\"uid\",\"type\":\"uint32\"},{\"name\":\"version\",\"type\":\"uint32\"},{\"name\":\"deleted\",\"type\":\"bool\"}],\"TokenCreationConfig\":[{\"name\":\"tokenURI\",\"type\":\"string\"},{\"name\":\"maxSupply\",\"type\":\"uint256\"},{\"name\":\"maxTokensPerAddress\",\"type\":\"uint64\"},{\"name\":\"pricePerToken\",\"type\":\"uint96\"},{\"name\":\"mintStart\",\"type\":\"uint64\"},{\"name\":\"mintDuration\",\"type\":\"uint64\"},{\"name\":\"royaltyMintSchedule\",\"type\":\"uint32\"},{\"name\":\"royaltyBPS\",\"type\":\"uint32\"},{\"name\":\"royaltyRecipient\",\"type\":\"address\"},{\"name\":\"fixedPriceMinter\",\"type\":\"address\"}]}}"]}

Details: {"code":-32001,"message":"rpc method is not allowed"}
Version: viem@2.7.20
    at Object.request (/Users/maxime/dev/personal/zora-sdk/node_modules/viem/utils/rpc/http.ts:111:17)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async fn (/Users/maxime/dev/personal/zora-sdk/node_modules/viem/clients/transports/http.ts:113:19)
    at async request (/Users/maxime/dev/personal/zora-sdk/node_modules/viem/clients/transports/http.ts:118:39)
    at async delay.count.count (/Users/maxime/dev/personal/zora-sdk/node_modules/viem/utils/buildRequest.ts:104:18)
    at async attemptRetry (/Users/maxime/dev/personal/zora-sdk/node_modules/viem/utils/promise/withRetry.ts:39:22) {
  details: '{"code":-32001,"message":"rpc method is not allowed"}',
  docsPath: undefined,
  metaMessages: [
    'Status: 403',
    'URL: https://mainnet.base.org',
    'Request body: {"method":"eth_signTypedData_v4","params":["0x65318ba4d49C1da4B05F2632bB50e29637ed5A64","{\\"domain\\":{\\"chainId\\":8453,\\"name\\":\\"Preminter\\",\\"version\\":\\"1\\",\\"verifyingContract\\":\\"0xe59c7040baf7d94c3ff740b1f7bf5ba74dbb75d4\\"},\\"message\\":{\\"deleted\\":false,\\"uid\\":1,\\"version\\":0,\\"tokenConfig\\":{\\"fixedPriceMinter\\":\\"0x04e2516a2c207e84a1839755675dfd8ef6302f0a\\",\\"maxSupply\\":\\"18446744073709551615\\",\\"maxTokensPerAddress\\":\\"0\\",\\"pricePerToken\\":\\"0\\",\\"mintDuration\\":\\"604800\\",\\"mintStart\\":\\"0\\",\\"royaltyMintSchedule\\":0,\\"royaltyBPS\\":1000,\\"royaltyRecipient\\":\\"0x65318ba4d49c1da4b05f2632bb50e29637ed5a64\\",\\"tokenURI\\":\\"ipfs://bafkreice23maski3x52tsfqgxstx3kbiifnt5jotg3a5ynvve53c4soi2u\\"}},\\"primaryType\\":\\"CreatorAttribution\\",\\"types\\":{\\"EIP712Domain\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"version\\",\\"type\\":\\"string\\"},{\\"name\\":\\"chainId\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"verifyingContract\\",\\"type\\":\\"address\\"}],\\"CreatorAttribution\\":[{\\"name\\":\\"tokenConfig\\",\\"type\\":\\"TokenCreationConfig\\"},{\\"name\\":\\"uid\\",\\"type\\":\\"uint32\\"},{\\"name\\":\\"version\\",\\"type\\":\\"uint32\\"},{\\"name\\":\\"deleted\\",\\"type\\":\\"bool\\"}],\\"TokenCreationConfig\\":[{\\"name\\":\\"tokenURI\\",\\"type\\":\\"string\\"},{\\"name\\":\\"maxSupply\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"maxTokensPerAddress\\",\\"type\\":\\"uint64\\"},{\\"name\\":\\"pricePerToken\\",\\"type\\":\\"uint96\\"},{\\"name\\":\\"mintStart\\",\\"type\\":\\"uint64\\"},{\\"name\\":\\"mintDuration\\",\\"type\\":\\"uint64\\"},{\\"name\\":\\"royaltyMintSchedule\\",\\"type\\":\\"uint32\\"},{\\"name\\":\\"royaltyBPS\\",\\"type\\":\\"uint32\\"},{\\"name\\":\\"royaltyRecipient\\",\\"type\\":\\"address\\"},{\\"name\\":\\"fixedPriceMinter\\",\\"type\\":\\"address\\"}]}}"]}'
  ],
  shortMessage: 'HTTP request failed.',
  version: 'viem@2.7.20',
  body: {
    method: 'eth_signTypedData_v4',
    params: [
      '0x65318ba4d49C1da4B05F2632bB50e29637ed5A64',
      '{"domain":{"chainId":8453,"name":"Preminter","version":"1","verifyingContract":"0xe59c7040baf7d94c3ff740b1f7bf5ba74dbb75d4"},"message":{"deleted":false,"uid":1,"version":0,"tokenConfig":{"fixedPriceMinter":"0x04e2516a2c207e84a1839755675dfd8ef6302f0a","maxSupply":"18446744073709551615","maxTokensPerAddress":"0","pricePerToken":"0","mintDuration":"604800","mintStart":"0","royaltyMintSchedule":0,"royaltyBPS":1000,"royaltyRecipient":"0x65318ba4d49c1da4b05f2632bb50e29637ed5a64","tokenURI":"ipfs://bafkreice23maski3x52tsfqgxstx3kbiifnt5jotg3a5ynvve53c4soi2u"}},"primaryType":"CreatorAttribution","types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}],"CreatorAttribution":[{"name":"tokenConfig","type":"TokenCreationConfig"},{"name":"uid","type":"uint32"},{"name":"version","type":"uint32"},{"name":"deleted","type":"bool"}],"TokenCreationConfig":[{"name":"tokenURI","type":"string"},{"name":"maxSupply","type":"uint256"},{"name":"maxTokensPerAddress","type":"uint64"},{"name":"pricePerToken","type":"uint96"},{"name":"mintStart","type":"uint64"},{"name":"mintDuration","type":"uint64"},{"name":"royaltyMintSchedule","type":"uint32"},{"name":"royaltyBPS","type":"uint32"},{"name":"royaltyRecipient","type":"address"},{"name":"fixedPriceMinter","type":"address"}]}}'
    ]
  },
  headers: Headers {
    [Symbol(headers list)]: HeadersList {
      [Symbol(headers map)]: [Map],
      [Symbol(headers map sorted)]: null
    },
    [Symbol(guard)]: 'immutable',
    [Symbol(realm)]: null
  },
  status: 403,
  url: 'https://mainnet.base.org'
}
```
