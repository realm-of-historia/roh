export class WalletService {
  static async fetchWallets(userId) {
    let walletsMap = {};
    const existingWallets = await WalletService.#fetchWalletsInternal(userId);
    existingWallets.forEach((wallet) => {
      const chain = wallet.chain;
      const address = wallet.publicKey;
      walletsMap[chain] = address;
    });
    return walletsMap;
  }

  static async createWallets(userId) {
    const url = `${process.env.CROSSMINT_BASEURL}/api/v1-alpha1/wallets`;
    const options = WalletService.#createOptions("POST", {
      chain: "ethereum",
      userId: userId,
    });
    return WalletService.#fetchWithExceptionHandling(url, options);
  }

  static async #fetchWalletsInternal(userId) {
    const url = new URL(
      `${process.env.CROSSMINT_BASEURL}/api/v1-alpha1/wallets`,
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
        "X-CLIENT-SECRET": process.env.CROSSMINT_X_CLIENT_SECRET,
        "X-PROJECT-ID": process.env.CROSSMINT_X_PROJECT_ID,
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