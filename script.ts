import {createPremintClient} from "@zoralabs/protocol-sdk";
import type {Address, PublicClient, WalletClient} from "viem";
import { createPublicClient, createWalletClient, http } from 'viem'
import { baseSepolia } from 'viem/chains'

async function createForFree({
  walletClient,
  publicClient,
  creatorAccount,
}: {
  // wallet client that will submit the transaction
  walletClient: WalletClient;
  // public client that will simulate the transaction
  publicClient: PublicClient;
  // address of the token contract
  creatorAccount: Address;
}) {
  const premintClient = createPremintClient({chain: walletClient.chain!, publicClient: publicClient});

  // create and sign a free token creation.
  const createdPremint = await premintClient.createPremint({
    walletClient,
    creatorAccount,
    // if true, will validate that the creator is authorized to create premints on the contract.
    checkSignature: true,
    // collection info of collection to create
    collection: {
      contractAdmin: creatorAccount,
      contractName: "Testing Contract",
      contractURI: "ipfs://bafkreiainxen4b4wz4ubylvbhons6rembxdet4a262nf2lziclqvv7au3e",
    },
    // token info of token to create
    tokenCreationConfig: {
      tokenURI: "ipfs://bafkreice23maski3x52tsfqgxstx3kbiifnt5jotg3a5ynvve53c4soi2u",
    },
  });

  const premintUid = createdPremint.uid;
  const premintCollectionAddress = createdPremint.verifyingContract;

  return {
    // unique id of created premint, which can be used later to
    // update or delete the premint
    uid: premintUid,
    tokenContractAddress: premintCollectionAddress,
  };
}

async function main() {
  const client = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  })
  const blockNumber = await client.getBlockNumber()
  console.log('blockNumber', blockNumber)

  // const client = usePublicClient({
  //   chainId: baseSepolia.id,
  // })

  const wc = createWalletClient({
    chain: baseSepolia,
    transport: http()
  })

  const {uid, tokenContractAddress} = await createForFree({
    walletClient: wc,
    publicClient: client,
    // address of the token contract
    creatorAccount: '0xe16Bd85C59f7A75350350676D798A1C193F9e7f0'
  })

  console.log('uid', uid)
  console.log('tokenContractAddress', tokenContractAddress)
}

main();