/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { mails } from "../Data/data";
import { reducer } from "../Reducer/MailDataReducer";

export const MailDataContext = createContext();

function MailDataContextProvider({ children, data = mails }) {
  const [content, dispatch] = useReducer(reducer, {
    emails: data,
    trash: [],
    spam: [],
    filters: { unread: false, starred: false },
  });
  const {
    emails: mailData,
    trash: trashMails,
    spam: spamMails,
    filters: { unread: filterUnread, starred: filterStarred },
  } = content;

  let inboxMails = mailData;
  if (filterUnread) {
    inboxMails = mailData.filter(({ unread }) => unread);
  } else if (filterStarred) {
    inboxMails = mailData.filter(({ isStarred }) => isStarred);
  }

  // console.log(content);

  return (
    <MailDataContext.Provider
      value={{
        mailData,
        inboxMails,
        trashMails,
        spamMails,
        filterUnread,
        filterStarred,
        dispatch,
      }}
    >
      {children}
    </MailDataContext.Provider>
  );
}

export default MailDataContextProvider;
