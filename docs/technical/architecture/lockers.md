---
sidebar_label: 'Lockers'
sidebar_position: 4
id: lockers
title: Lockers
description: Types of Lockers
---

HELLPs are a pair of contracts that work in tandem to allow the user to borrow a stable value, at a stable rate, against their assets while retaining security and control.

Assets can be deposited into the Locker, then stablecoins may be borrowed from the lender. Some or all of the asset(s) become completely illiquid, and thus cannot be withdrawn, while there is outstanding debt.

Most pairs will follow the [Standard](#standard-hellp) architecture. More popular assets, especially non-interest bearing tokens, might opt for [Contracted](#contracted-hellp) architecture where there are existing DeFi strategies for those assets.

### HELLP Interface

All Pairs implement the following functions for user interaction. Each Locker will have it's own asset(s) and every Lender has 

`lock` : deposit the associated asset(s) within the Locker

`unlock` : withdraw the associated asset(s) from within the Locker

`borrow` : mint stablecoins from the Lender

`repay` : return stablecoins to the Lender

Variations of the standard model may implement more functions.

### Standard HELLP

```
       ┌───────────────────┐
       │ user              │
       └▲──────────▲──────▲┘
        │          │      │
        │          │      │
   lock/│   borrow/│      │stake/
  unlock│     repay│      │redeem
        │          │      │
       ┌▼───────┐ ┌▼──────▼┐
       │ locker │ │ lender │
       └────────┘ └────────┘
```


### Contracted HELLP
🚧 This mint is still in development

```

       ┌───────────────────┐
       │ user              │
       └▲──────────▲──────▲┘
        │          │      │
        │          │      │
   lock/│   borrow/│      │stake/
  unlock│     repay│      │redeem
        │          │      │
       ┌▼───────┐ ┌▼──────▼┐
       │ locker │ │ lender │
       └▲───────┘ └────────┘
        │
        │
  *lock/│
 *unlock│
        │
   ┌────▼───────┐
   │ contractor │
   └────────────┘
   
   
   
* these functions are automated
```

