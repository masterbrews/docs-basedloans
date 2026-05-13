---
description: Buy back all or part of your collateral at any time before the loan expires.
---

# Buying back your collateral

Once your loan is open, you can reclaim your collateral at any point before the term expires. The cost is fixed at the moment the loan opens and will not change, regardless of what your token does in the market. You can buy back all of it at once, or any portion of it across multiple transactions.

***

## What the buyback costs

The buyback cost is the loan amount plus the term fee, both fixed at the moment the loan opens.

**Formula:** Buyback cost = loan amount + (loan amount x term fee rate)

| Term | Fee rate | Example on a $500 loan |
|------|----------|------------------------|
| 15 days | 2.5% | $512.50 |
| 30 days | 5.0% | $525.00 |
| 45 days | 7.5% | $537.50 |

The key point: the buyback cost is locked at open and does not change. If your token's price doubles after your loan opens, your buyback cost stays the same. If it drops 80%, your buyback cost still stays the same. Market movements after the loan opens are irrelevant to what you owe.

***

## Worked example: full buyback

You deposit ETH worth **$1,000** on a 30-day term.

- Loan amount: **$500 USDC** (50% LTV)
- Protocol fee: small amount deducted at open, shown in the interface before you confirm
- USDC received in wallet: slightly less than $500
- Term fee (5%): **$25**, added to buyback cost
- Buyback cost: **$525 USDC**

To get your ETH back, you send $525 USDC to the protocol any time before day 30. Your ETH is returned to your wallet.

***

## Partial buybacks

You do not have to reclaim everything at once. Based Loans supports partial buybacks down to a minimum of $1 USDC.

Buying back a portion of your collateral returns that exact proportion of your deposited tokens and reduces your outstanding buyback cost by the same proportion.

**Formula:** Collateral returned = (USDC paid / total buyback cost) x total collateral deposited

**Example using the same loan above ($525 buyback cost, 1 ETH deposited):**

| USDC sent | % of loan | ETH returned | Remaining buyback cost |
|-----------|-----------|--------------|------------------------|
| $105 | 20% | 0.2 ETH | $420 |
| $262.50 | 50% | 0.5 ETH | $262.50 |
| $525 | 100% | 1.0 ETH | $0 (loan closed) |

You can do this across as many transactions as you want, as long as the loan is still active and each transaction is at least $1 USDC.

{% hint style="info" %}
Partial buybacks are useful if you want to dollar-cost out of your position, free up a portion of your collateral without committing all your USDC, or reclaim tokens incrementally as your USDC balance builds.
{% endhint %}

***

## How to execute a buyback

1. Open the Based Loans app and go to your active loans
2. Select the loan you want to buy back
3. Enter the USDC amount, full or partial
4. Approve USDC transfer to the LendingLedger (first time only, or if your previous allowance is insufficient)
5. Confirm the buyback transaction
6. Your collateral is returned to your wallet instantly

{% hint style="warning" %}
USDC approval for buybacks goes to the LendingLedger contract, not the Core contract. Make sure your wallet is approving the correct address if you are doing this manually.
{% endhint %}

***

## Summary

- Buyback cost = loan amount + term fee, fixed at loan open. It does not change with market price.
- Partial buybacks are supported: any amount above $1 USDC, at any time before expiry
- Each partial buyback returns a proportional share of your collateral and reduces the remaining cost
- USDC for buybacks is approved to the LendingLedger contract
- Once the full buyback cost is paid, the loan closes and all remaining collateral is returned
