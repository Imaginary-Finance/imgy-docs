---
sidebar_label: 'Imaginary Overview'
sidebar_position: 1
id: imaginary-overview
title: Imaginary Overview
description: Overview of IMGY Protocol
---

## Introduction
Imaginary is a framework for using an asset's value independently of the asset. 

The protocol mirrors an illiquid asset's value into external, liquid tokens. Called Issued Stablecoins.

Assets that may have long-term holding value, illiquid value, or inherently growing value can be locked within Imaginary, and without selling, have their value converted into stablecoins.

Imaginary creates this framework out of two inter-functioning modules: Lockers and Lenders

### Lockers
Lockers are where user's deposit their assets. There are specialized lockers for each supported asset. Each locker is tuned to obtain accurate valuations of the particular asset on-demand. Lockers, and their deposited assets, are the User's collateral when borrowing at the Lender.

### Lenders
Users can take out loans or repay existing loans through Lenders. Lenders handle loan management and debt ceilings across the array of their connected Locker(s). Certain Lenders enable self-paying loans, carried out via flash resolution (see Inverse Liquidations) 

## Issued Stables
Lenders will always issue loans in the form of an *issued stablecoin*. These stablecoins are over-collateralized liquid stablecoins backed by the illiquid asset value.

## Learn More
> [Isolating and Evaluating Value](./isolating-value.md)
 
> [Inverse Liquidations](./inverse-liquidations.md)

## Conclusion
You have just learned the **basics of Imaginary**, if your brain hasn't popped - give yourself a high five! Oh, and if that wasn't enough, we're still in active development.

Secret Word is *goober*