import React from "react";
import { Link } from "react-router-dom";

// TODO: Type 추가?
export default [
  {
    question: "캘리스코는 어떤 기업인가요?",
    description:
      "일상 속 특별한 맛과 멋을 제공하는 ‘맛을 아는 사람들’ 캘리스코는 20여 년간 외식 분야에서 풍부한 경험과 노하우를 쌓아온 식문화 선도기업입니다.",
  },
  {
    question: "캘리스코는 어떤 브랜드를 운영하고 있나요?",
    description:
      "50년 정통 프리미엄 돈카츠 브랜드 ‘사보텐’, 카츠&라운지 ‘히바린’, 멕시칸 푸드 ‘타코벨’, 모던 한식 브랜드 ‘반주’,\n다이어티션과 셰프가 제안하는 신개념 다이닝카페 ‘더센트럴키친’ 등 5개 브랜드를 운영하고 있습니다.",
  },
  {
    question: "입점 제안 및 가맹문의는 어떻게 하나요?",
    description:
      "아래 메일로 문의 주시면 담당자가 순차적으로 검토 후, 친절하게 안내 드리겠습니다.\n" +
      "\n" +
      "* 입점제안 및 가맹문의 : llimun@kalisco.co.kr",
  },
  {
    question: "Easy to cook(편의식)제품에 대한 문의는 어떻게 하나요?",
    description:
      "아래 메일로 문의 주시면 담당자가 순차적으로 확인 후, 친절하게 안내 드리겠습니다.\n" +
      "\n" +
      "* Easy to cook(편의식) 상품구입 및 특판문의 : kipal.cha@kalisco.co.kr",
  },
  {
    question: "상품구입 및 특판 관련 문의는 어떻게 하나요?",
    description:
      "아래 메일로 문의 주시면 담당자가 순차적으로 확인 후, 친절하게 안내 드리겠습니다.\n" +
      "\n" +
      "* Easy to cook(편의식) 상품구입 및 특판문의 : kipal.cha@kalisco.co.kr",
  },
  {
    question: "마케팅 제안 및 문의는 어떻게 하나요?",
    description:
      "아래 메일로 문의 주시면 담당자가 순차적으로 확인 후, 친절하게 안내 드리겠습니다.\n" +
      "\n" +
      "* 마케팅 및 제휴 관련 제안 : dakyung.lee@kalisco.co.kr",
  },
  {
    question: "매장을 이용하면서 불편함을 느껴 건의를 하고싶어요.",
    description:
      "먼저 고객님께서 느끼신 불편함에 대해 사과의 말씀을 드립니다.\n" +
      "캘리스코는 고객님의 의견에 경청하고 시정될 수 있도록 최선을 다하겠습니다.\n" +
      "불편하시겠지만 홈페이지 내, 고객소통 또는 아래 고객센터로 문의주시면 빠르게 응답하겠습니다.\n" +
      "\n" +
      "캘리스코 통합 고객센터 : 070-4846-8215\n" +
      "(운영시간 : 평일 09:00 ~ 18시, 공휴일 휴무)",
  },
  {
    question: "매장을 이용하면서 감동을 받아 칭찬을 하고싶어요.",
    description: (
      <>
        홈페이지 내, 고객소통 페이지를 통하여 칭찬해주시면 감사드리겠습니다.
        <br />
        더욱 맛있고 친절한 모습으로 고객님 곁에 있겠습니다 :)
        <br />
        <br />
        <Link to="/contact" className="kalisco-text">
          > 고객소통 바로가기(링크삽입)
        </Link>
      </>
    ),
  },
  {
    question: "캘리스코에 지원하고싶어요.",
    description: (
      <>
        캘리스코와 함께 성장하는 전문가를 꿈꾸시는군요! :)
        <br />
        홈페이지 내, Recruit 페이지를 들어가시면 입사지원이 가능합니다.
        <br />
        <br />
        <Link to="/recruit" className="kalisco-text">
          &gt; 입사지원 바로가기
        </Link>
      </>
    ),
  },
];
