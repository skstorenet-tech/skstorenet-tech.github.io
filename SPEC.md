# ぷここん家 ウェブサイト 仕様書

## 基本情報

| 項目 | 内容 |
|---|---|
| サイト名 | 譲渡型保護猫カフェ ぷここん家 |
| 公開URL | https://www.pucocnchi.com |
| GitHubリポジトリ | https://github.com/skstorenet-tech/skstorenet-tech.github.io |
| ホスティング | GitHub Pages |
| ローカル作業フォルダ | `c:\Users\satos\product\猫カフェHP` |

---

## ページ構成

| ファイル名 | ページ名 | 役割 |
|---|---|---|
| `index.html` | トップページ | メインページ。全セクションを含む |
| `menu.html` | カフェメニュー一覧 | メニューの詳細ページ |
| `hotel.html` | 猫ホテル | ホテルサービスの詳細・料金 |
| `lifetime.html` | 終生飼育のご相談 | 終生飼育サービスの詳細 |
| `philosophy.html` | 理念・想い | 店の理念・歴史の紹介 |

### index.html のセクション構成（上から順）

1. **ヘッダー / ナビゲーション** — ロゴ・メニュー・Instagramボタン・ハンバーガーメニュー
2. **ヒーロー** (`#home`) — 背景動画、猫写真4枚、キャッチコピー
3. **ビジネスナビ** — カフェ / 猫ホテル / 終生飼育への導線カード
4. **お知らせ** — リニューアル告知など
5. **お店について** (`#about`) — 店の紹介文、写真
6. **はじめての方へ** (`#guide`) — 対象客層タグ、注意事項
7. **料金システム** (`#pricing`) — 30分〜120分の料金カード
8. **カフェメニュー** (`#menu`) — 人気メニュー抜粋 + menu.htmlへのリンク
9. **猫スタッフ紹介** (`#cats`) — 猫写真ギャラリー9枚
10. **猫ホテル** (`#hotel`) — hotel.htmlへの導線
11. **終生飼育** (`#lifetime`) — lifetime.htmlへの導線
12. **営業日・アクセス** (`#access`) — 営業時間・住所・地図
13. **Q&A** (`#faq`) — よくある質問（アコーディオン形式）
14. **フッター** — ブランド情報・SNS・電話リンク

---

## 店舗情報

| 項目 | 内容 |
|---|---|
| 住所 | 〒802-0805 福岡県北九州市小倉南区八幡町35-9 新屋ビル1F |
| 電話 | 050-1391-1319 |
| Instagram | https://www.instagram.com/pucocnchi_1122/ |

### 営業時間

| 区分 | 曜日 | 時間 |
|---|---|---|
| お昼の部 | 水〜日 | 12:00 〜 17:00 |
| 夜の部 | 金・土・日 | 19:00 〜 21:00 |
| 定休日 | 月・火 | — |

### 料金システム

| 時間 | 料金 | 最終受付 |
|---|---|---|
| 30分 | ¥900 | 16:30 |
| 60分 | ¥1,300 | 16:00 |
| 90分 | ¥1,700 | 15:30 |
| 120分 | ¥2,100 | 15:00 |
| 延長15分 | ¥500 | — |

---

## ファイル構成

```
猫カフェHP/
├── index.html          # トップページ
├── menu.html           # カフェメニュー一覧
├── hotel.html          # 猫ホテル
├── lifetime.html       # 終生飼育
├── philosophy.html     # 理念・想い
├── styles.css          # 全ページ共通スタイル
├── script.js           # 全ページ共通JavaScript
├── favicon.jpg         # ファビコン（猫のイラスト）
├── CNAME               # 独自ドメイン設定（www.pucocnchi.com）※編集禁止
├── assets/             # 共通画像素材
│   ├── logo.jpg        # ロゴ画像
│   ├── hero_bg.png     # ヒーロー背景
│   ├── cat1.jpg〜cat6.jpeg  # 猫写真
│   ├── cafe_interior.png, cafe_food.png
│   └── philosophy_*.png     # 理念ページ用画像
└── ねこ/               # 猫・フードの写真・動画
    ├── Cat_playing_in_*.mp4  # ヒーロー背景動画
    ├── *.JPEG               # 猫写真（UUIDファイル名）
    └── メニュー写真各種.JPEG
```

---

## 技術仕様

### 使用技術

| 項目 | 内容 |
|---|---|
| 言語 | HTML / CSS / JavaScript（バニラJS、フレームワーク不使用） |
| フォント | M PLUS Rounded 1c / Zen Maru Gothic（Google Fonts） |
| アイコン | Font Awesome 6.4.0 |
| ホスティング | GitHub Pages（静的サイト） |

### JavaScript機能（script.js）

| 機能 | 説明 |
|---|---|
| スクロールリビール | `.reveal` クラスの要素がスクロールで表示されるアニメーション |
| スティッキーヘッダー | スクロール50px以上で `.scrolled` クラスが付与される |
| ハンバーガーメニュー | スマホ時のナビゲーション開閉 |
| スムーズスクロール | アンカーリンクのなめらかな移動 |
| アクティブナビ | スクロール位置に応じてナビリンクをハイライト |
| 肉球アニメーション | ヒーロー上に2秒後・10秒間隔で肉球が歩くアニメーション |

### 共通headタグ（全ページ統一）

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&family=Zen+Maru+Gothic:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="icon" href="favicon.jpg" type="image/jpeg">
<link rel="stylesheet" href="styles.css">
```

---

## GitHubへの更新手順

### 初回セットアップ（済み）
ローカルフォルダとGitHubリポジトリの紐づけは完了済みです。

### 毎回の更新手順

ターミナルで `c:\Users\satos\product\猫カフェHP` フォルダを開き、以下を実行：

```bash
# 1. 変更したファイルを登録
git add 変更したファイル名

# 2. 変更内容にコメントをつけて保存
git commit -m "変更内容のメモ（例: 営業時間を更新）"

# 3. GitHubに送信（サイトに反映）
git push origin main
```

#### 複数ファイルをまとめて更新する場合

```bash
git add index.html menu.html
git commit -m "トップページとメニューを更新"
git push origin main
```

#### 全ファイルをまとめて更新する場合

```bash
git add .
git commit -m "全ページを更新"
git push origin main
```

### 注意事項

- `CNAME` ファイルは**絶対に削除・編集しない**（独自ドメインが壊れる）
- GitHubへのプッシュ後、反映まで1〜2分かかることがある
- 画像を追加した場合は画像ファイルも `git add` に含めること

---

## コンテンツの更新場所早見表

| 更新したい内容 | 変更するファイル | 場所 |
|---|---|---|
| 営業時間 | `index.html` | `#access` セクション内の `access-table` |
| 料金 | `index.html` | `#pricing` セクション内の `price-card` |
| カフェメニュー | `menu.html` | 各 `menu-page-card` 内の `menu-items` |
| Q&A | `index.html` | `#faq` セクション内の `faq-item` |
| お知らせ | `index.html` | `renewal-notice` セクション |
| 猫写真 | `index.html` / `menu.html` | `ねこ/` フォルダに画像を追加しパスを変更 |
| 猫ホテル料金 | `hotel.html` | ページ内の料金テーブル |
| 終生飼育内容 | `lifetime.html` | ページ内のテキスト |
| 理念・想い | `philosophy.html` | ページ内のテキスト |
| 共通デザイン | `styles.css` | CSS変数（`:root`）またはクラス定義 |
