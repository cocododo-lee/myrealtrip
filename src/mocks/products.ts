import { ProductProps } from "../types/product";
import prodThumnail1 from '../assets/images/img_product_ex.webp'
import prodThumnail2 from '../assets/images/img_product_ex2.webp'
import prodThumnail3 from '../assets/images/img_product_ex3.webp'
import prodThumnail4 from '../assets/images/img_product_ex4.webp'

export const PRODUCT_LIST_R:ProductProps[]=[
    {
      linkTo:"https://www.naver.com",
      title:"[10월 27일까지만, 단독 특가★] 롯데월드 어드벤처 종합&파크이용권",
      imgUrl:prodThumnail1,
      bookmark : false,
      // bookmarkStyle:'productType',
      imgAlt:'',
      badgeStyle:'badgeRound',
      badgeText : '즉시확정',
      category:'티켓',
      city:'서울',
      reviewer : 10,
      discount : 10000,
      total : 8000,
      unit : '1인',
    },{
      linkTo:"https://www.daum.com",
      title:"[특가★] 롯데월드타워 전망대 서울스카이 입장권 ",
      imgUrl:prodThumnail2,
      bookmark : false,
      // bookmarkStyle:'productType',
      imgAlt:'',
      category:'티켓',
      city:'서울',
      badgeStyle:'badgeRound',
      badgeText : '즉시확정',
      reviewer : 999,
      discount : 100000,
      total : 8000,
      unit : '1인',
    },{
      linkTo:"https://www.myrealtrip.com/",
      title:"[특가★] 서울 롯데월드 아쿠아리움 입장권  ",
      imgUrl:prodThumnail3,
      bookmark : false,
      // bookmarkStyle:'productType',
      imgAlt:'',
      category:'티켓',
      city:'서울',
      badgeStyle:'badgeRound',
      badgeText : '즉시확정',
      reviewer : 999,
      discount : 100000,
      total : 8000,
      unit : '1인',
    },{
      linkTo:"https://www.everland.com/gateway",
      title:"[용인] 에버랜드 오후이용권 (방문날짜지정) (~10/31)",
      imgUrl:prodThumnail4,
      bookmark : false,
      // bookmarkStyle:'productType',
      imgAlt:'',
      category:'티켓',
      city:'경기도',
      badgeStyle:'badgeRound',
      badgeText:'즉시확정',
      reviewer : 999,
      discount : 100000,
      total : 8000,
      unit : '1인',
    }
  ]