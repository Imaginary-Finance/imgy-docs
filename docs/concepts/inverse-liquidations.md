---
sidebar_label: 'Inverse Liquidations'
sidebar_position: 4
id: inverse-liquidations
title: Inverse Liquidations
description: Inverse Liquidations
---

### Introduction

A borrower's position is usually liquidated only when their collateral can no longer back their loan. On the opposite end of the spectrum, when the collateral outgrows the borrower's loan, the position could also be liquidated (minus the nasty liquidation fee). Imaginary calls this an Inverse Liquidation (IL). 

Mostly applied to interest bearing assets, ILs acheive self-paying loans in a smaller package than competing protocols.

### How does it work?

Inverse Liquidations are carried out via *flash resolution*. Reminicent of flash loans, flash resolutions work very similarly. The contract will flash tokens in and out of other smart contracts to resolve the user's outstanding loan.

🚧 More to come as protocol continues.