import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Actions = () => {
  const { state } = useContext(AppContext);
  const { notifications } = state;
  const notificationsNumber = notifications.length;

  return (
    <div className="center__icons">
      <i className="fas fa-user-plus"></i>
      <i className="far fa-envelope"></i>
      <div className="notification" data-count={notificationsNumber}>
        <i className="far fa-bell"></i>
      </div>
    </div>
  );
};

export default Actions;
