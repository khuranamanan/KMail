import { ACTION_TYPES } from "../utils/actionTypes";
import { toast } from "react-toastify";

export function reducer(content, action) {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_UNREAD: {
      const toastText = action.payload.unread
        ? "Marked as Read"
        : "Marked as Unread";
      toast.success(toastText, {
        theme: "light",
        autoClose: 2000,
      });
      return {
        ...content,
        emails: content.emails.map((mail) =>
          mail.mId === action.payload.mId
            ? { ...mail, unread: !mail.unread }
            : mail
        ),
      };
    }
    case ACTION_TYPES.TOGGLE_STAR: {
      const toastText = action.payload.isStarred
        ? "Marked as Not Starred"
        : "Marked as Starred";
      toast.success(toastText, { theme: "light", autoClose: 2000 });
      return {
        ...content,
        emails: content.emails.map((mail) =>
          mail.mId === action.payload.mId
            ? { ...mail, isStarred: !mail.isStarred }
            : mail
        ),
      };
    }
    case ACTION_TYPES.DEL_MAIL: {
      toast.success("Moved to Trash", { theme: "light", autoClose: 2000 });
      const emailToDelEmails = content.emails.find(
        (mail) => mail.mId === action.payload.mId
      );
      const emailToDelSpam = content.spam.find(
        (mail) => mail.mId === action.payload.mId
      );
      const filteredMails = emailToDelEmails
        ? content.emails.filter((mail) => mail.mId !== action.payload.mId)
        : content.spam.filter((mail) => mail.mId !== action.payload.mId);
      return {
        ...content,
        emails: emailToDelEmails ? filteredMails : content.emails,
        trash: [...content.trash, emailToDelEmails || emailToDelSpam],
        spam: emailToDelSpam ? filteredMails : content.spam,
      };
    }
    case ACTION_TYPES.RMV_FRM_TRASH: {
      toast.success("Mail Recovered", { theme: "light", autoClose: 2000 });
      const emailToRecover = content.trash.find(
        (mail) => mail.mId === action.payload.mId
      );
      const newList = [
        ...content.emails,
        emailToRecover ? emailToRecover : null,
      ].sort((a, b) => a.mId.slice(5) - b.mId.slice(5));
      return {
        ...content,
        emails: newList,
        trash: content.trash.filter((mail) => mail.mId !== action.payload.mId),
      };
    }
    case ACTION_TYPES.ADD_TO_SPAM: {
      toast.success("Moved to Spam", { theme: "light", autoClose: 2000 });
      const emailToAddInbox = content.emails.find(
        (mail) => mail.mId === action.payload.mId
      );
      const emailToAddTrash = content.trash.find(
        (mail) => mail.mId === action.payload.mId
      );
      const filteredMails = emailToAddInbox
        ? content.emails.filter((mail) => mail.mId !== action.payload.mId)
        : content.trash.filter((mail) => mail.mId !== action.payload.mId);
      return {
        ...content,
        emails: emailToAddInbox ? filteredMails : content.emails,
        spam: [...content.spam, emailToAddInbox || emailToAddTrash],
        trash: emailToAddTrash ? filteredMails : content.trash,
      };
    }
    case ACTION_TYPES.RMV_FRM_SPAM: {
      toast.success("Marked as Not Spam", { theme: "light", autoClose: 2000 });
      const emailToRecover = content.spam.find(
        (mail) => mail.mId === action.payload.mId
      );
      const newList = [
        ...content.emails,
        emailToRecover ? emailToRecover : null,
      ].sort((a, b) => a.mId.slice(5) - b.mId.slice(5));
      return {
        ...content,
        emails: newList,
        spam: content.spam.filter((mail) => mail.mId !== action.payload.mId),
      };
    }
    case ACTION_TYPES.TOGGLE_FILTER_UNREAD:
      return {
        ...content,
        filters: { ...content.filters, unread: action.payload },
      };
    case ACTION_TYPES.TOGGLE_FILTER_STARRED:
      return {
        ...content,
        filters: { ...content.filters, starred: action.payload },
      };
    default:
      return content;
  }
}
