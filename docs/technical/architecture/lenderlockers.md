---
sidebar_label: 'Lender/Lockers'
sidebar_position: 4
id: lenderlockers
title: Lender/Lockers
description: Description of Lender/Locker Pairs
---



Locker/Lender are a pair of contracts that work in tandem to allow the user to borrow a stable value, at a stable rate, against their assets while retaining security and control.

Assets can be deposited into the Locker, then stablecoins may be borrowed from the lender. Some or all of the asset(s) become completely illiquid, and thus cannot be withdrawn, while there is outstanding debt.

Most pairs will follow the [Standard](#standard-hellp) architecture. More popular assets, especially non-interest bearing tokens, might opt for [Contracted](#contracted-hellp) architecture where there are existing DeFi strategies for those assets.

### Standard Pair

```
       ┌───────────────────┐
       │ user              │
       └▲──────────▲───────┘
        │          │      
        │          │      
   lock/│   borrow/│      
  unlock│     repay│      
        │          │      
       ┌▼───────┐ ┌▼───────┐
       │ locker │ │ lender │
       └────────┘ └────────┘
```


### Contracted Pair
🚧 Still in development

```

       ┌───────────────────┐
       │ user              │
       └▲──────────▲───────┘
        │          │      
        │          │      
   lock/│   borrow/│      
  unlock│     repay│      
        │          │      
       ┌▼───────┐ ┌▼───────┐
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

