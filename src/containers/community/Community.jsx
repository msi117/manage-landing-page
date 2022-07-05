import React from "react";
import CTA from "../../components/cta/CTA";
import Review from "../../components/review/Review";
import ali from "../../data/images/avatar-ali.png";
import anisha from "../../data/images/avatar-anisha.png";
import richard from "../../data/images/avatar-richard.png";
import shanai from "../../data/images/avatar-shanai.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./community.css";

// @Todo
// Check with Swiper and revert back to git last commit

function Community() {
  const reviews = [
    {
      image: anisha,
      name: "Anisha Li",
      text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      image: ali,
      name: "Ali Bravo",
      text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      image: richard,
      name: "Richard Watts",
      text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    },
    {
      image: shanai,
      name: "Shanai Gough",
      text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];

  return (
    <div className="community" id="community">
      <h1>What they've said</h1>
      <div className="community__reviews">
        <Swiper
        slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1
            },

            760: {
              slidesPerView: 2,
            },

            1080: {
              slidesPerView: 3,
            }

          }}
        >
          {reviews.map((rev, index) => (
            <SwiperSlide key={index}>
              <Review data={rev} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <CTA text="Get Started" />
    </div>
  );
}

export default Community;
