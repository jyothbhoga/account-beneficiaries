import React, { memo } from "react";
import { connect } from "react-redux";
import { showPopup } from "../../redux/action";
import {
  Button,
  PopupBody,
  PopupContainer,
  PopupFooter,
  PopupHeader,
} from "../../style";

const Popup = memo((props) => {
  const { showPopup, objPopup } = props;

  const closePopup = () => {
    showPopup({ show: false, msg: "", header: "", action: null });
  };

  if (!objPopup.show) return null;
  return (
    <PopupContainer>
      <PopupHeader>{objPopup.header} </PopupHeader>
      <PopupBody>{objPopup.msg} </PopupBody>
      <PopupFooter>
        <Button className="popup-btn" onClick={closePopup}>
          Cancel
        </Button>
        <Button className="popup-btn" onClick={objPopup.action}>
          {objPopup.primaryText}
        </Button>
      </PopupFooter>
    </PopupContainer>
  );
});
const mapStateToProps = (state) => {
  return {
    objPopup: state.appReducer.objPopup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopup: (payload) => dispatch(showPopup(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
