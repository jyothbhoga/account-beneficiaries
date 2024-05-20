import React, { memo, useEffect, useState } from "react";
import {
  AddEditBeneficiaryWrapper,
  BeneficiariesContainer,
  BeneficiaryContainer,
  Button,
  Footer,
  Header,
  InputContainer,
} from "../../style";
import { connect } from "react-redux";
import {
  addEditBeneficiary,
  fetchBeneficiaries,
  showToast,
} from "../../redux/action";
import config from "../../common/config";
import { useLocation, useNavigate } from "react-router-dom";

const AddEditBeneficiary = memo((props) => {
  const {
    addEditBeneficiary,
    fetchBeneficiaries,
    beneficiariesData,
    showToast,
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
      setDetails({ ...details, id: beneficiariesData.data.length + 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      details.name.length > 3 &&
      details.bankName.length > 3 &&
      details.accountType.length > 3 &&
      details.accountNumber.length > 3
    ) {
      setValidated(true);
    } else setValidated(false);
  }, [details]);

  const handleChange = (e, field) => {
    setDetails({ ...details, [field]: e.target.value });
  };

  const onSubmit = () => {
    const addedBeneficiary = addEditBeneficiary(details);
    if (addedBeneficiary) {
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
            className="header-btn"
            onClick={() => navigate(`/${config.enumStaticUrls.home}`)}
          >
            Manage Beneficiaries
          </Button>
        </Header>
        <BeneficiariesContainer className="add">
          <InputContainer>
            <label>
              Name:
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
              Bank Name:
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
              Account Number:
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
              Select Account Type:
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
              onClick={onSubmit}
            >
              Save Beneficiary
            </Button>
          </Footer>
        </BeneficiariesContainer>
      </AddEditBeneficiaryWrapper>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditBeneficiary);
