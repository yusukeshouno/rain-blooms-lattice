# Source Code Archive
# ソースコードアーカイブ

---

## Rain Blooms Lattice

**Artist / アーティスト:** Kazuhiro Tanimoto / 谷本和寛  
**Firmware version / ファームウェアバージョン:** v__.__.__  
**Archive date / アーカイブ日:** ______ / ______ / ______  
**Edition / エディション:** No. __ of 5

---

## 1. Purpose / 目的

This archive contains the complete source code of the firmware running on the microcontroller embedded within Rain Blooms Lattice. It is provided as a conservation artifact — a definitive reference for future conservation, migration, or re-implementation of the work should the original hardware become obsolete or fail beyond repair.

The source code is not intended for modification. It defines the work's algorithm, which is work-defining per Document 03 (Identity Document).

このアーカイブは、Rain Blooms Latticeの組み込みマイコン上で動作するファームウェアの完全なソースコードを収録しています。将来的にオリジナルのハードウェアが陳腐化または修復不能となった際の保存・マイグレーション・再実装のための一次資料として提供されます。

ソースコードは改変を意図していません。文書03（作品同一性文書）において作品定義的特性とされているアルゴリズムを定義します。

---

## 2. Contents / 収録内容

### USB Media / USBメディア

```
rain-blooms-lattice/
├── README.md                   — Overview and build instructions / 概要とビルド手順
├── LICENSE.md                  — License terms / ライセンス条件
├── src/
│   ├── main.c                  — Entry point / エントリーポイント
│   ├── ca.c / ca.h             — Cellular automaton engine / セルオートマトンエンジン
│   ├── ca_params_edition_N.h   — Edition-specific parameters / エディション固有パラメータ
│   ├── display.c / display.h   — LED matrix driver / LEDマトリクスドライバ
│   ├── audio.c / audio.h       — Audio synthesis / 音声合成
│   └── rng.c / rng.h           — Deterministic PRNG / 決定論的疑似乱数生成
├── build/
│   └── firmware_vX.X.X.hex     — Pre-compiled binary / コンパイル済みバイナリ
└── docs/
    └── hardware_spec.md        — Target hardware specification / 対象ハードウェア仕様
```

---

## 3. Edition-Specific Parameters / エディション固有パラメータ

The file `ca_params_edition_N.h` contains the parameter configuration unique to this edition. These values define the work's specific behavior and are part of the work-defining properties per Document 03.

`ca_params_edition_N.h`ファイルは、このエディションに固有のパラメータ設定を含みます。これらの値が作品固有の動作を定義し、文書03の作品定義的特性の一部を構成します。

Key parameters / 主要パラメータ:

| Parameter | Description |
|---|---|
| `EDITION_ID` | Edition number (1–5) / エディション番号 |
| `ALGO_VARIANT` | Algorithm variant (1–5 corresponding to the 5 works) |
| `INITIAL_SEED` | Seed for the deterministic PRNG used in initialization |
| `PALETTE_CONFIG` | Color palette definition |
| `NEIGHBORHOOD_OFFSETS` | Initial neighbor offset configuration |

---

## 4. Build Instructions / ビルド手順

The firmware targets the following hardware:

**Target MCU / 対象マイコン:** [model to be specified]  
**Toolchain / ツールチェーン:** [e.g. ARM GCC 12.x / avr-gcc / PlatformIO]  
**Build system / ビルドシステム:** [e.g. CMake / Makefile / PlatformIO]

To compile:  
コンパイル手順：

```bash
# Install toolchain (example for ARM GCC)
# ツールチェーンをインストール（ARM GCC の例）

git clone [repository or unzip archive]
cd rain-blooms-lattice
make EDITION=N   # Replace N with edition number / NをエディションNo.に置き換える
```

To flash / フラッシュ手順:

```bash
make flash EDITION=N
```

Refer to `docs/hardware_spec.md` for pin assignments and flashing procedure.  
ピン配置とフラッシュ手順については `docs/hardware_spec.md` を参照してください。

---

## 5. Pre-Compiled Binary / コンパイル済みバイナリ

For convenience, a pre-compiled binary (`firmware_vX.X.X.hex`) is included. This binary is the exact image flashed on the microcontroller delivered with this edition. Use this binary for direct replacement of an identical microcontroller without requiring a full build.

利便性のため、コンパイル済みバイナリ（`firmware_vX.X.X.hex`）を同梱しています。このバイナリは、本エディションに納品されたマイコンに書き込まれた正確なイメージです。同一マイコンへの直接交換の際に、フルビルドを要せず使用できます。

---

## 6. Conservation Use / 保存目的での使用

This archive may be used for the following purposes by the collector:

1. **Verification** — Confirm the firmware running on the hardware matches the archived source.
2. **Re-flashing** — Restore the firmware to the original microcontroller after accidental erasure.
3. **Migration** — Compile and flash the firmware onto a replacement microcontroller of equivalent specification (see Document 03 for acceptable substitutions).
4. **Re-implementation** — In the event of hardware obsolescence, re-implement the algorithm on new hardware, guided by the source code as the authoritative specification.

For conservation actions (3) and (4), contact NEORT++ or the artist's studio prior to proceeding (see Document 07).

本アーカイブは、コレクターが以下の目的で使用できます：

1. **検証** — ハードウェア上で動作するファームウェアがアーカイブされたソースと一致することを確認する。
2. **再書き込み** — 誤消去後にオリジナルのマイコンへファームウェアを復元する。
3. **マイグレーション** — 同等仕様の代替マイコンにファームウェアをコンパイル・書き込む（許容される代替については文書03参照）。
4. **再実装** — ハードウェアの陳腐化に際し、ソースコードを権威ある仕様書として用いて新しいハードウェア上にアルゴリズムを再実装する。

保存行為（3）および（4）については、実施前にNEORT++またはアーティストのスタジオに連絡すること（文書07参照）。

---

## 7. License / ライセンス

The source code is provided to the collector under a restricted license for conservation purposes only. See the enclosed `LICENSE.md` for full terms. Redistribution, publication, or use outside conservation scope is not permitted without written consent from the artist.

ソースコードは、保存目的のみに限定した制限付きライセンスのもとでコレクターに提供されます。完全な条件については同梱の`LICENSE.md`を参照してください。アーティストの書面による同意なしに、保存範囲外での再配布、公開、または使用は許可されません。

---

*Document version 1.0 · Issued 2026 · NEORT++*
