// English chapters
const enChapters = [
  {
    id: 1,
    title: "The Rainy Café",
    image: "/imgs/chapter1.png?width=1536&height=1024",
    content: `Emma sat alone in the dimly lit café, watching raindrops race down the foggy window. The rejection letter from her dream art school lay crumpled in her pocket, a physical reminder of her failure. Her sketchbook remained untouched on the table, its blank pages mocking her.

    The café's soft jazz mingled with the patter of rain, creating a melancholic soundtrack to her disappointment.

    She traced patterns in the condensation on her half-empty coffee cup, wondering if she'd been foolish to believe she had any real talent.

    Other patrons came and went, their conversations and laughter a stark contrast to her isolation. Emma had always found beauty in ordinary moments—the way light filtered through leaves, how strangers' paths intersected briefly before continuing on separate journeys. But today, she questioned whether she'd ever capture that beauty in her art again.

    As the afternoon stretched on, she noticed an older woman at a corner table, working intently on what appeared to be a small watercolor. There was something captivating about her confidence, the way her brush moved with purpose. Emma found herself staring, wondering what it would be like to create with such certainty.`,
    choices: [
      "Approach the woman and ask about her painting",
      "Leave the café and try to forget about art for a while",
    ],
  },
  {
    id: 2,
    title: "The Unexpected Mentor",
    image: "/imgs/chapter2.png?width=1536&height=1024",
    content: `Three months had passed since that rainy day in the café. Emma found herself in a small art supply store, its shelves stocked with possibilities. The scent of paper, paint, and potential filled the air. She reached for a fine-tipped brush, her hand colliding with another's—an older woman with paint-stained fingers.

    "Sorry," Emma murmured, stepping back.

    The woman smiled, her eyes crinkling at the corners. "No need to apologize. It's a good brush—you have a discerning eye." She introduced herself as Sophia, a local artist who taught community classes.

    Something about Sophia's warmth drew Emma in. When Sophia asked about her work, Emma hesitantly showed her the small sketchbook she'd recently started carrying again. As Sophia flipped through the pages, her expression grew increasingly interested.

    "You capture emotion in ordinary scenes," Sophia observed. "That's rare." She handed back the sketchbook. "You don't need a school to tell you you're an artist, you know."

    Before they parted, Sophia extended an unexpected invitation: "I have a small studio space in an old warehouse downtown. Some of us gather there to work, share techniques. You should join us."`,
    choices: [
      "Accept Sophia's invitation and visit her studio",
      "Thank her but decide to continue developing your style independently",
    ],
  },
  {
    id: 3,
    title: "The First Exhibition",
    image: "/imgs/chapter3.png?width=1536&height=1024",
    content: `Two years of mentorship under Sophia had transformed Emma's work. The converted warehouse space buzzed with conversation as visitors moved between displayed artworks. Emma stood nervously beside her series of urban landscapes, each capturing moments of beauty in overlooked city corners—a reflection in a puddle, shadows dancing across weathered brick, a solitary figure on an empty subway platform.

    Sophia beamed proudly nearby, occasionally directing visitors toward Emma's corner. "She sees what most people miss," Emma overheard her telling someone.

    A gallery owner approached, introducing herself with a firm handshake. "Your perspective is unique," she said, handing Emma her card. "I'd like to discuss featuring your work in our emerging artists showcase."

    Emma's heart raced. This was more than she'd dared to hope for when she'd first stepped into Sophia's studio. As she scanned the room, taking in the moment, her gaze locked with a man across the space. He held a camera, documenting the exhibition, but had paused, his lens directed toward her work. He smiled when their eyes met, and Emma felt an unexpected flutter of connection.

    Later, as the crowd thinned, he approached. "I'm James," he said. "I'm a photographer. Your paintings—they capture the same moments I'm always trying to find through my lens."`,
    choices: [
      "Share your artistic vision with James and exchange contact information",
      "Thank him politely but maintain professional distance",
    ],
  },
  {
    id: 4,
    title: "The Collaboration",
    image: "/imgs/chapter4.png?width=1536&height=1024",
    content: `One year after their first meeting, Emma and James worked side by side in a sun-drenched loft studio. Large windows framed the city skyline, the same urban landscape that had inspired both their work. Emma's canvases and James's photographs created a visual dialogue about urban spaces and human connection.

    Their professional collaboration had evolved naturally into romance, each finding in the other a shared language of observation and expression. They challenged each other artistically, pushing boundaries and experimenting with new techniques.

    "What if we combined our mediums?" James suggested one evening, as they reviewed their work for an upcoming exhibition. "Your paintings overlaid on my photographs, or vice versa. Something that blurs the line between what's captured and what's created."

    The idea excited Emma. They spent long nights discussing possibilities, sketching concepts, testing approaches. Their joint exhibition would be ambitious—a statement about perception and reality, about how two people could see the same world differently yet find harmony in their vision.

    As their creative partnership deepened, so did their personal connection. Emma found herself imagining a future where their paths remained intertwined, both artistically and emotionally.`,
    choices: [
      "Pursue the relationship with James while maintaining your artistic identity",
      "Focus primarily on your artistic development, keeping the relationship casual",
    ],
  },
  {
    id: 5,
    title: "The Crossroads",
    image: "/imgs/chapter5.png?width=1536&height=1024",
    content: `Three years into their relationship, Emma sat alone in a hospital waiting room at dawn. The sterile fluorescent lights cast harsh shadows, so different from the nuanced lighting she sought in her paintings. She was exhausted, having rushed here after receiving a call about Sophia, who had collapsed in her studio.

    The timing couldn't have been more complicated. Just yesterday, James had received news of a prestigious year-long documentary project overseas—an opportunity to photograph communities affected by climate change across three continents. The same week, Emma had been offered her first solo exhibition at a major gallery, a chance to establish herself as a serious artist in her own right.

    Their paths were diverging. The night before, their discussion had turned into an argument, ending in uncomfortable silence. James wanted Emma to consider joining him for parts of his journey. Emma couldn't bear the thought of putting her exhibition on hold after working so hard to earn this opportunity.

    Now, waiting for news about Sophia, Emma's mind raced with questions about loyalty, ambition, and love. Was it possible to honor all three? Or would something inevitably be sacrificed?

    A doctor approached, clipboard in hand. "She's stable," he said of Sophia. "But she'll need support during recovery."`,
    choices: [
      "Commit to helping Sophia recover while pursuing your exhibition",
      "Ask James to postpone his project so you can both support Sophia",
    ],
  },
  {
    id: 6,
    title: "The Decision",
    image: "/imgs/chapter6.png?width=1536&height=1024",
    content: `Two months after Sophia's health scare, Emma and James stood facing each other in the airport terminal. Their breath visible in the cold air near the entrance. Emma had driven him here, their car ride mostly silent, both heavy with the weight of their decision.

    Sophia was recovering well, now teaching from her home studio with Emma's assistance three days a week. Emma's exhibition preparation was underway, consuming her remaining time. James's project couldn't be delayed—the funding, the timing with seasons and local guides, all were fixed.

    "We'll find our way back to each other," James said, touching her cheek gently. His eyes held a mixture of sadness and certainty that made Emma's heart ache.

    Emma nodded, knowing they both needed to follow their separate artistic journeys. "I'll be here," she said, then corrected herself. "Not here, exactly. But creating. Growing. And when you return..."

    She left the sentence unfinished. They both understood the risk—a year apart, each immersed in their own worlds, their own challenges and triumphs. People changed. Feelings changed. But some connections persisted across time and distance.

    They embraced, neither wanting to be the first to let go. When they finally separated, James shouldered his camera bag and walked toward security, turning back once to wave.`,
    choices: [
      "Separate with the understanding you'll both follow your paths and see where they lead",
      "Make concrete plans to maintain your connection despite the distance",
    ],
  },
  {
    id: 7,
    title: "The Solo Journey",
    image: "/imgs/chapter7.png?width=1536&height=1024",
    content: `The eighteen months following James's departure unfolded in a montage of intense work and personal growth for Emma. Her solo exhibition exceeded expectations, critics praising her "unflinching yet compassionate eye for urban isolation and connection." Sophia recovered fully and became Emma's business partner in a small but growing art education program for underserved youth.

    Emma's days blurred together—studio time, teaching, meetings with gallery representatives and potential donors. She worked through nights when inspiration struck, sometimes falling asleep beside half-finished canvases. Her style evolved, incorporating bolder colors and more abstract elements while maintaining her signature emotional resonance.

    Communication with James became increasingly sporadic. Their video calls, once weekly, became monthly, then occasional. The time difference made scheduling difficult, and their conversations grew shorter, less intimate. Emma found herself sharing less about her daily life, focusing instead on major developments. James's project had been extended by six months, his photographs gaining international attention.

    On her thirty-first birthday, Emma sat alone in her apartment, staring at a half-finished canvas. Sophia had organized a small celebration earlier, but now, in the quiet evening hours, Emma felt James's absence acutely. She hadn't heard from him in three weeks.

    She picked up her phone, scrolled to his name, then set it down again. Their paths had diverged, just as they'd known they might. She returned to her canvas, mixing a new shade of blue.`,
    choices: [
      "Reach out to James despite the growing distance",
      "Accept that your paths may have permanently diverged",
    ],
  },
  {
    id: 8,
    title: "The Return",
    image: "/imgs/chapter8.png?width=1536&height=1024",
    content: `Five years had passed since that rainy day in the café where Emma's journey began. The café itself had changed—brighter now, renovated, though still serving the same rich coffee. Emma sat at a corner table, reviewing plans for an arts education foundation she was launching with Sophia and several other artists.

    At thirty-four, Emma had established herself as both an artist and an advocate for arts education. Her work hung in galleries across the country, and her community programs had become a model for similar initiatives elsewhere. She lived a full life, surrounded by creative people who shared her values.

    The bell above the door chimed. Emma looked up reflexively, then froze. James stood in the doorway, older, weathered by his travels, but with the same warm eyes she remembered. He carried a leather portfolio and what appeared to be a book.

    Their eyes met across the room. For a moment, neither moved. Then James approached her table.

    "I went to your studio first," he said. "Sophia told me I might find you here."

    Emma gestured to the chair across from her. "It's been a long time," she said, her voice steadier than she expected.

    James sat down, placing the book on the table between them. "I wanted you to have this," he said. "It's finally finished."

    Emma looked down at the cover—a collection of his photographs paired with her paintings from their time together. "Parallel Visions," the title read.

    "You kept my work," she said softly.

    "I carried it with me everywhere." He hesitated. "I've followed your career, your success. I'm proud of you, Emma."

    As they talked, hours slipped by unnoticed. James spoke of his travels, the communities he'd documented, the environmental changes he'd witnessed. Emma shared stories of her students, her foundation plans, the evolution of her art. The distance of years began to close, revealing two people who had grown separately but perhaps not apart.`,
    choices: ["Suggest collaborating on a new project together", "Share your feelings about his absence and return"],
  },
  {
    id: 9,
    title: "The New Chapter",
    image: "/imgs/chapter9.png?width=1536&height=1024",
    content: `One year after James's return, Emma stood beside him at the entrance of a renovated old school building. Sunlight streamed through large windows, illuminating the space filled with easels, photography equipment, and art supplies. A small crowd had gathered for the ribbon-cutting ceremony of their new community arts center.

    The journey to this moment had not been straightforward. After their reunion at the café, Emma and James had moved cautiously, rebuilding their connection while honoring the people they had become during their time apart. They collaborated first as friends and colleagues, combining Emma's educational experience with James's documentary approach to create immersive arts programs.

    Sophia, now using a cane but still vibrant with creative energy, stood proudly beside them as Emma addressed the crowd.

    "Art saved me when I was lost," Emma said. "A mentor believed in me when I didn't believe in myself. Today, we open these doors to anyone seeking their own creative voice."

    As James cut the ribbon, cheers erupted from the gathered supporters and the young artists who would be the center's first students. Emma caught Sophia's eye, seeing in her mentor's smile a reflection of the full circle they had traveled.

    Later, as they watched students explore the studios, James took Emma's hand. "Our separate journeys led us here," he said. "Something neither of us could have created alone."

    Emma nodded, understanding that their time apart had been necessary—allowing them both to develop the skills, perspective, and purpose that made this new chapter possible. Their paths had diverged only to converge again with greater meaning.`,
    choices: [],
  },
]

// Chinese chapters
const zhChapters = [
  {
    id: 1,
    title: "雨天的咖啡馆",
    // 引用本地图片路径
    image: "/imgs/chapter1.png?width=1536&height=1024",
    content: `艾玛独自坐在灯光昏暗的咖啡馆里，看着雨滴在雾蒙蒙的窗户上竞相滑落。来自她梦想艺术学校的拒绝信被揉成一团塞在口袋里，是她失败的实体提醒。她的素描本放在桌上未动，空白的页面仿佛在嘲笑她。

    咖啡馆柔和的爵士乐与雨声交织，为她的失望创造了一个忧郁的配乐。她在半空的咖啡杯上的水汽中描绘图案，想知道自己是否愚蠢地相信自己有任何真正的才华。

    其他顾客来来往往，他们的谈话和笑声与她的孤独形成鲜明对比。艾玛总是能在普通时刻中发现美——光线如何透过树叶，陌生人的路径如何短暂交叉后继续各自的旅程。但今天，她怀疑自己是否还能在艺术中捕捉到那种美。

    随着下午的延长，她注意到角落里的一位年长女性，专注地在做看起来像是一幅小水彩画。她的自信有一种吸引人的东西，她的画笔有目的地移动。艾玛发现自己在盯着看，想知道创作时有如此确定感会是什么样子。

    最终，艾玛决定收拾东西离开。她站起身，不小心碰到了放在邻桌的一个画具包，几支画笔滚落在地。"对不起！"她慌忙蹲下去捡，这时那位年长的女画家也走了过来。"没关系，"女画家温和地说，"我看你刚才一直在画画？"艾玛愣了一下，注意到对方正看着她未动的素描本。`,
    choices: ["走近那位女士，询问她的画作", "离开咖啡馆，尝试暂时忘记艺术"],
  },
  {
    id: 2,
    title: "意外的导师",
    image: "/imgs/chapter2.png?width=1536&height=1024",
    content: `自那个雨天在咖啡馆以来，已经过去了三个月。艾玛发现自己在一家小型艺术用品店，货架上摆满了可能性。纸张、颜料和潜力的气息充满了空气。她伸手去拿一支细尖画笔，她的手与另一只手相撞——一位手指上沾满颜料的年长女性。

    "对不起，"艾玛喃喃道，后退一步。

    那位女士微笑着，眼角皱起。"不用道歉。这是一支好画笔——你有敏锐的眼光。"她自我介绍为索菲亚，一位教授社区课程的本地艺术家。

    索菲亚的温暖吸引了艾玛。当索菲亚询问她的作品时，艾玛犹豫地展示了她最近开始再次随身携带的小素描本。当索菲亚翻阅页面时，她的表情变得越来越感兴趣。

    "你在普通场景中捕捉到了情感，"索菲亚观察道。"这很罕见。"她把素描本还给艾玛。"你知道，你不需要一所学校来告诉你自己是艺术家。"

    在他们分开之前，索菲亚提出了一个意外的邀请："我在市中心的一个旧仓库里有一个小工作室。我们一些人聚在这里工作，分享技巧。你应该加入我们。"`,
    choices: ["接受索菲亚的邀请，参观她的工作室", "感谢她，但决定继续独立发展自己的风格"],
  },
  {
    id: 3,
    title: "首次展览",
    image: "/imgs/chapter3.png?width=1536&height=1024",
    content: `在索菲亚指导下的两年时间改变了艾玛的作品。改造后的仓库空间随着参观者在展示的艺术品之间移动而充满了谈话声。艾玛紧张地站在她的城市景观系列旁边，每一幅都捕捉到了被忽视的城市角落中的美丽时刻——水坑中的倒影，阳光在风化砖墙上跳舞的阴影，空荡地铁站台上的孤独身影。

    索菲亚在附近自豪地微笑，偶尔引导参观者走向艾玛的角落。"她看到了大多数人错过的东西，"艾玛无意中听到她对某人说。

    一位画廊老板走近，以坚定的握手介绍自己。"你的视角很独特，"她说的递给艾玛一张名片。"我想讨论在我们的新兴艺术家展示中展出你的作品。"

    艾玛心跳加速。这比她第一次踏入索菲亚工作室时所敢希望的要多。当她环顾房间，感受这一刻时，她的目光与房间另一端的一个男人相遇。他拿着相机，记录展览，但已经停下来，镜头对准了她的作品。当他们的目光相遇时，他微笑了，艾玛感到一种意外的连接。

    后来，当人群稀疏时，他走近。"我是詹姆斯，"他说。"我是一名摄影师。你的画作——它们捕捉到了我总是试图通过镜头寻找的相同时刻。"`,
    choices: ["分享你的艺术视野，并与詹姆斯交换联系方式", "礼貌地感谢他，但保持专业距离"],
  },
  {
    id: 4,
    title: "合作",
    image: "/imgs/chapter4.png?width=1536&height=1024",
    content: `在他们第一次见面一年后，艾玛和詹姆斯并肩在一个阳光充足的阁楼工作室工作。大窗户框住了城市天际线，同样的城市景观启发了他们两人的作品。艾玛的画布和詹姆斯的照片创造了关于城市空间和人类连接的视觉对话。

    他们的专业合作自然而然地发展成了浪漫关系，每个人都在对方身上找到了观察和表达的共同语言。他们在艺术上相互挑战，突破界限，尝试新技术。

    "如果我们结合我们的媒介会怎样？"詹姆斯在一个晚上建议，当他们审视即将到来的展览的作品时。"你的画作覆盖在我的照片上，或者反之亦然。一些模糊捕捉和创造之间界限的东西。"

    这个想法让艾玛兴奋。他们度过了长长的夜晚讨论可能性，草图概念，测试方法。他们的联合展览将是雄心勃勃的——关于感知和现实的声明，关于两个人如何能够以不同方式查看同一个世界，却在他们的视野中找到和谐。

    随着他们创意伙伴关系的深化，他们的个人联系也加深了。艾玛发现自己想象着一个未来，他们的道路在艺术上和情感上保持交织。`,
    choices: ["追求与詹姆斯的关系，同时保持你的艺术身份", "主要关注你的艺术发展，保持关系随意"],
  },
  {
    id: 5,
    title: "十字路口",
    image: "/imgs/chapter5.png?width=1536&height=1024",
    content: `在他们关系的三年后，艾玛独自坐在黎明时分的医院候诊室。无菌的荧光灯投下刺眼的阴影，与她在画作中寻求的细腻光线截然不同。她筋疲力尽，在接到关于索菲亚在工作室晕倒的电话后匆匆忙来。

    时机再复杂不过了。就在昨天，詹姆斯收到了一个海外为期一年的高级纪录片项目的消息——一个机会，可以拍摄三大洲受气候变化的社区。同一周，艾玛获得了在一家主要画廊的首次个人展览的机会，这是她确立自己作为一名严肃艺术家的机会。

    他们的道路正在分叉。前一天晚上，他们的讨论变成了争论，以不舒服的沉默结束。詹姆斯希望艾玛考虑加入他旅程的部分。艾玛无法忍受在如此努力争取这个机会后搁置她的展览的想法。

    现在，等待关于索菲亚的消息，艾玛的脑海中充满了关于忠诚、抱负和爱的问题。是否有可能同时尊重这三者？或者不可避免地要牺牲某些东西？

    一位医生走近，手持剪贴板。"她状态稳定，"他说起索菲亚。"但她在恢复期间需要支持。"`,
    choices: ["承诺帮助索菲亚恢复的同时追求你的展览", "请詹姆斯推迟他的项目，这样你们两人都可以支持索菲亚"],
  },
  {
    id: 6,
    title: "决定",
    image: "/imgs/chapter6.png?width=1536&height=1024",
    content: `在索菲亚健康危机两个月后，艾玛和詹姆斯在机场航站楼面对面站立。他们的呼吸在入口附近的冷空气中可见。艾玛开车送他来这里，他们的车程大部分是沉默的，两人都承受着决定的重量。

    索菲亚恢复得很好，现在在她的家庭工作室教学，艾玛每周三天协助她。艾玛的展览准备正在进行中，消耗着她剩余的时间。詹姆斯的项目不能延迟——资金、季节和当地向导的时间安排，都是固定的。

    "我们会找到回到彼此身边的路，"詹姆斯说，轻轻触摸她的脸颊。他的眼睛里混合着悲伤和确定性，让艾玛的心痛。

    艾玛点头，知道他们都需要追随各自的艺术旅程。"我会在这里，"我说，然后纠正自己。"不是确切地在这里。但创作。成长。当你回来时..."

    她没有完成这句话。他们都明白风险——一年的分离，每个人都沉浸在自己的世界，自己的挑战和胜利中。人会改变。感情会改变。但有些联系跨越时间和距离而持续。

    他们拥抱，谁都不想先放手。当他们最终分开时，詹姆斯背相机包，走向安检，回头挥了一次手。`,
    choices: ["分开，理解你们都将追随自己的道路，看看它们通向何方", "制定具体计划，尽管有距离也保持你们的联系"],
  },
  {
    id: 7,
    title: "独自旅程",
    image: "/imgs/chapter7.png?width=1536&height=1024",
    content: `詹姆斯离开后的十八个月对艾玛来说是一段强烈工作和个人成长的蒙太奇。她的个人展览超出预期，评论家称赞她"对城市孤独和连接的坦率而富有同情心的眼光"。索菲亚完全康复，成为艾玛在一个小但不断成长的为弱势青年提供的艺术教育项目中的商业伙伴。

    艾玛的日子模糊在一起——工作室时间、教学、与画廊代表和潜在捐赠者的会议。当灵感来临时，她通宵工作，有时在半成品画布旁睡着。她的风格演变，融入更大胆的颜色和更抽象的元素，同时保持她标志性的情感共鸣。

    与詹姆斯的沟通变得越来越零星。他们的视频通话，曾经每周一次，变成每月一次，然后偶尔一次。时差使安排变得困难，他们的对话变得更短，不那么亲密。艾玛发现自己分享的日常生活越来越少，而是专注于重大发展。詹姆斯的项目延长了六个月，他的照片获得了国际关注。

    在她三十一岁生日那天，艾玛独自坐在公寓里，盯着一幅半成品画布。索菲亚早些时候组织了一个小型庆祝活动，但现在，在安静的夜晚时分，艾玛强烈感受到詹姆斯的缺席。她已经三周没有收到他的消息了。

    她拿起手机，滚动到他的名字，然后再次放下。他们的道路已经分叉，正如他们知道可能会发生的那样。她回到画布前，调制一种新的蓝色阴影。`,
    choices: ["尽管距离越来越远，仍然联系詹姆斯", "接受你们的道路可能已经永久分叉"],
  },
  {
    id: 8,
    title: "回归",
    image: "/imgs/chapter8.png?width=1536&height=1024",
    content: `自艾玛旅程开始的那个雨天在咖啡馆以来，已经过去了五年。咖啡馆本身已经改变——现在更明亮，经过翻新，尽管仍然供应同样浓郁的咖啡。艾玛坐在角落的桌子旁，审阅她与索菲亚和其他几位艺术家一起推出的艺术教育基金会的计划。

    在三十四岁时，艾玛已经确立了自己作为艺术家和艺术教育倡导者的地位。她的作品挂在全球各地的画廊里，她的社区项目已经成为类似倡议的模范。她过着充实的生活，周围是分享她价值观的创意人士。

    门上的铃铛响了。艾玛本能地抬头看，然后僵住了。詹姆斯站在门口，年龄更大，被旅行风化，但仍然有着她记忆中的温暖眼睛。他带着一个皮革文件夹和看起来像是一本书的东西。

    他们的目光在房间里相遇。有一刻，两人都没有动。然后詹姆斯走向她的桌子。

    "我先去了你的工作室，"他说。"索菲亚告诉我可能在这里找到你。"

    艾玛示意对面的椅子。"已经很长时间了，"她说，声音比她预期的更稳定。

    詹姆斯坐下，将书放在他们之间的桌子上。"我想把这个给你，"他说。"它终于完成了。"

    艾玛低头看封面——一本他的照片与她在他们一起时的画作配对的集合。"平行视野，"标题写道。

    "你保留了我的作品，"她轻声说。

    "我一直随身携带。"他犹豫了。"我一直关注你的职业生涯，你的成功。我为你感到骄傲，艾玛。"

    当他们交谈时，几个小时不知不觉地过去了。詹姆斯讲述了他的旅行，他记录的社区，他目睹的环境变化。艾玛分享了她的学生的故事，她的基金会计划，她的艺术的演变。岁月的距离开始缩小，揭示了两个分开成长但也许并没有分开的人。`,
    choices: ["建议一起合作新项目", "分享他对离开和回归的感受"],
  },
  {
    id: 9,
    title: "新篇章",
    image: "/imgs/chapter9.png?width=1536&height=1024",
    content: `在詹姆斯回归一年后，艾玛站在他身旁，在一座翻新的旧学校建筑入口处。阳光透过大窗户流泻而入，照亮了这个充满画架、摄影设备和艺术用品的空间。一小群人聚集在这里，参加他们新社区艺术中心的剪彩仪式。

    通往这一刻的旅程并不简单。在咖啡馆重聚后，艾玛和詹姆斯谨慎地前进，重建他们的联系，同时尊重他们在分开期间各自成为的人。他们首先作为朋友和同事合作，结合艾玛的教育经验和詹姆斯的纪录片方法，创造沉浸式艺术项目。

    索菲亚现在拄着拐杖，但仍然充满创造力和活力，当艾玛向人群致辞时，她自豪地站在他们身旁。

    "当我迷失时，艺术拯救了我，"艾玛说。"当我不相信自己时，一位导师相信了我。今天，我们向任何寻找自己创意声音的人敞开这些门。"

    当詹姆斯剪断彩带时，欢呼声从聚集的支持者和将成为中心第一批学生的年轻艺术家中爆发。艾玛捕捉到索菲亚目光，在她导师的微笑中看到了他们走过的完整旅程的倒影。

    后来，当他们看着学生们探索工作室时，詹姆斯握住了艾玛的手。"我们分开的旅程将我们带到了这里，"他说。"这是我们任何一个人单独都无法创造的东西。"

    艾玛点头，理解他们分开的时间是必要的——让他们两人都能发展使这个新篇章成为可能的技能、视角和目的。他们的道路曾经分叉，只是为了以更大的意义再次汇合。`,
    choices: [],
  },
]

// Function to get chapters based on language
export function getChapters(language: string) {
  return language === "zh" ? zhChapters : enChapters
}
