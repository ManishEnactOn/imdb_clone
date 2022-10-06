import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as TwitchIcon } from "../assets/twitch.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer>
      <div className="space-y-8 py-5 bg-primary">
        <div className="socialIcon flex-center flex-wrap space-x-9">
          <SocialIcon icon={<FacebookIcon className="fill-white h-6 w-6" />} />
          <SocialIcon icon={<InstagramIcon className="fill-white h-6 w-6" />} />
          <SocialIcon icon={<TwitchIcon className="fill-white h-6 w-6" />} />
          <SocialIcon icon={<TwitterIcon className="fill-white h-6 w-6" />} />
          <SocialIcon icon={<YoutubeIcon className="fill-white h-6 w-6" />} />
        </div>
        <div className="space-y-2">
          <div className="flex-center space-x-5 text-white flex-wrap">
            <Link> Get the IMDb App </Link>
            <Link> Help </Link>
            <Link> Site Index</Link>
            <Link> IMDb Pro </Link>
            <Link> Box Office Mojo </Link>
            <Link> IMDb Developer </Link>
          </div>
          <div className="flex-center space-x-5 text-white flex-wrap">
            <Link> Condition Of Use </Link>
            <Link> Privacy Policy </Link>
          </div>
        </div>
        <h5 className="text-center text-white">
          an <b className="text-20">amazon</b> company
        </h5>
        <h5 className="text-center text-12 text-gray-50 font-semibold">&copy; 1990-2022 by IMDb.com, Inc </h5>
      </div>
    </footer>
  );
};

export default Footer;
