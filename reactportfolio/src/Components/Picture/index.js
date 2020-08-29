import React from "react";
import Media from 'react-bootstrap/Media'
import "./style.css";
import profile from "../../Assets/profile.jpg"


function Picture() {
    return (

        <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src={profile}
                alt="profile"
            />
            <Media.Body>
                <h5>Media Heading</h5>
                <p>
                    My name is Himadri Narayan Sinha. I have a Bacehlor's of Science in Environmental Science and Policy from St. Edward's University
                    in Austin, TX. However, I have always been interested in full stack development for web applications and software, so I decided to attend
                    the University of California at Davis Full Stack Web Development Bootcamp. During this 6 month course, I have learned a lot and I've decided I'm insterted
                    in application development for video games and would love to proceed down this career path in the future.

                    In this portfolio page, that uses many React Elements, you will find some of the work I have completed as part of the bootcamp along with a contact
                    page, should you like to contact me.

                    I greatly appreciate you in taking the time to visit my page!
          </p>
            </Media.Body>
        </Media>

    );
}

export default Picture;