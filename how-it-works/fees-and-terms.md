---
description: Fixed loan terms, fee structure, and what's locked in at the moment you borrow.
---

# Fees and terms

Based Loans offers three loan terms. You choose one when you open a loan, and the fee for that term is added to your buyback cost immediately. Nothing changes from that point forward. This page explains how the fee is calculated, what it pays for, and how to think about the tradeoff between term length and cost.

***

## Loan terms and fees

| Term | Fee | Buyback cost on a $1,000 loan |
|---|---|---|
| 15 days | 2.5% | $1,025 USDC |
| 30 days | 5% | $1,050 USDC |
| 45 days | 7.5% | $1,075 USDC |

The fee is a flat percentage of the loan amount, not the collateral value. If you borrow $500 USDC on a 30-day term, the fee is $25 USDC (5% of $500), and your buyback cost is $525 USDC.

{% hint style="info" %}
The minimum loan amount is $50 USDC. To qualify for a loan, your collateral must be worth at least $100 at current prices, since the loan amount is 50% of collateral value.
{% endhint %}

***

## Fees are fixed at loan open

The fee is calculated the moment your loan opens and does not change for any reason. It does not accrue over time. It does not increase if you hold the loan to the last day. It does not decrease if you buy back early.

If you open a 45-day loan and buy back after 5 days, you pay the full 45-day fee. This is intentional. Lenders configure their USDC around specific term lengths, and the fee they expect to earn is the same regardless of when within the term you buy back. Borrowers who want lower fees should choose a shorter term from the start.

The buyback cost formula is always:

```
Buyback cost = Loan amount + (Loan amount × Fee rate)
```

For a $600 loan on a 45-day term: `$600 + ($600 × 7.5%) = $600 + $45 = $645 USDC`

***

## What the fee pays for

Two separate fees apply when you borrow.

**Protocol fee (at loan open).** A small percentage is deducted from the USDC you receive when the loan opens. This goes to the protocol treasury. The interface shows the exact amount before you confirm. If you walk away at expiry without buying back, this is the only fee you pay.

**Term fee (on buyback).** The 2.5%, 5%, or 7.5% term fee is added to your buyback cost. This goes entirely to the lenders who funded your loan. It is how lenders earn yield. Unlike variable-rate protocols, the yield lenders earn is fixed and known from the moment the loan opens.

There are no other fees. No origination fee, no early repayment penalty beyond the locked-in term fee, no gas surcharge.

***

## Choosing the right term

The tradeoff is straightforward. Shorter terms cost less but give you less time. Longer terms cost more but keep your options open.

**Choose 15 days if** you need USDC quickly and are fairly certain you will buy back within two weeks. The 2.5% fee is the lowest available and makes the buyback cost easy to clear.

**Choose 30 days if** you want a reasonable window and are comfortable paying 5%. This is the most common term for borrowers who are uncertain about their timeline.

**Choose 45 days if** you want maximum flexibility and are not concerned about the higher fee. The 7.5% cost is still fixed, and having 45 days to decide whether to buy back gives you significant breathing room if market conditions change.

{% hint style="warning" %}
You cannot extend a loan after it opens. If you open a 15-day loan and need more time, you would need to open a new loan after the first one expires, assuming your collateral has not already transferred to lenders. Plan your term choice carefully.
{% endhint %}

***

## Partial buybacks and fees

Partial buybacks work proportionally. If you pay half the total buyback cost, you receive half your collateral. The fee is not front-loaded or back-loaded. It scales exactly with the portion of collateral you are reclaiming.

**Example:** You opened a loan and your total buyback cost is $1,050 USDC ($1,000 loan + $50 fee on a 30-day term). You pay $525 USDC as a partial buyback. You receive exactly half your collateral. The remaining half stays in the loan with the same expiry date and will cost another $525 USDC to reclaim.

The minimum partial buyback payment is $1 USDC.

***

## Summary

* Three terms: 15 days (2.5%), 30 days (5%), 45 days (7.5%).
* The fee is a flat percentage of the loan amount, calculated at loan open and never changed.
* Buyback cost = loan amount + fee. This number is fully known before you sign.
* Buying back early does not reduce the fee. Choose your term based on how long you might need.
* The term fee goes entirely to lenders as yield. A separate, smaller protocol fee is deducted from the USDC at loan open.
* Partial buybacks are proportional: pay half the cost, get half the collateral back.
* Minimum loan: $50 USDC. Minimum partial buyback: $1 USDC.
