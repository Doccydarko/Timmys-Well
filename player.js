var LEFT = 0;
var RIGHT = 1;

var ANIM_IDLE_LEFT = 0;
var ANIM_IDLE_RIGHT = 1;
var ANIM_MOVE_LEFT = 2;
var ANIM_MOVE_RIGHT = 3;
var ANIM_JUMP_LEFT = 4;
var ANIM_JUMP_RIGHT = 5;
var ANIM_DUOJUMP_LEFT = 6;
var ANIM_DUOJUMP_RIGHT = 7;
var ANIM_MAX = 8;

var Player = function() {
	//Set up the sprite animations for the player
	this.sprite = new Sprite(								NAMEOFPICTURE
	this.sprite.buildAnimation();
	this.sprite.buildAnimation();
	this.sprite.buildAnimation();
	this.sprite.buildAnimation();
	this.sprite.buildAnimation();
	this.sprite.buildAnimation();
	this.sprite.buildAnimation();
	
	for(var i = 0; i < ANIM_MAX; i++) {
		this.sprite.setAnimationOffset(i, -55, -87);
	}
	
	//Set the position, height and width of the player
	this.position = new Vector2();
	this.position.set(										POSITION SET
										
															PLAYER WIDTH/HEIGHT
	
	//Set the velocity
	this.velocity = new Vector2();
	
	//Make sure player doesnt start off jumping
	this.falling = true;
	this.jumping = false;
	this.duojumping = false;
	
	//Set the direction
	this.direction = RIGHT;
};

Player.prototype.update = function(deltaTime) {
	//Update the sprite
	this.sprite.update(deltaTime);
	//Make variables to store directions
	var left = false;
	var right = false;
	var jump = false;
	var numjump = 2;
	
	//Check key presses
	if(keyboard.isKeyDown(keyboard.KEY_LEFT)) {
		this.direction = LEFT;
		if(this.sprite.currentAnimation != ANIM_WALK_LEFT && this.jumping == false) {
			this.sprite.setAnimation(ANIM_WALK_LEFT);
		}
	} if(keyboard.isKeyDown(keyboard.KEY_RIGHT)) {
		this.direction = RIGHT;
		if(this.sprite.currenAnimation != ANIM_WALK_RIGHT && this.jumping == false) {
			this.sprite.setAnimation(ANIM_WALK_RIGHT);
		}
	} else {
		if(this.jumping == false && this.falling == false) {
			if(this.direction == LEFT) {
				if(this.sprite.currenAnimation != ANIM_IDLE_RIGHT) {
					this.sprite.setAnimation(ANIM_IDLE_RIGHT);
				}
			} else {
				if(this.sprite.currentAnimation != ANIM_IDLE_LEFT) {
					this.sprite.setAnimation(ANIM_IDLE_LEFT);
				}
			}
		}
	}
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true && numjump == 0) {
		jump = true;
		numjump += 1;
	}
	else if(keyboard.isKeyDown(keyboard.KEY_UP) == true && numjump == 1) {
		jump = true;
		numjump = 0;
	}
	
	//Set variable for checking if player was going left/right
	var wasleft = this.velocity.x < 0;
	var wasright = this.velocity.x > 0;
	//Set variable for acceleration and gravity
	var ddx = 0;
	var ddy = 												GRAVITY
	
	
	if(left)) {
		ddx = ddx - 										ACCELERATION
		this.direction = LEFT;
	}
	else if(wasleft) {
		ddx = ddx + 										FRICTION
	}
	if(right) {
		ddx = ddx + 										ACCELERATION
	}
	else if(wasright) {
		ddx = ddx - 										FRICTION
	}
	
	//Jump
	if(jump && !this.jumping && !falling && !duojumping) {
		ddy = ddy - 										JUMP
		this.jumping = true;
		if(this.direction == LEFT) {
			this.sprite.setAnimation(ANIM_JUMP_LEFT);
		}
		else {
			this.sprite.setAnimation(ANIM_JUMP_RIGHT)
		}
	}
	//Double Jump *Fingers Crossed*
	else if(jump && !this.jumping && !falling && !duojumping) {
		ddy = ddy - 										JUMP
		this.duojumping = true;
		this.jumping = false;
		if(this.direction == LEFT) {
			this.sprite.setAnimation(ANIM_DUOJUMP_LEFT);
		}
		else {
			this.sprtie.setAnimation(ANIM_DUOJUMP_RIGHT);
		}
	}
	
	//Calculate Position and Velocity
	this.velocity.x = Math.floor(this.position.x + (deltaTime * ddx), 		-MAXDX & MAXDX
	this.velocity.y = Math.floor(this.position.y + (deltaTime * ddy), 		-MAXDY & MAXDY
	this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
	
	if((wasleft && (this.velocity.x > 0)) || (wasright && (this.velocity.x < 0))) {
		this.velocity.x = 0;	//No Jiggle Allowed
	}
	
	//Collision Detection
															Initilize Collision Map
}

Player.prototype.draw = function() {
	this.sprite.draw(context, this.position.x, this.position.y);
}