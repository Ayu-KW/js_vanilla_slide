// 画像の情報を格納 オブジェクトに配列として格納
const picArray = [
  { src: "./img/CeylonTea.jpg", title: "セイロンティー" },
  { src: "./img/Darjeeling.jpg", title: "ダージリン" },
  { src: "./img/EarlGrey.jpg", title: "アールグレイ" },
  { src: "./img/GreenTea.jpg", title: "緑茶" },
  { src: "./img/Matcha.jpg", title: "抹茶" },
];

//画像とテキストを切り替える

// カウンター変数 カウントする箱を用意
let counter = 0;

// 関数
function changePicture() {
  // もしカウントが、picArray配列の数値より小さかったら
  if (counter < picArray.length) {
    // HTMLタグID「slideshow-img」(ドキュメント要素)のファイル情報元の指定を
    // picArray配列(カウント番号)のファイル情報元の指定に変更
    document.getElementById("slideshow-img").src = picArray[counter].src;
    // HTMLタグID「pic-title」(ドキュメント要素)の文字列を
    // picArray配列(カウント番号)の文字列に変更
    document.getElementById("pic-title").innerHTML = picArray[counter].title;
    // カウンター関数に+1していく
    counter++;
    // もしカウントが、picArray配列の数値より小さくなかったら
  } else {
    // HTMLタグID「slideshow-img」(ドキュメント要素)のファイル情報元の指定を
    // picArray配列(0、最初)のファイル情報元の指定に変更
    document.getElementById("slideshow-img").src = picArray[0].src;
    // HTMLタグID「pic-title」(ドキュメント要素)の文字列を
    // picArray配列(0、最初)の文字列に変更
    document.getElementById("pic-title").innerHTML = picArray[0].title;
    // カウンター関数を0に戻す
    counter = 1;
  }
}

// 再生と停止の機能

// スライドが再生中かどうかを確認する変数、0が
let playingID = 0;

// 関数
function playSlideshow() {
  // もし「playingID」が0だったら
  if (playingID == 0) {
    // HTMLタグID「playButton」(ドキュメント要素)の文字列を
    // "STOP"に変更
    document.getElementById("playButton").innerHTML = "STOP";
    //2秒ごとに関数を実行する（タイマーを確立させる）
    playingID = setInterval(changePicture, 2000);
  } else {
    // HTMLタグID「playButton」(ドキュメント要素)の文字列を
    // "START"に変更
    document.getElementById("playButton").innerHTML = "START";
    // setIntarvalで確立されたタイマーを取り消しする（changePicture関数の処理解除）
    clearInterval(playingID);
    // e
    playingID = 0;
  }
}
