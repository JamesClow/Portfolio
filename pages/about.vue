<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #about-page { 
    display: flex;
    flex-direction: column;
    align-items: center;
    // .background{
    //   width: 100vw;
    //   height: 100vw;
    //   background: url('~@/assets/images/liquid.png');
    //   background-size: cover;
    //   background-attachment: fixed;
    //   opacity: 0.05;
    //   position: fixed;
    //   top: 0px;
    //   left: 0px;
    //   pointer-events: none;
    //   z-index: 0;
    // }
    .contact-container { 
      // position: fixed;
      // top: 50%;
      // left: 14%;
      // transform: translateY(-50%);
      // @media screen and (max-width: 980px){
      //   left: 10%;
      // }
      // @media screen and (max-width: 750px){
      //   display: none;
      // }
      .name{
        color: $highlight;
      }
      .contact { 
        margin-top: 30px;
        margin-bottom: 30px;
        .sub-text { 
          color: $text-light;
        }
        .text { 
          margin-bottom: 20px;
        }
      }
      .greeting{
        margin-top: 20px;
      }
      .mountain{
        margin-top: 20px;
        width: 60px;
        height: 60px;
      }
    }
    // .section-nav { 
    //   color: $highlight;
    //   .massive{
    //     font-size: 40px;
    //   }
    //   .profile-picture{
    //     width: 190px;
    //     height: 190px;
    //     // border-radius: 50%;
    //     margin-bottom: 0px;
    //     @media screen and (min-width: 1800px){
    //       width: 250px;
    //       height: 250px;
    //     }
    //   }
    // }
    .fluid-container { 
      width: 45%;
      @media screen and (max-width: 900px){
        width: 100%;
      }
      .scrolling-container{
        // padding-right: 22%;
        padding-top: 120px;
        padding-bottom: 120px;
        @media screen and (min-width: 1800px){
          padding-top: 190px;
        }
        @media screen and (max-width: 1000px){
          padding-top: 90px;
        }
        @media screen and (max-width: 900px){
          padding: 90px 12% 50px 12%;
        }
        @media screen and (max-width: 580px){
          padding: 50px 6% 50px 6%;
        }
        @media screen and (max-width: 420px){
          padding: 90px 4% 50px 4%;
        }
        .mobile-container{
          display: none;
          @media screen and (max-width: 750px){
            display: block;
            padding: 0px 30px;
          }
        }
        .welcome-message{
          margin-top: 40px;
          padding: 0px 30px;
          font-weight: 700;
          color: $highlight;
          white-space: nowrap;
        }
        .faq { 
          // margin: 60px 0px;
          padding: 0px 30px;
          .faq-title { 
            font-weight: 700;
            // color: $highlight;
          }

          .faq-text { 
            // padding-left: 20px;
          }
        }

        .resume-section { 
          // margin: 60px 0px;
          // padding: 0px 60px;
          padding-left: 30px;
          padding-right: 30px;
          border-top: 1px solid #DDD;
          .resume-title { 
            display: flex;
            align-items: center;
            font-weight: 700;
            &.list{
              // margin-bottom: 50px;
              // @media screen and (min-width: 1800px){
              //   margin-bottom: 100px;
              // }
            }
            // color: $highlight;
            .section-image{
              width: 60px;
              height: 60px;
              margin: -40px 0px;
              margin-right: 10px;
              margin-left: -70px;
              @media screen and (min-width: 1800px){
                margin-left: -90px;
                width: 80px;
                height: 80px;
              }
              @media screen and (max-width: 1200px){
                margin-left: -60px;
                width: 50px;
                height: 50px;
              }
            }
          }
          .resume-sub-title { 
            margin-top: 40px;
          }
          .resume-text { 
            margin-top: 20px;
          }
          .skill-title { 
            // color: $text-light;
            // margin-top: 30px;
          }
          .skill-text { 
            margin-top: 5px;
          }
        }
        
        .experience { 
          .resume-title { 

          }

          .job { 
            // margin-bottom: 60px;
            // @media screen and (min-width: 1800px){
            //   margin-bottom: 100px;
            // }
            .job-title { 
              display: flex;
              align-items: center;
              font-weight: 700;
              color: $highlight;
              .bullet{
                margin-right: 30px;
                margin-left: -45px;
                @media screen and (min-width: 1800px){
                  margin-left: -50px;
                }
                @media screen and (max-width: 1200px){
                  margin-right: 20px;
                  margin-left: -30px;
                }
              }
            }
            .job-date { 
              font-weight: 700;
              // color: $highlight;
            }

            .job-description { 

            }
          }
        }      
      }
    }
  }
  .contact-button{
    // position: fixed;
    // bottom: 50px;
    // left: 50px;
    z-index: 5;
    border-radius: 30px;
  }
</style>

<template>
  <div id="about-page">
    <!-- <div class="background"></div> -->
    <!-- <div class="fixed-container">
      <div class="section-nav">
        <div class="bold" :class="{'active': active_section == 'about'}">
          James Clow
        </div>
      </div>
      <div class="greeting">
        Lets grab coffee and talk<br />
        about your next big project!
      </div>
      <div class="contact">
        <div class="sub-text small">
          Email
        </div>
        <div class="text">
          James.C.Clow@gmail.com
        </div>
        <div class="sub-text small">
          Phone
        </div>
        <div class="text">
          303-475-3944
        </div>
        <div class="sub-text small">
          Location
        </div>
        <div class="text">
          Denver, CO
        </div>
      </div>
    </div> -->
    <div class="fluid-container">
      <div class="scrolling-container">
        <!-- <div class="mobile-container">
          <div class="section-nav">
            <div class="massive bold" :class="{'active': active_section == 'about'}">
              James Clow
            </div>
          </div>
          <div class="greeting">
            Lets grab coffee and talk<br />
            about your next big project!
          </div>
          <div class="contact">
            <div class="sub-text small">
              Email
            </div>
            <div class="text">
              James.C.Clow@gmail.com
            </div>
            <div class="sub-text small">
              Phone
            </div>
            <div class="text">
              303-475-3944
            </div>
            <div class="sub-text small">
              Location
            </div>
            <div class="text">
              Denver, CO
            </div>
          </div>
        </div> -->
        <div class="welcome-message large">
          I love combining technology,  <br />
          art and psychology. Together  <br />
          they make something magical.
          <br />
          <br />
          <br />
          <!-- I love creating memorable<br />
          experiences and working <br />
          with passionate people.  -->
        </div>
        <!-- <div class="faq">
          <div class="faq-title">
            What excites me?
          </div>
          <div class="faq-text">
            I get excited working with passionate people who inspire me. I also love that feeling when technology seems to come alive when creativity is met with masterful execution. Finally I love opportunities to work with new tools and technologies that expand my limits. 
          </div>
        </div> -->
        <div class="faq">
          <div class="faq-title bold">
            What makes a great design? 
          </div>
          <br />
          <div class="faq-text">
            Great design is the culmination of intuitive functionality, beautiful aesthetics, and a deep understanding of the human condition. Great design is unobtrusive and often goes unnoticed. Finally, great design is consistent in every detail.
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="faq">
          <div class="faq-title bold">
            What makes a great app experience? 
          </div>
          <br />
          <div class="faq-text">
            The app should warmly welcome the user and reward them for taking the plunge to use your product. Then it should provide an environment in which the user feels empowered to accomplish their tasks quickly and easily. 
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="faq">
          <div class="faq-title bold">
            What do you do outside of work? 
          </div>
          <br />
          <div class="faq-text">
            When I'm not in the office, I like to spend my time creating art, reading, and exploring the outdoors. My favorite activities are rock climbing, mountain biking, and skiing, but I'm always excited to try new things!
          </div>
        </div>
        <!-- <div class="faq">
          <div class="faq-title">
            How do you deal with differences in opinion?
          </div>
          <div class="faq-text">
            I think that one of the most important parts of working well with others is to keep an objective view of the situation and always remove your pride. This way we can drill down to the root of the difference and address the pro and cons of each opinion.  
          </div>
        </div> -->
        <!-- <div class="faq">
          <div class="faq-title">
            How do you cope with a sudden change in the project direction?
          </div>
          <div class="faq-text">
            It is always nice when you can repurpose your existing work but, to paraphrase one of my favorite art professors “designers need to be able to kill their babies”. This means that even after investing days or even months of hard work into a project sometimes the best thing to do is to simply return to the drawing board.  
          </div>
        </div> -->
        <br />
        <br />
        <br />
        <br />
        <div class="experience resume-section">
          <br />
          <br />
          <div class="resume-title list">
            <!-- <img src="../assets/images/data.svg" class="section-image education"/> -->
            Experiences
          </div>
          <br />
          <br />
          <div class="job">
            <div class="job-title bold large">
              Senior UI Developer
            </div>
            <div class="company-name bold large ">
              Juris Futura
            </div>
            <br />
            <div class="job-date small">
              Sept 2016 - Present
            </div>
            <div class="job-description">
              <br />
              I played several different roles in the company, including front end developer, UI designer, and product designer.
              <br /><br />
              Our primary focus was on building large B2B web applications for legal automation.
              <br /><br />
              I collaborated closely with our users, marketing team, and product stakeholders to maximize product quality.
              <br /><br />
              I worked with a fast pasted team in a continues cycle of rapid prototyping and user testing.
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="job">
            <div class="job-title bold large">
              Jr Web Developer
            </div>
            <div class="company-name bold large">
              Tendril
            </div>
            <br />
            <div class="job-date small">
              June 2015 - Dec 2015
            </div>
            <div class="job-description">
              <br />
              I created a web application for managing and validating the client's data to ensure that it was compatible with Tendril's other services.
              <br /><br />
              I built a web interface for monitoring the status of applications deployed on development, staging, and production servers.
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="job">
            <div class="job-title bold large">
              Software Engineering Intern
            </div>
            <div class="company-name bold large">
              Spectra Logic
            </div>
            <br />
            <div class="job-date small">
              June 2014 - Sept 2014
            </div>
            <div class="job-description">
              <br />
              I worked with a large team of engineers to create a web interface for Spectra Logic's data archiving system. 
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="job">
            <div class="job-title large">
              Web Design Intern
            </div>
            <div class="company-name bold large">
              ISupportU
            </div>
            <br />
            <div class="job-date small">
              May 2012 - Sept 2012
            </div>
            <div class="job-description">
              <br />
              I assisted with developing and debugging client websites.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="experience resume-section">
          <br />
          <br />
          <div class="resume-title">
            <!-- <img src="../assets/images/education.svg" class="section-image education "/> -->
            Education
          </div>
          <br />
          <br />
          <div class="job">
            <div class="job-title large">
              University of Denver
            </div>
            <div class="company-name bold large">
              B.S. Computer Science
            </div>
            <br />
            <div class="job-date small">
              Sept 2012 - June 2016
            </div>
            <div class="job-description">
              <br />
              Minors: Emergent Digital Practices & Mathematics
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="fav-tools resume-section">
          <br />
          <br />
          <div class="resume-title">
            <!-- <img src="../assets/images/design.svg" class="section-image education"/> -->
            Favorite Tools
          </div>
          <br />
          <br />
          <div class="skill-title large bold highlight">
            Web Development
          </div>
          <br />
          <div class="skill-text">
            <span class="tool">
              <span class="bullet"></span>JavaScript (ES6)
            </span>
            <span class="tool">
              <span class="bullet"></span>Vue.js
            </span>
            <span class="tool">
              <span class="bullet"></span>Vuex
            </span>
            <span class="tool">
              <span class="bullet"></span>SASS
            </span>
            <span class="tool">
              <span class="bullet"></span>GSAP
            </span>
            <span class="tool">
              <span class="bullet"></span>Nuxt
            </span>
            <span class="tool">
              <span class="bullet"></span>Webpack
            </span>
            <span class="tool">
              <span class="bullet"></span>Node.js
            </span>
          </div>
          <br />
          <div class="skill-title large bold highlight">
            Design
          </div>
          <br />
          <div class="skill-text">
            <span class="tool">
              <span class="bullet"></span>Adobe XD
            </span>
            <span class="tool">
              <span class="bullet"></span>Illustrator
            </span>
            <span class="tool">
              <span class="bullet"></span>Photoshop
            </span>
            <span class="tool">
              <span class="bullet"></span>After Effects
            </span>
          </div>
        </div>
        <!-- <br />
        <br />
        <br />
        <br />
        <div class="pinch-hit resume-section">
          <br />
          <br />
          <div class="resume-title mega">
            I Can Assist With
          </div>
          <br />
          <br />
          <div class="skill-title small">
            Software Development
          </div>
          <div class="skill-text">
            C#, Java, C++
          </div>
          <br>
          <div class="skill-title small">
            Database Management
          </div>
          <div class="skill-text">
            Neo4J, MongoDB
          </div>
        </div> -->
        <br />
        <br />
        <br />
        <br />
        <div class="contact-container resume-section">
          <br />
          <br />
          <div class="resume-title">
            <!-- <img src="../assets/images/computer.svg" class="section-image education"/> -->
            Contact Me
          </div>
          <br />
          <br />
          <div class="name macro bold">
            James Clow
          </div>
          <div class="greeting">
            Lets grab coffee and talk<br />
            about your next big project!
          </div>
          <div class="contact">
            <div class="skill-title small tag">
              Email
            </div>
            <div class="text skill-text">
              James.C.Clow@gmail.com
            </div>
            <div class="skill-title small tag">
              Phone
            </div>
            <div class="text skill-text">
              303-475-3944
            </div>
            <div class="skill-title small tag">
              Location
            </div>
            <div class="text skill-text">
              Denver, CO
            </div>
          </div>
          <br />
          <br />
        </div>
        <div class="next">
          <div class="button-container" @click="$router.push('/projects')">
            <div class="next-label label bold">
              Next
            </div>
            <div class="project-label small-section-title bold large">
              View Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    transition: 'fade-page',
    data(){
      return{
        active_section: "about",
      }
    }
  }
</script>
