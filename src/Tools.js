import React from 'react';
import './Tools.css'

class Tools extends React.Component{

   render(){

    const {
        children,
        onAction,
        labelValue
    } = this.props;

    const onlyChild = React.Children.only(children);
    const count =React.Children.count(onlyChild.props.children)

    return (
        <div>
            <div className='tools-header'>
                <select value={labelValue} onChange={onAction} name="status">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="not-active">Not Active</option>
                </select>
            </div>
            {children}
            <div className='tools-footer'>
                Total {count} Items
            </div>
        </div>
        
    );
   }
}

export default Tools;