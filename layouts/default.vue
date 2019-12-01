<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,800,900');
  @import "~assets/styles/constants.scss";
  img{ -ms-interpolation-mode: bicubic; }
  html{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #FFF;
    body{
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      font-family: 'Montserrat', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: $text;
      font-weight: 600;
    }
  }
  
  .fade-page-enter-active{
    transition: opacity 0.8s ease;
  }
  .fade-page-leave-active{
    transition: opacity 0.2s ease;
  }
  .fade-page-enter, .fade-page-leave-to{
    opacity: 0;
  }
  
  .fade-enter-active{
    transition: opacity 0.5s ease;
  }
  .fade-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

  #app{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 100%;
    min-height: 100%;
    // position: absolute;
    // top: 0px;
    // left: 0px;
    #home-icon{
      position: fixed;
      top: 50px;
      left: 50px;
      z-index: 5;
      transition: transform 0.3s ease;
      &:hover{
        cursor: pointer;
        transform: scale(1.05);
      }
      img{
        height: 25px;
      }
      @media screen and (max-width: 1000px){
        top: 30px;
        left: 30px;
        img{
          height: 20px;
        }
      }
      @media screen and (max-width: 580px){
        top: 16px;
        left: 20px;
        img{
          height: 18px;
        }
      }
    }
    #nav-icon{
      z-index: 6;
      &.menu{
        .nav-container{
          .route{
            font-weight: 800;
            height: 12px;
            width: auto;
            right: 90px;
            font-size: 40px;
            background-color: rgba(0,0,0,0);
            color: $text;
            &:hover{
              cursor: pointer;
              color: $highlight;
            }
            &.active{
              color: $highlight;
              background-color: rgba(0,0,0,0);
            }
            &.route-1{
              top: 75px;
            }
            &.route-2{
              top: 150px;
            }
            &.route-3{
              top: 225px;
            }
            .underscore{
              position: absolute;
              top: -18px;
              right: -20px;
              width: 0%;
              height: 50px;
              background-color: $highlight;
              transition: all 0.6s ease;
              // opacity: 0.4;
              overflow: hidden;
              
              .text{
                position: absolute;
                top: 0px;
                right: 20px;
                color: #FFF;
              }
            }
          }
          .nav{
            width: 250px;
            height: 75px;
            // background-color: rgba(0,0,0,0.2);
            // border: 1px solid red;
            right: 65px;
            &:hover{
              cursor: pointer;
            }
            &:hover ~ .route{
              // color: $highlight;
              // text-decoration: line-through;
              color: $highlight;
              transform: translateX(-4px) scale(1.05);
              
              // &.active::after{
              //   background-color: $highlight;
              // }
              
              // &::after{
              //   content: "";
              //   position: absolute;
              //   bottom: -24px;
              //   left: 0px;
              //   width: 100%;
              //   height: 6px;
              //   background-color: $highlight;
              // }
            }
            &.nav-1{
              top: calc(75px - 30px);
            }
            &.nav-2{
              position: fixed;
              top: calc(150px - 30px);
            }
            &.nav-3{
              position: fixed;
              top: calc(225px - 30px);
            }
          }
        }
      }
      &.expanded{
        .nav-container{
          .route{
            font-weight: 800;
            height: 5px;
            font-size: 22px;
            background-color: rgba(0,0,0,0);
            color: $text;
            width: auto;
            &.active{
              color: $highlight;
              background-color: rgba(0,0,0,0);
            }
            &.route-1{
              top: 60px;
              right: 80px;
            }
            &.route-2{
              top: 60px;
              right: 200px;
            }
            &.route-3{
              top: 60px;
              right: 350px;
            }
            @media screen and (max-width: 1000px){
              &.route-1{
                top: 35px;
              }
              &.route-2{
                top: 35px;
              }
              &.route-3{
                top: 35px;
              }
            }
          }
          .nav{
            top: 35px;
            height: 55px;
            // background-color: rgba(0,0,0,0.2);
            &:hover{
              cursor: pointer;
            }
            &:hover ~ .route{
              &:not(.active){
                // transform: translateY(-5px);
                transform: scale(1.05);
                color: $highlight;
              }
            }
            &.nav-1{
              right: 60px;
              width: 110px;
            }
            &.nav-2{
              right: 178px;
              width: 140px;
            }
            &.nav-3{
              right: 326px;
              width: 120px;
            }
            @media screen and (max-width: 1000px){
              top: 10px;
            }
          }
        }
      }
      .open-nav{
        z-index: 16;
        position: fixed;
        top: 30px;
        right: 45px;
        width: 65px;
        height: 65px;
        // background-color: rgba(0,0,0,0.2);
        @media screen and (max-width: 1000px){
          top: 5px;
          right: 12px;
        }
        @media screen and (max-width: 580px){
          top: 0px;
          right: 0px;
          width: 80px;
          height: 50px;
        }
      }
      .close-nav{
        z-index: 0;
        position: fixed;
        top: 45px;
        right: 25px;
        width: 300px;
        height: 230px;
        // background-color: rgba(0,0,0,0.2);
      }
      .nav-container{
        .route{
          z-index: 10;
          position: fixed;
          width: 35px;
          height: 5px;
          right: 60px;
          border-radius: 1px;
          font-size: 8px;
          background-color: $text;
          user-select: none;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: rgba(0,0,0,0);
          &.active{
            background-color: $highlight;
          }
          &.route-1{
            top: 48px;
          }
          &.route-2{
            top: 60px;
          }
          &.route-3{
            top: 72px;
          }
          @media screen and (max-width: 1000px){
            width: 30px;
            height: 4px;
            right: 30px;
            &.route-1{
              top: 26px;
            }
            &.route-2{
              top: 36px;
            }
            &.route-3{
              top: 46px;
            }
          }
          @media screen and (max-width: 580px){
            width: 30px;
            height: 4px;
            right: 26px;
            &.route-1{
              top: 13px;
            }
            &.route-2{
              top: 23px;
            }
            &.route-3{
              top: 33px;
            }
          }
        }
        .nav{
          z-index: 15;
          position: fixed;
          // background-color: rgba(0,0,0,0.5);
        }
      }
      
    }
    .banner{
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 80px;
      background-color: #FFF;
      opacity: 0.9;
      z-index: 4;
      @media screen and (max-width: 580px){
        height: 50px;
      }
    }
    #overlay{
      z-index: 5;
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(255,255,255,0.8);
    }
    .router-view{
      z-index: 0;
    }
  }
</style>

<template>
  <div id="app">
    <div id="home-icon" @click="loadRoute('index')">
      <img src="~assets/images/jc-logo.svg" />
    </div>
    <no-ssr>
      <div id="nav-icon" :class="{[nav_state]: true, 'nav-hover': nav_hover}">
        <div class="open-nav" v-if="nav_state == ''" @click="openMenu()"></div>
        <div class="close-nav" v-if="nav_state == 'menu'" v-click-outside="closeMenu"></div>
        
        <div class="about-container nav-container">
          <div class="nav-1 nav" v-if="nav_state != ''" @click.stop.prevent="loadRoute('about')"></div>
          <div class="route-1 route" :class="{'active': urlContains('about')}">
            About
          </div>
        </div>
        <div class="projects-container nav-container">
          <div class="nav-2 nav" v-if="nav_state != ''" @click.stop.prevent="loadRoute('projects')"></div>
          <div class="route-2 route" :class="{'active': urlContains('projects') || urlContains('default')}">
            Projects
          </div>
        </div>
        <div class="studio-container nav-container">
          <div class="nav-3 nav" v-if="nav_state != ''" @click.stop.prevent="loadRoute('studio')"></div>
          <div class="route-3 route" :class="{'active': urlContains('studio')}">
            Studio
          </div>
        </div>
      </div>
      <div class="banner" v-if="window.width < 890"></div>
    </no-ssr>
    <transition name="fade">
      <div id="overlay" v-if="nav_state == 'menu'"></div>
    </transition>
    <nuxt />
  </div>
</template>

<script>
  // import * as PIXI from 'pixi.js'
  export default{
    // middleware: 'destortion'
    created(){
      if(process.client){
        window.addEventListener('touchstart', ()=>{
          this.$store.commit("setTouchScreen", true);
        });
        window.addEventListener('scroll', this.scrollEvent)
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
        this.setMenuState();
        
        // var initCanvasSlideshow = new CanvasSlideshow({
  			// 	sprites: ['images/liquid.png'],
  			// 	displacementImage: 'images/clouds.jpg',
  			// 	autoPlay: true,
  			// 	autoPlaySpeed: [0.3, 0.3],
  			// 	displaceScale: [800, 500],
  			// 	displaceAutoFit: true,
  			// 	displacementCenter: true,
  			// 	interactive: true,
  			// 	interactionEvent: 'click', // 'click', 'hover', 'both' 
        //   fullScreen: true
  			// });
      }
    },
    beforeDestroy(){
      window.removeEventListener('resize', this.handleResize)
    },
    data(){
      return{
        first_hit: true,
        nav_state: "",
        nav_hover: false,
        scroll_position: 0,
        window: {
          width: 0,
          height: 0
        }
      }
    },
    watch: {
      '$route': function(to, from){
        this.setMenuState();
      }
    },
    methods:{
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
      urlContains(name){
        return this.$route.name.indexOf(name) > -1
      },
      scrollEvent(e){
        var current_position = window.pageYOffset || document.documentElement.scrollTop;
        if(current_position > this.scroll_position || this.window.width < 580){
          this.nav_state = "";
        }else if(current_position == 0 && this.scroll_position > 0){
          this.nav_state = "expanded";
        }
        this.scroll_position = current_position <= 0 ? 0 : current_position;
      },
      loadRoute(route){
        // if(this.$route.name == 'home' && route == 'projects'){
        //   this.closeMenu();
        // }else 
        if(this.$route.name == route){
          this.closeMenu();
        }else if(this.$route.name == "default" && route == "/"){
          // this.closeMenu();
        }else{
          this.$router.push({ name: route });
        }
        console.log(this.$route.name)
      },
      setMenuState(){
        console.log(this.$route.name);
        // if(this.$route.name == 'index'){
        //   this.nav_state = 'expanded';
        // }else{
        //   this.nav_state = '';
        // }
        console.log(this.window.width)
        if(this.first_hit && this.$route.name != 'studio' && this.window.width > 580){
          this.nav_state = 'expanded';
          this.first_hit = false;
        }else{
          this.nav_state = '';
          this.scroll_position = 0;
        }
      },
      toggleNav(){
        if(this.nav_state == 'menu'){
          this.nav_state = '';
        }else{
          this.nav_state = 'menu';
        }
      },
      openMenu(){
        if(this.nav_state != 'expanded'){
          this.nav_state = 'menu';
        }
      },
      closeMenu(){
        if(this.nav_state != 'expanded'){
          this.nav_state = '';
        }
      }
    }
  }
</script>
