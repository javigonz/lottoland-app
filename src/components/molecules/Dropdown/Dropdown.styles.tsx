import styled from 'styled-components';

export const DropDownSimple = styled.select`
    height: 40px;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #9BA89C;
    outline: none;
    font-size: 14px;
    line-height: 21px;
    color: #2F4C33;
    cursor: default;
    align-items: center;
    display: inline-block;
    text-indent: 0px;
    padding-left: 10px;
    margin-left: 10px;

    &:hover {
        border: 1px solid #2F4C33;
        cursor: pointer;
    }

    option {
        display: block;
        white-space; nowrap;
        padding: 0px 2px 1px;
        font-weight: 200;
        font-size: 12px;

        &:disabled {
            color: red;
        }
    }
`;

export default DropDownSimple;
