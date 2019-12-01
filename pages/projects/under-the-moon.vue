<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #moon-page { 
    background-color: #000;
    color: #FFF;
    // .background{
    //   width: 100vw;
    //   height: 100vw;
    //   background: url('~@/assets/images/liquid.png');
    //   background-size: cover;
    //   background-attachment: fixed;
    //   opacity: 0.1;
    //   position: fixed;
    //   top: 0px;
    //   left: 0px;
    //   pointer-events: none;
    //   z-index: 0;
    // }
    .cover { 
      background: url('~@/assets/images/liquid.jpg');
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      height: 100vh;
      width: 100vw;
      display: flex;
      z-index: 2;
      position: relative;
      @media screen and (max-width: 760px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
      }
      .title-container { 
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 760px){
          width: 100%;
        }
        .title-module{
          .title { 
            
            font-weight: 700;
        		margin-bottom: 30px;
        	}
        }
      }
      .video-container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        @media screen and (max-width: 760px){
          margin-bottom: 60px;
        }
        svg{
          font-family: impact, sans-serif;
        }
        video {
          -webkit-clip-path: url(#clip);
          clip-path: url(#clip);
          width: 500px;
          height: 500px;
          z-index: 1;
          @media screen and (min-width: 1800px){
            width: 660px;
            height: 660px;
          }
          @media screen and (max-width: 1430px){
            width: 400px;
            height: 400px;
          }
          @media screen and (max-width: 1200px){
            width: 300px;
            height: 300px;
          }
          @media screen and (max-width: 400px){
            width: 260px;
            height: 260px;
          }
        }
        .globe{
          width: 450px;
        }
      }
    }

    .reel { 
      position: relative;
      z-index: 2;
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: 760px){
        display: none;
      }
      .row { 
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 110%;
        margin-bottom: 3vw;
        // transition: all 2s ease;
        &.row-1, &.row-3{
          &:hover{
            // margin-left: -3%;
          }
        }
        &.row-2{
          margin-left: -10%;
          &:hover{
            // margin-left: -7%;
          }
        }
        img { 
          width: 31.5%;
          transition: all 5s ease;
          &:hover{
            transform: scale(1.05);
          }
        }
      }
    }
    .reel-mobile{
      width: 100%;
      height: 70vw;
      display: none;
      -webkit-animation: reel 26s linear infinite;
      background-size: cover;
      background-position: center;
      @media screen and (max-width: 760px){
        display: block;
      }
    }
    @-webkit-keyframes reel {
      6%, 16%{
        background-image: url('../../assets/images/projects/city/city_2.jpg'), url('../../assets/images/projects/city/people_5.jpg');
      }
      22%, 32%{
        background-image: url('../../assets/images/projects/city/people_5.jpg'), url('../../assets/images/projects/city/people_4.jpg');
      }
      38%, 48%{
        background-image: url('../../assets/images/projects/city/people_4.jpg'), url('../../assets/images/projects/city/full_view_4.jpg');
      }
      54%, 64%{
        background-image: url('../../assets/images/projects/city/full_view_4.jpg'), url('../../assets/images/projects/city/desk.jpg');
      }
      70%, 80%{
        background-image: url('../../assets/images/projects/city/desk.jpg'), url('../../assets/images/projects/city/people_3.jpg');
      }
      86%, 92%{
        background-image: url('../../assets/images/projects/city/people_3.jpg');
      }
    }
    .summary { 
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      .summary-col { 
        // width: 800px;
        .small-section-title{
          color: $highlight;
        }
        .mock-row{
          display: flex;
          align-items: center;
          justify-content: space-between;
          // margin: 80px 0px;
          img{
            width: 60%;
          }
          .desciption{
            
          }
        }
        .demo-row{
          width: 100%;
          #ball{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            &:focus{
              outline: none;
            }
          }
        }
        .next{
          .button-container{
            &:hover{
              .project-label{
                color: $highlight;
              }
            }
            .project-label{
              color: #FFF;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div id="moon-page">
    <div class="cover">
      <div class="title-container">
        <div class="title-module">
          <div class="title macro">
            Under The Moon<br />
            Installation
          </div>
          <div class="role-title small">
            My Roles
          </div>
          <div class="role">
            Visual Designer
          </div>
          <div class="role">
            Projectionist
          </div>
        </div>
      </div>
      <div class="video-container">
        <!-- <img class="globe" src="../../assets/images/projects/city/sample.png" /> -->
        
        <svg style="opacity:0;position:fixed;z-index:-999" viewBox="0 0 1 1">
          <defs>
            <clipPath id="clip" clipPathUnits="objectBoundingBox">
              <circle cx="0.5" cy="0.5" r="0.49"/>
            </clipPath>
          </defs>
          
        </svg>
        <video autoplay playsinline muted loop preload poster="~/assets/images/projects/city/sample.png">
          <source src="~/assets/images/projects/city/globe_1.mp4" />
        </video>
        
      </div>
    </div>
    <div class="reel">
      <div class="row row-1">
        <img src="~/assets/images/projects/city/city_2.jpg" />
        <img src="~/assets/images/projects/city/people_5.jpg" />
        <img src="~/assets/images/projects/city/full_view_4.jpg" />
      </div>
      <div class="row row-2">
        <img src="~/assets/images/projects/city/full_view_3.jpg" />
        <img src="~/assets/images/projects/city/people_3.jpg" />
        <img src="~/assets/images/projects/city/lights_on.jpg" />
      </div>
      <div class="row row-3">
        <img src="~/assets/images/projects/city/people_4.jpg" />
        <img src="~/assets/images/projects/city/desk.jpg" />
        <img src="~/assets/images/projects/city/city.jpg" />
      </div>
    </div>
    <div class="reel-mobile"></div>
    <br />
    <br />
    <div class="summary">
      <div class="summary-col limiter">
        <div class="spacer">
          <div class="small-section-title large bold">
            Summary
          </div>
          <br />
          <div class="description">
            Under The Moon was an experimental art installation developed in collaboration with Sommer Shearer, Greg Hardie, and Travis Powell. The project consisted of two parts. The first was a performance piece that debuted on May 29th, 2015, at the Shwayder Art Museum in Denver. The second was a looped experience exhibited in the same space for the following two days. The goal of this project was to create an immersive and unique experience using cutting edge digital practices.
          </div>
          <br />
          <br />
          <br />
          <div class="small-section-title large bold">
            Challenges
          </div>
          <br />
          <div class="description">
            We knew there would be substantial technical hurdles in creating this project. One of the biggest challenges was figuring out how to create the illusion of a planet floating in space. We had to develop a new method for creating five-point spherical projection mapping using Adobe After Effects. Additionally, we wanted to create a 3D soundscape using 12 speakers placed around the installation. We experimented with several types of audio software but ultimately decided to use a hybrid approach to mix 12 channels of audio.
          </div>
        </div>
        <div class="mock-row spacer">
          <img src="~/assets/images/projects/city/Projection_SideView.png" />
          <div class="desciption bold">
            5 Point Projection
          </div>
        </div>
        <div class="mock-row spacer">
          <div class="desciption bold">
            12 Channel Audio
          </div>
          <img src="~/assets/images/projects/city/Audio_SideView.png" />
        </div>
        <div class="demo-row spacer">
          <div class="desciption bold">
            Production Demo
          </div>
          <video id="ball" src="~/assets/images/projects/city/DEMO.mp4" controls></video>
        </div>
        <div class="demo-row spacer">
          <div class="desciption bold">
            Tech Demo
          </div>
          <video id="ball" src="~/assets/images/projects/city/DEMO_2.mp4" controls></video>
        </div>
        <div class="spacer">
          <div class="next">
            <div class="button-container" @click="$router.push('/projects/color-in-sound')">
              <div class="next-label label">
                Next Project
              </div>
              <div class="project-label small-section-title large bold">
                App - Color In Sound
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="background"></div> -->
  </div>
</template>

<script>
  export default {
    transition: 'fade-page',
  }
</script>
