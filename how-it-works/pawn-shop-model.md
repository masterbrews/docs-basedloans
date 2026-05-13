---
description: Why we designed Based Loans like a pawn shop, and what that means for you.
---

# The pawn shop model

Most people have never used a pawn shop, but everyone understands how one works. You bring something valuable, the pawn broker gives you cash, you have a set amount of time to buy it back, and if you do not come back in time, the pawn broker keeps the item. No credit check, no income verification, no negotiation over price during the loan. The terms are agreed once and that is it.

Based Loans applies this same model to crypto tokens. Your collateral is the item. USDC is the cash. The buyback cost is agreed at the start and never changes. If you do not buy back before expiry, lenders receive your collateral. Simple, predictable, and honest about the tradeoffs.

***

## Why liquidations are a bad deal for borrowers

The dominant model in DeFi lending uses floating collateral ratios and price-triggered liquidations. When the value of your collateral drops below a threshold, your position is automatically liquidated: your collateral is sold, fees are charged, and you are left with whatever remains.

This creates several problems for borrowers.

* You have to monitor your position constantly, or pay for a bot to do it.
* A single wick in price, even one that reverses immediately, can wipe out your position.
* The liquidation price is not fixed. It depends on your health factor, which changes as price moves.
* Liquidation penalties are charged on top of the interest you already owe.

Most borrowers who get liquidated did not borrow recklessly. They borrowed against a token they believed in, got hit by volatility, and were forced out of their position at the worst possible moment.

***

## What the pawn shop model changes

Based Loans removes price-triggered outcomes entirely. The value of your collateral is measured exactly once: at the moment the loan opens. From that point, nothing that happens to the price of your token affects the terms of your loan.

You borrow 50% of the collateral's value at loan open. That is your USDC. The cost to get your collateral back is that USDC amount plus a fixed fee, determined by the loan term you chose. That number does not move.

If the price of your collateral falls by 80% during the loan, you still owe the same buyback cost. You might decide the buyback is not worth it given the new price, and walk away. That is a valid choice and the protocol fully supports it. But you are never forced out. You are never liquidated. You make the decision, on your own timeline, before expiry.

If the price of your collateral rises by 300% during the loan, you pay the same buyback cost. You get your collateral back for the original agreed price and capture the upside. This is the borrower's reward for picking the right asset.

***

## How the pawn shop maps to Based Loans

| Pawn shop concept | Based Loans equivalent |
|---|---|
| Valuable item | Any supported collateral token |
| Cash from the broker | USDC received at loan open |
| Loan term | 15, 30, or 45 days |
| Redemption price | Original loan amount + fixed fee |
| Broker keeps the item | Lenders receive the collateral at expiry |
| Partial redemption | Buy back any portion of collateral before expiry |

The most important column is the last row. Just as some pawn shops will let you reclaim part of your item (or a portion of a lot), Based Loans supports partial buybacks. You can buy back 25% of your collateral today, another 50% next week, and the rest the day before expiry. Each partial buyback pays the proportional share of the fee. You are never forced into an all-or-nothing decision.

***

## What this means for lenders

The pawn shop model works for lenders too, and in a way that is fundamentally different from liquidation-based protocols.

In a liquidation-based system, lenders are exposed to smart contract risk, liquidation engine risk, oracle manipulation risk, and the possibility that collateral is sold at a loss during a market crash. The protocol's ability to make lenders whole depends entirely on the liquidation mechanism working correctly under extreme conditions.

In the pawn shop model, lenders agree upfront to accept specific collateral tokens and set a USDC cap for each. If a borrower does not buy back their collateral, the lender receives those tokens. The lender knew this was a possible outcome when they configured their settings. There is no liquidation engine to fail.

This creates a different risk profile: lenders should only configure tokens they are comfortable holding if a borrower walks away. In exchange, the yield is straightforward: the borrower's fee, paid entirely upfront, is the lender's return. No variable interest rates. No rate curves. The fee is fixed from day one.

***

## Summary

* The pawn shop model replaces liquidations with a fixed-term, fixed-cost structure.
* Collateral value is measured once at loan open. Price changes during the loan do not affect your terms.
* Borrowers choose whether to buy back, paying a fee agreed at the start.
* Partial buybacks are supported: reclaim any portion at any time before expiry.
* Lenders earn yield from borrower fees and receive collateral if borrowers walk away.
* The outcome is always one of two things: buyback, or collateral transfer. No liquidation engine required.
