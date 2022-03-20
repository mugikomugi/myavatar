# myavatar
## インコアバター生成システム
**格納ファイル**
|ファイル・フォルダ | 内容
|--|--
|index.html | トップページ・生成画面表示
|mybace.js | 画像生成コード
|vue_parts.js | パーツ画像の配列を収納
|vue.min.js | フレームワーク
|sanitize.css | 初期設定CSS
|style.css | 基本CSS
|favicon.cio | ファビコン
|image | 画像フォルダ

### **仕様**
シングルページ完結<br>

- preview画面とタブ切替えはCSSで処理
- タブ選択の各パーツはvue_parts.jsに配列として格納
- 決定ボタン後canvasに切替え
- previewから画像URLを取得してcanvasに描写
- ダウンロード画像はPNG形式

### 注釈
※画像はIllustratorで制作しましたがimageフォルダに各パーツのデータは入れていません。<br>
※canvasを画像URLとして変換させるにはサーバでないと機能しない為、ローカルではエラーになります。<br><br>
**DEMO**<br>
[https://spica.okamechan.com/avatar/](https://spica.okamechan.com/avatar/)


