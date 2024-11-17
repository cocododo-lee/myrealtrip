import { AutoCompleteProps } from "../types/autoComplete";

export const AUTO_COMPLETE_DATA:AutoCompleteProps[] = [
// export const AUTO_COMPLETE_DATA = [
    {   
        id:'a1',
        word : 'a',
        countries: true,
        countriesUrl : ''
    },
    {
        id:'a2',
        word : 'ab',
        countries: false,
        countriesUrl : ''
    },
    {
        id:'a3',
        word : 'abc',
        countries: false,
        countriesUrl : ''
    },
    {
        id:'a4',
        word : 'abcd',
        countries: false,
        countriesUrl : ''
    },
    {
        id:'b1',
        word : 'b',
        countries: false,
        countriesUrl : ''
    },
    {
        id:'b2',
        word : 'bc',
        countries: false,
        countriesUrl : ''
    },
    {
        id:'b3',
        word : 'bcd',
        countries: false,
        countriesUrl : ''
    },
    {
        id:'b4',
        word : 'bcde',
        countries: false,
        countriesUrl : ''
    },
    {
        id:'b5',
        word : 'bcdef',
        countries: false,
        countriesUrl : ''
    },
    // {
    //     word : 'ab',
    //     data : { 
    //         country : [
    //             'Algeria'
    //         ],
    //         recommend : [  // 타자 기준 영문으로 입력되었어도 한글로 치환 후 관련 한글 검색어 노출
    //             'apple', 
    //             'about',
    //             'ant',
    //         ]
    //     }
    // },
];