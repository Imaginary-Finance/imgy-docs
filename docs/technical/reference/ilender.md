---
sidebar_label: 'ILender'
sidebar_position: 2
id: ilender
title: ILender
description: Lender Interface
---

> Functions involving collateral are handled by the Locker, and can be found in [ILocker](./ilocker.md)

## Functions
`borrow( address locker, uint256 id, uint256 amount )`

`repay( address locker, uint256 id, uint256 amount )`

## Events
`Borrow( address locker, uint256 id, uint256 amount )`

`Repay( address locker, uint256 id, uint256 amount )`

## borrow()
Allows the owner of locker  `id` to deposit `amount` of the locker's asset

`lockAsset( uint256 id, uint256 amount )`

## repay()

