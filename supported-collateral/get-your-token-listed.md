---
description: What it takes to get a token added as accepted collateral on Based Loans.
---

# Get your token listed

Based Loans is built on Base and prioritises tokens that are actually traded and held by the Base community. The initial list of 25 tokens is a starting point, not a ceiling. New tokens can be added as the protocol grows, provided they meet the criteria below. These criteria exist to protect lenders: every token that enters the system can be valued reliably, traded on secondary markets, and is what it claims to be.

***

## What we look for

### Verified, immutable contract

The token contract must be verified on BaseScan. The contract must not be upgradeable, or if it contains upgrade logic, the upgrade keys must be renounced or locked in a transparent and verifiable way. Tokens with hidden mint functions, blacklist powers, or fee-on-transfer mechanics that could affect protocol accounting are not eligible.

### On-chain trading activity

Based Loans uses a time-weighted average price drawn from a V3-compatible DEX pool to help value collateral at loan open. For this to work reliably, the token needs an established trading activity pool on Base with enough depth that the TWAP cannot be easily manipulated by a single trade.

Tokens with very thin trading activity, very new pools, or pools with extreme concentration risk are not eligible until their trading activity profile matures.

### Oracle availability

The protocol supports two oracle sources: Pyth network price feeds and DEX TWAP. Ideally, a token has both. At minimum, it must have one reliable source. If a Pyth feed exists for the token, that is a strong signal. If not, the DEX pool must have sufficient depth and history for a TWAP to be meaningful.

### Community or utility signal

We favour tokens with an identifiable community, active holders, and some track record on Base, whether that is a trading history, a recognisable project, or a clear partnership reason. This is not a hard requirement, but it matters when evaluating borderline cases. Rugpulled or abandoned projects are not eligible.

### Lender interest

Listing a token is only useful if lenders are willing to back it. Tokens with strong community support within the Based Loans or Monstro DeFi ecosystems, or with an active team willing to seed lender interest, are prioritised.

***

## How to apply

If your token meets the criteria above, reach out through one of the following channels.

**X (Twitter):** [@based\_loans](https://x.com/based_loans). DM us with your token name, contract address, and a brief description of why you believe it meets the listing criteria.

**Discord:** [Join the Based Loans Discord](https://discord.gg/placeholder) and post in the token listing channel.

<!-- FLAG: Discord invite link needs to be confirmed by Keith before publishing. Replace the placeholder above. -->

Include the following in your message:

* Token name and ticker
* Contract address on Base (BaseScan link preferred)
* DEX pool address and pool age
* Pyth price feed ID, if one exists
* Brief description of the project or community

We review submissions on a rolling basis. There is no formal queue or timeline commitment, but tokens that clearly meet all criteria and have active lender interest move faster.

***

## What happens after listing

Once a token is approved and configured by the protocol team, it becomes available for lenders to opt into. Lenders set their own USDC caps per token, so availability of loans against a newly listed token depends on lenders choosing to enable it.

New listings are announced through the official X account and Discord. If you are working to get a token listed, coordinating with the community ahead of launch helps ensure lender coverage from day one.

{% hint style="info" %}
Listing approval is handled by the Labs operator multisig, which manages day-to-day protocol operations. It does not require a DAO vote for standard additions that meet the established criteria.
{% endhint %}

<!-- FLAG: Confirm with Keith whether the exact listing criteria above (especially the trading activity and oracle requirements) are correct and complete, and whether there is a formal process or contact email to add. -->
