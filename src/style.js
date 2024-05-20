import styled from "styled-components";

export const Header = styled.div`
  height: 50px;
  display: flex;
`;

export const Footer = styled.div`
  height: 50px;
`;

export const Button = styled.span`
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

  &.disabled {
    pointer-events: none;
    cursor: disabled;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const BeneficiaryContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const BeneficiaryListWrapper = styled.div`
  display: block;
`;

export const BeneficiariesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BeneficiaryCardWrapper = styled.div`
  padding: 12px 8px;
  display: flex;
`;

export const CardContent = styled.div`
  width: 40%;

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
