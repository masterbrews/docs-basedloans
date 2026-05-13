---
description: Public contracts, verified infrastructure, and independent audits behind Based Loans.
icon: microchip
---

# Technology

Based Loans runs on a set of non-upgradeable smart contracts deployed on Base mainnet. Every contract is publicly verified, every address is published, and the entire system has been independently audited before launch. There are no admin keys that can move user funds, no upgrade proxies that can change the rules mid-game, and no off-chain components that users need to trust. What is deployed is what runs.

***

## Explore the technology pages

**●** [**Contract addresses**](contract-addresses.md)\
Every deployed contract address with direct links to BaseScan verification.

**●** [**Security and audits**](security-and-audits.md)\
The full audit record and the security principles baked into the protocol design.

**●** [**Oracle and pricing**](oracle-and-pricing.md)\
How collateral prices are sourced at loan open and what prevents oracle manipulation.

**●** [**Immutability and ownership**](immutability-and-ownership.md)\
What is fixed forever, what the DAO controls, and how governance is structured between the DAO and Labs.

***

## What the infrastructure looks like

#### ✔ Deployed on Base

All contracts live on Base mainnet (chainId 8453). Base is an Ethereum L2 built by Coinbase, offering low transaction costs, fast block times, and full EVM compatibility. Based Loans does not operate on any other chain.

#### ✔ Non-upgradeable contracts

The core loan logic is deployed without upgrade proxies. Once deployed, the contract behaviour cannot be changed. This means no team member, multisig, or governance vote can alter how funds move through the protocol after the fact. Users interact with exactly what was audited.

#### ✔ No admin withdrawal rights

No address in the system has the ability to withdraw user funds. Borrower collateral is held by the Core contract and can only move via borrower-initiated buyback or lender-initiated claim after expiry. Lender USDC is held by LendingLedger and can only move via protocol-authorised loan matching or lender withdrawal. There is no backdoor.

#### ✔ Independently audited

The full contract suite was audited by Hashlock before launch. The audit covers Core, LendingLedger, AssetManager, and FeeDistributor. The report is publicly available.

#### ✔ DAO-owned, operator-managed

Protocol ownership sits with a 5-of-7 DAO multisig. Day-to-day operations such as adding assets and adjusting fee rates are handled by a separate 2-of-2 Labs operator multisig. The two roles are intentionally separated so that routine management does not require DAO consensus, but structural changes always do.

***

Based Loans is designed to be verifiable at every layer. The contracts are open, the addresses are published, the audit is public, and the ownership structure is on-chain. There is nothing to trust that you cannot verify yourself.
