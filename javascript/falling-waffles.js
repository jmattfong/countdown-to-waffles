'use strict';

var Waffler = function (numOfDrops, dropHeight, dropWidth) {
	
	numOfDrops = numOfDrops || 20;
	dropHeight = dropHeight || 25;
	dropWidth = dropWidth || 25;
	
	var ctx;
	var fallingDrops = [];
	var canvas;
	
	return { setup: setup };
	
	function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (var i=0; i< numOfDrops; i++)
        {
			ctx.drawImage(fallingDrops[i].trail, fallingDrops[i].x, (fallingDrops[i].y - 20), dropWidth, dropHeight);
			ctx.drawImage(fallingDrops[i].trail, fallingDrops[i].x, (fallingDrops[i].y - 10), dropWidth, dropHeight);
			ctx.drawImage(fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y, dropWidth, dropHeight); //The rain drop
			drawParticles(fallingDrops[i]);
			
			fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
			if (fallingDrops[i].y > canvas.height) {  //Repeat the raindrop when it falls out of view
				fallingDrops[i].y = -25 //Account for the image size
				fallingDrops[i].x = Math.random() * 600;    //Make it appear randomly along the width
			}
        }
    }
	
	function drawParticles(currentDrop) {
		var particleX,
			particleY,
			random;
		for (var j = 0; j < 50; j++) {
				
			ctx.beginPath();
			ctx.fillStyle = "white";
			// After setting the fill style, draw an arc on the canvas
			random = Math.random();
			
			if (random < 0.25) {
				particleX = (currentDrop.x + (dropWidth / 2)) + (Math.random() * 15);
				particleY = (currentDrop.y - 22) + (Math.random() * 10);
			}
			else if (random < 0.5) {
				particleX = (currentDrop.x + (dropWidth / 2)) + (Math.random() * 15);
				particleY = (currentDrop.y - 22) - (Math.random() * 10);
			}
			else if (random < 0.75) {
				particleX = (currentDrop.x + (dropWidth / 2)) - (Math.random() * 15);
				particleY = (currentDrop.y - 22) + (Math.random() * 10);
			}
			else {
				particleX = (currentDrop.x + (dropWidth / 2)) - (Math.random() * 15);
				particleY = (currentDrop.y - 22) - (Math.random() * 10);
			}
			ctx.arc(particleX, particleY, (Math.random() * 3), 0, Math.PI*2, true); 
			ctx.closePath();
			ctx.fill();
		}
	}

    function setup() {
        canvas = document.getElementById('raining-pups');
		canvas.width = document.body.clientWidth; //document.width is obsolete
		canvas.height = document.body.clientHeight; //document.height is obsolete

        if (canvas.getContext) {
			ctx = canvas.getContext('2d');
            
			setInterval(draw, 36);
        	for (var i = 0; i < numOfDrops; i++) {
				var fallingDr = {};
				fallingDr["image"] =  new Image();
				fallingDr.image.src = 'images/corgi.gif';
				
				fallingDr["trail"] = new Image();
				fallingDr.trail.src = 'images/rainbow.gif'
					
				fallingDr["x"] = Math.random() * canvas.width;
				fallingDr["y"] = Math.random() * 5;
				fallingDr["speed"] = 3 + Math.random() * 5;
				fallingDrops.push(fallingDr);
			}
		}
    }
}

module.exports = Waffler;