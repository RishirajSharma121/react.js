import React from 'react'

export default function Navbar(props) {
  return (
    
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor:'red',color:'White'}}>
    <a className="navbar-brand" href="https://www.youtube.com/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.flipkart.com/?ret=http%3A%2F%2Fwww.flipkart.com%2Fhome&cmpid=sem_3856208402_Mobiles_dsa_goog&gclid=CjwKCAjwvdajBhBEEiwAeMh1UxjeexrfmeKmZ9Ylr8gfva6DGxgIkI_7qvVugsS273xnWsKc3ZkB6xoCpsQQAvD_BwE">{props.title2}</a>    
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_2xqygdyg35_b&adgrpid=64411488208&hvpone=&hvptwo=&hvadid=617782552079&hvpos=&hvnetw=g&hvrand=15293686514819506563&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007808&hvtargid=kwd-307282366046&hydadcr=15414_2322999">Amazon home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.myntra.com/?utm_source=dms_google&utm_medium=searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK&gclid=CjwKCAjwvdajBhBEEiwAeMh1U2ZBXTVfFE0YuTHTl-vQpSgtmrJ4DoJLXQhsxo0NUwHwHg0Mb0GD7hoC5bsQAvD_BwE">myntra home</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

