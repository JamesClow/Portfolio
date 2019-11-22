<style lang="scss">
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #studio-page{
    .page-nav{
      z-index: 10;
      position: absolute;
      top: 100px;
      left: 45px;
      @media screen and (max-width: 1000px){
        top: 80px;
        left: 20px;
      }
      @media screen and (max-width: 580px){
        top: 50px;
        left: 10px;
      }
      .page-title{
        padding: 8px;
        margin-top: 10px;
        font-weight: 700;
      }
      .nav { 
        height: calc(100vh - 250px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        @media screen and (max-width: 1000px){
          // height: calc(100vh - 50px);
        }
        @media screen and (max-width: 760px){
          margin-top: 20px;
        }
        @media screen and (max-height: 800px){
          height: calc(100vh - 230px);
        }
        @media screen and (max-height: 580px){
          height: calc(100vh - 160px);
        }
      	.nav-title { 
          flex: 1;
          display: flex;
          align-items: center;
          padding: 8px;
          margin-top: 20px;
          font-weight: 700;
          color: $text-light;
          &.active{
            color: $highlight;
          }
          @media screen and (max-width: 1430px){
            font-size: 12px;
          }
          @media screen and (max-width: 760px){
            opacity: 0;
            // margin-top: 0px;
            display: none;
          }
      	}
      	.selector { 
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0px 8px;
          &:hover{
            cursor: pointer;
            .bar{
              width: 50px;
              background-color: $text;
              @media screen and (max-width: 1430px){
                width: 25px;
              }
            }
          }
          .bar{
            width: 20px;
            height: 6px;
            background-color: $inactive;
            transition: all 0.3s ease;
            border-radius: 1px;
            &.active{
              width: 50px;
              background-color: $highlight;
            }
            @media screen and (max-width: 1430px){
              width: 15px;
              height: 4px;
              &.active{
                width: 25px;
                background-color: $highlight;
              }
            }
          }
      	}
      }
    }
    .full-page-container{
      z-index: 1;
      #fullpage{
        .section{
          margin: 0px !important;
          .fp-tableCell{
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 1430px){
              padding-left: 4%;
            }
            @media screen and (max-width: 760px){
              padding-left: 2%;
            }
            @media screen and (max-width: 640px){
              padding-left: 3%;
            }
            @media screen and (max-width: 580px){
              padding-left: 4%;
            }
            @media screen and (max-width: 440px){
              padding-left: 5%;
            }
            .single-image{
              display: block;
              max-width: 60%;
              max-height: 80%;
              width: auto;
              height: auto;
              box-shadow: $z_depth_1;
              // @media screen and (max-width: 760px){
              //   max-width: 70%;
              // }
            }
            .image-group{
              display: flex;
              align-items: center;
              justify-content: center;
              .group-image{
                margin: 10px;
                display: block;
                max-width: 28%;
                max-height: 50%;
                width: auto;
                height: auto;
                box-shadow: $z_depth_1;
                @media screen and (max-width: 1200px){
                  margin: 5px;
                }
                @media screen and (max-width: 680px){
                  margin: 3px;
                }
              }
            }
          }
        }
      }
    }
  }
  
  .fp-section {
  	opacity: 0;
  	transition: all .6s ease-in-out;
  }

  .fp-section.active {
  	opacity: 1;
  }
</style>

<template>
  <div id="studio-page">
    <div class="page-nav">
      <div class="page-title large">
        Studio
      </div>
      <div class="nav">
        <div class="nav-title small" :class="{'active': active_index < digital.length}">
          Digital
        </div>
        <div v-for="(piece, index) in digital" class="selector" @click="moveTo(index)">
          <div class="bar" :class="{'active': active_index == index}"></div>
        </div>
        <div class="nav-title small" :class="{'active': active_index >= digital.length && active_index < digital.length + drawings.length}">
          Drawings
        </div>
        <div v-for="(piece, index) in drawings" class="selector" @click="moveTo(drawings_index + index)">
          <div class="bar" :class="{'active': active_index == drawings_index + index}"></div>
        </div>
        <div class="nav-title small" :class="{'active': active_index >= digital.length + drawings.length}">
          Abstract
        </div>
        <div v-for="(piece, index) in abstract" class="selector" @click="moveTo(abstract_index + index)">
          <div class="bar" :class="{'active': active_index == abstract_index + index}"></div>
        </div>
      </div>
    </div>
    <div class="full-page-container">
      <full-page ref="fullpage" :options="full_page_options" id="fullpage">
      	<div v-for="(piece, index) in artwork" :id="'section-'+index" class="section">
          <img v-if="typeof piece == 'string'" :data-src="getImage(piece)" class="single-image" />
          <div v-else class="image-group">
            <img v-for="image in piece" :data-src="getImage(image)" class="group-image"/>
          </div>
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      script: [
        { src: 'fullpage.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'fullpage.min.css' }
      ]
    },
    transition: 'fade-page',
    data(){
      return {
        active_index: 0,
        full_page: null,
        digital: [
          "electric-voyage.jpg",
          "splatter.jpg",
          "future.jpg",
          "alex.jpg",
          "mountain-goat.jpg",
        ],
        drawings: [
          "mia.jpg",
          "model-1.jpg",
          "model-2.jpg",
          "model-3.jpg",
          "model-4.jpg",
          "becca.jpg",
        ],
        abstract: [
          "splatter-blue-green.jpg",
          [ "splatter-og-left.jpg", "splatter-og-right.jpg" ],
          "splatter-purple.jpg",
        ],
        full_page_options: {
          licenseKey: 'YOUR_KEY_HEERE',
          // anchors: ['page1', 'page2', 'page3'],
          scrollingSpeed: 800,
          onLeave: this.leaveSection,
        }
      }
    },
    computed:{
      artwork(){
        return this.digital.concat(this.drawings.concat(this.abstract))
      },
      drawings_index(){
        return this.digital.length
      },
      abstract_index(){
        return this.digital.length + this.drawings.length;
      },
    },
    methods:{
      leaveSection(origin, destination, direction){
        this.active_index = destination.index;
      },
      getImage(path){
        return require('../assets/images/art/'+path)
      },
      moveTo(index){
        console.log("CALLED");
        console.log(index+1);
        this.$refs.fullpage.api.moveTo(index+1);
      }
    }
  }
</script>
