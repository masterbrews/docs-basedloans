---
description: How deposits work, when your USDC is active, and how to withdraw.
---

# Deposits and withdrawal

Depositing USDC into Based Loans is the starting point for earning yield. Once deposited, your capital sits in one of two states: unmatched (available to withdraw) or matched (actively funding a live loan). Understanding the difference determines when and how much you can withdraw at any given time.

***

## Making a deposit

The minimum deposit is $200 USDC. To deposit, you approve the LendingLedger contract to spend your USDC, then confirm the deposit transaction. The approval and deposit are separate steps, both handled through the interface.

Once the deposit is confirmed, your USDC balance appears in your lender dashboard, shown as unmatched until a loan draws from it.

{% hint style="info" %}
Approval is granted to the LendingLedger contract, not the Core contract. Make sure your wallet is connected to Base before initiating.
{% endhint %}

***

## Unmatched vs. matched USDC

Your total deposit is split into two buckets at any given time.

| State | What it means | Can you withdraw? |
|---|---|---|
| Unmatched | Not yet assigned to any loan | Yes, any time |
| Matched | Actively funding a live loan | No, locked until loan resolves |

Unmatched USDC earns no yield but carries no risk. It is sitting in the LendingLedger contract, waiting for an eligible borrower to draw from it.

Matched USDC is committed to a specific loan for its full term (15, 30, or 45 days). You cannot move it, withdraw it, or redirect it until that loan ends, either by buyback or expiry.

***

## Configuring your collateral settings

Your collateral settings determine which borrowers your USDC can be matched to. Two things are required for a match to happen: the borrower's collateral token must be on your enabled list, and your remaining cap for that token must be large enough to cover the loan.

**Enabling tokens**

You can enable up to 50 collateral tokens at once. For each one, you set a deposit cap: the maximum amount of your USDC that will ever be matched to loans backed by that token. The minimum cap is $50 per token and the maximum is $1,000,000.

Think of the cap as a ceiling, not a reservation. Enabling VIRTUAL with a $2,000 cap does not set aside $2,000 for VIRTUAL loans. It means up to $2,000 of your deposited USDC can be used for VIRTUAL-backed loans across all borrowers. The actual matching depends on how much you have deposited and how many eligible loans arrive.

**Adjusting settings**

You can change your settings at any time: add tokens, remove tokens, raise a cap, lower a cap. Changes take effect immediately for new loan matches. They do not affect any loans that are already open and matched.

{% hint style="warning" %}
Removing a token from your list does not affect loans already matched using that token. Those loans continue as agreed until they resolve.
{% endhint %}

***

## Withdrawing USDC

You can withdraw any portion of your unmatched USDC at any time, with no delay and no penalty. Navigate to the withdraw section of your lender dashboard, enter the amount, and confirm the transaction.

Only unmatched USDC is available to withdraw. If $3,000 of your $5,000 deposit is currently matched to active loans, you can only withdraw up to $2,000.

When matched loans resolve (buyback or expiry and claim), that USDC or collateral returns to your balance and becomes available again. In the buyback case, your USDC is immediately withdrawable. In the default case, you first claim the collateral tokens, and they land in your wallet directly.

***

## Summary

- Minimum deposit: $200 USDC
- Approval goes to LendingLedger before depositing
- Unmatched USDC: available to withdraw any time, earns no yield
- Matched USDC: funding an active loan, locked until the loan resolves
- Set per-token caps (min $50, max $1,000,000) to control how much USDC backs each token
- You can enable up to 50 collateral tokens at once
- Adjust your settings at any time; changes apply to future matches only
- Withdraw any unmatched USDC with no lockup or penalty
