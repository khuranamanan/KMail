// import { useLocation } from "react-router";
import { useLocation } from "react-router-dom";

import MailPageCard from "../Components/MailPageCard";

function EmailPage() {
  const location = useLocation();

  console.log(location);

  const { state: mailToDisplay } = location;
  return (
    <div className="center-container mail-display-margin">
      <MailPageCard data={mailToDisplay} />
    </div>
  );
}

export default EmailPage;
