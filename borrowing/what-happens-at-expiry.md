---
description: What happens to unredeemed collateral when a loan term ends.
---

# What happens at expiry

When your loan term ends, one of two things has happened: you bought back your collateral, or you did not. Both are valid outcomes. The protocol handles each cleanly and requires no action from you at expiry if you have already decided not to buy back.

***

## Outcome 1: you bought back in full

If you have paid the full buyback cost before the term ends, the loan is already closed. Your collateral has already been returned to your wallet. There is nothing to do at expiry. The loan shows as complete in your history.

If you partially bought back, any unredeemed portion of your collateral follows the same rules as a full non-buyback for that remaining share.

***

## Outcome 2: you did not buy back

If the term expires with collateral still in the loan, that collateral transfers to the lenders. You keep the USDC you received when the loan opened. No further action is required from you, and no additional funds are taken from your wallet.

This is the full extent of what happens. The loan closes, the lenders receive the collateral, you retain the USDC. The protocol does not chase you for anything else.

***

## The strategic default: when walking away makes sense

This is not a bug or an edge case. It is the core mechanic that makes Based Loans different from every other DeFi lending protocol.

Here is the scenario: you deposit a memecoin worth $1,000 and receive slightly under $500 USDC at open (after the protocol fee). Halfway through the term, that token crashes and is now worth $200. Your buyback cost is still $525 USDC ($500 loan + 5% term fee), fixed at open.

Paying $525 to retrieve $200 worth of tokens does not make sense. So you do not pay it. You keep the USDC already in your wallet. The lender takes the $200 of collateral. You came out ahead compared to holding the token through the crash.

| Scenario | You held | You borrowed + walked |
|----------|----------|-----------------------|
| Token drops 80% | $200 remaining | ~$491 USDC in hand |
| Token goes to zero | $0 | ~$491 USDC in hand |
| Token holds steady | $1,000 | ~$491 USDC (lost upside) |

Walking away is the rational move any time the collateral's current market value is less than the buyback cost. Lenders understand and accept this risk. They price it into the collateral settings they configure.

{% hint style="info" %}
This is exactly how a pawn shop works. You bring in a watch, get cash, and decide later whether the watch is worth more to you than the cash. If not, you walk. The pawn broker took that risk when they made the loan.
{% endhint %}

***

## What to think about as expiry approaches

A few things worth considering in the days before your loan term ends:

**Is the collateral worth more than the buyback cost?**

If yes, buying back makes sense. You get back an asset worth more than what you pay. If no, walking away is probably the better outcome. Do the math before the deadline, not after.

**Do you have the USDC?**

If you want to buy back but do not have enough USDC in your wallet, start building that position before the term ends. Partial buybacks let you move in stages if you are accumulating USDC gradually.

**Check the expiry time, not just the date.**

Loan expiry is based on the block timestamp from when the loan opened, plus the term in seconds. It is not guaranteed to land at midnight or any convenient time. The app shows the exact expiry timestamp. Check it.

**Partial positions at expiry.**

If you partially bought back during the term, only the unredeemed portion transfers to lenders at expiry. The collateral you already reclaimed is yours. There is no clawback.

{% hint style="warning" %}
Once the term expires, buyback is no longer possible. If you miss the window, you lose the collateral regardless of whether you intended to pay. Set a reminder well before the expiry date.
{% endhint %}

***

## Summary

- Full buyback before expiry closes the loan immediately. Nothing happens at the expiry date.
- If collateral is not redeemed by expiry, it transfers to lenders. You keep the USDC. No further action needed.
- Walking away is a valid and rational outcome when collateral value falls below the buyback cost.
- Partial buybacks during the term reduce the portion transferred to lenders at expiry proportionally.
- Expiry is based on block timestamp. Check the exact time in the app, not just the date.
- There is no grace period after expiry. The window closes at the exact expiry block.
