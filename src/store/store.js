import Vue from 'vue'
import Vuex from 'vuex'
import storeModule from './storeModule'

Vue.use(Vuex)
const store = new Vuex.Store({
   modules: {
      moduleStore: {
         namespaced: true,
         ...storeModule
      },
      mainStore: {
         namespaced: true,
         state: {
            mainBg: "img/wallpaper_5.jpg",
            localList:
               [
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/engadget",
                     "title": "Omaze is doing an all-Apple sweepstakes",
                     "description": "Omaze is giving away a bundle of Apple products when you enter to win any one of three electric car sweepstakes..",
                     "url": "https://www.engadget.com/omaze-apple-bundle-secondary-promotion-170730573.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-11/67873830-225d-11eb-afef-1896b96f9c17",
                     "publishedAt": "2021-05-20T17:07:30Z",
                     "content": "Omaze is sweetening three of its electric car sweepstakes with an add-on opportunity to win a bundle of Apple products. Those who enter to win a Tesla Model S, an Audi e-tron Sportback or a Porsche T… [+1504 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Mike Winters",
                     "title": "All the States Offering Vaccine Rewards (Including Cash)",
                     "description": "Vaccination rates have stalled, and some states are doing whatever it takes to get more shots into arms, even if that means paying them off with freebies like free passes to parks, gift cards, or the tantalizing prospect of winning $1 million. And so far, the…",
                     "url": "https://twocents.lifehacker.com/all-the-states-offering-vaccine-rewards-including-cash-1846943059",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0a5e7b89922e3f480a20782294406e39.jpg",
                     "publishedAt": "2021-05-21T19:00:00Z",
                     "content": "Vaccination rates have stalled, and some states are doing whatever it takes to get more shots into arms, even if that means paying them off with freebies like free passes to parks, gift cards, or the… [+3485 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Kirsten Korosec",
                     "title": "Lucid Motors reveals all the tech inside its all-electric Air sedan",
                     "description": "Eight months after Lucid Motors showed off the final version of its all-electric Air sedan, the company has finally revealed the in-cabin tech — from the curved 34-inch display and second touchscreen to the underlying software, integrated apps and Amazon Alex…",
                     "url": "http://techcrunch.com/2021/05/26/lucid-motors-reveals-all-the-tech-inside-its-all-electric-air-sedan/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/lucid-air-interior-04.jpg?w=534",
                     "publishedAt": "2021-05-26T23:12:26Z",
                     "content": "Eight months after Lucid Motors showed off the final version of its all-electric Air sedan, the company has finally revealed the in-cabin tech from the curved 34-inch display and second touchscreen t… [+7826 chars]"
                  },
                  {
                     "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                     },
                     "author": "Alan Wen",
                     "title": "E3 2021: all the news and announcements",
                     "description": "E3 2021 is here, bringing days of gaming news and announcements. The big reveals kicked off with Summer Game Fest’s Kickoff Live event on June 10th, and E3 proper takes place from June 12th to June 15th.",
                     "url": "https://www.theverge.com/2021/6/12/22531138/e3-2021-summer-game-fest-news-announcements",
                     "urlToImage": "https://cdn.vox-cdn.com/thumbor/zLtZKD3l9FfLGBs30V6CV2HSvkI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16330248/acastro_190531_1777_e3_lede.jpg",
                     "publishedAt": "2021-06-12T20:46:01Z",
                     "content": "Illustration by Alex Castro\r\n\n \n\n Follow the updates from some of gaming’s biggest shows After taking a year off, E3 2021 is here, bringing days of major gaming news and announcements through a serie… [+317 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/kris-holt",
                     "title": "The popemobile is going all-electric thanks to Fisker",
                     "description": "The EV maker is building a custom vehicle based on its Ocean SUV..",
                     "url": "https://www.engadget.com/popemobile-electric-fisker-ocean-suv-183733373.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/077dcff0-ba5e-11eb-bfdb-67710e4cd357",
                     "publishedAt": "2021-05-21T18:37:33Z",
                     "content": "EV maker Fisker is building an all-electric popemobile based on its Ocean SUV. It plans to deliver the vehicle to the Vatican next year.\r\nFisker co-founders Henrik Fisker and Dr. Geeta Gupta-Fisker m… [+893 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Aarian Marshall",
                     "title": "All Those Electric Vehicles Pose a Problem for Building Roads",
                     "description": "Gas taxes are the largest source of funding for highway construction and maintenance. As more cars plug in, that revenue is shrinking.",
                     "url": "https://www.wired.com/story/electric-vehicles-problem-building-roads/",
                     "urlToImage": "https://media.wired.com/photos/60a55bce4440b920d7993c6f/191:100/w_1280,c_limit/Business-EVRoadFees-1317379535.jpg",
                     "publishedAt": "2021-05-20T11:00:00Z",
                     "content": "Last week, Washington governor Jay Insleethe guy who, while running for president two years ago, proposed a nationwide ban on sales of gas-powered cars by 2030vetoed a statewide ban on gas-powered ca… [+4265 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Sidney Fussell",
                     "title": "The All-Seeing Eyes of New York’s 15,000 Surveillance Cameras",
                     "description": "Video from the cameras is often used in facial-recognition searches. A report finds they are most common in neighborhoods with large nonwhite populations.",
                     "url": "https://www.wired.com/story/all-seeing-eyes-new-york-15000-surveillance-cameras/",
                     "urlToImage": "https://media.wired.com/photos/60b7f6a89731be96a5fef43f/191:100/w_1280,c_limit/Biz_surveillance_1176394511.jpg",
                     "publishedAt": "2021-06-03T04:01:00Z",
                     "content": "A new video from human rights organization Amnesty International maps the locations of more than 15,000 cameras used by the New York Police Department, both for routine surveillance and in facial-rec… [+3413 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "David Nield",
                     "title": "All the New Privacy Features Coming to iOS and macOS",
                     "description": "Improvements designed to keep your email private, crack down on data stealing apps, and help you find lost devices are on their way.",
                     "url": "https://www.wired.com/story/new-privacy-security-features-ios-15-macos-monterey/",
                     "urlToImage": "https://media.wired.com/photos/60c3d6f21a658a2acc97a68f/191:100/w_1280,c_limit/Security-Apple-Privacy-1233013680.jpg",
                     "publishedAt": "2021-06-13T11:00:00Z",
                     "content": "As it does every year, Apple has used its Worldwide Developers Conference (WWDC) to show off some of the changes coming to its software this yearand, unsurprisingly given Apple's track record, privac… [+2379 chars]"
                  },
                  {
                     "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                     },
                     "author": "Kim Lyons",
                     "title": "Charlie bit us all, if you really think about it",
                     "description": "The buyer of the NFT for the 2007 meme decided it was too big a part of internet history to take down forever, so they changed the terms of the auction. This will only lead to chaos and confusion in the already ridiculous NFT marketplace.",
                     "url": "https://www.theverge.com/2021/5/27/22457035/charlie-bit-me-meme-nft-youtube",
                     "urlToImage": "https://cdn.vox-cdn.com/thumbor/youeKrg3ERgW-kDivQ-EaS1rcaI=/0x40:1436x792/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22543937/charlie_bit_me.jpg",
                     "publishedAt": "2021-05-27T18:47:45Z",
                     "content": "The meme that was going to disappear from YouTube... wont\r\nYou played us all, Charlie\r\nImage: HDCYT on YouTube\r\nIts hard to describe the absolute chaos around NFTs (non-fungible tokens) right now; te… [+3615 chars]"
                  },
                  {
                     "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                     },
                     "author": "Justine Calma",
                     "title": "CO2 levels are at an all-time high — again",
                     "description": "The concentration of carbon dioxide in the atmosphere spiked in 2021, nearly unfazed by the pandemic. A drop in emissions in 2020 because of COVID-19 wasn’t enough to slow down climate change.",
                     "url": "https://www.theverge.com/2021/6/7/22522736/carbon-dioxide-co2-record-climate-change",
                     "urlToImage": "https://cdn.vox-cdn.com/thumbor/VF4n43BBqmzPi3x9oKqdkws7dTI=/0x322:4500x2678/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22642891/1233295757.jpg",
                     "publishedAt": "2021-06-07T17:13:05Z",
                     "content": "06 June 2021, Schleswig-Holstein, Travemünde: A ferry emits exhaust fumes from a smokestack. | Photo by Daniel Reinhardt/picture alliance via Getty Images\r\n\n \n\n Not even a global pandemic could stop … [+3035 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Mike Winters",
                     "title": "How to Win Free Dairy Queen Blizzards All Summer, Because It's Hot Out There",
                     "description": "With Memorial Day weekend coming up, Dairy Queen is giving away a “Sweetest Season Pass” that will allow 20 randomly selected ice cream fans to order free Blizzards all summer long. The chain announced the promotion last Thursday; here’s how you can try to sn…",
                     "url": "https://twocents.lifehacker.com/how-to-win-free-dairy-queen-blizzards-all-summer-becau-1846926780",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/08439ac83ef1b72611e0c42f09cc704c.jpg",
                     "publishedAt": "2021-05-19T19:30:00Z",
                     "content": "With Memorial Day weekend coming up, Dairy Queen is giving away a Sweetest Season Pass that will allow 20 randomly selected ice creamfans to order free Blizzards all summer long. The chain announced … [+1926 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Sam Blum",
                     "title": "You're Never Going to Meet All Your Post-Pandemic Social Commitments",
                     "description": "Lost of us have spent the past 15 months fantasizing about all the amazing things we’ll be able to do once the pandemic’s marathon slog has reached its end. Perhaps we’ve even made tentative plans to finally get together with too many people to count. But tru…",
                     "url": "https://lifehacker.com/youre-never-going-to-meet-all-your-post-pandemic-social-1846994067",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/32c7e0168197c8609acd356618b15130.jpg",
                     "publishedAt": "2021-05-28T21:00:00Z",
                     "content": "Lost of us have spent the past 15 months fantasizing about all the amazing things well be able to do once the pandemics marathon slog has reached its end. Perhaps weve even made tentative plans to fi… [+3245 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Elizabeth Yuko",
                     "title": "Use the ‘Early, Middle, Late’ Approach to Have Blooming Flowers All Season",
                     "description": "After being cooped up inside all winter (especially within the past two years) it can be easy to get carried away with your summer plans—including the ones involving plants. You may head to the garden center with the intentions of picking up a few seedlings a…",
                     "url": "https://lifehacker.com/use-the-early-middle-late-approach-to-have-blooming-1846959085",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/464c45ac04bb8182977c88959a57aeed.jpg",
                     "publishedAt": "2021-05-25T14:30:00Z",
                     "content": "After being cooped up inside all winter (especially within the past two years) it can be easy to get carried away with your summer plansincluding the ones involving plants. You may head to the garden… [+2127 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Matt Burns",
                     "title": "Calling all Yinzers, TechCrunch is (virtually) headed to Pittsburgh!",
                     "description": "We’ve had a blast meeting new folks in different cities this year and we’re keeping the train rolling. We learned quite a bit about what’s happening now in Miami and got up to speed on what’s been happening in the great city of Detroit.  Up next? Pittsburgh. …",
                     "url": "http://techcrunch.com/2021/05/27/calling-all-yinzers-techcrunch-is-virtually-headed-to-pittsburgh/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/pittsburgh-featured.jpg?w=711",
                     "publishedAt": "2021-05-27T16:00:06Z",
                     "content": "Weve had a blast meeting new folks in different cities this year and were keeping the train rolling. We learned quite a bit about whats happening now in Miami and got up to speed on whats been happen… [+1550 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Natasha Mascarenhas",
                     "title": "Commsor buys Meetsy to build community tools for all",
                     "description": "Mac Reddin, the co-founder and CEO of Commsor, met the first professional investor for his company’s $16 million Series A on Lunch Club, a marketplace for 1:1 video introductions. Commsor, which sees itself as an operating system for community managers, then …",
                     "url": "http://techcrunch.com/2021/06/14/commsor-buys-meetsy-to-build-community-tools-for-all/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-671077402.jpg?w=600",
                     "publishedAt": "2021-06-14T17:09:22Z",
                     "content": "Mac Reddin, the co-founder and CEO of Commsor, met the first professional investor for his companys $16 million Series A on Lunch Club, a marketplace for 1:1 video introductions. Commsor, which sees … [+3604 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Ingrid Lunden",
                     "title": "Facebook opens its Messenger API for Instagram to all businesses",
                     "description": "F8 Refresh, Facebook’s annual developer conference with a new twist — it’s more pared down than in years past, and virtual — is going to be kicking off later today, and ahead of that Facebook is unveiling some news: all businesses can now use the Messenger AP…",
                     "url": "http://techcrunch.com/2021/06/02/facebook-opens-its-messenger-api-for-instagram-to-all-businesses/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/IG-_-Story-Reply-_-La-Lueur.png?w=711",
                     "publishedAt": "2021-06-02T16:00:15Z",
                     "content": "F8 Refresh, Facebook’s annual developer conference with a new twist — it’s more pared down than in years past, and virtual — is going to be kicking off later today, and ahead of that Facebook is unve… [+2845 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "David Murphy",
                     "title": "All the New Privacy Settings Google Announced at I/O 2021",
                     "description": "I tuned in to Google I/O this year with privacy on the brain. Chalk it up to the recent drama of Facebook-exec-turned-Apple-employee-turned-unemployed-employee Antonio Garcia Martinez, who famously said in 2018:Read more...",
                     "url": "https://lifehacker.com/all-the-new-privacy-settings-google-announced-at-i-o-20-1846920118",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d6eed54c636565c3156ee3bad362a204.jpg",
                     "publishedAt": "2021-05-18T21:30:00Z",
                     "content": "I tuned in to Google I/O this year with privacy on the brain. Chalk it up to the recent drama of Facebook-exec-turned-Apple-employee-turned-unemployed-employee Antonio Garcia Martinez, who famously s… [+5538 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Tessa Miller",
                     "title": "All the Ways to Cool Your Home That Are Cheaper Than Central Air",
                     "description": "When summer heat and humidity hits for real, cold showers and box fans can only do so much. At some point you’ll need to actually cool the air in your house if you want to stay comfortable. Without central air conditioning, that can be a real struggle.Read mo…",
                     "url": "https://lifehacker.com/no-central-ac-no-problem-six-ways-to-keep-your-home-c-729713655",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f9fe89c524a7279e5d66da533502aa8b.png",
                     "publishedAt": "2021-05-24T19:30:00Z",
                     "content": "When summer heat and humidity hits for real, cold showers and box fans can only do so much. At some point youll need to actually cool the air in your house if you want to stay comfortable. Without ce… [+5347 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                     },
                     "author": "Germain Lussier",
                     "title": "Netflix Just Revealed All the Animated News",
                     "description": "For 30 minutes this morning, Netflix opened the floodgates of information in terms of its high-end animated content. There was news about Masters of the Universe, Mobile Suit Gundam, Resident Evil, Transformers, Godzilla, and more. If you missed it, don’t fre…",
                     "url": "https://gizmodo.com/netflix-just-revealed-all-the-animated-news-1847072502",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7bf979db733f4bd98afd81f586870c0e.jpg",
                     "publishedAt": "2021-06-10T18:45:00Z",
                     "content": "For 30 minutes this morning, Netflix opened the floodgates of information in terms of its high-end animated content. There was news about Masters of the Universe, Mobile Suit Gundam, Resident Evil, T… [+3693 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/mariella-moon",
                     "title": "Apple's iPad Air tablets are at all-time lows at Amazon",
                     "description": "The latest 64GB and 256GB cellular models are at all-time low prices on Amazon, while the 64GB WiFi version is also on sale with a huge discount..",
                     "url": "https://www.engadget.com/apple-ipad-air-all-time-lows-amazon-121655001.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/165e7210-bd4a-11eb-b365-f48cfd27ee50",
                     "publishedAt": "2021-05-25T12:16:55Z",
                     "content": "Apple's 2020 iPad Air models are pricier than their predecessors, so you may want to check out their Amazon listings if you've been waiting for a good deal before getting one. The latest 64GB and 256… [+1856 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/saqib-shah",
                     "title": "Lincoln is the latest car maker to promise an all-electric lineup by 2030",
                     "description": "Lincoln is planning to introduce an all-electric vehicle lineup by 2030, with a new fully electric car scheduled for next year..",
                     "url": "https://www.engadget.com/lincoln-all-electric-vehicles-2030-100028732.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-06/66decd40-ce82-11eb-bbfe-596c81cb862f",
                     "publishedAt": "2021-06-16T10:00:28Z",
                     "content": "Lincoln is replicating some of its parent Ford's all-electric commitments. The automaker today announced plans to electrify its entire vehicle lineup by 2030. It also pledged that half of its global … [+3182 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/cherlynn-low",
                     "title": "Engadget Podcast: All about Google I/O and Apple's M1 iPad Pro/iMac",
                     "description": "This week, Cherlynn and Devindra chat with Chris Velazco about the ton of Google I/O new as well as iMac M1 and iPad Pro reviews..",
                     "url": "https://www.engadget.com/engadget-podcast-google-io-2021-apple-imac-m1-ipad-pro-review-123029293.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb",
                     "publishedAt": "2021-05-21T12:30:29Z",
                     "content": "This week, Cherlynn and Devindra chat with Senior Mobile Editor Chris Velazco about the slew of news from Google I/O, including the new Material You design and Googles team-up with Samsung in smartwa… [+1394 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Zoë McLaren",
                     "title": "One-Size-Fits-All Mask Guidance Isn't Going to Work Anymore",
                     "description": "The \"choose your own adventure\" phase of the pandemic calls for better alternatives. Time for policies to reflect that.",
                     "url": "https://www.wired.com/story/one-size-fits-all-mask-guidance-isnt-going-to-work-anymore/",
                     "urlToImage": "https://media.wired.com/photos/60a58c240744ea4218d0e66c/191:100/w_1280,c_limit/Idea-CDC-Mask-Guidelines-1311872741.jpg",
                     "publishedAt": "2021-05-20T14:05:54Z",
                     "content": "Last week the Centers for Disease Control and Prevention caught the country off-guard by lifting most masking recommendations for fully vaccinated people. On one hand, the science is clear: Vaccinate… [+4986 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Lauren Goode",
                     "title": "If You Want to Live in Apple World, Gather All Your iDevices",
                     "description": "This week, Apple doubled down on its vision of a seamlessly integrated ecosystem of products, software, and services. The catch? You need to be all in on Apple.",
                     "url": "https://www.wired.com/story/if-you-want-to-live-in-apple-world-gather-all-your-idevices/",
                     "urlToImage": "https://media.wired.com/photos/60bea64970d107b3e767d5a8/191:100/w_1280,c_limit/Gear-Apple.WWDC21.AppleWatch.jpg",
                     "publishedAt": "2021-06-09T11:00:00Z",
                     "content": "Even a new feature in the iPhones Photos app that arranges your photos into a slideshow with an emotional soundtrack will require a subscription to Apple Music. Accessing new fitness class offerings … [+4019 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Tim Marcin",
                     "title": "All 185 episodes of 'The Office,' ranked",
                     "description": "An obsession is a funny thing. It happens while you aren’t looking. \nFor me, I realized The Office bordered on obsession when it began creeping into my daily existence. It went from being a show I enjoyed to being every other reference in my conversations.\nI'…",
                     "url": "https://mashable.com/article/best-episodes-the-office-ranked/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F14%252F0e%252Fc2077234ef9b4940bdb030eb206dd839.525da.jpg%252F1200x630.jpg?signature=7ltpp_Uc8y6t1bfpE08d0bevwMU=",
                     "publishedAt": "2021-05-16T15:00:00Z",
                     "content": "An obsession is a funny thing. It happens while you arent looking. \r\nFor me, I realized The Office bordered on obsession when it began creeping into my daily existence. It went from being a show I en… [+203434 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                     },
                     "author": "Sam Rutherford",
                     "title": "Apple and Google Go All In On Digital Car Keys",
                     "description": "Apple today announced expanded support for digital car keys in iOS 15 during its WWDC keynote. Combined with Google’s recent Android announcements at its own developers conference, it’s clear that the big transition to digital car keys will begin in earnest l…",
                     "url": "https://gizmodo.com/apple-and-google-go-all-in-on-digital-car-keys-1847049565",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/58ccb75b481116f34249de7dcb5b5d3c.png",
                     "publishedAt": "2021-06-07T23:15:00Z",
                     "content": "Apple today announced expanded support for digital car keys in iOS 15 during its WWDC keynote. Combined with Googles recent Android announcements at its own developers conference, its clear that the … [+3333 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Andrew Das",
                     "title": "US-Mexico in Pictures: All the Plot Twists",
                     "description": "Sunday’s Concacaf Nations League final was a roller-coaster of emotion, a game of goals and fights, flying projectiles and video reviews. It ended with the United States lifting the trophy.",
                     "url": "https://www.nytimes.com/2021/06/07/sports/soccer/usa-mexico-nations-league-final.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/06/07/sports/07ussoccer/07ussoccer-facebookJumbo.jpg",
                     "publishedAt": "2021-06-07T15:32:24Z",
                     "content": "If you werent hooked by now, the game was about to go full Concacaf.\r\nEarly in the second extra session, Pulisic drove into Mexicos penalty area and went down under a hard challenge from two defender… [+613 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "A.A. Newton",
                     "title": "How to Clean Your Portable Fan, Because It's Blowing Gross Air",
                     "description": "Summer’s nearly here, and you know what that means: It’s time to bust out the box fans and wonder how on earth they got dirtier since you last saw them. Hair, dirt, lint, and all kinds of other gross airborne stuff build up on fans over time—and if you don’t …",
                     "url": "https://lifehacker.com/how-to-clean-your-portable-fan-because-its-blowing-gro-1846928974",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e611f1b05dbc5ce552fdfb1fbd106ec1.jpg",
                     "publishedAt": "2021-05-20T14:30:00Z",
                     "content": "Summers nearly here, and you know what that means: Its time to bust out the box fans and wonder how on earth they got dirtier since you last saw them. Hair, dirt, lint, and all kinds of other gross a… [+1853 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Brendan Hesse",
                     "title": "How to Hide Likes on Your Instagram Posts",
                     "description": "Starting today, all Instagram users can omit likes and views from displaying on their own image and video posts. And if you really want a fully “likes-free” experience, the app now lets you hide the likes and view counters on all posts in your timeline.Read m…",
                     "url": "https://lifehacker.com/how-to-hide-likes-on-your-instagram-posts-1846975227",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8daadf4044fd6b7c09a0a7b4f59485a.png",
                     "publishedAt": "2021-05-26T20:00:00Z",
                     "content": "Starting today, all Instagram users can omit likes and views from displaying on their own image and video posts. And if you really want a fully likes-free experience, the app now lets you hide the li… [+2153 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Andrew Das",
                     "title": "US Men's Soccer 3, Mexico 2: All The Plot Twists",
                     "description": "Sunday’s Concacaf Nations League final was a roller-coaster of emotion, a game of goals and fights, flying projectiles and video reviews. It ended with the United States lifting the trophy.",
                     "url": "https://www.nytimes.com/2021/06/07/sports/soccer/usa-mexico-soccer.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/06/07/sports/07ussoccer/07ussoccer-facebookJumbo.jpg",
                     "publishedAt": "2021-06-07T15:32:24Z",
                     "content": "If you werent hooked by now, the game was about to go full Concacaf.\r\nEarly in the second extra session, Pulisic drove into Mexicos penalty area and went down under a hard challenge from two defender… [+613 chars]"
                  },
                  {
                     "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                     },
                     "author": "Tom Warren",
                     "title": "Microsoft Teams launches for friends and family with free all-day video calling",
                     "description": "Microsoft Teams is officially available for consumers. It’s mostly the same business app, but it includes free all-day video calling during the pandemic.",
                     "url": "https://www.theverge.com/2021/5/17/22439924/microsoft-teams-personal-version-launch-available-download",
                     "urlToImage": "https://cdn.vox-cdn.com/thumbor/zCtLXAO8LPbJ4sfL5NBtT1XM98A=/0x50:660x396/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22519797/microsoftteamspersonal.jpg",
                     "publishedAt": "2021-05-17T13:00:00Z",
                     "content": "Microsoft Teams for personal use exits preview\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nMicrosoft is launching the personal version of Micr… [+2076 chars]"
                  },
                  {
                     "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                     },
                     "author": "Jay Peters",
                     "title": "Sony’s WF-1000XM4s wireless earbuds leak again with all-new water resistance and ‘V1’ chip",
                     "description": "Sony’s rumored WF-1000XM4 true wireless headphones may have IPX4 water resistance, a new “Sony V1” processor that could improve ANC performance, and support for Sony’s LDAC codec, according to WinFuture.",
                     "url": "https://www.theverge.com/2021/5/27/22456896/sony-wf-1000xm4-headphones-ipx4-rating-water-resistance-sony-v1-chip-ldac-anc",
                     "urlToImage": "https://cdn.vox-cdn.com/thumbor/r89bY45nmzdzYD0znK9yTnlVRy4=/0x18:660x364/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22543827/Sony_WF_1000XM4_1622109809_1_12.jpeg",
                     "publishedAt": "2021-05-27T18:23:01Z",
                     "content": "And eight hours of battery life on a single charge\r\nWhat appears to be an official photo of the Sony WF-1000XM4s.\r\nImage: WinFuture\r\nWe heard earlier this month that Sony may be planning to launch it… [+1345 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/cherlynn-low",
                     "title": "Google's Workplace suite is now free and available to anyone",
                     "description": "Google is opening up Workspace to all users with a Google account and improving some features..",
                     "url": "https://www.engadget.com/google-workspace-open-everyone-free-spaces-100004157.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-06/4a991890-cb33-11eb-87b7-640bb93ca56a",
                     "publishedAt": "2021-06-14T10:00:04Z",
                     "content": "Google is making a huge change to its online services. It's opening up the Workspace offering (previously called G Suite) to all users with a Google account, meaning you no longer need to have an ent… [+4245 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/kris-holt",
                     "title": "'Crysis Remastered Trilogy' is coming to PC and consoles this fall",
                     "description": "You'll be able to pick up the reworked versions of all three games separately..",
                     "url": "https://www.engadget.com/crysis-remastered-trilogy-crytek-pc-consoles-164318726.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-06/e93c95d0-c2f5-11eb-bffb-e41a6e2d9767",
                     "publishedAt": "2021-06-01T16:43:18Z",
                     "content": "A year after it released a remaster of the classic first-person shooter Crysis, Crytek is optimizing the other two games in the main trilogy for modern platforms. The developer will release Crysis Re… [+855 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/james-trew",
                     "title": "Apple's SignTime brings up a sign language translator on demand",
                     "description": "A host of new accessibility tools will make using Apple devices easier for all..",
                     "url": "https://www.engadget.com/apples-sign-time-brings-up-a-sign-language-translator-on-demand-172828126.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/5e9dd710-b8c6-11eb-bbe7-4e8128644596",
                     "publishedAt": "2021-05-19T17:28:28Z",
                     "content": "Apple has long taken accessibility seriously. Just spend five minutes in the relevant section of your iPhones settings and youll find a veritable trove of helpful settings many of them useful to ever… [+3594 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/devindra-hardawar",
                     "title": "Windows 11 has leaked, and it looks a lot like Windows 10X",
                     "description": "Windows 11 is real, and details about it are leaking all over the internet..",
                     "url": "https://www.engadget.com/windows-11-leak-10x-microsoft-195643253.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-06/2d8714e0-ce13-11eb-97d6-28eed413348f",
                     "publishedAt": "2021-06-15T19:56:43Z",
                     "content": "Windows 11 is real, and details about it are leaking all over the internet. First, a Baidu user posted two screenshots of the OS this morning, revealing a centralized Start menu with rounded corners.… [+1687 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Kirsten Korosec",
                     "title": "Hyundai is launching in-car payments in the all-electric Ioniq 5",
                     "description": "Hyundai developed an in-car payment system that will debut in its upcoming all-electric Ioniq 5 crossover that will offer drivers the ability to find and pay for EV charging, food and parking — the latest example of automakers finding new ways to generate rev…",
                     "url": "http://techcrunch.com/2021/05/24/hyundai-is-launching-in-car-payments-in-the-all-electric-ioniq-5/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/45971-2022IONIQ5.jpg?w=600",
                     "publishedAt": "2021-05-24T23:06:51Z",
                     "content": "Hyundai developed an in-car payment system that will debut in its upcoming all-electric Ioniq 5 crossover that will offer drivers the ability to find and pay for EV charging, food and parking the lat… [+2172 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Kirsten Korosec",
                     "title": "Ford unveils the F-150 Lightning, its all-electric pickup truck that will start under $40,000",
                     "description": "The Ford F-150, the profitable cornerstone of the U.S. automaker’s business, now has an all-electric sibling. Ford unveiled Wednesday the F-150 Lightning, an all-electric pickup truck that is a critical piece of the company’s $22 billion investment into elect…",
                     "url": "http://techcrunch.com/2021/05/19/ford-unveils-the-f-150-lightning-its-all-electric-pickup-truck-that-will-start-under-40000/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/6_16X9.jpg?w=711",
                     "publishedAt": "2021-05-20T01:32:29Z",
                     "content": "The Ford F-150, the profitable cornerstone of the U.S. automaker’s business, now has an all-electric sibling.\r\nFord unveiled Wednesday the F-150 Lightning, an all-electric pickup truck that is a crit… [+6461 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Mary Ann Azevedo",
                     "title": "Homeward secures $371M to help people make all-cash offers on houses",
                     "description": "Trying to buy a house in a competitive market is perhaps one of the most stressful things an adult can go through. Competing with a bunch of people all putting offers on a house that fly off the market in a matter of days is not fun. One startup that is tryin…",
                     "url": "http://techcrunch.com/2021/05/27/homeward-secures-371m-to-help-people-make-all-cash-offers-on-homes/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/05/GettyImages-1071635072-e1557352053759.jpg?w=764",
                     "publishedAt": "2021-05-27T13:00:02Z",
                     "content": "Trying to buy a house in a competitive market is perhaps one of the most stressful things an adult can go through.\r\nCompeting with a bunch of people all putting offers on a house that fly off the mar… [+5345 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Joseph Green",
                     "title": "Save 82% on powerful online protection for all your devices",
                     "description": "SAVE 82%: A three-year subscription to CyberGhost VPN is on sale for £1.99 per month as of May 23, and includes an extra three months for free.\n\nVPNs are the same as any other subscription service in that you get the best monthly rate if you're willing to com…",
                     "url": "https://mashable.com/uk/shopping/may-23-best-cyberghost-vpn-deal/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F23%252F92%252F05cd9788088243be8d9b81599d370476.515ea.jpg%252F1200x630.jpg?signature=svXoXqVtRgmLkymtDmU_etlun38=",
                     "publishedAt": "2021-05-23T04:10:00Z",
                     "content": "SAVE 82%: A three-year subscription to CyberGhost VPN is on sale for £1.99 per month as of May 23, and includes an extra three months for free.\r\nVPNs are the same as any other subscription service in… [+887 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Stan Schroeder",
                     "title": "Apple TV is now available for all Android TV devices",
                     "description": "Aching to use Apple TV on your Android TV? You're in luck, because the Apple TV app is now widely available on all newer devices running Android TV. \nSeveral vendors announced the availability of Apple TV on their devices, including Nvidia, which said on Tues…",
                     "url": "https://mashable.com/article/apple-tv-android-tv/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F02%252Ff6%252F70df7522b43a492495baf4de16596150.cfbd9.png%252F1200x630.png?signature=eo-jltyiQxFjDps9-SJr8ULC7OA=",
                     "publishedAt": "2021-06-02T10:09:05Z",
                     "content": "Aching to use Apple TV on your Android TV? You're in luck, because the Apple TV app is now widely available on all newer devices running Android TV. \r\nSeveral vendors announced the availability of Ap… [+871 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Joseph Green",
                     "title": "This beginner-friendly guide will teach you all about NFTs",
                     "description": "TL;DR: The How To Create Your First NFT Course is on sale for £14.18 as of June 12, saving you 89% on list price.\n\nThe newest thing everyone loves (or loves to hate): NFTs (non-fungible tokens). Every NFT is unique and immutable, created on the blockchain, an…",
                     "url": "https://mashable.com/uk/shopping/june-12-beginners-guide-to-nft/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F12%252F46%252F2b8b5f38897a401d8b101e6a8648a73b.0a80f.jpg%252F1200x630.jpg?signature=RCSOqyoSkixt0nuqowa1D4FPEzY=",
                     "publishedAt": "2021-06-12T04:00:00Z",
                     "content": "TL;DR: The How To Create Your First NFT Course is on sale for £14.18 as of June 12, saving you 89% on list price.\r\nThe newest thing everyone loves (or loves to hate): NFTs (non-fungible tokens). Ever… [+847 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Siobhan Neela-Stock",
                     "title": "All the cities hosting in-person Pride events in 2021",
                     "description": "In 2020, in-person Pride celebrations took a hit as cities canceled Pride parades and other events to keep everyone safe from COVID.\nBut as more and more people in the U.S. get vaccinated, Pride is coming back. While some Pride committees are still putting to…",
                     "url": "https://mashable.com/article/pride-in-person-events-2021/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F09%252Fc7%252Fbfb1b25382264aeb886420ba0a1befe0.62e0f.jpg%252F1200x630.jpg?signature=MT-vwB8xKEECVe4b_VqfpPDj6N8=",
                     "publishedAt": "2021-06-09T16:00:00Z",
                     "content": "In 2020, in-person Pride celebrations took a hit as cities canceled Pride parades and other events to keep everyone safe from COVID.\r\nBut as more and more people in the U.S. get vaccinated, Pride is … [+6991 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/stack-commerce",
                     "title": "This $145 refurbished Lenovo Chromebook is great for travel",
                     "description": "The Lenovo 11E Chromebook is small and portable yet powerful enough to handle all of Google Suite’s integrated apps..",
                     "url": "https://www.engadget.com/lenovo-11e-chromebook-145531527.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-06/c5d52c30-cadc-11eb-b3ff-1abe48d73f1c",
                     "publishedAt": "2021-06-15T14:55:31Z",
                     "content": "Shoppers may drool over the latest thin-and-light or a top-of-the-line gaming laptop, but these devices are just as expensive as they are impressive. If all you need is a machine to power you through… [+1885 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Jon Pareles, Jon Caramanica and Giovanni Russonello",
                     "title": "DMX’s Posthumous All-Star Track, and 9 More New Songs",
                     "description": "Hear tracks by Griff, Kidd G, Masayoshi Fujita and others.",
                     "url": "https://www.nytimes.com/2021/05/28/arts/music/playlist-dmx-jay-z-nas-dababy.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/05/28/arts/28popcast1/28popcast1-facebookJumbo.jpg",
                     "publishedAt": "2021-05-28T14:49:53Z",
                     "content": "This song from Exodus, the first posthumous DMX album, features a 1990s rap supergroup that could have been. DMX sounds limber and loose, and Jay-Z and Nas are having far more fun here than they did … [+5314 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Rory Smith",
                     "title": "Euro 2020: France Beats Germany, in Control at All Times",
                     "description": "A score line disguises an imperious performance from the reigning World Cup champions as they throttle Germany in their debut at Euro 2020.",
                     "url": "https://www.nytimes.com/2021/06/15/sports/soccer/euro-2020-france-germany.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/06/15/sports/15onsoccer3/15onsoccer3-facebookJumbo.jpg",
                     "publishedAt": "2021-06-15T23:17:11Z",
                     "content": "But it is not the quality of its individuals that defines this France team. It is the strength of the collective that Deschamps hardly the most charismatic or inspiring of coaches, even among his pee… [+1729 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Gia Kourlas",
                     "title": "All Her Life Studies: A Downtown Dancer Finds Her Voice",
                     "description": "In her evolving exploration of identity, Leslie Cuyjet is breaking out as a choreographer, making work that is both conceptual and personal.",
                     "url": "https://www.nytimes.com/2021/05/30/arts/dance/leslie-cuyjet-choreographer.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/05/31/arts/31cuyjet-2/31cuyjet-2-facebookJumbo.jpg",
                     "publishedAt": "2021-05-30T12:00:08Z",
                     "content": "How do you see your self as a Black woman in the contemporary dance scene?\r\nI recently had a conversation with Angie Pittman [for Critical Correspondence, the online publication of Movement Research]… [+1781 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Joseph Green",
                     "title": "All the best HP laptops for every type of job",
                     "description": "A good, dependable laptop is pretty much a must-have for anyone these days, especially with distance learning and work-from-home opportunities becoming more of the norm. The convenience of being able to set up and get down to business wherever there may be Wi…",
                     "url": "https://mashable.com/uk/roundup/best-hp-laptop-uk/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F24%252F1d%252Fca2de926d91648e393f73d9bf485fd94.77453.jpg%252F1200x630.jpg?signature=_IvNsR9mwiwHfZlWhimwG2-EQSI=",
                     "publishedAt": "2021-05-29T03:55:00Z",
                     "content": "A good, dependable laptop is pretty much a must-have for anyone these days, especially with distance learning and work-from-home opportunities becoming more of the norm. The convenience of being able… [+13530 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Miller Kern",
                     "title": "All of the Best Memorial Day sales in one place",
                     "description": "Our top picks for the best Memorial Day deals:\n<ul>\n<li>Leesa — save up to $500 on mattresses and get two free pillows\r\n</li>\n<li>Sony A80J 77-inch BRAVIA XR OLED 4K TV\r\n — save $501.99\r\n</li>\n<li>MYXfitness bike — save $300 and get free shipping and assembly…",
                     "url": "https://mashable.com/shopping/best-memorial-day-deals-2021/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F26%252F54%252F2bdaa439932d4d809a01c98a43f24d60.1b0fc.png%252F1200x630.png?signature=noSt_i9k8nVBuykvZIdJmHg86a8=",
                     "publishedAt": "2021-05-28T09:00:00Z",
                     "content": "Our top picks for the best Memorial Day deals:\r\nMemorial Day weekend may be the unofficial start of summer, but if you're an avid shopper, MDW is synonymous with amazing sales. Mattress brands always… [+5160 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Lindsey Ellefson",
                     "title": "How to Regain a Sense of Control When Your Nudes Leak (or Even Before)",
                     "description": "Taking fire nudes is exhilarating, right? Sending them is exciting and hot, as is receiving them. It’s all fun and games…until, sometimes, it’s not.Read more...",
                     "url": "https://lifehacker.com/how-to-regain-a-sense-of-control-when-your-nudes-leak-1846932209",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/34df056f954af9fc42d10da12ff90e4a.jpg",
                     "publishedAt": "2021-05-21T16:30:00Z",
                     "content": "Taking fire nudes is exhilarating, right? Sending them is exciting and hot, as is receiving them. Its all fun and gamesuntil, sometimes, its not.\r\nIf youve sexted, you know that it comes with highs a… [+8267 chars]"
                  },
                  {
                     "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                     },
                     "author": null,
                     "title": "Kieran Read: Ex-All Blacks captain retires from rugby",
                     "description": "Former New Zealand captain Kieran Read announces his retirement from rugby.",
                     "url": "https://www.bbc.co.uk/sport/rugby-union/57133999",
                     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1840E/production/_118524399_57133999.jpg",
                     "publishedAt": "2021-05-16T08:39:14Z",
                     "content": "Kieran Read - pictured playing for Toyota Verblitz - captained the All Blacks 52 times\r\nFormer New Zealand captain Kieran Read has retired from rugby.\r\nThe 35-year-old broke the news he would retire … [+845 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/saqib-shah",
                     "title": "Samsung's Galaxy Buds+ fall to $100 in Amazon's one-day sale",
                     "description": "Samsung's Galaxy Buds+ ear buds are close to an all-time low price as part of an Amazon deal of the day..",
                     "url": "https://www.engadget.com/samsung-galaxy-buds-plus-sale-102551439.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/e3b83850-b952-11eb-bdfd-f439f2841a9f",
                     "publishedAt": "2021-05-20T10:25:51Z",
                     "content": "If you're on a budget, it may be tempting to settle for low-cost ear buds, but then you'd be sacrificing sound and build quality. Those patient enough to wait for a discount don't have to make do wit… [+1573 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/saqib-shah",
                     "title": "Google's Nest Audio smart speaker hits new low of $75",
                     "description": "Google's Nest Audio smart speaker is down to an all-time low price thanks to deals at Best Buy, Walmart and the Google Store..",
                     "url": "https://www.engadget.com/google-nest-audio-smart-speaker-new-low-091549030.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-06/2f055540-cdb7-11eb-b757-4f12201bb463",
                     "publishedAt": "2021-06-15T09:15:49Z",
                     "content": "At $100, Google's impressive Nest Audio was already good value for money, but a 25 percent discount has now brought it down to an even more affordable $75. Perhaps, it's a case of Google countering A… [+1774 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/saqib-shah",
                     "title": "Watch Square Enix's E3 conference in 12 minutes",
                     "description": "Watch all the highlights from Square Enix's E3 showcase, including new looks at 'Guardians of the Galaxy' and 'Life is Strange: True Colors.'.",
                     "url": "https://www.engadget.com/watch-square-enix-e3-conference-131553967.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-06/b9f5a860-cd0f-11eb-acbd-7f0701a68612",
                     "publishedAt": "2021-06-14T13:15:53Z",
                     "content": "Square Enix's E3 reveals included a new Marvel game, a detailed look at Life is Strange: True Colors and plenty of Final Fantasy. If you missed the action, we've distilled the announcements into an 1… [+1439 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Michael J. Seidlinger",
                     "title": "The Many Identity Crises of Sonic the Hedgehog",
                     "description": "Sega's beloved speedster arrived on the scene 30 years ago. Since then, he's gone through numerous transformations—not all for the better.",
                     "url": "https://www.wired.com/story/sonic-the-hedgehog-history/",
                     "urlToImage": "https://media.wired.com/photos/60aec5cf30981f87432bec7e/191:100/w_1280,c_limit/games_sonic_170405864.jpg",
                     "publishedAt": "2021-05-27T13:00:00Z",
                     "content": "Sonic Adventure became a system seller when it launched in September 1999 alongside Namcos weapons-based fighter Soul Calibur. Adventure and its sequel demonstrated Sonics renewed poise and maturity,… [+3253 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Android Central"
                     },
                     "author": "Jeramy Johnson",
                     "title": "We all deserve a little Pride all year long",
                     "description": "PRIDE is for everyone because we're all just people.\n\n\n\nJune is Pride Month, which is a time of year when individuals, groups, organizations, and companies large and small join in celebrating the wonderful diversity of identities, romantic and sexual preferen…",
                     "url": "https://www.androidcentral.com/its-important-us-all-show-our-pride-and-support-all-year-round",
                     "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/06/megan-markham-bucknall-5rwzzcy55r8-unsplash.jpg",
                     "publishedAt": "2021-06-13T13:00:02Z",
                     "content": "Source: Megan Markham Bucknall / Unsplash\r\nJune is Pride Month, which is a time of year when individuals, groups, organizations, and companies large and small join in celebrating the wonderful divers… [+7896 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Sam Blum",
                     "title": "How to Stop Arguing With Your Partner Over the COVID Vaccine",
                     "description": "Not all advice need be professional. Sometimes your problems merit a bit of unvarnished honesty from a dude equipped with nothing more than a computer and a conscience. Luckily for you, I’m that guy. Welcome back to Tough Love.Read more...",
                     "url": "https://lifehacker.com/how-to-stop-arguing-with-your-partner-over-the-covid-va-1846910973",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/86825f96c90388b8edce82b9e88f83ed.jpg",
                     "publishedAt": "2021-05-17T20:30:00Z",
                     "content": "Not all advice need be professional. Sometimes your problems merit a bit of unvarnished honesty from a dude equipped with nothing more than a computer and a conscience. Luckily for you, Im that guy. … [+7382 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Aisha Jordan",
                     "title": "Organize Your Fridge Like You're a Goddamned Adult",
                     "description": "We organize storage areas like our closets, drawers, and garages, but the refrigerator tends to be neglected. Of all the spaces to keep organized, though, the refrigerator is the only one that’s time sensitive. Read more...",
                     "url": "https://lifehacker.com/organize-your-fridge-like-youre-a-goddamned-adult-1846951710",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3aef75d36a3d80f42e82486854b641f0.jpg",
                     "publishedAt": "2021-06-01T19:00:00Z",
                     "content": "We organize storage areas like our closets, drawers, and garages, but the refrigerator tends to be neglected. Of all the spaces to keep organized, though, the refrigerator is the only one thats time … [+3754 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "David Murphy",
                     "title": "How to Get iOS Notifications on Your Oculus Quest",
                     "description": "Entering virtual reality is fun, but it can also be productive: Lately, I’ve found it a fairly decent way to get in a quick workout. However, strapping on a VR headset does require me to untether from my phone and miss out on all the scintillating messages my…",
                     "url": "https://lifehacker.com/how-to-get-ios-notifications-on-your-oculus-quest-1846935542",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3ce91b98c1339e59e4742fab82acaa5b.png",
                     "publishedAt": "2021-05-20T17:26:00Z",
                     "content": "Entering virtual reality is fun, but it can also be productive: Lately, Ive found it a fairly decent way to get in a quick workout. However, strapping on a VR headset does require me to untether from… [+1555 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Ingrid Lunden",
                     "title": "YouTube expands TikTok rival Shorts to the UK, Canada, Latin America, lets users tap all of YouTube for tunes",
                     "description": "One of Google’s strong advantages in the world of online video has been the sheer size of YouTube: currently, the site has more than 2.3 billion monthly active users and over 500 hours of content uploaded every minute. Now, Google and YouTube are hoping to le…",
                     "url": "http://techcrunch.com/2021/06/07/youtube-expands-tiktok-rival-shorts-to-the-uk-canada-latin-america-lets-users-tap-all-of-youtube-for-tunes/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/06/GettyImages-1149449078-e1610399732853.jpg?w=760",
                     "publishedAt": "2021-06-07T10:15:05Z",
                     "content": "One of Google’s strong advantages in the world of online video has been the sheer size of YouTube: currently, the site has more than 2.3 billion monthly active users and over 500 hours of content upl… [+4170 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Reid J. Epstein",
                     "title": "A ‘Community for All’? Not So Fast, This Wisconsin County Says",
                     "description": "In Wausau, Wis., the county board has debated a resolution aimed at embracing inclusion for nearly a year, with no agreement. Racial tensions that had simmered beneath the surface are now roiling the community.",
                     "url": "https://www.nytimes.com/2021/05/18/us/politics/race-inclusion-wasau-wisconsin.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/05/17/us/politics/00wausau-top/00wausau-top-facebookJumbo.jpg",
                     "publishedAt": "2021-05-18T09:00:23Z",
                     "content": "In the end, the executive committee of the county board rejected the resolution by a 6-to-2 vote on Thursday night, a result that both sides say is worse than never having considered it in the first … [+1080 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Sam Anderson",
                     "title": "Kevin Durant and (Possibly) the Greatest Basketball Team of All Time",
                     "description": "The Brooklyn Nets were built to be an unbeatable superteam of eccentric basketball superstars. Will they dominate the N.B.A. playoffs?",
                     "url": "https://www.nytimes.com/2021/06/02/magazine/kevin-durant-brooklyn-nets.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/06/30/magazine/30mag-nets6/30mag-nets6-facebookJumbo.jpg",
                     "publishedAt": "2021-06-02T14:39:23Z",
                     "content": "The best of the three superstars, however, is Kevin Durant. Durant is nearly seven feet tall, and he shoots 30-footers as if they are layups, and if any player has ever looked more natural or gracefu… [+5050 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Scott Cacciola and Sopan Deb",
                     "title": "N.B.A. All-Stars Set a Painful Record for Missing Playoff Games",
                     "description": "Injury woes are not new, but they have been acute during the playoffs. Never before have eight All-Stars missed at least one postseason game in the same year.",
                     "url": "https://www.nytimes.com/2021/06/16/sports/basketball/nba-record-all-stars-playoffs-injuries.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/06/16/sports/16nba-stars-hurt1/16nba-stars-hurt1-facebookJumbo.jpg",
                     "publishedAt": "2021-06-17T00:47:47Z",
                     "content": "Sprained knees. Strained hamstrings. Twisted ankles. Shattered hopes.\r\nThe N.B.A. playoffs have turned into a battle of attrition as the league grapples with a growing list of injuries to many of its… [+1026 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Scott Gilbertson",
                     "title": "Amazon's Fire HD 10 Is Still the Best Cheap Tablet Around",
                     "description": "The 10-inch tablet gets an optional keyboard and office apps, but it's still best as a cheap way to access all your Prime content.",
                     "url": "https://www.wired.com/review/amazon-fire-hd-10-2021/",
                     "urlToImage": "https://media.wired.com/photos/60c0fbe641e613255aec1672/191:100/w_1280,c_limit/Gear-Amazon-Fire-HD-10-Review.jpg",
                     "publishedAt": "2021-06-11T11:00:00Z",
                     "content": "The Fire HD 10 isn't the best tablet you're ever going to use. Not even close. But it is cheap, decently powerful, and good enough for many of us.\r\nAmazon's 2021 update to the 10-inch Fire HD 10 mirr… [+3414 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Gear Team",
                     "title": "The 17 Best Weekend Deals on Headphones, Webcams, and More",
                     "description": "Beat the Prime Day rush with these early deals on all the electronics needed to Zoom through your workday and kick back with a good film.",
                     "url": "https://www.wired.com/story/weekend-deals-june-12-2021/",
                     "urlToImage": "https://media.wired.com/photos/6022fbdf4d0b4a384afe02b7/191:100/w_1280,c_limit/Gear-Feature-Samsung-Galaxy-Buds-Pro-SOURCE-Samsung.jpg",
                     "publishedAt": "2021-06-12T11:00:00Z",
                     "content": "Ninja Foodi Deluxe XL Multi-Cooker for $200 ($50 off): Ninjas competitor to the Instant Pot plays up its ability to air fry, with a five-quart crisping basket, but its also a pressure cooker, steamer… [+2191 chars]"
                  },
                  {
                     "source": {
                        "id": "wired",
                        "name": "Wired"
                     },
                     "author": "Bhaskar Chakravorti",
                     "title": "Political and Urban-Rural Divides Prolong The Digital Divide",
                     "description": "Democrats and Republicans alike need to be honest about how much broadband for all will cost. And they can make Big Tech help pay for it.",
                     "url": "https://www.wired.com/story/opinion-political-bickering-prolongs-the-digital-divide/",
                     "urlToImage": "https://media.wired.com/photos/60c0ff63c99dc8c320fb6ceb/191:100/w_1280,c_limit/Opinion-Broadband-Internet-Digital-Divide-1233251770.jpg",
                     "publishedAt": "2021-06-10T13:00:00Z",
                     "content": "The digital divide unites strange bedfellows. Satya Nadella frets about it; his company, Microsoft, finds that half the country isnt using the internet at speeds capable of maintaining a half-decent … [+4423 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Kirsten Korosec",
                     "title": "The Station: Exits at Waymo and Bird’s SPAC reveals its scooter-nomics",
                     "description": "The Station is a weekly newsletter dedicated to all things transportation. Sign up here — just click The Station — to receive it every weekend in your inbox. Hello and welcome back to The Station, a weekly newsletter dedicated to all the ways people and packa…",
                     "url": "http://techcrunch.com/2021/05/17/the-station-exits-at-waymo-and-birds-spac-reveals-its-scooter-nomics/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-26-at-9.13.28-AM.jpg?w=489",
                     "publishedAt": "2021-05-17T15:37:01Z",
                     "content": "The Station is a weekly newsletter dedicated to all things transportation. Sign up here just click The Station to receive it every weekend in your inbox.\r\nHello and welcome back to The Station, a wee… [+24996 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                     },
                     "author": "Sam Rutherford",
                     "title": "USB Power Delivery’s Big Upgrade Gets Us Closer to One Cable to Rule Them All",
                     "description": "For people who can’t stand proprietary power cables, USB Power Delivery just got a big upgrade that raises the limit on the max power transfer from 100 watts all the way up to 240 watts.Read more...",
                     "url": "https://gizmodo.com/usb-power-delivery-s-big-upgrade-gets-us-closer-to-one-1846972861",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b4d2c134ca93e1efc8e18e7c7c35159c.jpg",
                     "publishedAt": "2021-05-26T15:20:00Z",
                     "content": "For people who cant stand proprietary power cables, USB Power Delivery just got a big upgrade that raises the limit on the max power transfer from 100 watts all the way up to 240 watts.\r\nThe latest u… [+2570 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Mike Butcher",
                     "title": "API security startup 42Crunch raises $17M Series A led by Energy Impact Partners",
                     "description": "With security top of mind in many companies these days, especially given how many staff work at home, there is one area that remains chronically ignored: that of the world of APIs which power all of the platforms we all use every day. Now, a significant playe…",
                     "url": "http://techcrunch.com/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/42Crunch-Dashboard-sq.jpg?w=600",
                     "publishedAt": "2021-05-19T11:00:04Z",
                     "content": "With security top of mind in many companies these days, especially given how many staff work at home, there is one area that remains chronically ignored: that of the world of APIs which power all of … [+1743 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Kirsten Korosec",
                     "title": "The Station: Rivian rolls towards an IPO and Quantumscape makes a big battery hire",
                     "description": "Sign up here — just click The Station — to receive it every weekend in your inbox. Hello and welcome back to The Station, a weekly newsletter dedicated to all the ways people and packa…",
                     "url": "http://techcrunch.com/2021/05/31/the-station-rivian-rolls-towards-an-ipo-and-quantumscape-makes-a-big-battery-hire/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/rivian-image-social.jpg?w=764",
                     "publishedAt": "2021-05-31T16:25:55Z",
                     "content": "The Station is a weekly newsletter dedicated to all things transportation. Sign up here just click The Station to receive it every weekend in your inbox.\r\nHello and welcome back to The Station, a wee… [+29321 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Devin Coldewey",
                     "title": "Osma’s high-tech instant cold brew could change summertime coffee forever",
                     "description": "It’s rare that a truly new way to make coffee is invented, and nearly all of them have one thing in common: heat. After all, it’s hot water that quickly extracts flavor and body from grounds. But Osma, a new device using an entirely novel coffeemaking techniq…",
                     "url": "http://techcrunch.com/2021/06/08/osmas-high-tech-instant-cold-brew-could-change-summertime-coffee-forever/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/osma-header.jpg?w=481",
                     "publishedAt": "2021-06-08T20:46:01Z",
                     "content": "It’s rare that a truly new way to make coffee is invented, and nearly all of them have one thing in common: heat. After all, it’s hot water that quickly extracts flavor and body from grounds. But Osm… [+6754 chars]"
                  },
                  {
                     "source": {
                        "id": "engadget",
                        "name": "Engadget"
                     },
                     "author": "https://www.engadget.com/about/editors/stack-commerce",
                     "title": "Get two years of PlayStation Plus for 25 percent off with this coupon",
                     "description": "This bundle of PlayStation Plus subscriptions can be stacked or shared with a friend. Either way, you get to enjoy all of your games and get more for free.",
                     "url": "https://www.engadget.com/playstation-plus-discount-145536783.html",
                     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/68cc5ce0-b8bf-11eb-b7fa-bb3d5d5b742b",
                     "publishedAt": "2021-05-24T14:55:36Z",
                     "content": "While single-player games like Cyberpunk 2077\r\n maintain a solid foothold in the gaming industry, online play is undoubtedly one of the hobby's biggest draws. For Sony fans specifically, this means b… [+1897 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Jae Thomas",
                     "title": "Learn about investing of all sorts with this course bundle on sale",
                     "description": "TL;DR: Want to make money from trading cryptocurrency? Grab this Stock and Cryptocurrency Investment Toolkit Bundle on sale for $20 as of May 31.\n\nIf you want to learn more about investing, your weird uncle ranting about GameStop stock and Bitcoin when he’s h…",
                     "url": "https://mashable.com/shopping/may-31-the-complete-stock-and-cryptocurrency-investment-toolkit-bundle/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F31%252F45%252F3c92f9925f074c21aedcb7719fd78b14.dfd41.jpg%252F1200x630.jpg?signature=ZZrm4zEQVz20jvOYHwwVz4SjOK8=",
                     "publishedAt": "2021-05-31T09:00:00Z",
                     "content": "TL;DR: Want to make money from trading cryptocurrency? Grab thisStock and Cryptocurrency Investment Toolkit Bundle on sale for $20 as of May 31.\r\nIf you want to learn more about investing, your weird… [+1213 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Anna Iovine",
                     "title": "Wild Flower's Enby 2 is a fun, versatile sex toy for all genders",
                     "description": "Heading into hot vaxed summer, you're probably on the market for new toys. Sure, you may have contributed to the bump in sex toy sales\r\n during 2020, but now you're vaxed and waxxed\r\n and looking for something fresh. Something that could be used in either sol…",
                     "url": "https://mashable.com/review/wild-flower-enby-2-review/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F15%252Fa0%252F15324552d1b84316b48c8f7540ef9ac8.9930b.jpg%252F1200x630.jpg?signature=64qaz4yVmY-yAUNZ-bAYplJ5gwE=",
                     "publishedAt": "2021-06-15T23:30:00Z",
                     "content": "Heading into hot vaxed summer, you're probably on the market for new toys. Sure, you may have contributed to the bump in sex toy sales\r\n during 2020, but now you're vaxed and waxxed\r\n and looking for… [+6609 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Joseph Green",
                     "title": "Protect all of your devices with a secure subscription to ZenMate VPN",
                     "description": "SAVE 85%: A three-year subscription to ZenMate VPN is on sale for £1.44 per month as of May 18, saving you 85% on list price.\n\nAnother day, another deal on a VPN. We know what you're thinking: aren't we bored of deals on VPNs at this point? Absolutely not. Th…",
                     "url": "https://mashable.com/uk/shopping/may-18-best-zenmate-vpn-deal/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F18%252F6b%252F5883d6d9673a436a9e96d5e6853cfbf5.b8671.jpg%252F1200x630.jpg?signature=KTy-_H_1DfoiIJ1tVI5rkebG3gA=",
                     "publishedAt": "2021-05-18T04:00:00Z",
                     "content": "SAVE 85%: A three-year subscription to ZenMate VPN is on sale for £1.44 per month as of May 18, saving you 85% on list price.\r\nAnother day, another deal on a VPN. We know what you're thinking: aren't… [+1123 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Kellen Beck",
                     "title": "Hubble captures a luminous spiral galaxy looking all chill and relaxed",
                     "description": "Swirling around in the Virgo constellation, the Hubble Space Telescope captured a look at the spiral galaxy NGC 5037, NASA shared on Friday.\nLocated roughly 150 million light-years away from Earth, the galaxy was first documented by astronomer and musical com…",
                     "url": "https://mashable.com/article/hubble-sprial-galaxy/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F30%252Faf%252Fed9dd45ecf384e07afb58fd1f413cc05.11517.png%252F1200x630.png?signature=g6BoydwFeWuNzRVU_aouAqUMTu8=",
                     "publishedAt": "2021-05-30T18:35:13Z",
                     "content": "Swirling around in the Virgo constellation, the Hubble Space Telescope captured a look at the spiral galaxy NGC 5037, NASA shared on Friday.\r\nLocated roughly 150 million light-years away from Earth, … [+1672 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Jae Thomas",
                     "title": "Try out coffees from all over the country with this $16 subscription",
                     "description": "TL;DR: Fuel your coffee addiction with the Angels' Cup coffee subscription, on sale for 28% off. As of June 11, sign up for only $15.99 per month.\n\nYou've heard of book clubs and wine clubs, but did you know there's a special subscription club just for coffee…",
                     "url": "https://mashable.com/shopping/june-11-angels-cup-all-stars-coffee-one-month-subscription/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F11%252Feb%252F2c514b0e8d9a4f7b856d2b2b9b12d8a5.789af.jpg%252F1200x630.jpg?signature=6NKLmgVY_vG3H3BzxhXXtCyAx7I=",
                     "publishedAt": "2021-06-11T13:03:35Z",
                     "content": "TL;DR: Fuel your coffee addiction with theAngels' Cup coffee subscription, on sale for 28% off. As of June 11, sign up for only $15.99 per month.\r\nYou've heard of book clubs and wine clubs, but did y… [+1634 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Haley Henschel",
                     "title": "Google's Nest Audio smart speaker just hit a new all-time-low price at Walmart",
                     "description": "SAVE $25.01: As of June 14, the Google Nest Audio is on sale at Walmart for just $74.98 — that's 25% off its suggested retail price of $99.99.\n\nWe interrupt your usual Alexa-packed programming this Prime Day season to bring you an amazing deal on one of the A…",
                     "url": "https://mashable.com/shopping/june-14-google-nest-audio/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F14%252F59%252F14f26c32d35b48c0aba8f8f5feec235f.2d91f.png%252F1200x630.png?signature=KqcL4l-i91awyQldr0sSt_LQ_Uw=",
                     "publishedAt": "2021-06-14T15:38:33Z",
                     "content": "SAVE $25.01: As of June 14, the Google Nest Audio is on sale at Walmart for just $74.98 that's 25% off its suggested retail price of $99.99.\r\nWe interrupt your usual Alexa-packed programming this Pri… [+1802 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Jeremy Gordon",
                     "title": "Chai, a Band With an Ethos, an Aesthetic and a Sound All Its Own",
                     "description": "This Japanese quartet undercuts traditional ideas about cuteness, gender and rock bands. Its latest album, “Wink,” is arriving on Sub Pop in the United States.",
                     "url": "https://www.nytimes.com/2021/05/18/arts/music/chai-wink.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/05/18/arts/18chai1/18chai1-facebookJumbo.jpg",
                     "publishedAt": "2021-05-18T19:43:58Z",
                     "content": "While the band initially struggled to find local support, it accrued momentum with every foray out of the country. After successful appearances at South by Southwest and Pitchfork Music Festival in 2… [+1939 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Tim McKeough",
                     "title": "All He Wanted Was a Surf Shack. He Got a Lot More.",
                     "description": "Working in finance in Manhattan made him homesick for the beach in California. So he recreated what he missed on an unlikely site in Amagansett.",
                     "url": "https://www.nytimes.com/2021/05/18/realestate/all-he-wanted-was-a-surf-shack-he-got-a-lot-more.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/05/23/realestate/18LOCATION-AMAGANSETT-slide-E7WB/18LOCATION-AMAGANSETT-slide-E7WB-facebookJumbo.jpg",
                     "publishedAt": "2021-05-18T09:00:27Z",
                     "content": "Studying the site, which abuts the noisy highway and Long Island Rail Road to the north, Mr. Masi noted that the cottage seemed to be pushed into a dark corner of the lot to keep it as far from the t… [+1902 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "New York Times"
                     },
                     "author": "Matthew Futterman",
                     "title": "At the French Open, Djokovic, Federer and Nadal All Aim to Win",
                     "description": "Rafael Nadal, Novak Djokovic and Roger Federer are all playing for history, and are almost guaranteed to meet on the way to the men’s final at Roland Garros.",
                     "url": "https://www.nytimes.com/2021/05/30/sports/tennis/french-open-djokovic-federer-nadal.html",
                     "urlToImage": "https://static01.nyt.com/images/2021/05/30/sports/30french-three/30french-three-facebookJumbo.jpg",
                     "publishedAt": "2021-05-30T09:00:18Z",
                     "content": "He said his goal was to be at his best for Wimbledon in June, and to get that rush of playing for something important, in front of fans, against the best players in the world.\r\nThen things began to g… [+1370 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Brenda Stolyar",
                     "title": "Here are all the new features to expect in iOS 15",
                     "description": "Apple's 2021 Worldwide Developer Conference is just around the corner on June 7, which means the company is set to announce a slew of new operating systems for its products. From iPadOS and macOS to watchOS and tvOS (and more), WWDC will give us an inside loo…",
                     "url": "https://mashable.com/article/all-the-new-features-coming-to-ios-15/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F04%252F46%252Fd8f2c5d9abc04219a1403477caabe869.3786f.jpg%252F1200x630.jpg?signature=Ji07S8Aa-34Tsqu9qHK33K3z2s4=",
                     "publishedAt": "2021-06-04T12:00:00Z",
                     "content": "Apple's 2021 Worldwide Developer Conference is just around the corner on June 7, which means the company is set to announce a slew of new operating systems for its products. From iPadOS and macOS to … [+8714 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Caitlin Welsh",
                     "title": "BTS know all the cool new hand gestures, and they're here to teach them to you",
                     "description": "Beware the Double Bunny. Fear the Double Bunny.\nGlobal Korean pop idol super-phenomenon-star group BTS, whose popularity defies even that clunky word salad of superlatives, appeared via the magic of white backdrops on The Late Show with Stephen Colbert Tuesda…",
                     "url": "https://mashable.com/video/bts-hand-gestures-late-show/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F05%252F26%252F85%252F592cc95fa5904d73a12cfc36f118f22b.f3372.png%252F1200x630.png?signature=v3ezDmLNzNxGkERqgqOy9WJjZiw=",
                     "publishedAt": "2021-05-26T07:22:18Z",
                     "content": "Beware the Double Bunny. Fear the Double Bunny.\r\nGlobal Korean pop idol super-phenomenon-star group BTS, whose popularity defies even that clunky word salad of superlatives, appeared via the magic of… [+842 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Alison Foreman",
                     "title": "OK, all those fake-out scenes in 'Mare of Easttown' were ridiculous",
                     "description": "Welcome to Fix It, our series examining projects we love — save for one tiny change we wish we could make.\n\nMare of Easttown\r\n was dark enough without all those ridiculous fake-outs, right?\n\nFrom April to May, HBO’s seven-part limited series offered viewers a…",
                     "url": "https://mashable.com/article/mare-of-easttown-fix-it/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F12%252F0c%252Fcfeaa47eae354c18b3dfa10a2c6c3343.b65ae.png%252F1200x630.png?signature=Xfbf9las6wlfkuXv3_fEEFFkqJ0=",
                     "publishedAt": "2021-06-12T10:00:00Z",
                     "content": "Welcome toFix It, our series examining projects we love save for one tiny change we wish we could make.\r\nMare of Easttown\r\n was dark enough without all those ridiculous fake-outs, right?\r\nWatching th… [+5104 chars]"
                  },
                  {
                     "source": {
                        "id": "mashable",
                        "name": "Mashable"
                     },
                     "author": "Jae Thomas",
                     "title": "Here are all the best early Prime Day deals on robot vacuums",
                     "description": "These are the best early Prime Day deals on robot vacuums as of June 15:\n<ul>\n<li>OUR TOP PICK: Roborock S6 Pure Robot Vacuum and Mop — Save $240\r\n</li>\n<li>BEST FOR SUPER STRONG SUCTION: Roborock S6 MaxV Robot Vacuum Cleaner — Save $200 with on-page coupon\r\n…",
                     "url": "https://mashable.com/shopping/best-early-prime-day-robot-vacuum-deals-2021/",
                     "urlToImage": "https://mondrian.mashable.com/2021%252F06%252F15%252Ffa%252Ff226a71fd8794e26b81623dc7f3df5b4.a3ed3.png%252F1200x630.png?signature=Eg8SA9kft9BqJ612GBZZgXEg9aU=",
                     "publishedAt": "2021-06-15T16:34:39Z",
                     "content": "These are the best early Prime Day deals on robot vacuums as of June 15:\r\nIf you're planning on having a hot girl summer, you shouldn't be wasting your time cleaning when you can outsource the work. … [+3147 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Ron Miller",
                     "title": "4 women in engineering discuss harassment, isolation and perseverence",
                     "description": "Four women from engineering backgrounds described daily challenges and their strong determination to be the best engineers they can be -- without all the obstruction.",
                     "url": "http://techcrunch.com/2021/06/07/4-women-in-engineering-discuss-harassment-isolation-and-perseverence/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1180183363-3.jpg?w=600",
                     "publishedAt": "2021-06-07T15:31:39Z",
                     "content": "Women engineers often face workplace and career challenges that their male colleagues don’t because they remain a minority in the profession: Depending on how you count, women make up just 13% to 25%… [+6820 chars]"
                  },
                  {
                     "source": {
                        "id": "techcrunch",
                        "name": "TechCrunch"
                     },
                     "author": "Annie Siebert",
                     "title": "3 lessons we learned after raising $6.3M from 50 investors",
                     "description": "There isn’t one right way to raise capital, and authenticity above all is what will make your round a successful one.",
                     "url": "http://techcrunch.com/2021/06/03/3-lessons-we-learned-after-raising-6-3m-from-50-investors/",
                     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1289650660.jpg?w=454",
                     "publishedAt": "2021-06-03T18:48:55Z",
                     "content": "It was August 2019, and the fundraising process was not going well.\r\nMy co-founder and I had left our product management jobs at New Relic several months prior, deciding to finally plunge into buildi… [+2885 chars]"
                  },
                  {
                     "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                     },
                     "author": null,
                     "title": "'All-time great' Durant scores 49 as Nets beat Bucks to take series lead",
                     "description": "Kevin Durant scores 49 points as the Brooklyn Nets fight back to beat Milwaukee 114-108 and take a 3-2 semi-final series lead.",
                     "url": "https://www.bbc.co.uk/sport/basketball/57494184",
                     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/EA96/production/_118945006_kd_reu.jpg",
                     "publishedAt": "2021-06-16T06:44:22Z",
                     "content": "Kevin Durant was just a point short of equalling a career-best 50-point haul in a play-off game\r\nKevin Durant scored 49 points as the Brooklyn Nets beat the Milwaukee Bucks 114-108 to take a 3-2 lead… [+1415 chars]"
                  },
                  {
                     "source": {
                        "id": "cnn",
                        "name": "CNN"
                     },
                     "author": "Lisa Selin Davis, CNN",
                     "title": "How do you navigate risk in the pandemic? Top poker player tells all",
                     "description": "Maria Konnikova is used to thinking about risk tolerance. The professional poker player tells CNN Wellness how to gauge risks in the pandemic.",
                     "url": "https://www.cnn.com/2021/06/08/health/poker-risk-pandemic-maria-konnikova-wellness/index.html",
                     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210606135346-maria-konnikova-file-super-tease.jpg",
                     "publishedAt": "2021-06-08T08:43:51Z",
                     "content": "(CNN)Will it be a royal house or full house or maybe four of a kind? \r\nMaria Konnikova is used to thinking about risk tolerance. The author-turned-professional-poker-player learned how to assess what… [+6586 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "The Guardian"
                     },
                     "author": "Barney Ronay",
                     "title": "This all-English Champions League final is actually an all-Pep affair | Barney Ronay",
                     "description": "Manchester City’s manager has been a substantial influence on Thomas Tuchel and on football far beyond such a gilded matchWelcome, European friends, to the Premier-Champions League final, brought to you this year by Manchester City, Chelsea and our service pr…",
                     "url": "https://amp.theguardian.com/football/2021/may/28/this-all-english-champions-league-final-is-actually-an-all-pep-final-manchester-city-thomas-tuchel",
                     "urlToImage": "https://i.guim.co.uk/img/media/40f48a3aab7adc316067fc283e1dde89996f61ae/0_0_4311_2587/master/4311.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bb6a0ca27596f59d1669f8d7e6ee534d",
                     "publishedAt": "2021-05-28T20:00:05Z",
                     "content": "Welcome, European friends, to the Premier-Champions League final, brought to you this year by Manchester City, Chelsea and our service providers at Uefa. We hope you enjoy this product sample. And be… [+7441 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Joel Kahn",
                     "title": "How to Manage Your Passwords in Google Chrome",
                     "description": "We’ve covered why you may want to get a third-party password managing app to handle all your passwords; however, if you don’t want to deal with an outside app, there are built-in features in the most popular web browser that can help you.Read more...",
                     "url": "https://lifehacker.com/how-to-manage-your-passwords-in-google-chrome-1846990915",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eee1cabb1e5cd4c546a79e06caa0d879.jpg",
                     "publishedAt": "2021-05-28T15:00:00Z",
                     "content": "Weve covered why you may want to get a third-party password managing app to handle all your passwords; however, if you dont want to deal with an outside app, there are built-in features in the most p… [+963 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Claire Lower",
                     "title": "Try This Frozen Applesauce Instead of Expensive Dog Ice Cream",
                     "description": "Dogs love treats, and humans love giving dogs treats because we like seeing our dogs happy and excited. Not all treats, however, are created equal. Some, like table scraps that contain a lot of salt and fat, are not good for your pooch; and some, like those l…",
                     "url": "https://lifehacker.com/try-this-frozen-applesauce-instead-of-expensive-dog-ice-1846910282",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4a080041d404b94863020766294cebb9.jpg",
                     "publishedAt": "2021-05-17T17:00:00Z",
                     "content": "Dogs love treats, and humans love giving dogs treats because we like seeing our dogs happy and excited. Not all treats, however, are created equal. Some, like table scraps that contain a lot of salt … [+1560 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Lisa Rowan, Mike Winters",
                     "title": "How to Talk to a Real Human at the IRS Without Waiting on Hold Forever",
                     "description": "Not all questions can be answered by a computer—especially when it comes to your taxes. But when you call the IRS, it can seem impossible to get an real human to take your call. These circumstances have worsened over the past year, as the pandemic further dep…",
                     "url": "https://lifehacker.com/how-to-talk-to-a-real-human-at-the-irs-without-waiting-1842128259",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/qf5o7bw6yppuyjozppre.jpg",
                     "publishedAt": "2021-06-10T17:15:00Z",
                     "content": "Not all questions can be answered by a computerespecially when it comes to your taxes. But when you call the IRS, it can seem impossible to get an real human to take your call. \r\nThese circumstances … [+4251 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Jordan Calhoun",
                     "title": "Can I Learn to Skateboard in My 30s?",
                     "description": "The first time I stood on a skateboard, I was in high school. I was transferred from an all-Black school in Detroit to a predominately White one, and learning to navigate a new cultural landscape—hacky sack, field hockey, acoustic guitars—led me to Tony Hawk …",
                     "url": "https://lifehacker.com/can-i-learn-to-skateboard-in-my-30s-1847081610",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1ab2a54cfa88e6f693404e378e2f0374.jpg",
                     "publishedAt": "2021-06-11T18:30:00Z",
                     "content": "The first time I stood on a skateboard, I was in high school. I was transferred from an all-Black school in Detroit to a predominately White one, and learning to navigate a new cultural landscapehack… [+5446 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Aisha Jordan",
                     "title": "How to Keep Bugs Off Your Indoor Plants",
                     "description": "Having plants means having to consider lighting, watering, fertilizing, and yes, even bugs. Plants can attract certain bugs, ones like spider mites, gnats, and whiteflies that can all infest your plants and your home if not taken care of. Here are a few natur…",
                     "url": "https://lifehacker.com/how-to-keep-bugs-off-your-indoor-plants-1846925872",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9165e90f3136910ba6555820a7e8d743.jpg",
                     "publishedAt": "2021-05-19T18:30:00Z",
                     "content": "Having plants means having to consider lighting, watering, fertilizing, and yes, even bugs. Plants can attract certain bugs, ones like spider mites, gnats, and whiteflies that can all infest your pla… [+2482 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Elizabeth Yuko",
                     "title": "What to Look for During Your Final Walk-Through Before Closing on a House",
                     "description": "After all the time and effort you’ve put into your search, you’ve finally found the home of your dreams (or at least one in your price range that you’re mildly excited about). You’ve made an offer, had the home inspected, and soon it’ll be time to close. Read…",
                     "url": "https://lifehacker.com/what-to-look-for-during-your-final-walk-through-before-1846902148",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/15fc89fbf46f281a75a343103fc788c9.jpg",
                     "publishedAt": "2021-05-16T14:00:00Z",
                     "content": "After all the time and effort youve put into your search, youve finally found the home of your dreams (or at least one in your price range that youre mildly excited about). Youve made an offer, had t… [+2922 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Patrick Allan, Mike Winters",
                     "title": "Why You Need Multiple Savings Accounts",
                     "description": "You know that putting money aside is a good idea, but counterintuitive though it might seem, putting it all in the same place can make your budgeting more complicated than it needs to be. To keep things straight, why not sign up for multiple savings accounts …",
                     "url": "https://lifehacker.com/why-you-need-multiple-savings-accounts-1797235748",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/56d8f92bf700fbaf6b9de63c38d4c65e.jpg",
                     "publishedAt": "2021-06-10T14:00:00Z",
                     "content": "You know that putting money aside is a good idea, but counterintuitive though it might seem, putting it all in the same place can make your budgeting more complicated than it needs to be. To keep thi… [+1913 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Meghan Moravcik Walbert",
                     "title": "Is It 'You and I' or 'You and Me'?",
                     "description": "Sometimes, no matter how one pours their heart out, if you flub your grammar, that’s all someone is going to remember. This was the case when I wrote this post about how to decide when you’re done having children, in which I shared my own experiences as a mot…",
                     "url": "https://lifehacker.com/is-it-you-and-i-or-you-and-me-1847049208",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/525fef8c44e6e3902fc1ede66c425ea4.jpg",
                     "publishedAt": "2021-06-08T16:30:00Z",
                     "content": "Sometimes, no matter how one pours their heart out, if you flub your grammar, thats all someone is going to remember. This was the case when I wrote this post about how to decide when youre done havi… [+3384 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                     },
                     "author": "Brendan Hesse",
                     "title": "Everything New in the June 2021 Pixel Drop Update",
                     "description": "Google is rolling out its latest Pixel Drop as part of the June 2021 Android security update. For those who don’t know, Pixel Drops are released throughout the year and add Pixel-specific features alongside the usual security patches all Android phones receiv…",
                     "url": "https://lifehacker.com/everything-new-in-the-june-2021-pixel-drop-update-1847056341",
                     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8ec2c7c68624200544227cb16c0cda10.jpg",
                     "publishedAt": "2021-06-08T19:30:00Z",
                     "content": "Google is rolling out its latest Pixel Drop as part of the June 2021 Android security update. For those who dont know, Pixel Drops are released throughout the year and add Pixel-specific features alo… [+4328 chars]"
                  },
                  {
                     "source": {
                        "id": null,
                        "name": "The Guardian"
                     },
                     "author": "Lanre Bakare Arts and culture correspondent",
                     "title": "UK’s first all-black, all-female Shakespeare company aim to shine new light on Bard",
                     "description": "Mawa Theatre Company hope to make classic works accessible to diverse audiencesThe team behind the UK’s first all-black, all-female Shakespearean theatre company say it is planning to re-examine some ofthe Bard’s most famous work from a black female perspecti…",
                     "url": "https://amp.theguardian.com/culture/2021/jun/10/uks-first-all-black-all-female-shakespeare-company-aim-to-shine-new-light-on-bard",
                     "urlToImage": "https://i.guim.co.uk/img/media/d897e93ba3a0b23563b5a32017af0bad233bce09/0_128_6016_3610/master/6016.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=773fbe1ae022244f18dc8c13d14ff349",
                     "publishedAt": "2021-06-10T10:00:16Z",
                     "content": "The team behind the UKs first all-black, all-female Shakespearean theatre company say it is planning to re-examine some ofthe Bards most famous work from a black female perspective and make him acces… [+2571 chars]"
                  }
               ],
            newsList: [],
            subList: [],
            menuList: [
               {
                  id: '/news',
                  name: 'Новости',
                  exact: false
               },
               {
                  id: '/gallery',
                  name: 'Галерея',
                  exact: false
               },
               {
                  id: '/films',
                  name: 'Фильмы',
                  exact: false
               },
               {
                  id: '/other',
                  name: 'Разное',
                  exact: false
               },
               {
                  id: '/pagination',
                  name: 'Пагинация',
                  exact: false
               },
               {
                  id: '/shop',
                  name: 'Магазин',
                  exact: false
               }
            ]
         },
         mutations: {
            updateNews(state, news_list) {
               state.newsList = news_list;
            },
            updateSubList(state, sub_list) {
               state.subList = sub_list;
            },
            changeMainBg(state, new_url) {
               state.mainBg = new_url;
            }
         },
         getters: {
            newsList(state) {
               return state.newsList;
            },
            subList(state) {
               return state.subList;
            }
         },
         actions: {
            async getNews(ctx, params = { category: 'top-headlines', page: 1, limit: 20 }) {
               // const KEY = '2c003695d0774374902a4c4e5cb8a27e'                            
               try {
                  const response = await fetch(`http://newsapi.org/v2/${params.category}?${params.category == 'everything' ? 'q=all&' : 'country=ru&'}pageSize=${params.limit}&page=${params.page}&apiKey=2c003695d0774374902a4c4e5cb8a27e`);
                  if (response.status == 429) console.error('Слишком много запросов!');
                  const res = await response.json();
                  params.category == 'top-headlines' ? ctx.commit('updateNews', res.articles) : ctx.commit('updateSubList', res.articles);
               } catch (err) {
                  let offset = Math.round(Math.random() * (ctx.state.localList.length - 20));
                  params.category == 'top-headlines' ? ctx.commit('updateNews', ctx.state.localList.slice(offset, offset + 20)) : ctx.commit('updateSubList', ctx.state.localList)
                  console.log(err);
               }
            }
         }
      }
   }
})

export default store