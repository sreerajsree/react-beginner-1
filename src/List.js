import React from "react";
import ListFooter from './ListFooter'
import "./List.css";

function List(props) {

  const {
    title,
    message,
    isActive,
    onDelete,
    onLabelClick
  } = props;

  
  return (
    <div className="list">
      <div className="list-header">{title}</div>
      <div className="list-delete" onClick={onDelete}>Delete</div>
      <div className="list-content">
        <p>
          {message}
        </p>
      </div>
      <ListFooter isActive={isActive} onAction={onLabelClick} />
    </div>
  );
}

export default List;
