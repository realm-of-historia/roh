const projectId = "1b6866d4-3236-42e9-83a2-f376668316e9";
const clientSecret = "sk_test.758515a4.81408c4fb94a9d32c6449756a12fe1d9";
const baseUrl="https://staging.crossmint.com"

export class WalletService {
  static async fetchWallets(userId) {
    let walletsMap = {};
    const existingWallets = await WalletService.#fetchWalletsInternal(userId);
    
    if(existingWallets.error){
      return null;
    } else{
      existingWallets.forEach((wallet) => {
        const chain = wallet.chain;
        const address = wallet.publicKey;
        walletsMap[chain] = address;
      });
      return walletsMap;
    }
  }

  static async createWallets(userId) {
    const url = `${baseUrl}/api/v1-alpha1/wallets`;
    const options = WalletService.#createOptions("POST", {
      chain: "solana",
      userId: userId,
    });
    return WalletService.#fetchWithExceptionHandling(url, options);
  }

  static async #fetchWalletsInternal(userId) {
    const url = new URL(
      `${baseUrl}/api/v1-alpha1/wallets`,
    );
    url.searchParams.append("userId", userId);
    const options = WalletService.#createOptions("GET");
    return WalletService.#fetchWithExceptionHandling(url, options);
  }

  static #createOptions(method, body = null) {
    return {
      method: method,
      headers: {
        accept: "application/json",
        "X-CLIENT-SECRET": clientSecret,
        "X-PROJECT-ID": projectId,
        ...(body && { "content-type": "application/json" }),
      },
      ...(body && { body: JSON.stringify(body) }),
    };
  }

  static async #fetchWithExceptionHandling(url, options) {
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error("Error whilst fetching", error);
      throw new Error("An internal error has occurred");
    }
  }
}
