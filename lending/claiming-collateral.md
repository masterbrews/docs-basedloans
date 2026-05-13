---
description: How lenders claim defaulted collateral when borrowers don't buy back before expiry.
---

# Claiming collateral

When a loan expires without a full buyback, the collateral tokens deposited by the borrower become claimable by the lenders who funded that loan. Nothing happens automatically. You initiate the claim through the interface, and the tokens are sent directly to your wallet.

***

## When claiming becomes available

Claiming opens once the loan term expires and the borrower has not completed a full buyback. The exact moment is tied to the on-chain block timestamp, not a wall-clock estimate.

Once a loan is expired and unclaimed, it appears in the claimable section of your lender dashboard. You can claim at any time after expiry. There is no deadline to claim once the loan has expired.

{% hint style="info" %}
The interface uses the chain's current block timestamp to determine loan status. If a loan shows as active but the term has passed on your local clock, wait for the next block to confirm the state.
{% endhint %}

***

## What you receive

You receive collateral tokens proportional to your share of the loan.

If your USDC funded 100% of the loan, you claim 100% of the collateral. If your USDC funded 40% of a loan that also drew from other lenders' deposits, you receive 40% of the collateral tokens.

The tokens are sent to your connected wallet in the claim transaction. They do not return to your lender deposit balance. Once claimed, they are yours to hold, sell, or do whatever you choose.

***

## Partial buybacks and what remains

Borrowers on Based Loans can buy back their collateral in portions. If a borrower partially buys back before expiry, only the unclaimed portion of collateral remains for lenders to claim.

The way this works: each partial buyback redeems a proportional slice of the collateral. If a borrower deposited $2,000 in tokens and bought back 30% of the loan before expiry, they reclaimed 30% of their collateral. The remaining 70% of the collateral sits in the protocol and becomes claimable by lenders at expiry.

Lenders receive tokens from the remaining (unredeemed) portion only, proportional to their share of the outstanding loan balance at expiry.

**Example**

A borrower opens a $1,000 USDC loan backed by $2,000 in BRETT. Before expiry, they buy back 50% of the loan, paying $525 (50% of principal plus 50% of the fee). This redeems 50% of the collateral, or $1,000 in BRETT at open price.

The remaining $1,000 in BRETT is claimable at expiry. You funded the full loan, so you claim all of it.

***

## How to claim

1. Go to your lender dashboard and find the loan in the claimable section.
2. Select the loan and click Claim.
3. Confirm the transaction in your wallet.
4. The collateral tokens appear in your wallet.

If you have multiple claimable loans, you can process them one at a time. Each claim is a separate transaction.

***

## After claiming

Once you have claimed, that loan is fully resolved from your perspective. The collateral is in your wallet. Your remaining unmatched USDC in the protocol continues to be eligible for new loan matches.

The USDC you lent on a defaulted loan does not come back. You gave USDC, you received tokens. What you do with those tokens is entirely your decision.

{% hint style="warning" %}
If the collateral token's price has fallen significantly since the loan opened, the tokens you claim may be worth less than the USDC you originally lent. The 50% LTV provides a buffer, but it does not guarantee that the collateral holds its value. See the yield and fee distribution page for a full breakdown of the risk.
{% endhint %}

***

## Summary

- Claiming opens at loan expiry when the borrower has not fully bought back
- Initiate the claim through your lender dashboard, it does not happen automatically
- You receive collateral tokens proportional to your share of the loan
- Tokens go directly to your wallet, not back into your lender deposit
- Partial buybacks reduce the available collateral proportionally; lenders claim the remainder
- No deadline to claim after expiry
- Defaulted USDC is not returned; collateral tokens replace it
