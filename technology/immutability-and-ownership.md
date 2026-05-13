---
description: Who controls the protocol, what can and can't be changed, and how the DAO fits in.
---

# Immutability and ownership

Based Loans has two layers of governance: a DAO that owns the protocol and a Labs team that operates it. The two roles have different powers and different accountability structures. Understanding what each can and cannot do is important for anyone trusting the protocol with their funds.

The short version: neither role can touch user funds. The DAO controls structural parameters and can appoint or remove the operator. Labs handles day-to-day asset management and operational adjustments. The core loan logic is deployed and permanent.

***

## What is immutable

The following properties of the protocol are fixed at deployment and cannot be changed by any address, including the DAO owner and the Labs operator.

**Core loan logic.** The rules for how loans open, how buybacks are processed, and how collateral is claimed at expiry are embedded in the deployed contract code. They cannot be altered after deployment. There are no upgrade proxies on the core contracts.

**User fund custody.** No address in the system can unilaterally move funds belonging to borrowers or lenders. Borrower collateral held in Core can only move via the borrower's own buyback transaction or a lender's claim after expiry. Lender USDC held in LendingLedger can only move via loan matching, lender withdrawal, or proceeds distribution. There is no admin function that bypasses these rules.

**Hard LTV bounds.** LTV is configurable per asset by the operator, but within enforced bounds. The protocol rejects any LTV setting outside the range of 20% to 85%. Neither the DAO nor the operator can set an LTV that exceeds this ceiling or falls below this floor. The current configuration across all launch assets is 50% LTV.

***

## The DAO owner (5-of-7 multisig)

The DAO owner multisig sits at [0xa673566A818e3525E57292b22311AD0be114085C](https://basescan.org/address/0xa673566A818e3525E57292b22311AD0be114085C). It requires 5 signatures from 7 keyholders to execute any transaction. This threshold is designed to prevent any single actor, including members of the founding team, from acting unilaterally on ownership-level decisions.

**What the DAO owner can do:**

* Appoint or remove the Labs operator role.
* Update high-level protocol parameters: fee rates, loan terms, protocol fee settings.
* Remove collateral assets from the supported list (additions are handled by the operator).
* Transfer protocol ownership to a new address (such as a future governance system).
* Unpause the protocol after a security pause.

**What the DAO owner cannot do:**

* Withdraw user funds from Core or LendingLedger.
* Change the core loan logic or the buyback mechanism.
* Override active loans or modify their terms mid-loan.

The 5-of-7 structure means that even if multiple keyholder devices are compromised simultaneously, a quorum of honest signers can block any malicious transaction. DAO-level decisions are not made quickly by design.

***

## The Labs operator (2-of-2 multisig)

The Labs operator multisig sits at [0x3970a7372566ad1Fb888a8240A89662A5D2455E5](https://basescan.org/address/0x3970a7372566ad1Fb888a8240A89662A5D2455E5). It requires both keyholders to sign, making it a joint key held by the Labs team for routine operations.

The operator role exists because many day-to-day protocol actions, such as adding a new collateral token or adjusting a fee rate, should not require assembling a 5-of-7 DAO quorum. The operator provides a faster path for legitimate operational changes while the DAO retains the ability to revoke the operator role at any time.

**What the Labs operator can do:**

* Add new collateral tokens with oracle and LTV configuration.
* Update oracle sources and LTV settings for existing assets.
* Manage per-asset deposit caps.
* Pause the protocol in response to security events (unpausing requires the DAO owner).

**What the Labs operator cannot do:**

* Transfer or withdraw user funds.
* Change the core loan logic.
* Modify the ownership structure (only the DAO owner can do this).
* Exceed the parameter bounds set by the DAO at deployment.

{% hint style="warning" %}
The operator can pause the protocol. A pause blocks new loans from opening. Existing loans are not affected: buybacks and collateral claims continue to work normally so borrowers and lenders can always unwind their positions. Pausing is a security measure intended for live exploit scenarios, not routine use.
{% endhint %}

***

## No upgrade proxies

It is worth stating clearly: Based Loans does not use proxy contracts or upgrade mechanisms of any kind on its core contracts. Patterns like OpenZeppelin's TransparentUpgradeableProxy or UUPS allow a contract's logic to be replaced after deployment. Based Loans does not use them.

This means the audited code is the final code. It cannot be changed by a governance vote, a team action, or any other mechanism. If the protocol needs a meaningful upgrade in the future, it would require deploying new contracts and migrating to them, not silently replacing logic in existing ones.

***

## Summary

* Core loan logic and user fund custody cannot be changed after deployment. LTV is configurable per-asset within hard protocol bounds (20% to 85%).
* The DAO owner is a 5-of-7 multisig that controls structural governance and operator appointment.
* The Labs operator is a 2-of-2 multisig that handles routine asset management and operational parameters.
* Neither role can access or move user funds.
* No upgrade proxies exist on core contracts. The deployed code is permanent.
* The DAO can revoke the operator role at any time, maintaining ultimate authority over the protocol.
