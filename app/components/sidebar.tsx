import React, { useState } from "react";
import socialMediaData from "../data/socialData.json";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";
import {
  TbSquareArrowRightFilled,
  TbSquareArrowLeftFilled,
} from "react-icons/tb";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className="fixed hidden sm:flex flex-col wyzy h-full justify-center max-w-full  text-white p-5 gap-y-5">
        <Link href={socialMediaData.linkedin} target="_blank">
          <FaDiscord className="hover:text-[#ff0000] transition-all hover:scale-125 duration-500 w-[200%] h-[200%]" />
        </Link>

      </div>
      <div className="fixed sm:hidden flex flex-col h-full justify-end max-w-full text-white p-5 gap-y-5">
        {sidebar ? (
          <div className="text-4xl" onClick={() => setSidebar(!sidebar)}>
            <TbSquareArrowRightFilled />
          </div>
        ) : (
          <div
            className={` transition-transform duration-300 sm:translate-x-0 flex flex-col`}
          >
            <div className="flex flex-col gap-y-2 rounded-xl text-xl">
            <Link href={socialMediaData.linkedin} target="_blank">
              <FaDiscord className="hover:text-[#ff0000] transition-all hover:scale-125 duration-500 w-[200%] h-[200%]" />
            </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
