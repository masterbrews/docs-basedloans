---
description: Third-party audit reports and the security practices behind the protocol.
---

# Security and audits

Based Loans was independently audited before launch. The audit covered every contract in the protocol and was completed by Hashlock, a smart contract security firm specialising in DeFi protocol reviews. The findings and the team's responses are documented in the public report.

***

## Audit record

| Auditor | Scope | Status | Report |
|---|---|---|---|
| Hashlock | Core, LendingLedger, AssetManager, FeeDistributor | Completed | [View report](https://hashlock.com/audits/basedloans) |

<!-- FLAG: Confirm with Keith that https://hashlock.com/audits/basedloans is the final correct URL for the audit report before publishing. -->

The audit examined the full loan lifecycle, including loan opening, buyback processing, collateral claims, lender deposit matching, fee distribution, and all administrative functions. Oracle integration, access control patterns, and arithmetic handling were reviewed in full.

{% hint style="info" %}
The audit was conducted against the exact bytecode deployed to Base mainnet. Because the contracts are non-upgradeable, the audited code is the code running in production with no exceptions.
{% endhint %}

***

## Security design principles

The audit is one layer of security. The deeper layer is the architecture itself. Based Loans is designed so that the most dangerous categories of DeFi risk either do not exist or are structurally prevented.

### Non-upgradeable contracts

The protocol does not use proxy patterns or upgrade mechanisms. Once a contract is deployed, its logic is permanent. No team member, governance vote, or multisig action can change how funds move through the contracts. Users interact with exactly what was audited, for the lifetime of the protocol.

### No admin withdrawal rights

No address in the system has a function to withdraw user funds. Lender USDC in LendingLedger can only move through the defined protocol flows: into a matched loan, back to the lender via withdrawal, or forward as a claim on loan proceeds. Borrower collateral in Core can only move via borrower buyback or lender claim after expiry. There is no sweep function, no emergency exit that bypasses users, and no privileged withdrawal path.

### Minimal privilege surface

The operator role, held by the Labs 2-of-2 multisig, can add or disable assets, adjust fee rates within set bounds, and manage operational parameters. It cannot move user funds, modify the loan lifecycle logic, or change the ownership structure. The owner role, held by the DAO 5-of-7 multisig, can replace the operator and update high-level parameters, but it has the same restriction on user funds. See [Immutability and ownership](immutability-and-ownership.md) for the exact breakdown.

### Fixed loan terms prevent mid-loan manipulation

Because the price, loan amount, and buyback cost are all locked at loan open, there is no mechanism by which a price manipulation during the loan period can affect the protocol. Oracle manipulation can only affect loans opening in that moment, not existing ones. The dual-source oracle further limits this risk at the point of loan creation.

### Price manipulation resistance

The dual oracle system requires both a Pyth price feed and a DEX TWAP to agree before a loan can open. A single source being temporarily manipulated is not sufficient to produce an inflated loan. If the two sources diverge, the loan cannot open. See [Oracle and pricing](oracle-and-pricing.md) for the full mechanism.

***

## Responsible disclosure

If you discover a potential vulnerability in the Based Loans contracts, please disclose it privately before publishing. Contact the team through the official X account [@based\_loans](https://x.com/based_loans) or the Based Loans Discord with a description of the issue. Do not exploit the vulnerability or share it publicly before the team has had the opportunity to review and respond.

<!-- FLAG: Confirm with Keith whether there is a formal bug bounty program or a specific disclosure email to include here. -->
