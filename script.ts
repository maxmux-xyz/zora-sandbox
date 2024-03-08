import {createPremintClient, PremintConfigVersion} from "@zoralabs/protocol-sdk";
import type {PublicClient, WalletClient} from "viem";
import { createPublicClient, createWalletClient, http, Account } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { zoraSepolia } from 'viem/chains'

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
  creatorAccount: Account;
}) {
  const premintClient = createPremintClient({chain: walletClient.chain!, publicClient: publicClient});
  
  // create and sign a free token creation.
  const createdPremint = await premintClient.createPremint({
    walletClient,
    creatorAccount: creatorAccount,
    // if true, will validate that the creator is authorized to create premints on the contract.
    checkSignature: true,
    // collection info of collection to create
    premintConfigVersion: PremintConfigVersion.V2,

    collection: {
      contractAdmin: creatorAccount.address,
      contractName: "Testing Contract",
      contractURI: "ipfs://bafyreiaclymbwcpndix6j5buj3342gruopdyke23b3llbbdegpaxjxkyuq",
    },
    // token info of token to create
    tokenCreationConfig: {
      tokenURI: "ipfs://bafyreiaclymbwcpndix6j5buj3342gruopdyke23b3llbbdegpaxjxkyuq",
      createReferral: "0xe16Bd85C59f7A75350350676D798A1C193F9e7f0", // Referral address, platform address that will get fees.
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
  const cl = createPublicClient({
    chain: zoraSepolia,
    transport: http(),
  })
  const blockNumber = await cl.getBlockNumber()
  console.log('blockNumber', blockNumber)

  const account = privateKeyToAccount('0x<YOURPK>') // Creator account, will be owner of the collection
  account.address
  const wc = createWalletClient({
    account,
    chain: zoraSepolia,
    transport: http()
  })

  const {uid, tokenContractAddress} = await createForFree({
    walletClient: wc,
    publicClient: cl as PublicClient,
    creatorAccount: account,
  })

  console.log('uid', uid)
  console.log('tokenContractAddress', tokenContractAddress)
}

main();
