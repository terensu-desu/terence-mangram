import { EventEmitter } from 'events'

class Store extends EventEmitter {
  constructor() {
    super()
    this.state = {
      english: true,
      displayData: {
        english: {
          banner: {
            main: "Terence Mangram",
            sub: "Bilingual Front-End Developer"
          },
          about: `My start as a web developer began long ago in junior high school, though I didn't realize it at the time. My friends and I had been really into computers and eventually started fiddling around with creating websites. Fast forward many years and I found myself in Japan and an opportunity to build a website from scratch for my company's public English teacher department. It started with templates and hacky code but in the end came together nicely as I improved. \n
                  When I first started this website, which we called ChubuALT (no longer around, but survives as my pet project called NihonALT), I knew very little about web development, but the excitement it stirred up motivated me beyond belief. I ended up spending all my free time studying and improving on the site.\n
                  Since then, I've been fully investing myself into this new passion of mine. I've become proficient with JavaScript, jQuery, Git and GitHub, BootStrap, Materialize, and, by far my favorite, ReactJS. Have a look at my portfolio section to see some highlights of my experience. I plan to stick around Japan for a while yet, so I'm also looking for a front end developer job!\n
                  Whether you'd like to contact me for more on my web development experience, talk about employment opportunities, talk shop about web dev things, find the best ramen in Nagoya, talk about the latest in Formula 1, ask my opinion about some new game, or some nice places in Japan - feel free to contact me!`,
          portfolio: {
            item1: {
              title: "NihonALT",
              text: "In 2016, I was asked to maintain an online forum where our teaching material was held. I found that the forum approach was completely lacking and a waste of money. I built a completely new website from scratch designed for a better user experience and easier maintenence.",
              vlink: "https://www.youtube.com/embed/Iw0sih9mGv8?ecver=2",
              url: "https://terensu-desu.github.io/nihon-alt/"
            },
            item2: {
              title: "Buddies",
              text: "With two friends of mine at Nagoya University, I embarked on a project to demonstrate a website business aimed at helping foreigners in Japan. Inspired by AirBnB and our experience of living in a foreign country, we dream of launching a website that can enable others to do more in Japan.",
              vlink: "https://placehold.it/388x218",
              url: "https://terensu-desu.github.io/vitamin/"
            },
            item3: {
              title: "GitHub and CodePen",
              text: "I don't have many large projects, as I am just getting my web dev feet. I do, however, have many small projects that are published on CodePen and my GitHub page. Many are either pure JavaScript, to improve my fundamentals, or React.js, to be in touch with the current trends. Feel free to have  a  look.",
              vlink: "https://placehold.it/388x218",
              url1: "https://github.com/terensu-desu",
              url2: "https://codepen.io/terensu-desu/"
            }
          }
        },
        japanese: {
          banner: {
            main: "Terence Mangram",
            sub: "日本にフロントエンドエンジニア"
          },
          about: `左ふト新勢えろ価49乱放望光56手ぽてがょ円巧スばい資択づ式典シオ際58続検マヲ駅倉ち何創船とイず。更消リネクシ編貿ソヱウ引将更よま村画ど元院ヘヲ島相やらて確犯ルアヘハ断80材テソフウ机月抽綱し。年述シヌヒ次問ラシタモ徹容だ質版べ江点し急将まぴぜ断感電フクムエ応権ばぜえ券承モ強電ホミチ仕枚あ。\n
                  窃志イ遠出モシテ荷促ミルテウ薫読ハコト事真ラほ例9話れざ会稿会ら賞月トやン大戻ルコウ記建ムイ母特レ速4断昇双脈鶴う。立カヒユイ真決芸ぐずん速美拠テナヤ載内ケヱスヌ天真を負公リマ憲上ヤ創品ス暴問ふ権勢謙ねうッわ況投レさ京玉ん丸働迎妻げくめド。18繁サ独78記ぞは地体例ユサ死定ヨネオリ設都信そがご茶住みンも隊濃53育ネ意易びよけ親暮へクく感残左球講トドッ。\n
                  差ユミレヲ葉1行ドなごフ図王画ルス対立真リ植全ヲ間変ね球春のいぎン障告ておん政展オネユエ全5講写ヒ触囲ヒノ員答ヌハ全全へら車神カラ知析毛龍りい。載健核タ覧集モムク有聞ゃづあか会仰びみべ尾5巻高ヤカテオ歳物ばゆ夫罪文田イニ女質が争済きへ毎名べ練14庫韓ぐぴ。\n
                  両イ新正でし待仕ネリウ著戦赤トばあン本局ネモ案売ろリーぞ広北さい情渡メエケ管名スヤエタ番責べま起連セクミ前民メケマチ梅粕ヌシモナ著6視18芸サホタ咲青ラ入勤富芝ーを。区あしフ阪活べみフぽ朝性リ対由んばルつ武情ひイ屋芸前エヲオヘ制転多がぴっせ文時ぞ着認ヒキチ未一期なっ。週統エヘキモ転繰紀マ企小ア断忠天のさゆス周転べ拉1周ーや文予きへこ込玲ごゅうそ基49周らまめ何経婦項墓ほべおゆ。`,
          portfolio: {
            item1: {
              title: "NihonALT",
              text: "２０１６年に、資料を溜めたネットフォラムーを維持するのようにできました。でも、そのフォラムーは不充分と思いました。UXはあまり良くなかったです。その上、私たちはとてもシンプルなフォラムーを払っていました。そしていいUXに図った新いサイトを作りました。このサイトは私の一番最初のサイトです。とりあえず型を使いましたが、後すぐ私のコードといろいろなライブラリーを使いました。",
              vlink: "https://www.youtube.com/embed/Iw0sih9mGv8?ecver=2",
              url: "https://terensu-desu.github.io/nihon-alt/"
            },
            item2: {
              title: "Buddies",
              text: "もすぐ面白い何かを作りたいです。今ダッシュボードをアプリを作ること考えています。そのプロジェクトは便利な毎日インフォメシオンを見せています。例えば、天気、ニュース、渋滞のニュースなどを見ることできます。また来てください。",
              vlink: "https://placehold.it/388x218",
              url: "https://terensu-desu.github.io/vitamin/"
            },
            item3: {
              title: "BookFront",
              text: "このプロジェクトにもっとJavaScriptを使いたかったです。二つの欲求に小規模な本屋を描きました。一つ目は本に買いものする客さんに引き付けます。二つ目は本を話し合う客さんに引き付けます。目玉商品と新しい商品は見えやすいです。も客さんは話し合うイベントのカレンダー見えます。",
              vlink: "https://placehold.it/388x218",
              url1: "https://github.com/terensu-desu",
              url2: "https://codepen.io/terensu-desu/"
            }
          }
        }
      }
    }
  }
  //functions for sending data
  returnDisplayData(language) {
    return this.state.displayData[language];
  }
}

const store = new Store()
export default store