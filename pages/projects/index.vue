<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #projects-page { 
    display: flex;
    flex-direction: column;
    align-items: center;
    .cover-row { 
      width: 800px;
      @media screen and (max-width: 1430px){  
      }
      @media screen and (max-width: 1430px){
        width: 660px;
      }
      @media screen and (max-width: 1200px){
        width: 560px;
      }
      @media screen and (max-width: 1000px){
      }
      @media screen and (max-width: 700px){
        width: 390px;
      }
      @media screen and (max-width: 480px){
        width: 340px;
      }
      @media screen and (max-width: 430px){
        width: 300px;
      }
      @media screen and (max-width: 380px){
        width: 220px;
      }
      .page-title { 
        font-weight: 700;
        margin-bottom: 20px;
      }
      .page-nav { 
        display: flex;
        margin: 0px -25px;
        position: relative;
        .tab{
          font-weight: 700;
          padding: 5px 25px 10px 25px;
          &:hover{
            cursor: pointer;
            color: $highlight;
          }
          &.active{
            color: $highlight;
          }
          // &.all { 
          // 
          // }
          // &.design { 
          // 
          // }
          // &.develop { 
          // 
          // }
        }
        .selected{
          position: absolute;
          bottom: 0px;
          left: 0px;
          height: 4px;
          background-color: $highlight;
          transition: all 0.3s ease;
          &.all { 
            left: 25px;
            width: 28px;
          }
          &.design { 
            left: 103px;
            width: 75px;
          }
          &.develop { 
            left: 228px;
            width: 87px;
          }
          @media screen and (min-width: 1800px){
            &.all { 
              left: 25px;
              width: 35px;
            }
            &.design { 
              left: 112px;
              width: 90px;
            }
            &.develop { 
              left: 254px;
              width: 108px;
            }
          }
          @media screen and (max-width: 1430px){
            &.all { 
              left: 25px;
              width: 22px;
            }
            &.design { 
              left: 98px;
              width: 60px;
            }
            &.develop { 
              left: 208px;
              width: 68px;
            }
          }
          @media screen and (max-width: 1200px){
            &.all { 
              left: 25px;
              width: 20px;
            }
            &.design { 
              left: 95px;
              width: 50px;
            }
            &.develop { 
              left: 197px;
              width: 60px;
            }
          }
        }
      }
    }

    .project-container { 
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 80px;
      width: 100%;
      position: relative;
      &:hover{
        .project { 
          opacity: 0.3;
        }
      }
      &.touch-screen{
        &:hover{
          .project { 
            opacity: 1;
          }
        }
        .project{ 
          &:hover{
            transform: scale(1);
            opacity: 1;
          }
        }
      }
      .squash-enter-active, .squash-leave-active {
        transition: all .5s;
      }
      .squash-enter, .squash-leave-to {
        opacity: 0;
      }
      .project { 
        width: 100%;
        // margin-bottom: 120px;
        // transition: background-color 0.8s ease;
        transition: transform 0.8s ease, opacity 0.8s ease;
        @media screen and (max-width: 700px){
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &:hover{
          cursor: pointer;
          transform: scale(1.05);
          opacity: 1;
        }
        .project-module{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          @media screen and (max-width: 700px){
            flex-direction: column;
            align-items: flex-start;
            margin: 25px 0px;
            width: auto;
          }
          @media screen and (max-width: 380px){
            margin: 15px 0px;
          }
        }
        .image-container { 
          padding: 20px 0px;
          padding-right: 120px;
          
          // .image-frame { 
          //   // padding: 25px;
          //   // border: 1px solid #DDD;
          //   // background-color: #FFF; //$text;
          // 
          //   border-radius: 5px;
          //   overflow: hidden;
          // }
          @media screen and (max-width: 1200px){
            padding-right: 80px;
          }
          @media screen and (max-width: 800px){
            padding-right: 55px;
          }
          @media screen and (max-width: 700px){
            padding-right: 0px;
            margin-bottom: 30px;
          }
          @media screen and (max-width: 380px){
            margin-bottom: 15px;
          }
          .example { 
            width: 560px;
            border-radius: 5px;
            box-shadow: $z_depth_1;
          }
          .assist{
            width: 500px;
            margin: -60px -80px;
          }
          .website{
            width: 560px;
            border-radius: 5px;
            box-shadow: $z_depth_1;
          }
          .globe{
            width: 400px;
            height: 400px;
            box-shadow: $z_depth_2;
            border-radius: 50%;
          }
          .colors{
            width: 500px;
            height: 310px;
            box-shadow: $z_depth_1;
            border-radius: 10px;
          }
          @media screen and (max-width: 1430px){
            .example { 
              width: 500px;
            }
            .assist{
              width: 420px;
              margin: -30px -40px;
            }
            .website{
              width: 500px;
            }
            .globe{
              width: 340px;
              height: 340px;
            }
            .colors{
              width: 420px;
              height: 260px;
            }
          }
          @media screen and (max-width: 1200px){
            .example { 
              width: 400px;
            }
            .assist{
              width: 320px;
            }
            .website{
              width: 400px;
            }
            .globe{
              width: 260px;
              height: 260px;
            }
            .colors{
              width: 320px;
              height: 180px;
            }
          }
          @media screen and (max-width: 480px){
            .example { 
              width: 360px;
            }
            .assist{
              width: 300px;
              margin: -50px -30px;
            }
            .website{
              width: 360px;
            }
            .globe{
              width: 220px;
              height: 220px;
            }
            .colors{
              width: 280px;
              height: 180px;
            }
          }
          @media screen and (max-width: 430px){
            .example { 
              width: 300px;
            }
            .assist{
              width: 220px;
              margin: -40px -20px;
            }
            .website{
              width: 300px;
            }
            .globe{
              width: 160px;
              height: 160px;
            }
            .colors{
              width: 220px;
              height: 130px;
            }
          }
          @media screen and (max-width: 380px){
            .example { 
              width: 220px;
            }
            .assist{
              width: 180px;
            }
            .website{
              width: 220px;
            }
            .globe{
              width: 130px;
              height: 130px;
            }
            .colors{
              width: 180px;
              height: 120px;
            }
          }
        }
        .description-container { 
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          @media screen and (max-width: 700px){
            // flex-direction: row;
          }
          .company-name { 
            font-weight: 700;
          }
          .project-title { 
            // margin-bottom: 30px;
            font-weight: 700;
            color: $highlight;
            @media screen and (max-width: 1200px){
              // margin-bottom: 15px;
            }
          }
          .roles { 
            // margin-bottom: 30px;
            @media screen and (max-width: 1200px){
              // margin-bottom: 15px;
            }
          }
          .learn-more-button { 
            padding: 10px 20px;
            border: 3px solid $highlight;
            color: $highlight;
            font-weight: 700;
            &:hover{
              background-color: $highlight;
              color: #FFF;
              cursor: pointer;
            }
          }
          .learn-more{
            position: relative;
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
</style>

<template>
  <div id="projects-page">
    <div class="cover-row">
      <div class="page-title mega">
        Projects
      </div>
      <div class="page-nav">
        <div class="all tab" :class="{'active': tab == 'all'}" @click="setTab('all')">
          All
        </div>
        <div class="design tab" :class="{'active': tab == 'design'}" @click="setTab('design')">
          Design
        </div>
        <div class="develop tab" :class="{'active': tab == 'develop'}" @click="setTab('develop')">
          Develop
        </div>
        <div class="selected" :class="tab"></div>
      </div>
    </div>
    <div class="project-container" :class="{'touch-screen': $store.state.touch_screen}">
      <!-- APP DEV -->
      <transition name="squash">
        <div class="row" v-show="filter == 'all' || filter == 'develop'" @click="$router.push('projects/jf-app-dev')">
          <div class="spacer-tight project">
            <div class="project-module">
              <div class="image-container">
                <div class="image-frame">
                  <img class="example" src="../../assets/images/projects/jf_dev/ex1.png" />
                </div>
              </div>
              <div class="description-container">
                <div class="company-name large">
                  Development
                </div>
                <div class="project-title large">
                  Juris Futura
                </div>
                <br />
                <div class="roles">
                  <div class="role">
                    Front-End Developer
                  </div>
                  <div class="role">
                    UI & UX Designer
                  </div>
                </div>
                <br />
                <div class="learn-more highlight small bold">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- BRANDING -->
      <transition name="squash">
        <div class="row" v-show="filter == 'all' || filter == 'design'" @click="$router.push('/projects/jf-branding')">
          <div class="project spacer-tight">
            <div class="project-module">
              <div class="image-container">
                <img class="assist" src="../../assets/images/projects/jf_branding/assist-01.svg" />
              </div>
              <div class="description-container">
                <div class="company-name large">
                  Branding
                </div>
                <div class="project-title large">
                  Juris Futura
                </div>
                <br />
                <div class="roles">
                  <div class="role">
                    Branding
                  </div>
                  <div class="role">
                    Graphic Design
                  </div>
                  <div class="role">
                    Illustrations
                  </div>
                </div>
                <br />
                <div class="learn-more highlight small bold">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- WEBSITE -->
      <transition name="squash">
        <div class="row" v-show="filter == 'all' || filter == 'develop' || filter == 'design'" @click="$router.push('/projects/jf-website')">
          <div class="project spacer-tight">
            <div class="project-module">
              <div class="image-container">
                <div class="image-frame">
                  <img class="website" src="../../assets/images/projects/jf_web/home_page.png" />
                </div>
              </div>
              <div class="description-container">
                <div class="company-name large">
                  Website
                </div>
                <div class="project-title large">
                  Juris Futura
                </div>
                <br />
                <div class="roles">
                  <div class="role">
                    Front-End Developer
                  </div>
                  <div class="role">
                    UI & UX Designer
                  </div>
                </div>
                <br />
                <div class="learn-more highlight small bold">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- CITY -->
      <transition name="squash">
        <div class="row" v-show="filter == 'all' || filter == 'design'" @click="$router.push('/projects/under-the-moon')">
          <div class="project spacer-tight">
            <div class="project-module">
              <div class="image-container">
                <div class="globe-frame">
                  <img class="globe" src="../../assets/images/projects/city/sample.png" />
                </div>
              </div>
              <div class="description-container">
                <div class="company-name large">
                  Installation
                </div>
                <div class="project-title large">
                  Under The Moon
                </div>
                <br />
                <div class="roles">
                  <div class="role">
                    Visual Designer
                  </div>
                  <div class="role">
                    Projectionist 
                  </div>
                </div>
                <br />
                <div class="learn-more highlight small bold">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- COLORS -->
      <transition name="squash">
        <div class="row" v-show="filter == 'all' || filter == 'develop'" @click="$router.push('/projects/color-in-sound')">
          <div class="project spacer-tight">
            <div class="project-module">
              <div class="image-container">
                <div class="image-frame">
                  <img class="colors" src="../../assets/images/projects/colors/Color_Samples.jpg" />
                </div>
              </div>
              <div class="description-container">
                <div class="company-name large">
                  Development
                </div>
                <div class="project-title large">
                  Color In Sound
                </div>
                <br />
                <div class="roles">
                  <div class="role">
                    Personal Project
                  </div>
                </div>
                <br />
                <div class="learn-more highlight small bold">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      
    </div>
  </div>
</template>

<script>
  export default {
    transition: 'fade-page',
    data(){
      return{
        tab: "all",
        filter: "all"
      }
    },
    methods: {
      setTab(val){
        this.tab = val;
        this.filter = null;
        setTimeout(()=>{
          this.filter = val;
        }, 500)
      }
    }
  }
</script>
