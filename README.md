# Anders: Homotopy Library Manual

Anders is a HoTT theorem prover based on: classical MLTT-80 with 0, 1, 2, W types;
CCHM in CHM flavour as cubical type system with hcomp/trans Kan operations;
HTS sctrict equality on pretypes; de Rham stack modality primitives.
We tend not to touch general recursive higher inductive schemes yet,
instead we will try to express as much HIT as possible through W,
Coequlizer and HubSpokes Disc in the style of HoTT/Coq homotopy library and Three-HIT theorem.

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
── topoi/
    └── topos/
```

## Usage

The main purpose of Anders is doing Homotopy Theory:

```
$ opam install anders
$ anders repl
Anders theorem prover [MLTT][CCHM][HTS][deRham] version 1.1.1
>
```

## Credits

* Maxim Sokhatsky
* Siegmentation Fault
