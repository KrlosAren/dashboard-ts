import React, {
  AriaAttributes,
  DetailedHTMLProps,
  DOMAttributes,
  HtmlHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useState,
} from "react";
import OptionsMenu from "./OptionsMenu";
import { ChannelProps, Menu } from "../../interfaces/index";
import AppContext from "../../context/AppContext";
import { randomColor } from "../../utils";

const MenuItem = ({ name }: Menu) => {
  const { state } = useContext(AppContext);
  const { channels } = state;
  const [options, setOptions] = useState(true);
  const toggleMenu = (e: React.MouseEvent) => {
    const name = (e.target as HTMLElement).getAttribute("data-menu");
    setOptions(!options);
  };

  return (
    <>
      <div className="menu__item">
        <h4>{name}</h4>
        {options ? (
          <i className="fas fa-chevron-down" onClick={toggleMenu}></i>
        ) : (
          <i
            className="fas fa-chevron-up"
            onClick={toggleMenu}
            data-menu={name}
          ></i>
        )}
      </div>
      {options === true ||
        (name === "Profile" && (
          <>
            <OptionsMenu setting={"Edit profile"} icon={"fas fa-user-edit"} />
            <OptionsMenu setting={"Security"} icon={"fas fa-lock"} />
          </>
        ))}
      {options === true ||
        (name === "Main" && (
          <>
            <OptionsMenu setting={"Settings"} icon={"fas fa-sliders-h"} />
            <OptionsMenu setting={"Banks"} icon={"fas fa-credit-card"} />
          </>
        ))}
      {options === true ||
        (name === "Tools" && (
          <>
            <OptionsMenu setting={"Call"} icon={"fas fa-phone-volume"} />
            <OptionsMenu setting={"Wifi"} icon={"fas fa-wifi"} />
          </>
        ))}
      {options === true ||
        (name === "Info" && (
          <>
            <OptionsMenu setting={"Help"} icon={"fas fa-question-circle"} />
          </>
        ))}
      {options === true ||
        (name === "Channels" && (
          <>
            {channels.map((channel: ChannelProps) => (
              <OptionsMenu
                setting={channel.channel}
                icon={"fas fa-circle"}
                color={randomColor()}
                key={channel.id}
              />
            ))}
          </>
        ))}
    </>
  );
};

export default MenuItem;
