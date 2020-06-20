import React, {useEffect} from 'react';
import './App.css';

function Registry() {
  useEffect(() => {
    const registryDiv = document.getElementById('registry');
    const script = document.createElement('script');
  
    script.id="script_myregistry_giftlist_iframe";
    script.src = "//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=3BOcn5y28ahn_IaHvMH44A2&v=2";
    script.async = true;
  
    registryDiv.appendChild(script);
  
    return () => {
      registryDiv.removeChild(script);
    }
  }, []);

  return (
    <div>
      <img src="https://i.imgur.com/HkPmbb1.jpg" className="header-image" alt="engagement" />
      <div className="section">
        <h2 className="content-title center dark-blue">Registry</h2>
        <div className="center dark-blue">
          View our registries below.
          <p>
            We have curated items from&nbsp;
            <a href="https://registry.thebay.com/registry/view-registry/josue-and-shanice">Hudson's Bay</a>,&nbsp;
            <a href="https://www.chapters.indigo.ca/en-ca/list/find?ln=McSavaney&fn=Shanice&id=2730507&type=reglinkshare">Indigo</a>,&nbsp;and&nbsp; 
            <a href="https://www.amazon.ca/wedding/share/josue-and-shanice">Amazon</a>.
          </p>
        </div>
      </div>
      <div id="registry" className="section">
      </div>
    </div>
  );
}

export default Registry;
