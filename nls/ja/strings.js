/*
* strings.js
* Author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT License:
* http://www.opensource.org/licenses/mit-license.php
*
* strings.js Copyright Fede91 2014.
*/

// Japanese - ja strings

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */
define({
    "TITLE_PREFERENCES"    : "設定...",
    "BTT_SAVE"             : "保存",
    "BTT_CANC"             : "キャンセル",
    "LBL_CAT_GENERAL_SETT" : "一般",
    "LBL_CAT_NETWORK_CON"  : "ネットワーク接続",
    "LBL_CAT_EDITOR_SETT"  : "編集",
    "LBL_CLOSEBRACKETS"    : "閉じカッコ",
    "DESC_CLOSEBRACKETS"   : "中括弧、角括弧、丸括弧を自動的に閉じる",
    "LBL_DRAGDROPTEXT"     : "ドラッグ＆ドロップ機能",
    "DESC_DRAGDROPTEXT"    : "ドラッグ＆ドロップ機能を有効化/無効化",
    "LBL_SHOWCURSORWHENSEL": "文字が選択されているときにカーソルを表示する",
    "DESC_SHOWCURSORWHENSEL": "文字が選択されているときに点滅カーソルを表示したままにします",
    "LBL_UPPERCASECOLORS"  : "大文字の 16 進カラー",
    "DESC_UPPERCASECOLORS" : "Inline Color Editor で大文字の 16 進カラーを生成するには true",
    "LBL_CODEHINT"         : "コードヒント",
    "LBL_SHOWCODEHINTS"    : "コードヒントを表示する",
    "DESC_SHOWCODEHINTS"   : "選択すると、すべてのコードヒントを有効にします",
    "DESC_MAXCODEHINTS"    : "一度に表示される最大コードヒント",

    "LBL_CF_CODEFOLDING"   : "コード折りたたみ",
    "LBL_CF_USEINDENTFOLD" : "常にインデントによる折りたたみを使用する",
    "LBL_CF_HIDEMOUSEOVER" : "マウスポインターを置くまで隠す",
    "LBL_CF_MAXFOLDLEVEL"  : "最大折りたたみレベル",
    "LBL_CF_MINFOLDSIZE"   : "最小折りたたみサイズ",
    "LBL_CF_SAVEFOLDSTATE" : "折りたたまれたセクションを記憶する",

    "LBL_ATTRHINTS"        : "HTML 属性ヒント",
    "LBL_CSSPROPHINTS"     : "CSS/LESS/SCSS プロパティヒント",
    "LBL_JSHINTS"          : "JavaScript のコードヒント",
    "LBL_SPECIALCHARHINTS" : "HTML エンティティヒント",
    "LBL_SVGHINTS"         : "SVG のコードヒント",
    "LBL_TAGHINTS"         : "HTML タグヒント",
    "LBL_URLCODEHINTS"     : "HTML や CSS/LESS/SCSS の URL ヒント",
    "LBL_NOHINTSONDOT"     : ". の入力時に JS コードヒントを自動表示しない",
    "LBL_HIGHLIGHTMATCHES" : "一致する文字列の自動ハイライト",
    "DESC_HIGHLIGHTMATCHES": "選択している文字に一致するすべての文字列をハイライト（選択していないときにはハイライトはありません）",
    "LBL_ENABLED"          : " 有効にする",
    "LBL_CODE_INSPECTION"  : "コードの検査",
    "LBL_TABS_INST_SPACE"  : "スペースの代わりにタブを使う",
    "LBL_TAB_SIZE"         : "タブ幅",
    "LBL_SPACE_UNITS"      : "スペース幅",
    "LBL_WORD_WRAP"        : "折り返し",
    "LBL_PROXY"            : "プロキシ",
    "LBL_PROXY_PROTOCOL"   : "プロトコル：",
    "LBL_PROXY_PROT_NONE"  : "なし",
    "LBL_PROXY_PROT_HTTP"  : "HTTP",
    "LBL_PROXY_PROT_HTTPS" : "HTTPS",
    "LBL_PROXY_USERNAME"   : "ユーザ名：",
    "LBL_PROXY_PASSWORD"   : "パスワード：",
    "LBL_PROXY_SERVER"     : "サーバー：",
    "LBL_PROXY_PORT"       : "ポート：",
    "LBL_SMART_INDENT"     : "スマートインデント",
    "LBL_INS_HINT_ON_TAB"  : "Tab でヒントを挿入する",
    "LBL_SORT_DIR"         : "ディレクトリを並べ替える",
    "LBL_STATIC_SERV_PORT" : "組み込みサーバーのポート",
    "LBL_SCROLL_PAST_END"  : "末尾と余白までスクロールする",
    "LBL_SOFT_TABS"        : "ソフトタブ",
    "DESC_C_IN"            : "コード検査を ON にするならば 決定します（デフォルト: true）",
    "DESC_T_I_SP"          : "スペースの代わりにタブを使用するには true （デフォルト: 4）",
    "DESC_T_SP"            : "タブに表示するスペースの数（デフォルト: 4）",
    "DESC_S_UN"            : "スペースベースのインデントに用いるスペースの数（デフォルト: 4）",
    "DESC_W_WR"            : "折り返しを ON にするならば true （デフォルト: true）",
    "DESC_S_I"             : "新規ブロックの作成時に自動的にインデントを設定（デフォルト: true）",
    "DESC_H_TA"            : "タブで現在選択しているコードヒントを挿入するには true （デフォルト: false）",
    "DESC_S_DI"            : "プロジェクトツリーでディレクトリが先に来るように並べ替えるには true （デフォルト: false（Mac）, true（その他））",
    "DESC_P_SE"            : "組み込みのサーバーがライブプレビューで使用するポートの番号",
    "DESC_S_E"             : "ドキュメントの終端を超えたスクロールを有効にするには true （デフォルト: false）",
    "DESC_S_T"             : "ソフトタブの動作を無効にするには false （デフォルト: true）"
});
