<style lang="scss">
  @import "~assets/styles/constants.scss";
  @import "~assets/styles/generics.scss";
  #home-page{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    #canvas {
    	position: absolute;
    	display: block;
    	top: 0;
    	left: 0;
    	z-index: -1;
    }
    .welcome-container{
      width: 60%;
      font-size: 28px;
      font-weight: 700;
      .welcome{
        color: $highlight;
        font-size: 90px;
        font-weight: 700;
      }
      .about{
        
      }
      .tag{
        
      }
    }
    .projects-button{
      position: absolute;
      bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // color: $highlight;
      // font-size: 20px;
      padding: 20px;
      &:hover{
        cursor: pointer;
        img{
          transform: translateY(10px);
        }
        .label{
          color: $highlight;
        }
      }
      img{
        width: 30px;
        // margin-bottom: 5px;
        transform: translateY(0px);
        transition: all 0.6s ease;
      }
      .label{
        margin-bottom: 5px;
      }
    }
  }
</style>

<template>
  <div id="home-page">
    <canvas id="canvas"></canvas>
    <div class="welcome-container">
      <div class="welcome">
        Hello,
      </div>
      <br />
      <div class="about">
        My name is James Clow. I am a <br />
        product designer, web developer <br />
        and illustrator based in Colorado.
      </div>
      <br />
      <div class="tag">
        Let’s make something amazing!
      </div>
    </div>
    <div class="projects-button" @click="$router.push('projects')">
      <div class="name label">
        Projects
      </div>
      <img src="../assets/images/arrow.svg" />
    </div>
  </div>
</template>

<script>
  export default {
    created(){
      if(process.client){
        window.addEventListener('scroll', this.scrollEvent)
        
        var w, h, particles;
        
        let resizeReset = function() {
        	w = canvasBody.width = window.innerWidth;
        	h = canvasBody.height = window.innerHeight;
        }

        const opts = { 
        	particleColor: "rgb(200,200,200)",
        	lineColor: "rgb(200,200,200)",
        	particleAmount: 10,
        	defaultSpeed: 0.1,
        	variantSpeed: 0.2,
        	defaultRadius: 12,
        	variantRadius: 0,
        	linkRadius: 200,
        };

        window.addEventListener("resize", function(){
        	deBouncer();
        });

        let deBouncer = function() {
            clearTimeout(tid);
            tid = setTimeout(function() {
                resizeReset();
            }, delay);
        };

        // let checkDistance = function(x1, y1, x2, y2){ 
        // 	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        // };

        // let linkPoints = function(point1, hubs){ 
        // 	for (let i = 0; i < hubs.length; i++) {
        // 		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        // 		let opacity = 1 - distance / opts.linkRadius;
        // 		if (opacity > 0) { 
        // 			drawArea.lineWidth = 0.5;
        // 			drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
        // 			drawArea.beginPath();
        // 			drawArea.moveTo(point1.x, point1.y);
        // 			drawArea.lineTo(hubs[i].x, hubs[i].y);
        // 			drawArea.closePath();
        // 			drawArea.stroke();
        // 		}
        // 	}
        // }

        var Particle = function(xPos, yPos){ 
        	this.x = Math.random() * w; 
        	this.y = Math.random() * h;
        	this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
        	this.directionAngle = Math.floor(Math.random() * 360); 
        	this.color = opts.particleColor;
        	this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
        	this.vector = {
        		x: Math.cos(this.directionAngle) * this.speed,
        		y: Math.sin(this.directionAngle) * this.speed
        	};
        	this.update = function(){ 
        		this.border(); 
        		this.x += this.vector.x; 
        		this.y += this.vector.y; 
        	};
        	this.border = function(){ 
        		if (this.x >= w || this.x <= 0) { 
        			this.vector.x *= -1;
        		}
        		if (this.y >= h || this.y <= 0) {
        			this.vector.y *= -1;
        		}
        		if (this.x > w) this.x = w;
        		if (this.y > h) this.y = h;
        		if (this.x < 0) this.x = 0;
        		if (this.y < 0) this.y = 0;	
        	};
        	this.draw = function(){ 
        		drawArea.beginPath();
        		drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        		drawArea.closePath();
            drawArea.lineWidth = 3;
            drawArea.strokeStyle = "#E24B74";
            drawArea.stroke();
        		// drawArea.fillStyle = this.color;
        		// drawArea.fill();
        	};
        };

        function setup(){ 
        	particles = [];
        	resizeReset();
        	for (let i = 0; i < opts.particleAmount; i++){
        		particles.push( new Particle() );
        	}
        	window.requestAnimationFrame(loop);
        }

        function loop(){ 
        	window.requestAnimationFrame(loop);
        	drawArea.clearRect(0,0,w,h);
        	for (let i = 0; i < particles.length; i++){
        		particles[i].update();
        		particles[i].draw();
        	}
        	// for (let i = 0; i < particles.length; i++){
        	// 	linkPoints(particles[i], particles);
        	// }
        }

        const canvasBody = document.getElementById("canvas"),
        drawArea = canvasBody.getContext("2d");
        let delay = 200, tid,
        rgb = opts.lineColor.match(/\d+/g);
        resizeReset();
        setup();
      }
    },
    data(){
      return{
        scroll_position: 0
      }
    },
    methods:{
      scrollEvent(e){
        var current_position = window.pageYOffset || document.documentElement.scrollTop;
        if(current_position > this.scroll_position){
          this.$router.push('projects')
        }
        this.scroll_position = current_position <= 0 ? 0 : current_position;
      }
    }
  }
</script>
