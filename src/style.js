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
  height: 100vh;
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
  text-align: center;
  margin-bottom: 20px;
`;

export const NoBenefeciaries = styled.span``;
export const PopupHeader = styled.div`
  height: 75px;
  font-size: 28px;
  font-weight: bold;
`;
export const PopupBody = styled.div`
  min-height: 100px;
`;
export const PopupFooter = styled.div`
  height: 75px;

  display: flex;
  justify-content: center;

  .popup-btn {
    margin: auto 20px;
  }
`;
export const PopupContainer = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  padding: 20px;
  position: absolute;
  height: 250px;
  top: 50%;
  left: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;

  &.off {
    opacity: 0;
    visibility: hidden;
    filter: blur(8px);
    transform: scale(0.33);
    box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.2);
  }
`;
