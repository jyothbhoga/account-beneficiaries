import React, { memo, Suspense } from "react";
import {
  Routes as Switch,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import ManageBeneficiaries from "../ManageBeneficiaries";
import config from "../../common/config";
import ViewBenificiary from "../ViewBeneficiary/index.js";
import AddEditBeneficiary from "../AddEditBeneficiary.js/index.js";

const Routes = memo((props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route
            path={config.enumStaticUrls.home}
            element={<ManageBeneficiaries />}
          />
          <Route
            path={config.enumStaticUrls.add}
            element={<AddEditBeneficiary />}
          />
          <Route
            path={`/${config.enumStaticUrls.edit}/:id/`}
            element={<AddEditBeneficiary />}
          />
          <Route
            path={`/${config.enumStaticUrls.view}/:id/`}
            element={<ViewBenificiary />}
          />
          <Route
            path="*"
            element={<Navigate to={`/${config.enumStaticUrls.home}`} />}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
});

export default Routes;
