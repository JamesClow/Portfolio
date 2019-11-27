<style lang="scss" scoped>
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #branding-page { 
    display: flex;
    flex-direction: column;
    align-items: center;
    .limiter { 
      .cover-row { 
        display: flex;
        padding-top: 80px;
        @media screen and (max-width: 600px){
          flex-direction: column-reverse;
        }
        .description-column { 
          width: 50%;
          @media screen and (max-width: 600px){
            width: 100%;
          }
        }
        .image-container { 
          width: 50%;
          @media screen and (max-width: 600px){
            width: 100%;
            margin-bottom: 50px;
          }
          img { 
            max-width: 100%;
          }
        }
      }
      .goal-container { 
        display: flex;
        justify-content: center;
        @media screen and (max-width: 600px){
          flex-direction: column;
          .column{
            &:not(:last-child){
              margin-bottom: 90px;
            }
          }
        }
        .column{
          width: 50%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .small-section-title{
          color: $highlight;
        }
      }
    }
    .limiter { 

    	.challenge-container { 
        margin-bottom: 100px;
    		.summary-title { 

    		}

    		.challenge { 
          margin-bottom: 20px;
    		}
    	}

    	.section-container { 
        &:not(:last-child){
          margin-bottom: 100px;
        }
    		.glyphs { 
          display: flex;
          align-items: center;
          box-shadow: $z_depth_1;
          .container{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            &.white { 
              background-color: #FFF;	
      			}
      			&.red { 
              background-color: #F15C5E;
      			}
      			&.purple { 
              background-color: #5E4B63;
      			}
            img { 
              width: 60px;
            }
            @media screen and (min-width: 1800px){
              padding: 60px;
              img { 
                width: 80px;
              }
            }
            @media screen and (max-width: 760px){
              padding: 40px;
              img { 
                width: 40px;
              }
            }
            @media screen and (max-width: 600px){
              padding: 30px;
              img { 
                width: 30px;
              }
            }
          }
    		}
        
        .logos { 
          box-shadow: $z_depth_1;
          .container{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            &.white { 
              background-color: #FFF;	
      			}
      			&.red { 
              background-color: #F15C5E;
      			}
      			&.purple { 
              background-color: #5E4B63;
      			}
            img { 
              width: 400px;
            }
            @media screen and (min-width: 1800px){
              padding: 60px;
              img { 
                width: 500px;
              }
            }
            @media screen and (max-width: 760px){
              img { 
                width: 300px;
              }
            }
            @media screen and (max-width: 600px){
              img { 
                width: 200px;
              }
            }
          }
    		}
        
        .pins { 
          display: flex;
          justify-content: center;
          .container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 160px;
            height: 160px;
            margin: 0px 30px;
            border-radius: 50%;
            box-shadow: $z_depth_1;
            &.white { 
              background-color: #FFF;	
      			}
      			&.red { 
              background-color: #F15C5E;
      			}
      			&.purple { 
              background-color: #5E4B63;
      			}
            img { 
              width: 80px;
              height: 80px;
    				}
            @media screen and (min-width: 1800px){
              width: 260px;
              height: 260px;
              margin: 0px 60px;
              img{
                width: 100px;
                height: 100px;
              }
            }
            @media screen and (max-width: 760px){
              width: 120px;
              height: 120px;
              margin: 0px 15px;
              img{
                width: 50px;
                height: 50px;
              }
            }
            @media screen and (max-width: 600px){
              width: 100px;
              height: 100px;
              margin: 0px 10px;
              img{
                width: 38px;
                height: 38px;
              }
            }
            @media screen and (max-width: 420px){
              width: 80px;
              height: 80px;
              margin: 0px 5px;
              img{
                width: 32px;
                height: 32px;
              }
            }
          }
    		}
      }
      .research-container{
        padding: 0px 80px;
        @media screen and (max-width: 760px){
          padding: 0px 0px;
        }
        .description{
          
        }
        .finding{
          display: flex;
          // margin-top: 40px;
        }
      }
      .tool-container{
        padding: 0px 80px;
        @media screen and (max-width: 760px){
          padding: 0px 0px;
        }
      }
      .next{
        // padding: 0px 80px;
      }
      
      .illustrations { 
      	.row { 
          display: flex;
          max-width: 100%;
          .image-container{
            flex: 1;
            margin: 30px;
            padding: 50px;
            background-color: #FFF;
            box-shadow: $z_depth_1;
            display: flex;
            align-items: center;
            justify-content: center;
            img { 
              max-width: 100%;
        		}
            @media screen and (min-width: 1800px){
              padding: 60px;
            }
            @media screen and (max-width: 1430px){
              margin: 20px;
              padding: 40px;
            }
            @media screen and (max-width: 1200px){
              margin: 15px;
              padding: 40px;
            }
            @media screen and (max-width: 760px){
              margin: 10px;
              padding: 30px;
            }
            @media screen and (max-width: 600px){
              margin: 6px;
              padding: 20px;
            }
            @media screen and (max-width: 420px){
              margin: 5px;
              padding: 16px;
            }
          }
      	}
      }
    }
  }
</style>

<template>
  <div id="branding-page">
    <div class="limiter">
      <div class="cover-row">
        <div class="description-column">
          <div class="title bold macro">
            Branding
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
            Branding
          </div>
          <div class="role">
            Graphic Design
          </div>
          <div class="role">
            Illustrations
          </div>
        </div>
        <div class="image-container">
          <img src="../../assets/images/projects/jf_branding/imgs/stride.jpg" />
        </div>
      </div>
      <div class="large-summary">
        <div class="spacer large">
          Juris Futura needed help creating a digital <br />
          identity that would make their technology <br />
          appealing to legal professionals. 
        </div>
      </div>
      <div class="goal-container spacer">
        <div class="column">
          <div class="deliverable-column">
            <div class="small-section-title large bold">
              Deliverables
            </div>
            <br />
            <div class="description">
              Brand guidelines website<br /><br />
              Company and product logos<br /><br />
              Illustrations and textures<br /><br />
              Typography<br /><br />
              Color system<br /><br />
              UI component library
            </div>
          </div>
        </div>
        <div class="column">
          <div class="brand-goals-column">
            <div class="small-section-title large bold">
              Brand Goals
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                1
              </div>
              <div class="title">
                Clear & Clean
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                2
              </div>
              <div class="title">
                Human-Centered
              </div>
            </div>
            <br />
            <div class="process-row">
              <div class="stage">
                3
              </div>
              <div class="title">
                Whimsical
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="limiter spacer">
      <div class="section-container">
        <div class="label">
          Glpyhs
        </div>
        <div class="glyphs">
          <div class="white container">
            <img src="../../assets/images/projects/jf_branding/futura_logo.svg" />
          </div>
          <div class="red container">
            <img src="../../assets/images/projects/jf_branding/futura_logo_white.svg" />
          </div>
          <div class="purple container">
            <img src="../../assets/images/projects/jf_branding/futura_logo_white.svg" />
          </div>
        </div>
      </div>
      <div class="section-container">
        <div class="label">
          Logos
        </div>
        <div class="logos">
          <div class="white container">
            <img src="../../assets/images/projects/jf_branding/futura_horizontal.svg" />
          </div>
          <div class="red container">
            <img src="../../assets/images/projects/jf_branding/futura_horizontal_white.svg" />
          </div>
          <div class="purple container">
            <img src="../../assets/images/projects/jf_branding/futura_horizontal_white_red.svg" />
          </div>
        </div>
      </div>
      <div class="section-container">
        <div class="label">
          Pins
        </div>
        <div class="pins">
          <div class="white container">
            <img src="../../assets/images/projects/jf_branding/futura_logo.svg" />
          </div>
          <div class="red container">
            <img src="../../assets/images/projects/jf_branding/futura_logo_white.svg" />
          </div>
          <div class="purple container">
            <img src="../../assets/images/projects/jf_branding/futura_logo_white.svg" />
          </div>
        </div>
      </div>
      <div class="section-container">
        <div class="label">
          Illustrations
        </div>
        <div class="illustrations">
          <div class="row three">
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/launch.jpg" />
            </div>
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/shred.jpg" />
            </div>
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/award.jpg" />
            </div>
          </div>
          <div class="row two">
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/relax.jpg" />
            </div>
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/assist.jpg" />
            </div>
          </div>
          <div class="row three">
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/team.jpg" />
            </div>
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/moving.jpg" />
            </div>
            <div class="image-container">
              <img src="../../assets/images/projects/jf_branding/imgs/extract.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="limiter">
      <div class="section-container spacer">
        <div class="research-container">
          <div class="section-title macro">
            Research
          </div>
          <br /><br />
          <div class="description">
            Juris Futura was still in its start-up phase, and we had not yet identified the brand's ethos. As a result, I ended up working closely with the marketing team to learn more about our client's needs. During this process, we discovered a few critical pieces of information that helped us shape the brand. 
          </div>
          <br /><br />
          <div class="finding">
            <span class="stage">1</span>
            Legal professionals are usually inexperienced when it comes to using elaborate software applications, which meant that we needed to make sure that everything was straightforward, clear, and easily digestible. Ultimately these became our guiding principles and were incorporated into many of our design decisions. 
          </div>
          <br /><br />
          <div class="finding">
            <span class="stage">2</span>
            Many people had anxiety around the assumption that legal automaton was going to replace their job. So we decided it was important to develop a narrative about humans and technology working together. We wanted to emphasize that the goal was not to replace anyone but instead to use technology to assist and serve them. To help convey this idea, we wanted people to be the primary focus of our illustrations. 
          </div>
          <br /><br />
          <div class="finding">
            <span class="stage">3</span>
            Despite our initial assumptions, legal professionals preferred whimsical illustrations and animations over professional and serious depictions. Generally, they showed more patience when the application was running slowly, and they were more positive about using new software.
          </div>
        </div>
      </div>
    </div>
    <div class="limiter spacer">
      <div class="section-container">
        <div class="tool-container">
          <div class="summary-title large">
            Tools
          </div>
          <br />
          <div class="tools large-text">
            <span class="tool">
              <span class="bullet"></span>Adobe - Ai
            </span>
            <span class="tool">
              <span class="bullet"></span>Adobe - Xd
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="limiter spacer">
      <div class="next">
        <div class="button-container" @click="$router.push('/projects/jf-website')">
          <div class="next-label label bold">
            Next Project
          </div>
          <div class="project-label small-section-title bold large">
            Website - Juris Futura
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
