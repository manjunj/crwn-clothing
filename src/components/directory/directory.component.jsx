import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'
import {connect} from "react-redux"
import { selectDirectory} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

 const Directory = ({directory}) =>
    (<div className = 'directory-menu'> 
        {directory.sections.map(({id,...otherInfo}) => {
            return <MenuItem key={id} {...otherInfo}/>;
        })};
    </div>)

const mapStatetoProps = createStructuredSelector(
    {directory : selectDirectory}
)


export default (connect)(mapStatetoProps)(Directory); 