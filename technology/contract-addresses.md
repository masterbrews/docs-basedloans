---
description: Official contract addresses for Core, LendingLedger, AssetManager, and FeeDistributor.
---

# Contract addresses

All Based Loans contracts are deployed on Base mainnet (chainId 8453) and verified on BaseScan. The addresses below are the only official deployments. Always confirm you are interacting with these addresses before approving any transaction.

{% hint style="warning" %}
Never interact with a contract address that is not listed here. Scam deployments often use similar names or claim to be newer versions of official contracts. Based Loans does not publish new contract addresses outside of official channels: the X account [@based\_loans](https://x.com/based_loans) and this documentation.
{% endhint %}

***

## Core protocol contracts

These four contracts make up the full on-chain protocol. Every loan, deposit, fee, and asset configuration passes through one or more of these.

| Contract | Address | BaseScan |
|---|---|---|
| Core | 0x88Df29c4c2D564A2996d99bbe3C85da505881Aa3 | [View on BaseScan](https://basescan.org/address/0x88Df29c4c2D564A2996d99bbe3C85da505881Aa3) |
| LendingLedger | 0x278CfeaDeAaCBe88f24692ef199247cF17c5141F | [View on BaseScan](https://basescan.org/address/0x278CfeaDeAaCBe88f24692ef199247cF17c5141F) |
| AssetManager | 0xA93407aE856Ee3241550292B8A8B7cF8B98b1212 | [View on BaseScan](https://basescan.org/address/0xA93407aE856Ee3241550292B8A8B7cF8B98b1212) |
| FeeDistributor | 0x754D694d81C96D134cd33f3F164bb1084Df019e5 | [View on BaseScan](https://basescan.org/address/0x754D694d81C96D134cd33f3F164bb1084Df019e5) |

**Core** manages the loan lifecycle: opening loans, processing buybacks, and handling collateral claims at expiry. It is the entry point for all borrower and lender actions on individual loans.

**LendingLedger** holds all lender USDC deposits. It manages the deposit queue, matches capital to loans, and tracks each lender's position and claimable proceeds. All USDC flows through this contract.

**AssetManager** stores configuration for every accepted collateral token: LTV ratios, oracle parameters, deposit caps, and enabled/disabled status. It is the source of truth for which tokens are accepted and under what conditions.

**FeeDistributor** collects protocol fees from loan repayments and routes them to the appropriate recipients. It handles the split between lender yield and the protocol treasury.

***

## Settlement token

| Token | Address | BaseScan |
|---|---|---|
| USDC (Base) | 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 | [View on BaseScan](https://basescan.org/address/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913) |

Based Loans uses native USDC on Base, issued by Circle. This is the only accepted settlement currency for loans, deposits, and buybacks.

***

## Oracle infrastructure

These contracts handle collateral pricing at loan open. They are called automatically by the Core contract and do not require direct interaction from users.

| Contract | Address | BaseScan |
|---|---|---|
| OracleManager | (via AssetManager) | Configured per asset |
| UniswapV3 TWAP adapter | 0xfcDafF6e23d22d430A19aabDefDb9B2Aa2975ba2 | [View on BaseScan](https://basescan.org/address/0xfcDafF6e23d22d430A19aabDefDb9B2Aa2975ba2) |
| Algebra TWAP adapter | 0x218CDFd5802fF3d6a22ffB14A41C3311EBfc2908 | [View on BaseScan](https://basescan.org/address/0x218CDFd5802fF3d6a22ffB14A41C3311EBfc2908) |
| Pyth adapter | 0x85Ad3d6817646143e7076096D4A053ED38eFc958 | [View on BaseScan](https://basescan.org/address/0x85Ad3d6817646143e7076096D4A053ED38eFc958) |
| Pyth oracle (Base) | 0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a | [View on BaseScan](https://basescan.org/address/0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a) |

The TWAP adapters support both UniswapV3-style pools and Algebra-style pools. The protocol treats all V3-compatible pools consistently regardless of the underlying DEX. See [Oracle and pricing](oracle-and-pricing.md) for how these sources are combined.

***

## Governance addresses

| Role | Address | BaseScan |
|---|---|---|
| DAO owner (5-of-7 multisig) | 0xa673566A818e3525E57292b22311AD0be114085C | [View on BaseScan](https://basescan.org/address/0xa673566A818e3525E57292b22311AD0be114085C) |
| Labs operator (2-of-2 multisig) | 0x3970a7372566ad1Fb888a8240A89662A5D2455E5 | [View on BaseScan](https://basescan.org/address/0x3970a7372566ad1Fb888a8240A89662A5D2455E5) |

The DAO owner is the protocol owner: it controls structural parameters and can appoint or revoke the operator. The Labs operator handles routine asset management and operational changes. See [Immutability and ownership](immutability-and-ownership.md) for the full breakdown of what each role can do.

***

## Network details

| Parameter | Value |
|---|---|
| Network | Base |
| Chain ID | 8453 |
| Block explorer | [basescan.org](https://basescan.org) |
| Native gas token | ETH |
