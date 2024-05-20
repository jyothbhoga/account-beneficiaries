import React, { memo } from "react";
import { BeneficiaryCardWrapper, CardContent } from "../../style";
import { useNavigate } from "react-router-dom";
import config from "../../common/config";
import { deleteBeneficiary, showPopup, showToast } from "../../redux/action";
import { connect } from "react-redux";

const BeneficiaryCard = memo((props) => {
  const { data, isHeader } = props;
  const navigate = useNavigate();
  const { deleteBeneficiary, showToast, showPopup } = props;

  const openDeleteConfirmationPopup = () => {
    showPopup({
      show: true,
      msg: "Are you sure you want to delete this beneficiary?",
      header: "Delete Beneficiary",
      action: onDeleteBen,
      primaryText: "Yes",
    });
  };

  const onDeleteBen = () => {
    deleteBeneficiary(data.id);
    showToast({
      msg: "Beneficiary Deleted successfully",
      show: true,
      id: "delete",
    });
    showPopup({
      show: false,
      msg: "",
      header: "",
      action: null,
      primaryText: "",
    });
  };

  return (
    <BeneficiaryCardWrapper>
      {isHeader ? (
        <>
          <CardContent className="header">Beneficiary Name</CardContent>
          <CardContent className="header">Actions</CardContent>
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
              onClick={openDeleteConfirmationPopup}
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
    showPopup: (payload) => dispatch(showPopup(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryCard);
