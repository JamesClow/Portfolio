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
          align-items: flex-start;
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
        -webkit-animation: scroll 3s ease infinite;
        @media screen and (max-height: 600px){
          -webkit-animation: scrollmobile 3s ease infinite;
          bottom: 80px;
        }
      }
      @-webkit-keyframes scrollmobile {
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
      				margin-bottom: 60px;
      			}

      			.row { 
              margin-bottom: 60px;
              @media screen and (max-width: 760px){
                margin-bottom: 0px;
              }
      				.col { 
                @media screen and (max-width: 760px){
                  margin-bottom: 60px;
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
            transition: box-shadow 0.4s ease, transform 0.4s ease;
            &:hover{
              transform: scale(1.025);
              // box-shadow: $z_depth_2;
              cursor: pointer;
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
            }
        		.header { 
              min-height: 250px;
              background-color: #5E4B63;
              display: flex;
              align-items: center;
              justify-content: center;
              @media screen and (max-width: 1430px){
                min-height: 200px;
              }
              @media screen and (max-width: 1200px){
                min-height: 150px;
              }
              img{
                width: 70%;
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
        			.company { 
                color: $highlight;
                margin-bottom: 5px;
        			}
        			.name { 
                margin-bottom: 30px;
        			}
        			.date { 
                margin-bottom: 5px;
        			}
        			.about { 
                color: $text-light;
                margin-bottom: 30px;
        			}

        			.go { 
                color: $highlight;
        				.lets-go { 

        				}
        			}
        		}
          }
      	}
        .tag-line{
          margin-top: 120px;
          @media screen and (max-width: 1200px){
            margin-top: 80px;
          }
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
        <img class="profile-pic" src="../assets/images/profile_pic_small.png"/>
        <div class="welcome mega">
          <span class="hi bold">Hi,</span> I’m James. I create<br />
          intuitive digital products.
        </div>
      </div>
      <div class="scroll-icon"></div>
    </div>
    <div class="limiter-container">
      <div class="limiter spacer">
        <div class="row">
          <div class="col about">
            <div class="label bold regular">
              What I do
            </div>
            <div class="what-i-do large">
              I enjoy creating memorable<br />
              experiences and working<br />
              with passionate people.
            </div>
            <div class="row">
              <div class="col">
                <div class="label bold regular">
                  UI / UX
                </div>
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
                <div class="label bold regular">
                  Branding
                </div>
                Logos<br />
                <br />
                Illustrations<br />
                <br />
                Guidelines<br />
                <br />
                Strategy<br />
              </div>
            </div>
            <div class="button" @click="$router.push({ name: 'about' })">
              More About Me
            </div>
          </div>
          <div class="col projects">
            <div class="label bold regular">
              Featured Project
            </div>
            <div class="product-botton" @click="$router.push('projects/jf-app-dev')">
              <div class="header">
                <img src="../assets/images/projects/jf_branding/futura_horizontal_white_red.svg" />
              </div>
              <div class="project-info">
                <div class="company">
                  Juris Futura
                </div>
                <div class="name large">
                  App Development
                </div>
                <div class="date">
                  2016 - 2019
                </div>
                <div class="about">
                  Here I designed and built large scale web applications.
                </div>
                <div class="go">
                  <div class="lets-go">
                    Lets Go
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    methods: {
      openLink(url){
        if(process.client){
          window.open(url, '_blank')
        }
      }
    }
  }
</script>
