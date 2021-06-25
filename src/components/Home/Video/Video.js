import React from 'react';
import video from '../../../videos/video.mp4'
import { ReactVideo } from "reactjs-media";
import Fade from 'react-reveal/Fade';
import experience1 from '../../../images/experience1.jpg';

const Video = () => {
    return (
        <section className="video section">
            <h2 className="section__title text-center mt-5">Video Tour</h2>

            <div className="video__container container">
                <Fade left duration={2000} distance="60px">
                    <p className="video__description text-center mb-4">Find out more with our video of the most beautiful and
                        <br /> pleasant places for you and your family.
                    </p>
                </Fade>
                <Fade right duration={2000} distance="60px">
                    <div className="video__content">
                        <ReactVideo id="video-file"
                            poster={experience1}
                            src={video}
                            primaryColor="teal"
                        />
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Video;