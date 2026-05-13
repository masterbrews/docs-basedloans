---
description: Deposit USDC, choose which tokens you'll back, and earn fixed yield on every matched loan.
---

# How lending works

Based Loans connects lenders with borrowers using a simple, rules-based system. Lenders deposit USDC, configure which tokens they are willing to accept as collateral, and earn yield when their capital is matched to live loans. There are no complex positions to manage and no mid-loan decisions to make. Once a loan opens, the outcome is fully determined by what happens at expiry.

***

## Step 1: Deposit USDC

Start by depositing USDC into the protocol. The minimum deposit is $200. Your USDC is held in the LendingLedger contract, which handles all matching and repayments.

Your deposited USDC sits as unmatched capital until a borrower opens a loan that draws from it. While unmatched, it is automatically deposited into the mUSDC vault, a Monstro DAO yield-bearing wrapper that earns passive yield on otherwise idle funds. When a loan matches against your USDC, it unwraps automatically. When a borrower buys back, the proceeds wrap back into the vault. The entire process happens behind the scenes, with no action required from you.

The balance shown in your dashboard reflects the exact amount you can withdraw, with the vault mechanics already factored in.

{% hint style="info" %}
mUSDC is a Monstro DAO product. Based Loans is the first integration. Learn more at [docs.monstrodefi.com](https://docs.monstrodefi.com).
{% endhint %}

***

## Step 2: Configure your collateral settings

Before (or after) depositing, you choose which tokens you are willing to back. Based Loans supports a growing list of collateral assets, and you can enable up to 50 at once.

For each token you enable, you set a deposit cap: the maximum amount of your USDC that can be matched to loans backed by that token. The minimum cap per token is $50 and the maximum is $1,000,000.

This is how you control your risk. If you are comfortable holding ETH but not a speculative memecoin, enable ETH and skip the rest. Your settings are not permanent. You can add tokens, remove tokens, and adjust caps at any time.

{% hint style="info" %}
Enabling a token means you are agreeing to potentially receive that token if a borrower defaults. Only enable tokens you would be comfortable holding.
{% endhint %}

***

## Step 3: Your USDC gets matched to a borrower

When a borrower opens a loan, the protocol pulls USDC from the LendingLedger in order of the queue. If your settings allow the borrower's collateral token and you have room under your cap, your USDC is used to fund the loan.

Once matched, that USDC is locked for the duration of the loan. The loan term is either 15, 30, or 45 days, set by the borrower when they open the loan.

You do not take any action when matching occurs. It happens automatically.

***

## Step 4: The loan resolves, one of two ways

Every loan ends with one of two outcomes.

**Outcome A: The borrower buys back**

The borrower repays their USDC plus a fixed fee before the term expires. The protocol routes your share of the USDC back to your balance, along with your share of the fee. A small protocol fee is deducted from lender earnings before distribution.

**Outcome B: The borrower does not buy back**

The borrower walks away and the loan expires. The collateral tokens they deposited are now yours to claim. You claim them through the interface after expiry. You do not receive your USDC back in this case. Instead, you receive the collateral.

This is the key insight: the collateral tokens were worth roughly twice the loan value at the price locked in when the loan opened. Even if the token has dropped somewhat in price since then, there is a substantial buffer before you are underwater.

***

## Worked example

Suppose you deposit $5,000 USDC and enable VIRTUAL with a $5,000 cap.

A borrower deposits $2,000 worth of VIRTUAL and receives $1,000 in USDC on a 30-day term. The 30-day fee rate is 5%, so their total buyback cost is $1,050.

Your $1,000 is matched to that loan.

**If the borrower buys back:** You receive $1,000 back plus the full $50 term fee (the protocol's cut was taken separately at loan open). Your USDC is back in your deposit, unmatched and available.

**If the borrower defaults:** The $2,000 worth of VIRTUAL (at the price locked at open) becomes claimable by lenders. You funded the whole loan in this example, so you claim all of it. If VIRTUAL has held its value, you now hold tokens worth $2,000 in exchange for $1,000 you lent. If VIRTUAL has dropped 30% since the loan opened, you hold tokens now worth $1,400. Still ahead. If VIRTUAL has dropped more than 50%, the collateral is now worth less than $1,000 and you take a loss on that loan.

***

## Summary

- Deposit USDC (minimum $200)
- Idle USDC auto-wraps into the mUSDC vault and earns passive yield until a loan matches
- Choose which tokens you will back and set a cap per token (min $50, max $1,000,000)
- Your USDC is matched automatically to eligible borrowers
- When a loan resolves, you receive USDC plus a fee (buyback) or collateral tokens (default)
- Unmatched USDC can be withdrawn at any time
- Matched USDC is locked until the loan resolves
- You never need to intervene mid-loan
