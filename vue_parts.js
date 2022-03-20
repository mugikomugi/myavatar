//画像パス
const okamePass = 'image/okame/';
const sekiseiPass = 'image/sekisei/';
const botanPass = 'image/botan/';
const eyePass = 'image/eye/';
const beakPass = 'image/beak/';
const backgrPass = 'image/back/';

new Vue ({
  el: '#selctgroup',
  data: {
    faceLi: [
      { faceImg: okamePass+'rutino_okame.svg', faceText: 'オカメ<br>(白)' },
      { faceImg: okamePass+'normal_okame.svg', faceText: 'オカメ<br>(ノーマル)' },
      { faceImg: okamePass+'white_okame.svg', faceText: 'オカメ<br>(ホワイトフェイス)' },
      { faceImg: okamePass+'whiteface_okame.svg', faceText: 'オカメ<br>(ホワイトフェイス)' },
      { faceImg: sekiseiPass+'blue_sekisei.svg', faceText: 'セキセイ<br>(ブルー)' },
      { faceImg: sekiseiPass+'green_sekisei.svg', faceText: 'セキセイ<br>(グリーン)' },
      { faceImg: sekiseiPass+'rutino_sekisei.svg', faceText: 'セキセイ<br>(ルチノー)' },
      { faceImg: botanPass+'kozakura.svg', faceText: '小桜' },
      { faceImg: botanPass+'yamabuki.svg', faceText: '山吹ボタン' },
      { faceImg: botanPass+'blbotan.svg', faceText: 'ブルーボタン' },
      { faceImg: botanPass+'kierikuro.svg', faceText: 'キエリクロ' }
    ],
    eyeLi: [
      { eyeImg: eyePass+'bace.svg', eyeText: 'ベーシック' },
      { eyeImg: eyePass+'bace_w.svg', eyeText: 'ハイライト入り' },
      { eyeImg: eyePass+'futi1_w.svg', eyeText: '白フチ取り' },
      { eyeImg: eyePass+'ten.svg', eyeText: 'セキセイ' },
      { eyeImg: eyePass+'rutino.svg', eyeText: 'アルビノ' },
      { eyeImg: eyePass+'botan.svg', eyeText: '小桜' },
      { eyeImg: eyePass+'botan2.svg', eyeText: 'ボタン' },
      { eyeImg: eyePass+'armond.svg', eyeText: 'アーモンドアイ' },
      { eyeImg: eyePass+'armond_botan.svg', eyeText: 'ボタン<br>アーモンドアイ' }
    ],
    beakLi: [
      { beakImg: beakPass+'okame_pink.svg', beakText: 'オカメ<br>(白)' },
      { beakImg: beakPass+'okame_normal.svg', beakText: 'オカメ<br>(ノーマル)' },
      { beakImg: beakPass+'okame_grey.svg', beakText: 'オカメ<br>(ホワイトフェイス)' },
      { beakImg: beakPass+'sekisei_m.svg', beakText: 'セキセイ<br>(男の子)' },
      { beakImg: beakPass+'sekisei_w.svg', beakText: 'セキセイ<br>(女の子)' },
      { beakImg: beakPass+'kozakura.svg', beakText: '小桜' },
      { beakImg: beakPass+'botan_p.svg', beakText: 'ボタン<br>(ブルー)' },
      { beakImg: beakPass+'botan_r.svg', beakText: 'ボタン' }
    ],
    bakgrLi: [
      { backImg: backgrPass+'back_wh.svg', backText: '白背景' },
      { backImg: backgrPass+'back_bl.svg', backText: 'ブルー背景' },
      { backImg: backgrPass+'back_gr.svg', backText: 'グリーン背景' },
      { backImg: backgrPass+'back_ye.svg', backText: 'イエロー背景' },
      { backImg: backgrPass+'back_pk.svg', backText: 'ピンク背景' },
      { backImg: backgrPass+'back_pu.svg', backText: 'パープル背景' },
      { backImg: backgrPass+'back_red.svg', backText: 'レッド背景' },
      { backImg: backgrPass+'back_none.svg', backText: '背景透過' }
    ],
    dekoLi: [
      { decoImg: backgrPass+'deco_star.svg', decoText: '星' },
      { decoImg: backgrPass+'deco_kira.svg', decoText: 'キラ' },
      { decoImg: backgrPass+'back_none.svg', decoText: '無し' }
    ]
  }
});