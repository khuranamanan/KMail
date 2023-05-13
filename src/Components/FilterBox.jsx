import { useContext } from "react";
import { MailDataContext } from "../Contexts/MailDataContext";
import { ACTION_TYPES } from "../utils/actionTypes";

/* eslint-disable react/prop-types */

function FilterBox() {
  const { filterUnread, filterStarred, dispatch } = useContext(MailDataContext);

  const handleFilterUnreadChange = (event) => {
    const isChecked = event.target.checked;
    dispatch({ type: ACTION_TYPES.TOGGLE_FILTER_UNREAD, payload: isChecked });
  };

  const handleFilterStarredChange = (event) => {
    const isChecked = event.target.checked;
    dispatch({ type: ACTION_TYPES.TOGGLE_FILTER_STARRED, payload: isChecked });
  };

  return (
    <div className="filter-box-container">
      <label>
        <input
          type="checkbox"
          checked={filterUnread}
          onChange={handleFilterUnreadChange}
        />{" "}
        Show Unread Mails
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterStarred}
          onChange={handleFilterStarredChange}
        />{" "}
        Show Starred Mails
      </label>
    </div>
  );
}

export default FilterBox;
