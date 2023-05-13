import { useContext } from "react";
import { MailDataContext } from "../Contexts/MailDataContext";
import MailCard from "../Components/MailCard";
import FilterBox from "../Components/FilterBox";

function InboxPage() {
  const { inboxMails } = useContext(MailDataContext);

  const mailsMapped = inboxMails.map((mail) => (
    <MailCard mailData={mail} key={mail.mId} />
  ));

  return (
    <div className="center-container">
      <h1 className="page-title">Inbox Mails</h1>
      <FilterBox />
      <div className="email-list">{mailsMapped}</div>
    </div>
  );
}

export default InboxPage;
