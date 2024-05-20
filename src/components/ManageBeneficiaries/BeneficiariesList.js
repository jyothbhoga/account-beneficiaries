import React, { memo } from "react";
import { BeneficiariesContainer, NoBenefeciaries } from "../../style";
import BeneficiaryCard from "./BeneficiaryCard";
import { connect } from "react-redux";
import { fetchBeneficiaries } from "../../redux/action";

const BeneficiariesList = memo((props) => {
  const { beneficiariesData } = props;
  return (
    <BeneficiariesContainer>
      <BeneficiaryCard isHeader={true} />
      {beneficiariesData?.data?.length ? (
        beneficiariesData.data.map((ben) => {
          return <BeneficiaryCard data={ben} isHeader={false} key={ben.id} />;
        })
      ) : (
        <NoBenefeciaries>No benefeciaries added until now</NoBenefeciaries>
      )}
    </BeneficiariesContainer>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiariesList);
