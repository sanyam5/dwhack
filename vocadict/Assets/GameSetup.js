#pragma strict

var mainCam:Camera;
var letter : GameObject[];
var alpha: char[];
var alpha_sprite : Sprite[];
var floor:Transform;
var finalword;
function Start () {
	for(var i=0;i<8;i++)
	{
		letter[i].transform.position = Vector3 (-100f,-100f,-100f);
	}
	floor.transform.position  = Vector3 (0f,0f,0f);
}

function Update () {
//	if(timer())
//	{
//		letter[].GetComponent(SpriteRenderer).sprite = alpha_sprite[j];
//	}
}