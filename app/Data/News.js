const newsData = [
    {
      id: "1",
      title: "India Wins the Cricket Match!",
      description: "India defeated Australia by 5 wickets in a thrilling game.",
      image: "https://www.hindustantimes.com/ht-img/img/2023/12/02/original/TOPSHOT-CRICKET-IND-AUS-T20-1_1701535651513.jpg",
      category: "sports",
      content: "India chased down a huge total successfully in the final over...",
      publishedAt: "2 hours ago",
      author: "ESPN Sports",
    },
    {
      id: "2",
      title: "AI Revolution in 2025!",
      description: "AI is evolving faster than ever, leading to major changes.",
      image: "https://d6fiz9tmzg8gn.cloudfront.net/wp-content/uploads/2019/02/15tech-Banner.jpg",
      category: "technology",
      content: "Tech companies are investing billions into AI research...",
      publishedAt: "5 hours ago",
      author: "TechCrunch",
    },
    {
      id: "3",
      title: "Stock Market Hits Record High!",
      description: "The stock market reached an all-time high due to tech growth.",
      image: "https://cdn.vectorstock.com/i/1000v/34/97/folded-newspaper-presenting-business-news-vector-2193497.jpg",
      category: "business",
      content: "Investors are bullish as tech stocks continue to surge...",
      publishedAt: "1 hour ago",
      author: "Bloomberg",
    },
    {
      id: "4",
      title: "World Leaders Meet for Climate Summit",
      description: "Global leaders discuss urgent climate change actions.",
      image: "https://static01.nyt.com/images/2017/07/09/world/G20/G20-superJumbo.jpg",
      category: "world",
      content: "Nations pledged to reduce carbon emissions significantly...",
      publishedAt: "3 hours ago",
      author: "BBC News",
    },
    {
      id: "5",
      title: "New Breakthrough in Cancer Research",
      description: "Scientists discover a promising treatment for cancer.",
      image: "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/blt949ea8e16e463049/blt91650a2d79baeff5/655f6bf1c9e27a040af0f697/cancer-switch.png",
      category: "health",
      content: "The treatment has shown success in early-stage trials...",
      publishedAt: "6 hours ago",
      author: "Medical Journal",
    },
    {
      id: "6",
      title: "Hollywood Blockbuster Breaks Box Office Records!",
      description: "A new film sets a record with its massive earnings.",
      image: "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/TDW-08486_R2-H-2024.jpg?w=1296&h=730&crop=1",
      category: "entertainment",
      content: "The movie has captivated audiences worldwide...",
      publishedAt: "8 hours ago",
      author: "Variety",
    },
    {
      id: "7",
      title: "Digital Marketing Trends for 2025",
      description: "Experts predict the top trends in online marketing.",
      image: "https://searchengineland.com/wp-content/seloads/2024/12/13-trends-for-2025.jpg.webp",
      category: "marketing",
      content: "SEO, social media, and AI-driven campaigns will dominate...",
      publishedAt: "4 hours ago",
      author: "Marketing Weekly",
    },
    {
      id: "8",
      title: "Political Debate Heats Up Ahead of Elections",
      description: "Candidates discuss key issues in the latest debate.",
      image: "https://dims.apnews.com/dims4/default/c8f6449/2147483647/strip/true/crop/3000x2000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff9%2F37%2F63b725b3421573690738957e023e%2Fd1bbfbcdd8e343c887b41a4cf294f2ae",
      category: "political",
      content: "The debate covered economic policies, healthcare, and more...",
      publishedAt: "7 hours ago",
      author: "CNN Politics",
    },
    {
      id: "9",
      title: "Startup Raises $100M in Funding",
      description: "A fintech startup secures major investment.",
      image: "https://incubees.com/wp-content/uploads/2022/12/Mobility-fintech-Moove-plans-UAE-expansion-with-its-new-30-million-investment-fund-780x400.png",
      category: "business",
      content: "The startup plans to expand its services globally...",
      publishedAt: "9 hours ago",
      author: "Forbes",
    },
    {
      id: "11",
      title: "Football Star Transfers to New Club",
      description: "A major football player signs with a new team.",
      image: "https://www.livemint.com/lm-img/img/2025/02/23/1600x900/CRICKET-CT-2025-PAK-IND-224_1740328577687_1740328594451.jpg",
      category: "sports",
      content: "Fans react as the footballer joins his new club...",
      publishedAt: "12 hours ago",
      author: "Sports Illustrated",
    },
    {
      id: "12",
      title: "Government Announces New Policies",
      description: "New economic policies to boost employment.",
      image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/17/Pictures/conference-finance-minister-nirmala-sitharaman-addresses-press_47a384d4-980a-11ea-a091-8eb61e4add3b.jpg",
      category: "political",
      content: "The policies focus on job creation and economic stability...",
      publishedAt: "14 hours ago",
      author: "The Guardian",
    },
    {
      id: "13",
      title: "New Diet Trends Taking Over in 2025",
      description: "Experts discuss the latest health and nutrition trends.",
      image: "https://www.eggoz.com/cdn/shop/articles/Food_Trends_in_2025_copy_1.jpg?v=1736241358&width=1100",
      category: "health",
      content: "People are moving towards plant-based and keto diets...",
      publishedAt: "16 hours ago",
      author: "Health Magazine",
    },
    {
      id: "14",
      title: "E-commerce Growth During Holiday Season",
      description: "Online shopping reaches new heights this year.",
      image: "https://cdn.statcdn.com/Infographic/images/normal/1666.jpeg",
      category: "business",
      content: "Retailers report record-breaking online sales...",
      publishedAt: "18 hours ago",
      author: "Business Insider",
    },
    {
      id: "15",
      title: "Major Cybersecurity Breach in Tech Firm",
      description: "Hackers leak sensitive company data.",
      image: "https://imgproxy.divecdn.com/O4-mmVvfYoYHcbb1r7c_-iY0siAWGInBOTz2WgEThxQ/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9CcmVhY2guanBn.webp",
      category: "technology",
      content: "The breach exposed millions of users' data...",
      publishedAt: "20 hours ago",
      author: "Cybersecurity Weekly",
    },
    {
      id: "16",
      title: "Climate Change Effects on Agriculture",
      description: "Farmers face challenges due to unpredictable weather.",
      image: "https://khetibuddy.com/wp-content/uploads/2023/05/Effects-of-climate-change-on-agriculture.jpg",
      category: "world",
      content: "Climate experts warn of declining crop yields...",
      publishedAt: "22 hours ago",
      author: "National Geographic",
    },
    {
      id: "17",
      title: "Biggest Fashion Trends of the Year",
      description: "Stylists reveal the most popular fashion trends.",
      image: "https://hips.hearstapps.com/hmg-prod/images/ss24-top-fashion-trendsb-65a0221044138.jpg",
      category: "entertainment",
      content: "Bold colors and vintage styles are making a comeback...",
      publishedAt: "1 day ago",
      author: "Vogue",
    },
    {
      id: "18",
      title: "Upcoming Video Game Releases in 2025",
      description: "Gamers excited for new titles launching this year.",
      image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25517254/2025_video_games__1_.jpg?quality=90&strip=all&crop=0.068212824010914,0,99.863574351978,100",
      category: "technology",
      content: "Developers reveal exciting new features in upcoming games...",
      publishedAt: "1 day ago",
      author: "IGN",
    },
    {
      id: "19",
      title: "Electric Cars to Dominate the Market",
      description: "EV sales surpass expectations as demand rises.",
      image: "https://static01.nyt.com/images/2021/01/30/business/29JPchina-emissions1-print/merlin_171174039_85307b46-e992-40de-be78-3c46fe23e6ac-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      category: "business",
      content: "Automakers focus on sustainability and innovation...",
      publishedAt: "1 day ago",
      author: "Automobile News",
    },
    {
      id: "20",
      title: "Olympics 2025: What to Expect",
      description: "The biggest sporting event gears up for a grand opening.",
      image: "https://www.geo.tv/assets/uploads/updates/2025-01-22/586717_7708213_updates.jpg",
      category: "sports",
      content: "Countries prepare their athletes for the global competition...",
      publishedAt: "1 day ago",
      author: "Olympic Committee",
    },
    {
        id: "21",
        title: "India Clinches Victory Against England",
        description: "A spectacular chase secures India's win over England.",
        image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-69468,resizemode-75,msid-108211803/news/sports/ms-dhonis-cryptic-fb-post-teases-fans-ahead-of-ipl-2024-heres-what-he-wrote.jpg",
        category: "sports",
        content: "India's star batsman scored a brilliant century to seal the win...",
        publishedAt: "3 hours ago",
        author: "ESPN Sports",
      },
      {
        id: "22",
        title: "Pakistan Stuns South Africa in T20 Match",
        description: "Pakistan's bowlers dominate to secure a crucial win.",
        image: "https://c.ndtvimg.com/2023-09/1rvvhgg_india-pakistan-afp_625x300_06_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
        category: "sports",
        content: "An outstanding bowling performance limited South Africa...",
        publishedAt: "5 hours ago",
        author: "Cricbuzz",
      },
      {
        id: "23",
        title: "Australia Prepares for World Cup 2025",
        description: "The team announces its squad for the upcoming tournament.",
        image: "https://crictoday.com/wp-content/uploads/2025/02/IND-vs-PAK-2.jpg",
        category: "sports",
        content: "Cricket Australia has unveiled a strong squad...",
        publishedAt: "8 hours ago",
        author: "BBC Sports",
      },
    
      // Technology News
      {
        id: "24",
        title: "Tesla Unveils New AI-Powered Car",
        description: "Elon Musk introduces Tesla's first AI-driven vehicle.",
        image: "https://f1.econotimes.com/2024/10/wjc1r8i7g7.jpg",
        category: "technology",
        content: "The new Tesla model features fully autonomous driving...",
        publishedAt: "2 hours ago",
        author: "TechCrunch",
      },
      {
        id: "25",
        title: "Apple Plans Major iPhone Update",
        description: "Apple announces innovative new features for iPhone users.",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/11/full/1718093789-6627.jpg?im=FitAndFill=(826,465)",
        category: "technology",
        content: "iOS 19 will introduce major advancements in AI...",
        publishedAt: "6 hours ago",
        author: "Gizmodo",
      },
      {
        id: "26",
        title: "Cybersecurity Firm Warns of New Malware",
        description: "Hackers target businesses with sophisticated cyber attacks.",
        image: "https://www.ncsc.gov.uk/images/iStock-141087193.jpg",
        category: "technology",
        content: "Experts advise companies to strengthen security measures...",
        publishedAt: "7 hours ago",
        author: "Cybersecurity Weekly",
      },
    
      // Business News
      {
        id: "27",
        title: "Amazon Expands Operations in India",
        description: "E-commerce giant sets up new fulfillment centers.",
        image: "https://images.moneycontrol.com/static-mcnews/2023/09/8-Amazon-Lawsuit.jpg?impolicy=website&width=770&height=431",
        category: "business",
        content: "Amazon invests $5 billion into expanding its network...",
        publishedAt: "4 hours ago",
        author: "Bloomberg",
      },
      {
        id: "28",
        title: "Stock Market Sees Record Growth",
        description: "Tech stocks drive the market to an all-time high.",
        image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/1230C/production/_99480547_indexed-nc.png.webp",
        category: "business",
        content: "Investors are optimistic about the future of AI companies...",
        publishedAt: "5 hours ago",
        author: "CNBC",
      },
      {
        id: "29",
        title: "Bitcoin Surpasses $70K Amid Market Boom",
        description: "Cryptocurrency reaches an all-time high price.",
        image: "https://i0.wp.com/innovation-village.com/wp-content/uploads/2021/12/bitcoin.jpg?fit=1280%2C720&ssl=1",
        category: "business",
        content: "Investors are bullish on Bitcoin's long-term potential...",
        publishedAt: "1 hour ago",
        author: "CoinDesk",
      },
    
      // World News
      {
        id: "30",
        title: "UN Summit Focuses on Global Warming",
        description: "World leaders discuss climate change solutions.",
        image: "https://static01.nyt.com/images/2022/11/07/world/07cop27-morning-lede-family-photo/07cop27-morning-lede-family-photo-videoSixteenByNine3000-v2.jpg",
        category: "world",
        content: "New climate policies are expected to be introduced...",
        publishedAt: "9 hours ago",
        author: "BBC News",
      },
      {
        id: "31",
        title: "NASA's Mars Mission Faces Challenges",
        description: "Unexpected hurdles arise in the latest Mars exploration.",
        image: "https://feeds.abplive.com/onecms/images/uploaded-images/2024/09/30/277ac465cd11c7f7de266c1ee1ef2e621727678321897236_original.jpg",
        category: "world",
        content: "NASA scientists work on solutions to keep the mission on track...",
        publishedAt: "12 hours ago",
        author: "Space.com",
      },
      {
        id: "32",
        title: "Global Trade Agreements Set for 2025",
        description: "Countries work together on new economic policies.",
        image: "https://media.licdn.com/dms/image/v2/D4D12AQGpmGK_Efts9g/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1678463398739?e=1745452800&v=beta&t=guel4vbdqlV3HcvT_8qa0Hh15I-vFuxYBgJRWiNOd8E",
        category: "world",
        content: "The trade agreement is expected to boost international markets...",
        publishedAt: "3 hours ago",
        author: "Reuters",
      },
    
      // Health News
      {
        id: "33",
        title: "Breakthrough in Diabetes Treatment",
        description: "New drug shows promising results in early trials.",
        image: "https://images.indianexpress.com/2024/07/Untitled-design-41-5.jpg",
        category: "health",
        content: "Medical experts are hopeful about the potential impact...",
        publishedAt: "10 hours ago",
        author: "Medical Journal",
      },
      {
        id: "34",
        title: "Mental Health Awareness Rises Globally",
        description: "More people seek professional help for mental health issues.",
        image: "https://etvbharatimages.akamaized.net/etvbharat/prod-images/09-10-2024/1200-675-22642945-936-22642945-1728467691780.jpg",
        category: "health",
        content: "Experts stress the importance of mental health support...",
        publishedAt: "6 hours ago",
        author: "Healthline",
      },
      {
        id: "35",
        title: "Fitness Trends for 2025",
        description: "Experts predict a shift in exercise habits.",
        image: "https://pvolvefranchise.com/wp-content/uploads/pvolve-support-header-1024x576.jpg",
        category: "health",
        content: "Wearable tech and home workouts are expected to dominate...",
        publishedAt: "8 hours ago",
        author: "Men's Health",
      },
    
      // Entertainment News
      {
        id: "36",
        title: "New Marvel Movie Breaks Box Office Records",
        description: "Superhero fans rush to theaters for the latest film.",
        image: "https://c.ndtvimg.com/2019-04/2rpnoa2g_avengers-review-facebook_625x300_26_April_19.jpg?downsize=545:307",
        category: "entertainment",
        content: "Critics and audiences alike are praising the blockbuster...",
        publishedAt: "1 day ago",
        author: "Hollywood Reporter",
      },
      {
        id: "37",
        title: "Grammy Awards 2025: Full Winners List",
        description: "A look at the top winners of this year's Grammy Awards.",
        image: "https://ew.com/thmb/FVFR-Pizz4DAaeOBP5xglassJ7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sabrina-Beyonce-Kendrick-Grammys-2025-020225-a7c5b5a2d3084fe18516ff46e1a7921d.jpg",
        category: "entertainment",
        content: "The event featured stunning performances and big surprises...",
        publishedAt: "2 hours ago",
        author: "Billboard",
      },
      {
        id: "38",
        title: "Streaming Wars: Who’s Leading the Race?",
        description: "Netflix, Disney+, and others battle for dominance.",
        image: "https://pyxis.nymag.com/v1/imgs/fd9/ec0/6e130e673fc6f4e866bcedc6905c5f407a-streaming-wars-chart-20232.2x.rhorizontal.w700.jpg",
        category: "entertainment",
        content: "With new platforms emerging, competition is fierce...",
        publishedAt: "4 hours ago",
        author: "Variety",
      },
    
      // Political News
      {
        id: "39",
        title: "Election Polls Indicate a Tight Race",
        description: "Candidates prepare for the final phase of the election.",
        image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-1672465,resizemode-75,msid-113940981/news/international/world-news/tight-race-ahead-of-the-us-presidential-election-2024-current-polls-show-whos-aheadharris-or-trump.jpg",
        category: "political",
        content: "Experts analyze the latest voter trends...",
        publishedAt: "7 hours ago",
        author: "CNN Politics",
      },
      {
        id: "40",
        title: "New Tax Policies Announced",
        description: "Government introduces revised tax regulations.",
        image: "https://c.ndtvimg.com/2023-01/6kah06f8_income-tax-_625x300_06_January_23.jpg?downsize=545:307",
        category: "political",
        content: "The policy aims to ease the burden on middle-class families...",
        publishedAt: "10 hours ago",
        author: "The Economist",
      },
  ];
  
  export default newsData;
  