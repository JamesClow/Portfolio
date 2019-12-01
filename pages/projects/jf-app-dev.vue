<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  
  #development-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    .limiter { 
      // width: 900px;
      .cover-row { 
        display: flex;
        .description-column { 
          width: 100%;
        }
        .image-container { 
          width: 50%;
          img { 

          }
        }
      }
      .product-row{
        width: 100%;
        .image-row{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          @media screen and (max-width: 1200px){
            margin-bottom: 20px;
          }
          @media screen and (max-width: 760px){
            flex-direction: column;
          }
          .image-container{
            padding-right: 40px;
            &:last-child{
              padding-right: 0px;
            }
            @media screen and (max-width: 1200px){
              padding-right: 20px;
            }
            @media screen and (max-width: 760px){
              padding-right: 0px;
              margin-top: 20px;
              &:first-child{
                margin-top: 0px;
              }
              .three{
                width: 50%;
                transform: translateX(50%);
              }
            }
          }
          img{
            max-width: 100%;
            border-radius: 10px;
            box-shadow: $z_depth_1;
            width: 100%;
            @media screen and (max-width: 760px){
              border-radius: 5px;
            }
          }
        }
      }
      .persona-container{
        display: flex;
        @media screen and (max-width: 760px){
          flex-direction: column;
        }
        .col{
          width: 50%;
          &:first-child{
            margin-right: 80px;
          }
          @media screen and (max-width: 760px){
            width: 100%;
            &:first-child{
              margin-right: 0px;
              margin-bottom: 60px;
            }
          }
        }
      }
    }
    .guid-container{
      // width: 600px;
      .large-summary{
        // margin: 150px 0px;
        // margin-bottom: 100px;
        .summary{
          @media screen and (max-width: 500px){
            padding: 0px 35px;
            br{
              display: none;
            }
          }
        }
        .mobile{
          display: none;
        }
      }
      .center-text{
        margin-bottom: 60px;
      }
      .row{
        display: flex;
        .name{
          width: 36%;
        }
        .description{
          width: 60%;
        }
        @media screen and (max-width: 460px){
          flex-direction: column;
          .name{
            width: 100%;
          }
          .description{
            width: 100%;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="development-page" class="limiter-container">
    <div class="limiter">
      <div class="cover-row">
        <div class="description-column">
          <div class="title macro bold">
            Development
          </div>
          <div class="company macro bold">
            Juris Futura
          </div>
          <br />
          <br />
          <div class="role-title small">
            My Roles
          </div>
          <div class="role">
            Front End Developer
          </div>
          <div class="role">
            UI / UX Design
          </div>
        </div>
      </div>
    </div>
    <div class="limiter">
      <div class="product-row spacer">
        <div class="image-row">
          <img class="project-1" src="../../assets/images/projects/jf_dev/ex1.png" />
        </div>
        <div class="image-row">
          <div class="image-container">
            <img class="project-1" src="../../assets/images/projects/jf_dev/ex2.png" />
          </div>
          <div class="image-container">
            <img class="project-1" src="../../assets/images/projects/jf_dev/ex3.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="guid-container spacer">
      <div class="large-summary">
        <div class="large summary">
          I designed and built large scale web<br />
          applications to assist legal professionals<br />
          with various types of automation.
        </div>
      </div>
    </div>
    <div class="guid-container limiter-narrow spacer">
      <div class="small-section-title center-text large bold highlight">
        Guiding Principles
      </div>
      <div class="row">
        <div class="name label bold">
          Visibility
        </div>
        <div class="description">
          Essential elements need to stand out with the use of size, color, movement, and weight. 
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="name label bold">
          Discoverability
        </div>
        <div class="description">
          The user should be able to quickly figure out what each element does and how it will interact with other elements.
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="name label bold">
          Feedback
        </div>
        <div class="description">
          The result of any action should be clear to the user.
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="name label bold">
          Constraints
        </div>
        <div class="description">
          Do not overwhelm the user with too many options. 
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="name label bold">
          Orientation
        </div>
        <div class="description">
          The user should always know where they are and how to get back to the previous state. 
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="name label bold">
          Expectations
        </div>
        <div class="description">
          Elements and actions should behave as expected. 
        </div>
      </div>
    </div>
    <div class="limiter">
      <div class="product-row spacer">
        <div class="image-row">
          <img class="project-1" src="../../assets/images/projects/jf_dev/ex4.png" />
        </div>
        <div class="image-row">
          <div class="image-container">
            <img class="project-1" src="../../assets/images/projects/jf_dev/ex5.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="limiter spacer">
      <div class="summary-title large">
        Differing Mindsets
      </div>
      <br />
      <div class="">
        We found that we had two very different types of users. 
      </div>
      <br />
      <br />
      <div class="persona-container">
        <div class="col">
          <div class="small-section-title bold highlight">
            The Attorney
          </div>
          <br />
          <div class="summary">
            “I want something easy to use”<br /><br />
            The Attorney wants to spend as little time as possible learning about and using new applications. They want a single button to push. 
          </div>
        </div>
        <div class="col">
          <div class="small-section-title bold highlight">
            The Engineer
          </div>
          <br />
          <div class="summary">
            “I want something customizable”<br /><br />
            The Engineer wants to make adjustments to every parameter and wants the freedom to configure every detail.
          </div>
        </div>
      </div>
    </div>
    <div class="spacer summary limiter">
      <div class="summary-title large">
        Focus Areas
      </div>
      <br />
      <div class="list-row">
        <span class="bullet"></span>Respect the user's time
      </div>
      <br />
      <div class="list-row">
        <span class="bullet"></span>Intuitive and straightforward on the surface
      </div>
      <br />
      <div class="list-row">
        <span class="bullet"></span>Highly configurable behind the scenes
      </div>
      <br />
      <div class="list-row">
        <span class="bullet"></span>The user should feel empowered to get things done
      </div>
      <br />
      <div class="list-row">
        <span class="bullet"></span>Make the user feel welcome
      </div>
      <br />
      <div class="list-row">
        <span class="bullet"></span>Develop shortcuts for power users
      </div>
    </div>
    <div class="limiter">
      <div class="product-row spacer">
        <div class="image-row">
          <div class="image-container">
            <img class="three" src="../../assets/images/projects/jf_dev/ex8.png" />
          </div>
          <div class="image-container">
            <img class="three" src="../../assets/images/projects/jf_dev/ex7.png" />
          </div>
          <div class="image-container">
            <img class="three" src="../../assets/images/projects/jf_dev/ex6.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="limiter spacer">
      <div class="summary-title large">
        Tools
      </div>
      <br />
      <div class="tools large-text">
        <span class="tool">
          <span class="bullet"></span>Vue.js
        </span>
        <span class="tool">
          <span class="bullet"></span>Vuex
        </span>
        <span class="tool">
          <span class="bullet"></span>ES6
        </span>
        <span class="tool">
          <span class="bullet"></span>GSAP
        </span>
        <span class="tool">
          <span class="bullet"></span>Chart.js
        </span>
        <span class="tool">
          <span class="bullet"></span>SASS
        </span>
        <span class="tool">
          <span class="bullet"></span>Webpack
        </span>
        <span class="tool">
          <span class="bullet"></span>Docker
        </span>
        <span class="tool">
          <span class="bullet"></span>Kubernetes
        </span>
        <span class="tool">
          <span class="bullet"></span>Adobe - Xd
        </span>
      </div>
    </div>
    <div class="limiter spacer">
      <div class="next">
        <div class="button-container" @click="$router.push('/projects/jf-branding')">
          <div class="next-label label bold">
            Next Project
          </div>
          <div class="project-label small-section-title large bold">
            Branding - Juris Futura
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    transition: 'fade-page',
  }
</script>
