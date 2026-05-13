---
description: Where yield comes from, how fees are split, and when you receive your earnings.
---

# Yield and fee distribution

Lender yield on Based Loans comes from two sources depending on how each loan ends. A buyback pays a fixed fee. A default delivers collateral. Both paths are profitable under the right conditions, and both are defined precisely at the moment the loan opens. There are no variable rates, no retroactive adjustments, and no surprise deductions.

***

## Fee rates by term

Borrowers pay a fixed fee based on the loan term they choose when opening the loan. The rate applies to the total USDC borrowed.

| Term | Fee rate |
|---|---|
| 15 days | 2.5% |
| 30 days | 5% |
| 45 days | 7.5% |

The term fee is paid by the borrower only if they buy back. If they default, no term fee is paid. Instead, lenders receive the collateral.

Note: a separate protocol fee is deducted from the USDC disbursed to the borrower at loan open. This happens before any lender receives funds and is unrelated to the term fee.

***

## Path 1: Buyback

When a borrower buys back their collateral before the term expires, they repay the loan amount plus the term fee. The full term fee goes to lenders. The protocol's cut was already collected separately at loan open.

Lenders receive their original USDC back plus their full proportional share of the term fee. The distribution is proportional: if your USDC funded 40% of the loan, you receive 40% of the full term fee from that loan.

Your USDC and fee return to your unmatched balance and are available to withdraw or be re-matched immediately.

**Worked example: buyback**

A borrower opens a 30-day loan, posting $2,000 in collateral and borrowing $1,000 USDC. The 30-day fee is 5%, so their buyback cost is $1,050.

You funded the full $1,000. At buyback:

- You receive your $1,000 back
- You receive the full $50 term fee
- Your deposit is now $1,050 in unmatched USDC, compared to $1,000 before the loan opened

The loan is done. Your capital is free to be matched again.

***

## Path 2: Default

When a borrower does not buy back before expiry, the loan closes and the collateral tokens become claimable by lenders. No USDC is returned. Instead, you receive tokens.

The value proposition here is the 50% LTV. Every loan is structured so the collateral is worth roughly twice the loan in USDC at the price locked when the loan opened. A $1,000 loan is backed by $2,000 in collateral at open-price. If you funded the whole loan, you can claim $2,000 worth of tokens for the $1,000 you lent.

How much you actually gain depends on where the token's price is when you claim, relative to where it was when the loan opened.

**Worked example: default**

Same loan: $1,000 USDC borrowed, $2,000 in VIRTUAL at open price. 30-day term. The borrower does not buy back.

You claim the VIRTUAL after expiry. Three scenarios:

| VIRTUAL price at claim | Tokens you receive | Value at claim |
|---|---|---|
| Same as open | $2,000 worth | $2,000 (2x your USDC) |
| Down 30% from open | $2,000 worth at open price | ~$1,400 (still ahead) |
| Down 50% from open | $2,000 worth at open price | ~$1,000 (break-even) |
| Down 60% from open | $2,000 worth at open price | ~$800 (loss) |

The 50% LTV provides a substantial buffer. The collateral price has to fall more than 50% from the moment the loan opened before you lose money on a default. At exactly 50% down, you roughly break even. Beyond that, you take a loss on that loan.

{% hint style="warning" %}
Default is not always the worse outcome for lenders. If you enabled a token you believe in and the borrower walks away, you receive a larger position in that token than your USDC alone would have bought at open price. Some lenders view defaults on strong tokens as a feature, not a failure.
{% endhint %}

***

## Risk: collateral price decline

The primary risk lenders take on is token price decline. This risk only materializes on defaults. On a buyback, you receive USDC plus a fee regardless of what happened to the collateral price during the term.

On a default, the collateral token's price at the time you claim determines your actual return. Based Loans does not liquidate collateral in real-time, and does not sell tokens on your behalf. You receive the tokens themselves and decide what to do with them.

This is why the token selection step matters. Only enable collateral tokens you would be willing to hold. If a token dropped to near zero, you would be left holding near-worthless tokens instead of your original USDC. No protocol mechanism prevents this. The 50% LTV provides a buffer, not a guarantee.

***

## Summary

- Yield comes from borrower fees (buyback path) or collateral tokens (default path)
- Fee rates: 2.5% for 15 days, 5% for 30 days, 7.5% for 45 days
- On buyback: you receive USDC back plus your full proportional share of the term fee
- On default: you receive collateral tokens worth ~2x the loan value at open price
- The 50% LTV gives you a buffer of up to 50% price decline before you lose money on a default
- Price risk on defaults is real: only enable tokens you are comfortable holding
- All rates and terms are locked at the moment the loan opens
