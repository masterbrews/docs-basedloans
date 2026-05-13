---
description: A simple lending system where loan outcomes are defined from the start.
---

# How Loans Work

Based Loans introduces a different approach to DeFi lending by replacing liquidation risk with fixed loan terms and predetermined outcomes.

Borrowers deposit tokens as collateral and receive a USDC loan based on predefined parameters such as loan-to-value ratio and loan duration.

Instead of being subject to liquidations, borrowers simply have until the loan’s expiration to buy back their collateral at a fixed price that includes the lender premium.

If the loan expires with collateral remaining, that collateral is forfeited and transferred to lenders.

This structure creates a predictable lending system similar to a pawn shop, but designed for crypto markets.

***

## The Loan Lifecycle

Every loan follows the same simple lifecycle.

### 1. Collateral Deposit

A borrower deposits supported tokens as collateral and receives a USDC loan based on the protocol’s loan parameters.

The loan is issued with:

• a fixed term\
• a predetermined buyback price\
• clearly defined collateral amounts

All terms are established when the loan is created.

***

### 2. Buyback Period

During the life of the loan, the borrower may buy back any portion of their collateral at any time.

Each portion of collateral has a fixed buyback price that includes the lender premium.

Borrowers can choose to:

• buy back their entire collateral position\
• buy back only a portion of their collateral\
• leave the collateral untouched until expiration

There are **no margin calls and no liquidation events** during this period.

***

### 3. Loan Expiration

When the loan reaches its expiration time, any collateral that has not been bought back is treated as defaulted.

That remaining collateral is then transferred to lenders according to the protocol’s settlement rules.

This process occurs automatically through the protocol’s smart contracts.

***

## Outcomes for Borrowers

Borrowers have full control over how they manage their loan.

They may:

• buy back all of their collateral before expiration\
• buy back only part of their collateral\
• allow the loan to expire and forfeit the remaining collateral

Because the buyback price is fixed when the loan is created, borrowers always know exactly what it will cost to reclaim their assets.

***

## Outcomes for Lenders

Lenders provide USDC liquidity to the protocol and receive one of two outcomes:

• repayment of their USDC plus the agreed premium\
• defaulted collateral if the borrower does not buy it back before expiration

This structure creates a transparent lending market where lenders can earn predictable premiums or acquire collateral through defaulted loans.

***

## Why This Model Matters

Traditional DeFi lending relies on liquidation mechanisms that can force collateral to be sold when prices move quickly.

Based Loans removes this mechanism entirely.

By using fixed loan terms and predetermined buyback prices, the protocol creates a system where both borrowers and lenders understand the possible outcomes before the loan even begins.

The result is a lending model that is simple, transparent, and easier to reason about during volatile market conditions.
