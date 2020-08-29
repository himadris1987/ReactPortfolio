import React from "react";
import "./style.css";
import profile from "../../Assets/profile.jpg"


function Picture() {
    return (
        <div id="media">
            <img src={profile} className="mr-3" alt="my profile picture"/>
                <div className="media-body">
                    <h5 className="mt-0">Himadri Narayan Sinha</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
    )
}

export default Picture;