import React, { memo, useEffect } from "react";
import {
  Button,
  BeneficiaryContainer,
  BeneficiaryListWrapper,
  Header,
} from "../../style";
import BeneficiariesList from "./BeneficiariesList";
import { connect } from "react-redux";
import { fetchBeneficiaries, showToast } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import config from "../../common/config";
import toast, { Toaster } from "react-hot-toast";
import Popup from "../../common/Popup";

const ManageBeneficiaries = memo((props) => {
  const {
    fetchBeneficiaries,
    beneficiariesData,
    objToast,
    showToast,
    objPopup,
  } = props;
  useEffect(() => {
    !beneficiariesData?.data?.length && fetchBeneficiaries();
    console.log(beneficiariesData.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (objToast.show) {
      toast.success(objToast.msg);
      showToast({ msg: "", show: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objToast]);

  return (
    <BeneficiaryContainer>
      <Header>
        <Button
          className="header-btn"
          onClick={() => navigate(`/${config.enumStaticUrls.add}`)}
        >
          Add Beneficiaries
        </Button>
      </Header>
      <BeneficiaryListWrapper>
        <BeneficiariesList />
      </BeneficiaryListWrapper>
      <Toaster />
      {objPopup.show ? <Popup /> : null}
    </BeneficiaryContainer>
  );
});

const mapStateToProps = (state) => {
  return {
    beneficiariesData: state.appReducer.beneficiariesData,
    objToast: state.appReducer.objToast,
    objPopup: state.appReducer.objPopup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeneficiaries: (payload) => dispatch(fetchBeneficiaries(payload)),
    showToast: (payload) => dispatch(showToast(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBeneficiaries);
