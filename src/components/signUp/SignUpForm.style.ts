import styled, { css } from 'styled-components'

//그룹 분류 select 박스
export const groupTypeBox = styled.div<{toggle:boolean}>`
    position: relative;
    width: 399px;
    height: 60px;
    border-radius: 11px;
    border: 2px solid ${props=>(props.toggle ? '#FF4A4A': '#303030')};
    padding: 21px 22px;
    
    &:hover{
        border: 2px solid ${props => props.theme.colors.red1};
    }

    // toggle이 true일 때 180도 회전
    &:after {
        content: '';
        position: absolute;
        top: 38%;
        right: 23px;
        width: 14px;
        height: 14px;
        background: url('/images/groupTypePolygon.svg') no-repeat center center;

        // toggle이 true일 때 180도 회전
        ${(props) =>
            props.toggle &&
            css`
                transform: rotate(180deg);
            `}
`;

//그룹 분류 select 박스
export const groupTypePolygon = styled.img<{toggle:boolean}>`
    //화살표 커스텀 
    background:url('/images/groupTypePolygon.svg') no-repeat right 23px center; //화살표 사진 가져오기
    background-size: 14px; //화살표 크기
`;

//그룹 분류 라벨
export const groupTypeLabel = styled.div`
    display: flex;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
`;

//그룹 분류 선택리스트 박스(option박스)
export const groupTypeUl = styled.ul<{toggle:boolean}>`
    width: 399px;
    height: 236px;
    border-radius: 11px;
    border: 2px solid ${props => props.theme.colors.red1};
    position: absolute;
    background: white;
    margin: 31px 0 0 -24px; //label기준으로 위치 조정
    cursor: pointer;
    display: ${props=>(props.toggle ? 'null': 'none')};
`;

//그룹 분류 option
export const groupTypeLi = styled.li`
    font-size: 15px;
    font-weight: 600;
    height: 58px;
    padding: 19px 25px;

    //마우스 닿으면 색변경
    &:hover{
        background: ${props => props.theme.colors.red4};
    }
`;

//그룹 분류 option(동아리)
export const groupTypeLiTop = styled(groupTypeLi)`
    border-radius: 9px 9px 0px 0px;
`;

//그룹 분류 option(기타)
export const groupTypeLiBottom = styled(groupTypeLi)`
    border-radius: 0px 0px 9px 9px;
`;

//회원가입 버튼
export const signUpBtn = styled.button`
    display: flex;
    margin-top: 60px;
    margin-bottom: 100px;
    border: none;
    color: white;
    font-size: 19px;
    font-weight: 700;
    width: 399px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: ${props => props.theme.colors.gray5};
`;
