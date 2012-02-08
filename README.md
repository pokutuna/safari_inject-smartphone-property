# Safari拡張 InjectSmartphoneProperty

MobileSafariにあってSafariにないjsのプロパティをむりやり追加する


## 対応してるプロパティ
- `window.ontouchstart` : `null`
- `window.ontouchmove` : `null`
- `window.ontouchend` : `null`
- `window.orientation` : `0`


## 実装について
`DOMContentLoaded`が発火した時に`document.head`へ
上記のプロパティをセットする`script`要素をつっこむ
