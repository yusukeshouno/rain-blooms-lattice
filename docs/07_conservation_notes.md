# Conservation Notes
# 保存ノート

---

## Rain Blooms Lattice

**Artist / アーティスト:** Kazuhiro Tanimoto / 谷本和寛  
**Edition / エディション:** No. __ of 5  
**Document version / 文書バージョン:** 1.0  
**Issued / 発行:** 2026

---

## 1. Overview / 概要

This document provides conservation guidance for the long-term care of *Rain Blooms Lattice*. It covers routine maintenance, component replacement policy, acceptable repair procedures, and contacts for technical support. It should be read in conjunction with Document 03 (Identity Document), which defines which components are work-defining and which may be substituted.

本文書は、《Rain Blooms Lattice》の長期的な保存管理に関するガイダンスを提供します。日常的なメンテナンス、部品交換方針、許容される修理手順、技術サポートの連絡先を網羅しています。どのコンポーネントが作品を定義し、どれが代替可能かを定義する文書03（作品同一性文書）と併せて参照してください。

---

## 2. Routine Maintenance / 日常的なメンテナンス

### 2.1 Cleaning the LED Panel / LEDパネルの清掃

The LED panel surface may accumulate dust. To clean:

LEDパネル面にほこりが溜まることがあります。清掃方法：

1. Power off the work and disconnect from mains.  
   作品の電源を切り、コンセントから抜く。
2. Allow the panel to cool for 5 minutes.  
   パネルが冷えるまで5分待つ。
3. Wipe gently with a dry, lint-free microfibre cloth.  
   乾いた、けば立ちのないマイクロファイバークロスで優しく拭く。
4. Do not use any liquid cleaner, solvent, or compressed air directly on the panel.  
   パネルに液体クリーナー、溶剤、または圧縮空気を直接使用しないこと。

### 2.2 Cleaning the Frame / フレームの清掃

The aluminum frame may be wiped with a dry or lightly damp cloth. Avoid abrasive cleaners that could scratch the anodized finish.

アルミフレームは乾いた布または軽く湿らせた布で拭くことができます。アルマイト仕上げを傷つける可能性のある研磨剤入りのクリーナーは避けてください。

### 2.3 Storage / 保管

If the work is to be stored for an extended period:

作品を長期間保管する場合：

- Store in a climate-controlled environment: temperature 10–25 °C, relative humidity 40–60%.  
  温度10〜25 °C、相対湿度40〜60%の温湿度管理された環境に保管すること。
- Cover the LED panel with acid-free tissue paper before packing.  
  梱包前にLEDパネルを中性紙（酸フリー）で覆うこと。
- Store upright, not stacked.  
  立てて保管し、積み重ねないこと。
- Power on and operate the work for at least 1 hour per month during extended storage periods to prevent component degradation from disuse.  
  長期保管中は部品の不使用による劣化を防ぐため、月に最低1時間は電源を入れて動作させること。

---

## 3. Component Replacement Policy / 部品交換方針

As defined in Document 03, the work's identity resides in the algorithm and parameter configuration, not in specific hardware. Components may be replaced according to the following policy.

文書03で定義されているように、作品の同一性はアルゴリズムとパラメータ設定にあり、特定のハードウェアにはありません。コンポーネントは以下の方針に従って交換できます。

### 3.1 Power Supply Unit / 電源ユニット

**Replacement policy: Free substitution with no artist consultation required.**

Any power supply meeting the electrical specification (5 V DC, sufficient current rating for the edition size — see Document 04) may be substituted.

**交換方針：アーティストへの相談不要で自由に交換可能。**

電気仕様（DC 5V、エディションサイズに応じた十分な電流容量——文書04参照）を満たす電源ユニットは代替可能です。

### 3.2 Power Cable / 電源ケーブル

**Replacement policy: Free substitution.**

Replace with a cable of equivalent rating. Ensure the DC connector polarity is correct (centre positive).

**交換方針：自由に交換可能。**

同等の定格のケーブルに交換すること。DCコネクタの極性が正しいことを確認すること（センタープラス）。

### 3.3 LED Panel / LEDパネル

**Replacement policy: Consult NEORT++ before proceeding.**

The LED panel may be replaced with a panel of equivalent or superior specification (≥64×64 LEDs, equivalent color gamut and brightness). Because the panel driver firmware must be compatible, do not source a replacement independently — contact NEORT++ to confirm compatibility before purchase.

**交換方針：実施前にNEORT++に相談すること。**

LEDパネルは同等以上の仕様（64×64 LED以上、同等の色域と輝度）のパネルに交換できます。パネルドライバのファームウェアとの互換性が必要なため、独自に代替品を調達せず、購入前にNEORT++に連絡して互換性を確認すること。

Estimated service life: 50,000–100,000 hours at standard brightness.  
推定耐用時間：標準輝度で50,000〜100,000時間。

### 3.4 Microcontroller Unit / マイコンユニット

**Replacement policy: Consult NEORT++ before proceeding. Firmware reflashing required.**

If the microcontroller fails, it may be replaced with an identical model or a compatible substitute. The firmware must be reflashed from the source code archive (Document 05). Contact NEORT++ before sourcing the replacement to confirm the candidate hardware is compatible with the firmware.

**交換方針：実施前にNEORT++に相談すること。ファームウェアの再書き込みが必要。**

マイコンが故障した場合、同一モデルまたは互換性のある代替品に交換できます。ファームウェアはソースコードアーカイブ（文書05）から再書き込みが必要です。代替品を調達する前にNEORT++に連絡し、候補のハードウェアがファームウェアと互換性があることを確認すること。

### 3.5 Frame / フレーム

**Replacement policy: Structural repair and refinishing are acceptable. Full replacement requires artist consultation.**

Minor damage (scratches, dents) to the aluminum frame may be repaired or refinished. If the frame requires full replacement, consult the artist to ensure structural proportions are maintained.

**交換方針：構造的な修理や再仕上げは可能。完全交換にはアーティストへの相談が必要。**

アルミフレームの軽微な損傷（傷、凹み）は修理または再仕上げできます。フレームの完全交換が必要な場合は、構造的な比率が維持されるようアーティストに相談すること。

### 3.6 Audio Output Device / 音声出力デバイス

**Replacement policy: Free substitution with equivalent-quality speaker.**

Replace with a speaker of equivalent impedance and frequency response. The audio output character may vary slightly within acceptable range.

**交換方針：同等品質のスピーカーへの自由な代替可能。**

同等のインピーダンスと周波数特性のスピーカーに交換すること。音声出力の特性は許容範囲内でわずかに変化する場合があります。

---

## 4. Iteration Record / イテレーション記録

All component substitutions should be documented below. Maintaining this record is important for future conservation assessments.

すべての部品交換は以下に記録すること。この記録の維持は将来の保存評価において重要です。

| Date / 日付 | Component replaced / 交換部品 | Original / 元の部品 | Replacement / 交換後の部品 | Technician / 実施者 | Notes / 備考 |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

---

## 5. Environmental Conditions / 環境条件

| Parameter / 項目 | Operating / 動作時 | Storage / 保管時 |
|---|---|---|
| Temperature / 温度 | 5–35 °C | 10–25 °C |
| Relative humidity / 相対湿度 | 20–80% (non-condensing) | 40–60% |
| Direct sunlight / 直射日光 | Avoid / 避けること | Avoid / 避けること |

---

## 6. Known Limitations and Wear / 既知の限界と消耗

- **LED brightness degradation**: LEDs gradually dim over their service life. Brightness reduction of up to 30% from initial output is considered within normal operation and does not constitute a conservation issue. Beyond 50% reduction, panel replacement should be considered.

- **Electrolytic capacitors**: The power supply contains electrolytic capacitors with a typical service life of 10–15 years under normal operating conditions. If the work begins showing unstable behavior (flickering, unexpected resets), capacitor aging in the power supply is the first thing to investigate.

- **Long-term firmware storage**: The firmware binary stored on the microcontroller flash memory is rated for data retention of 20+ years. The USB archive (Document 05) should be copied to new media every 5–10 years as a precaution.

- **LEDの輝度低下**：LEDは耐用期間中に徐々に暗くなります。初期出力から30%までの輝度低下は通常動作範囲内とみなされ、保存上の問題とはなりません。50%を超える低下がある場合、パネル交換を検討すること。

- **電解コンデンサ**：電源ユニットには通常動作条件下で10〜15年の耐用期間を持つ電解コンデンサが含まれています。作品が不安定な動作（フリッカー、予期しないリセット）を示し始めた場合、電源ユニットのコンデンサ劣化が最初に調査すべき事項です。

- **長期ファームウェア保存**：マイコンフラッシュメモリに保存されたファームウェアバイナリは20年以上のデータ保持期間が定格されています。USBアーカイブ（文書05）は予防措置として5〜10年ごとに新しいメディアにコピーすること。

---

## 7. Support Contact / サポート連絡先

For technical support, conservation consultation, or component sourcing assistance:  
技術サポート、保存に関する相談、部品調達支援については：

**NEORT++**  
Email: info@neort.io  
Web: two.neort.io

For enquiries requiring the artist directly:  
アーティスト直接への問い合わせが必要な場合：

**Kazuhiro Tanimoto / 谷本和寛**  
c/o NEORT++ · info@neort.io

Please include the edition number, a description of the issue, and (where relevant) photographs when contacting support.  
サポートへの連絡の際は、エディション番号、問題の説明、および（関連する場合）写真を含めてください。

---

*Document version 1.0 · Issued 2026 · NEORT++*
