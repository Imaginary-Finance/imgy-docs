---
sidebar_label: 'ISovLocker'
sidebar_position: 4
id: isovlocker
title: ISovLocker
description: Sovereign Locker Interface
---

Lockers are extensions of OpenZeppelin's ERC721 Standard. Their documentation is found [here](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721)

> This time of locker handles collateral and lending, all functions will be here

## Functions
`lockAsset( uint256 id, uint256 amount )`

`unlockAsset( uint256 id, uint256 amount )`

`borrow( uint256 id, uint256 amount )`

`repay( uint256 id, uint256 amount )`

## Events

`AssetLocked( uint256 id, uint256 amount )`

`AssetUnlocked( uint256 id, uint256 amount )`

`VaultOpen( uint256 id )`

`VaultClosed( uint256 id )`

`Borrow( uint256 id, uint256 amount )`

`Repay( uint256 id, uint256 amount )`

`VaultLiquidated( uint256 id, uint256 amount )`

## lockAsset()
Allows the owner of locker  `id` to deposit `amount` of the locker's asset

`lockAsset( uint256 id, uint256 amount )`

## unlockAsset()

