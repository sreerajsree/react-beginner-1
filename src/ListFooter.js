import React from "react";

function ListFooter(props) {
  const style = props.isActive
    ? { background: "green" }
    : { background: "red" };
  return (
    <div className="list-footer">
      <span
        onClick={() => {
          props.onAction(props.isActive ? 'active' : 'not-active')
        }}
        style={style}
      >
        {props.isActive ? "Active" : "Not Active"}
      </span>
    </div>
  );
}

export default ListFooter;
