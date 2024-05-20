import {
  OBJ_ADD_EDIT_BENEFICIARY,
  OBJ_DELETE_BENEFICIARY,
  OBJ_FETCH_BENEFICIARIES,
  SHOW_TOAST,
  TOGGLE_LOGIN_POPUP,
} from "../types";
import beneficiaries from "../../mockData/benefeciaries.json";

export const fetchBeneficiaries = () => {
  return {
    type: OBJ_FETCH_BENEFICIARIES.SUCCESS,
    payload: beneficiaries,
  };
};

export const addEditBeneficiary = (payload) => {
  return {
    type: OBJ_ADD_EDIT_BENEFICIARY.SUCCESS,
    payload: payload,
  };
};

export const deleteBeneficiary = (payload) => {
  return {
    type: OBJ_DELETE_BENEFICIARY.SUCCESS,
    payload: payload,
  };
};

export const toggleLoginPopup = (payload) => {
  return {
    type: TOGGLE_LOGIN_POPUP,
    payload: payload,
  };
};

export const showToast = (payload) => {
  return {
    type: SHOW_TOAST,
    payload: payload,
  };
};
