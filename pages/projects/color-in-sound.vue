<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #color-page{
    .cover{
      width: 100vw;
      height: 100vh;
      z-index: -1;
      @media screen and (max-width: 1430px){
        height: 100vw;
      }
      @media screen and (max-width: 800px){
        height: 100vw;
      }
      @media screen and (max-width: 580px){
        height: 100vw;
      }
      @media screen and (max-width: 450px){
        height: 100vw;
      }
      &.cover-image{
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: #777;
        background-size: cover;
        background-position: center;
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_1.jpg');
        // background-attachment: fixed;
        animation: slides 20s linear infinite;
        -moz-animation: slides 20s linear infinite;
        -webkit-animation: slides 20s linear infinite;
      }
    }
    .scrollable{
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #FFF;
      z-index: 2;
    }
    @keyframes slides {
      0%, 10%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_1.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_2.jpg');
      }
      16%, 26%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_2.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_3.jpg');
      }
      32%, 42%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_3.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_4.jpg');
      }
      48%, 58%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_4.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_5.jpg');
      }
      64%, 74%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_5.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_6.jpg');
      }
      80%, 90%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_6.jpg');
      }
    }
    @-moz-keyframes slides {
      0%, 10%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_1.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_2.jpg');
      }
      16%, 26%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_2.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_3.jpg');
      }
      32%, 42%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_3.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_4.jpg');
      }
      48%, 58%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_4.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_5.jpg');
      }
      64%, 74%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_5.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_6.jpg');
      }
      80%, 90%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_6.jpg');
      }
    }
    @-webkit-keyframes slides {
      0%, 10%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_1.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_2.jpg');
      }
      16%, 26%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_2.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_3.jpg');
      }
      32%, 42%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_3.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_4.jpg');
      }
      48%, 58%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_4.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_5.jpg');
      }
      64%, 74%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_5.jpg'), url('../../assets/images/projects/colors/Color_To_Audio_6.jpg');
      }
      80%, 90%{
        background-image: url('../../assets/images/projects/colors/Color_To_Audio_6.jpg');
      }
    }
    .column-container{
      // width: 900px;
      .title { 
        font-weight: 700;
        color: #6fbcd0;
        animation: colors 20s linear infinite;
        -moz-animation: colors 20s linear infinite;
        -webkit-animation: colors 20s linear infinite;
      }
      .sub-title { 
        font-weight: 700;
        color: #6fbcd0;
        animation: colors 20s linear infinite;
        -moz-animation: colors 20s linear infinite;
        -webkit-animation: colors 20s linear infinite;
      }
      @keyframes colors {
        0%, 10%{
          color: #6fbcd0;
        }
        16%, 26%{
          color: #73d3c7;
        }
        32%, 42%{
          color: #94c67f;
        }
        48%, 58%{
          color: #d4be73;
        }
        64%, 74%{
          color: #d27772;
        }
        80%, 90%{
          color: #9d7fc7;
        }
      }
      @-moz-keyframes colors {
        0%, 10%{
          color: #6fbcd0;
        }
        16%, 26%{
          color: #73d3c7;
        }
        32%, 42%{
          color: #94c67f;
        }
        48%, 58%{
          color: #d4be73;
        }
        64%, 74%{
          color: #d27772;
        }
        80%, 90%{
          color: #9d7fc7;
        }
      }
      @-webkit-keyframes colors {
        0%, 10%{
          color: #6fbcd0;
        }
        16%, 26%{
          color: #73d3c7;
        }
        32%, 42%{
          color: #94c67f;
        }
        48%, 58%{
          color: #d4be73;
        }
        64%, 74%{
          color: #d27772;
        }
        80%, 90%{
          color: #9d7fc7;
        }
      }
      .role-title{
        color: #6fbcd0;
        animation: colors 20s linear infinite;
        -moz-animation: colors 20s linear infinite;
        -webkit-animation: colors 20s linear infinite;
      }
      .role{
        
      }
      .summary-title { 
        color: #6fbcd0;
        animation: colors 20s linear infinite;
        -moz-animation: colors 20s linear infinite;
        -webkit-animation: colors 20s linear infinite;
      }
      .summary { 

      }
      @keyframes fill {
        0%, 10%{
          fill: #6fbcd0;
        }
        16%, 26%{
          fill: #73d3c7;
        }
        32%, 42%{
          fill: #94c67f;
        }
        48%, 58%{
          fill: #d4be73;
        }
        64%, 74%{
          fill: #d27772;
        }
        80%, 90%{
          fill: #9d7fc7;
        }
      }
      @-moz-keyframes fill {
        0%, 10%{
          fill: #6fbcd0;
        }
        16%, 26%{
          fill: #73d3c7;
        }
        32%, 42%{
          fill: #94c67f;
        }
        48%, 58%{
          fill: #d4be73;
        }
        64%, 74%{
          fill: #d27772;
        }
        80%, 90%{
          fill: #9d7fc7;
        }
      }
      @-webkit-keyframes fill {
        0%, 10%{
          fill: #6fbcd0;
        }
        16%, 26%{
          fill: #73d3c7;
        }
        32%, 42%{
          fill: #94c67f;
        }
        48%, 58%{
          fill: #d4be73;
        }
        64%, 74%{
          fill: #d27772;
        }
        80%, 90%{
          fill: #9d7fc7;
        }
      }
      .st1{
        fill: #6fbcd0;
        animation: fill 20s linear infinite;
        -moz-animation: fill 20s linear infinite;
        -webkit-animation: fill 20s linear infinite;
      }
      .spin{
        // -webkit-animation: spin 20s linear infinite;
      }
      .wheel{
        transform: rotate(90deg);
      }
      .guid-row { 
        
      	.row { 
          display: flex;
          &:first-child{
            margin-bottom: 80px;
            @media screen and (max-width: 1200px){
              margin-bottom: 40px;
            }
            @media screen and (max-width: 760px){
              margin-bottom: 0px;
            }
          }
      		.group { 
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 760px){
              br{
                display: none;
              }
            }
      			.group-title { 
              @media screen and (min-width: 1800px){
                margin-bottom: 40px;
              }
              @media screen and (max-width: 600px){
                margin-bottom: -25px;
              }
              @media screen and (max-width: 420px){
                font-size: 10px;
                color: $text-light;
              }
      			}
            .image-container{
              position: relative;
              @media screen and (min-width: 1800px){
                transform: scale(1.4);
              }
              @media screen and (max-width: 1200px){
                transform: scale(0.8);
              }
              @media screen and (max-width: 760px){
                transform: scale(0.6);
              }
              @media screen and (max-width: 600px){
                transform: scale(0.4);
              }
              @media screen and (max-width: 420px){
                transform: scale(0.4);
              }
              .wheel{
                position: absolute;
                top: 25px;
                width: 100px;
                height: 100px;
                background-size: cover;
                background-position: center;
                background-image: url('../../assets/images/projects/colors/circle.png');
                animation: spin 20s linear infinite;
                -moz-animation: spin 20s linear infinite;
                -webkit-animation: spin 20s linear infinite;
                transform: rotateZ(-270deg);
              }
              .triangle{
                position: absolute;
                top: 0px;
                width: 145px;
                height: 145px;
                background-size: cover;
                background-position: center;
                background-image: url('../../assets/images/projects/colors/triangle_1.png');
                animation: triangle 20s linear infinite;
                -moz-animation: triangle 20s linear infinite;
                -webkit-animation: triangle 20s linear infinite;
                &.triangle-lum{
                  top: -4px;
                }
                &.triangle-sat{
                  top: -4px;
                  left: -26px;
                }
              }
              svg{
                
              }
              @keyframes spin {
                0%, 10%{
                  transform: rotateZ(0deg);
                }
                16%, 26%{
                  transform: rotateZ(-45deg);
                }
                32%, 42%{
                  transform: rotateZ(-85deg);
                }
                48%, 58%{
                  transform: rotateZ(-175deg);
                }
                64%, 74%{
                  transform: rotateZ(-265deg);
                }
                80%, 90%{
                  transform: rotateZ(-320deg);
                }
                100%{
                  transform: rotateZ(-360deg);
                }
              }
              @-moz-keyframes spin {
                0%, 10%{
                  transform: rotateZ(0deg);
                }
                16%, 26%{
                  transform: rotateZ(-45deg);
                }
                32%, 42%{
                  transform: rotateZ(-85deg);
                }
                48%, 58%{
                  transform: rotateZ(-175deg);
                }
                64%, 74%{
                  transform: rotateZ(-265deg);
                }
                80%, 90%{
                  transform: rotateZ(-320deg);
                }
                100%{
                  transform: rotateZ(-360deg);
                }
              }
              @-webkit-keyframes spin {
                0%, 10%{
                  transform: rotateZ(0deg);
                }
                16%, 26%{
                  transform: rotateZ(-45deg);
                }
                32%, 42%{
                  transform: rotateZ(-85deg);
                }
                48%, 58%{
                  transform: rotateZ(-175deg);
                }
                64%, 74%{
                  transform: rotateZ(-265deg);
                }
                80%, 90%{
                  transform: rotateZ(-320deg);
                }
                100%{
                  transform: rotateZ(-360deg);
                }
              }
              @keyframes triangle {
                0%, 10%{
                  background-image: url('../../assets/images/projects/colors/triangle_1.png'), url('../../assets/images/projects/colors/triangle_2.png');
                }
                16%, 26%{
                  background-image: url('../../assets/images/projects/colors/triangle_2.png'), url('../../assets/images/projects/colors/triangle_3.png');
                }
                32%, 42%{
                  background-image: url('../../assets/images/projects/colors/triangle_3.png'), url('../../assets/images/projects/colors/triangle_4.png');
                }
                48%, 58%{
                  background-image: url('../../assets/images/projects/colors/triangle_4.png'), url('../../assets/images/projects/colors/triangle_5.png');
                }
                64%, 74%{
                  background-image: url('../../assets/images/projects/colors/triangle_5.png'), url('../../assets/images/projects/colors/triangle_6.png');
                }
                80%, 90%{
                  background-image: url('../../assets/images/projects/colors/triangle_6.png');
                }
              }
              @-moz-keyframes triangle {
                0%, 10%{
                  background-image: url('../../assets/images/projects/colors/triangle_1.png'), url('../../assets/images/projects/colors/triangle_2.png');
                }
                16%, 26%{
                  background-image: url('../../assets/images/projects/colors/triangle_2.png'), url('../../assets/images/projects/colors/triangle_3.png');
                }
                32%, 42%{
                  background-image: url('../../assets/images/projects/colors/triangle_3.png'), url('../../assets/images/projects/colors/triangle_4.png');
                }
                48%, 58%{
                  background-image: url('../../assets/images/projects/colors/triangle_4.png'), url('../../assets/images/projects/colors/triangle_5.png');
                }
                64%, 74%{
                  background-image: url('../../assets/images/projects/colors/triangle_5.png'), url('../../assets/images/projects/colors/triangle_6.png');
                }
                80%, 90%{
                  background-image: url('../../assets/images/projects/colors/triangle_6.png');
                }
              }
              @-webkit-keyframes triangle {
                0%, 10%{
                  background-image: url('../../assets/images/projects/colors/triangle_1.png'), url('../../assets/images/projects/colors/triangle_2.png');
                }
                16%, 26%{
                  background-image: url('../../assets/images/projects/colors/triangle_2.png'), url('../../assets/images/projects/colors/triangle_3.png');
                }
                32%, 42%{
                  background-image: url('../../assets/images/projects/colors/triangle_3.png'), url('../../assets/images/projects/colors/triangle_4.png');
                }
                48%, 58%{
                  background-image: url('../../assets/images/projects/colors/triangle_4.png'), url('../../assets/images/projects/colors/triangle_5.png');
                }
                64%, 74%{
                  background-image: url('../../assets/images/projects/colors/triangle_5.png'), url('../../assets/images/projects/colors/triangle_6.png');
                }
                80%, 90%{
                  background-image: url('../../assets/images/projects/colors/triangle_6.png');
                }
              }
            }
      			.image { 
              // width: 150px;
              // height: 150px;
      			}
      		}
      	}
      }
      .sample-title { 

      }
      .samples { 
        width: 100%;
      }
      .git-container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -100px;
        margin-bottom: 120px;
        .git{
          border-radius: 50%;
          background-color: $highlight;
          width: 60px;
          height: 60px;
          padding: 0.8%;
          img{
            width: 100%;
            height: 100%;
            margin-bottom: -6%;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="color-page">
    <div class="cover-image cover"></div>
    <div class="cover-mask cover"></div>
    <!-- <img class="title" src="../../assets/images/projects/colors/test.svg" /> -->
    <div class="scrollable">
      <div class="column-container limiter">
        <div class="title mega">
          <br /><br />
          SOUND IN COLOR
        </div>
        <div class="sub-title mega">
          App Development
        </div>
        <br />
        <div class="role-title small bold">
          My Role
        </div>
        <div class="role">
          Personal Project
        </div>
        <br /><br /><br />
        <div class="summary-title large">
          Summary
        </div>
        <br />
        <div class="summary">
          Color My Audio is a stand-alone windows application that analyzes music to produce an array of colors. The app selects the hue of the whole display based on the tempo of the song. For each color segment, the luminance was calculated based on the average amplitude. Then, the saturation was determined based on the dominant frequency in each section of the song.
        </div>
        <br /><br /><br />
        <div class="guid-row">
          <div class="row">
            <div class="group">
              <div class="group-title bold">
                Hue
              </div>
              <br />
              <div class="image-container">
                <div class="wheel"></div>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 width="100.6px" height="137.9px" viewBox="0 0 100.6 137.9" style="enable-background:new 0 0 100.6 137.9;" xml:space="preserve"
                	>
                	<style type="text/css">
                		.st1{fill:#E24B74;}
                	</style>
                	<polygon class="st1" points="60,0 40.6,0 50.3,13.4 "/>
                </svg>
              </div>
            </div>
            <div class="group">
              <div class="group-title bold">
                Luminance
              </div>
              <br />
              <div class="image-container">
                <div class="triangle triangle-lum"></div>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 width="135.4px" height="137.9px" viewBox="0 0 135.4 137.9" style="enable-background:new 0 0 135.4 137.9;" xml:space="preserve"
                	>
                	<style type="text/css">
                		.st1{fill:#E24B74;}
                	</style>
                	<polygon class="st1" points="12.5,15.1 12.5,21.1 6,21.1 6,116.7 12.5,116.7 12.5,122.7 0,122.7 0,15.1 "/>
                </svg>
              </div>
            </div>
            <div class="group">
              <div class="group-title bold">
                Saturation
              </div>
              <br />
              <div class="image-container">
                <div class="triangle triangle-sat"></div>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 width="98px" height="137.9px" viewBox="0 0 98 137.9" style="enable-background:new 0 0 98 137.9;" xml:space="preserve">
                	<style type="text/css">
                		.st1{fill:#E24B74;}
                	</style>
                	<polygon class="st1" points="98,12.5 92,12.5 92,6 6,6 6,12.5 0,12.5 0,0 98,0 "/>
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="group">
              <div class="group-title bold">
                Tempo
              </div>
              <br />
              <!-- <img class="image" src="../../assets/images/projects/colors/tempo.svg" /> -->
              <div class="image-container">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 width="176.4px" height="137.9px" viewBox="0 0 176.4 137.9" style="enable-background:new 0 0 176.4 137.9;" xml:space="preserve"
                	>
                	<style type="text/css">
                		.st0{fill:#484848;}
                		.st1{fill:#E24B74;}
                	</style>
                	<path class="st0" d="M173.4,65.9L173.4,65.9h-6.1c-4.5,0-8.1,3.6-8.1,8.1v5.6c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8V32.8
                		c0-4.9-4-8.8-8.8-8.8c-4.9,0-8.8,3.9-8.8,8.8v72.4c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8l0,0V47.5c0-4.9-3.9-8.8-8.8-8.8
                		s-8.8,3.9-8.8,8.8v31.9c0.1,1.5-1,2.8-2.5,3s-2.9-1-3.1-2.5c0-0.1,0-0.2,0-0.3V74c0-4.5-3.6-8.1-8.1-8.1H84.7c-0.3,0-0.5,0-0.7,0.1
                		c-0.2,0-0.3,0-0.5,0h-6.1c-1.2,0-2.1-0.9-2.1-2.1v-5.6c0-4.9-3.9-8.8-8.8-8.8c-0.3,0-0.6,0-0.9,0c-4.6,0.5-8,4.4-8,9v31.9
                		c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8l0,0V32.8c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8v72.4c0,1.6-1.3,2.8-2.8,2.8
                		c-1.6,0-2.8-1.3-2.8-2.8V58.3c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8v5.6c0,1.2-0.9,2.1-2.1,2.1H3c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0
                		h6.1c4.5,0,8.1-3.6,8.1-8.1v-5.6c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8v46.8c0,4.9,4,8.8,8.8,8.8c4.9,0,8.8-3.9,8.8-8.8V32.8
                		c0-1.6,1.3-2.8,2.8-2.8s2.8,1.3,2.8,2.8l0,0v57.7c0,4.9,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8V58.6c-0.1-1.5,1-2.8,2.5-3s2.9,1,3.1,2.5
                		c0,0.1,0,0.2,0,0.3V64c0,4.5,3.6,8.1,8.1,8.1h6c0.3,0,0.5,0,0.7-0.1c0.2,0,0.3,0,0.5,0h14.4c1.2,0,2.1,0.9,2.1,2.1v5.6
                		c0,4.9,3.9,8.8,8.8,8.8c0.3,0,0.6,0,0.9,0c4.6-0.5,8-4.4,8-9v-32c0-1.6,1.3-2.8,2.8-2.8s2.8,1.3,2.8,2.8l0,0v57.7
                		c0,4.9,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8V32.8c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8v46.8c0,4.9,3.9,8.8,8.8,8.8
                		c4.9,0,8.8-3.9,8.8-8.8V74c0-1.2,0.9-2.1,2.1-2.1h6.1c1.7,0,3-1.3,3-3C176.4,67.3,175.1,65.9,173.4,65.9z"/>
                	<polygon class="st1" points="137.7,12.5 131.7,12.5 131.7,6 46.2,6 46.2,12.5 40.2,12.5 40.2,0 137.7,0 "/>
                </svg>
              </div>
            </div>
            <div class="group">
              <div class="group-title bold">
                Amplitude
              </div>
              <br />
              <div class="image-container">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 width="106.2px" height="137.4px" viewBox="0 0 106.2 137.4" style="enable-background:new 0 0 106.2 137.4;" xml:space="preserve"
                	>
                	<style type="text/css">
                		.st0{fill:#484848;}
                		.st1{fill:#E24B74;}
                	</style>
                	<g id="Group_190" transform="translate(-749.999 -2451)">
                		<g id="noun_Soundwave_1786373" transform="translate(862.998 2551) rotate(180)">
                			<path id="Path_241" class="st0" d="M90.2,28.3h-6.1c-4.5,0-8.1,3.6-8.1,8.1V42c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8V-4.9
                				c0-4.9-4-8.8-8.8-8.8c-4.9,0-8.8,3.9-8.8,8.8v72.4c0,1.6-1.3,2.8-2.8,2.8s-2.8-1.3-2.8-2.8l0,0V9.8c0-4.9-3.9-8.8-8.8-8.8
                				s-8.8,3.9-8.8,8.8v31.9c0.1,1.5-1,2.8-2.5,3s-2.9-1-3.1-2.5c0-0.1,0-0.2,0-0.3v-5.6c0-4.5-3.6-8.1-8.1-8.1h-6c-1.7,0-3,1.3-3,3
                				c0,1.7,1.3,3,3,3H16c1.2,0,2.1,0.9,2.1,2.1v5.6c0,4.9,3.9,8.8,8.8,8.8c0.3,0,0.6,0,0.9,0c4.6-0.5,8-4.4,8-9V9.8
                				c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8l0,0v57.7c0,4.9,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8V-4.9c0-1.6,1.3-2.8,2.8-2.8
                				c1.6,0,2.8,1.3,2.8,2.8v46.8c0,4.9,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8v-5.6c0-1.2,0.9-2.1,2.1-2.1h6.1c1.7,0,3-1.3,3-3
                				C93.4,29.5,91.9,28.3,90.2,28.3L90.2,28.3z"/>
                		</g>
                		<polygon class="st1" points="762.5,2563.6 750,2563.6 750,2469.7 762.5,2469.7 762.5,2475.7 756,2475.7 756,2557.6 762.5,2557.6 	
                			"/>
                	</g>
                </svg>
              </div>
            </div>
            <div class="group">
              <div class="group-title bold">
                Frequency
              </div>
              <br />
              <div class="image-container">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 width="86.4px" height="137.7px" viewBox="0 0 86.4 137.7" style="enable-background:new 0 0 86.4 137.7;" xml:space="preserve">
                	<style type="text/css">
                		.st0{fill:#484848;}
                		.st1{fill:#E24B74;}
                	</style>
                	<g id="Group_191" transform="translate(-1131.782 -2436.024)">
                		<g id="noun_Soundwave_1786373" transform="translate(1125 2451)">
                			<path id="Path_241" class="st0" d="M90.2,50.7h-6.1c-4.5,0-8.1,3.6-8.1,8.1v5.6c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8
                				V17.5c0-4.9-4-8.8-8.8-8.8c-4.9,0-8.8,3.9-8.8,8.8v72.4c0,1.6-1.3,2.8-2.8,2.8s-2.8-1.3-2.8-2.8l0,0V32.2c0-4.9-3.9-8.8-8.8-8.8
                				s-8.8,3.9-8.8,8.8v31.9c0.1,1.5-1,2.8-2.5,3c-1.5,0.2-2.9-1-3.1-2.5c0-0.1,0-0.2,0-0.3v-5.6c0-4.5-3.6-8.1-8.1-8.1h-6
                				c-1.7,0-3,1.3-3,3s1.3,3,3,3H16c1.2,0,2.1,0.9,2.1,2.1v5.6c0,4.9,3.9,8.8,8.8,8.8c0.3,0,0.6,0,0.9,0c4.6-0.5,8-4.4,8-9V32.2
                				c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8l0,0v57.7c0,4.9,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8V17.5c0-1.6,1.3-2.8,2.8-2.8
                				c1.6,0,2.8,1.3,2.8,2.8v46.8c0,4.9,3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8v-5.6c0-1.2,0.9-2.1,2.1-2.1h6.1c1.7,0,3-1.3,3-3
                				S91.9,50.7,90.2,50.7L90.2,50.7z"/>
                		</g>
                		<polygon class="st1" points="1190,2452.2 1184,2452.2 1184,2445.7 1167,2445.7 1167,2452.2 1161,2452.2 1161,2439.7 1190,2439.7 	
                			"/>
                	</g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="summary-title large">
          <br /><br />
          Origin
        </div>
        <br />
        <div class="summary">
          Color My Audio was a personal project that came about as a result of my combined interests in computer science, music, and art. I had just taken a programming class in C#, and I wanted to figure out what it would take to build a native windows application. I wanted to create something involving music; however, I had no idea how digital music was recorded or stored. So this project seemed like the perfect opportunity to explore how I could programmatically analyze music.
        </div>
        <div class="summary-title large">
          <br /><br /><br />
          Samples
        </div>
        <br />
        <img class="samples" src="../../assets/images/projects/colors/SampleSet.png"/>
        <!-- <div class="git-container">
          <div class="git">
            <img class="github" src="../../assets/images/Github.png" />
          </div>
        </div> -->
        <div class="spacer">
          <div class="summary-title large">
            Tools
          </div>
          <br />
          <div class="tools large-text">
            <span class="tool">
              <span class="bullet"></span>C#
            </span>
            <span class="tool">
              <span class="bullet"></span>XAML
            </span>
          </div>
        </div>
        <div class="spacer">
          <div class="next">
            <div class="button-container" @click="$router.push('/projects/jf-app-dev')">
              <div class="next-label label">
                Next Project
              </div>
              <div class="project-label large bold">
                <span>Development</span> <span>- Juris Futura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    transition: 'fade-page'
  }
</script>
