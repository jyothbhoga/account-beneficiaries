import React, { memo } from "react";
import { BeneficiaryCardWrapper, CardContent } from "../../style";
import { useNavigate } from "react-router-dom";
import config from "../../common/config";
import { deleteBeneficiary, showToast } from "../../redux/action";
import { connect } from "react-redux";

const BeneficiaryCard = memo((props) => {
  const { data, isHeader } = props;
  const navigate = useNavigate();
  const { deleteBeneficiary, showToast } = props;

  const onDeleteBen = () => {
    deleteBeneficiary(data.id);
    showToast({
      msg: "Beneficiary Deleted successfully",
      show: true,
      id: "delete",
    });
  };

  return (
    <BeneficiaryCardWrapper>
      {isHeader ? (
        <>
          <CardContent>Beneficiary Name</CardContent>
          <CardContent className="images-container">Actions</CardContent>
        </>
      ) : (
        <>
          <CardContent>{data.name}</CardContent>
          <CardContent className="images-container">
            <img
              className="img"
              alt="view"
              src="/assets/images/view.svg"
              onClick={() =>
                navigate(`/${config.enumStaticUrls.view}/${data.id}`)
              }
            />
            <img
              className="img"
              alt="edit"
              src="/assets/images/edit.svg"
              onClick={() =>
                navigate(`/${config.enumStaticUrls.edit}/${data.id}`)
              }
            />
            <img
              className="img"
              alt="delete"
              src="/assets/images/delete.svg"
              onClick={onDeleteBen}
            />
          </CardContent>
        </>
      )}
    </BeneficiaryCardWrapper>
  );
});

const mapStateToProps = (state) => {
  return {
    beneficiariesData: state.appReducer.beneficiariesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBeneficiary: (payload) => dispatch(deleteBeneficiary(payload)),
    showToast: (payload) => dispatch(showToast(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryCard);
