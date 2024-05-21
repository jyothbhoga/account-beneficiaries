import React, { memo, useEffect, useState } from "react";
import {
  AddEditBeneficiaryWrapper,
  BeneficiariesContainer,
  BeneficiaryContainer,
  Button,
  Footer,
  Header,
  InputContainer,
  ValidationMsg,
} from "../../style";
import { connect } from "react-redux";
import {
  addEditBeneficiary,
  fetchBeneficiaries,
  showPopup,
  showToast,
} from "../../redux/action";
import config from "../../common/config";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../../common/Popup";

const AddEditBeneficiary = memo((props) => {
  const {
    addEditBeneficiary,
    fetchBeneficiaries,
    beneficiariesData,
    showToast,
    showPopup,
  } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const isEdit = location.pathname.includes(config.enumStaticUrls.edit);

  const [details, setDetails] = useState({
    name: "",
    bankName: "",
    accountNumber: "",
    accountType: "",
    id: "",
  });

  const beneficiaryId = location.pathname.split("/")[2];

  const [isValidated, setValidated] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const fetchAndSetDetails = async () => {
        let currBenefT;

        if (!beneficiariesData?.data?.length) {
          const beneficiaries = await fetchBeneficiaries();
          currBenefT = beneficiaries?.payload?.find(
            (elem) => elem.id === Number(beneficiaryId)
          );
        } else {
          currBenefT = beneficiariesData.data.find(
            (elem) => elem.id === Number(beneficiaryId)
          );
        }

        if (currBenefT) {
          const { name, bankName, accountNumber, accountType, id } = currBenefT;
          setDetails({ name, bankName, accountNumber, accountType, id });
        }
      };

      fetchAndSetDetails();
    } else {
      const newId =
        beneficiariesData.data.length > 0
          ? beneficiariesData.data[beneficiariesData.data.length - 1].id + 1
          : 1;
      setDetails((prev) => ({
        ...prev,
        id: newId,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      details.name.length > config.enumValidationChar &&
      details.bankName.length > config.enumValidationChar &&
      details.accountType.length > config.enumValidationChar &&
      details.accountNumber.length > config.enumValidationChar
    ) {
      setValidated(true);
    } else setValidated(false);
  }, [details]);

  const handleChange = (e, field) => {
    setDetails({
      ...details,
      [field]:
        field === "accountNumber"
          ? e.target.value.replace(/\D/g, "")
          : e.target.value,
    });
  };

  const openConfirmationPopup = () => {
    showPopup({
      show: true,
      msg: `Are you sure you want to ${
        isEdit ? "edit" : "add"
      } this beneficiary?`,
      header: "Delete Beneficiary",
      action: onSubmit,
      primaryText: isEdit ? "Save" : "Add",
    });
  };

  const onSubmit = () => {
    const addedBeneficiary = addEditBeneficiary(details);
    if (addedBeneficiary) {
      showPopup({
        show: false,
        msg: "",
        header: "",
        action: null,
        primaryText: "",
      });
      navigate(`/${config.enumStaticUrls.home}`);
      showToast({
        msg: `Beneficiary ${isEdit ? "edited" : "added"} successfully`,
        show: true,
        id: "addedit",
      });
    }
  };

  return (
    <BeneficiaryContainer>
      <AddEditBeneficiaryWrapper>
        <Header>
          <Button
            className="header-btn left"
            onClick={() => navigate(`/${config.enumStaticUrls.home}`)}
          >
            Back
          </Button>
        </Header>
        <BeneficiariesContainer className="add">
          <InputContainer>
            <label>
              Name: <ValidationMsg>(Min 3 char)</ValidationMsg>
              <br />
              <input
                type="text"
                name="name"
                value={details.name}
                onChange={(e) => handleChange(e, "name")}
                disabled={isEdit}
              />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              Bank Name: <ValidationMsg>(Min 3 char)</ValidationMsg>
              <br />
              <input
                type="text"
                name="bank-name"
                value={details.bankName}
                onChange={(e) => handleChange(e, "bankName")}
              />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              Account Number: <ValidationMsg>(Min 3 char)</ValidationMsg>
              <br />
              <input
                type="text"
                name="account-number"
                value={details.accountNumber}
                onChange={(e) => handleChange(e, "accountNumber")}
              />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              Select Account Type:{" "}
              <ValidationMsg>(Select any one)</ValidationMsg>
              <br />
              <select
                onChange={(e) => handleChange(e, "accountType")}
                value={details.accountType}
                disabled={isEdit}
              >
                {config.enumAccountTypes.map((acc) => (
                  <option key={acc.value} value={acc.value}>
                    {acc.text}
                  </option>
                ))}
              </select>
            </label>
          </InputContainer>
          <Footer>
            <Button
              className={isValidated ? "" : "disabled"}
              onClick={openConfirmationPopup}
            >
              Save Beneficiary
            </Button>
          </Footer>
        </BeneficiariesContainer>
      </AddEditBeneficiaryWrapper>
      <Popup />
    </BeneficiaryContainer>
  );
});

const mapStateToProps = (state) => {
  return {
    beneficiariesData: state.appReducer.beneficiariesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEditBeneficiary: (payload) => dispatch(addEditBeneficiary(payload)),
    fetchBeneficiaries: (payload) => dispatch(fetchBeneficiaries(payload)),
    showToast: (payload) => dispatch(showToast(payload)),
    showPopup: (payload) => dispatch(showPopup(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditBeneficiary);