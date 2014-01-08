#pragma strict

// Game Parameters
var game_number = 0;// Seed to generate random number
var mainCam:Camera; 
var position_on_screen:Vector3[];
var position_filled:boolean[];

// For Time
var startTime:int;
var timer1:int;

// Letter Parameters
var letter : GameObject[];
var alpha: String;// stores the alphabet stored in a letter
var alpha_sprite : Sprite[];// stores the images of alphabets

var floor:Transform;

var finalword;// this is the word finally formed by the user

// Initialized once
function Start ()
{
	startTime = Time.time;
	//Set initial position of all letters outside the screen and set filled to false
	for(var i=0;i<8;i++)
	{
		//Initializing positon of fallen objects in the Screen
		position_on_screen[i] = mainCam.ScreenToWorldPoint(Vector3((i+1)*Screen.width/9,3*Screen.height/4,Screen.height));
		position_filled[i] = false;
		
		letter[i].rigidbody2D.gravityScale = 0;
		letter[i].active = false;
	}

	floor.transform.position  = Vector3 (0f,0f,0f);
}

function Update ()
{
	if(timer()==true)
	{
		find_and_fill();// finds a empty letter object and fills random letter in it;
	}
}
 function timer() : boolean
 {
 	var prediff = timer1;
	timer1 = Time.time - startTime;  //Set time
	Debug.Log ("Time: "+timer1);
	if(timer1>prediff && timer1%5==0)
	{ //<-------the number here are the seconds you want
		Debug.Log ("Letter Time");
		return true;
	}
	return false;
}
/******************Find and fill letters (random) in GameObject***********************/
function find_and_fill()
{
	var rand : int;
	var index : int;
	rand = Random.Range(0,25);
	Debug.Log(rand);
	index = find_empty();
	Debug.Log(index);
	
	//alpha[index] = 'a';
	letter[index].GetComponent(SpriteRenderer).sprite = alpha_sprite[rand];
	letter[index].transform.position = find_position();
	letter[index].rigidbody2D.gravityScale = 0;
	letter[index].active = true;// letter filled
}

function find_empty() : int
{
	for(var i=0;i<8;i++)
	{
		if(letter[i].active == false)
			return i;
	}
	return 0;
}

function find_position()
{
	for(var i=0;i<8;i++)
	{
		if(position_filled[i] == false)
		{
			position_filled[i] = true;
			return position_on_screen[i];
		}
	}
	return Vector3(0f,0f,0f);
}
/*****************************************************************************/