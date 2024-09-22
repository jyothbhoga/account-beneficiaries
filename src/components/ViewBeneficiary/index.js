import React, { memo, useEffect, useState } from "react";
import {
  BeneficiariesContainer,
  BeneficiariesDetailsContianer,
  BeneficiaryContent,
  BeneficiaryContentKey,
  Button,
  Header,
  ViewBeneficiaryWrapper,
} from "../../style";
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../common/config";
import { fetchBeneficiaries } from "../../redux/action";
import { connect } from "react-redux";

const ViewBenificiary = memo((props) => {
  const { beneficiariesData, fetchBeneficiaries } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const beneficiaryId = location.pathname.split("/")[2];

  const [currBeneficiary, setCurrBeneficiary] = useState(null);

  useEffect(() => {
    if (!beneficiariesData?.data?.length) {
      const beneficiaries = fetchBeneficiaries();
      const currBenefT = beneficiaries?.payload?.find(
        (elem) => elem.id === Number(beneficiaryId)
      );
      setCurrBeneficiary(currBenefT);
    } else {
      const currBenefT = beneficiariesData.data.find(
        (elem) => elem.id === Number(beneficiaryId)
      );
      setCurrBeneficiary(currBenefT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return currBeneficiary ? (
    <ViewBeneficiaryWrapper>
      <BeneficiariesContainer>
        <Header>
          <Button
            className="header-btn left"
            onClick={() => navigate(`/${config.enumStaticUrls.manage}`)}
          >
            Back
          </Button>
          <Button
            className="header-btn"
            onClick={() =>
              navigate(`/${config.enumStaticUrls.edit}/${beneficiaryId}`)
            }
          >
            Edit
          </Button>
        </Header>
        <BeneficiariesDetailsContianer>
          <BeneficiaryContent>
            <BeneficiaryContentKey>Name:</BeneficiaryContentKey>{" "}
            {currBeneficiary.name}
          </BeneficiaryContent>
          <BeneficiaryContent>
            <BeneficiaryContentKey>Bank Name:</BeneficiaryContentKey>{" "}
            {currBeneficiary.bankName}
          </BeneficiaryContent>
          <BeneficiaryContent>
            <BeneficiaryContentKey>Account Number:</BeneficiaryContentKey>{" "}
            {currBeneficiary.accountNumber}
          </BeneficiaryContent>
          <BeneficiaryContent>
            <BeneficiaryContentKey>Account Type:</BeneficiaryContentKey>{" "}
            {config.enumAccountMapping[currBeneficiary.accountType].text}
          </BeneficiaryContent>
        </BeneficiariesDetailsContianer>
      </BeneficiariesContainer>
    </ViewBeneficiaryWrapper>
  ) : null;
});
const mapStateToProps = (state) => {
  return {
    beneficiariesData: state.appReducer.beneficiariesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeneficiaries: (payload) => dispatch(fetchBeneficiaries(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBenificiary);
