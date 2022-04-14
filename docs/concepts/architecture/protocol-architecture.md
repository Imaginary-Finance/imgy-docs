---
sidebar_label: 'Architecture'
sidebar_position: 1
id: protocol-architecture
title: Architecture
description: Architecture of IMGY Protocol
---

## Mint Architecture

### Basic Mint

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



### Contracted Mint
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

