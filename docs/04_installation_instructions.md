# Installation Instructions
# 展示インストラクション

---

## Rain Blooms Lattice

**Artist / アーティスト:** Kazuhiro Tanimoto / 谷本和寛  
**Edition / エディション:** No. __ of 5

---

## 1. Overview / 概要

Rain Blooms Lattice is a free-standing sculpture. The LED panel is mounted horizontally at the top of the aluminum frame and is intended to be viewed from above — the observer looks down into the panel as if looking into a shallow pool. The work requires a power connection only; no network connection, no external media.

《Rain Blooms Lattice》は自立型の彫刻です。LEDパネルはアルミフレームの上部に水平に取り付けられており、上面から——浅い水盤を覗き込むように——鑑賞することを意図しています。電源への接続のみ必要であり、ネットワーク接続や外部メディアは不要です。

---

## 2. Components / 構成部品

梱包を開く前に、以下のコンポーネントがすべて揃っていることを確認してください。

- [ ] Aluminum frame assembly / アルミフレーム一式
- [ ] LED matrix panel (attached to frame) / LEDマトリクスパネル（フレームに取り付け済み）
- [ ] Microcontroller unit (attached to underside of frame) / マイコンユニット（フレーム裏面に取り付け済み）
- [ ] Power supply unit / 電源ユニット
- [ ] Power cable / 電源ケーブル
- [ ] Certificate of Authenticity / 真正性証明書
- [ ] Identity Document / 作品同一性文書
- [ ] Source Code Archive (USB) / ソースコードアーカイブ（USB）
- [ ] Copyright License / 著作権ライセンス
- [ ] Conservation Notes / 保存ノート

---

## 3. Electrical Specification / 電気仕様

| Item | Specification |
|---|---|
| Input voltage / 入力電圧 | 100–240 V AC, 50/60 Hz |
| Output voltage / 出力電圧 | 5 V DC |
| Power consumption / 消費電力 | Max. 30 W (192 mm) / Max. 65 W (384 mm) / Max. 120 W (576 mm) |
| Connector / コネクタ | DC barrel jack (centre positive) |

**Do not use a power supply other than the one provided or an equivalent meeting this specification. Using an incorrect supply may permanently damage the work.**

**付属の電源ユニット、またはこの仕様を満たす同等品以外の電源は使用しないでください。不適切な電源の使用は作品に恒久的な損傷を与える可能性があります。**

---

## 4. Placement / 設置

### 4.1 Surface / 設置面

Place the frame on a stable, level surface capable of supporting the weight of the work. The frame feet include non-slip pads; no additional fixings are normally required.

フレームを安定した水平な面の上に設置してください。作品の重量を支えられる面であることを確認してください。フレームの脚には滑り止めパッドが付いています。通常、追加の固定具は不要です。

### 4.2 Orientation / 向き

The LED panel must be horizontal. Do not tilt or incline the frame. The panel face points upward; the observer stands or sits beside the work and looks down.

LEDパネルは必ず水平にしてください。フレームを傾けたり斜めにしたりしないでください。パネル面は上向きです。鑑賞者は作品の横に立つか座り、上から覗き込みます。

### 4.3 Viewing distance and height / 鑑賞距離と高さ

The optimal viewing height places the observer's eyes approximately 40–80 cm above the panel surface. At this distance the full 64×64 grid is clearly visible and the individual LED dots resolve into a coherent image. Viewing from greater height is also valid.

最適な鑑賞高さは、観察者の目がパネル面から約40〜80 cmの位置です。この距離で64×64グリッド全体が明確に見え、個々のLEDドットがまとまった像として認識されます。より高い位置からの鑑賞も適切です。

### 4.4 Ambient light / 周囲の明るさ

The work can be displayed in a range of lighting conditions. For optimal visual impact, dim ambient lighting is recommended. Direct sunlight on the panel surface should be avoided, as it significantly reduces visibility of the LED output.

作品はさまざまな照明条件で展示できます。最適な視覚的効果のためには、暗めの周囲光を推奨します。パネル面への直射日光は、LEDの視認性を著しく低下させるため避けてください。

### 4.5 Clearance / 周囲のスペース

Allow a minimum of 30 cm clearance on all sides of the frame to ensure adequate ventilation and to permit observation from multiple positions.

通気を確保し、複数の位置からの鑑賞を可能にするため、フレームの全周に最低30 cmの空間を設けてください。

---

## 5. Power-On Procedure / 電源投入手順

1. Confirm the work is placed on a stable, level surface.  
   作品が安定した水平な面に設置されていることを確認する。

2. Connect the power cable to the power supply unit.  
   電源ケーブルを電源ユニットに接続する。

3. Connect the DC output of the power supply to the connector on the underside of the frame.  
   電源ユニットのDC出力をフレーム裏面のコネクタに接続する。

4. Connect the power supply to a mains outlet.  
   電源ユニットをコンセントに接続する。

5. The work starts immediately. The LED panel will initialise and begin computing within a few seconds.  
   作品はただちに起動します。LEDパネルが初期化され、数秒以内に計算を開始します。

**There is no on/off switch. To stop the work, disconnect from mains power.**  
**電源スイッチはありません。作品を停止するには、コンセントから電源を抜いてください。**

---

## 6. Normal Operation / 通常動作

Once running, the work computes continuously. The image on the LED panel evolves in real time and does not repeat. The audio output is generated simultaneously. After a fixed number of computation cycles, the work resets with a new random seed and begins again from a different initial state; this reset is part of the work's intended behavior.

起動後、作品は継続的に計算します。LEDパネルの映像はリアルタイムで進化し、繰り返しません。音声出力は同時に生成されます。固定された計算サイクル数の後、作品は新しいランダムシードでリセットし、異なる初期状態から再び始まります。このリセットは作品の意図された動作の一部です。

---

## 7. Power-Off / 電源切断

Disconnect from mains power at any time. The work retains no state between power cycles; each startup is a fresh computation from a randomly seeded initial state.

いつでもコンセントから電源を抜いて停止できます。作品は電源サイクル間の状態を保持しません。各起動はランダムにシードされた初期状態からの新たな計算となります。

---

## 8. Do Not / 禁止事項

- Do not expose the LED panel to liquids.  
  LEDパネルに液体をかけないこと。
- Do not place objects on the LED panel surface.  
  LEDパネル面の上に物を置かないこと。
- Do not attempt to open the microcontroller housing.  
  マイコンの筐体を開けようとしないこと。
- Do not modify the firmware.  
  ファームウェアを改変しないこと。
- Do not operate the work in ambient temperatures above 35 °C or below 5 °C.  
  周囲温度が35 °Cを超える、または5 °C未満の環境では動作させないこと。

---

## 9. Support / サポート

For technical questions, please contact:  
技術的なご質問は以下までご連絡ください：

**NEORT++**  
Email: info@neort.io  
Web: two.neort.io

---

*Document version 1.0 · Issued 2026*
