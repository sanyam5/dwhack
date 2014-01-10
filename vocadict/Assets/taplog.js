 #pragma strict
public var test:int;
var touchPos : Vector2;
var aTouch : boolean = false;
var prevaTouch : boolean = false;

//For sending data
var gamesetup:GameObject;

function Start()
{
	gamesetup = GameObject.Find("_GM");
}

function Update () {
   
    if (Application.platform != RuntimePlatform.Android )
	{  
	  aTouch = Input.GetMouseButton(0);
	  touchPos = Input.mousePosition;
	} else { 
	  aTouch = (Input.touchCount > 0);
	  touchPos = Input.GetTouch(0).position;
	}
    if (aTouch && prevaTouch != aTouch)
    {
        //Vector3 wp = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position); 
        //Vector2 touchPos = new Vector2(wp.x, wp.y);
        //var pos = Input.GetTouch(0).position;
        //Debug.Log("hello"+touchPos.x+","+touchPos.y);
        var actualTouch = Camera.main.ScreenToWorldPoint(touchPos);
        var actual2D:Vector2;
        actual2D.x = actualTouch.x;
        actual2D.y = actualTouch.y;
        //Debug.Log("tpos"+touchPos);
        //Debug.Log("actual"+actualTouch);
        //transform.position = actual2D;//touchPos/100;
        if(collider2D.OverlapPoint(actual2D))
        {
        	Debug.Log("fucckkk" + gameObject.name);
        	
        	if(gameObject.name == "quit")
        	{
        		Application.LoadLevel(0);
        	}
        	else if(gameObject.name == "play")
        	{
        		Application.LoadLevel(1);
        	}
        	else
        	gamesetup.SendMessage("click",gameObject.name);
        }
        else
        Debug.Log("no");
    }
    
    prevaTouch = aTouch;
    
}




