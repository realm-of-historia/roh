//@ts-nocheck

const { dasApi } = require('@metaplex-foundation/digital-asset-standard-api');
const { publicKey } = require('@metaplex-foundation/umi');
// import publicKey from '@metaplex-foundation/umi'
const { createUmi } = require('@metaplex-foundation/umi-bundle-defaults');

function getRpcUrl() {
//   if (!process.env.SOLANA_RPC_URL) {
//     throw new Error('No RPC URL SOLANA_RPC_URL');
//   }
  return 'https://api.devnet.solana.com'
}

function getCollection() {
//   if (!process.env.SOLANA_COLLECTION) {
//     throw new Error('No SOLANA_COLLECTION');
//   }
  return 'CX5HMS4Z6EndWtqCezvwi85uXByeXzh6mEToJrTy5Mk8'
}


// function getRpcUrl() {
//     if (!process.env.SOLANA_RPC_URL) {
//       throw new Error('No RPC URL SOLANA_RPC_URL');
//     }
//     return process.env.SOLANA_RPC_URL;
//   }
  
//   function getCollection() {
//     if (!process.env.SOLANA_COLLECTION) {
//       throw new Error('No SOLANA_COLLECTION');
//     }
//     return process.env.SOLANA_COLLECTION;
//   }

async function getAllNftsByOwner(owner) {
  owner = publicKey(owner);


  const umi = createUmi(getRpcUrl()).use(dasApi());

  const assets = [];

  async function fetch(limit, page = 1, retry = 1) {
    if (retry === 3) return;
    try {
      const tokens = await umi.rpc.getAssetsByOwner({ owner, limit, page });
      assets.push(...tokens.items);
      if (tokens.total >= limit) {
        await fetch(limit, page + 1);
      }
    } catch (e) {
      console.log(e);
      await fetch(limit, page, retry + 1);
    }
  }

  await fetch(1000);

  return assets;
}

export async function getAllRohCollectionNftByOwner(owner) {
  try {
    const data = await getAllNftsByOwner(owner);
    const collection = getCollection();
    // console.log(data.filter((t) => t.interface === 'V1_NFT' && t.grouping?.some((t) => t.group_value === collection)))
    return data.filter((t) => t.interface === 'V1_NFT' && t.grouping?.some((t) => t.group_value === collection));
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
