---
sidebar_label: 'ILocker'
sidebar_position: 2
id: ilocker
title: ILocker
description: Locker Interface
---

Lockers are extensions of OpenZeppelin's ERC721 Standard. Their documentation is found [here](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721)

> Functions involving loans are handled by the Lender, and can be found in [ILender](./ilender.md)

## Functions
`lockAsset( uint256 id, uint256 amount )`

`unlockAsset( uint256 id, uint256 amount )`

## Events
`AssetLocked( uint256 id, uint256 amount )`

`AssetUnlocked( uint256 id, uint256 amount )`



## lockAsset()
Allows the owner of locker  `id` to deposit `amount` of the locker's asset

`lockAsset( uint256 id, uint256 amount )`

## unlockAsset()

