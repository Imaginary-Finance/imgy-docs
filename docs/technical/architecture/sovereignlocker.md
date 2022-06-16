---
sidebar_label: 'Sovereign Locker'
sidebar_position: 5
id: sovereignlocker
title: Sovereign Locker
description: Description of Sovereign Lockers
---

Sovereign Lockers contain the logic to handle both collateral and loans.

Assets can be deposited into the Locker, then stablecoins may be borrowed from the same Locker. Some or all of the asset(s) become completely illiquid, and thus cannot be withdrawn, while there is outstanding debt.

### Sovereign Locker Architecture

```
       ┌───────────────────┐
       │ user              │
       └▲──────────▲───────┘
        │          │      
        │          │      
   lock/│   borrow/│      
  unlock│     repay│      
        │          │      
       ┌▼──────────▼───────┐
       │ sovereign locker  │
       └───────────────────┘
```
