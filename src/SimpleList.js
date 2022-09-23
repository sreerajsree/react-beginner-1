import React from "react";
import List from "./List";

function SimpleList(props) {

  const {
    data,
    onAction,
    onLabelClick
  }  = props;

  return (
    <div>
      {data.map((obj) => {
        return (
          <List
            key={obj.title}
            title={obj.title}
            message={obj.message}
            isActive={obj.isActive}
            onLabelClick={onLabelClick}
            onDelete={() => {
              onAction(obj);
            }}
          />
        );
      })}
    </div>
  );
}
export default SimpleList;
