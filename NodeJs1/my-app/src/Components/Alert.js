import React, { useContext } from "react";
import { AlertContext } from "../Context/alert/alertContex";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) {
    //ВЫШЕ ОБОЗНАЧЕНИЕ "ЕСЛИ ПАРАМЕТРО alert НЕТ, ТО...
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      {/* ВЫШЕ ПРИМЕР ОБРАТНЫХ КОВЫЧЕК ДОБАВЛЕННЫХ В ES6 И ГЛАВНОЕ ЭТО ${} */}
      <strong>Внимание</strong>
      {alert.text}
      <button
        onClick={hide}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
