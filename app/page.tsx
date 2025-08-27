'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// --- helpers: affiliate rel and URL extraction ---
const ensureSponsoredNofollow = (html: string) => {
  // 1) If rel exists on first anchor, replace it; else inject
  const withTarget = html.replace(/<a\b([^>]*?)>/i, (m, attrs) => {
    // normalize rel
    let newAttrs = attrs;
    if (/\brel\s*=\s*"[^"]*"/i.test(newAttrs)) {
      newAttrs = newAttrs.replace(/rel\s*=\s*"[^"]*"/i, 'rel="sponsored nofollow"');
    } else {
      newAttrs += ' rel="sponsored nofollow"';
    }
    // ensure target blank for external
    if (!/\btarget\s*=\s*"_blank"/i.test(newAttrs)) {
      newAttrs += ' target="_blank"';
    }
    // security noopener
    if (!/\brel\s*=/.test(newAttrs)) {
      newAttrs += ' rel="sponsored nofollow noopener"';
    } else {
      newAttrs = newAttrs.replace(/rel\s*=\s*"([^"]*)"/i, (_m: string, rel: string) => {
        const parts = new Set<string>(rel.split(/\s+/).concat(['sponsored','nofollow','noopener']));
        return `rel="${Array.from(parts).join(' ')}"`;
      });
    }
    return `<a${newAttrs}>`;
  });
  return withTarget;
};

const extractFirstHref = (html: string): string | null => {
  const m = html.match(/<a[^>]*href=\"([^\"]+)\"/i);
  return m ? m[1] : null;
};

const wifiRouters = [
  {
    id: 1,
    name: 'RakuRakuExpress Wi-Fi',
    price: '月額4,642円',
    contractPeriod: '縛りなし',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['データ容量無制限', '海外利用可能', '端末レンタル無料'],
    pros: ['設定が簡単', '即日発送対応', 'サポート充実'],
    cons: ['速度制限あり', '解約時返却必要'],
    recommendedFor: 'Wi-Fi初心者',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+3O692Q+5NPC+BXB8X" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=250712334222&wid=001&eno=01&mid=s00000026400002003000&mc=1"></a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=459MVI+3O692Q+5NPC+BXB8X" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+3O692Q+5NPC+BX3J6" rel="nofollow">【RakuRakuExpress Wi-Fi】</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=459MVI+3O692Q+5NPC+BX3J6" alt="">'
  },
  {
    id: 2,
    name: 'ZEUS WiFi',
    price: '月額980円～',
    contractPeriod: '2年契約',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['海外106カ国対応', '大容量プラン', '端末代金0円'],
    pros: ['料金が安い', '大容量データ', '海外利用可能'],
    cons: ['契約期間あり', '速度制限時遅い'],
    recommendedFor: 'コスパ重視ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+6PQ0DU+4ZW4+5ZMCH" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=250712334406&wid=001&eno=01&mid=s00000023314001006000&mc=1"></a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=459MVI+6PQ0DU+4ZW4+5ZMCH" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+6PQ0DU+4ZW4+5YRHE" rel="nofollow">3か月間980円で20GB利用可能！【ZEUS WiFi】</a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=459MVI+6PQ0DU+4ZW4+5YRHE" alt="">'
  },
  {
    id: 3,
    name: 'サクッとWi-Fi',
    price: '10GB1,580円～',
    contractPeriod: '買い切り',
    speed: '下り最大150Mbps',
    type: '物理SIM',
    features: ['即日利用開始', '全国エリア対応', '24時間サポート'],
    pros: ['申し込み簡単', '即日開通', '縛りなし'],
    cons: ['料金やや高め', '端末選択肢少ない'],
    recommendedFor: '急ぎでWi-Fi必要な方',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4RGV02+4UUG+HVNAP" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=250712334288&wid=001&eno=01&mid=s00000022660003003000&mc=1"></a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+4RGV02+4UUG+HVNAP" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4RGV02+4UUG+HVFKY" rel="nofollow">【サクッとWi-Fi】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=459MVI+4RGV02+4UUG+HVFKY" alt="">'
  },
  {
    id: 4,
    name: 'WiFi東京プリペイド',
    price: '5GB980円～',
    contractPeriod: 'プリペイド',
    speed: '下り最大150Mbps',
    type: 'プリペイド',
    features: ['前払い制', '短期利用OK', '追加チャージ可能'],
    pros: ['必要な分だけ', '契約不要', '旅行に最適'],
    cons: ['長期利用割高', '容量制限あり'],
    recommendedFor: '短期利用・旅行者',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4MPE5U+3MKA+15PEXD" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=250712334280&wid=001&eno=01&mid=s00000016921007005000&mc=1"></a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+4MPE5U+3MKA+15PEXD" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4MPE5U+3MKA+15ORS2" rel="nofollow">【WiFi東京プリペイド】</a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=459MVI+4MPE5U+3MKA+15ORS2" alt="">'
  },
  {
    id: 5,
    name: 'FreeMax+5G',
    price: '月額4,800円',
    contractPeriod: '縛りなし',
    speed: '下り最大3.5Gbps',
    type: '物理SIM',
    features: ['5G対応', '高速通信', '大容量データ'],
    pros: ['5G高速', '大容量', '安定通信'],
    cons: ['料金高め', '5Gエリア限定'],
    recommendedFor: '高速通信重視ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4M3YK2+3MKA+NV9N5" rel="nofollow"><img border="0" width="250" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=250712334279&wid=001&eno=01&mid=s00000016921004009000&mc=1"></a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=459MVI+4M3YK2+3MKA+NV9N5" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4M3YK2+3MKA+NTRMQ" rel="nofollow">FreeMax+5G</a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=459MVI+4M3YK2+3MKA+NTRMQ" alt="">'
  },
  {
    id: 6,
    name: 'Free-Style Wi-Fi',
    price: '端末買い切り16,280円 月額0円',
    contractPeriod: '買い切り',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['自由度高い', '柔軟プラン', '追加オプション豊富'],
    pros: ['プラン自由', 'オプション充実', 'サポート良い'],
    cons: ['基本料金やや高', '複雑な料金体系'],
    recommendedFor: '自由度重視ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+43NISY+348K+4ATCFL" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=250712334248&wid=001&eno=01&mid=s00000014546026003000&mc=1"></a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=459MVI+43NISY+348K+4ATCFL" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+43NISY+348K+4AT4PU" rel="nofollow">【Free-Style Wi-Fi】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+43NISY+348K+4AT4PU" alt="">'
  },
  {
    id: 7,
    name: 'にゃんこWi-Fi',
    price: '月額2,200円〜2,970円',
    contractPeriod: '縛りなし',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['可愛いデザイン', '女性向け', '簡単設定'],
    pros: ['デザイン可愛い', '料金安い', '設定簡単'],
    cons: ['速度普通', 'ビジネス向きでない'],
    recommendedFor: '女性・デザイン重視ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+41V7ZM+5IK2+HXKQP" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=250712334245&wid=001&eno=01&mid=s00000025733003012000&mc=1"></a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=459MVI+41V7ZM+5IK2+HXKQP" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+41V7ZM+5IK2+HVFKY" rel="nofollow">ポケット型Wi-Fi"にゃんこWi-Fi"</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=459MVI+41V7ZM+5IK2+HVFKY" alt="">'
  },
  {
    id: 8,
    name: 'ネオチャージWiFi',
    price: '端末買い切り25,000円（100GB） 月額0円',
    contractPeriod: '買い切り',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['チャージ式', '使った分だけ', '無駄なし'],
    pros: ['従量制で経済的', '無駄なし', '管理しやすい'],
    cons: ['使いすぎ注意', '計算複雑'],
    recommendedFor: '節約志向ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4POK6Q+57X0+5ZEMP" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=250712334285&wid=001&eno=01&mid=s00000024354001005000&mc=1"></a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=459MVI+4POK6Q+57X0+5ZEMP" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4POK6Q+57X0+5YRHE" rel="nofollow">【ネオチャージWiFi】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+4POK6Q+57X0+5YRHE" alt="">'
  },
  {
    id: 9,
    name: 'それがだいじWi-Fi',
    price: '月額2,585円～',
    contractPeriod: '2年契約',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['安定性重視', '信頼のサービス', '充実サポート'],
    pros: ['安定した通信', 'サポート充実', '信頼性高い'],
    cons: ['料金標準的', '特別感なし'],
    recommendedFor: '安定性重視ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4QVFEA+5NXO+5YZ75" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=250712334287&wid=001&eno=01&mid=s00000026430001003000&mc=1"></a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=459MVI+4QVFEA+5NXO+5YZ75" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4QVFEA+5NXO+5YJRM" rel="nofollow">それがだいじWi-Fi</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=459MVI+4QVFEA+5NXO+5YJRM" alt="">'
  },
  {
    id: 10,
    name: 'インスタントWi-Fi',
    price: '端末買い切り17,800〜23,980円 月額0円',
    contractPeriod: '買い切り',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['即時開通', '簡単設定', '高速配送'],
    pros: ['即日利用可能', '設定不要', '配送早い'],
    cons: ['料金やや高め', '長期割引なし'],
    recommendedFor: '即時利用希望ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4Q9ZSI+5NXO+BXB8X" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=250712334286&wid=001&eno=01&mid=s00000026430002003000&mc=1"></a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=459MVI+4Q9ZSI+5NXO+BXB8X" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4Q9ZSI+5NXO+BWVTE" rel="nofollow">インスタントWi-Fi</a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=459MVI+4Q9ZSI+5NXO+BWVTE" alt="">'
  },
  {
    id: 11,
    name: 'クラウドWiFi',
    price: '月額2,580円～',
    contractPeriod: '縛りなし',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['クラウド管理', '世界対応', '端末補償'],
    pros: ['管理しやすい', '海外対応', '補償充実'],
    cons: ['料金高め', '速度普通'],
    recommendedFor: '海外利用ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4P34KY+3MKA+HWAG1" rel="nofollow"><img border="0" width="250" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=250712334284&wid=001&eno=01&mid=s00000016921003006000&mc=1"></a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=459MVI+4P34KY+3MKA+HWAG1" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4P34KY+3MKA+HVV0I" rel="nofollow">世界135ヵ国に対応のクラウドWi-Fiを即日発送でレンタル！</a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=459MVI+4P34KY+3MKA+HVV0I" alt="">'
  },
  {
    id: 12,
    name: 'ZEUS WiFi CHARGE オートチャージプラン',
    price: '月額1,980円～',
    contractPeriod: '縛りなし',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['自動チャージ', '使いすぎ防止', '柔軟プラン'],
    pros: ['自動で便利', '使いすぎ防止', 'プラン柔軟'],
    cons: ['管理が複雑', '料金体系複雑'],
    recommendedFor: '自動管理希望ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4IJCXE+4ZW4+HVV0H" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=250712334273&wid=001&eno=01&mid=s00000023314003004000&mc=1"></a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=459MVI+4IJCXE+4ZW4+HVV0H" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4IJCXE+4ZW4+HVFKY" rel="nofollow">【ZEUS WiFi CHARGE オートチャージプラン】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+4IJCXE+4ZW4+HVFKY" alt="">'
  },
  {
    id: 13,
    name: '縛りなしWiFi（短期プラン）',
    price: '1日10GB473円～',
    contractPeriod: '縛りなし',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['短期特化', '縛りなし', '解約金0円'],
    pros: ['完全縛りなし', '短期最適', '解約金なし'],
    cons: ['料金高め', '長期不向き'],
    recommendedFor: '短期利用ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+49LUUQ+47FO+HW2Q9" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=250712334258&wid=001&eno=01&mid=s00000019626003005000&mc=1"></a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=459MVI+49LUUQ+47FO+HW2Q9" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+49LUUQ+47FO+HVFKY" rel="nofollow">【縛りなしWiFi　短期レンタルプラン】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+49LUUQ+47FO+HVFKY" alt="">'
  },
  {
    id: 14,
    name: 'USBスティックWi-Fi ecoco',
    price: '端末買い切り23,980円 月額0円',
    contractPeriod: '買い切り',
    speed: '下り最大150Mbps',
    type: 'USB',
    features: ['USB接続', '超小型', '持ち運び便利'],
    pros: ['超コンパクト', '持ち運び楽', '設定簡単'],
    cons: ['容量制限', '同時接続少ない'],
    recommendedFor: '携帯性重視ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4A7AGI+55CI+BZ0Z5" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=250712334259&wid=001&eno=01&mid=s00000024021002011000&mc=1"></a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=459MVI+4A7AGI+55CI+BZ0Z5" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+4A7AGI+55CI+BX3J6" rel="nofollow">【ecoco】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+4A7AGI+55CI+BX3J6" alt="">'
  },
  {
    id: 15,
    name: 'MONSTER MOBILE',
    price: '月額1,650円～',
    contractPeriod: '2年契約',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['大容量特化', '高速通信', '安定性'],
    pros: ['大容量データ', '安定通信', 'コスパ良い'],
    cons: ['契約期間あり', '解約金あり'],
    recommendedFor: '大容量ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+432376+348K+3YXBHD" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=250712334247&wid=001&eno=01&mid=s00000014546024006000&mc=1"></a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=459MVI+432376+348K+3YXBHD" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+432376+348K+3YW8WI" rel="nofollow">モンスター モバイル</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=459MVI+432376+348K+3YW8WI" alt="">'
  },
  {
    id: 16,
    name: 'STAR Wi-Fi',
    price: '月額3,388円～',
    contractPeriod: '縛りなし',
    speed: '下り最大150Mbps',
    type: 'クラウドSIM',
    features: ['星級サービス', '高品質', 'プレミアム'],
    pros: ['高品質サービス', '安定通信', 'サポート充実'],
    cons: ['料金やや高め', '特別感薄い'],
    recommendedFor: '品質重視ユーザー',
    adLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+419SDU+4ATM+601S1" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=250712334244&wid=001&eno=01&mid=s00000020065001008000&mc=1"></a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=459MVI+419SDU+4ATM+601S1" alt="">',
    detailLink: '<a href="https://px.a8.net/svt/ejp?a8mat=459MVI+419SDU+4ATM+5YJRM" rel="nofollow">STAR Wi-Fi</a><img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=459MVI+419SDU+4ATM+5YJRM" alt="">'
  }
];

const faqs = [
  {
    question: 'モバイルWi-Fiとは何ですか？',
    answer: 'モバイルWi-Fiは、外出先でもインターネットに接続できる小型の通信機器です。スマートフォンやパソコンなど複数の端末を同時にインターネットに接続できます。'
  },
  {
    question: 'クラウドSIMと物理SIMの違いは？',
    answer: 'クラウドSIMは複数の通信事業者の回線を自動で選択する仕組みで、物理SIMは特定の通信事業者の回線を使用します。クラウドSIMの方が通信エリアが広いのが特徴です。'
  },
  {
    question: '契約期間の縛りがないプランのメリットは？',
    answer: '解約金が不要で、いつでも自由に解約できます。短期利用や試用には最適ですが、長期利用の場合は契約期間ありのプランの方が料金が安くなることが多いです。'
  },
  {
    question: 'データ容量制限はありますか？',
    answer: '多くのプランでは月間データ容量の制限があります。容量を超えると速度制限がかかりますが、無制限プランもあります。利用量に応じて適切なプランを選びましょう。'
  },
  {
    question: 'どのくらいの通信速度が必要？',
    answer: 'Webブラウジングやメールなら1-5Mbps、動画視聴なら10-25Mbps、オンライン会議なら10-30Mbpsが目安です。用途に応じて必要な速度を検討しましょう。'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 広告(A8等)の遅延挿入: 画面に入ったらdata-ad-htmlから復元
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const slots = Array.from(document.querySelectorAll<HTMLElement>('.ad-slot[data-ad-loaded="false"]'));
    if (slots.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const encoded = el.getAttribute('data-ad-html');
            if (encoded) {
              try {
                const html = decodeURIComponent(encoded);
                el.innerHTML = html;
                el.setAttribute('data-ad-loaded', 'true');
              } catch {}
            }
            io.unobserve(el);
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    );
    slots.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* JSON-LD: ItemList, FAQPage, BreadcrumbList, Products with Offers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'モバイルWiFiサービス比較一覧',
            itemListElement: wifiRouters.map((r, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: r.name,
              url: 'https://mobilewifihikaku.web.app/#products'
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: (Array.isArray(faqs) ? faqs : []).map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://mobilewifihikaku.web.app' }
            ],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            wifiRouters.map(r => {
              const href = extractFirstHref(r.detailLink) || 'https://mobilewifihikaku.web.app';
              const priceNum = Number((r.price || '').replace(/[^0-9.]/g, '')) || undefined;
              return {
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: r.name,
                category: 'Portable WiFi',
                brand: { '@type': 'Brand', name: r.name.split(' ')[0] },
                description: `${r.type} / ${r.contractPeriod} / ${r.speed}`,
                offers: priceNum ? {
                  '@type': 'Offer',
                  priceCurrency: 'JPY',
                  price: priceNum,
                  url: href,
                  availability: 'https://schema.org/InStock'
                } : undefined
              };
            })
          )
        }}
      />
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-wifi-line text-white text-lg"></i>
              </div>
              <h1 className="text-xl font-bold text-gray-800">モバイルWiFi比較ナビ</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#comparison" className="text-gray-600 hover:text-blue-600 transition-colors">比較表</a>
              <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">サービス一覧</a>
              <Link href="/articles" className="text-gray-600 hover:text-blue-600 transition-colors">記事一覧</Link>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">よくある質問</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        {/* LCP候補のヒーロー画像（固定サイズ・高優先度） */}
        <img
          srcSet="/og-image.jpg 1x, /og-image.jpg 2x"
          src="/og-image.jpg"
          width={1200}
          height={630}
          alt="モバイルWiFi比較ナビのイメージ"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          decoding="async"
          fetchPriority="high"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              安心・簡単な<br />
              <span className="text-blue-200">モバイルWi-Fi選び</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              16種類の人気サービスを徹底比較！あなたにぴったりのWi-Fiが見つかります
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                今すぐ比較する
              </button>
              <button 
                onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                選び方を学ぶ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              モバイルWi-Fiとは？選び方のポイント
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-wifi-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">モバイルWi-Fiとは</h3>
                <p className="text-gray-600 leading-relaxed">
                  外出先でもインターネットに接続できる小型の通信機器です。スマートフォンやパソコンなど複数の端末を同時にインターネットに接続できます。
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-speed-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">通信速度の目安</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Webブラウジング：1-5Mbps</li>
                  <li>• 動画視聴：10-25Mbps</li>
                  <li>• オンライン会議：10-30Mbps</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-semibold mb-6 text-center">選び方の3つのポイント</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-bank-card-line text-3xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">料金・契約期間</h4>
                  <p className="text-sm text-blue-100">月額料金と契約期間を確認。縛りなしプランも検討しましょう</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-save-line text-3xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">データ容量</h4>
                  <p className="text-sm text-blue-100">月間の利用量に応じて適切なプランを選択</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-global-line text-3xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">通信エリア</h4>
                  <p className="text-sm text-blue-100">よく使う場所での通信品質を確認</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            人気16サービス 比較表
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">サービス名</th>
                    <th className="px-4 py-3 text-left">料金</th>
                    <th className="px-4 py-3 text-left">契約期間</th>
                    <th className="px-4 py-3 text-left">通信速度</th>
                    <th className="px-4 py-3 text-left">端末タイプ</th>
                    <th className="px-4 py-3 text-center">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {wifiRouters.map((router, index) => (
                    <tr key={router.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium text-gray-800">{router.name}</td>
                      <td className="px-4 py-3 text-blue-600 font-semibold">{router.price}</td>
                      <td className="px-4 py-3 text-gray-600">{router.contractPeriod}</td>
                      <td className="px-4 py-3 text-gray-600">{router.speed}</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {router.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button 
                          onClick={() => {
                            // アフィリエイトリンクのURLを抽出して開く
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = router.detailLink;
                            const link = tempDiv.querySelector('a');
                            if (link) {
                              window.open(link.href, '_blank');
                            }
                          }}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
                        >
                          詳細を見る
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            サービス詳細
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wifiRouters.map((router) => (
              <div key={router.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="p-6 flex flex-col flex-grow">
                  <div
                    className="w-full h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-lg ad-slot"
                    data-ad-loaded="false"
                    data-ad-html={encodeURIComponent(ensureSponsoredNofollow(router.adLink))}
                  >
                    <span className="text-gray-400 text-sm">広告読み込み中...</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{router.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{router.price}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {router.type}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-2">
                      <i className="ri-time-line text-gray-500"></i>
                      <span className="text-sm text-gray-600">契約期間: {router.contractPeriod}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-speed-line text-gray-500"></i>
                      <span className="text-sm text-gray-600">通信速度: {router.speed}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-800">主な特徴</h4>
                    <ul className="text-sm text-gray-600 space-y-1 min-h-[72px]">
                      {router.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <i className="ri-check-line text-green-500"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">メリット</h4>
                      <ul className="text-xs text-gray-600 space-y-1 min-h-[60px]">
                        {router.pros.map((pro, index) => (
                          <li key={index}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">デメリット</h4>
                      <ul className="text-xs text-gray-600 space-y-1 min-h-[60px]">
                        {router.cons.map((con, index) => (
                          <li key={index}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg mb-4 flex-grow min-h-[80px]">
                    <h4 className="font-semibold text-blue-800 mb-1">おすすめユーザー</h4>
                    <p className="text-sm text-blue-600">{router.recommendedFor}</p>
                  </div>

                  <div 
                    dangerouslySetInnerHTML={{ __html: ensureSponsoredNofollow(router.detailLink.replace(/>(.*?)<\/a>/, '>詳細はこちら</a>')) }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center block mt-auto"
                    style={{
                      textDecoration: 'none'
                    }}
                  />
                  <style jsx>{`
                    div[dangerouslySetInnerHTML] a {
                      color: white !important;
                      text-decoration: none !important;
                      font-weight: 600;
                      padding: 12px;
                      border-radius: 8px;
                      background-color: #ea580c;
                      transition: background-color 0.2s;
                      display: block;
                      text-align: center;
                      width: 100%;
                    }
                    div[dangerouslySetInnerHTML] a:hover {
                      background-color: #dc2626;
                    }
                  `}</style>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            お役立ち記事
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-book-line text-white text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">初心者向けガイド</h3>
                <p className="text-sm text-gray-600 mb-4">はじめてモバイルWiFiを選ぶ方向けの基本知識</p>
                <Link href="/articles" className="text-blue-600 hover:text-blue-700 text-sm font-medium">記事を読む →</Link>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-scales-line text-white text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">SIM比較解説</h3>
                <p className="text-sm text-gray-600 mb-4">クラウドSIMと物理SIMの違いを詳しく解説</p>
                <Link href="/articles" className="text-green-600 hover:text-green-700 text-sm font-medium">記事を読む →</Link>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-hard-drive-line text-white text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">容量別おすすめ</h3>
                <p className="text-sm text-gray-600 mb-4">データ容量別におすすめサービスをご紹介</p>
                <Link href="/articles" className="text-purple-600 hover:text-purple-700 text-sm font-medium">記事を読む →</Link>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-speed-line text-white text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">速度向上テクニック</h3>
                <p className="text-sm text-gray-600 mb-4">通信速度を向上させる方法とコツ</p>
                <Link href="/articles" className="text-orange-600 hover:text-orange-700 text-sm font-medium">記事を読む →</Link>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/articles"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                記事一覧を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            よくある質問
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm mb-4">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <i className={`ri-arrow-${openFaq === index ? 'up' : 'down'}-s-line text-gray-500`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            今すぐ最適なWi-Fiを見つけよう！
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            あなたにぴったりのモバイルWi-Fiで、快適なインターネット生活を始めませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              比較表を見る
            </button>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
            >
            サービス詳細を見る
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <i className="ri-wifi-line text-white text-lg"></i>
                </div>
                <h3 className="text-xl font-bold">モバイルWiFi比較ナビ</h3>
              </div>
              <p className="text-gray-400 text-sm">
                最適なモバイルWi-Fiを見つけるための比較サイトです。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#comparison" className="hover:text-white transition-colors">比較表</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">サービス一覧</a></li>
                <li><Link href="/articles" className="hover:text-white transition-colors">記事一覧</Link></li>
                <li><a href="#guide" className="hover:text-white transition-colors">選び方ガイド</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">シェア・フォロー</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://twitter.com/intent/tweet?text=モバイルWiFi比較ナビ%20-%2016サービス徹底比較&url=https://mobilewifihikaku.web.app&hashtags=モバイルWiFi,比較,ポケットWiFi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="Xでシェア"
                  title="Xでシェアする"
                >
                  <i className="ri-twitter-x-line text-white"></i>
                </a>
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://mobilewifihikaku.web.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebookでシェア"
                  title="Facebookでシェアする"
                >
                  <i className="ri-facebook-line text-white"></i>
                </a>
                <a 
                  href="https://line.me/R/msg/text/?モバイルWiFi比較ナビ%20-%2016サービス徹底比較%20https://mobilewifihikaku.web.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                  aria-label="LINEでシェア"
                  title="LINEでシェアする"
                >
                  <i className="ri-line-line text-white"></i>
                </a>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'モバイルWiFi比較ナビ - 16サービス徹底比較',
                        text: 'モバイルWi-Fiサービス16種類を徹底比較！料金・契約期間・通信速度など詳細情報でピッタリのWi-Fiが見つかります。',
                        url: 'https://mobilewifihikaku.web.app',
                      });
                    } else {
                      // フォールバック：URLをクリップボードにコピー
                      navigator.clipboard.writeText('https://mobilewifihikaku.web.app').then(() => {
                        alert('URLをクリップボードにコピーしました！');
                      });
                    }
                  }}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  aria-label="共有"
                  title="共有する"
                >
                  <i className="ri-share-line text-white"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 モバイルWiFi比較ナビ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
