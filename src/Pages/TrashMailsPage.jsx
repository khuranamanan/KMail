import { useContext } from "react";
import { MailDataContext } from "../Contexts/MailDataContext";
import MailCard from "../Components/MailCard";

function TrashMailsPage() {
  const { trashMails } = useContext(MailDataContext);

  const mailsMapped = trashMails.length ? (
    trashMails.map((mail) => (
      <MailCard mailData={mail} key={mail.mId} isTrashPage />
    ))
  ) : (
    <div>No Mails in Trash</div>
  );

  return (
    <div className="center-container">
      <h1 className="page-title">Trash Mails</h1>
      <div className="email-list">{mailsMapped}</div>
    </div>
  );
}

export default TrashMailsPage;
