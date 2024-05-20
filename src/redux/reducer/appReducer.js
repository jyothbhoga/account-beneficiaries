import {
  OBJ_ADD_EDIT_BENEFICIARY,
  OBJ_FETCH_BENEFICIARIES,
  OBJ_DELETE_BENEFICIARY,
  SHOW_TOAST,
} from "../types";
const initialState = {
  beneficiariesData: {
    data: [],
  },
  objToast: {
    msg: "",
    show: false,
    id: "",
  },
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //Fetch Beneficiaries
    case OBJ_FETCH_BENEFICIARIES.SUCCESS: {
      const beneficiariesDataT = payload;

      return {
        ...state,
        ...state.beneficiariesData,
        beneficiariesData: {
          data: beneficiariesDataT,
        },
      };
    }

    //Edit Beneficiary
    case OBJ_ADD_EDIT_BENEFICIARY.SUCCESS: {
      const { beneficiariesData } = state;
      const beneficiariesArr = beneficiariesData.data;

      const index = beneficiariesArr.findIndex((obj) => obj.id === payload.id);

      if (index !== -1) {
        beneficiariesArr[index] = payload;
      } else {
        beneficiariesArr.push(payload);
      }

      return {
        ...state,
        beneficiariesData: {
          data: beneficiariesArr,
        },
      };
    }

    //Delete Beneficiary
    case OBJ_DELETE_BENEFICIARY.SUCCESS: {
      const { beneficiariesData } = state;
      const beneficiariesArr = beneficiariesData.data.filter(
        (obj) => obj.id !== payload
      );

      return {
        ...state,
        beneficiariesData: {
          data: beneficiariesArr,
        },
      };
    }

    //Show Toast msgs
    case SHOW_TOAST: {
      return {
        ...state,
        objToast: {
          msg: payload.msg,
          show: payload.show,
          id: payload.id,
        },
      };
    }

    default:
      return { ...state };
  }
};
export default appReducer;
