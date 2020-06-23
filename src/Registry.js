import React, { useEffect } from "react";
import "./App.css";

function Registry() {
  useEffect(() => {
    const registryDiv = document.getElementById("registry");
    const script = document.createElement("script");

    script.id = "script_myregistry_giftlist_iframe";
    script.src =
      "//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=3BOcn5y28ahn_IaHvMH44A2&v=2";
    script.async = true;

    registryDiv.appendChild(script);

    return () => {
      registryDiv.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="section">
        <h2 className="content-title center dark-blue">Registry</h2>
        <div className="center dark-blue">
          <p>
            Recent world events have made us extremely thankful to be able to be
            with all our family and friends, if we are able. Celebrating with
            you on our special day is the only gift we need! For our guests who
            would like to commemorate our wedding with a gift, we’ve created a
            registry with the items we’d find the most useful as we prepare for
            married life! You can view the items on our registry below, or
            at&nbsp;
            <a href="https://registry.thebay.com/registry/view-registry/josue-and-shanice">
              Hudson's Bay
            </a>
            ,&nbsp;
            <a href="https://www.chapters.indigo.ca/en-ca/list/find?ln=McSavaney&fn=Shanice&id=2730507&type=reglinkshare">
              Indigo
            </a>
            ,&nbsp;and&nbsp;
            <a href="https://www.amazon.ca/wedding/share/josue-and-shanice">
              Amazon
            </a>
            .
          </p>
        </div>
      </div>
      <div id="registry" className="section"></div>
    </div>
  );
}

export default Registry;
