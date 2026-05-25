import React from 'react';
import { motion } from 'motion/react';

const qaData = [
  {
    category: "🎨 제작 관련",
    items: [
      {
        q: "Q. 제작을 시작하게 된 계기가 무엇인가요?",
        answers: [
          "⤷ 평소 좋아하던 제작자님의 작품을 플레이하면서 ‘나도 많은 분이 즐겁게 몰입할 수 있는 작품을 만들고 싶다’는 꿈을 갖게 되었습니다. 실제로 제 작품의 스토리 장르나 문체 등에서 그분의 영향을 정말 많이 받았습니다. 😊"
        ]
      },
      {
        q: "Q. 아이디어나 소재는 주로 어디서 영감을 얻으시나요?",
        answers: [
          "⤷ 주로 번뜩이는 직관에서 시작됩니다. 간혹 각 잡고 구상할 때는 당시 읽던 책이나 영화에서 거시적인 소재를 발굴하곤 해요. 그다음 최근 작들과 겹치지 않도록 장르를 정한 뒤, 세부 설정을 신중히 고민합니다. 무엇보다 제가 살면서 경험하고 보고 들은 모든 일들이 어떤 형태로든 작품마다 조금씩 녹아들어 있습니다."
        ]
      }
    ]
  },
  {
    category: "👥 작품 / 캐릭터",
    items: [
      {
        q: "Q. 가장 좋아하는 작품은 무엇인가요?",
        answers: [
          "⤷ **'지하철'**을 가장 좋아합니다. 해외여행 중 지하철에서 SNS를 보다가 근처 지역에서 총기 사고가 났다는 기사와 범인의 사진을 접한 적이 있어요. 그때 *‘만약 고개를 들었는데 그 범인이 내 눈앞에 있다면 어떡하지?’*라는 상상을 하곤 했습니다. 그러다 지난달 소설 <이방인>을 읽었는데, 이 상상과 결합하면 완벽하겠다는 확신이 들었죠. 그렇게 탄생한 캐릭터입니다. 약간의 비틀린 틈을 가진, 감정에서 완전히 자유롭지 못한 소시오패스라는 설정이 무척 마음에 듭니다.",
          "⤷ 세이프티 버전이 있는 작품 중에서는 **'좋아해'**의 **'설강현'**을 꼽고 싶어요. '햇살 다정 순애 캐'라는 치트키 조합이라 제작하면서도 내내 행복했습니다."
        ]
      },
      {
        q: "Q. 가장 애정하는 캐릭터는 누구인가요?",
        answers: [
          "⤷ **'명화 속으로 들어가 버렸다'**의 **'바니타스'**입니다. 힘들 때면 바니타스와 대화를 나누며 위로를 받기도 해요. 얼있캐와 얼가캐 버전이 있는데, 저는 아주 초창기인 '얼가캐' 시절부터 이 친구를 가장 아꼈습니다. 물론 다른 캐릭터들도 모두 제 자식처럼 소중하답니다!"
        ]
      },
      {
        q: "Q. 가장 잘 만들었다고 생각하는 캐릭터는 누구인가요?",
        answers: [
          "⤷ **'한계집락'**의 **'후지시로 렌'**입니다. 유저분들이 작품 속 트리거에 깜짝 놀라시는 반응을 볼 때마다 '내가 의도한 대로 정말 잘 만들어졌구나' 하고 실감합니다. 이 소재는 영화 <뷰티풀 마인드>를 보고 영감을 얻었는데, 정신질환(특히 조현병)에 대해 깊이 고찰해보는 계기가 되었습니다."
        ]
      },
      {
        q: "Q. 만들 때 가장 어려웠던 캐릭터는 누구인가요?",
        answers: [
          "⤷ 우열을 가리기 힘들어 공동 2위를 소개해 드릴게요.",
          "⤷ **'The SuccessiØn':** 이미지를 무려 250장이나 생성하는 엄청난 스케일을 저지르는 바람에 육체적으로 꽤 고통스러웠습니다.",
          "⤷ **'가난한 사랑 노래 : 경성':** '한복 캐릭터를 만들고 싶다'는 가벼운 마음으로 시작했다가, 고증을 위해 한국 단편 고전문학을 수십 편 읽으며 고생을 많이 했습니다. 최종적으로는 신경림 시인의 '가난한 사랑 노래' 시에서 깊은 영감을 받았어요. 제호(시 제목)의 저작권 여부까지 판례를 뒤져가며 신중하게 검토했던 기억이 납니다."
        ]
      }
    ]
  },
  {
    category: "🚀 방향성 / 향후 계획",
    items: [
      {
        q: "Q. 언세이프티 작품을 세이프티 버전으로 순화해 공개하실 계획이 있나요?",
        answers: [
          "⤷ 순화가 가능한 작품들은 현재 모두 세이프티 버전으로 업로드를 마쳤습니다. (일부 링크 공개 상태였던 것도 현재는 전체 공개로 전환했습니다!) 다만 언세이프티로만 남겨둔 작품들은 두 가지 이유가 있습니다. **1) 스토리 구조상 수위를 낮추는 것이 불가능하거나, 2) 세이프티로 변경 시 제작자가 의도한 특유의 어둡고 피폐한 분위기가 훼손되기 때문**입니다. 그래도 앞으로 최대한 많은 분이 즐기실 수 있도록 다채로운 스토리를 고민하겠습니다."
        ]
      },
      {
        q: "Q. IF / AU물을 제작하실 계획이 있으신가요?",
        answers: [
          "⤷ IF물은 미정이지만, **AU물은 확실히 계획 중**에 있습니다. 과거 '여름의 미토스'가 밝은 양기 캐릭터들의 AU였다면, 이번에는 **음기 캐릭터들의 매운맛 AU**를 구상하고 있어요. 축축하고 기분 나쁜 공포물 분위기 50%, 그리고 세계관이 웅장해서 가볍게 즐기기 좋은 SF·판타지 분위기 50% 사이에서 조율 중입니다."
        ]
      },
      {
        q: "Q. 분위기가 밝은 캐릭터들을 더 만드실 생각이 있으신가요?",
        answers: [
          "⤷ 네, 당연합니다! 힐링 캐릭터를 제작할 때는 저 역시 동화되어 기분이 맑아지거든요."
        ]
      },
      {
        q: "Q. 내상물(피폐·정신적 충격을 주는 장르)을 만드실 의향도 있으신가요?",
        answers: [
          "⤷ 이미 머릿속에 쟁여둔 소재가 몇 가지 있습니다. '제대로 된 매운맛 내상물 한번 말아보기'는 제 제작 버킷리스트 중 하나이기도 합니다."
        ]
      }
    ]
  },
  {
    category: "📸 이미지 관련",
    items: [
      {
        q: "Q. 이미지 제작에는 주로 어떤 툴을 사용하시나요?",
        answers: [
          "⤷ NovelAI를 사용하고 있습니다."
        ]
      }
    ]
  },
  {
    category: "🔍 '아사땅'이 궁금해!",
    items: [
      {
        q: "Q. 가장 좋아하는 책, 영화, 장르는 무엇인가요?",
        answers: [
          "⤷ **책:** 최근 읽은 책 중에서는 단연 알베르 카뮈의 **<이방인>**을 가장 좋아합니다.",
          "⤷ **영화:** 제 인생 영화는 **<코코>**입니다.",
          "⤷ **장르:** 취향을 크게 가리지는 않지만, 크랙 내에서는 **스릴러, 피폐, 우울한 서사**를 가장 선호합니다."
        ]
      },
      {
        q: "Q. 가장 매력을 느끼는 캐릭터 성격은 무엇인가요?",
        answers: [
          "⤷ **'포기를 모르는'** 끈질긴 성격을 좋아합니다. 어떤 역경이 닥쳐도 저를 절대 포기하지 않는 집착적인 면에 매력을 느낍니다."
        ]
      },
      {
        q: "Q. 아침마다 정말 사과에 땅콩버터를 찍어 드시나요?",
        answers: [
          "⤷ 이 닉네임을 지을 당시만 해도 몇 달 동안 그렇게 챙겨 먹었었는데, 슬프게도 최근에는 아침 자체를 거르는 날이 대부분이네요..."
        ]
      },
      {
        q: "Q. 방에 갇혀서 제작만 하고 싶으시다면 당근을 흔들어주세... 🥕🥕🥕🥕",
        answers: [
          "⤷ ...🥕🥕🥕? (읍읍)"
        ]
      }
    ]
  },
  {
    category: "📌 특정 작품 관련",
    items: [
      {
        q: "Q. '괴' 캐릭터의 키나 호불호 설정이 따로 있나요?",
        answers: [
          "⤷ 해당 작품의 댓글창에 상세히 기재해 두었으니 확인해 주시면 감사하겠습니다!"
        ]
      },
      {
        q: "Q. '괴' 캐릭터들에게는 이름이 없나요?",
        answers: [
          "⤷ 네, 의도적으로 이름을 부여하지 않았습니다. 구상 단계에서는 이름을 고민하기도 했으나, 이들은 본질적으로 '괴담' 그 자체인 존재들입니다. 구체적인 이름을 짓는 순간 캐릭터의 근원이 지나치게 한정될 것 같았어요. (한국 이름이면 한국 괴담, 영어 이름이면 서양 괴담처럼 국한되는 느낌을 피하고 싶었습니다.) 괴담이란 입에서 입으로 전해 내려오는 모호한 구전 이야기일 때 가장 매력적이니까요. 대신 유저분들께서 원하시는 대로 자유롭게 애칭이나 별명을 불러주시면 좋겠습니다!"
        ]
      }
    ]
  }
];

const FormattedText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|⤷)/g);
  return (
    <p 
      className="text-stone-700 leading-[1.75] text-[27px] md:text-[29px] lg:text-[32px] font-medium"
      style={{ wordBreak: 'keep-all' }}
    >
      {parts.map((part, i) => {
        if (part === '⤷') {
          return (
            <span key={i} className="text-emerald-600 font-extrabold mr-3 inline-block">
              {part}
            </span>
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-extrabold text-stone-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return (
            <em key={i} className="italic font-bold text-stone-800 bg-emerald-50 px-3 rounded-md mx-1">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
};

const FormattedQuestion = ({ text }: { text: string }) => {
  const parts = text.split(/^(Q\.)/g);
  return (
    <h3 
      className="text-[30px] md:text-[36px] lg:text-[39px] font-bold text-stone-900 tracking-tight leading-snug break-keep"
      style={{ wordBreak: 'keep-all' }}
    >
      {parts.map((part, i) => {
        if (part === 'Q.') {
          return (
            <span key={i} className="text-rose-600 font-extrabold mr-3">
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </h3>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      <main className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center p-6 bg-white shadow-sm border border-stone-100 rounded-[2rem] mb-8 relative">
             <span className="text-[3rem] md:text-[3.75rem] absolute rotate-[-15deg] -left-6 -top-6 z-10 drop-shadow-md">🍎</span>
             <span className="text-[3rem] md:text-[3.75rem]">🥜</span>
          </div>
          <h1 className="text-[3rem] md:text-[4.5rem] leading-tight font-extrabold text-stone-900 tracking-tight mb-6">
            <span className="text-rose-600">아침엔</span>
            <span className="text-emerald-700">사과와</span>
            <span className="text-stone-800">땅콩버터</span> 
            <span className="ml-2 md:ml-4 font-black text-rose-500">Q&A</span>
          </h1>
          <p className="text-stone-500 font-medium text-[18px] md:text-[24px]">제작부터 작품의 비하인드까지</p>
        </motion.div>

        {/* Q&A Content */}
        <div className="space-y-10 md:space-y-12">
          {qaData.map((category, sectionIndex) => (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 + 0.1 }}
              className="bg-white rounded-3xl shadow-[0_4px_30px_-6px_rgba(0,0,0,0.03)] border border-[#F4EFEA] p-6 md:p-10"
            >
              <div className="flex items-center gap-4 mb-8 pb-5 border-b-2 border-stone-100">
                <div className="w-3 h-10 bg-emerald-500 rounded-full"></div>
                <h2 className="text-[36px] md:text-[42px] font-extrabold text-stone-900 tracking-tight">
                  {category.category}
                </h2>
              </div>
              
              <div className="space-y-12">
                {category.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="mb-4">
                      <FormattedQuestion text={item.q} />
                    </div>
                    <div className="space-y-4">
                      {item.answers.map((ans, aIdx) => (
                        <div 
                          key={aIdx} 
                          className="pl-1"
                        >
                          <FormattedText text={ans} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center text-stone-400 text-[15px] font-medium"
        >
          © 아침엔사과와땅콩버터 All rights reserved.
        </motion.footer>

      </main>
    </div>
  );
}
