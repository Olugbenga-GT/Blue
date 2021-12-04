import React from "react";
import FlatCard from "../../components/flat-card/FlatCard";

import "./Notifications.scss";

const Notifications = ({ active }) => {
  return (
    <div className={`notifications  ${active ? "active" : null}`}>
      <FlatCard />
      <FlatCard />
      <FlatCard />
    </div>
  );
};

export default Notifications;
