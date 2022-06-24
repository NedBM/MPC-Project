import React from 'react';
// import React from 'react';

export const Wheel = () => {
  return (
    <div>Wheel</div>
  )
}


// class Wheel{
// 	constructor(){
// 		this.wheelElm = document.getElementById('wheel');
// 		this.wheelElm.addEventListener('mousedown', e =>{
// 			this.onGrab(e.clientX, e.clientY);
// 		});
// 		window.addEventListener('mousemove', e =>{
// 			if(e.which == 1)
// 				this.onMove(e.clientX, e.clientY);
// 			else if(!this.isDragging)
// 				this.onRelease()
			
// 		});
// 		window.addEventListener('mouseup', this.onRelease.bind(this));

// 		this.wheelElm.addEventListener('touchstart', e =>{
// 			this.onGrab(e.touches[0].clientX, e.touches[0].clientY);
// 		});
// 		window.addEventListener('touchmove', e =>{
// 			this.onMove(e.touches[0].clientX, e.touches[0].clientY);
// 		});
// 		window.addEventListener('touchend', this.onRelease.bind(this));

// 		this.calculatePositions();
// 		window.addEventListener('resize', this.calculatePositions.bind(this));

// 		this.currentAngle = 0;
// 		this.oldAngle = 0;
// 		this.lastAngles = [0,0,0];
// 		this.isDragging = false;
// 		this.startX = null;
// 		this.startY = null;

// 		this.positionCallbacks = [];
// 	}

// 	calculatePositions(){
// 		this.wheelWidth = this.wheelElm.getBoundingClientRect()['width'];
// 		this.wheelHeight = this.wheelElm.getBoundingClientRect()['height']
// 		this.wheelX = this.wheelElm.getBoundingClientRect()['x'] + this.wheelWidth / 2;
// 		this.wheelY = this.wheelElm.getBoundingClientRect()['y'] + this.wheelHeight / 2;
// 	}

// 	onPositionChange(callback){
// 		this.positionCallbacks.push(callback);
// 	}

// 	onGrab(x, y){
// 		if(!this.isSpinning){
// 			this.isDragging = true;
// 			this.startAngle = this.calculateAngle(x, y);
// 		}				
// 	}

// 	onMove(x, y){
// 		if(!this.isDragging)
// 			return

// 		this.lastAngles.shift();
// 		this.lastAngles.push(this.currentAngle);

// 		let deltaAngle = this.calculateAngle(x, y) - this.startAngle;
// 		this.currentAngle = deltaAngle + this.oldAngle;
		
// 		this.render(this.currentAngle);
// 	}

// 	calculateAngle(currentX, currentY){
// 		let xLength = currentX - this.wheelX;
// 		let yLength = currentY - this.wheelY;
// 		let angle = Math.atan2(xLength, yLength) * (180/Math.PI);
// 		return 365 - angle;
// 	}

// 	onRelease(){
// 		if(this.isDragging){
// 			this.isDragging = false;
// 			this.oldAngle = this.currentAngle;

// 			let speed = this.lastAngles[0] - this.lastAngles[2];
// 			this.giveMoment(speed);
// 		}		
// 	}

// 	giveMoment(speed){
// 		let maxSpeed = 30;
// 		if(speed >= maxSpeed)
// 			speed = maxSpeed;
// 		else if(speed <= -maxSpeed)
// 			speed = -maxSpeed;

// 		if(speed >= 0.1){
// 			speed -= 0.1;
// 			window.requestAnimationFrame(this.giveMoment.bind(this, speed));
// 			this.isSpinning = true;
// 		}
// 		else if(speed <= -0.1){
// 			speed += 0.1;
// 			window.requestAnimationFrame(this.giveMoment.bind(this, speed));
// 			this.isSpinning = true;
// 		}
// 		else{
// 			this.isSpinning = false;
// 		}

// 		this.oldAngle -= speed;
// 		this.render(this.oldAngle);
// 	}

// 	render(deg){
// 		this.wheelElm.style.transform = `rotate(${deg}deg)`;
// 		for(let callback of this.positionCallbacks){
// 			callback(deg);
// 		}
// 	}
// }

// let wheel = new Wheel();


// function Wheel() {
//     return (
//         <div id="spinner">
//           <svg
//                xmlns='http://www.w3.org/2000/svg'
//                viewBox='0 10 20 60'
//                id="clicker"
//                >
//             <path d="M 3 20 Q 10 0 17 20 Q 10 100 3 20" fill="#ddd"  />
//           </svg>
        
//           <svg
//                xmlns='http://www.w3.org/2000/svg'
//                viewBox='0 0 100 100'
//                id="wheel"
//                >
        
//             <mask id="splineMask">
//               <rect x="0" y="0" width="100" height="100" fill="white" />
//               <path d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(36, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(72, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(108, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(144, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(180, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(216, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(252, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(288, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//               <path transform="rotate(324, 50, 50)" d="M48.5 33 Q 50 35 51.5 33 Q 50 18 48.5 33"/>
//             </mask>
        
//             <polygon points="50,50 71,-17 28,-16"/>
//             <polygon points="50,50 28,-16 -7,9"/>
//             <polygon points="50,50 -7,9 -20,51"/>
//             <polygon points="50,50 -20,51 -6,92"/>
//             <polygon points="50,50 -6,92 29,117"/>
//             <polygon points="50,50 29,117 72,116"/>
//             <polygon points="50,50 72,116 107,91"/>
//             <polygon points="50,50 107,91 120,49"/>
//             <polygon points="50,50 120,49 106,8" />
//             <polygon points="50,50 106,8,71,-17" />
        
//             <text x="45" y="14">1</text>
//             <text x="45" y="14" transform="rotate(36, 50, 50)">2</text>
//             <text x="45" y="14" transform="rotate(72, 50, 50)">3</text>
//             <text x="45" y="14" transform="rotate(108, 50, 50)">4</text>
//             <text x="45" y="14" transform="rotate(144, 50, 50)">5</text>
//             <text x="45" y="14" transform="rotate(180, 50, 50)">6</text>
//             <text x="45" y="14" transform="rotate(216, 50, 50)">7</text>
//             <text x="45" y="14" transform="rotate(252, 50, 50)">8</text>
//             <text x="45" y="14" transform="rotate(288, 50, 50)">9</text>
//             <text x="40" y="14" transform="rotate(324, 50, 50)">10</text>
        
//             <circle id="middle" cx="50" cy="50" r="33" mask="url(#splineMask)"/>
//             <circle id="knob" cx="50" cy="50" r="12"/>
//           </svg>
        
//           <div id="shaddow"></div>
//         </div>
//   );
// }
// export default Wheel;