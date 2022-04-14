---
sidebar_label: 'HELLPs'
sidebar_position: 4
id: hellps
title: HELLPs
description: High Efficiency Locker/Lender Pairs
---

## High Efficiency Locker/Lender Pairs

HELLPs are a pair of contracts that work in tandem to allow the user to borrow a stable value, at a stable rate, against their assets while retaining security and control.

Most pairs will follow the [Standard](#standard-hellp) architecture. More popular assets, especially non-interest bearing tokens, might opt for [Contracted](#contracted-hellp) architecture where there are existing DeFi strategies for those assets.

### HELLP Interface

All Pairs implement the following functions for user interaction. Each Locker will have it's own asset(s) and every Lender has 

`lock` : lock the asset

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

