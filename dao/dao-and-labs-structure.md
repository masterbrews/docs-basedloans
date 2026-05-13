---
description: How Monstro DAO and Monstro Labs each play a role in owning and operating Based Loans.
---

# DAO and Labs structure

Based Loans operates under a dual-entity structure. Monstro DAO is the protocol owner, and Monstro Labs is the protocol operator. The two entities have separate roles, separate multisig keys, and separate scopes of authority. Neither one can act unilaterally on matters reserved for the other.

***

## Monstro DAO

Monstro DAO is the protocol owner of the Based Loans contracts. Ownership is held through a 5-of-7 multisig at address `0xa673566A818e3525E57292b22311AD0be114085C`.

The DAO controls:

* Protocol-level parameters: fee rates, loan term configurations, global fee settings
* Removal of collateral assets from the supported list (additions are handled by Labs)
* Appointment and removal of the Labs operator role
* Any future upgrade or migration of core contracts

Decisions at the DAO level are governed by MONSTRO token holders. For full details on how Monstro DAO governance works, including voting processes and proposal thresholds, see the [Monstro DAO documentation](https://docs.monstrodefi.com).

***

## Monstro Labs

Monstro Labs is the development and operations arm of the Based Loans protocol. It holds the operator role through a 2-of-2 multisig at address `0x3970a7372566ad1Fb888a8240A89662A5D2455E5`.

The Labs operator role covers:

* Oracle maintenance and configuration
* Day-to-day asset listing operations within parameters set by the DAO
* UI and frontend development
* Technical upgrades to non-core infrastructure
* Incident response and emergency pause authority

The operator role is deliberately scoped. Monstro Labs can adjust operational settings but cannot override DAO-controlled parameters or move user funds.

***

## What neither entity can do

Neither Monstro DAO nor Monstro Labs can withdraw or redirect user funds. Lender USDC held in the protocol is controlled by the smart contract logic and released only through user-initiated actions: loan matching, buyback payments, or withdrawal of unmatched deposits. Borrower collateral is locked in the contract and released only when a borrower buys back or a lender claims after expiry.

The dual-entity structure separates governance authority from operational authority, and both are separated from custody of user assets.

***

## Summary

| Entity | Role | Multisig |
|---|---|---|
| Monstro DAO | Protocol owner | 5-of-7 |
| Monstro Labs | Protocol operator | 2-of-2 |

* The DAO controls protocol parameters, fee rates, and collateral removal.
* Labs handles day-to-day operations: asset additions, oracle maintenance, and UI development.
* Neither entity can access or redirect lender USDC or borrower collateral.
* Full DAO governance details are documented at [docs.monstrodefi.com](https://docs.monstrodefi.com).
