import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    width: 100%;
    padding: 0px;
    border-bottom: 1px solid #d9deda;
    margin-bottom: 21px;
    padding-bottom 7px;
`;

export const SelectView = styled.div`
    width: 50%;
    padding: 0px;
`;

export const TitleContainer = styled.a`
    width: 50%;
    padding-top: 10px;
    font-weight: bold;
    font-size: 20px;
    color: black;
`;

export const ResultContainer = styled.div`
    max-width: 960px;
    width: 100%;
    padding: 0px;
`;