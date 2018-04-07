const DisplayDataModule = () => {
	const store = {
		english: {
      about: `I'm Terence Mangram, developer, world-traveler, lifelong-learner. An American citizen, born in Spain, raised in Florida, I have just moved to Chicago after living and working in Japan for four years. My start as a web developer began long ago in junior high school, though I didn't realize it at the time. My friends and I had been really into computers and eventually started fiddling around with creating websites.

              Fast forward many years and I found myself in Japan with an opportunity to build a website from scratch for my company's public English teacher department. This first website, called ChubuALT, sparked me to teach myself all the knowledge necessary to be a valuable web developer. Soon after, I spent all my on studying and working on projects. Since then, I've gained strong skills in HTML5, CSS3, ES6, jQuery, React, Redux, and Git & GitHub. I've also added NodeJS, Express, and MongoDB to my arsenal. I love learning, and I strive to learn something new and valuable every single day.

              I am actively looking for employment in Chicago, IL, so feel free to contact me. I'll be happy to talk shop, expand on my story, chat about Japan, Formula 1, bouldering, tennis, video games, books, or whatever you like!`,
      projects: [
        {
          title: "Nihon ALT",
          text: "In 2016, I was asked to maintain an online forum where our teaching material was held. I found that the forum approach was completely lacking and a waste of money. I built a completely new website from scratch designed for a better user experience and easier maintenence.",
          vlink: "https://www.youtube.com/embed/Iw0sih9mGv8?ecver=2",
          url: "https://terensu-desu.github.io/nihon-alt/"
        },
        {
          title: "Buddies",
          text: "With two friends of mine at Nagoya University, we embarked on a project to demonstrate the need for a website business aimed at helping foreigners in Japan. Inspired by AirBnB and our experiences of living in foreign countries, we dream of launching a website that can enable others to do more in Japan.",
          vlink: null,
          ilink: "https://i.imgur.com/3UwgmHx.jpg",
          url: "https://agile-scrubland-23791.herokuapp.com/"
        },
        {
          title: "Burger Builder",
          text: "Built using React, React Router, Redux, and Thunk for asyncronous Redux use, this fun little app is an example of my experience with the latest React best practices and implementation. Users can create an account, login, build a burger, order it, see their order history, and even build a burger while not logged in (and be prompted to log in to order).",
          vlink: null,
          ilink: "https://i.imgur.com/f4nvj5k.png",
          url: "https://burger-builder-ef58a.firebaseapp.com/",
        }
      ]
    },
    japanese: {
      about: `I'm Terence Mangram, developer, world-traveler, lifelong-learner. An American citizen, born in Spain, raised in Florida, I have just moved to Chicago after living and working in Japan for four years. My start as a web developer began long ago in junior high school, though I didn't realize it at the time. My friends and I had been really into computers and eventually started fiddling around with creating websites.

              Fast forward many years and I found myself in Japan with an opportunity to build a website from scratch for my company's public English teacher department. This first website, called ChubuALT, sparked me to teach myself all the knowledge necessary to be a valuable web developer. Soon after, I spent all my on studying and working on projects. Since then, I've gained strong skills in HTML5, CSS3, ES6, jQuery, React, Redux, and Git & GitHub. I've also added NodeJS, Express, and MongoDB to my arsenal. I love learning, and I strive to learn something new and valuable every single day.

              I am actively looking for employment in Chicago, IL, so feel free to contact me. I'll be happy to talk shop, expand on my story, chat about Japan, Formula 1, bouldering, tennis, video games, books, or whatever you like!`,
      projects: [
        {
          title: "Nihon ALT",
          text: "２０１６年に、資料を溜めたネットフォラムーを維持するのようにできました。でも、そのフォラムーは不充分と思いました。UXはあまり良くなかったです。その上、私たちはとてもシンプルなフォラムーを払っていました。そしていいUXに図った新いサイトを作りました。このサイトは私の一番最初のサイトです。とりあえず型を使いましたが、後すぐ私のコードといろいろなライブラリーを使いました。",
          vlink: "https://www.youtube.com/embed/Iw0sih9mGv8?ecver=2",
          url: "https://terensu-desu.github.io/nihon-alt/"
        },
        {
          title: "Buddies",
          text: "「Buddies」は外国人が日本に住んでいやすい助けるのためにプロジェクトです。このプロジェクトはP2Pサービズから人々はサポートかお客様を探せます。「Buddies」のメンバーはお客様に彼らの技能をあげられます。「Buddies」のお客様はサービスとサポートを頼めます。",
          vlink: null,
          ilink: "https://i.imgur.com/3UwgmHx.jpg",
          url: "https://agile-scrubland-23791.herokuapp.com/"
        },
        {
          title: "Burger Builder",
          text: "React, React Router, Redux, と Thunkで作りました、この楽しいアプリはReactとReduxで私の理解を見せます。ユーザは新規登録したり、ログインしたり、バーガーを作ったり、注文をしたり、注文の歴史を見れます。",
          vlink: null,
          ilink: "https://i.imgur.com/f4nvj5k.png",
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