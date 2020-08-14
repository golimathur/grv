import React,{Component} from 'react';
import '../component/Util.css';
import capsitech from '../images/capsitech.png';
import BellIcon from 'react-bell-icon';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';


class Header extends Component{
    render(){

        return(
            <div className = "topheader">
                <h3></h3>
                <img src={capsitech} alt="Logo" style={{ height: 50, float: 'left',marginLeft: -26,width: 206, marginTop: -40}}/>
                <BellIcon width='40' active={true} animate={true} color={'white'} style={{ float:'right', marginTop:-30,marginRight:-260, height: 25}}/>
                <FontIcon iconName="SettingsIcon"  />
                </div>
                
        )
    }
}

export default Header;
