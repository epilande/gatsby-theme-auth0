import * as React from "react";
import { WindowLocation } from "@reach/router";
import AuthService from "../../auth/service";
import Callback from "../../components/callback";
import { SessionContext } from "../../components/SessionProvider";
import { navigate } from "gatsby";
import { User } from "../../auth/user";

interface Props {
  location: WindowLocation;
}

const CallbackPage: React.FunctionComponent<Props> = props => {
  const { location } = props;

  const session = React.useContext(SessionContext);

  React.useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      AuthService.handleAuthentication().then((user: User) => {
        session.setUser(user);
        const postLoginUrl = localStorage.getItem("postLoginUrl");
        localStorage.removeItem("postLoginUrl");
        navigate(postLoginUrl || "/");
      });
    }
  }, []);

  return <Callback />;
};

export default CallbackPage;
