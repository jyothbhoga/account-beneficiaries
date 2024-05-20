import React, { memo, useEffect, useState } from "react";
import {
  BeneficiariesContainer,
  BeneficiaryContainer,
  BeneficiaryContent,
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
    const findBeneficiary = (data) => {
      return data.find((elem) => elem.id === Number(beneficiaryId));
    };

    if (!beneficiariesData?.data?.length) {
      fetchBeneficiaries().then((response) => {
        const currBenefT = findBeneficiary(response?.payload || []);
        setCurrBeneficiary(currBenefT);
      });
    } else {
      const currBenefT = findBeneficiary(beneficiariesData.data);
      setCurrBeneficiary(currBenefT);
    }
  }, [beneficiaryId, beneficiariesData]);

  return currBeneficiary ? (
    <BeneficiaryContainer>
      <ViewBeneficiaryWrapper>
        <Header>
          <Button
            onClick={() =>
              navigate(`/${config.enumStaticUrls.edit}/${beneficiaryId}`)
            }
          >
            Edit
          </Button>
        </Header>
        <BeneficiariesContainer>
          <BeneficiaryContent>Name: {currBeneficiary.name}</BeneficiaryContent>
          <BeneficiaryContent>
            Bank Name: {currBeneficiary.bankName}
          </BeneficiaryContent>
          <BeneficiaryContent>
            Account Number: {currBeneficiary.accountNumber}
          </BeneficiaryContent>
          <BeneficiaryContent>
            Account Type: {currBeneficiary.accountType}
          </BeneficiaryContent>
          <BeneficiaryContent></BeneficiaryContent>
        </BeneficiariesContainer>
      </ViewBeneficiaryWrapper>
    </BeneficiaryContainer>
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
