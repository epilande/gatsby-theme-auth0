import * as React from "react";
import { WindowLocation } from "@reach/router";
import AuthService from "../../auth/service";
import Callback from "../../components/callback";

interface Props {
  location: WindowLocation;
}

const CallbackPage: React.FunctionComponent<Props> = props => {
  const { location } = props;

  React.useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      AuthService.handleAuthentication();
    }
  }, []);

  return <Callback />;
};

export default CallbackPage;
