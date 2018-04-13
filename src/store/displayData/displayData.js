import Buddies from "../../assets/images/projects/BuddiesV2.png";
import BurgerBuilder from "../../assets/images/projects/BurgerBuilder.png";

const DisplayDataModule = () => {
	const store = {
		english: {
      about: `Born in Spain and raised in Florida, I've just moved to Chicago (April 5th!) after living and working in Japan as a public school English teacher for four years. My journey as a web developer actually sparked while I was busy teaching phonics and grammar full time.

              The first website I created was Chubu ALT, a solution to the problem English teachers have with creating or finding new material to teach with. Although it started with copy and pasted HTML and CSS, I was really proud of what I accomplished. Eventually it would evolve into Nihon ALT - a React based app with a lot more functionality.

              So from that point on, I was a student again. I've been building fun and challenging projects and try to solve problems I imagine or have had. I've learned a lot, from HTML5, CSS5, and JavaScript to React and Redux to NodeJS and MongoDB, and more.

              I am actively looking for employment in Chicago, so feel free to contact me! I'd be happy to talk shop, expand on my story, chat about Japan, the language, Formula 1, bouldering, tennis, video games, books, or whatever you like! I'm also active in the local freeCodeCamp group.`,
      projects: [
        {
          title: "Nihon ALT",
          tools: "Made with React, React Router, and MateralizeCSS.",
          text: "In 2016, I was asked to maintain an online forum where our teaching material was held. I found that the forum approach was completely lacking and a waste of money. I built a completely new website from scratch designed for a better user experience and easier maintenence.",
          vlink: "https://www.youtube.com/embed/Iw0sih9mGv8?ecver=2",
          url: "https://terensu-desu.github.io/nihon-alt/"
        },
        {
          title: "Buddies",
          tools: "Made with NodeJS, Express, Mongoose, MongoDB, and MateralizeCSS.",
          text: "With two friends of mine at Nagoya University, we embarked on a project to demonstrate the need for a website business aimed at helping foreigners in Japan. Inspired by AirBnB and our experiences and difficulties living in foreign countries, Buddies aims to solve one of the biggest problems of being a foreigner in Japan.",
          vlink: null,
          ilink: Buddies,
          url: "https://agile-scrubland-23791.herokuapp.com/"
        },
        {
          title: "Burger Builder",
          tools: "Made with React, React Router, Redux, and Thunk.",
          text: "This fun little app is an example of my experience with the latest React best practices and implementation. Users can create an account, login, build a burger, order it, see their order history, and even build a burger while not logged in (and be prompted to log in to order).",
          vlink: null,
          ilink: BurgerBuilder,
          url: "https://burger-builder-ef58a.firebaseapp.com/",
        }
      ]
    },
    japanese: {
      about: `Born in Spain and raised in Florida, I've just moved to Chicago (April 5th!) after living and working in Japan as a public school English teacher for four years. My journey as a web developer actually sparked while I was busy teaching phonics and grammar full time.

              The first website I created was Chubu ALT, a solution to the problem English teachers have with creating or finding new material to teach with. Although it started with copy and pasted HTML and CSS, I was really proud of what I accomplished. Eventually it would evolve into Nihon ALT - a React based app with a lot more functionality.

              So from that point on, I was a student again. I've been building fun and challenging projects and try to solve problems I imagine or have had. I've learned a lot, from HTML5, CSS5, and JavaScript to React and Redux to NodeJS and MongoDB, and more.

              I am actively looking for employment in Chicago, so feel free to contact me! I'd be happy to talk shop, expand on my story, chat about Japan, the language, Formula 1, bouldering, tennis, video games, books, or whatever you like! I'm also active in the local freeCodeCamp group.`,
      projects: [
        {
          title: "Nihon ALT",
          tools: "React, React Router, と MateralizeCSSで作りました.",
          text: "２０１６年に、資料を溜めたネットフォラムーを維持するのようにできました。でも、そのフォラムーは不充分と思いました。UXはあまり良くなかったです。その上、私たちはとてもシンプルなフォラムーを払っていました。そしていいUXに図った新いサイトを作りました。このサイトは私の一番最初のサイトです。とりあえず型を使いましたが、後すぐ私のコードといろいろなライブラリーを使いました。",
          vlink: "https://www.youtube.com/embed/Iw0sih9mGv8?ecver=2",
          url: "https://terensu-desu.github.io/nihon-alt/"
        },
        {
          title: "Buddies",
          tools: "NodeJS, Express, Mongoose, MongoDB, と MateralizeCSSで作りました.",
          text: "「Buddies」は外国人が日本に住んでいやすい助けるのためにプロジェクトです。このプロジェクトはP2Pサービズから人々はサポートかお客様を探せます。「Buddies」のメンバーはお客様に彼らの技能をあげられます。「Buddies」のお客様はサービスとサポートを頼めます。",
          vlink: null,
          ilink: Buddies,
          url: "https://agile-scrubland-23791.herokuapp.com/"
        },
        {
          title: "Burger Builder",
          tools: "React, React Router, Redux, と Thunkで作りました.",
          text: "この楽しいアプリはReactとReduxで私の理解を見せます。ユーザは新規登録したり、ログインしたり、バーガーを作ったり、注文をしたり、注文の歴史を見れます。",
          vlink: null,
          ilink: BurgerBuilder,
          url: "https://burger-builder-ef58a.firebaseapp.com/",
        }
      ]
    }
	};
	function getDisplayData(language, key) {
		return store[language][key];
	}
	return {
		getDisplayData: getDisplayData
	};
};

export default DisplayDataModule();