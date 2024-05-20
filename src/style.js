import styled from "styled-components";

export const Header = styled.div`
  height: 50px;
`;

export const Footer = styled.div`
  height: 50px;
  margin-top: 20px;
`;

export const Button = styled.div`
  position: relative;
  height: max-content;
  overflow: hidden;
  color: white;
  background-color: blue;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  font-size: 12px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  float: right;

  &.header-btn {
    margin-top: 10px;
  }

  &.disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const BeneficiaryContainer = styled.div`
  width: 80%;
  padding: 0;
  margin: 0 auto;
  position: relative;
`;

export const BeneficiaryListWrapper = styled.div`
  display: block;
`;

export const BeneficiariesContainer = styled.div`
  text-align: left;
  width: 80%;
  margin: auto;

  &.add {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const InputContainer = styled.div`
  flex: 50%;
`;

export const BeneficiaryCardWrapper = styled.div`
  padding: 12px 8px;
  display: flex;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  &:first-child {
    border-top: 1px solid black;
  }
`;

export const CardContent = styled.div`
  width: 50%;

  &.header {
    font-weight: bold;
  }

  &.images-container {
    img {
      width: 18px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

export const ViewBeneficiaryWrapper = styled.div`
  display: block;
`;

export const AddEditBeneficiaryWrapper = styled.div`
  display: block;
`;

export const BeneficiaryContent = styled.div`
  display: flex;
`;

export const NoBenefeciaries = styled.span``;
