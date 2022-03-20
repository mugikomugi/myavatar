//タブ切り替え
const tabAll = document.querySelectorAll('.partsTab li');
const partsBox = document.querySelectorAll('.partsBox ul');

//複数の要素の中からクリックされた場所を指定するには、forで配列を作り、その中でイベントを起こす
let tabTitle = [];
for(let i = 0; i < tabAll.length; i++){
  //全data-id属性を配列化
  tabTitle.push(tabAll[i].getAttribute('data-id'));
  //どのtabをクリックしたか
  tabAll[i].addEventListener('click',function(){
    //.partsBoxに.actBox付与
    let tabID = document.getElementById(tabTitle[i]);
    tabID.classList.add('actBox');
    //tabに.act付与
    tabAll[i].classList.add('act');
    //class除外したいul
    let noAct = document.querySelectorAll('.partsBox ul:not(#'+tabTitle[i]+')');
    //除外したいidを一つづつ書き出し
    let noClass = [];
    for(let i=0; i < noAct.length; i++){
      noClass.push(noAct[i].getAttribute('id'));
      //click以外の.actBoxを取る
      document.getElementById(noClass[i]).classList.remove('actBox');
      //click以外の.actを取る
      document.querySelector('.partsTab li[data-id="'+noClass[i]+'"]').classList.remove('act');
    }
  });
}
//プレビュー画面
const prevBody = document.getElementById('selectBody');
const prevDeco = document.getElementById('selectDeco');
const prevEye = document.getElementById('selectEye');
const prevBeak = document.getElementById('selectBeak');
const prevBack = document.getElementById('selectBack');

//パーツを配列にして選択
const bodyParts = document.querySelectorAll('#bace li img');
let itemBody = [];
clickParts(bodyParts,itemBody,prevBody);

const eyeParts = document.querySelectorAll('#eye li img');
let itemEye = [];
clickParts(eyeParts,itemEye,prevEye);

const beakParts = document.querySelectorAll('#beak li img');
let itemBeak = [];
clickParts(beakParts,itemBeak,prevBeak);

const back_grParts = document.querySelectorAll('#back_gr li img');
let itemBack_gr = [];
clickParts(back_grParts,itemBack_gr,prevBack);

const decoParts = document.querySelectorAll('#deco li img');
let itemDeco = [];
clickParts(decoParts,itemDeco,prevDeco);

//配列書出しとクリックイベントを関数に
function clickParts(parts,item,prev){
  for(let i = 0; i < parts.length; i++){
    item.push(parts[i].getAttribute('src'));
    parts[i].addEventListener('click',function(){
      prev.setAttribute('src',item[i]);
    });
  }
}

//さいず指定
const size08 = document.getElementById('size08');
const size150 = document.getElementById('size15');
const size300 = document.getElementById('size30');
const size500 = document.getElementById('size50');

size08.addEventListener('click',function(){
  sizeSet(80);
  sizeSelact(size08);
});
size150.addEventListener('click',function(){
  sizeSet(150);
  sizeSelact(size150);
});
size300.addEventListener('click',function(){
  sizeSet(300);
  sizeSelact(size300);
});
size500.addEventListener('click',function(){
  sizeSet(500);
  sizeSelact(size500);
});
//アクティブ切替え
function sizeSelact(num){
  const size = [size08,size150,size300,size500];
  for(let i=0; i < size.length; i++){
    size[i].className = 'sizeBtn';
  }
  num.className = 'sizeBtn sizeMaker';
}

//決定ボタン
const toCanvas = document.getElementById('toCanvas');
//DEMO表示領域
const selctGroup = document.getElementById('selctgroup');
//canvas領域
const canvasBox = document.getElementById('canvasBox');
//canvas生成
const canvas = document.getElementById('canvasImg');
const ctx = canvas.getContext('2d');

//canvasのサイズ取得
function sizeSet(pxNum){
  canvas.setAttribute('width',pxNum);
  canvas.setAttribute('height',pxNum);
}

toCanvas.addEventListener('click',function(){
  const canvasBg = new Image();
  canvasBg.src = prevBack.getAttribute('src');
  const canvasDeco = new Image();
  canvasDeco.src = prevDeco.getAttribute('src');
  const canvasFace = new Image();
  canvasFace.src = prevBody.getAttribute('src');
  const canvasEye = new Image();
  canvasEye.src = prevEye.getAttribute('src');
  const canvasBeak = new Image();
  canvasBeak.src = prevBeak.getAttribute('src');
  //サイズ取得
  const canvasW = canvas.getAttribute('width');
  const canvasH = canvas.getAttribute('height');

  //DLボタン
  const canvasDL = document.getElementById('toDownload');

  canvasBg.onload = () => {
    ctx.globalCompositeOperation='source-over';
    ctx.drawImage(canvasBg,0,0,canvasW,canvasH);
    ctx.drawImage(canvasDeco,0,0,canvasW,canvasH);
    ctx.drawImage(canvasFace,0,0,canvasW,canvasH);
    ctx.drawImage(canvasEye,0,0,canvasW,canvasH);
    ctx.drawImage(canvasBeak,0,0,canvasW,canvasH);
    //画像URL化とDL、サーバでしか動かない、ローカルではエラー
    const dataURL = canvas.toDataURL();
    canvasDL.href = dataURL;
  }
  //canvas表示
  canvasBox.style.display = 'block';
  selctGroup.style.display = 'none';
});

//キャンセルした場合の処理
const cancell = document.getElementById('toremake');
cancell.addEventListener('click',function(){
  const canvasW = canvas.getAttribute('width');
  const canvasH = canvas.getAttribute('height');
  ctx.clearRect(0,0,canvasW,canvasH);
  //canvas非表示
  canvasBox.style.display = 'none';
  selctGroup.style.display = 'block';
});

//ライセンスへスクロール
//スクロールポイントにoverflow-y: scrollのcssが必要
  const toLicense = document.getElementById('toLicense');
  const license = document.getElementById('license');
  let rect = license.getBoundingClientRect();
  toLicense.addEventListener('click',function(){
    window.scrollTo( 0, rect.top);
  });


