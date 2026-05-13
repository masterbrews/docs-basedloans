---
description: Choose your collateral, pick a term, and receive USDC instantly.
---

# How borrowing works

Opening a loan on Based Loans takes a few minutes. You choose a supported token as collateral, pick a loan term, approve the contract, and receive USDC directly to your wallet. The entire cost of the loan is calculated and shown before you confirm, so there are no surprises.

***

## What you need before you start

- A wallet connected to Base with a supported collateral token
- Enough ETH to cover gas
- USDC available in the lending pool that matches your collateral (more on this below)

***

## Step-by-step: opening a loan

**1. Connect your wallet**

Use the connect button in the top right. Based Loans supports all standard Web3 wallets via WalletConnect and browser extensions.

**2. Choose your collateral**

Select the token you want to borrow against from the list of supported assets. Only tokens listed by the protocol can be used as collateral.

**3. Enter the amount**

Type in how much of your token you want to deposit as collateral. The interface will calculate how much USDC you will receive based on the current price and the 50% loan-to-value ratio.

**4. Choose a loan term**

Pick from three fixed durations: 15, 30, or 45 days. The fee is determined by the term you choose. You cannot change the term after the loan opens.

| Term | Fee |
|------|-----|
| 15 days | 2.5% |
| 30 days | 5.0% |
| 45 days | 7.5% |

The term fee is a one-time cost, not an ongoing interest rate. It is added to your buyback cost. If you walk away at expiry without buying back, you do not pay the term fee. A separate, smaller protocol fee is deducted from the USDC you receive at open. The interface shows both amounts before you confirm.

**5. Review the loan summary**

Before confirming, you will see a complete breakdown: collateral amount, USDC received, total buyback cost, and expiry date. This is a fixed quote. Nothing changes after you confirm.

**6. Approve the collateral contract**

Your collateral token must be approved for transfer to the Core contract. If this is your first loan with this token, you will be prompted to sign an approval transaction first.

**7. Open the loan**

Sign the loan transaction. Your collateral is transferred to the protocol, and USDC is sent to your wallet. The loan is now live.

***

## LTV and fee: worked example

Say you deposit **$1,000 worth of ETH** as collateral on a 30-day term.

| | Amount |
|---|---|
| Collateral value | $1,000 |
| Loan amount (50% LTV) | $500.00 |
| Protocol fee deducted at open (2.49%) | -$12.45 |
| **USDC received in your wallet** | **$487.55** |
| Term fee added to buyback (5%) | +$25.00 |
| **Buyback cost** | **$525.00** |

To get your ETH back before day 30, you send **$525.00** to the protocol. The $12.45 protocol fee was taken at open and goes to the treasury and ecosystem partners. The $25.00 term fee goes to the lenders who funded your loan. Both are fixed from the moment the loan opens. Neither changes, regardless of what ETH does.

{% hint style="info" %}
The interface shows the exact USDC you will receive and the exact buyback cost before you confirm. No calculation required.
{% endhint %}

{% hint style="info" %}
The minimum loan amount is $50 USDC. If your collateral is worth less than $100 at current prices, the loan may not meet the minimum.
{% endhint %}

***

## How matching works

Based Loans does not pool all lender funds together. Instead, lenders configure their own collateral preferences and deposit USDC against specific assets they are willing to accept. When you open a loan, you are matched against lenders who have enabled your collateral token and have USDC available.

What this means in practice:

- If there is no lender USDC available for your chosen collateral, your loan will not open
- The interface shows available lender funds per asset before you commit
- You do not choose a specific lender. Matching happens automatically based on queue order

This design is intentional. Lenders take on asset-specific risk, which means they price that risk themselves. You benefit from knowing there is a real lender on the other side of your loan, not a pool that might be drained by someone else.

***

## Summary

- Based Loans uses a 50% LTV on all collateral
- A small protocol fee is deducted from the USDC you receive at open
- Term fees are added to your buyback cost: 2.5% (15d), 5% (30d), 7.5% (45d)
- Buyback cost = loan amount + term fee. It is fixed at open and does not change
- Collateral is approved to the Core contract; USDC for buybacks goes to the LendingLedger
- Your loan is matched against real lender capital configured for your specific asset
- Once open, the loan is fixed. Price, term, and buyback cost cannot change
