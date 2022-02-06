# Anders: Homotopy Library

Anders is a HoTT proof assistant based on: classical MLTT-80 with 0, 1, 2, W types;
CCHM in CHM flavour as cubical type system with hcomp/trans Kan operations;
HTS sctrict equality on pretypes; de Rham stack modality primitives.
We tend not to touch general recursive higher inductive schemes yet,
instead we will try to express as much HIT as possible through W,
Coequlizer and HubSpokes Disc in the style of HoTT/Coq homotopy library and Three-HIT theorem.

Here is given the Anders Homotopy Library.

### Foundations

In the `foundations` folder presented the MLTT, Modal and Univalent base libraries:

```
homotopy.dev/foundations/
├── mltt/
│   ├── bool/
│   ├── either/
│   ├── fin/
│   ├── induction/
│   ├── list/
│   ├── maybe/
│   ├── mltt/
│   ├── nat/
│   ├── pi/
│   ├── sigma/
│   └── vec/
├── modal/
│   └── infinitesimal/
└── univalent/
    ├── equiv/
    ├── extensionality/
    ├── iso/
    ├── path/
    └── prop/
```

### Mathematics

In the `mathematics` folder you will find Mathematical Components for HTS:

```
homotopy.dev/mathematics/
├── algebra/
│   ├── homology/
│   └── algebra/
├── analysis/
│   └── real/
├── categories/
│   ├── abelian/
│   ├── category/
│   ├── functor/
│   └── groupoid/
├── geometry/
│   ├── bundle/
│   ├── etale/
│   └── formalDisc/
├── homotopy/
│   ├── KGn/
│   ├── S1/
│   ├── Sn/
│   ├── coequalizer/
│   ├── hubSpokes/
│   ├── pullback/
│   ├── pushout/
│   ├── quotient/
│   ├── suspension/
│   └── truncation/
└── topoi/
    └── topos/
```

## Usage

The main purpose of Anders is doing Homotopy Theory:

```
$ dune exec anders repl

Anders Proof Assistant version 1.3.0
Copyright © 2021–2022 Groupoid Infinity.

For help type ‘:h’.

>
```

## Credits

* Namdak Tonpa
* Siegmentation Fault
