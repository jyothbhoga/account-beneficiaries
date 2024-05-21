const config = {};
config.BASE_DOMAIN = "/";
config.IMG_BASE = "/assets/images/";

config.enumValidationChar = 2;
config.enumStaticUrls = {
  home: "manage",
  view: "view",
  edit: "edit",
  add: "add",
};

config.enumAccountTypes = [
  { text: "Select Account", value: "" },
  { text: "Savings Account", value: "savings" },
  { text: "Current Account", value: "current" },
  { text: "Recurring Deposit Account", value: "rec-dep" },
  { text: "Fixed Deposit Account", value: "fix-dep" },
];

config.enumAccountMapping = {
  savings: {
    text: "Savings Account",
  },
  current: {
    text: "Current Account",
  },
  "rec-dep": {
    text: "Recurring Deposit Account",
  },
  "fix-dep": {
    text: "Fixed Deposit Account",
  },
};

export default config;
