<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #home-page{
    min-width: 100%;
    min-height: 100%;
    .front-page{
      position: relative;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      .welcome-container{
        // width: 60%;
        display: flex;
        align-items: center;
        @media screen and (max-width: 760px){
          flex-direction: column;
          // align-items: flex-start;
        }
        .profile-pic{
          width: 460px;
          height: 460px;
          margin-right: 40px;
          @media screen and (min-width: 1800px){
            width: 660px;
            height: 660px;
          }
          @media screen and (max-width: 1430px){
            width: 360px;
            height: 360px;
          }
          @media screen and (max-width: 1200px){
            width: 260px;
            height: 260px;
          }
          @media screen and (max-width: 760px){
            margin-right: 0px;
            margin-bottom: 10px;
          }
        }
        .welcome{
          @media screen and (max-width: 420px){
            font-size: 20px;
          }
          .hi{
            color: $highlight;
          }
        }
      }
      .scroll-icon{
        width: 8px;
        height: 8px;
        background-color: $highlight;
        border-radius: 50%;
        position: absolute;
        bottom: 150px;
        right: 50%;
        animation: scroll 3s ease infinite;
        -webkit-animation: scroll 3s ease infinite;
        -moz-animation: scroll 3s ease infinite;
        @media screen and (max-height: 700px){
          animation: scrollmobile 3s ease infinite;
          -webkit-animation: scrollmobile 3s ease infinite;
          -moz-animation: scrollmobile 3s ease infinite;
          bottom: 100px;
        }
      }
      @keyframes scrollmobile {
        0%{
          transform: translateY(50px) scale(0.2);
          opacity: 0;
        }
        10%{
          transform: translateY(50px) scale(1.1);
          opacity: 1;
        }
        14%{
          transform: translateY(50px) scale(1);
        }
        86%{
          transform: translateY(0px) scale(1);
        }
        90%{
          transform: translateY(0px) scale(1.1);
          opacity: 1;
        }
        100%{
          transform: translateY(0px) scale(0.2);
          opacity: 0;
        }
      }
      @-moz-keyframes scrollmobile {
        0%{
          transform: translateY(30px) scale(0.2);
          opacity: 0;
        }
        10%{
          transform: translateY(30px) scale(1.1);
          opacity: 1;
        }
        14%{
          transform: translateY(30px) scale(1);
        }
        86%{
          transform: translateY(0px) scale(1);
        }
        90%{
          transform: translateY(0px) scale(1.1);
          opacity: 1;
        }
        100%{
          transform: translateY(0px) scale(0.2);
          opacity: 0;
        }
      }
      @-webkit-keyframes scrollmobile {
        0%{
          transform: translateY(30px) scale(0.2);
          opacity: 0;
        }
        10%{
          transform: translateY(30px) scale(1.1);
          opacity: 1;
        }
        14%{
          transform: translateY(30px) scale(1);
        }
        86%{
          transform: translateY(0px) scale(1);
        }
        90%{
          transform: translateY(0px) scale(1.1);
          opacity: 1;
        }
        100%{
          transform: translateY(0px) scale(0.2);
          opacity: 0;
        }
      }
      @keyframes scroll {
        0%{
          transform: translateY(0px) scale(0.2);
          opacity: 0;
        }
        10%{
          transform: translateY(0px) scale(1.1);
          opacity: 1;
        }
        14%{
          transform: scale(1);
        }
        86%{
          transform: translateY(100px) scale(1);
        }
        90%{
          transform: translateY(100px) scale(1.1);
          opacity: 1;
        }
        100%{
          transform: translateY(100px) scale(0.2);
          opacity: 0;
        }
      }
      @-moz-keyframes scroll {
        0%{
          transform: translateY(0px) scale(0.2);
          opacity: 0;
        }
        10%{
          transform: translateY(0px) scale(1.1);
          opacity: 1;
        }
        14%{
          transform: scale(1);
        }
        86%{
          transform: translateY(100px) scale(1);
        }
        90%{
          transform: translateY(100px) scale(1.1);
          opacity: 1;
        }
        100%{
          transform: translateY(100px) scale(0.2);
          opacity: 0;
        }
      }
      @-webkit-keyframes scroll {
        0%{
          transform: translateY(0px) scale(0.2);
          opacity: 0;
        }
        10%{
          transform: translateY(0px) scale(1.1);
          opacity: 1;
        }
        14%{
          transform: scale(1);
        }
        86%{
          transform: translateY(100px) scale(1);
        }
        90%{
          transform: translateY(100px) scale(1.1);
          opacity: 1;
        }
        100%{
          transform: translateY(100px) scale(0.2);
          opacity: 0;
        }
      }
    }
    .limiter-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      .limiter { 
        // margin: 60px 0px;
      	.row { 
          display: flex;
          justify-content: space-between;
          @media screen and (max-width: 760px){
            flex-direction: column;
          }
      		.col { 
            &.about{
              // padding-right: 100px;
            }
            @media screen and (max-width: 760px){
              &.projects{
                margin-top: 100px;
              }
            }
      			.label { 
              color: $highlight;
      			}
      			.what-i-do { 
      				// margin-bottom: 60px;
      			}

      			.row { 
              // margin-bottom: 60px;
              @media screen and (max-width: 760px){
                margin-bottom: 0px;
              }
      				.col { 
                @media screen and (max-width: 760px){
                  &:not(:last-child){
                    margin-bottom: 40px;
                  }
                }
      					.label { 

      					}

      					br { 

      					}
      				}
      			}
      		}
          .product-botton { 
            border-radius: 10px;
            box-shadow: $z_depth_1;
            width: 450px;
            overflow: hidden;
            position: relative;
            transition: box-shadow 0.4s ease, transform 0.4s ease;
            &:hover{
              transform: scale(1.025);
              // box-shadow: $z_depth_2;
              cursor: pointer;
              .overlay{
                opacity: 1;
              }
            }
            @media screen and (min-width: 1800px){
              width: 560px;
            }
            @media screen and (max-width: 1430px){
              width: 380px;
            }
            @media screen and (max-width: 1200px){
              width: 300px;
            }
            @media screen and (max-width: 760px){
              width: 100%;
              max-width: 300px;
            }
            .overlay{
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              z-index: 1;
              background-color: rgba(226, 75, 116, 0.9);
              opacity: 0;
              transition: opacity 0.6s ease;
              color: #FFF;
            }
        		.header { 
              height: 300px;
              // background-color: #5E4B63;
              position: relative;
              overflow: hidden;
              @media screen and (min-width: 1800px){
                height: 350px;
              }
              @media screen and (max-width: 1430px){
                height: 250px;
              }
              @media screen and (max-width: 1200px){
                height: 200px;
              }
              span{
                width: 100%;
              }
              .image-container{
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              img{
                width: 100%;
                &.stride{
                }
              }
        		}
        		.project-info { 
              padding: 40px;
              @media screen and (min-width: 1800px){
                padding: 50px;
              }
              @media screen and (max-width: 1430px){
                padding: 30px;
              }
              .detail-container{
                position: relative;
                .project-details{
                  position: absolute;
                  top: 0px;
                  left: 0px;
                }
              }
        			.company { 
                color: $highlight;
                // margin-bottom: 8px;
        			}
        			.name { 
                margin-bottom: 4px;
        			}
        			.date { 
                color: $text-light;
                margin-bottom: 8px;
        			}
        			.about { 
                
        			}

        			.go { 
                color: $highlight;
        				.lets-go { 
                  position: relative;
                  display: inline-block;
                  &::after{
                    content: "";
                    position: absolute;
                    bottom: -4px;
                    left: 0px;
                    height: 3px;
                    width: 0%;
                    background-color: $highlight;
                    transition: width 0.5s ease;
                    @media screen and (min-width: 1800px){
                      bottom: -5px;
                      height: 4px;
                    }
                    @media screen and (max-width: 1200px){
                      bottom: -3px;
                      height: 2px;
                    }
                  }
                  &:hover{
                    &::after{
                      width: 100%;
                    }
                  }
        				}
        			}
        		}
          }
      	}
        .tag-line{
          .bold{
            color: $highlight;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="home-page">
    <div class="front-page">
      <div class="welcome-container">
        <img class="profile-pic" src="../assets/images/profile_pic_small.jpg"/>
        <div class="welcome mega">
          <span class="hi bold">Hello,</span> I’m James. I create<br />
          intuitive digital products.
        </div>
      </div>
      <div class="scroll-icon"></div>
    </div>
    <div class="limiter-container">
      <div class="limiter spacer">
        <div class="row">
          <div class="col about">
            <div class="highlight bold large">
              What I do
            </div>
            <br />
            <div class="what-i-do large">
              I enjoy creating memorable<br />
              experiences and working<br />
              with passionate people.
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col">
                <div class="highlight bold regular">
                  UI / UX
                </div>
                <br />
                Web Development<br />
                <br />
                Prototyping<br />
                <br />
                Wireframing<br />
                <br />
                Storyboarding<br />
                <br />
                Design Systems<br />
                <br />
                Animation<br />
              </div>
              <div class="col">
                <div class="highlight bold regular">
                  Branding
                </div>
                <br />
                Logos<br />
                <br />
                Illustrations<br />
                <br />
                Guidelines<br />
                <br />
                Strategy<br />
              </div>
            </div>
            <br />
            <br />
            <div class="button" @click="$router.push({ name: 'about' })">
              More About Me
            </div>
          </div>
          <div class="col projects">
            <div class="highlight bold large">
              Featured Projects
            </div>
            <br />
            <no-ssr>
              <div class="product-botton" @click="$router.push('projects')">
                <div class="overlay">
                  <div class="titlem mega">
                    View All
                  </div>
                  <!-- <div class="title mega">
                    Projects
                  </div> -->
                  <!-- <br />
                  <div class="sub-title large">
                    Let's Go!
                  </div> -->
                </div>
                <div class="header">
                  <transition-group name="fade-slow" mode="in-out">
                    <div class="image-container" key="0" v-if="active_project == 0">
                      <img src="../assets/images/projects/jf_branding/stride_small.jpg" class="stride"/>
                    </div>
                    <div class="image-container" key="1" v-if="active_project == 1">
                      <img src="../assets/images/projects/jf_branding/futura_horizontal_white_red.jpg" class="logo"/>
                    </div>
                    <div class="image-container" key="2" v-if="active_project == 2">
                      <img src="../assets/images/projects/jf_web/home_page_small.jpg"/>
                    </div>
                    <div class="image-container" key="2" v-if="active_project == 2">
                      <img src="../assets/images/projects/city/splash_page.jpg"/>
                    </div>
                    <div class="image-container" key="4" v-if="active_project == 4">
                      <img src="../assets/images/projects/colors/color_splash.jpg"/>
                    </div>
                  </transition-group>
                </div>
                <div class="project-info">
                  <div class="detail-container">
                    <br /><br /><br /><br /><br />
                    <transition-group name="fade-slow" mode="out-in">
                      <div key="0" v-if="active_project == 0" class="project-details">
                        <div class="name bold">
                          App Development
                        </div>
                        <div class="company bold">
                          Juris Futura
                        </div>
                        <br />
                        <div class="about small">
                          I designed and built large scale web applications for legal professionals.
                        </div>
                      </div>
                      <div key="1" v-if="active_project == 1" class="project-details">
                        <div class="name bold">
                          Branding
                        </div>
                        <div class="company bold">
                          Juris Futura
                        </div>
                        <br />
                        <div class="about small">
                          I helped craft a digital identity to promote JF's legal technology.
                        </div>
                      </div>
                      <!-- <div key="2" v-if="active_project == 2" class="project-details">
                        <div class="name bold">
                          Website
                        </div>
                        <div class="company bold">
                          Juris Futura
                        </div>
                        <br />
                        <div class="about small">
                          I designed and built a website for potential clients, partners, and investors.
                        </div>
                      </div> -->
                      <div key="2" v-if="active_project == 2" class="project-details">
                        <div class="name bold">
                          Under The Moon
                        </div>
                        <div class="company bold">
                          Installation
                        </div>
                        <br />
                        <div class="about small">
                          I helped create the visuals for an experimental art installation.
                        </div>
                      </div>
                      <!-- <div key="3" v-if="active_project == 4" class="project-details">
                        <div class="name bold">
                          Color in Sound
                        </div>
                        <div class="company bold">
                          Personal Project
                        </div>
                        <br />
                        <div class="about small">
                          I created a windows application that analyzes music to produce colors.
                        </div>
                      </div> -->
                    </transition-group>
                  </div>
                  <br />
                  <div class="go">
                    <div class="lets-go small">
                      View All
                    </div>
                  </div>
                </div>
              </div>
            </no-ssr>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="tag-line macro">
          Let’s make something <span class="bold">amazing!</span>
        </div>
      </div>
    </div>
    <div class="footer limiter-container">
      <div class="limiter row spacer">
        <div class="col">
          <div class="my-name macro bold">
            James Clow
          </div>
          <div class="message">
            If you need help with your next<br />
            big projects, <span class="bold">get in touch!</span>
          </div>
          <div class="tag small">
            Email
          </div>
          <div class="info">
            james.c.clow@gmail.com
          </div>
          <div class="tag small">
            Phone
          </div>
          <div class="info">
            303-475-3944
          </div>
          <div class="tag small">
            Location
          </div>
          <div class="info">
            Denver, CO
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="label-small bold">
                Pages
              </div>
              <br />
              <div class="link" @click="$router.push({ name: 'projects' })">
                Projects
              </div>
              <br />
              <div class="link" @click="$router.push({ name: 'about' })">
                About
              </div>
              <br />
              <div class="link" @click="$router.push({ name: 'studio' })">
                Studio
              </div>
            </div>
            <div class="col">
              <div class="label-small bold">
                Projects
              </div>
              <br />
              <div class="link" @click="$router.push('projects/jf-app-dev')">
                JF - App Dev
              </div>
              <br />
              <div class="link" @click="$router.push('projects/jf-branding')">
                JF - Branding
              </div>
              <br />
              <div class="link" @click="$router.push('projects/jf-website')">
                JF - Website
              </div>
              <br />
              <div class="link" @click="$router.push('projects/under-the-moon')">
                Under The Moon
              </div>
              <br />
              <div class="link" @click="$router.push('projects/color-in-sound')">
                Color in Sound
              </div>
            </div>
            <div class="col">
              <div class="label-small bold">
                Made With
              </div>
              <br />
              <div class="link" @click="openLink('https://vuejs.org')">
                Vue.js
              </div>
              <br />
              <div class="link" @click="openLink('https://nuxtjs.org')">
                Nuxt.js
              </div>
              <br />
              <div class="link" @click="openLink('https://greensock.com/')">
                Green Sock
              </div>
              <br />
              <div class="link" @click="openLink('https://alvarotrigo.com/fullPage/')">
                Fullpage.js
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
    created(){
      setInterval(()=>{ 
        if(this.active_project == 2){
          this.active_project = 0
        }else{
          this.active_project++;
        }
      }, 7000);
    },
    data(){
      return {
        active_project: 0,
      }
    },
    methods: {
      openLink(url){
        if(process.client){
          window.open(url, '_blank')
        }
      }
    }
  }
</script>
