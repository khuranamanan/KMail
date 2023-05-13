/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as filledStar,
  faTrashAlt,
  faBan,
  faUndo,
  faThumbsUp,
  faEnvelopeOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as unfilledStar } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { MailDataContext } from "../Contexts/MailDataContext";
import { ACTION_TYPES } from "../utils/actionTypes";
import { useNavigate } from "react-router";
import Tippy from "@tippyjs/react";

function MailCard({ mailData, isTrashPage = false, isSpamPage = false }) {
  const { dispatch } = useContext(MailDataContext);
  const navigate = useNavigate();

  const delBtn = isTrashPage ? (
    <Tippy content="Recover Mail">
      <button
        className="btn-del"
        onClick={() =>
          dispatch({ type: ACTION_TYPES.RMV_FRM_TRASH, payload: mailData })
        }
      >
        <FontAwesomeIcon icon={faUndo} />
      </button>
    </Tippy>
  ) : (
    <Tippy content="Delete Mail">
      <button
        className="btn-del"
        onClick={() =>
          dispatch({ type: ACTION_TYPES.DEL_MAIL, payload: mailData })
        }
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </Tippy>
  );

  const spamBtn = isSpamPage ? (
    <Tippy content="Not Spam">
      <button
        className="btn-spam"
        onClick={() =>
          dispatch({ type: ACTION_TYPES.RMV_FRM_SPAM, payload: mailData })
        }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    </Tippy>
  ) : (
    <Tippy content="Report as Spam">
      <button
        className="btn-spam"
        onClick={() =>
          dispatch({ type: ACTION_TYPES.ADD_TO_SPAM, payload: mailData })
        }
      >
        <FontAwesomeIcon icon={faBan} />
      </button>
    </Tippy>
  );

  return (
    <div
      className={
        mailData.unread ? "mail-card unreadMail" : "mail-card readMail"
      }
      key={mailData.mId}
    >
      <div className="icon-container">
        <Tippy content={mailData.isStarred ? "Starred" : "Not Starred"}>
          <FontAwesomeIcon
            icon={mailData.isStarred ? filledStar : unfilledStar}
            className="icon-star"
            onClick={() =>
              dispatch({ type: ACTION_TYPES.TOGGLE_STAR, payload: mailData })
            }
          />
        </Tippy>
      </div>

      <div
        className="mail-main"
        onClick={() => {
          navigate(`/email/${mailData.mId}`, { state: mailData });
          mailData.unread &&
            dispatch({ type: ACTION_TYPES.TOGGLE_UNREAD, payload: mailData });
        }}
      >
        <h2 className="mail-sub"> {mailData.subject} </h2>
        <p className="mail-content"> {mailData.content} </p>
      </div>

      <div className="mail-buttons">
        {delBtn}
        {!isTrashPage && spamBtn}
        <Tippy content={mailData.unread ? "Mark as Read" : "Mark as Unread"}>
          <button
            className="btn-read-toggle"
            onClick={() =>
              dispatch({ type: ACTION_TYPES.TOGGLE_UNREAD, payload: mailData })
            }
          >
            {mailData.unread ? (
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            ) : (
              <FontAwesomeIcon icon={faEnvelope} />
            )}
          </button>
        </Tippy>
      </div>
    </div>
  );
}

export default MailCard;
