import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const Loader = () => {
  const [ip, setIp] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    // Fetch the IP address
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIp(data.ip);
        
        // Fetch full country name based on IP
        const countryResponse = await fetch(`https://ipapi.co/${data.ip}/country_name/`);
        const countryData = await countryResponse.text();
        setCountry(countryData);
      } catch (error) {
        console.error("Error fetching IP and country:", error);
      }
    };

    fetchIp();
  }, []);

  const strings = [
    `Welcome to my website, <span style="color: red;">${ip}</span> `,
    `Nice to meet someone from <span style="color: red;">${country}</span> :)`
  ];

  return (
    <div className="text-white">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
          wrapperClassName: "typewriter-wrapper",
          cursorClassName: "typewriter-cursor",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(strings[0])
            .pauseFor(2000)
            .deleteAll()
            .typeString(strings[1])
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default Loader;
