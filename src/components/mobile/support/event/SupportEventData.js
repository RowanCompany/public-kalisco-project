import React from "react";

import image1 from "../../../../static/images/img-event-new-1.jpg";
import image2 from "../../../../static/images/img-event-new-2.jpg";
import image3 from "../../../../static/images/img-event-new-3.jpg";
import image4 from "../../../../static/images/img-saboten-event-1.jpg";
import image5 from "../../../../static/images/img-hibarin-event-1.jpg";
import image6 from "../../../../static/images/img-event-new-6.jpg";
import image7 from "../../../../static/images/img-event-new-7.jpg";
import image8 from "../../../../static/images/img-event-new-8.jpg";
import image9 from "../../../../static/images/img-event-new-9.jpg";
import image10 from "../../../../static/images/img-event-new-10.jpg";

export default function SupportEventData(type, id) {
  // (type);
  // console.log(id);

  const EventPanelData = [
    {
      id: 1,
      title: "캘리스코 통합 홈페이지 Grand OPEN",
      createdAt: "2020-10-14",
      image: image10,
      description: <></>,
      type: "kalisco",
    },
    {
      id: 2,
      title: "사보텐 카플친 채널 오픈",
      createdAt: "2020-10-14",
      image: image1,
      description: <></>,
      type: "saboten",
    },
    {
      id: 3,
      title: "사보텐 소스가 리뉴얼되었어요!",
      image: image2,
      createdAt: "2020-10-14",
      type: "saboten",
      description: (
        <>
          사보텐은 소스 하나도 그냥 만들지 않습니다. ⠀
          <br />
          <br />
          조금 더 풍부하게, 조금 더 맛있게.
          <br />
          음식에 대한 좋은 집요함이 맛의 차이를 만들어냅니다.
          <br />
          <br />⠀ 돈카츠 no.1 정석 소스, 돈카츠소스
          <br />
          진하고 고소한 맛이 일품인, 참깨소스
          <br />
          상큼하고 입안을 개운하게, 유자소스
          <br />
          쉐프들의 만능치트키, 일식덮밥소스
          <br />
          <br />
          <br />
          셰프의 비법을 담아 정성스레 만든
          <br />
          사보텐만의 4종 소스, 곧 여러분을 찾아갑니다.
        </>
      ),
    },
    {
      id: 4,
      title: "사보텐 20주년 기념! 스토어팜 입점",
      image: image3,
      createdAt: "2020-10-14",
      description: (
        <>
          맛을 아는 사람들은
          <br />
          사보텐 소스를 선택합니다.
          <br />
          <br />
          사보텐이 만들고 쉐프가 추천하는
          <br />
          사보텐 4종을 지금 바로 만나보세요!
          <br />
          <br />
          카카오톡 채널 추가하고,
          <br />
          사보텐 톡스토어으로 GO GO ✨
          <br />
          더 쉽고 더 빠르게 만나실 수 있어요!
          <br />
          <br />
          ✔️돈카츠 no.1 정석 소스, 돈카츠소스
          <br />
          ✔️진하고 고소한 맛이 일품인, 참깨소스
          <br />
          ✔️상큼하고 입안을 개운하게, 유자소스
          <br />
          ✔️쉐프들의 만능치트키! 일식덮밥소스
          <br />
          <br />
          <br />
          단 하나라도,
          <br />
          더욱 꼼꼼하게. 더욱 특별하게.
          <br />
          맛의 정석 사보텐이 만듭니다. ⠀
          <br />
          <br />
          💚네이버 스토어팜에서 만나보세요💚
        </>
      ),
      type: "saboten",
    },
    {
      id: 5,
      title: "NEW! 사보텐 일식덮밥소스 출시",
      createdAt: "2020-10-14",
      image: image4,
      description: (
        <>
          매장에서 즐기던 맛 그대로-
          <br />
          사보텐 소스로 쉽게 만드는 일식덮밥 레시피! 🍚🥢
          <br />
          <br />
          조금 색다른 한 끼가 필요하다면,
          <br />
          🍴 좀 더 정갈한 한 상을 차려내고 싶다면!
          <br />
          <br />⠀ 오늘 저녁 메뉴는
          <br />
          짭쪼름하고 달큰한 일식덮밥
          <br />
          어떠세요?👨🏻‍🍳 ⠀ ⠀
          <br />
          <br />
          🧡재료🧡
          <br />
          밥, 양파, 계란, 대파 썰은 것, 참깨, 일식덮밥소스, 불고기 ⠀
          <br />
          <br />
          🧡만들기🧡
          <br />
          1. 불고기를 먼저 프라이팬에 익힌 다음,
          <br />
          양파와 2:1로 섞은 일식덮밥 소스와 푼 계란을 넣고 1분간 끓인다.
          <br />
          <br />
          2. 밥 위에 올려서 먹는다. ☺️
          <br />
          #사보텐이_알려주는_레시피
          <br />
          #사보텐_일식덮밥소스
        </>
      ),
      type: "saboten",
    },
    {
      id: 6,
      type: "hibarin",
      title: "히바린 카플친 채널 오픈",
      createdAt: "2020-10-14",
      image: image5,
      description: (
        <>
          더욱 더 가까이 소통하기위해,
          <br />
          카카오톡 플러스친구 채널을 오픈하였어요!
          <br />
          <br />
          히바린과 친구 하시면 다양한 혜택이 가득가득!
          <br />
          인스타그램 이벤트도 준비했으니, 꼭 참여하세요 :)
          <br />
          <br />
          ✔ 기간: 9/14~9/21
          <br />
          ✔ 발표: 9/23(금)
          <br />
          ✔ 경품: 히바린의 다양한 메뉴를 맛볼 쿠폰 증정
          <br />
          ✔ 참여방법: 플러스친구에 '히바린' 검색, 친구추가 후 주변에 공유와 댓글
          참여하면 완료!
          <br />
          <br />
          히바린과 건강한 한끼 함께하세요😘
          <br />
          <br />
          #히바린 #돈카츠 #돈까스 #돈카츠맛집 #외식 #신메뉴 #연인 #데이트 #주말
          #데일리 #일식 #정식 #저녁식사 #국내브랜드 #이벤트 #카츠카페 #플레이트
          #카츠 #누들 #샐러드 #이벤트 #플러스친구 #오픈이벤트 #쿠폰
        </>
      ),
    },
    {
      id: 7,
      type: "hibarin",
      title: "히바린 스타필드안성점 GRAND OPEN",
      createdAt: "2020-10-14",
      image: image6,
      description: (
        <>
          히바린과 카톡 플친만 맺어도,
          <br />
          이 모든 선물이 쏟아진다구?🎉🎉
          <br />
          <br />
          바로 받을 수 있는 풍성한 선물들!
          <br />
          지금 바로 만나보세요 🎁
          <br />
          <br />
          🧡베스트샘플러 / 베스트 라이스 or 누들
          <br />
          주문시, 한정판 유자소스 무료
          <br />
          <br />
          🧡베스트샘플러 주문 시,
          <br />
          찍먹카레+곁들임반찬 무료
          <br />
          <br />
          🧡3만 5천원 이상 주문 시,
          <br />
          모던카츠동 무료 증정
          <br />
          <br />
          🧡돈마호크 주문 시,
          <br />
          해물쿵파오누들 무료 증정
        </>
      ),
    },
    {
      id: 8,
      type: "tacobell",
      title: "더욱 새로워진 벨데이 프로모션!",
      createdAt: "2020-10-14",
      image: image7,
      description: (
        <>
          두둥🔥 더-욱 푸짐하게 업그레이드 된 벨데이🌮💜
          <br />
          늦었다고 생각할 땐 진짜 늦음ㅋ 놓치면
          후회한데이!😎
          <br />
          <br />
          ✔신촌, 여의도, 압구정, 광화문, 건대스타시티,
          역삼, 강남구청
          <br />
          (여의도, 광화문 지점은 14시부터 적용됩니다.)
          <br />
          <br />
          #타코벨 #타코 #브리또 #크런치랩 #빅벨박스
          #나초수프림 #맥주 #벨데이 #맛집 #인스타맛집
          #타코맛집 #tacobell #taco #burrito #crunchwrap #bigbellbox
          #nachos #beer #bellday #weekly #everyday #value #JMT
        </>
      ),
    },
    {
      id: 9,
      type: "tacobell",
      title: "매주 화요일에 만나는 벨튜즈데이 혜택",
      createdAt: "2020-10-14",
      image: image8,
      description: (
        <>
          🍁🍂Autumn! 화요일에는 타코벨 어떰?
          <br />
          단짠단짠 끝판왕👑 오직 화요일 2~5PM에만❗❗
          <br />
          🧀🥔치즈포테이토➡ 2,000원
          <br />
          <br />
          #타코벨 #타코 #치즈포테이토 #화요일 #벨튜스데이
          #공항및배곧점제외 #tacobell #taco #cheesy #potato
          #cheesypotato #belltuesday #value
        </>
      ),
    },
    {
      id: 10,
      type: "centralkitchen",
      title: "가성비 넘치는 세트메뉴 출시!",
      createdAt: "2020-10-14",
      image: image9,
      description: (
        <>
          가성비&가심비 모두 잡은👨🏻 🍳
          <br />
          더 센트럴 키친 세트메뉴 출시🍳 ⠀<br />
          <br />
          ✔ 혼자서 즐기는 센트럴 메뉴들과
          <br />
          둘이 함께 즐기는 커플 메뉴까지! ⠀<br />
          <br />
          더운 여름, 속이 시원하게 풀리는 냉면과
          <br />
          제육맥적구이의 매력적인 조합🥓 ⠀<br />
          <br />
          어딜가나 든든하게!🐟🐟
          <br />
          해물 순두부찌개와 자반고등어구이 ⠀<br />
          <br />
          해장의 대가, 황태콩나물과
          <br />
          에그스팸후라이의 만남까지!🍳 ⠀<br />
          <br />
          이 모든게 센트럴에만 있다구요 (진지) ⠀<br />
          <br />
          둘이 즐기는 커플 짜파맥 세트엔,
          <br />
          짜장면에 사뿐히 올라간 돈카츠와
          <br />
          꾸덕한 베이컨크림파스타까지
          <br />
          만나보실 수 있어요🥰🍻
          <br />
          (시원한 제주맥주도 함께!)⠀
          <br />
          <br />
          <br />
          <br />⠀ ✔
          <br />
          더 센트럴 키친 by Kalisco는
          <br />
          다이어티션(Dietician)과 셰프가 매주 새로운 메뉴를 제안합니다.
          <br />
          편안한공간에서 식사부터 디저트까지 빠르고 편리하게 –
          <br />
          즐거운 맛의 신세계로 여러분을 초대합니다. ⠀<br />
          <br />
          <br />⠀ ✔ 더센트럴키친의 운영시간 : 오전 7시부터 오후 9시까지!
          <br />
          (** 일요일은 오전 10시에 문을 열어요🌟)
          <br />
          ✔ 다이어티션(Dietician)과 셰프가 매주 새로운 메뉴를 제안합니다.
          <br />
          ✔ Breakfast . Lunch . Dinner
          <br />
          ✔ Take out
          <br />
          ✔ 맞춤 건강식 · 다이어트 식단 프로그램 ⠀<br />
          <br />
          <br />⠀ 🌟 더센트럴키친 매장에 전화걸기 02 .535 .0528
          <br />
          🏠 서울 고속버스터미널 본관 1층 (경부선)
          <br />
          Seoul Express Bus Terminal Main Building 1F (Gyeongbu Line)
        </>
      ),
    },
  ];

  let SearchEventPanelData = [];
  for (let i = 0; i < EventPanelData.length; i++) {
    if (type !== "") {
      if (type === EventPanelData[i].type) {
        SearchEventPanelData.push(EventPanelData[i]);
      } else if (type === "all") {
        SearchEventPanelData.push(EventPanelData[i]);
      }
    } else {
      if (id === EventPanelData[i].id) {
        SearchEventPanelData.push(EventPanelData[i]);
      }
    }
  }

  return SearchEventPanelData;
}
