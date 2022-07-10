---
sidebar_label: 'Imaginary Overview'
sidebar_position: 1
id: imaginary-overview
title: Imaginary Overview
description: Overview of IMGY Protocol
---

## Introduction
The Imaginary Protocol is a framework for externalizing blockchain asset's value into stablecoins, without selling or giving up ownership over the asset. The protocol mirrors an illiquid asset's value into liquid [ERC20 token](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) stablecoins. The framework arises out of two inter-functioning modules: Lockers and Lenders.

Lockers can accept assets that may have long-term holding value, hard-to-reach value, or inherently growing value. Lenders can offer 0% interest loans against assets inside Lockers. Loans are paid out, and back, in Imaginary's native issued stablecoins.

### Lockers
Lockers are where user's deposit their assets. There are specialized lockers for each supported asset. Each locker is tuned to handle (transfer, liquidate) and obtain accurate valuations of the particular asset on-demand. Lockers, and their deposited assets, are the User's collateral when borrowing from the Lender.

### Lenders
Users can take out loans or repay existing loans through Lenders. Lenders handle loan management and debt ceilings across the array of their connected Locker(s). Certain Lenders enable self-paying loans, carried out via flash resolution (see [Inverse Liquidations](./inverse-liquidations.md))

## Issued Stables
Lenders will always issue loans in the form of an *issued stablecoin*. These stablecoins are over-collateralized liquid stablecoins backed by the illiquid asset value. The value of the issued stablecoins are pegged to their reference currency and can be exchanged for their counterparts. (1 issued stable = 1 USDC = $1)

## Learn More
> [Isolating and Evaluating Value](./isolating-value.md)
 
> [Inverse Liquidations](./inverse-liquidations.md)

## Conclusion
You have just learned the **basics of Imaginary**, if your brain hasn't popped - give yourself a high five! Oh, and if that wasn't enough, we're still in active development.

Secret Word is *goober*
