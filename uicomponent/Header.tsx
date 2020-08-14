import React, { Component } from "react";
import "../component/Util.css";
import capsitech from "../images/capsitech.png";
import BellIcon from "react-bell-icon";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import * as ReactIcons from "@fluentui/react-icons";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import {
  IPersonaSharedProps,
  Persona,
  PersonaInitialsColor,
  PersonaSize,
} from "office-ui-fabric-react/lib/Persona";
import { Stack } from "office-ui-fabric-react/lib/Stack";

initializeIcons(/* optional base url */);

class Header extends Component {
  render() {
    return (
      <div className="topheader">
        <h3></h3>
        <img
          src={capsitech}
          alt="Logo"
          style={{
            height: 50,
            float: "left",
            marginLeft: -26,
            width: 206,
            marginTop: -40,
          }}
        />

        <BellIcon
          width="40"
          active={true}
          animate={true}
          color={"white"}
          style={{
            float: "right",
            marginTop: -30,
            marginRight: -260,
            height: 25,
          }}
          onClick
        />
        <Icon
          iconName="settings"
          style={{
            height: 200,
            width: 100,
            color: "white",
            float: "right",
            marginRight: -330,
            marginTop: -25,
          }}
        />
         <div style ={{float: 'right', marginRight: -400, marginTop: -30, }}>
         <PersonaInitialsExample />
         </div>
       
</div>
    );
  }
}

const examplePersona: IPersonaSharedProps = {
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
  };
  
  const personaWithInitials: IPersonaSharedProps = {
    ...examplePersona,
    text: 'Maor Sharett',
    imageInitials: 'MS',
  };

export const PersonaInitialsExample: React.FunctionComponent = () => {
    return (
      <Stack tokens={{ childrenGap: 10 }}>
  
        <Persona {...examplePersona} text = "GM" size={PersonaSize.size32}  initialsColor={PersonaInitialsColor.darkGreen}/>
  
      </Stack>
    );
  };

export default Header;
