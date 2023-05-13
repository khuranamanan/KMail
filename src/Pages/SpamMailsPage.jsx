import { useContext } from "react";
import { MailDataContext } from "../Contexts/MailDataContext";
import MailCard from "../Components/MailCard";

function SpamMailsPage() {
  const { spamMails } = useContext(MailDataContext);

  const mailsMapped = spamMails.length ? (
    spamMails.map((mail) => (
      <MailCard mailData={mail} key={mail.mId} isSpamPage />
    ))
  ) : (
    <div>No Mails in Spam</div>
  );

  return (
    <div className="center-container">
      <h1 className="page-title">Spam Mails</h1>
      <div className="email-list">{mailsMapped}</div>
    </div>
  );
}

export default SpamMailsPage;
