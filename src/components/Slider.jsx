import React from "react";
import { Container, Grid, Typography, Paper, Avatar, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const clients = [
  {
    name: "Raynald Salah",
    position: "CEO and Founder, Klapty",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-1.jpg",
  },
  {
    name: "Abdulrahman Abu Zaid",
    position: "Founder, Juthoor",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-2.jpg",
  },
  {
    name: "Anand Hebbale",
    position: "Founder, SparkMySport a Skillteck Inc",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-3.jpg",
  },
  {
    name: "Akinbo Tenitogaju",
    position: "Founder, News Notifier",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-4.jpg",
  },
  {
    name: "Andrew Buxton",
    position: "Founder and CEO, Sezzi",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-5.jpg",
  },
];

const reviews = [
  <>
    <Typography sx={{ marginBottom: "20px" }}>
      Pritesh and his team are the best! Easy communication, always clear about
      what needs to be done and the implementation couldn’t be better.
    </Typography>
    <Typography>
      When you’re looking for a team to realize your software project, you’re
      definitely at the right place. Thanks again for the good and also ongoing
      cooperation!
    </Typography>
  </>,
  <>
    <Typography sx={{ marginBottom: "20px" }}>
      Pritesh and his team UniQual Itech are really amazing. They create many
      complex things on this big project: one iOs app, one android app(With
      Wi-Fi connection to material) and re-create a new website. They also work
      nice with our CTO on many task, for example on the API part between both
      apps connection to our webplatform and website for online payment.
    </Typography>
    <Typography>
      They work nice and fast, they have a really good communication and
      understanding, and also, they are really resonsiveness when necessary! For
      sure, it is one of our best experience on Upwork after more than 4 years
      here. I really recommend, it's was a pleasure on this first project, and
      we will start now another project with Pritesh and his team. Thank you
      guys, you rock!!"
    </Typography>
  </>,
  "Pritesh is phenomenal and will always go out of his way to ensure deliverables are met and support/advice is given. I worked with Pritesh on a digital health app, and I wouldn't have wanted to do this project with any other person. I highly recommend Pritesh and his company, and I do not doubt that future projects will be with him.",
  <>
    <Typography sx={{ marginBottom: "20px" }}>
      We are completing our Phase 1 work with them and will engage them again
      going forward. UniQual was our partner in success. From day one, they
      worked closely with us. Very flexible with the several changes that we had
      to make based on feedback from user testing. We were very impressed with
      their commitment to making our app successful.
    </Typography>
    <Typography>
      The team always met the agreed milestones. Even after the fixed price
      assignment was complete, they continued to support us with minor changes
      and bug fixes. We have great feedback from the market for this app making
      us invest further. Hoping to continue the engagement with another project.
      Highly recommend UniQual.
    </Typography>
  </>,
  <>
    <Typography sx={{ marginBottom: "20px" }}>
      Financially hired UniQual to build its first mobile application for
      submission to both app stores. Our goals were to build an app that was an
      enhancement to the existing Financielle brand, was suitable for paying
      customers, and was capable of easy iteration and development. The App
      included education and course functionality, budget and net worth
      software, life admin reminders, and push notifications. Additional
      features included community software, blog article functionality, and our
      Instagram feed pulling in.
    </Typography>
    <Typography>
      We benefitted from the UniQual project management style, including an
      inclusive Skype chat group, a project management portal where we could
      track progress and communicate on specific points. We were also impressed
      by the timely responses from the team, especially with the difference in
      time zones. We loved the quality of the development and the collaboration
      between UniQual and Financielle - we felt like one team which is essential
      to be able to develop with precision and pace.
    </Typography>
  </>,
];

const ClientReview = () => {
  return (
    <Box
      sx={{
        padding: "32px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Why they love us?
              </Typography>
              <Box marginY={4}>
                <Box my={2}>
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src="https://uniqualitech.com/public/front/assets/images/star.svg"
                      alt="star"
                    />
                  ))}
                </Box>
                <Typography variant="body1">
                  Uniqual is rated 8/8 average from 16 reviews on Upwork
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {clients.map((client, index) => (
                  <SwiperSlide key={index}>
                    <Paper
                      sx={{
                        display: "flex",
                        backgroundColor: "black",
                        color: "white",
                        gap: "40px",
                      }}
                    >
                      <Avatar
                        alt={client.name}
                        src={client.imgSrc}
                        sx={{ height: "80px", width: "80px" }}
                      />
                      <Box>
                        <Typography variant="h5" gutterBottom>
                          {client.name}
                        </Typography>
                        <Typography sx={{ color: "white" }} variant="subtitle1">
                          {client.position}
                        </Typography>
                      </Box>
                    </Paper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Box>
                <img
                  className="quoteImg"
                  src="https://uniqualitech.com/public/front/assets/images/quote.svg"
                  alt="quote"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                  {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                      <Paper sx={{ backgroundColor: "black", color: "white" }}>
                        <Typography variant="body1">{review}</Typography>
                      </Paper>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientReview;
