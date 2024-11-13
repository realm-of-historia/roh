import { DigitalAsset } from "@metaplex-foundation/mpl-token-metadata";

export type NftWithImage = DigitalAsset & { imageUrl: string }