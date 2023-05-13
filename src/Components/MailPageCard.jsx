/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTrashAlt,
  faUndo,
  faThumbsUp,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MailDataContext } from "../Contexts/MailDataContext";
import { ACTION_TYPES } from "../utils/actionTypes";

function MailPageCard({ data }) {
  const navigate = useNavigate();
  const { dispatch, trashMails, spamMails } = useContext(MailDataContext);

  const delBtn = trashMails.find((mail) => mail.mId === data.mId) ? (
    <button
      className="btn-del"
      onClick={() =>
        dispatch({ type: ACTION_TYPES.RMV_FRM_TRASH, payload: data })
      }
    >
      <FontAwesomeIcon icon={faUndo} /> Recover Mail
    </button>
  ) : (
    <button
      className="btn-del"
      onClick={() => dispatch({ type: ACTION_TYPES.DEL_MAIL, payload: data })}
    >
      <FontAwesomeIcon icon={faTrashAlt} /> Delete Mail
    </button>
  );

  const spamBtn = spamMails.find((mail) => mail.mId === data.mId) ? (
    <button
      className="btn-spam"
      onClick={() =>
        dispatch({ type: ACTION_TYPES.RMV_FRM_SPAM, payload: data })
      }
    >
      <FontAwesomeIcon icon={faThumbsUp} /> Not Spam
    </button>
  ) : (
    <button
      className="btn-spam"
      onClick={() =>
        dispatch({ type: ACTION_TYPES.ADD_TO_SPAM, payload: data })
      }
    >
      <FontAwesomeIcon icon={faBan} /> Report as Spam
    </button>
  );

  return (
    <div className="mail-display-card">
      <h1 className="page-subheading">Subject: {data.subject}</h1>
      <div className="button-row">
        <button className="btn-go-back" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} /> Go Back
        </button>
        <div className="icon-buttons">
          {delBtn} {spamBtn}
        </div>
      </div>
      <div className="mail-display-content">{data.content}</div>
    </div>
  );
}

export default MailPageCard;
