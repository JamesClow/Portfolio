<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #website-page { 
    display: flex;
    flex-direction: column;
    align-items: center;
    .limiter{ 
      .cover-row { 
        display: flex;
        align-items: center;
        @media screen and (max-width: 600px){
          flex-direction: column-reverse;
        }
        .description-column { 
          width: 40%;
          @media screen and (max-width: 600px){
            width: 100%;
          }
          .title { 

          }
          .role-title { 

          }
          .role { 

          }
        }
        .image-container { 
          width: 60%;
          @media screen and (max-width: 600px){
            width: 100%;
            margin-bottom: 50px;
          }
          .image-frame{
            img { 
              max-width: 100%;
            }
          }
        }
      }
      .large-summary{
        // margin: 80px 0px;
        @media screen and (max-width: 600px){
          br{
            display: none;
          }
        }
      }
      .side-by-side{
        display: flex;
        align-items: center;
        .content{
          flex-basis: 70%;
          &.left{
            margin-right: 100px;
            @media screen and (max-width: 600px){
              margin-right: 0px;
            }
          }
          &.right{
            margin-left: 100px;
            @media screen and (max-width: 600px){
              margin-left: 0px;
            }
          }
        }
        .page-container{
          width: 100%;
          img{
            max-width: 100%;
            box-shadow: $z_depth_1;
          }
        }
      }
      .mini-col{
        width: 700px;
        .section{
          margin-top: 100px;
        }
      }
    }
  }
  .pages{
    @media screen and (max-width: 600px){
      .limiter{
        &:not(:first-child){
          .side-by-side{
            flex-direction: column;
            margin-bottom: 50px;
          }
        }
        .side-by-side{
          flex-direction: column-reverse;
          align-items: flex-start !important; 
          margin-bottom: 100px;
          .page-container{
            margin-bottom: 50px;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="website-page">
    <div class="limiter">
      <div class="cover-row">
        <div class="description-column">
          <div class="title bold macro">
            Website
          </div>
          <div class="company bold macro">
            Juris Futura
          </div>
          <br />
          <br />
          <div class="role-title small">
            My Roles
          </div>
          <div class="role">
            Front-End Developer
          </div>
          <div class="role">
            UI & UX Designer
          </div>
        </div>
        <div class="image-container">
          <div class="image-frame">
            <img src="../../assets/images/projects/jf_web/home_page_fallback.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="limiter">
      <div class="large-summary large spacer">
        I helped Juris Futura design and <br />
        develop a website that showcased <br />
        our new products. 
      </div>
    </div>
    <div class="pages">
      <div class="limiter">
        <div class="side-by-side spacer">
          <div class="content left">
            <div class="summary-title large">
              Objective
            </div>
            <br />
            <div class="summary">
              The goal was to pique the interest of potential clients, partners, and investors. So we offered them a sneak peek of a few new projects we were bringing to market.
            </div>
          </div>
          <div class="page-container">
            <img src="../../assets/images/projects/jf_web/home_page_full.png" />
          </div>
        </div>
      </div>
      <div class="limiter">
        <div class="side-by-side spacer">
          <div class="page-container">
            <img src="../../assets/images/projects/jf_web/juvo_page_full.png" />
          </div>
          <div class="content right">
            <div class="summary-title large">
              Design Process
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                1
              </div>
              <div class="title">
                Requirement Gathering 
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                2
              </div>
              <div class="title">
                User Research
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                3
              </div>
              <div class="title">
                Story Boarding
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                4
              </div>
              <div class="title">
                Prototyping
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                5
              </div>
              <div class="title">
                User Feedback
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                6
              </div>
              <div class="title">
                Development
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                7
              </div>
              <div class="title">
                User Testing
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                8
              </div>
              <div class="title">
                Launch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="limiter-narrow">
      <div class="mini-col">
        <div class="spacer">
          <div class="summary-title large">
            Challenge
          </div>
          <br />
          <div class="summary">
            The biggest challenge in developing this project was figuring out what information to reveal and how to communicate the message. This process was especially challenging because many stakeholders had conflicting opinions about how to word each statement.
          </div>
        </div>
        <div class="spacer">
          <div class="summary-title large">
            Solution
          </div>
          <br />
          <div class="summary">
            It immediately became clear that to avoid countless rounds of revisions, I needed to understand the rationale behind each edit. That way, before the next person would make revisions, I could communicate the group's thought process leading up to that point.
          </div>
        </div>
      </div>
    </div>
    <div class="limiter-narrow">
      <div class="spacer">
        <div class="summary-title large">
          Tools
        </div>
        <br />
        <div class="tools large-text">
          <span class="tool">
            <span class="bullet"></span>Vue
          </span>
          <span class="tool">
            <span class="bullet"></span>Nuxt
          </span>
          <span class="tool">
            <span class="bullet"></span>Javascript
          </span>
          <span class="tool">
            <span class="bullet"></span>Adobe - Xd
          </span>
          <span class="tool">
            <span class="bullet"></span>Adobe - Ae
          </span>
          <span class="tool">
            <span class="bullet"></span>SASS
          </span>
        </div>
      </div>
    </div>
    <div class="limiter spacer">
      <div class="next">
        <div class="button-container" @click="$router.push('/projects/under-the-moon')">
          <div class="next-label label">
            Next Project
          </div>
          <div class="project-label small-section-title large bold">
            Installation - Under The Moon
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
