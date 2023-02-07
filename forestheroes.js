//To Do:
//reward?????
//extra uits and cinery
//AI
//repair slice move

//todo P2:
//town enemy
//optimisation
//bugs:
//


//necesary graph init
//var externals;
// ensure Graphics Buffer is loaded before proceeding
/*var initGraphics = function(){ 
    return this.loadPixels; };
if(!initGraphics()){ return;}*/
//manual reset
/*keyPressed = function(){
    if (keyCode===82)
    {Program.restart();}
};*/

cursor();
var gfx;
var worldstate=0;
var defUnits=[4,6,2];
var ourColors=[235, 248, 72, 235, 248, 72, 235, 248, 72, 8, 8, 8];

//{ images
//{ land images
var grassImg = getImage("cute/GrassBlock");
var dirtImg = getImage("cute/DirtBlock");
var stoneImg = getImage("cute/StoneBlock");
var waterImg = getImage("cute/WaterBlock");
var woodImg = getImage("cute/WoodBlock");
var wallImg = getImage("cute/WallBlock");
//}

//{ tree images
var tree1Img = getImage("cute/TreeShort");
var tree2Img = getImage("cute/TreeTall");
var tree3Img = getImage("cute/TreeUgly");

var planet = getImage("space/planet");
var gfx = createGraphics(planet.width, planet.height, JAVA2D);
gfx.background(0, 0);  
gfx.image(planet, -19, -15,tree3Img.width+52, tree3Img.height+20);
var partial = gfx.get(0, 0, planet.width, planet.height*(16/32));
var gfx = createGraphics(tree3Img.width*2, tree3Img.height*2, JAVA2D);
gfx.background(0,0);  
gfx.image(partial, 0, 0,planet.width*2, planet.height);
var tree4Img = gfx.get(0, 0, planet.width, planet.height);


var tree5Img = getImage("cute/Rock");
//}

//{ plus sign for heal
var plus = getImage("space/plus");  
//}

//{ house images
var house1Img = getImage("cute/RoofSouthWest");
var house2Img = getImage("cute/RoofSouth");
var house3Img = getImage("cute/RoofSouthEast");
var house4Img = getImage("cute/WindowTall");

var gfx = createGraphics(house4Img.width, house4Img.height, JAVA2D);

gfx.background(0, 0);  
gfx.image(house4Img, 0, 0);
var house4Img2 = gfx.get(0, house4Img.height/2, house4Img.width, house4Img.height);
//var house4Img2= house4Img;

var house5Img = getImage("cute/DoorTallClosed");
var gfx = createGraphics(house5Img.width, house5Img.height, P2D);
gfx.background(0, 0);  
gfx.image(house5Img, 0, 0);
var house5Img2 = gfx.get(0, house5Img.height/2, house5Img.width, house5Img.height);
//var house5Img2=house5Img;

var house6Img = getImage("cute/StoneBlockTall");
var buttonImg = getImage("cute/PlainBlock");
var gfx = createGraphics(buttonImg.width, buttonImg.height-85, P2D);
gfx.background(0,0);  
gfx.image(buttonImg, 0, -50);
var buttonImg2 = gfx.get(0,0, buttonImg.width, buttonImg.height-85);
//var buttonImg2=buttonImg;


var gfx = createGraphics(house6Img.width, house6Img.height, P2D);
gfx.background(0, 0);  
gfx.image(house6Img, 0, 0);
var house6Img2 = gfx.get(0, house6Img.height/2, house6Img.width, house6Img.height);
//var house6Img2=house6Img;

var hero1Img = getImage("cute/CharacterBoy");
var hero2Img = getImage("cute/CharacterCatGirl");
var hero3Img = getImage("cute/CharacterHornGirl");
var hero4Img = getImage("cute/CharacterPinkGirl");
var hero5Img = getImage("cute/CharacterPrincessGirl");

var goldImg = getImage("cute/GemOrange");
var timeImg = getImage("space/collisioncircle");

//}

//{selector and box images
var selectorImg = getImage("cute/Selector");

var gfx = createGraphics(selectorImg.width, selectorImg.height, JAVA2D);
gfx.background(0, 0);  
gfx.image(selectorImg, 0, 0);
var glow=gfx.get(0,0,selectorImg.width,selectorImg.height/2);

var grayImg = getImage("cute/ShadowNorth");
var topBottomIMG = getImage("cute/ShadowSouth");
var sides1IMG = getImage("cute/ShadowEast");
var sides2IMG = getImage("cute/ShadowWest");
var lockImg = getImage("cute/Key");

var fogOfWarImg = getImage("space/background");
//}

//{ creature images
var creature1Img = getImage("avatars/marcimus");
var creature2Img = getImage("avatars/mr-pants");
var creature3Img = getImage("avatars/mr-pink");
var creature4Img = getImage("avatars/old-spice-man");
var creature5Img = getImage("avatars/orange-juice-squid");
var creature6Img = getImage("avatars/purple-pi");
var creature7Img = getImage("avatars/spunky-sam");
var creatureleafLVL1 = getImage("avatars/leafers-seed");
var creaturefireLVL1 = getImage("avatars/piceratops-seed");
var creatureaquaLVL1 = getImage("avatars/aqualine-seed");

//robots
var robot1lvl1Img = getImage("avatars/robot_male_1");
var robot1lvl2Img = getImage("avatars/robot_male_2");
var robot1lvl3Img = getImage("avatars/robot_male_3");
var robot2lvl1Img = getImage("avatars/robot_female_1");
var robot2lvl2Img = getImage("avatars/robot_female_2");
var robot2lvl3Img = getImage("avatars/robot_female_3");
var robot3lvl1Img = getImage("space/beetleship");
var robot3lvl2Img = getImage("space/octopus");
var robot3lvl3Img = getImage("space/rocketship");
//}

//}

//{ environment settings
var handicap=[6,7,5,9,11,7];
var hvalue;
var groundName=["grass","dirt","paved","water","mud","wreck"];

var treeName=["tree","tree","bush","bush","rock"];

var fowstandard=1;
//}

//{ hero names
    var heroNames=[
    ["Jacob","Mason","Ethan","William","Liam","Jayden","Michael","Aiden","Flavius","Joshua","Andrew","David","Joseph","Nelson"],
    ["Sophia","Emma","Olivia","Emily","Mia","Madison","Chloe","Lilly","Natalie","Sofia","Zoey"],
    ["Kristina","Hannah","Karla","Lillian","Evelyn","Manuela","Layla","Hailey","Leah","Kaylee","Anna","Lore","Alexis"
    ]
    ];
//}


var blocksize=40;
var mouseSpeed=10;
var mouseLock=0;
var mInX=0;var mInY=0;
var offX = 0;
var offY = 0;
var ithemSelected=-1;
var generateRandomFieldOn=1;
var gold=2000;
var daygold=50;
var gDay=1;
var clockPos=0;
var heroHealthCost=10;
var unitHealthCost=5;
var nrOfEnemies=20;
var queueOffset=0;
var maxIAwait=30;
var IAwait=0;

var fSize=2;//firs in queue 

//selector variables

var smove=0;
var smoveInc=0.5;
var smaxMove=20;
var sminMove=5;

var offsetX=0;
var offsetY=0;

var startX;
var startY;

var AniSpeed=1;

var minTrans=0;
var maxTrans=255;
var pace=10;
var heroRet=false;

//menu buttons
var button = function(posx1,posy1,posx2,posy2,nr)
{
    return{
        x1: posx1,
        y1: posy1,
        x2: posx2,
        y2: posy2,
        ID: nr,
        lock:0
    };
};

var menu = function()
{
    return{
        array: []
    };
};


//{ game menue buttons
var menuBtns = menu();

var btn = button(320,350,70,30,0);
var btn2 = button(10,10,60,65,1);
var btn3 = button(80,20,44,55,2);
var btn4 = button(20,300,80,80,3);

menuBtns.array.push(btn);
menuBtns.array.push(btn2);
menuBtns.array.push(btn3);
menuBtns.array.push(btn4);
//}

//{house buttons
var houseBtns= menu();
var btn20 = button(30,160,50,50,20);
var btn21 = button(30,220,50,50,20);
var btn22 = button(30,280,50,50,20);
var btn23 = button(110,160,50,50,20);
var btn24 = button(110,220,50,50,20);
var btn25 = button(110,280,50,50,20);

var btn26 = button(320,160,50,50,20);
var btn27 = button(320,220,50,50,20);
var btn28 = button(320,280,50,50,20);
var btn29 = button(240,160,50,50,20);
var btn30 = button(240,220,50,50,20);
var btn31 = button(240,280,50,50,20);

var btn32 = button(40,60,80,80,21);
var btn33 = button(160,60,80,80,22);
var btn34 = button(280,60,80,80,23);

var btn35 = button(320,350,70,30,25);
var btn36 = button(120,350,90,30,26);
var btn37 = button(20,350,90,30,27);


houseBtns.array.push(btn23);
houseBtns.array.push(btn24);
houseBtns.array.push(btn25);
houseBtns.array.push(btn20);
houseBtns.array.push(btn21);
houseBtns.array.push(btn22);


houseBtns.array.push(btn29);
houseBtns.array.push(btn30);
houseBtns.array.push(btn31);

houseBtns.array.push(btn26);
houseBtns.array.push(btn27);
houseBtns.array.push(btn28);

houseBtns.array.push(btn32);
houseBtns.array.push(btn33);
houseBtns.array.push(btn34);

houseBtns.array.push(btn35);
houseBtns.array.push(btn36);
houseBtns.array.push(btn37);

//}

var heroPanelBtns= menu();

var btn20p = button(130,100,50,50,20);
var btn21p = button(130,160,50,50,20);
var btn22p = button(130,220,50,50,20);
var btn23p = button(220,100,50,50,20);
var btn24p = button(220,160,50,50,20);
var btn25p = button(220,220,50,50,20);
var btn37p = button(110,288,90,30,27);

heroPanelBtns.array.push(btn23p);
heroPanelBtns.array.push(btn24p);
heroPanelBtns.array.push(btn25p);
heroPanelBtns.array.push(btn20p);
heroPanelBtns.array.push(btn21p);
heroPanelBtns.array.push(btn22p);
heroPanelBtns.array.push(btn37p);

var heroPanelBtns2= menu();


var btn20p2 = button(60,100,50,50,20);
var btn21p2 = button(60,160,50,50,20);
var btn22p2 = button(60,220,50,50,20);
var btn23p2 = button(130,100,50,50,20);
var btn24p2 = button(130,160,50,50,20);
var btn25p2 = button(130,220,50,50,20);
var btn26p2 = button(220,100,50,50,20);
var btn27p2 = button(220,160,50,50,20);
var btn28p2 = button(220,220,50,50,20);
var btn29p2 = button(290,100,50,50,20);
var btn30p2 = button(290,160,50,50,20);
var btn31p2 = button(290,220,50,50,20);

var btn37p2 = button(60,288,90,30,27);

heroPanelBtns2.array.push(btn23p2);
heroPanelBtns2.array.push(btn24p2);
heroPanelBtns2.array.push(btn25p2);
heroPanelBtns2.array.push(btn20p2);
heroPanelBtns2.array.push(btn21p2);
heroPanelBtns2.array.push(btn22p2);


heroPanelBtns2.array.push(btn26p2);
heroPanelBtns2.array.push(btn27p2);
heroPanelBtns2.array.push(btn28p2);
heroPanelBtns2.array.push(btn29p2);
heroPanelBtns2.array.push(btn30p2);
heroPanelBtns2.array.push(btn31p2);

heroPanelBtns2.array.push(btn37p2);

var EnemyPanelBtns= menu();

var btn20ep = button(130,100,50,50,28);
var btn21ep = button(130,160,50,50,28);
var btn22ep = button(130,220,50,50,28);
var btn23ep = button(220,100,50,50,28);
var btn24ep = button(220,160,50,50,28);
var btn25ep = button(220,220,50,50,28);

EnemyPanelBtns.array.push(btn20ep);
EnemyPanelBtns.array.push(btn21ep);
EnemyPanelBtns.array.push(btn22ep);
EnemyPanelBtns.array.push(btn23ep);
EnemyPanelBtns.array.push(btn24ep);
EnemyPanelBtns.array.push(btn25ep);

var battlePanelBtns = menu();

var btnb0 = button(10,10,40,40,29);
var btnb1 = button(10,55,40,40,29);
var btnb2 = button(10,100,40,40,29);
var btnb3 = button(60,10,40,40,29);
var btnb4 = button(60,55,40,40,29);
var btnb5 = button(60,100,40,40,29);
var btnb6 = button(300,10,40,40,29);
var btnb7 = button(300,55,40,40,29);
var btnb8 = button(300,100,40,40,29);
var btnb9 = button(350,10,40,40,29);
var btnb10 = button(350,55,40,40,29);
var btnb11 = button(350,100,40,40,29);
var btnb12 = button(170,320,20,20,30);
var btnb13 = button(200,320,20,20,31);
var btnb14 = button(230,320,20,20,32);

//var btn37p2 = button(60,288,90,30,27);

battlePanelBtns.array.push(btnb3);
battlePanelBtns.array.push(btnb4);
battlePanelBtns.array.push(btnb5);
battlePanelBtns.array.push(btnb0);
battlePanelBtns.array.push(btnb1);
battlePanelBtns.array.push(btnb2);

battlePanelBtns.array.push(btnb6);
battlePanelBtns.array.push(btnb7);
battlePanelBtns.array.push(btnb8);
battlePanelBtns.array.push(btnb9);
battlePanelBtns.array.push(btnb10);
battlePanelBtns.array.push(btnb11);
battlePanelBtns.array.push(btnb12);
battlePanelBtns.array.push(btnb13);
battlePanelBtns.array.push(btnb14);

var upgradePanelBtns= menu();

var btn0up = button(75, 90, 250, 60,35);
var btn1up = button(75, 150, 250, 60,35);
var btn2up = button(75,210,250,60,35);
var btn3up = button(280,290,65,30,36);

btn0up.lock=1;

upgradePanelBtns.array.push(btn0up);
upgradePanelBtns.array.push(btn1up);
upgradePanelBtns.array.push(btn2up);
upgradePanelBtns.array.push(btn3up);

var damageArray = function(){
    return{
        state:0,
        lastState:20,
        damage:0,
        positions:[]
    };
};

var dArray= damageArray();
var XPAnimState=0;

var heroPanel = function()
{
    return{
        x1:100,
        y1:90,
        x2:200,
        y2:230,
        active: false,
        double:false,
        hero:-1
    };
};

var heroOutsidePanel= heroPanel();
var EnemyPanel= heroPanel();

var overHeroPanel = function() {
    var isOver=false;
    if((mouseX>heroOutsidePanel.x1)&&(heroOutsidePanel.x1+heroOutsidePanel.x2>mouseX)&&(mouseY>heroOutsidePanel.y1)&&(heroOutsidePanel.y1+heroOutsidePanel.y2>mouseY)){
        isOver=true;
    }
    return isOver;
};

var errorMenu = function(){
    return{
        text:"it's OK",
        show: false
    };
};

var eMenu = errorMenu();
var vMenu = errorMenu();
vMenu.text="Victory!!!!";

var BattleScene = function(){
    return{
        currentSelected : 0,
        totalScenes : 2
    };
};

var bScene= BattleScene();

var BattleGround = function(){
    return{
        hero:-1,
        enemy:-1,
        sceen:-1,
        x:200,
        y:200,
        r:270,
        r1:250,
        r2:400,
        show: false,
        heroXPperUnit:0,//received of course
        enemyXPperUnit:0,
        receivedGold:0
    };
};

var bGround = BattleGround();

var BattleReward = function(){
    return{
        x:10,
        y:10,
        nrOfPhases:60,
        currentIncrement:61,
        Increment:1,
        value:-1
    };
};

var reward=BattleReward();

var BattleGroundPositions = function(){
    return{
        width:52,
        height:55,
        positions:[]
    };
};

var BGP = BattleGroundPositions();
//BGP.position=[];
BGP.positions[0]=[120,135];
BGP.positions[1]=[100,200];
BGP.positions[2]=[80,265];
BGP.positions[3]=[40,135];
BGP.positions[4]=[20,200];
BGP.positions[5]=[0,265];

BGP.positions[6]=[220,135];
BGP.positions[7]=[240,200];
BGP.positions[8]=[260,266];
BGP.positions[9]=[300,135];
BGP.positions[10]=[320,200];
BGP.positions[11]=[340,266];

var Action = function(){
    return{
        Session:0,
        inProgress:false,
        initSession:0,
        finalSession:0,
        damageSession:0,
        totalFrames:7,
        x:3,
        y:2
    };
};

var Act = Action();

var animStep;

var BattleQueue = function(){
    return{
        width:50,
        height:53,
        totalN:0,
        totalQ:8,
        played:0,
        playedAK:0, //ajusted for kills
        array:[],
        skip:8,
        attacker:-1,
        attacked:-1,
        isHeroAlone:false
    };
};

var BQueue = BattleQueue();

var InitBattleQueue = function(){
    for (var i=0; i<BQueue.totalQ;i++){
        BQueue.array[i]=-1;
    }
};

InitBattleQueue();

var IAcontainer = function()
{
    return{
        array: []
    };
};

var unitArray = function ()
{
    return{
        array: []
    };
};


var availableUpgrades = function(){
    return{
        array: [],
        chosen: [0,1,2],
        totalUpgrades: -1,
        upgradeHero:-1
    };
};


var avUpgr= availableUpgrades();

var uniqUpgrade = function(gname,gdescript,gaction){
    return{
        name: gname,
        description: gdescript,
        action: gaction
    };
};

avUpgr.array.push(uniqUpgrade("Diplomacy",          "Increace the number of units","+ 1 unit in army"));
avUpgr.array.push(uniqUpgrade("Pathfinding",        "Increace the distance a hero can trave","+ 10 movements points"));
avUpgr.array.push(uniqUpgrade("Initiative",         "Increace the attack speed of a hero","+ 1 hero speed"));
avUpgr.array.push(uniqUpgrade("Weaponds Expertiece","Increace the attack of the hero","+ 10% hero damage"));
avUpgr.array.push(uniqUpgrade("Enhance Life",       "Increace the health of the hero","+ 10% hero life"));
avUpgr.array.push(uniqUpgrade("Increace finances",  "Adds 10 gold to every day gain","+ 10 gold per day"));
avUpgr.array.push(uniqUpgrade("Need the money",     "Get an instant of 1000 gold","+ 1000 gold"));
avUpgr.array.push(uniqUpgrade("Healing toch",       "Reduce the cost of healing by 1(now: unitHealthCost)"," -1 healing cost"));
avUpgr.array.push(uniqUpgrade("Inteligence",        "Decreace the experience for next level","- 10% to experience limit"));




var unit = function(ImgName,Name,maxHealth,lvl,spd,atktype,atkside,atknum,htp,uCost,lCost,lmaxXP, upTo)
{
    return{
        face : ImgName,
        selected:0,
        health:maxHealth-20,
        maxhealth:maxHealth,
        name:Name,
        level:lvl,
        speed:spd,
        queueSpeed:0,
        attackType:atktype, //1-Nearest,2-Any,3-All
        attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
        attackNum:atknum, //attack for drawing
        hitPoints: htp,
        unitCost: uCost,
        unlockCost:lCost,
        XP:0,
        skip:1, //values -1 for skiped and 1 for not skiped
        maxXP:lmaxXP,
        upgradeTo:upTo
    };
};

var unitTypeArray = [];
unitTypeArray.push(unit(robot1lvl1Img,"Robo",50,1,5,1,1,0,-5,50,250,5,3));//attack was 0
//unitTypeArray.push(unit(robot2lvl1Img,"Robota",30,1,7,2,2,4,40,200));
unitTypeArray.push(unit(robot2lvl1Img,"Robota",30,1,4,2,2,1,4,40,200,5,4));
unitTypeArray.push(unit(robot3lvl1Img,"Spacesy",25,1,3,2,1,2,-6,80,350,6,5));

unitTypeArray.push(unit(robot1lvl2Img,"Robo2",57,2,5,1,1,6,-5,50,250,5,6));//attack was 0
//unitTypeArray.push(unit(robot2lvl1Img,"Robota",30,1,7,2,2,4,40,200));
unitTypeArray.push(unit(robot2lvl2Img,"Robota2",37,2,4,2,2,8,4,40,200,5,7));
unitTypeArray.push(unit(robot3lvl2Img,"Spacesy2",27,2,3,2,1,2,-6,80,350,6,8));

//ImgName,Name,maxHealth,lvl,spd,atktype,atkside,atknum,htp,uCost,lCost,lmaxXP, upTo)
unitTypeArray.push(unit(robot1lvl3Img,"Robo3",57,3,5,1,1,7,-5,50,250,75,-1));//attack was 0
//unitTypeArray.push(unit(robot2lvl1Img,"Robota",30,1,7,2,2,4,40,200));
unitTypeArray.push(unit(robot2lvl3Img,"Robota3",37,3,4,2,2,1,4,40,200,50,-1));
unitTypeArray.push(unit(robot3lvl3Img,"Spacesy3",27,3,3,2,1,2,-6,80,350,60,-1));




var heroArray = function ()
{
    return{
        array: []
    };
};

var enemyArray = function ()
{
    return{
        array: []
    };
};

var hero = function(hImg,hName,life,aType,aSide,aNum,damage,cost,lmaxXP,upTo)
{
    return{
        face : hImg,
        selected:0,
        x:5,
        y:5,
        radius:3,
        walkpoints:50, //turn walk points
        twalkpoints:50, //real walk points
        AIpath:[],//path to follow
        offsetX:0,
        offsetY:0,
        nowFrame:0,
        name:hName,
        health:life-75,//change to 75
        maxhealth:life,
        level:1,
        speed:4,
        queueSpeed:0,
        attackType:aType, //1-Nearest,2-Any,3-All
        attackSide:aSide, //1-Enemy,2-Ally,3-Any Side
        attackNum:aNum,
        hitPoints: damage,
        unitCost: cost,
        posInArmy:2, //position in army layout, middle default
        army:[],
        diplomacy:3,
        XP:0,
        skip:1,
        alive:true,
        maxXP:lmaxXP,
        upgradeTo:upTo
    };
};

var gang = function (i,j){
    return{
        x:i,
        y:j,
        army:[]
    };
};



var heroes = heroArray();
var enemies = enemyArray();
var hero1 = hero(hero1Img,"Tobby",80,1,1,-9,500);
//
//heroes.array.push(hero1);

//hero1 = hero();
//hero1.face=hero2Img;
//hero1.name="Maggy";

//heroes.array.push(hero1);

//hero1 = hero();
//hero1.face=hero3Img;
//hero1.x=10;
//hero1.y=10;
//hero1.name="DeeDee";

//heroes.array.push(hero1);

var nrOfUnits =function(n){
    var number=0;
    
    for (var i=0;i<heroes.array[n].army.length;i++)
    {
        if (heroes.array[n].army[i]){
            number++;
        }
    }
    return number;
};

var calcTotalN = function(x,y){
  var total=0;
  
  if (heroes.array[bGround.hero].alive===true){
        total=1;
  }
  
  for (var i=0;i<heroes.array[x].army.length;i++){
      if (heroes.array[x].army[i]){
          total++;
      }
  }
  for (var i=0;i<enemies.array[y].army.length;i++){
      if (enemies.array[y].army[i].face){
          total++;
      }
  }
  
  return total;
};

var drawGoldSquere = function(x1,y1,x2,y2,color){
    
    if (color===0)
        {fill(255, 0, 0);}
    if (color===1)
        {fill(252, 141, 5);} 
    if (color===2)
        {fill(128, 126, 124);} 
    if (color===3)
        {fill(120, 226, 245);}
    if (color===4)
        {fill(240, 178, 34);}
        
    rect(x1, y1, x2, y2);
    image(grayImg, x1-1, y1+y2/2,x2+2,y2+y2*7/10);
    
};

var overQueue = function(){
    var is =-1;
    
    for (var i=0;i<BQueue.totalQ;i++)
    {
        if ((mouseX>2+BQueue.width*i+queueOffset)&&(mouseY>400-BQueue.height)&&(mouseX<2+BQueue.width*i+45+queueOffset)&&(mouseY<400-BQueue.height+45))
        {
            is=i;
        }
    }
return is;
};

var OverBattleUnits =function(){
    
    
    //image(heroes.array[bGround.hero].army[i].face,BGP.positions[i][0],BGP.positions[i][1],BGP.width,BGP.height);
    
    var is =-1;
    
    for (var i=0;i<12;i++)
    {
        if ((mouseX>BGP.positions[i][0])&&(mouseY>BGP.positions[i][1])&&(mouseX<BGP.positions[i][0]+BGP.width)&&(mouseY<BGP.positions[i][1]+BGP.height))
        {
            if (i===heroes.array[bGround.hero].posInArmy&&heroes.array[bGround.hero].alive===true)
            {
                is=i;
            }
            
            if ((i<6)&&(heroes.array[bGround.hero].army[i]))
            {
                is=i;
            }
            
            if ((i>=6)&&(enemies.array[bGround.enemy].army[i-6].face))
            {
                is=i;
            }
        }
    }
    
    return is;
};

var overBattleMenu = function(){
    var is =-1;
    
    for (var i=0;i<12;i++)
    {
        if ((mouseX>battlePanelBtns.array[i].x1)&&(mouseY>battlePanelBtns.array[i].y1)&&(mouseX<battlePanelBtns.array[i].x1+battlePanelBtns.array[i].x2)&&(mouseY<battlePanelBtns.array[i].y1+battlePanelBtns.array[i].y2))
        {
            if (i===heroes.array[bGround.hero].posInArmy&&heroes.array[bGround.hero].alive===true)
            {
                is=i;
            }
            
            if ((i<6)&&(heroes.array[bGround.hero].army[i]))
            {
                is=i;
            }
            
            if ((i>=6)&&(enemies.array[bGround.enemy].army[i-6].face))
            {
                is=i;
            }
        }
    }
    
    return is;
};

var overRBMenu = function(){
    var is =-1;
    
    for (var i=12;i<15;i++)
    {
        var rX=mouseX-battlePanelBtns.array[i].x1;
        var rY=mouseY-battlePanelBtns.array[i].y1;
        var rXY=sqrt(rX*rX+rY*rY);
        if(rXY<battlePanelBtns.array[i].x2/2+3){  //3 is prop from the button draw
            is=i;
        }
    }
    
    return is;
};
var resetSkip = function(){
      for (var i=0;i<6;i++){
        if (enemies.array[bGround.enemy].army[i].face){
            enemies.array[bGround.enemy].army[i].skip=1;
        }
        if (heroes.array[bGround.hero].posInArmy===i){
              heroes.array[bGround.hero].skip=1;
         }
        if(heroes.array[bGround.hero].army[i]){
            heroes.array[bGround.hero].army[i].skip=1;
        }
      }
};

var isBiggest = function (x){
    var biggest=true;
    var big=0;
    if (x>5){
        big=enemies.array[bGround.enemy].army[x-6].speed;
    }else{
        if (heroes.array[bGround.hero].posInArmy===x){
            big=heroes.array[bGround.hero].speed;
        }else{
            big=heroes.array[bGround.hero].army[x].speed;
        }
    }
    
    for (var i=0;i<6;i++){
        if (enemies.array[bGround.enemy].army[i].face){
            if (enemies.array[bGround.enemy].army[i].speed>big){biggest=false;}
        }
        if (heroes.array[bGround.hero].posInArmy===i){
              if(heroes.array[bGround.hero].speed>big){biggest=false;}
         }
        if(heroes.array[bGround.hero].army[i]){
            if(heroes.array[bGround.hero].army[i].speed>big){biggest=false;}
        }
      }
    
    return biggest;
};

var checkQueueSkip = function(should){
    var isLocked=0;
    if ((BQueue.playedAK%BQueue.totalN===0)&&(should===undefined)&&(btnb14.lock===1)&&isBiggest(BQueue.array[0])){
        resetSkip();
    }
    
    
    if (BQueue.array[0]>5){
        if (enemies.array[bGround.enemy].army[BQueue.array[0]-6].skip===-1){
            isLocked=1;
        }
    }
    else{
          if (heroes.array[bGround.hero].posInArmy===BQueue.array[0]){
              if (heroes.array[bGround.hero].skip===-1){
                  isLocked=1;
              }
          }else{
              if (heroes.array[bGround.hero].army[BQueue.array[0]].skip===-1){
                  isLocked=1;
              }
          }
     }
     
     battlePanelBtns.array[12].lock=isLocked;
     
     
     var debconsole=[];
     
       for (var i=0;i<BQueue.totalQ;i++){
      if (BQueue.array[i]>5){
            debconsole[i]=enemies.array[bGround.enemy].army[BQueue.array[i]-6].skip;
        }
      else{
          if (heroes.array[bGround.hero].posInArmy===BQueue.array[i]){
                debconsole[i]=heroes.array[bGround.hero].skip;
          }else{
              if (heroes.array[bGround.hero].army[BQueue.array[i]]){
              debconsole[i]=heroes.array[bGround.hero].army[BQueue.array[i]].skip;
              }
          }
      }
  }
  
  //debug(debconsole,BQueue.totalN,BQueue.played);
};

var drawTurnQueue = function(posX,posY,Csize,prop){
    fill(0, 0, 0);
    stroke(11, 0, 217);
    rect(posX,posY,1,Csize);
    triangle(posX-prop,posY-prop,posX+prop+2,posY-prop,posX+1,posY+1);
    triangle(posX-prop,posY+Csize+prop+2,posX+prop+2,posY+Csize+prop+2,posX+1,posY+Csize+1);
    stroke(0, 0, 0);
};

var drawQueue = function(oq,ou,om){
    
  //draw firs in queue
  
  if (queueOffset>0){
      queueOffset=queueOffset-4;
  }
  
  if (queueOffset<4){
      queueOffset=0;
  }
  
  if (queueOffset<4){
      fSize=2;
  }
  else{
      if(queueOffset<BQueue.width/4+4){
          fSize=1.5;
      }
      else{
          if (queueOffset<BQueue.width/4+4){
              fSize=1;
          }else{
              if(queueOffset<BQueue.width*3/4+4){
                  fSize=0.5;
              }
          }
      }
  }
  
  if (BQueue.totalQ>0){
  
  if (BQueue.array[0]>5){
            drawGoldSquere (2-fSize+queueOffset,400-BQueue.height-fSize,45+fSize*2,45+fSize*2,0);
            image(enemies.array[bGround.enemy].army[BQueue.array[0]-6].face,2-fSize+queueOffset,400-BQueue.height-fSize,45+fSize*2,45+fSize*2);
        }
      else{
          if (heroes.array[bGround.hero].posInArmy===BQueue.array[0]){
              drawGoldSquere (2-fSize+queueOffset,400-BQueue.height-fSize,45+fSize*2,45+fSize*2,1);
              image(heroes.array[bGround.hero].face,2-fSize+queueOffset,400-BQueue.height-fSize,45+fSize*2,45+fSize*2);
          }else{
              drawGoldSquere (2-fSize+queueOffset,400-BQueue.height-fSize,45+fSize*2,45+fSize*2,1);
              image(heroes.array[bGround.hero].army[BQueue.array[0]].face,2-fSize+queueOffset,400-BQueue.height-fSize,45+fSize*2,45+fSize*2);
          }
      }
  }
    
 //move queue
    
  for (var i=1;i<BQueue.skip;i++){
      if (BQueue.array[i]>5){
            drawGoldSquere (2+BQueue.width*i+queueOffset,400-BQueue.height,45,45,0);
            image(enemies.array[bGround.enemy].army[BQueue.array[i]-6].face,2+BQueue.width*i+queueOffset,400-BQueue.height,45,45);
        }
      else{
          if (heroes.array[bGround.hero].posInArmy===BQueue.array[i]){
              drawGoldSquere (2+BQueue.width*i+queueOffset,400-BQueue.height,45,45,1);
              image(heroes.array[bGround.hero].face,2+BQueue.width*i+queueOffset,400-BQueue.height,45,45);
          }else{
              drawGoldSquere (2+BQueue.width*i+queueOffset,400-BQueue.height,45,45,1);
              image(heroes.array[bGround.hero].army[BQueue.array[i]].face,2+BQueue.width*i+queueOffset,400-BQueue.height,45,45);
          }
      }
  }
  
  if (queueOffset!==0&&BQueue.skip===BQueue.totalQ&&BQueue.array[0]!==undefined){
    if((BQueue.playedAK)%(BQueue.totalN)===0){
        drawTurnQueue(queueOffset-1,400-BQueue.height,45,2);
    }
  }
  
  for(var i=1;i<BQueue.skip;i++){
      if((i+BQueue.playedAK)%(BQueue.totalN)===0&&BQueue.array[0]!==undefined){
        drawTurnQueue(BQueue.width*i+queueOffset-1,400-BQueue.height,45,2);
      }
  }
  
 //statonary queue for units that did not move
   for (var i=BQueue.skip;i<BQueue.totalQ;i++){
      if (BQueue.array[i]>5){
            drawGoldSquere (2+BQueue.width*i,400-BQueue.height,45,45,0);
            image(enemies.array[bGround.enemy].army[BQueue.array[i]-6].face,2+BQueue.width*i,400-BQueue.height,45,45);
        }
      else{
          if (heroes.array[bGround.hero].posInArmy===BQueue.array[i]){
              drawGoldSquere (2+BQueue.width*i,400-BQueue.height,45,45,1);
              image(heroes.array[bGround.hero].face,2+BQueue.width*i,400-BQueue.height,45,45);
          }else{
              drawGoldSquere (2+BQueue.width*i,400-BQueue.height,45,45,1);
              image(heroes.array[bGround.hero].army[BQueue.array[i]].face,2+BQueue.width*i,400-BQueue.height,45,45);
          }
      }
  }
 
  
  for(var i=BQueue.skip;i<BQueue.totalQ;i++){
      if((i+BQueue.playedAK)%(BQueue.totalN)===0&&BQueue.array[0]!==undefined){
        drawTurnQueue(BQueue.width*i-1,400-BQueue.height,45,2);
      }
  }
  
};

var drawBSelector = function(x,y,s,c){

    var lean=2;
    var prop=3;
    var step=12;
    var increment=360/step;
    
    noFill();
    strokeWeight(5);
    
    if (c===-1){
        stroke(0, 0, 0);
    }
    if (c===0){
        stroke(255, 0, 0);
    }
    if (c===1){
        stroke(0, 0, 255);
    }
    if (c===2){
        stroke(232, 232, 232);
    }
    
    if (c===3){
        stroke(110, 177, 194);
    }
    
    ellipse(x+s/2, y+s*3/4, (s/prop)*2+smove, (s/prop)+smove);
    ellipse(x+s/2, y+s*3/4, (s/prop)*4+smove, (s/prop)*2+smove);

    for (var i=0+smove;i<=360;i+=increment){
        bezier(cos(i)*s+x+s/2, sin(i)*(s/lean)+y+s*3/4, cos(i)*(s/prop)+x+s/2, sin(i)*((s/prop)/lean)+y+s*3/4, cos(i+increment)*(s/prop)+x+s/2, sin(i+increment)*((s/prop)/lean)+y+s*3/4, cos(i+increment)*s+x+s/2, sin(i+increment)*(s/lean)+y+s*3/4); 
    }
    
    strokeWeight(1);
    
        //ellipse (x+(h/2),y+h*3/4,h,h/2);
};

var drawHeroe= function(i,x,y,zoom)
{
    
    if(!(zoom))
    {zoom=1;}
    blocksize=blocksize*zoom;
    
    if((x)&&(y)){
        image(heroes.array[i].face,x,y,blocksize,blocksize);
    }
    else
    {
    image(heroes.array[i].face  , heroes.array[i].x*blocksize+offsetX+heroes.array[i].offsetX, heroes.array[i].y*(blocksize/2)+offsetY-(blocksize/4)+heroes.array[i].offsetY ,blocksize,blocksize);
    }
    
    blocksize=blocksize/zoom;
};

var drawMonster= function(i,x,y,zoom)
{
    
    if(!(zoom))
    {zoom=1;}
    blocksize=blocksize*zoom;
    
    if((x)&&(y)){
        var lead=0;
           while (!enemies.array[i].army[lead].face){
                lead++;  
           }
        
        image(enemies.array[i].army[lead].face,x,y,blocksize,blocksize);
    }
    /*else
    {
    image(heroes.array[i].face  , heroes.array[i].x*blocksize+offsetX+heroes.array[i].offsetX, heroes.array[i].y*(blocksize/2)+offsetY-(blocksize/4)+heroes.array[i].offsetY ,blocksize,blocksize);
    }*/
    
    blocksize=blocksize/zoom;
};


//house
var House= function(){
    return{
        inHouse: -1,
        reservs:[]
    };
};

var myHouse= House();
for (var i=0;i<6;i++){
    myHouse.reservs[i]=[];
}

//house menu
var HouseMenu= function(){
    return{
        pressed: -1,
        units:[]
    };
};

var selected = function()
{
    return{
        selected : 0,
        x:0,
        y:0
    };
};

var curSel = selected();
curSel.selected=0;


var hMenu=HouseMenu();
hMenu.units.push(hero(hero1Img,"Soldier",80,1,1,3,-9,500,90,-1));
//"Tobby"
hMenu.units.push(hero(hero2Img,"Healer",80,3,2,4,3,400,80,-1));//xp was 80
//"Maggy"
hMenu.units.push(hero(hero3Img,"Mage",80,3,1,5,-7,700,1,-1));//xp was 100 
//"DeeDee"

//1-Nearest,2-Any,3-All
//1-Enemy,2-Ally,3-Any Side


//verify if over buttons

var nearHero = function (n){
    var theHero=-1;
    for (var indx=0; indx<heroes.array.length;indx++)            {
        if ((heroes.array[indx].x-1===heroes.array[n].x && heroes.array[indx].y-1===heroes.array[n].y)||
        (heroes.array[indx].x===heroes.array[n].x && heroes.array[indx].y-1===heroes.array[n].y)||
        (heroes.array[indx].x+1===heroes.array[n].x && heroes.array[indx].y-1===heroes.array[n].y)||
        (heroes.array[indx].x-1===heroes.array[n].x && heroes.array[indx].y===heroes.array[n].y)||
        (heroes.array[indx].x+1===heroes.array[n].x && heroes.array[indx].y===heroes.array[n].y)||
        (heroes.array[indx].x-1===heroes.array[n].x && heroes.array[indx].y+1===heroes.array[n].y)||
        (heroes.array[indx].x===heroes.array[n].x && heroes.array[indx].y+1===heroes.array[n].y)||
        (heroes.array[indx].x+1===heroes.array[n].x && heroes.array[indx].y+1===heroes.array[n].y)) {
                theHero=indx;
        }
    }
            return theHero;
};


var overUnitMenu = function(){
    //rect(175, 160, 50, 50*hMenu.units.length);
    var over= -1;
    for (var i=0;i<hMenu.units.length;i++)
    {
        if ((mouseX>175)&&(mouseY>160+(40*i))&&(mouseX<225)&&(mouseY<160+50*(i+1)))
        {
            over=i;
        }
    }
    return over;   
};

var overPannelButtons = function(n){
    
    var over= -1;
    if (n===-1){
        for (var i=0;i<heroPanelBtns.array.length;i++)
        {
            if ((mouseX>heroPanelBtns.array[i].x1)&&(mouseY>heroPanelBtns.array[i].y1)&&(mouseX<heroPanelBtns.array[i].x1+heroPanelBtns.array[i].x2)&&(mouseY<heroPanelBtns.array[i].y1+heroPanelBtns.array[i].y2))
            {
                over=i;
            }
        }
    }else{
        for (var i=0;i<heroPanelBtns2.array.length;i++)
        {
            if ((mouseX>heroPanelBtns2.array[i].x1)&&(mouseY>heroPanelBtns2.array[i].y1)&&(mouseX<heroPanelBtns2.array[i].x1+heroPanelBtns2.array[i].x2)&&(mouseY<heroPanelBtns2.array[i].y1+heroPanelBtns2.array[i].y2))
            {
                over=i;
            }
        }
    }
    return over;   
};

var overUpgradeButtons = function(){
    
    var over= -1;
    
    for (var i=0;i<upgradePanelBtns.array.length;i++)
    {
        if ((mouseX>upgradePanelBtns.array[i].x1)&&(mouseY>upgradePanelBtns.array[i].y1)&&(mouseX<upgradePanelBtns.array[i].x1+upgradePanelBtns.array[i].x2)&&(mouseY<upgradePanelBtns.array[i].y1+upgradePanelBtns.array[i].y2))
        {
            over=i;
        }
    }
    
    return over;   
};


var overHouseMenu = function(){
    
    var over= -1;
    for (var i=0;i<houseBtns.array.length;i++)
    {
        if ((mouseX>houseBtns.array[i].x1)&&(mouseY>houseBtns.array[i].y1)&&(mouseX<houseBtns.array[i].x1+houseBtns.array[i].x2)&&(mouseY<houseBtns.array[i].y1+houseBtns.array[i].y2))
        {
            over=i;
        }
    }
    return over;   
};

var drawUnitMenu =function(){
    var idx;
    fill(240, 188, 115);  
    rect(175, 160, 50, 40*hMenu.units.length+5);
    for (idx=0;idx <hMenu.units.length;idx++){
        fill(240, 168, 67);
        rect(180, 163+(idx*40), 40, 37);
        image(hMenu.units[idx].face,180,163+(idx*40),40, 37);
    }
};


//clone function because it had to be done

var returnHeroe =function(n){
    var rendy=floor(random(0,5));
     return{
        face : hMenu.units[n].face,
        selected:hMenu.units[n].selected,
        x:hMenu.units[n].x,
        y:hMenu.units[n].y,
        radius:hMenu.units[n].radius,
        walkpoints:hMenu.units[n].walkpoints, //turn walk points
        twalkpoints:hMenu.units[n].twalkpoints, //real walk points
        AIpath:[],//path to follow
        offsetX:hMenu.units[n].offsetX,
        offsetY:hMenu.units[n].offsetY,
        nowFrame:hMenu.units[n].nowFrame,
        name:heroNames[n][floor(random(0,heroNames[n].length))],//hMenu.units[n].name,
        health:hMenu.units[n].health,
        maxhealth:hMenu.units[n].maxhealth,
        level:hMenu.units[n].level,
        speed:hMenu.units[n].speed,
        queueSpeed:hMenu.units[n].queueSpeed,
        attackType:hMenu.units[n].attackType, //1-Nearest,2-Any,3-All
        attackSide:hMenu.units[n].attackSide, //1-Enemy,2-Ally,3-Any Side
        attackNum:hMenu.units[n].attackNum,
        hitPoints: hMenu.units[n].hitPoints,
        unitCost: hMenu.units[n].unitCost,
        posInArmy:hMenu.units[n].posInArmy, //position in army layout, middle default
        army:[],
        diplomacy:hMenu.units[n].diplomacy,
        XP: hMenu.units[n].XP,
        skip: hMenu.units[n].skip,
        alive:hMenu.units[n].alive,
        maxXP:hMenu.units[n].maxXP,
        upgradeTo:hMenu.units[n].upgradeTo
    };
};

var returnUnit = function(n)
{
    return{
        face : hMenu.units[n].face,
        selected:hMenu.units[n].selected,
        health:hMenu.units[n].health,
        maxhealth:hMenu.units[n].maxhealth,
        name:hMenu.units[n].name,
        level:hMenu.units[n].level,
        speed:hMenu.units[n].speed,
        queueSpeed:hMenu.units[n].queueSpeed,
        attackType:hMenu.units[n].attackType, //1-Nearest,2-Any,3-All
        attackSide:hMenu.units[n].attackSide, //1-Enemy,2-Ally,3-Any Side
        attackNum:hMenu.units[n].attackNum,
        hitPoints: hMenu.units[n].hitPoints,
        unitCost: hMenu.units[n].unitCost,
        unlockCost:hMenu.units[n].unlockCost,
        XP: hMenu.units[n].XP,
        skip: hMenu.units[n].skip,
        maxXP:hMenu.units[n].maxXP,
        upgradeTo:hMenu.units[n].upgradeTo
    };
};

var copyUnit = function(theUnit)
{
    return{
        face : theUnit.face,
        selected:theUnit.selected,
        health:theUnit.health,
        maxhealth:theUnit.maxhealth,
        name:theUnit.name,
        level:theUnit.level,
        speed:theUnit.speed,
        queueSpeed:theUnit.queueSpeed,
        attackType:theUnit.attackType, //1-Nearest,2-Any,3-All
        attackSide:theUnit.attackSide, //1-Enemy,2-Ally,3-Any Side
        attackNum:theUnit.attackNum,
        hitPoints: theUnit.hitPoints,
        unitCost: theUnit.unitCost,
        unlockCost:theUnit.unlockCost,
        XP: theUnit.XP,
        skip: theUnit.skip,
        maxXP: theUnit.maxXP,
        upgradeTo: theUnit.upgradeTo
    };
};


var attackTypeText = function(x,y){
    var returnText="";
    if ((x===1)&&(y===1)){
        returnText="Attacks closest opponent";
    }
    if ((x===2)&&(y===1)){
        returnText="Attacks any opponent";
    }
    if ((x===2)&&(y===2)){
        returnText="Affects any ally";
    }
    if ((x===2)&&(y===3)){
        returnText="Can target any unit";
    }
    if ((x===3)&&(y===1)){
        returnText="Affects all opponents";
    }
    if ((x===3)&&(y===2)){
        returnText="Affects all allies";
    }
    if ((x===3)&&(y===3)){
        returnText="Affects entire field";
    }
    
    //attackType:atktype, //1-Nearest,2-Any,3-All
    //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
    return returnText;
};

var drawUnitRect= function(x1,y1,x2,y2,unitID){
    fill(245, 220, 240);   
    rect(x1,y1,x2,y2);
    image(unitTypeArray[unitID].face,x1+10,y1+10,50,50);
    fill(5, 5, 5);
    text(unitTypeArray[unitID].name, x1+10, y1+70); 
    text("Lvl: "+unitTypeArray[unitID].level, x1+70, y1+70); 
    text("Health: "+unitTypeArray[unitID].maxhealth, x1+10, y1+90); 
    text("Speed: "+unitTypeArray[unitID].speed, x1+10, y1+100); 
    text("Damage: "+unitTypeArray[unitID].hitPoints*(-1), x1+10, y1+110); 
    text("Here are the attack types", x1+10, y1+120);
    
    text(attackTypeText(unitTypeArray[unitID].attackType,unitTypeArray[unitID].attackSide), x1+10, y1+130); 
    
    text("Unit Cost:        "+unitTypeArray[unitID].unitCost, x1+10, y1+190); 
    image(goldImg, x1+65, y1+175 ,10,15);
    
    fill(255, 255, 255);
        
        //attackType:atktype, //1-Nearest,2-Any,3-All
        //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
};

var drawUnitRect2= function(x1,y1,x2,y2,unit){
    fill(245, 253, 255);   
    rect(x1,y1,x2,y2);
    image(unit.face,x1+10,y1+10,50,50);
    fill(5, 5, 5);
    text(unit.name, x1+10, y1+70); 
    text("Lvl: "+unit.level, x1+70, y1+70); 
    text("Health: "+unit.maxhealth, x1+10, y1+90); 
    text("Speed: "+unit.speed, x1+10, y1+100); 
    text("Damage: "+unit.hitPoints*(-1), x1+10, y1+110); 
    text("Here are the attack types", x1+10, y1+120);
    
    text(attackTypeText(unit.attackType,unit.attackSide), x1+10, y1+130); 
    
    
    fill(ourColors[9], ourColors[10], ourColors[11]);
    text("Unit Cost:        "+unit.unitCost, x1+10, y1+190); 
    image(goldImg, x1+65, y1+175 ,10,15);
    
    fill(255, 255, 255);
        
        //attackType:atktype, //1-Nearest,2-Any,3-All
        //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
};

var drawUnitRect3= function(x1,y1,x2,y2,unit){
    fill(164, 235, 221);   
    rect(x1,y1,x2,y2);
    image(unit.face,x1+10,y1+10,50,50);
    fill(5, 5, 5);
    text(unit.name, x1+10, y1+70); 
    text("Lvl: "+unit.level, x1+70, y1+70); 
    text("Health: "+unit.health+"\/"+unit.maxhealth, x1+10, y1+90); 
    text("Speed: "+unit.speed, x1+10, y1+100); 
    text("Damage: "+unit.hitPoints*(-1), x1+10, y1+110); 
    text("Here are the attack types", x1+10, y1+120);
    
    text(attackTypeText(unit.attackType,unit.attackSide), x1+10, y1+130); 
    
    text("XP: "+unit.XP+"/"+unit.maxXP, x1+10, y1+140);
    fill(ourColors[9], ourColors[10], ourColors[11]);
    text("Unit Cost:        "+unit.unitCost, x1+10, y1+190); 
    image(goldImg, x1+65, y1+175 ,10,15);
    
    fill(255, 255, 255);
        
        //attackType:atktype, //1-Nearest,2-Any,3-All
        //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
};

var drawUnitRect4= function(x1,y1,x2,y2,unit){
    noStroke();
    fill(164, 235, 221);   
    rect(x1,y1,x2,y2);
    image(unit.face,x1+10,y1+10,50,50);
    fill(5, 5, 5);
    text(unit.name, x1+10, y1+70); 
    text("Lvl: "+unit.level, x1+70, y1+70); 
    text("Health: "+unit.health+"\/"+unit.maxhealth, x1+10, y1+90); 
    text("Speed: "+unit.speed, x1+10, y1+100); 
    text("Damage: "+unit.hitPoints*(-1), x1+10, y1+110); 
    text("Here are the attack types", x1+10, y1+120);
    
    text(attackTypeText(unit.attackType,unit.attackSide), x1+10, y1+130); 
    
    text("XP: "+unit.XP+"/"+unit.maxXP, x1+10, y1+140);
    fill(ourColors[9], ourColors[10], ourColors[11]);
    
    fill(255, 255, 255);
        
        //attackType:atktype, //1-Nearest,2-Any,3-All
        //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
};


var drawUnitRect5= function(x1,y1,x2,y2,unit){
    //fill(164, 235, 221); 
    var c = color(164, 235, 221,140);
    var value = alpha(c);
    fill(0, 0, 0, value);
    rect(x1,y1,x2,y2);
    image(unit.face,x1+10,y1+10,50,50);
    fill(255, 255, 255);
    text(unit.name, x1+10, y1+70); 
    text("Lvl: "+unit.level, x1+70, y1+70); 
    text("Health: "+unit.health+"\/"+unit.maxhealth, x1+10, y1+90); 
    text("Speed: "+unit.speed, x1+10, y1+100); 
    text("Damage: "+unit.hitPoints*(-1), x1+10, y1+110); 
    text("Here are the attack types", x1+10, y1+120);
    
    text(attackTypeText(unit.attackType,unit.attackSide), x1+10, y1+130); 
    
    text("XP: "+unit.XP+"/"+unit.maxXP, x1+10, y1+140);
    fill(ourColors[9], ourColors[10], ourColors[11]);
    
    fill(255, 255, 255);
        
        //attackType:atktype, //1-Nearest,2-Any,3-All
        //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
};


var pressUnitButton = function(n,pos){
    if (gold-hMenu.units[n].unitCost<0){
        eMenu.text="Not enough money to buy the unit !";
        eMenu.show=true;
        ourColors[9]=255;
    }
    else{
        if (hMenu.units[n].hasOwnProperty('posInArmy')){
            if(pos<6){
                if(myHouse.inHouse===-1){
                    var newHeroe=returnHeroe(n); 
                    heroes.array[heroes.array.length]=newHeroe;
                    heroes.array[heroes.array.length-1].x=startX;
                    heroes.array[heroes.array.length-1].y=startY-1;
                    gold=gold-hMenu.units[n].unitCost;
                    houseBtns.array[hMenu.pressed].lock=0;
                    hMenu.pressed=-1;
                    heroes.array[heroes.array.length-1].posInArmy=pos;
                }else{eMenu.text="There is another hero in the house !";eMenu.show=true;}
            }else{eMenu.text="Hero cannot be bought in garrison !";eMenu.show=true;}
        }
        else
        {
            if(pos<6){
                if(myHouse.inHouse!==-1){ 
                    if(nrOfUnits(myHouse.inHouse)<heroes.array[myHouse.inHouse].diplomacy){
                        var newUnit=returnUnit(n);
                        heroes.array[myHouse.inHouse].army[pos]=newUnit;
                        houseBtns.array[hMenu.pressed].lock=0;
                        gold=gold-hMenu.units[n].unitCost;
                        hMenu.pressed=-1;
                    }else{eMenu.text="Hero does not have enough diplomacy !";eMenu.show=true;
                    }
                    
                }
                else
                {
                    eMenu.text="There is no hero in the house !";eMenu.show=true;
                }
            }
            else{
                    var newUnit=returnUnit(n);
                    myHouse.reservs[pos-6]=newUnit;
                    houseBtns.array[hMenu.pressed].lock=0;
                    gold=gold-hMenu.units[n].unitCost;
                    hMenu.pressed=-1;
            }
        }
    }
};

var pressHouseButton = function(n){
    
    var idx;
    var numb = houseBtns.array[n].ID;
    if (numb===25){
        if (hMenu.pressed!==-1){houseBtns.array[hMenu.pressed].lock=0;}
        hMenu.pressed=-1;
        worldstate=1;
    }
    if (numb===26){
        for (var i=0;i<12;i++)
        {
        if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].posInArmy===i)&&(hMenu.pressed===i)){
            if((heroes.array[myHouse.inHouse].maxhealth-heroes.array[myHouse.inHouse].health)*heroHealthCost<gold){
            gold=gold-(heroes.array[myHouse.inHouse].maxhealth-heroes.array[myHouse.inHouse].health)*heroHealthCost;
            heroes.array[myHouse.inHouse].health=heroes.array[myHouse.inHouse].maxhealth;
            
            }
            else{heroes.array[myHouse.inHouse].health=heroes.array[myHouse.inHouse].health+floor(gold/heroHealthCost);
            gold=gold-floor(gold/heroHealthCost)*heroHealthCost;
            }
            
            if(heroes.array[myHouse.inHouse].health>1){
                heroes.array[myHouse.inHouse].alive=true;
            }
            
        }
        if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].army[i])&&(hMenu.pressed===i)){
            if((heroes.array[myHouse.inHouse].army[i].maxhealth-heroes.array[myHouse.inHouse].army[i].health)*unitHealthCost<gold){
            gold=gold-(heroes.array[myHouse.inHouse].army[i].maxhealth-heroes.array[myHouse.inHouse].army[i].health)*unitHealthCost;
            heroes.array[myHouse.inHouse].army[i].health=heroes.array[myHouse.inHouse].army[i].maxhealth;
            }
            else{heroes.array[myHouse.inHouse].army[i].health=heroes.array[myHouse.inHouse].army[i].health+floor(gold/unitHealthCost);
            gold=gold-floor(gold/unitHealthCost)*unitHealthCost;
            }
        }
        if((i>5)&&(myHouse.reservs[i-6].face)&&(hMenu.pressed===i)){
            if((myHouse.reservs[i-6].maxhealth-myHouse.reservs[i-6].health)*unitHealthCost<gold){
            gold=gold-(myHouse.reservs[i-6].maxhealth-myHouse.reservs[i-6].health)*unitHealthCost;
            myHouse.reservs[i-6].health=myHouse.reservs[i-6].maxhealth; 
            }
            else{
                myHouse.reservs[i-6].health=myHouse.reservs[i-6].health+floor(gold/unitHealthCost);
            gold=gold-floor(gold/unitHealthCost)*unitHealthCost;
            }
        }
    }
    }
    
    if (numb===27){
        for (var i=0;i<12;i++)
        {
        if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].posInArmy===i)&&(hMenu.pressed===i)){
            heroes.array.splice(myHouse.inHouse,1);
            myHouse.inHouse=-1;
            houseBtns.array[i].lock=0;
            hMenu.pressed=-1;
        }
        if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].army[i])&&(hMenu.pressed===i)){
            delete heroes.array[myHouse.inHouse].army[i];
            houseBtns.array[i].lock=0;
            hMenu.pressed=-1;
        }
        if((i>5)&&(myHouse.reservs[i-6].face)&&(hMenu.pressed===i)){
            myHouse.reservs[i-6]=[];
            houseBtns.array[i].lock=0;
            hMenu.pressed=-1;
        }
    }
    }
    
    
    if (n<12)
    {
            if(hMenu.pressed===n)
            {hMenu.pressed=-1;houseBtns.array[n].lock=0;}
            else 
            {
                if (((myHouse.inHouse!==-1)&&((n===heroes.array[myHouse.inHouse].posInArmy)||(heroes.array[myHouse.inHouse].army[n])))||((n>5)&&(myHouse.reservs[n-6].face)))
                {
                    if (hMenu.pressed!==-1){
                        houseBtns.array[hMenu.pressed].lock=0;
                        hMenu.pressed=-1;
                        houseBtns.array[n].lock=1;
                        hMenu.pressed=n;
                    }
                    else{
                        houseBtns.array[n].lock=1;
                        hMenu.pressed=n;
                    }
                }
                else{
                if(hMenu.pressed!==-1)
                {houseBtns.array[hMenu.pressed].lock=0;}
                hMenu.pressed=n;
                houseBtns.array[n].lock=1;
                }
            }      
    }
    if ((n===12)||(n===13)||(n===14)){
        if(houseBtns.array[n].lock===0){
            if(gold-unitTypeArray[defUnits[n-12]].unlockCost>=0)
        {
            houseBtns.array[n].lock=1;
            hMenu.units.push(unitTypeArray[defUnits[n-12]]);
            gold=gold-unitTypeArray[defUnits[n-12]].unlockCost;
        }
        else{
            eMenu.text="Not enough money to unlock this unit type !";
            eMenu.show=true;
            ourColors[0+3*(n-12)]=255;
            ourColors[1+3*(n-12)]=8;
            ourColors[2+3*(n-12)]=8;
        }
    }
    }
    
    
};

var drawReward = function(){
    
    var incrimi;
    if (reward.currentIncrement<reward.nrOfPhases/2){
        incrimi=reward.currentIncrement*reward.Increment;
    }else{
        incrimi=(reward.nrOfPhases/2)*reward.Increment;
    }
    
    var f = createFont("Terminal");
    textFont(f, 12);
    textAlign(RIGHT, TOP);
    fill(247, 255, 0);
    text("+ "+reward.value, reward.x*blocksize+offsetX+blocksize, reward.y*(blocksize/2)+offsetY+blocksize/4-incrimi); 
    fill(255, 255, 255);
    image(goldImg, reward.x*blocksize+offsetX+blocksize, reward.y*(blocksize/2)+offsetY+blocksize/4-15-incrimi ,20,30);
    //drawGrownd(gMap.map[i][j],i*blocksize+offsetX,j*(blocksize/2)+offsetY);
    f = createFont("Arial", 5);
    textFont(f, 12);
    textAlign(LEFT, BOTTOM);
    
    /*x:-1,
        y:-1,
        nrOfPhases:6,
        currentIncrement:6,
        Increment:2,
        value:-1*/
        
        reward.currentIncrement++;
};


var drawClock = function(){
    image(timeImg, 330, 324 ,20,20);
    strokeWeight(2);
    stroke(43, 38, 38);
    
    line(340, 334 ,345,334);
    switch (clockPos) {
    case 0:
        line(340, 324 ,340,334);
    break;
    case 1:
        line(345, 329 ,340,334);clockPos++;
    break;
    case 2:
        line(345, 339 ,340,334);clockPos++;
    break;
    case 3:
        line(340, 344 ,340,334);clockPos++;
    break;
    case 4:
        line(335, 339 ,340,334);clockPos++;
    break;
    case 5:
        line(335, 329 ,340,334);clockPos=0;
    break;
    }
};

var drawGraySquere = function(x1,y1,x2,y2,color){
    if (color===0)
        {fill(255, 255, 255);}
    if (color===1)
        {fill(252, 141, 5);} 
    if (color===2)
        {fill(128, 126, 124);} 
    if (color===3)
        {fill(120, 226, 245);}
    if (color===4)
        {fill(240, 178, 34);}
    if (color===5)
        {noFill();}
        
    rect(x1, y1, x2, y2);
    image(topBottomIMG, x1, y1-y2*8/10,x2,y2+y2*7/10);
    image(topBottomIMG, x1, y1+y2/20,x2,y2+y2*7/10);
    image( sides1IMG, x1, y1-y2*4/10,x2,y2+y2*7/10);
    image( sides2IMG, x1, y1-y2*4/10,x2/3,y2+y2*7/10);
    
};


var drawInitScreen = function(){
    background(195, 208, 240);
    fill(75, 240, 67);    
    rect(0, 200, 400, 200);
    fill(131, 179, 140);
    triangle(110,200,250,50,330,200);
    triangle(160,200,340,30,480,200);
    fill(255, 255, 255);
    triangle(206,95,250,50,230,90);
    triangle(220,80,250,50,256,95);
    triangle(250,80,250,50,272,90);
    triangle(264,101,340,30,319,77);
    triangle(287,105,340,30,346,77);
    triangle(337,83,340,30,390,91);
    
    var i=206;
    var j=155;
    var Initbl=60;
    //trees
    image(tree2Img, 199, 169 ,26,39);
    image(tree2Img, 153, 169 ,26,39);
    image(tree2Img, 124, 172 ,30,45);
    image(tree2Img, 163, 168 ,36,54);
    image(tree2Img, 95, 173 ,46,69);
    image(tree2Img, 178, 173 ,46,69);
    image(tree2Img, 131, 184 ,50,75);
    
    //house
    image(house4Img2, i, j+Initbl,Initbl,Initbl);
    image(house6Img2, i+Initbl, j+Initbl,Initbl,Initbl);
    image(house4Img2, i+Initbl*2, j+Initbl,Initbl,Initbl);
    image(house6Img2, i, j+Initbl+(Initbl/2),Initbl,Initbl);
    image(house5Img2, i+Initbl, j+Initbl+(Initbl/2),Initbl,Initbl);
    image(house6Img2, i+Initbl*2, j+Initbl+(Initbl/2),Initbl,Initbl);
    image(house1Img, i-Initbl/8, j,Initbl+Initbl/8,Initbl+Initbl/16);
    image(house2Img, i+Initbl, j,Initbl,Initbl+Initbl/16);
    image(house3Img, i+Initbl*2, j,Initbl+Initbl/10,Initbl+Initbl/16);
    
    image(tree2Img, 356, 178 ,80,120);
    image(tree5Img, 145, 251 ,40,45);
    image(tree5Img, 190, 251 ,40,45);
    image(tree5Img, 231, 251 ,40,45);
    
    image(hero3Img,30,200,100,150);
    
    var f = createFont("segoe script", 20);
    textFont(f, 20);
    
    fill(226, 255, 61);
    text("Welcome to", 18, 103); 
    
    textFont(f, 40);
    fill(255, 33, 33);
    text("FOREST", 48, 141);
    text("HEROES", 203, 180);
    
    textFont(f, 39);
    fill(33, 44, 255);
    text("FOREST", 48, 141);
    text("HEROES", 203, 180);
    
    textFont(f, 38);
    fill(255, 222, 8);
    text("FOREST", 48, 141);
    text("HEROES", 203, 180);
    
    f = createFont("Arial", 5);
    textFont(f, 12);
    fill(226, 255, 61);
    text("(HINT: only use the mouse)", 245, 372); 
    
    
    fill(255, 255, 255);
    f = createFont("Arial", 5);
    textFont(f, 12);
    
};



var gameMap = function()
{
    return{
        sizeX: 20,
        sizeY: 20,
        map: []
    };
};

var treeMap = function()
{
    return{
        map: []
    };
};

var fogOfWar = function()
{
    return{
        map: []
    };
};

var AIMap = function()
{
    return{
        map: []
    };
};

var gMap = gameMap();
var tMap = gameMap();
var fow = fogOfWar();
var AIM = AIMap();
var indx;
var indy;

var miniMap = function()
{
    return{
        sizeX: 80,
        sizeY: 80,
        fowmap: createGraphics(80, 80, JAVA2D)
    };
};

var mMap = miniMap();
mMap.fowmap.image(fogOfWarImg,0,0,mMap.sizeX,mMap.sizeY);

var overMenu = function(){
    
    var over= -1;
    for (var i=0;i<menuBtns.array.length;i++)
    {
        if ((mouseX>menuBtns.array[i].x1)&&(mouseY>menuBtns.array[i].y1)&&(mouseX<menuBtns.array[i].x1+menuBtns.array[i].x2)&&(mouseY<menuBtns.array[i].y1+menuBtns.array[i].y2))
        {
            over=i;
        }
    }
    
    var selectedH=-1;
    for (var idx=0; idx<heroes.array.length;idx++) {
            if (heroes.array[idx].selected!==0){
                selectedH=idx;
            }
    }
    
    var nowX=round(((mouseX-offsetX-(blocksize/2))/blocksize));
    var nowY=round((mouseY-offsetY-(blocksize/2))/(blocksize/2));
    
    if (over===1){
        if (curSel.selected===0){
            over=-1;
        }else{
            if (fow.map[curSel.x]&&fow.map[curSel.x][curSel.y]===1){
                over=-1;
            }
            if (fow.map[curSel.x]===undefined){
                over=-1;
            }
        }
    
    }
    
    if (over===2&&nearHero(selectedH)===-1){
        over=-1;
    }

    return over;   
};

var checkCoord= function(x,y)
{
    var status = true;
    
    if (x<0) {status = false;}
    if (x>=gMap.sizeX) {status = false;}
    if (y<0) {status = false;}
    if (y>=gMap.sizeY) {status = false;}
    
    return status;
};


//init all maps
for (var i = 0; i<gMap.sizeX; i+=1)
{
    gMap.map[i]=[];
    tMap.map[i]=[];
    fow.map[i]=[];
    AIM.map[i]=[];
    for (var j = 0; j<gMap.sizeY; j+=1)
    {
        gMap.map[i][j]=0;
        tMap.map[i][j]=0;
        fow.map[i][j]=1;
        AIM.map[i][j]=1000;
    }
}

//generate field and trees
if( generateRandomFieldOn===1)
{
    // generate random field
    var nrChanges= round(random (3,5));
    for (var i=0; i<nrChanges; i+=1)
    {
        var changesX= round(random (0,gMap.sizeX));
        var changesY= round(random (0,gMap.sizeY));
        var sizeChange = round(random(3,6));
        var landType = round(random(0,5));
            
    for (var j =sizeChange; j>0; j-=1)
    {
        for (var k =0 ; k<sizeChange+1-j;k+=1){
            if(checkCoord(changesX-j+1,changesY-k))
            {gMap.map[changesX-j+1][changesY-k]=landType;}
                    
            if(checkCoord(changesX-j+1,changesY+k))
            {gMap.map[changesX-j+1][changesY+k]=landType;}
               
            if(checkCoord(changesX+j-1,changesY-k))
            {gMap.map[changesX+j-1][changesY-k]=landType;}
               
            if(checkCoord(changesX+j-1,changesY+k))
            {gMap.map[changesX+j-1][changesY+k]=landType;}
        }
      }
        }
   // generate random trees    
   var nrChanges= round(random (3,gMap.sizeX+gMap.sizeY));
    for (var i=0; i<nrChanges; i+=1)
    {
        var changesX= round(random (0,gMap.sizeX));
        var changesY= round(random (0,gMap.sizeY));
        var sizeChange = round(random(1,3));
        var treeType = round(random(0,5));
            
        for (var j =sizeChange; j>0; j-=1)
        {
            for (var k =0 ; k<sizeChange+1-j;k+=1){
                
                if(checkCoord(changesX-j+1,changesY-k)){
                if(gMap.map[changesX-j+1][changesY-k]!==3)
           {tMap.map[changesX-j+1][changesY-k]=treeType;}}
                    
                if(checkCoord(changesX-j+1,changesY+k)){
                if(gMap.map[changesX-j+1][changesY+k]!==3)
            {tMap.map[changesX-j+1][changesY+k]=treeType;}}
               
            if(checkCoord(changesX+j-1,changesY-k)){
            if(gMap.map[changesX+j-1][changesY-k]!==3)
            {tMap.map[changesX+j-1][changesY-k]=treeType;}}
               
               if(checkCoord(changesX+j-1,changesY+k)){
              if(gMap.map[changesX+j-1][changesY+k]!==3){
              tMap.map[changesX+j-1][changesY+k]=treeType;}}
            }
        }
        }
}
        
// set random starting position
        startX= round(random (3,gMap.sizeX-2));
        startY= round(random (3,gMap.sizeY-1));
        
        //heroes.array[0].x=startX;
        //heroes.array[0].y=startY;
        
        offsetX=-1*startX*blocksize+200;
        offsetY=-1*startY*(blocksize/2)+200;
        
        tMap.map[startX][startY]=0;
        if (startY-1>-1){ 
            tMap.map[startX-1][startY-1]=14;
            tMap.map[startX][startY-1]=15;
            tMap.map[startX+1][startY-1]=14;
        }
        if (startY-2>-1){ 
            tMap.map[startX-1][startY-2]=13;
            tMap.map[startX][startY-2]=14;
            tMap.map[startX+1][startY-2]=13;
        }
        if (startY-3>-1){ 
            tMap.map[startX-1][startY-3]=10;
            tMap.map[startX][startY-3]=11;
            tMap.map[startX+1][startY-3]=12;
        }
        
//{fow for house
for (var ix=0;  ix<9;ix+=1){
    for (var jx=0;  jx<3;jx+=1){
        if((startX+ix-4>=0)&&(startX+ix-4<gMap.sizeX)&&(startY-3+jx>=0)&&(startY-3+jx<gMap.sizeY)){
        fow.map[startX+ix-4][startY-3+jx]=0;
        }
    }
}

for (var ix=0;  ix<9;ix+=1){
    for (var jx=0;  jx<3;jx+=1){
        if((startX+jx-1>=0)&&(startX+jx-1<gMap.sizeX)&&(startY-6+ix>=0)&&(startY-6+ix<gMap.sizeY)){
        fow.map[startX+jx-1][startY-6+ix]=0;
        }
    }
}

for (var ix=0;  ix<7;ix+=1){
    for (var jx=0;  jx<5;jx+=1){
        if((startX+ix-3>=0)&&(startX+ix-3<gMap.sizeX)&&(startY-4+jx>=0)&&(startY-4+jx<gMap.sizeY)){
        fow.map[startX+ix-3][startY-4+jx]=0;
        }
    }
}

for (var ix=0;  ix<7;ix+=1){
    for (var jx=0;  jx<5;jx+=1){
        if((startX+jx-2>=0)&&(startX+jx-2<gMap.sizeX)&&(startY-5+ix>=0)&&(startY-5+ix<gMap.sizeY)){
        fow.map[startX+jx-2][startY-5+ix]=0;
        }
    }
}

var addMonsters = function(){
    for (var i=0;i<nrOfEnemies;i++){
        var x= round(random(0,gMap.sizeX-1));
        var y= round(random(0,gMap.sizeY-1));
        var check=-1;
        for (var j=0;j<enemies.array.length;j++){ 
            if ((enemies.array[j].x===x)&&(enemies.array[j].y===y)){
               check=j; 
            }
        }
        
        while((tMap.map[x][y]!==0)||(check!==-1)){
          x= round(random(0,gMap.sizeX-1));
          y= round(random(0,gMap.sizeY-1));
          check=-1;
          for (var j=0;j<enemies.array.length;j++){ 
            if ((enemies.array[j].x===x)&&(enemies.array[j].y===y)){
               check=j; 
            }
          }
        }
        var monst=gang(x,y);
        for (var j=0;j<6;j++){
            monst.army[j]=[];
        }
        var nr= round(random(1,6));
        for (var j=0;j<nr;j++){
            var z= round(random(0,5));
            while(monst.army[z].face){
                z= round(random(0,5));
            }
            var p= round(random(0,unitTypeArray.length-1));
            monst.army[z]=copyUnit(unitTypeArray[p]);
        }
        enemies.array.push(monst);
    }
};

addMonsters();

var checkNew = function (nowpos,nextpos){
    var nextArray = [];
    if (nowpos[0]-1>=0&&nowpos[1]-1>=0&&gMap.map[nowpos[0]-1][nowpos[1]-1]>=0&&tMap.map[nowpos[0]-1][nowpos[1]-1]<10){
        if (abs(nextpos[0]-1)+abs(nextpos[1]-1)===2){nextArray.push([-1,-1]);}
        if (abs(nextpos[0]-1)+abs(nextpos[1]-1)===3){nextArray.push([-1,-1]);}
        
    }
    if (nowpos[0]-1>=0&&gMap.map[nowpos[0]-1][nowpos[1]]>=0&&tMap.map[nowpos[0]-1][nowpos[1]]<10){
        if (abs(nextpos[0]-1)+abs(nextpos[1])===2){nextArray.push([-1,0]);}
        if (abs(nextpos[0]-1)+abs(nextpos[1])===3){nextArray.push([-1,0]);}
    }
    if (nowpos[0]-1>=0&&nowpos[1]+1<gMap.sizeY&&gMap.map[nowpos[0]-1][nowpos[1]+1]>=0&&tMap.map[nowpos[0]-1][nowpos[1]+1]<10){
        if (abs(nextpos[0]-1)+abs(nextpos[1]+1)===2){nextArray.push([-1,1]);}
        if (abs(nextpos[0]-1)+abs(nextpos[1]+1)===3){nextArray.push([-1,1]);}
    }
    if (nowpos[1]-1>=0&&gMap.map[nowpos[0]][nowpos[1]-1]>=0&&tMap.map[nowpos[0]][nowpos[1]-1]<10){
        if (abs(nextpos[0])+abs(nextpos[1]-1)===2){nextArray.push([0,-1]);}
        if (abs(nextpos[0])+abs(nextpos[1]-1)===3){nextArray.push([0,-1]);}
    }
    if (nowpos[1]+1<gMap.sizeY&&gMap.map[nowpos[0]][nowpos[1]+1]>=0&&tMap.map[nowpos[0]][nowpos[1]+1]<10){
        if (abs(nextpos[0])+abs(nextpos[1]+1)===2){nextArray.push([0,1]);}
        if (abs(nextpos[0])+abs(nextpos[1]+1)===3){nextArray.push([0,1]);}
    }
    
    if (nowpos[0]+1<gMap.sizeX&&nowpos[1]-1>=0&&gMap.map[nowpos[0]+1][nowpos[1]-1]>=0&&tMap.map[nowpos[0]+1][nowpos[1]-1]<10){
        if (abs(nextpos[0]+1)+abs(nextpos[1]-1)===2){nextArray.push([1,-1]);}
        if (abs(nextpos[0]+1)+abs(nextpos[1]-1)===3){nextArray.push([1,-1]);}
    }
    if (nowpos[0]+1<gMap.sizeX&&gMap.map[nowpos[0]+1][nowpos[1]]>=0&&tMap.map[nowpos[0]+1][nowpos[1]]<10){
        if (abs(nextpos[0]+1)+abs(nextpos[1])===2){nextArray.push([1,0]);}
        if (abs(nextpos[0]+1)+abs(nextpos[1])===3){nextArray.push([1,0]);}
    }
    if (nowpos[0]+1<gMap.sizeX&&nowpos[1]+1<gMap.sizeY&&gMap.map[nowpos[0]+1][nowpos[1]+1]>=0&&tMap.map[nowpos[0]+1][nowpos[1]+1]<10){
        if (abs(nextpos[0]+1)+abs(nextpos[1]+1)===2){nextArray.push([1,1]);}
        if (abs(nextpos[0]+1)+abs(nextpos[1]+1)===3){nextArray.push([1,1]);}
    }
    return nextArray;
};

var generateNew = function (nowpos,nextpos){
    var newX;
    var nexts=checkNew(nowpos,nextpos);
    if (nexts.length!==0){
        newX=nexts[round(random(0,nexts.length-1))];
    }
    
    return newX;
};

var checkNext = function (nowpos,nextpos){
    var ok=false;
    if (nowpos[0]+nextpos[0]>=0&&nowpos[0]+nextpos[0]<gMap.sizeX&&
        nowpos[1]+nextpos[1]>=0&&nowpos[1]+nextpos[1]<gMap.sizeY&&
        gMap.map[nowpos[0]+nextpos[0]][nowpos[1]+nextpos[1]]>=0&&
        tMap.map[nowpos[0]+nextpos[0]][nowpos[1]+nextpos[1]]<10){
        ok=true;
    }
    
    return ok;
};

var addMainRoad = function(){
    tMap.map[startX][startY]=0;
    var roadArray = [];
    roadArray.push([startX,startY]);
    var direction=generateNew([startX,startY],[0,0]);
    var created=0;
    while (roadArray.length!==0){
        var nowpos = roadArray.pop();
        created++;//var groundName=["grass","dirt","paved","water","mud","wreck"];
        if (gMap.map[nowpos[0]][nowpos[1]]===3){gMap.map[nowpos[0]][nowpos[1]]=-5;}
        else{if(gMap.map[nowpos[0]][nowpos[1]]===4){gMap.map[nowpos[0]][nowpos[1]]=-1;}
        else{gMap.map[nowpos[0]][nowpos[1]]=-2;}
        }
        tMap.map[nowpos[0]][nowpos[1]]=0;
        
        var decider=round(random(0,15));
        if (decider!==15||created<10){
            if (direction&&checkNext(nowpos,direction)===true){
                roadArray.push([nowpos[0]+direction[0],nowpos[1]+direction[1]]);
            }
            else{
                if (direction){direction=generateNew(nowpos,direction);}
                if (direction&&checkNext(nowpos,direction)){
                    roadArray.push([nowpos[0]+direction[0],nowpos[1]+direction[1]]);
                }
            }
        }
        if(decider<=2&&direction){
            var newdir=generateNew(nowpos,direction);
            if(newdir){
                direction=newdir;
            }
        }
        if(round(random(0,50))===10){
            roadArray.push([nowpos[0],nowpos[1]]);
        }
    }
    //corect roaf field
    for (var i = 0; i<gMap.sizeX; i+=1){
        for (var j = 0; j<gMap.sizeY; j+=1)
        {
            if (gMap.map[i][j]<0){gMap.map[i][j]=gMap.map[i][j]*(-1);}
        }
    }
    
};

addMainRoad();

var addToPixelMinimap = function (x,y){
     
        var propX=mMap.sizeX/gMap.sizeX;
        var propY=mMap.sizeY/gMap.sizeY;
        
        if((x>=0)&&(x<gMap.sizeX)&&(y>=0)&&(y<gMap.sizeY)){
        
        switch (gMap.map[x][y]){
        
        case 0:
            mMap.fowmap.stroke(48, 161, 42);
        break;
        case 1:
            mMap.fowmap.stroke(255, 140, 0);
        break;
        case 2:
            mMap.fowmap.stroke(232, 231, 229);
        break;
        case 3:
            mMap.fowmap.stroke(38, 128, 201);
        break;
        case 4:
            mMap.fowmap.stroke(69, 38, 3);
        break;
        case 5:
            mMap.fowmap.stroke(250, 188, 65);
        break;
        }
        
        //trees
        if(tMap.map[x][y]>0&&tMap.map[x][y]<10){
            mMap.fowmap.stroke(31, 99, 25);
        }
        if(tMap.map[x][y]>10){
            mMap.fowmap.stroke(74, 235, 59);
        }
                //}else{
                    //stroke(4, 14, 79);
                //}
                
                /*for (var k=0; k<enemies.array.length;k++) {
                    if ((enemies.array[k].x===floor(i/propX))&&(enemies.array[k].y===floor(j/propY))) {
                        stroke(255, 0, 0);
                    }
                }
                
       /*         for (var k=0; k<heroes.array.length;k++) {
                    if ((heroes.array[k].x===floor(i/propX))&&(heroes.array[k].y===floor(j/propY))) {
                        stroke(255, 255, 0);
                    }
                }*/
                
                //minimap.point(i*1+btn.x1,j*1+btn.y1);
                //mMap.map.point(floor(i/propX),floor(propY/j));
            mMap.fowmap.strokeWeight(1);
            
            for (var i=floor(x*propX);i<floor((x+1)*propX);i++){
                for (var j=floor(y*propY);j<floor((y+1)*propY);j++){
                    mMap.fowmap.point(i,j);
                }
            }
        
        /*for (ind=0; ind<heroes.array.length;ind++) {
            //if ((heroes.array[ind].x===curSel.x)&&(heroes.array[ind].y===curSel.y)) {
                point(i*1+btn.x1,j*1+btn.y1);
            //}
        }
        
        */
        
        }
        noStroke();
};

var addMiniFOW = function(){
    var propX=mMap.sizeX/gMap.sizeX;
    var propY=mMap.sizeY/gMap.sizeY;
    
    //{fow for house
    for (var i=0;  i<9;i++){
        for (var j=0;  j<3;j++){
            addToPixelMinimap(startX-4+i,startY-3+j);
        }
    }
    
    for (var i=0;  i<9;i++){
        for (var j=0;  j<3;j++){
            addToPixelMinimap(startX-1+j,startY-6+i);
        }
    }
    
    for (var i=0;  i<7;i++){
        for (var j=0;  j<5;j++){
            addToPixelMinimap(startX-3+i,startY-4+j);
        }
    }
    
    for (var i=0;  i<7;i++){
        for (var j=0;  j<5;j++){
            addToPixelMinimap(startX-2+j,startY-5+i);
        }
    }
    
};

addMiniFOW();

//remove this once game is done

var addTestMonsters = function(){
    var monst=gang(startX,startY);
    for (var j=0;j<6;j++){
            monst.army[j]=[];
        }
    monst.army[0]=copyUnit(unitTypeArray[0]);
    monst.army[1]=copyUnit(unitTypeArray[1]);
    monst.army[2]=copyUnit(unitTypeArray[4]);
    //monst.army[3]=copyUnit(unitTypeArray[3]);
    monst.army[4]=copyUnit(unitTypeArray[4]);
    monst.army[5]=copyUnit(unitTypeArray[4]);
    enemies.array.push(monst);
};
addTestMonsters();
//}

var drawGrownd = function(n,i,j,zoom)
{
    
    if(!(zoom))
    {
        zoom=1;
    }
    
    blocksize=blocksize*zoom;
    
    switch (n) {
    case 0:
        image(grassImg, i, j,blocksize,blocksize);
    break;
    case 1:
        image(dirtImg, i, j,blocksize,blocksize);
    break;
    case 2:
        image(stoneImg, i, j,blocksize,blocksize);
    break;
    case 3:
        image(waterImg, i, j,blocksize,blocksize);
    break;
    case 4:
        image(woodImg, i, j,blocksize,blocksize);
    break;
    case 5:
        image(wallImg, i, j,blocksize,blocksize);
    break;
    } 
    
    blocksize=blocksize/zoom;
};

var drawTree= function(i,j,n,m,zoom)
{
    if(!(zoom))
    {zoom=1;}
    blocksize=blocksize*zoom;
    
    if ((m===1)&&(n>=10)&&(curSel.selected===1)){
        image(selectorImg, i, j ,blocksize,blocksize);
    }
    
    switch (n) {
    case 1:
        image(tree1Img, i, j,blocksize,blocksize);
    break;
    case 2:
        image(tree2Img, i, j,blocksize,blocksize);
    break;
    case 3:
        image(tree3Img, i, j,blocksize,blocksize);
    break;
    case 4:
        image(tree4Img, i, j,blocksize,blocksize);
    break;
    case 5:
        image(tree5Img, i, j,blocksize,blocksize);
    break;
    case 10:
        image(house1Img, i, j,blocksize,blocksize);
    break;
    case 11:
        image(house2Img, i, j,blocksize,blocksize);
    break;
    case 12:
        image(house3Img, i, j,blocksize,blocksize);
    break;
    case 13:
        image(house4Img2, i, j+(blocksize/2),blocksize,blocksize);
    break;
    case 14:
        image(house6Img2, i, j+(blocksize/2),blocksize,blocksize);
    break;
    case 15:
        image(house5Img2, i, j+(blocksize/2),blocksize,blocksize);
    break;
    case 20:
        image(house3Img, i+(blocksize/3)*2, j+2*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house2Img, i+(blocksize/3), j+2*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house1Img, i, j+2*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house4Img2, i+(blocksize/3)*2, j+4*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house4Img2, i, j+4*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house6Img2, i+(blocksize/3), j+4*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house6Img2, i, j+5*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house6Img2, i+(blocksize/3)*2, j+5*(blocksize/2)/3,blocksize/3,blocksize/3);
        image(house5Img2, i+(blocksize/3), j+5*(blocksize/2)/3,blocksize/3,blocksize/3);
    break;
    }
    
    blocksize=blocksize/zoom;
    
};

var checkOver =function(){
    var check=false;
    
    for (var i=0;i<12;i++)
    {
        if ((houseBtns.array[i].lock===1)&&(myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].posInArmy===i)){
            check=true;
        }
        if ((myHouse.inHouse!==-1)&&(houseBtns.array[i].lock===1)&&(heroes.array[myHouse.inHouse].army[i])){
            check=true;
        }
        if((i>5)&&(myHouse.reservs[i-6].face)&&(houseBtns.array[i].lock===1)){
            check=true;
        }
    }
    
    return check;
};

var checkOverNoLock =function(){
    var check=false;
    
    for (var i=0;i<12;i++)
    {
        if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].posInArmy===i)){
            check=true;
        }
        if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].army[i])){
            check=true;
        }
        if((i>5)&&(myHouse.reservs[i-6].face)){
            check=true;
        }
    }
    
    return check;
};

var checkOverPanel =function(nh){
    var check=false;
    
    for (var i=0;i<heroPanelBtns.array.length-1;i++)
    {
        if ((heroPanelBtns.array[i].lock===1)&&(heroOutsidePanel.hero!==-1)&&(heroes.array[heroOutsidePanel.hero].posInArmy===i)){
            check=true;
        }
        if ((heroOutsidePanel.hero!==-1)&&(heroPanelBtns.array[i].lock===1)&&(heroes.array[heroOutsidePanel.hero].army[i])){
            check=true;
        }
    }
    
    for (var i=0;i<heroPanelBtns2.array.length-1;i++)
    {
        if ((heroPanelBtns2.array[i].lock===1)&&(heroOutsidePanel.hero!==-1)&&(heroes.array[heroOutsidePanel.hero].posInArmy===i)){
            check=true;
        }
        if ((heroOutsidePanel.hero!==-1)&&(heroPanelBtns2.array[i].lock===1)&&(heroes.array[heroOutsidePanel.hero].army[i])){
            check=true;
        }
        
        if((heroOutsidePanel.hero!==-1)&&(nh!==-1)){
            if ((heroPanelBtns2.array[i].lock===1)&&(nh!==-1)&&(heroes.array[nh].posInArmy===i-6)){
                check=true;
                }
            if ((nh!==-1)&&(heroPanelBtns2.array[i].lock===1)&&(heroes.array[nh].army[i-6])){
                check=true;
            }
        }
    }
    
    return check;
};

var pressUnitPanelBtn = function(n,v){
if(v===-1){
    if ((n===heroPanelBtns.array.length-1)&&(heroOutsidePanel.active===true)&&(checkOverPanel(v))){
        var check=-1;
        for (var i=0;i<heroPanelBtns.array.length-1;i++){
            if (heroPanelBtns.array[i].lock===1){
                check=i;
            }
        }
        if (heroes.array[heroOutsidePanel.hero].army[check]){
            delete heroes.array[heroOutsidePanel.hero].army[check];
        }
        if (heroes.array[heroOutsidePanel.hero].posInArmy===check){
            heroOutsidePanel.active=false;
            heroes.array.splice(heroOutsidePanel.hero,1);
            curSel.selected=0;
        }
        for (var i=0;i<heroPanelBtns.array.length;i++){
            heroPanelBtns.array[i].lock=0;
        }
        heroPanelBtns.array[n].lock=1;
        ithemSelected=n;
    }
    if (heroPanelBtns.array[n].lock===1){
        heroPanelBtns.array[n].lock=0;
        ithemSelected=n;
    }else{
        if (n!==heroPanelBtns.array.length-1){
            for (var i=0;i<heroPanelBtns.array.length;i++){
                heroPanelBtns.array[i].lock=0;
            }
            heroPanelBtns.array[n].lock=1;
            ithemSelected=n;
        }
    }
}else{
    if ((n===heroPanelBtns2.array.length-1)&&(heroOutsidePanel.active===true)&&(checkOverPanel(v))){
        var check=-1;
        for (var i=0;i<heroPanelBtns2.array.length-1;i++){
            if (heroPanelBtns2.array[i].lock===1){
                check=i;
            }
        }
        
        if (heroes.array[heroOutsidePanel.hero].army[check]){
            delete heroes.array[heroOutsidePanel.hero].army[check];
        }
        if (heroes.array[v].army[check-6]){
            delete heroes.array[v].army[check-6];
        }
        
        var skip=-1;
        if (heroes.array[heroOutsidePanel.hero].posInArmy===check){
            heroOutsidePanel.active=false;
            heroes.array.splice(heroOutsidePanel.hero,1);
            heroOutsidePanel.hero=-1;
            curSel.selected=0;
            skip=1;
        }
        
        if ((skip===-1)&&(heroes.array[v].posInArmy===check-6 )){
            heroes.array[heroOutsidePanel.hero].selected=0;
            heroOutsidePanel.active=false;
            heroOutsidePanel.hero=-1;
            heroes.array.splice(v,1);
            curSel.selected=0;
        }
        
        for (var i=0;i<heroPanelBtns2.array.length;i++){
           heroPanelBtns2.array[i].lock=0;
        }
        heroPanelBtns2.array[n].lock=1;
        ithemSelected=n;
    }
    if (heroPanelBtns2.array[n].lock===1){
        heroPanelBtns2.array[n].lock=0;
        ithemSelected=n;
    }else{
        if (n!==heroPanelBtns2.array.length-1){
            for (var i=0;i<heroPanelBtns2.array.length;i++){
               heroPanelBtns2.array[i].lock=0;
            }
            heroPanelBtns2.array[n].lock=1;
            ithemSelected=n;
        }
    }
}
};

var pressRandomizeUpgrades = function(){
    while (avUpgr.chosen.length>0){
        avUpgr.chosen.pop();
    }
    
    var frm=0;
    
    if (heroes.array[avUpgr.upgradeHero].diplomacy===5){
        frm=1;
    }
    
    while (avUpgr.chosen.length<3){
        
        var chose=round(random(frm,avUpgr.array.length-1));
        var isIt=-1;
        
        for (var i=0;i<avUpgr.chosen.length;i++){
            if(avUpgr.chosen[i]===chose){
                isIt=0;
            }
        }
        
        if(isIt===-1){
            avUpgr.chosen.push(chose);
        }
        
    }
};

var UpgradeHeroF = function (){
    var leftXP=heroes.array[bGround.hero].XP;
    heroes.array[bGround.hero].maxhealth=floor(heroes.array[bGround.hero].maxhealth*2);
    heroes.array[bGround.hero].health=heroes.array[bGround.hero].maxhealth;
    heroes.array[bGround.hero].level++;
    heroes.array[bGround.hero].hitPoints=heroes.array[bGround.hero].hitPoints*2;
    heroes.array[bGround.hero].maxXP=heroes.array[bGround.hero].maxXP*2;
    heroes.array[bGround.hero].XP=leftXP;
    avUpgr.upgradeHero=bGround.hero;
    avUpgr.totalUpgrades++;
    pressRandomizeUpgrades();
    //debug("upgrades",avUpgr.chosen);
};


/*avUpgr.array.push(uniqUpgrade("Diplomacy","Increace the number of units that the hero can lead","+ 1 unit in army"));
avUpgr.array.push(uniqUpgrade("Pathfinding","Increace the distance a hero can trave","+ 10 movements points"));
avUpgr.array.push(uniqUpgrade("Initiative","Increace the attack speed of a hero","+ 1 hero speed"));
avUpgr.array.push(uniqUpgrade("Weaponds Expertiece","Increace the attack of the hero","+ 10% hero speed"));
avUpgr.array.push(uniqUpgrade("Enhance Life","Increace the health of the hero","+ 10% hero life"));

    return{
        face : hImg,
        selected:0,
        x:5,
        y:5,
        radius:3,
        walkpoints:50, //turn walk points
        twalkpoints:50, //real walk points
        AIpath:[],//path to follow
        offsetX:0,
        offsetY:0,
        nowFrame:0,
        name:hName,
        health:life-75,//change to 75
        maxhealth:life,
        level:1,
        speed:4,
        queueSpeed:0,
        attackType:aType, //1-Nearest,2-Any,3-All
        attackSide:aSide, //1-Enemy,2-Ally,3-Any Side
        attackNum:aNum,
        hitPoints: damage,
        unitCost: cost,
        posInArmy:2, //position in army layout, middle default
        army:[],
        diplomacy:3,
        XP:0,
        skip:1,
        alive:true,
        maxXP:lmaxXP,
        upgradeTo:upTo
        
        var heroHealthCost=10;
        var unitHealthCost=5;

*/

var doUpgrade = function(n){
    
    //debug(n);
    
    switch(n){
        case 0:
            heroes.array[avUpgr.upgradeHero].diplomacy++;
        break;
        case 1:
            heroes.array[avUpgr.upgradeHero].twalkpoints=heroes.array[avUpgr.upgradeHero].twalkpoints+round(heroes.array[avUpgr.upgradeHero].twalkpoints/10);
        break;
        case 2:
            heroes.array[avUpgr.upgradeHero].speed++;
        break;
        case 3:
            heroes.array[avUpgr.upgradeHero].hitPoints=heroes.array[avUpgr.upgradeHero].hitPoints+round(heroes.array[avUpgr.upgradeHero].hitPoints/10);
        break;
        case 4:
            heroes.array[avUpgr.upgradeHero].maxhealth=heroes.array[avUpgr.upgradeHero].maxhealth+round(heroes.array[avUpgr.upgradeHero].maxhealth/10);
            heroes.array[avUpgr.upgradeHero].health=heroes.array[avUpgr.upgradeHero].maxhealth;
        break;
        case 5: 
            daygold=daygold+10;
        break;
        case 6:
            gold=gold+1000;
        break;
        case 7:
            heroHealthCost=heroHealthCost-1;
            unitHealthCost=unitHealthCost-1;
            if (heroHealthCost<0){
                heroHealthCost=0;
            }
            if (unitHealthCost<0){
                unitHealthCost=0;
            }
        break;
        case 8:
            heroes.array[avUpgr.upgradeHero].maxXP=heroes.array[avUpgr.upgradeHero].maxXP-round(heroes.array[avUpgr.upgradeHero].maxXP/10);
        break;
    }
    
};

var pressUpgradeBtn = function(n){
    
    if(n<3){
        for (var i=0;i<upgradePanelBtns.array.length;i++){
            upgradePanelBtns.array[i].lock=0;
        }
        upgradePanelBtns.array[n].lock=1;
    }else{
        
        var desBtn=-1;
        for (var i=0;i<upgradePanelBtns.array.length-1;i++){
            if (upgradePanelBtns.array[i].lock===1){
                desBtn=i;
            }
        }
        
        doUpgrade(avUpgr.chosen[desBtn]);
        avUpgr.totalUpgrades--;
        pressRandomizeUpgrades();
        for (var i=0;i<upgradePanelBtns.array.length;i++){
            upgradePanelBtns.array[i].lock=0;
        }
        upgradePanelBtns.array[0].lock=1;
        if(avUpgr.totalUpgrades===-1){
            avUpgr.upgradeHero=-1;
        }
    }

};

// draw the buttons
var drawBtn = function(btn){
    
    if (btn.ID===0){
        fill(0, 0, 0);
        image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
        text("End Turn", btn.x1+10, btn.y1+20);
        fill(255, 255, 255);
    }
    var name="";
    
    if (btn.ID===1){
        if((curSel.selected===1)&&(fow.map[curSel.x])&&(fow.map[curSel.x][curSel.y]===0)){
            for (var indx=0; indx<heroes.array.length;indx++) {
                 if ((heroes.array[indx].x===curSel.x)&&(heroes.array[indx].y===curSel.y)) {
                fill(226, 240, 24);
                rect(btn.x1-3,btn.y1-3,btn.x2+6,btn.y2+6);
            }
        }
        
        for (var indx=0; indx<enemies.array.length;indx++) {
                 if ((enemies.array[indx].x===curSel.x)&&(enemies.array[indx].y===curSel.y)) {
                fill(240, 24, 56);
                rect(btn.x1-3,btn.y1-3,btn.x2+6,btn.y2+6);
            }
            }
            
            if (tMap.map[curSel.x]&&tMap.map[curSel.x][curSel.y]>=10){
                drawTree(btn.x1,btn.y1-10,20,0,1.5);
                fill(25, 204, 31);
                if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].x===curSel.x)&&(heroes.array[myHouse.inHouse].y===curSel.y))
                //if(myHouse.inHouse!==-1)
                { fill(226, 240, 24);}
                rect(btn.x1-3,btn.y1-3,btn.x2+6,btn.y2+6);
            }
            
            fill(167, 194, 235);
            rect(btn.x1,btn.y1,btn.x2,btn.y2);
            drawGrownd(gMap.map[curSel.x][curSel.y],btn.x1,btn.y1,1.5);
            name = groundName[gMap.map[curSel.x][curSel.y]];
            rect(btn.x1,btn.y1+49,btn.x2,btn.y2-49);
            if (tMap.map[curSel.x]&&(tMap.map[curSel.x][curSel.y]>0)&&(tMap.map[curSel.x][curSel.y]<10)){
                drawTree(btn.x1,btn.y1-10,tMap.map[curSel.x][curSel.y],0,1.5);
                name=treeName[tMap.map[curSel.x][curSel.y]-1];
            }         
            if (tMap.map[curSel.x]&&tMap.map[curSel.x][curSel.y]>=10){
                drawTree(btn.x1,btn.y1-10,20,0,1.5);
                name="Home";
            }
            for (var indx=0; indx<heroes.array.length;indx++) {
                 if ((heroes.array[indx].x===curSel.x)&&(heroes.array[indx].y===curSel.y)) {
                drawHeroe(indx,btn.x1,btn.y1-9,1.5);
                name= heroes.array[indx].name;
            }
            }
            
            for (var indx=0; indx<enemies.array.length;indx++) {
                 if ((enemies.array[indx].x===curSel.x)&&(enemies.array[indx].y===curSel.y)) {
                drawMonster(indx,btn.x1+4,btn.y1,1.3);
                name="enemy";
            }
            }
            
            fill(248, 255, 0);
            text(name, btn.x1+10, btn.y1+60); 
            fill(255, 255, 255);
            
            fill(255, 255, 255);
        }
    }
    
    if (btn.ID===2){
        var selectedHero=-1;
        for (var indx=0; indx<heroes.array.length;indx++) {
                 if ((heroes.array[indx].x===curSel.x)&&(heroes.array[indx].y===curSel.y)) {
                selectedHero=indx;
        }
        }
        
        var nH = -1;
        if (selectedHero!==-1)
        {nH = nearHero(selectedHero);}
        
        if((curSel.selected===1)&&(selectedHero!==-1)&&(nH!==-1)){
            fill(240, 24, 208);
            rect(btn.x1-3,btn.y1-3,btn.x2+6,btn.y2+6);
            fill(167, 194, 235);
            rect(btn.x1,btn.y1,btn.x2,btn.y2);
            drawGrownd(gMap.map[heroes.array[nH].x][heroes.array[nH].y],btn.x1,btn.y1+8,1.1);
            rect(btn.x1,btn.y1+44,btn.x2,btn.y2-44);
                   
            if (tMap.map[heroes.array[nH].x][heroes.array[nH].y]>=10){
                drawTree(btn.x1,btn.y1,20,0,1.1);
            }
            
                drawHeroe(nH,btn.x1,btn.y1,1.1);
                name= heroes.array[nH].name;
            
            fill(248, 255, 0);
            textSize(9);
            text(name, btn.x1+8, btn.y1+52); 
            textSize(12);
            fill(255, 255, 255);
        }
    }
    
    if (btn.ID===3){
        image(mMap.fowmap,btn.x1,btn.y1,mMap.sizeX,mMap.sizeY);
        
        var propX=mMap.sizeX/gMap.sizeX;
        var propY=mMap.sizeY/gMap.sizeY;
        
        strokeWeight(1);
        
        for (var k=0;k<enemies.array.length;k++){
            for (var i=floor(enemies.array[k].x*propX);i<floor((enemies.array[k].x+1)*propX);i++){
                for (var j=floor(enemies.array[k].y*propY);j<floor((enemies.array[k].y+1)*propY);j++){
                    if (fow.map[enemies.array[k].x][enemies.array[k].y]!==fowstandard){
                        stroke(255, 0, 0);
                        point(btn.x1+i,btn.y1+j);
                    }
                }
            }
        }
        
        for (var k=0;k<heroes.array.length;k++){
            for (var i=floor(heroes.array[k].x*propX);i<floor((heroes.array[k].x+1)*propX);i++){
                for (var j=floor(heroes.array[k].y*propY);j<floor((heroes.array[k].y+1)*propY);j++){
                    if (fow.map[heroes.array[k].x][heroes.array[k].y]!==fowstandard){
                        stroke(0, 0, 255);
                        strokeWeight(2);
                        point(btn.x1+i,btn.y1+j);
                    }
                }
            }
        }
        
        var topleftX=btn.x1-1-(offsetX)/blocksize*propX;
        var topleftY=btn.y1-3-(offsetY)/(blocksize/2)*propY;
        
        if (topleftX<btn.x1-1){topleftX=btn.x1-1;}
        if (topleftY<btn.y1-1){topleftY=btn.y1-1;}
        if (topleftX>btn.x1+mMap.sizeX){topleftX=btn.x1+mMap.sizeX;}
        if (topleftY>btn.y1+mMap.sizeY){topleftY=btn.y1+mMap.sizeY;}
        
        var bottomrightX=400/blocksize*propX+1+btn.x1-1-(offsetX)/blocksize*propX-topleftX;
        var bottomrightY=400/(blocksize/2)*propY+1+btn.y1-3-(offsetY)/(blocksize/2)*propY-topleftY;
        
        if (bottomrightX<0){bottomrightX=0;}
        if (bottomrightY<0){bottomrightY=0;}
        if (topleftX+bottomrightX>btn.x1+mMap.sizeX){bottomrightX=btn.x1+mMap.sizeX-topleftX;}
        if (topleftY+bottomrightY>btn.y1+mMap.sizeY){bottomrightY=btn.y1+mMap.sizeY-topleftY;}
        
        stroke(255, 255, 0);strokeWeight(3);
        noFill();
        rect(topleftX,topleftY,bottomrightX,bottomrightY);
        
        stroke(14, 15, 15);strokeWeight(3);
        noFill();
        rect(btn.x1-1,btn.y1-1,btn.x2+1,btn.y2+1);
        noStroke();
    }
    
    if (btn.ID===10){
        fill(0, 0, 0);
        
        var f = createFont("segoe script", 20);
        textFont(f, 20);  
        image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
        text("Start", btn.x1+30, btn.y1+20);
        f = createFont("Arial", 5);
        textFont(f, 12);
        fill(255, 255, 255);
    }
    
    if (btn.ID===11){
        fill(0, 0, 0);
        
        var f = createFont("Arial", 5);
        textFont(f, 20);  
        image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
        text("OK", btn.x1+17, btn.y1+20);
        f = createFont("Arial", 5);
        textFont(f, 12);
        fill(255, 255, 255);
    }
    
    if (btn.ID===20){
        if (btn.lock===0)
        {drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,3);}
        else
        {drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,1);}
    }
    if (btn.ID===21){
        if (btn.lock===0){
            
        fill(ourColors[0],ourColors[1],ourColors[2]);
        text("Unlock:      "+unitTypeArray[defUnits[0]].unlockCost, btn.x1, btn.y1);
        fill(255, 255, 255);
        image(goldImg, btn.x1+btn.x2*(5/9), btn.y1-15 ,10,15);
            
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,2);
            image(unitTypeArray[defUnits[0]].face,btn.x1,btn.y1,btn.x2,btn.y2);
            image(lockImg,btn.x1,btn.y1,btn.x2,btn.y2);
        }
        if (btn.lock===1){
        fill(235, 247, 72);
        text("Cost:          "+unitTypeArray[defUnits[0]].unitCost, btn.x1, btn.y1);
        fill(255, 255, 255);
        image(goldImg, btn.x1+btn.x2*(5/9), btn.y1-15 ,10,15);
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,1);
            image(unitTypeArray[defUnits[0]].face,btn.x1,btn.y1,btn.x2,btn.y2);
        }
    }
    
    if (btn.ID===22){
        if (btn.lock===0){
            
        fill(ourColors[3],ourColors[4],ourColors[5]);
        text("Unlock:      "+unitTypeArray[defUnits[1]].unlockCost, btn.x1, btn.y1);
        fill(255,255,255);
        image(goldImg, btn.x1+btn.x2*(5/9), btn.y1-15 ,10,15);
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,2);
            image(unitTypeArray[defUnits[1]].face,btn.x1,btn.y1,btn.x2,btn.y2);
            image(lockImg,btn.x1,btn.y1,btn.x2,btn.y2);
        }
        if (btn.lock===1){
            fill(235, 247, 72);
        text("Cost:          "+unitTypeArray[defUnits[1]].unitCost, btn.x1, btn.y1);
        fill(255, 255, 255);
        image(goldImg, btn.x1+btn.x2*(5/9), btn.y1-15 ,10,15);
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,1);
            image(unitTypeArray[defUnits[1]].face,btn.x1,btn.y1,btn.x2,btn.y2);
        }
    }
    
    if (btn.ID===23){
        if (btn.lock===0){
        fill(ourColors[6],ourColors[7],ourColors[8]);
        text("Unlock:      "+unitTypeArray[defUnits[2]].unlockCost, btn.x1, btn.y1);
        fill(255,255,255);
        image(goldImg, btn.x1+btn.x2*(5/9), btn.y1-15 ,10,15);
            
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,2);
            image(unitTypeArray[defUnits[2]].face,btn.x1,btn.y1,btn.x2,btn.y2);
            image(lockImg,btn.x1,btn.y1,btn.x2,btn.y2);
        }
        if (btn.lock===1){
            fill(235, 247, 72);
        text("Cost:          "+unitTypeArray[defUnits[2]].unitCost, btn.x1, btn.y1);
        fill(255, 255, 255);
        image(goldImg, btn.x1+btn.x2*(5/9), btn.y1-15 ,10,15);
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,1);
            image(unitTypeArray[defUnits[2]].face,btn.x1,btn.y1,btn.x2,btn.y2);
        }
    }
    
    if (btn.ID===25){
        fill(0, 0, 0);
        image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
        text("Exit", btn.x1+23, btn.y1+20);
        fill(255, 255, 255);
    }
    
    if (btn.ID===26){
        if ((hMenu.pressed!==-1)&&(checkOver()===true)){
            
        var check=-1;
    
        for (var i=0;i<12;i++)
        {
            if ((houseBtns.array[i].lock===1)&&(myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].posInArmy===i)&&heroes.array[myHouse.inHouse].maxhealth-heroes.array[myHouse.inHouse].health!==0){
            fill(0, 0, 0);
            image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
            text("Heal", btn.x1+23, btn.y1+20);
            image(goldImg, btn.x1+53, btn.y1+6 ,10,15);
            if((heroes.array[myHouse.inHouse].maxhealth-heroes.array[myHouse.inHouse].health)*heroHealthCost<gold){
            text((heroes.array[myHouse.inHouse].maxhealth-heroes.array[myHouse.inHouse].health)*heroHealthCost, btn.x1+65, btn.y1+20);
            }
            else{text(floor(gold/heroHealthCost)*heroHealthCost, btn.x1+65, btn.y1+20);}
            fill(255, 0, 0);
            rect(btn.x1+10,btn.y1+10,btn.x2/14,btn.y2/1.9);
            rect(btn.x1+5,btn.y1+15,btn.x2/5.5,btn.y2/5);
            fill(255, 255, 255);
            }
            if ((myHouse.inHouse!==-1)&&(houseBtns.array[i].lock===1)&&(heroes.array[myHouse.inHouse].army[i])&&(heroes.array[myHouse.inHouse].army[i].maxhealth-heroes.array[myHouse.inHouse].army[i].health!==0)){
            fill(0, 0, 0);
            image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
            text("Heal", btn.x1+23, btn.y1+20);
            image(goldImg, btn.x1+53, btn.y1+6 ,10,15);
            if((heroes.array[myHouse.inHouse].army[i].maxhealth-heroes.array[myHouse.inHouse].army[i].health)*unitHealthCost<gold){
            text((heroes.array[myHouse.inHouse].army[i].maxhealth-heroes.array[myHouse.inHouse].army[i].health)*unitHealthCost, btn.x1+65, btn.y1+20);
            }
            else{text(floor(gold/unitHealthCost)*unitHealthCost, btn.x1+65, btn.y1+20);}
            fill(255, 0, 0);
            rect(btn.x1+10,btn.y1+10,btn.x2/14,btn.y2/1.9);
            rect(btn.x1+5,btn.y1+15,btn.x2/5.5,btn.y2/5);
            fill(255, 255, 255);
            }
            if((i>5)&&(myHouse.reservs[i-6].face)&&(houseBtns.array[i].lock===1)&&(myHouse.reservs[i-6].maxhealth-myHouse.reservs[i-6].health)!==0){
            fill(0, 0, 0);
            image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
            text("Heal", btn.x1+23, btn.y1+20);
            image(goldImg, btn.x1+53, btn.y1+6 ,10,15);
            if((myHouse.reservs[i-6].maxhealth-myHouse.reservs[i-6].health)*unitHealthCost<gold){
            text((myHouse.reservs[i-6].maxhealth-myHouse.reservs[i-6].health)*unitHealthCost, btn.x1+65, btn.y1+20);
            }
            else{text(floor(gold/unitHealthCost)*unitHealthCost, btn.x1+65, btn.y1+20);}
            fill(255, 0, 0);
            rect(btn.x1+10,btn.y1+10,btn.x2/14,btn.y2/1.9);
            rect(btn.x1+5,btn.y1+15,btn.x2/5.5,btn.y2/5);
            fill(255, 255, 255);
            }   
        } 
            
        }
    }
    
    if (btn.ID===27){
        if ((hMenu.pressed!==-1)&&(checkOver()===true)){
            fill(0, 0, 0);
            image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
            text("Dismiss", btn.x1+23, btn.y1+20);
            noFill();
            stroke(255, 0, 0);
            strokeWeight(3);
            ellipse(btn.x1+11,btn.y1+18,13,13);
            line(btn.x1+7,btn.y1+13,btn.x1+14,btn.y1+23);
            noStroke();
            strokeWeight(2);
            fill(255, 255, 255);
        }
        
        if ((heroOutsidePanel.active===true)&&(checkOverPanel(nearHero(heroOutsidePanel.hero)))){
            fill(0, 0, 0);
            image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
            text("Dismiss", btn.x1+23, btn.y1+20);
            noFill();
            stroke(255, 0, 0);
            strokeWeight(3);
            ellipse(btn.x1+11,btn.y1+18,13,13);
            line(btn.x1+7,btn.y1+13,btn.x1+14,btn.y1+23);
            noStroke();
            strokeWeight(2);
            fill(255, 255, 255);
        }
        
    }
    
    if (btn.ID===28){
        
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,4);
    }
    
    if (btn.ID===29){
        {
            if (btn.lock===1)
            {
                fill(240, 178, 34);
                rect(btn.x1,btn.y1,btn.x2,btn.y2);
            }
            drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,5);
        }
    }
    
    if (btn.ID===30){
        var prop=3;
        
        strokeWeight(1);

        fill(0, 0, 0);
        stroke(0, 0, 0);
        ellipse(btn.x1, btn.y1, btn.x2+prop+prop, btn.y2+prop+prop);

        fill(255, 255, 255);
        stroke(255, 255, 255);
        ellipse(btn.x1, btn.y1, btn.x2+prop, btn.y2+prop);
        
        fill(186, 186, 186);
        ellipse(btn.x1, btn.y1, btn.x2, btn.y2);
        strokeWeight(2);
        bezier(btn.x1-btn.x2/5, btn.y1-btn.x2/3, btn.x1-btn.x2/10, btn.y1+btn.x2/4, btn.x1+btn.x2/10, btn.y1-btn.x2/4, btn.x1+btn.x2/5, btn.y1+btn.x2/3);
        bezier(btn.x1+btn.x2/5, btn.y1-btn.x2/3, btn.x1+btn.x2/10, btn.y1+btn.x2/4, btn.x1-btn.x2/10, btn.y1-btn.x2/4, btn.x1-btn.x2/5, btn.y1+btn.x2/3);
        line(btn.x1-btn.x2/4, btn.y1-btn.x2/3,btn.x1+btn.x2/4, btn.y1-btn.x2/3);
        line(btn.x1-btn.x2/4, btn.y1+btn.x2/3,btn.x1+btn.x2/4, btn.y1+btn.x2/3);
        
        
        if (btn.lock===1||BQueue.array[0]>5){
            var c = color(164, 235, 221,140);
            var value = alpha(c);
            fill(0, 0, 0, value);
            noStroke();
            ellipse(btn.x1, btn.y1, btn.x2+prop+prop, btn.y2+prop+prop);
        }
        
        fill(255, 255, 255);
    }
    if (btn.ID===31){
        //fill(0, 0, 0);
        //image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
        //text("Hold", btn.x1+10, btn.y1+20);
        //fill(255, 255, 255);
        strokeWeight(1);
         var prop=3;

        fill(0, 0, 0);
        stroke(0, 0, 0);
        ellipse(btn.x1, btn.y1, btn.x2+prop+prop, btn.y2+prop+prop);

        fill(255, 255, 255);
        stroke(255, 255, 255);
        ellipse(btn.x1, btn.y1, btn.x2+prop, btn.y2+prop);
        
        fill(186, 186, 186);
        ellipse(btn.x1, btn.y1, btn.x2, btn.y2);
        
        strokeWeight(2);
        bezier(btn.x1-btn.x2/4, btn.y1-btn.x2/3, btn.x1-btn.x2/5, btn.y1+btn.x2/5, btn.x1-btn.x2/8, btn.y1+btn.x2/8, btn.x1, btn.y1+btn.x2/3);
        
        bezier(btn.x1+btn.x2/4, btn.y1-btn.x2/3, btn.x1+btn.x2/5, btn.y1+btn.x2/5, btn.x1+btn.x2/8, btn.y1+btn.x2/8, btn.x1, btn.y1+btn.x2/3);
line(btn.x1-btn.x2/4, btn.y1-btn.x2/3,btn.x1+btn.x2/4, btn.y1-btn.x2/3);

        if (btn.lock===1||BQueue.array[0]>5){
            var c = color(164, 235, 221,140);
            var value = alpha(c);
            fill(0, 0, 0, value);
            noStroke();
            ellipse(btn.x1, btn.y1, btn.x2+prop+prop, btn.y2+prop+prop);
        }
        
        fill(255, 255, 255);
    }
    if (btn.ID===32){
        //fill(0, 0, 0);
        //image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
        //text("End", btn.x1+10, btn.y1+20);
        //fill(255, 255, 255);
        
        var prop=3;

        fill(0, 0, 0);
        stroke(0, 0, 0);
        ellipse(btn.x1, btn.y1, btn.x2+prop+prop, btn.y2+prop+prop);

        fill(255, 255, 255);
        stroke(255, 255, 255);
        ellipse(btn.x1, btn.y1, btn.x2+prop, btn.y2+prop);
        
        fill(186, 186, 186);
        ellipse(btn.x1, btn.y1, btn.x2, btn.y2);
        
        strokeWeight(2);
bezier(btn.x1-btn.x2/4, btn.y1+btn.x2/10,btn.x1-btn.x2/5, btn.y1+btn.x2/10, btn.x1-btn.x2/8, btn.y1+btn.x2/8, btn.x1-btn.x2/10, btn.y1+btn.x2/3);
bezier(btn.x1+btn.x2/3, btn.y1-btn.x2/4, btn.x1+btn.x2/3, btn.y1-btn.x2/4, btn.x1, btn.y1-btn.x2/4, btn.x1-btn.x2/10, btn.y1+btn.x2/3);
        
        if (btn.lock===1||BQueue.array[0]>6){
            var c = color(164, 235, 221,140);
            var value = alpha(c);
            fill(0, 0, 0, value);
            noStroke();
            ellipse(btn.x1, btn.y1, btn.x2+prop+prop, btn.y2+prop+prop);
        }
        
        fill(255, 255, 255);
    }
    
    if (btn.ID===35){
        if (btn.lock===1)
        {drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,3);}
        else
        {drawGraySquere(btn.x1,btn.y1,btn.x2,btn.y2,1);}
    }
    if (btn.ID===36){
        fill(0, 0, 0);
        
        var f = createFont("Arial", 5);
        textFont(f, 12);  
        image(buttonImg2,btn.x1,btn.y1,btn.x2,btn.y2);
        text("Upgrade", btn.x1+10, btn.y1+20);
        f = createFont("Arial", 5);
        textFont(f, 12);
        fill(255, 255, 255);
    }
    
};

var drawUnitRectangle = function(x)
{   
    if((heroOutsidePanel.active)&&(heroOutsidePanel.hero!==-1)&&(nearHero(heroOutsidePanel.hero)===-1)){
        fill(199, 193, 189);    
        rect(heroOutsidePanel.x1, heroOutsidePanel.y1, heroOutsidePanel.x2,heroOutsidePanel.y2 );
        for (ix=0;ix<heroPanelBtns.array.length;ix++)
            {
                drawBtn(heroPanelBtns.array[ix]);
            }
        for (ix=0;ix<heroPanelBtns.array.length;ix++)
            {
            if (ithemSelected!==ix){
                if ((heroes.array[heroOutsidePanel.hero].posInArmy===ix)){
                image(heroes.array[heroOutsidePanel.hero].face,heroPanelBtns.array[ix].x1,heroPanelBtns.array[ix].y1,heroPanelBtns.array[ix].x2,heroPanelBtns.array[ix].y2);
                }
                if ((heroes.array[heroOutsidePanel.hero].army[ix])){
                image(heroes.array[heroOutsidePanel.hero].army[ix].face,heroPanelBtns.array[ix].x1,heroPanelBtns.array[ix].y1,heroPanelBtns.array[ix].x2,heroPanelBtns.array[ix].y2);
                }

            }
        }
        for (ix=0;ix<heroPanelBtns.array.length;ix++)
            {
            if (ithemSelected===ix){
                if ((heroes.array[heroOutsidePanel.hero].posInArmy===ix)){
                image(heroes.array[heroOutsidePanel.hero].face,heroPanelBtns.array[ix].x1+offX,heroPanelBtns.array[ix].y1+offY,heroPanelBtns.array[ix].x2,heroPanelBtns.array[ix].y2);
                }
                if ((heroes.array[heroOutsidePanel.hero].army[ix])){
                image(heroes.array[heroOutsidePanel.hero].army[ix].face,heroPanelBtns.array[ix].x1+offX,heroPanelBtns.array[ix].y1+offY,heroPanelBtns.array[ix].x2,heroPanelBtns.array[ix].y2);
                }
            }
        }
        
        var buttonSelectedP=-1;
        for (var i=0;i<heroPanelBtns.array.length;i++){
            if(heroPanelBtns.array[i].lock===1){
                buttonSelectedP=i;
            }
        }
        
        if(buttonSelectedP!==-1){
            if(heroes.array[heroOutsidePanel.hero].army[buttonSelectedP]){
                if(buttonSelectedP<3){
                drawUnitRect3(heroOutsidePanel.x1-70,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero].army[buttonSelectedP]);
                }else{
                drawUnitRect3(heroOutsidePanel.x1+120,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero].army[buttonSelectedP]);
                }
            }
            if(heroes.array[heroOutsidePanel.hero].posInArmy===buttonSelectedP){
                if(buttonSelectedP<3){
                drawUnitRect3(heroOutsidePanel.x1-70,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero]);
                }else{
                drawUnitRect3(heroOutsidePanel.x1+120,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero]);
                }
            }
            
        }
        
    }
    
   if((heroOutsidePanel.active)&&(heroOutsidePanel.hero!==-1)&&(nearHero(heroOutsidePanel.hero)!==-1)){
        var nH=nearHero(heroOutsidePanel.hero);
        fill(199, 193, 189);    
        rect(heroOutsidePanel.x1-heroOutsidePanel.x2/4, heroOutsidePanel.y1, heroOutsidePanel.x2+heroOutsidePanel.x2/2,heroOutsidePanel.y2 );
        for (ix=0;ix<heroPanelBtns2.array.length;ix++)
            {
                drawBtn(heroPanelBtns2.array[ix]);
            }
        for (ix=0;ix<heroPanelBtns2.array.length;ix++)
            {
            if (ithemSelected!==ix){
                if ((heroes.array[heroOutsidePanel.hero].posInArmy===ix)){
                image(heroes.array[heroOutsidePanel.hero].face,heroPanelBtns2.array[ix].x1,heroPanelBtns2.array[ix].y1,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }
                if ((heroes.array[heroOutsidePanel.hero].army[ix])){
                image(heroes.array[heroOutsidePanel.hero].army[ix].face,heroPanelBtns2.array[ix].x1,heroPanelBtns2.array[ix].y1,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }
                if ((heroes.array[nH].posInArmy+6===ix)){
                image(heroes.array[nH].face,heroPanelBtns2.array[ix].x1,heroPanelBtns2.array[ix].y1,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }
                if ((ix-6>=0)&&(heroes.array[nH].army[ix-6])){
                image(heroes.array[nH].army[ix-6].face,heroPanelBtns2.array[ix].x1,heroPanelBtns2.array[ix].y1,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }

            }
        }
        for (ix=0;ix<heroPanelBtns2.array.length;ix++)
            {
            if (ithemSelected===ix){
                if ((heroes.array[heroOutsidePanel.hero].posInArmy===ix)){
                image(heroes.array[heroOutsidePanel.hero].face,heroPanelBtns2.array[ix].x1+offX,heroPanelBtns2.array[ix].y1+offY,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }
                if ((heroes.array[heroOutsidePanel.hero].army[ix])){
                image(heroes.array[heroOutsidePanel.hero].army[ix].face,heroPanelBtns2.array[ix].x1+offX,heroPanelBtns2.array[ix].y1+offY,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }
                
                if ((heroes.array[nH].posInArmy+6===ix)){
                image(heroes.array[nH].face,heroPanelBtns2.array[ix].x1+offX,heroPanelBtns2.array[ix].y1+offY,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }
                if ((ix-6>=0)&&(heroes.array[nH].army[ix-6])){
                image(heroes.array[nH].army[ix-6].face,heroPanelBtns2.array[ix].x1+offX,heroPanelBtns2.array[ix].y1+offY,heroPanelBtns2.array[ix].x2,heroPanelBtns2.array[ix].y2);
                }
            }
        }
        
        var buttonSelectedP=-1;
        for (var i=0;i<heroPanelBtns2.array.length;i++){
            if(heroPanelBtns2.array[i].lock===1){
                buttonSelectedP=i;
            }
        }
        
        if(buttonSelectedP!==-1){
            if(heroes.array[heroOutsidePanel.hero].army[buttonSelectedP]){
                if(buttonSelectedP>6){
                drawUnitRect3(heroOutsidePanel.x1-70,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero].army[buttonSelectedP]);
                }else{
                drawUnitRect3(heroOutsidePanel.x1+120,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero].army[buttonSelectedP]);
                }
            }
            if(heroes.array[heroOutsidePanel.hero].posInArmy===buttonSelectedP){
                if(buttonSelectedP>6){
                drawUnitRect3(heroOutsidePanel.x1-70,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero]);
                }else{
                drawUnitRect3(heroOutsidePanel.x1+120,heroOutsidePanel.y1+10,150,195,heroes.array[heroOutsidePanel.hero]);
                }
            }
            
            if(heroes.array[nearHero(heroOutsidePanel.hero)].army[buttonSelectedP-6]){
                if(buttonSelectedP<12){
                drawUnitRect3(heroOutsidePanel.x1-70,heroOutsidePanel.y1+10,150,195,heroes.array[nearHero(heroOutsidePanel.hero)].army[buttonSelectedP-6]);
                }else{
                drawUnitRect3(heroOutsidePanel.x1+120,heroOutsidePanel.y1+10,150,195,heroes.array[nearHero(heroOutsidePanel.hero)].army[buttonSelectedP-6]);
                }
            }
            
            if(heroes.array[nearHero(heroOutsidePanel.hero)].posInArmy===buttonSelectedP-6){
                if(buttonSelectedP<12){
                drawUnitRect3(heroOutsidePanel.x1-70,heroOutsidePanel.y1+10,150,195,heroes.array[nearHero(heroOutsidePanel.hero)]);
                }else{
                drawUnitRect3(heroOutsidePanel.x1+120,heroOutsidePanel.y1+10,150,195,heroes.array[nearHero(heroOutsidePanel.hero)]);
                }
            }
            
        }
        
    }
};

var drawEnemyRectangle = function(){
    if(EnemyPanel.active){
        fill(209, 94, 12);  
        var n=EnemyPanel.hero;
        rect(EnemyPanel.x1, EnemyPanel.y1, EnemyPanel.x2,EnemyPanel.y2 );
        for (ix=0;ix<EnemyPanelBtns.array.length;ix++)
        {
            drawBtn(EnemyPanelBtns.array[ix]);
        }
        for (ix=0;ix<EnemyPanelBtns.array.length;ix++)
        {
            if(enemies.array[n].army[ix].face){
                image(enemies.array[n].army[ix].face,EnemyPanelBtns.array[ix].x1,EnemyPanelBtns.array[ix].y1,EnemyPanelBtns.array[ix].x2,EnemyPanelBtns.array[ix].y2);
            }
        }
    }
    
};

var drawUpgradeRectangle = function(){
    if(avUpgr.upgradeHero!==-1){
        noStroke();
        fill(46, 33, 25);  
        rect(50, 50, 300,275);
        drawGraySquere(65, 80, 270, 200,2);
        
        var f = createFont("Arial");
        textFont(f, 14);
        
        for(var i=0;i<upgradePanelBtns.array.length-1;i++){
            drawBtn(upgradePanelBtns.array[i]);
            fill(247, 255, 0);
            text(avUpgr.array[avUpgr.chosen[i]].name,upgradePanelBtns.array[i].x1+15,upgradePanelBtns.array[i].y1+20);
            text(avUpgr.array[avUpgr.chosen[i]].name,upgradePanelBtns.array[i].x1+16,upgradePanelBtns.array[i].y1+20);
            fill(255, 255, 255);
        }
        
        f = createFont("Arial");
        textFont(f, 12);
        drawBtn(upgradePanelBtns.array[3]);
        for(var i=0;i<upgradePanelBtns.array.length-1;i++){
            fill(0, 0, 0);
            var upgradeText = avUpgr.array[avUpgr.chosen[i]].description.replace("unitHealthCost",unitHealthCost);
            var actionText = avUpgr.array[avUpgr.chosen[i]].action.replace("unitHealthCost",unitHealthCost);
            text(upgradeText,upgradePanelBtns.array[i].x1+25,upgradePanelBtns.array[i].y1+35);
            text(actionText,upgradePanelBtns.array[i].x1+55,upgradePanelBtns.array[i].y1+50);
            fill(255, 255, 255);
        }
        
        
        fill(247, 255, 0);
        text("Chose an upgrade:", 65, 70); 
        fill(255, 255, 255);
        image(goldImg, 340, 0 ,20,30);
        
    }
    
};


var isMonster = function (x,y){
    var thereIs=false;
    for (var i=0;i<enemies.array.length;i++)
    {
        if ((enemies.array[i].x===x)&&(enemies.array[i].y===y)){
            thereIs=true;
        }
    }
    return thereIs;
};


var CalculateAIPaths = function (){
    
var ind;
    for (ind=0; ind<heroes.array.length;ind++) {
if ((curSel.x===heroes.array[ind].x)&&(curSel.y===heroes.array[ind].y)){
    for (var ind3=0; ind3<heroes.array.length;ind3++) {
        heroes.array[ind3].selected=0;
    }
    heroes.array[ind].selected=1;
// set ai map to speed of selected hero    
    for ( indx = 0; indx<gMap.sizeX; indx+=1){
        for ( indy = 0; indy<gMap.sizeY; indy+=1){
            AIM.map[indx][indy]=heroes.array[ind].walkpoints;
        }
    }
// set hero position on ia map
    AIM.map[heroes.array[ind].x][heroes.array[ind].y]=0;
    var change=true;
//determin possible travel distance

    while (change){
        change=false;
        for ( indx = 0; indx<gMap.sizeX; indx+=1){
            for ( indy = 0; indy<gMap.sizeY; indy+=1){
                //i+1, j+1
             if(checkCoord(indx+1,indy+1)){
                hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx+1][indy+1]])*1.5;
                if ((AIM.map[indx][indy]>AIM.map[indx+1][indy+1]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
            AIM.map[indx][indy]=AIM.map[indx+1][indy+1]+hvalue;
            change=true;
            }
            }}
            // i+1, j
            if(checkCoord(indx+1,indy)){
               hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx+1][indy]])*1;
               if ((AIM.map[indx][indy]>AIM.map[indx+1][indy]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
                AIM.map[indx][indy]=AIM.map[indx+1][indy]+hvalue;
                change=true;
            }
            }}
            //i+1, j-1
             if(checkCoord(indx+1,indy-1)){
                hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx+1][indy-1]])*1.5;
                if ((AIM.map[indx][indy]>AIM.map[indx+1][indy-1]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
            AIM.map[indx][indy]=AIM.map[indx+1][indy-1]+hvalue;
            change=true;
            }
            }}
                //i, j+1
             if(checkCoord(indx,indy+1)){
                hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx][indy+1]])*1;
                if ((AIM.map[indx][indy]>AIM.map[indx][indy+1]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
            AIM.map[indx][indy]=AIM.map[indx][indy+1]+hvalue;
            change=true;
            }
            }}
            //i, j-1
             if(checkCoord(indx,indy-1)){
                hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx][indy-1]])*1;
                if ((AIM.map[indx][indy]>AIM.map[indx][indy-1]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
            AIM.map[indx][indy]=AIM.map[indx][indy-1]+hvalue;
            change=true;
            }
            }}
            //i-1, j+1
             if(checkCoord(indx-1,indy+1)){
                hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx-1][indy+1]])*1.5;
                if ((AIM.map[indx][indy]>AIM.map[indx-1][indy+1]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
            AIM.map[indx][indy]=AIM.map[indx-1][indy+1]+hvalue;
            change=true;
            }
            }}
            // i-1, j
            if(checkCoord(indx-1,indy)){
                hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx-1][indy]])*1;
                if ((AIM.map[indx][indy]>AIM.map[indx-1][indy]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
            AIM.map[indx][indy]=AIM.map[indx-1][indy]+hvalue;
            change=true;
            }
            }}
            //i-1, j-1
             if(checkCoord(indx-1,indy-1)){
                hvalue=(handicap[gMap.map[indx][indy]]+handicap[gMap.map[indx-1][indy-1]])*1.5;
                if ((AIM.map[indx][indy]>AIM.map[indx-1][indy-1]+hvalue)&&((tMap.map[indx][indy]===0)||(tMap.map[indx][indy]===15))&&(fow.map[indx][indy]===0)){
            if (isMonster(indx,indy)){
                AIM.map[indx][indy]=heroes.array[ind].walkpoints-0.001;
            }
            else{
            AIM.map[indx][indy]=AIM.map[indx-1][indy-1]+hvalue;
            change=true;
            }
            }}
        }
    }
    }
}
}
    
};

var pressButton = function(n){
    var idx;
    var numb = menuBtns.array[n].ID;
    if (numb<1){
        heroOutsidePanel.active=false;
        EnemyPanel.active=false;
        for (var i=0;i<heroPanelBtns.array.length;i++){
            heroPanelBtns.array[i].lock=0;
        }
    }
    
    if (numb===0){
        //fill(0, 0, 0);
        //image(buttonImg2,menuBtns.array[n].x1,menuBtns.array[n].y1,menuBtns.array[n].x2,menuBtns.array[n].y2);
        //text("Pressed", menuBtns.array[n].x1-100, menuBtns.array[n].y1+20);
        //fill(255, 255, 255);
        
        for (idx=0; idx<heroes.array.length;idx++) {
            heroes.array[idx].walkpoints=heroes.array[idx].twalkpoints;
            heroes.array[idx].selected=0;
            clockPos=1;
        }
        
        curSel.selected=0;
        gold=gold+daygold;
        gDay++;
    }
    
    if (numb===1){
        
        if (heroOutsidePanel.active===false){
            heroOutsidePanel.hero=-1;
            for (idx=0; idx<heroes.array.length;idx++) {
                if (heroes.array[idx].selected!==0)
                {
                    heroOutsidePanel.hero=idx;
                }
            }
            if (heroOutsidePanel.hero!==-1)
                {
                    heroOutsidePanel.active=true;
                }
        }
        else{
            heroOutsidePanel.active=false;
            heroOutsidePanel.hero=-1;
            for (var i=0;i<heroPanelBtns.array.length;i++){
                heroPanelBtns.array[i].lock=0;
            }
        }
        
        if (EnemyPanel.active===false){
            EnemyPanel.hero=-1;
            for (var i=0;i<enemies.array.length;i++)
            {
                if ((enemies.array[i].x===curSel.x)&&(enemies.array[i].y===curSel.y)){
                    EnemyPanel.hero=i;
                }   
            }
            if (EnemyPanel.hero!==-1)
                {
                    EnemyPanel.active=true;
                }
        }
        else{
            EnemyPanel.active=false;
            EnemyPanel.hero=-1;
        }
        
        
            //for (idx=0; idx<heroes.array.length;idx++) {
                //heroes.array[idx].selected=0;
            //}
            
            
    // here the selected ithem is accessed   
    
        if (tMap.map[curSel.x][curSel.y]>=10){
            curSel.selected=0;
            mouseLock=0;
            heroOutsidePanel.active=false;
            for (var i=0;i<heroes.array.length;i++)
            {
                heroes.array[i].selected=0;
            }
            for (var i=0;i<heroPanelBtns.array.length;i++){
                heroPanelBtns.array[i].lock=0;
            }
        
            worldstate=3;
        }
    }
    
    if (numb===2){
        var selectedH=-1;
        for (idx=0; idx<heroes.array.length;idx++) {
                if (heroes.array[idx].selected!==0){
                    selectedH=idx;
                }
        }
        
        if (selectedH!==-1&&nearHero(selectedH)!==-1){
            if (nearHero(selectedH)!==myHouse.inHouse){
                heroes.array[nearHero(selectedH)].selected=1;
                curSel.x=heroes.array[nearHero(selectedH)].x;
                curSel.y=heroes.array[nearHero(selectedH)].y;
                heroes.array[selectedH].selected=0;
                CalculateAIPaths();
                heroOutsidePanel.hero=nearHero(selectedH);
                for (var i=0;i<heroPanelBtns2.array.length;i++){
                    heroPanelBtns2.array[i].lock=0;
                }
            }
            else{
                curSel.selected=0;
                heroes.array[selectedH].selected=0;
                heroOutsidePanel.hero=-1;
                for (var i=0;i<heroPanelBtns2.array.length;i++){
                    heroPanelBtns2.array[i].lock=0;
                }
                heroOutsidePanel.active=false;
                worldstate=3;
            }
        }
        else{
            heroOutsidePanel.active=false;
            EnemyPanel.active=false;
            for (var i=0;i<heroPanelBtns.array.length;i++){
                heroPanelBtns.array[i].lock=0;
            }
            for (idx=0; idx<heroes.array.length;idx++) {
                heroes.array[idx].selected=0;
        }
            curSel.selected=0;
        }
    }  
    if (numb===3){
        var propX=mMap.sizeX/gMap.sizeX;
        var propY=mMap.sizeY/gMap.sizeY;
        offsetX=-1*((mouseX-menuBtns.array[3].x1)/propX)*blocksize+200;
        offsetY=-1*((mouseY-menuBtns.array[3].y1)/propY-2)*(blocksize/2)+200;
    }
    
};


var drawInsideHouse= function(){
    background(61, 32, 9);
    //background(240, 163, 104);
    //image(house4Img2,5,10,150,300);
    
    //gold
    fill(247, 255, 0);
    text(gold, 365, 25); 
    fill(255, 255, 255);
    image(goldImg, 340, 0 ,20,30);
    
    var ix;
    for (ix=0;ix<houseBtns.array.length;ix++)
    {
        drawBtn(houseBtns.array[ix]);
    }
    for (ix=0;ix<houseBtns.array.length;ix++)
    {
        if (ithemSelected!==ix){
            if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].posInArmy===ix)){
                image(heroes.array[myHouse.inHouse].face,houseBtns.array[ix].x1,houseBtns.array[ix].y1,houseBtns.array[ix].x2,houseBtns.array[ix].y2);
            }
            if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].army[ix])){
                image(heroes.array[myHouse.inHouse].army[ix].face,houseBtns.array[ix].x1,houseBtns.array[ix].y1,houseBtns.array[ix].x2,houseBtns.array[ix].y2);
            }
            if((ix>5)&&(ix<12)&&(myHouse.reservs[ix-6].face)){
                image(myHouse.reservs[ix-6].face,houseBtns.array[ix].x1,houseBtns.array[ix].y1,houseBtns.array[ix].x2,houseBtns.array[ix].y2);
            }
        }
        
    }
    
    for (ix=0;ix<houseBtns.array.length;ix++)
    {
        if (ithemSelected===ix){
            if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].posInArmy===ix)){
                image(heroes.array[myHouse.inHouse].face,houseBtns.array[ix].x1+offX,houseBtns.array[ix].y1+offY,houseBtns.array[ix].x2,houseBtns.array[ix].y2);
            }
            if ((myHouse.inHouse!==-1)&&(heroes.array[myHouse.inHouse].army[ix])){
                image(heroes.array[myHouse.inHouse].army[ix].face,houseBtns.array[ix].x1+offX,houseBtns.array[ix].y1+offY,houseBtns.array[ix].x2,houseBtns.array[ix].y2);
            }
            if((ix>5)&&(ix<12)&&(myHouse.reservs[ix-6].face)){
                image(myHouse.reservs[ix-6].face,houseBtns.array[ix].x1+offX,houseBtns.array[ix].y1+offY,houseBtns.array[ix].x2,houseBtns.array[ix].y2);
            }
        }
        
    }
    
    
    
    
    if (checkOver()===false){
    if (hMenu.pressed!==-1){
        drawUnitMenu();
        if((overUnitMenu()>-1)&&(eMenu.show===false))
        {
            if(hMenu.pressed<6){
            drawUnitRect2(240, 160, 150, 200,hMenu.units[overUnitMenu()]);}
            else{
            drawUnitRect2(240, 160, 150, 200,hMenu.units[overUnitMenu()]);}
        }
    }
    }
    else{
        if (myHouse.inHouse!==-1){
            if(heroes.array[myHouse.inHouse].posInArmy===hMenu.pressed){
                drawUnitRect3(175,160,150,195,heroes.array[myHouse.inHouse]);
            }
            if(heroes.array[myHouse.inHouse].army[hMenu.pressed]){
                drawUnitRect3(175,160,150,195,heroes.array[myHouse.inHouse].army[hMenu.pressed]);
            }
        }
        if(hMenu.pressed>5){
            if(myHouse.reservs[hMenu.pressed-6]){
                drawUnitRect3(75,160,150,195,myHouse.reservs[hMenu.pressed-6]);
            }
        }
    }
    
    if((overHouseMenu()>-1)&&(houseBtns.array[overHouseMenu()].ID===21)&&(eMenu.show===false)){
        drawUnitRect(houseBtns.array[overHouseMenu()].x1, 150, 150, 200,defUnits[0]);
    }
    
    if((overHouseMenu()>-1)&&(houseBtns.array[overHouseMenu()].ID===22)&&(eMenu.show===false)){
        drawUnitRect(houseBtns.array[overHouseMenu()].x1, 150, 150, 200,defUnits[1]);
    }
    
    if((overHouseMenu()>-1)&&(houseBtns.array[overHouseMenu()].ID===23)&&(eMenu.show===false)){
        drawUnitRect(houseBtns.array[overHouseMenu()].x1-50, 150, 150, 200,defUnits[2]);
    }
    
    
    //235, 247, 72
    for (var i=0;i<3;i++){
        if (ourColors[0+3*i]!==235){ourColors[0+3*i]=ourColors[0+3*i]-2; }
        if (ourColors[1+3*i]!==248){ourColors[1+3*i]=ourColors[1+3*i]+48; }
        if (ourColors[2+3*i]!==72){ourColors[2+3*i]=ourColors[2+3*i]+12.8; }
    }
    if (ourColors[9]!==8){ourColors[9]=ourColors[9]-24.7; }
    
};

var drawError = function()
{
    fill(48, 8, 8);
    ellipse(72, 202, 10, 10);
    ellipse(330, 202, 8, 10);
    rect(70,197,260,100);
    rect(67,200,5,100);
    rect(330,200,4,100);
    fill(255, 0, 0);
    rect(70,200,260,100);
    fill(255, 255, 255);
    text(eMenu.text,90,220);
    
    var OKBtn = button(265,260,60,30,11);
    drawBtn(OKBtn);
    if ((mouseX>265)&&(mouseY>260)&&(mouseX<265+60)&&(mouseY<260+30)&&(mouseIsPressed)){
        eMenu.show=false;
        mouseLock=1;
    }
};


var drawVictory = function()
{ if (vMenu.show===true){
    fill(72, 106, 110);
    ellipse(72, 202, 10, 10);
    ellipse(330, 202, 8, 10);
    rect(70,197,260,100);
    rect(67,200,5,100);
    rect(330,200,4,100);
    fill(117, 202, 230);
    rect(70,200,260,100);
    fill(255, 234, 0);
    textSize(30);
    text(vMenu.text,150,250);
    textSize(12);
    
    var OKBtn = button(265,260,60,30,11);
    drawBtn(OKBtn);
    if ((mouseX>265)&&(mouseY>260)&&(mouseX<265+60)&&(mouseY<260+30)&&(mouseIsPressed)){
        worldstate=5;
    }
}
};

var moveUnitInMenu = function()
{
    if ((hMenu.pressed!==-1)&&(ithemSelected!==-1)){
        houseBtns.array[hMenu.pressed].lock=0;
        hMenu.pressed=-1;
    }
    if (mouseIsPressed){
            offX = mouseX-mInX;
            offY = mouseY-mInY;
    }
    return true;  
};
var moveUnitInPanel = function()
{
    for (var i=0;i<heroPanelBtns.array.length;i++){
            heroPanelBtns.array[i].lock=0;
        }
    for (var i=0;i<heroPanelBtns2.array.length;i++){
            heroPanelBtns2.array[i].lock=0;
        }
    if (mouseIsPressed){
            offX = mouseX-mInX;
            offY = mouseY-mInY;
    }
    return true;  
};

var movePannelItem = function(fromA,toB){

    if(heroes.array[heroOutsidePanel.hero].posInArmy===fromA){
        if(toB<6){
            if(!heroes.array[heroOutsidePanel.hero].army[toB]){
                heroes.array[heroOutsidePanel.hero].posInArmy=toB;
            }
        }else{
            eMenu.text="Heroes cannot be joined";
            eMenu.show=true;
        }
    }
    
    var nH=nearHero(heroOutsidePanel.hero);
    
    if((nH!==-1)&&(heroes.array[nH].posInArmy===fromA-6)){
        if(toB>5){
            if(!heroes.array[nH].army[toB-6]){
                heroes.array[nH].posInArmy=toB-6;
            }
        }else{
            eMenu.text="Heroes cannot be joined";
            eMenu.show=true;
        }
    }
    
    if(heroes.array[heroOutsidePanel.hero].army[fromA]){
        if (toB<6){
            if((!heroes.array[heroOutsidePanel.hero].army[toB])&&(heroes.array[heroOutsidePanel.hero].posInArmy!==toB)){
        heroes.array[heroOutsidePanel.hero].army[toB]=copyUnit(heroes.array[heroOutsidePanel.hero].army[fromA]);
        heroes.array[heroOutsidePanel.hero].army[fromA]=undefined;
            }
        }
        else{
            if (nrOfUnits(nH)<heroes.array[nH].diplomacy){
                if ((!heroes.array[nH].army[toB-6])&&(heroes.array[nH].posInArmy!==toB-6)){
                    heroes.array[nH].army[toB-6]=copyUnit(heroes.array[heroOutsidePanel.hero].army[fromA]);
                    heroes.array[heroOutsidePanel.hero].army[fromA]=undefined;
                }
            }
            else{
                eMenu.text="Move not  allowed.  \n     Hero does not have enough diplomacy !";
                eMenu.show=true;
            }
            
        }
    }
    
    if((nH!==-1)&&(fromA>5)&&(heroes.array[nH].army[fromA-6])){
        if (toB>5){
            if((!heroes.array[nH].army[toB-6])&&(heroes.array[nH].posInArmy!==toB-6)){
        heroes.array[nH].army[toB-6]=copyUnit(heroes.array[nH].army[fromA-6]);
        heroes.array[nH].army[fromA-6]=undefined;
            }
        }
        else{
            if (nrOfUnits(heroOutsidePanel.hero)<heroes.array[heroOutsidePanel.hero].diplomacy){
                if ((!heroes.array[heroOutsidePanel.hero].army[toB])&&(heroes.array[heroOutsidePanel.hero].posInArmy!==toB)){
                    heroes.array[heroOutsidePanel.hero].army[toB]=copyUnit(heroes.array[nH].army[fromA-6]);
                    heroes.array[nH].army[fromA-6]=undefined;
                }
            }
            else{
                eMenu.text="Move not  allowed.  \n     Hero does not have enough diplomacy !";
                eMenu.show=true;
            }
            
        }
    }
    
};

var moveItem = function(fromA,toB)
{
    if ((myHouse.inHouse!==-1)&&(toB<12)&&(heroes.array[myHouse.inHouse].posInArmy===fromA)&&(!heroes.array[myHouse.inHouse].army[toB])){
        if (toB<6){
            heroes.array[myHouse.inHouse].posInArmy=toB;
        }
        else{
            eMenu.text="Heroes cannot be moved into the garrison !";eMenu.show=true;
        }
    }
    
    if ((myHouse.inHouse!==-1)&&(toB<12)&&(heroes.array[myHouse.inHouse].posInArmy!==toB)&&(heroes.array[myHouse.inHouse].army[fromA])&&(!heroes.array[myHouse.inHouse].army[toB])){
        if(toB<6){
            heroes.array[myHouse.inHouse].army[toB]=copyUnit(heroes.array[myHouse.inHouse].army[fromA]);
            heroes.array[myHouse.inHouse].army[fromA]=undefined;
        }
        else{
            if ((!myHouse.reservs[toB-6].face))
            {
                myHouse.reservs[toB-6]=copyUnit(heroes.array[myHouse.inHouse].army[fromA]);
                heroes.array[myHouse.inHouse].army[fromA]=undefined;
            }
        }
    }
    
    if ((fromA>5)&&(toB>5)&&(toB<12)&&(myHouse.reservs[fromA-6])&&(!myHouse.reservs[toB-6].face)){
        myHouse.reservs[toB-6]=copyUnit(myHouse.reservs[fromA-6]);
        myHouse.reservs[fromA-6]=[];
    }
    
    if ((fromA>5)&&(toB<6)&&(myHouse.reservs[fromA-6])){
        if ((myHouse.inHouse!==-1)){
            if ((heroes.array[myHouse.inHouse].posInArmy!==toB)&&(!heroes.array[myHouse.inHouse].army[toB])){
                if(nrOfUnits(myHouse.inHouse)<heroes.array[myHouse.inHouse].diplomacy){
                    heroes.array[myHouse.inHouse].army[toB]=copyUnit(myHouse.reservs[fromA-6]);
            myHouse.reservs[fromA-6]=[];
                }
                else{
                    eMenu.text="Move not  allowed.  \n     Hero does not have enough diplomacy !";eMenu.show=true;
                }
            }
        }
        else{
            eMenu.text="Move not  allowed.  \n     There is no hero in the house !";eMenu.show=true;
        }
    }
};

//returns true if there is not ahead
var checkAheadQueue=function (x,y){
    var noThereIsnt=true;
    for (var i=x-((x+BQueue.playedAK)%BQueue.totalN);i<x;i++){
        if(i>-1&&BQueue.array[i]===y){
            noThereIsnt=false;
        }
    }
    
    return noThereIsnt;
};
var addSpecialQueue = function(){
    var lastSpeed=-1;
    if (BQueue.array[BQueue.totalQ-2]>=6)
    {
        lastSpeed=(enemies.array[bGround.enemy].army[BQueue.array[BQueue.totalQ-2]-6].speed+enemies.array[bGround.enemy].army[BQueue.array[BQueue.totalQ-2]-6].queueSpeed)*enemies.array[bGround.enemy].army[BQueue.array[BQueue.totalQ-2]-6].skip;
    }
    else{
        if (heroes.array[bGround.hero].alive===true&&heroes.array[bGround.hero].posInArmy===BQueue.array[BQueue.totalQ-2]){
            lastSpeed=(heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed)*heroes.array[bGround.hero].skip;
        }
        if (heroes.array[bGround.hero].army[BQueue.array[BQueue.totalQ-2]]){
            lastSpeed=(heroes.array[bGround.hero].army[BQueue.array[BQueue.totalQ-2]].speed+heroes.array[bGround.hero].army[BQueue.array[BQueue.totalQ-2]].queueSpeed)*heroes.array[bGround.hero].army[BQueue.array[BQueue.totalQ-2]].skip;
        }
    }
    
    var nextSpeed=-10000;
    var nextUnit=-1;
    var rSpeed=-1;
    var rlSpeed=round(lastSpeed);
    var skipN=10;
    lastSpeed=lastSpeed+0.9;
    
    for (var i=5;i>-1;i--){
        if (heroes.array[bGround.hero].army[i]){
            var unitSpeed=(heroes.array[bGround.hero].army[i].speed+heroes.array[bGround.hero].army[i].queueSpeed)*heroes.array[bGround.hero].army[i].skip; 
            if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,i)&&i!==BQueue.array[BQueue.totalQ-2]){
                nextSpeed=unitSpeed;
                nextUnit=i;
                rSpeed=heroes.array[bGround.hero].army[i].speed;
                skipN=heroes.array[bGround.hero].army[i].skip;
            }
        }
    }
    for (var i=5;i>-1;i--){
        if (enemies.array[bGround.enemy].army[i].face){
            var unitSpeed=(enemies.array[bGround.enemy].army[i].speed+enemies.array[bGround.enemy].army[i].queueSpeed)*enemies.array[bGround.enemy].army[i].skip;
            if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,i+6)&&i+6!==BQueue.array[BQueue.totalQ-2]){
                nextSpeed=unitSpeed;
                nextUnit=i+6;
                rSpeed=enemies.array[bGround.enemy].army[i].speed;
                skipN=enemies.array[bGround.enemy].army[i].skip;
            }
        }
    }
    if (heroes.array[bGround.hero].alive===true){
    var unitSpeed=(heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed)*heroes.array[bGround.hero].skip;
        if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,heroes.array[bGround.hero].posInArmy)&&heroes.array[bGround.hero].posInArmy!==BQueue.array[BQueue.totalQ-2]){
            nextSpeed=unitSpeed;
            nextUnit=heroes.array[bGround.hero].posInArmy;
            rSpeed=heroes.array[bGround.hero].speed;
            skipN=heroes.array[bGround.hero].skip;
        }
    }
    if (skipN===-1){//for lardge queues
        if (heroes.array[bGround.hero].alive===true){
    var unitSpeed=(heroes.array[bGround.hero].speed-heroes.array[bGround.hero].queueSpeed)*heroes.array[bGround.hero].skip;
            if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,heroes.array[bGround.hero].posInArmy)&&heroes.array[bGround.hero].posInArmy!==BQueue.array[BQueue.totalQ-2]){
                nextSpeed=unitSpeed;
                nextUnit=heroes.array[bGround.hero].posInArmy;
                rSpeed=heroes.array[bGround.hero].speed;
            }
        } 
        for (var i=0;i<6;i++){
            if (enemies.array[bGround.enemy].army[i].face){
                var unitSpeed=(enemies.array[bGround.enemy].army[i].speed-enemies.array[bGround.enemy].army[i].queueSpeed)*enemies.array[bGround.enemy].army[i].skip;
                if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,i+6)&&i+6!==BQueue.array[BQueue.totalQ-2]){
                    nextSpeed=unitSpeed;
                    nextUnit=i+6;
                    rSpeed=enemies.array[bGround.enemy].army[i].speed;
                }
            }
        }
        for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]){
                var unitSpeed=(heroes.array[bGround.hero].army[i].speed-heroes.array[bGround.hero].army[i].queueSpeed)*heroes.array[bGround.hero].army[i].skip; 
                if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,i)&&i!==BQueue.array[BQueue.totalQ-2]){
                    nextSpeed=unitSpeed;
                    nextUnit=i;
                    rSpeed=heroes.array[bGround.hero].army[i].speed;
                }
            }
        }
    }
    
    //in case new turn
    
    if ((BQueue.totalQ-1+BQueue.playedAK)%BQueue.totalN===0){
        nextSpeed=-10000;
        rlSpeed=-10000;
    }
    
    if(nextSpeed===-10000){
        for (var i=5;i>-1;i--){
        if (heroes.array[bGround.hero].army[i]){
            var unitSpeed=heroes.array[bGround.hero].army[i].speed+heroes.array[bGround.hero].army[i].queueSpeed; 
            if(unitSpeed>=nextSpeed){
                nextSpeed=unitSpeed;
                nextUnit=i;
                rSpeed=heroes.array[bGround.hero].army[i].speed;
            }
        }
    }
    for (var i=5;i>-1;i--){
        if (enemies.array[bGround.enemy].army[i].face){
            var unitSpeed=enemies.array[bGround.enemy].army[i].speed+enemies.array[bGround.enemy].army[i].queueSpeed;
            if(unitSpeed>=nextSpeed){
                nextSpeed=unitSpeed;
                nextUnit=i+6;
                rSpeed=enemies.array[bGround.enemy].army[i].speed;
            }
        }
    }
    if (heroes.array[bGround.hero].alive===true){
        var unitSpeed=heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed;
        if(unitSpeed>=nextSpeed){
            nextSpeed=unitSpeed;
            nextUnit=heroes.array[bGround.hero].posInArmy;
            rSpeed=heroes.array[bGround.hero].speed;
        }
    }
    }

    //adding queue speed
/*    if (rlSpeed!==rSpeed){
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].speed===rSpeed&&i!==nextUnit){
                heroes.array[bGround.hero].army[i].queueSpeed+=0.01;
            }
    }
    for (var i=0;i<6;i++){
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].speed===rSpeed&&i+6!==nextUnit){
                enemies.array[bGround.enemy].army[i].queueSpeed+=0.01;
            }
    }
    if (heroes.array[bGround.hero].speed===rSpeed&&heroes.array[bGround.hero].posInArmy!==nextUnit){
        heroes.array[bGround.hero].queueSpeed+=0.01;
    }
    }*/

    //debug(nextUnit, nextSpeed,skipN);
    BQueue.array.push(nextUnit);
};

var addQueue = function(){
    var lastSpeed=-1;
    if (BQueue.array[BQueue.totalQ-2]>=6)
    {
        lastSpeed=enemies.array[bGround.enemy].army[BQueue.array[BQueue.totalQ-2]-6].speed+enemies.array[bGround.enemy].army[BQueue.array[BQueue.totalQ-2]-6].queueSpeed;
    }
    else{
        if (heroes.array[bGround.hero].alive===true&&heroes.array[bGround.hero].posInArmy===BQueue.array[BQueue.totalQ-2]){
            lastSpeed=heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed;
        }
        if (heroes.array[bGround.hero].army[BQueue.array[BQueue.totalQ-2]]){
            lastSpeed=heroes.array[bGround.hero].army[BQueue.array[BQueue.totalQ-2]].speed+heroes.array[bGround.hero].army[BQueue.array[BQueue.totalQ-2]].queueSpeed;
        }
    }
    
    var nextSpeed=-10000;
    var nextUnit=-1;
    var rSpeed=-1;
    var rlSpeed=round(lastSpeed);
    var skipN=10;
    lastSpeed=lastSpeed+0.9;
    //debug(nextUnit);
    for (var i=5;i>-1;i--){
        if (heroes.array[bGround.hero].army[i]){
            var unitSpeed=heroes.array[bGround.hero].army[i].speed+heroes.array[bGround.hero].army[i].queueSpeed; 
            if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,i)&&i!==BQueue.array[BQueue.totalQ-2]){
                nextSpeed=unitSpeed;
                nextUnit=i;
                rSpeed=heroes.array[bGround.hero].army[i].speed;
                skipN=heroes.array[bGround.hero].army[i].skip;
            }
        }
    }
    for (var i=5;i>-1;i--){
        if (enemies.array[bGround.enemy].army[i].face){
            var unitSpeed=enemies.array[bGround.enemy].army[i].speed+enemies.array[bGround.enemy].army[i].queueSpeed;
            if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,i+6)&&i+6!==BQueue.array[BQueue.totalQ-2]){
                nextSpeed=unitSpeed;
                nextUnit=i+6;
                rSpeed=enemies.array[bGround.enemy].army[i].speed;
                skipN=enemies.array[bGround.enemy].army[i].skip;
            }
        }
    }
    if (heroes.array[bGround.hero].alive===true){
    var unitSpeed=heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed;
        if(unitSpeed>=nextSpeed&&unitSpeed<lastSpeed&&checkAheadQueue(BQueue.totalQ-1,heroes.array[bGround.hero].posInArmy)&&heroes.array[bGround.hero].posInArmy!==BQueue.array[BQueue.totalQ-2]){
            nextSpeed=unitSpeed;
            nextUnit=heroes.array[bGround.hero].posInArmy;
            rSpeed=heroes.array[bGround.hero].speed;
            skipN=heroes.array[bGround.hero].skip;
        }
    }
    
    if(nextSpeed===-10000){
        addSpecialQueue();
        //adding queue speed
    if (rlSpeed!==rSpeed){
        for (var i=0;i<6;i++){
                if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].speed===rSpeed&&i!==nextUnit){
                    heroes.array[bGround.hero].army[i].queueSpeed+=0.01;
                }
        }
        for (var i=0;i<6;i++){
                if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].speed===rSpeed&&i+6!==nextUnit){
                    enemies.array[bGround.enemy].army[i].queueSpeed+=0.01;
                }
        }
        if (heroes.array[bGround.hero].speed===rSpeed&&heroes.array[bGround.hero].posInArmy!==nextUnit){
            heroes.array[bGround.hero].queueSpeed+=0.01;
        }
    }
        return ;
    }
    
    //in case new turn
    //debug(nextUnit);
    if ((BQueue.totalQ-1+BQueue.playedAK)%BQueue.totalN===0){//debug("new turn");
        nextSpeed=-10000;
        rlSpeed=-10000;
    }
    
    if(nextSpeed===-10000){
        for (var i=5;i>-1;i--){
            if (heroes.array[bGround.hero].army[i]){
                var unitSpeed=heroes.array[bGround.hero].army[i].speed+heroes.array[bGround.hero].army[i].queueSpeed; 
                if(unitSpeed>=nextSpeed){
                    nextSpeed=unitSpeed;
                    nextUnit=i;
                    rSpeed=heroes.array[bGround.hero].army[i].speed;
                }
            }
        }
        for (var i=5;i>-1;i--){
            if (enemies.array[bGround.enemy].army[i].face){
                var unitSpeed=enemies.array[bGround.enemy].army[i].speed+enemies.array[bGround.enemy].army[i].queueSpeed;
                if(unitSpeed>=nextSpeed){
                    nextSpeed=unitSpeed;
                    nextUnit=i+6;
                    rSpeed=enemies.array[bGround.enemy].army[i].speed;
                }
            }
        }
        if (heroes.array[bGround.hero].alive===true){
            var unitSpeed=heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed;
            if(unitSpeed>=nextSpeed){
                nextSpeed=unitSpeed;
                nextUnit=heroes.array[bGround.hero].posInArmy;
                rSpeed=heroes.array[bGround.hero].speed;
            }
        }
    }
    //debug(nextUnit);
    //adding queue speed
    if (rlSpeed!==rSpeed){
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].speed===rSpeed&&i!==nextUnit){
                heroes.array[bGround.hero].army[i].queueSpeed+=0.01;
            }
    }
    for (var i=0;i<6;i++){
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].speed===rSpeed&&i+6!==nextUnit){
                enemies.array[bGround.enemy].army[i].queueSpeed+=0.01;
            }
    }
    if (heroes.array[bGround.hero].speed===rSpeed&&heroes.array[bGround.hero].posInArmy!==nextUnit){
        heroes.array[bGround.hero].queueSpeed+=0.01;
    }
    }

    //debug(nextUnit, nextSpeed,skipN);
    for (var i=0; i<6;i++){
        if (heroes.array[bGround.hero].army[i]){
            //debug("next unit is",heroes.array[bGround.hero].army[i].skip);
        }
        else {
            //debug("-");
        }
    }
    for (var i=0; i<6;i++){
        if (enemies.array[bGround.enemy].army[i].face){
            //debug("anim sk",enemies.array[bGround.enemy].army[i].skip);
        }
        else {
            //debug("-");
        }
    }
    
    BQueue.array.push(nextUnit);
};

var pushWaitedQueue = function(){
    var firstSpeed=0;
    var currentSpeed=0;
    var i=0;
    
    if (BQueue.array[0]<6){
            if (heroes.array[bGround.hero].army[BQueue.array[0]]){
                firstSpeed=-1*(heroes.array[bGround.hero].army[BQueue.array[0]].speed);
            }
            if (heroes.array[bGround.hero].posInArmy===BQueue.array[0]&&heroes.array[bGround.hero].alive===true){
                firstSpeed=-1*(heroes.array[bGround.hero].speed);
            }
            
        }else{
            if (enemies.array[bGround.enemy].army[BQueue.array[0]-6].face){
                firstSpeed=-1*(enemies.array[bGround.enemy].army[BQueue.array[0]-6].speed);
            }
        }
    
    while ((firstSpeed<currentSpeed)&&(BQueue.playedAK%BQueue.totalN+i!==BQueue.totalN)){
        i++;
    if (BQueue.array[i]!==undefined){
    if (BQueue.array[i]<6){
            if (heroes.array[bGround.hero].army[BQueue.array[i]]){
                currentSpeed=heroes.array[bGround.hero].army[BQueue.array[i]].skip*(heroes.array[bGround.hero].army[BQueue.array[i]].speed);
            }
            if (heroes.array[bGround.hero].posInArmy===BQueue.array[i]&&heroes.array[bGround.hero].alive===true){
                currentSpeed=heroes.array[bGround.hero].skip*(heroes.array[bGround.hero].speed);
            }
            
        }else{
            if (enemies.array[bGround.enemy].army[BQueue.array[i]-6].face){
                currentSpeed=enemies.array[bGround.enemy].army[BQueue.array[i]-6].skip*(enemies.array[bGround.enemy].army[BQueue.array[i]-6].speed);
            }
        }
    }
        
        
    }
    
    if (i<=BQueue.totalQ){
       BQueue.array.splice(i,0,BQueue.array[0]);
       BQueue.skip=i;
       BQueue.array.splice(0,1);
    }else{
        BQueue.array.splice(0,1);
        addSpecialQueue();
        BQueue.skip=8;
    }
};

var initAction = function(){
   Act.inProgress=true;
   Act.initSession=0;
   Act.finalSession=0;
   Act.damageSession=0;
   Act.Session=0;
};

var elimDead= function (){
    var nmher=true;
    var nmene=true;
    //check if hero is not dead
    if (heroes.array[bGround.hero].alive===true){nmher=false;}
    //check if there are hero 
    for (var i=0;i<6;i++)
        {
            if (heroes.array[bGround.hero].army[i]){nmher=false;}
            if (enemies.array[bGround.enemy].army[i].face){nmene=false;}
        }
    
    if (nmene){
        enemies.array.splice(bGround.enemy,1);
    }
    
    if (nmher){
        heroes.array.splice(bGround.hero,1);
    }
};

var heroCallBack= function (){

    var mT=255;
    /*
    var armyExists=false;
    
    for (var i=0;i<6;i++)
        {
            if (heroes.array[bGround.hero].army[i]){armyExists=true;}
        }
    
    if (heroes.array[bGround.hero].alive===false&&armyExists)
    {
        while(mT>0){
	        mT=mT-pace;
            BGP.positions[heroes.array[bGround.hero].posInArmy][0]+=floor(200/floor(255/pace));
	    }
    }*/
    
    if (BGP.positions[heroes.array[bGround.hero].posInArmy][0]<-10){
        while(mT>0){
	        mT=mT-pace;
            BGP.positions[heroes.array[bGround.hero].posInArmy][0]+=floor(200/floor(255/pace));
	    }
    }
    
};


var pressRBButton = function(x){
    if (x===12){
        if (BQueue.array[0]<6){
            if (heroes.array[bGround.hero].army[BQueue.array[0]]){
                heroes.array[bGround.hero].army[BQueue.array[0]].skip=-1;
            }
            if (heroes.array[bGround.hero].posInArmy===BQueue.array[0]){
                heroes.array[bGround.hero].skip=-1;
            }
            
        }else{
            if (enemies.array[bGround.enemy].army[BQueue.array[0]-6].face){
                enemies.array[bGround.enemy].army[BQueue.array[0]-6].skip=-1;
            }
        }
        
        //BQueue.array.splice(0,1);
        queueOffset=BQueue.width;
        fSize=0; 
        //BQueue.played++;
        pushWaitedQueue();
        //addQueue();
        checkQueueSkip(5);
    }
    
    if (x===13){
        BQueue.array.splice(0,1);
        queueOffset=BQueue.width;
        BQueue.skip=BQueue.totalQ;
        fSize=0; 
        BQueue.played++;
        BQueue.playedAK++;
        //addQueue();
        if (battlePanelBtns.array[14].lock===1){
            addQueue();
        }
        else{
            BQueue.totalQ--;
            BQueue.skip=BQueue.totalQ;
        }
        if (BQueue.array[0]!==undefined){
            checkQueueSkip();
        }
    }
    
    if (x===14){
        resetSkip();
        BQueue.skip=8;
        worldstate=1;
        heroCallBack();
        if (heroes.array[bGround.hero].alive===true){
            reward.currentIncrement=0;
            reward.x=heroes.array[bGround.hero].x;
            reward.y=heroes.array[bGround.hero].y-1;
            gold=gold+reward.value;
        }
        elimDead();
    }
    
    //battlePanelBtns.array[x].lock=(battlePanelBtns.array[x].lock+1)%2;
};



var CheckVictory = function(){
    var vict=false;
    if (enemies.array.length===0){
        vict=true;
    }
    return vict;
};

var addXP = function(){
    
    var hrs=0;
    var enim=0;
    
    if (heroes.array[bGround.hero].alive===true){
        hrs=1;
    }
  
  for (var i=0;i<heroes.array[bGround.hero].army.length;i++){
      if (heroes.array[bGround.hero].army[i]){
          hrs++;
      }
  }
  
  for (var i=0;i<enemies.array[bGround.enemy].army.length;i++){
      if (enemies.array[bGround.enemy].army[i].face){
          enim++;
      }
  }
  
  if (hrs>0){
    if (heroes.array[bGround.hero].alive===true){
        heroes.array[bGround.hero].XP=heroes.array[bGround.hero].XP+bGround.enemyXPperUnit;
    }
    
    for (var i=0;i<heroes.array[bGround.hero].army.length;i++){
      if (heroes.array[bGround.hero].army[i]){
         heroes.array[bGround.hero].army[i].XP=heroes.array[bGround.hero].army[i].XP+bGround.enemyXPperUnit;
      }
    }
      
  }else{
        for (var i=0;i<enemies.array[bGround.enemy].army.length;i++){
            if (enemies.array[bGround.enemy].army[i].face){
                enemies.array[bGround.enemy].army[i].XP=enemies.array[bGround.enemy].army[i].XP+bGround.heroXPperUnit;
            }
        }
  }
  
  
};

var checkUpgrade = function(){
    
    var upgrade=false;
    
    if (heroes.array[bGround.hero].alive===true&&heroes.array[bGround.hero].XP>=heroes.array[bGround.hero].maxXP){
        upgrade=true;
    }
  
  for (var i=0;i<6;i++){
      if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].XP>=heroes.array[bGround.hero].army[i].maxXP){
        upgrade=true; 
      }
      if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].XP>=enemies.array[bGround.enemy].army[i].maxXP){
          upgrade=true;
      }
  }

    return upgrade;
};

var calculateBattleXP = function(){
    
    var standardXP=15;
    
    var hrs=0;
    var hrsXP=0;
    var enim=0;
    var enimXP=0;
    
    if (heroes.array[bGround.hero].alive===true){
        hrs=1;
        hrsXP=hrsXP+standardXP*heroes.array[bGround.hero].level;
    }
  
  for (var i=0;i<heroes.array[bGround.hero].army.length;i++){
      if (heroes.array[bGround.hero].army[i]){
          hrs++;
          hrsXP=hrsXP+standardXP*heroes.array[bGround.hero].army[i].level;
      }
  }
  
  for (var i=0;i<enemies.array[bGround.enemy].army.length;i++){
      if (enemies.array[bGround.enemy].army[i].face){
          enim++;
          enimXP=enimXP+standardXP*enemies.array[bGround.enemy].army[i].level;
      }
  }
  
        bGround.heroXPperUnit=round(hrsXP/enim);
        bGround.enemyXPperUnit=round (enimXP/hrs);

};

var calculateBattleReward= function(){
    var battleGold=0;
    var standardGold=20;
    
    for (var i=0;i<enemies.array[bGround.enemy].army.length;i++){
      if (enemies.array[bGround.enemy].army[i].face){
          battleGold=battleGold+standardGold*enemies.array[bGround.enemy].army[i].level;
      }
    }
    
    reward.value=battleGold;
};

var GoToBattle = function(){
    var go=false;
    
    for (var i=0;i<heroes.array.length;i++){
        for (var j=0;j<enemies.array.length;j++){
            if ((heroes.array[i].x===enemies.array[j].x)&&(heroes.array[i].y===enemies.array[j].y)){
                bGround.hero=i;
                bGround.enemy=j;
                bGround.show=true;
                go=true;
            }
            
        }
    }
    
    return go;
};

var drawBattleScene = function (n){
switch(n)
{
case 0:
    background(195, 208, 240);
    
    fill(75, 240, 67);    
    rect(0, 100, 400, 300);

    image(tree2Img, 10,50,55,72);
    image(tree2Img, 50,70,55,72);
    image(tree2Img, 10,90,55,72);
    image(tree2Img, 100,50,55,72);
    
    image(tree2Img, 360,50,55,72);
    image(tree3Img, 300,60,55,72);
    image(tree4Img, 340,90,55,72);
    image(tree3Img, 360,120,55,72);
    break;
case 1:
    background(195, 208, 240);
    var x=44;
    fill(131, 179, 140);
    triangle(110,200-x,250,50-x,330,200-x);
    triangle(160,200-x,340,30-x,480,200-x);
    fill(255, 255, 255);
    triangle(206,95-x,250,50-x,230,90-x);
    triangle(220,80-x,250,50-x,256,95-x);
    triangle(250,80-x,250,50-x,272,90-x);
    triangle(264,101-x,340,30-x,319,77-x);
    triangle(287,105-x,340,30-x,346,77-x);
    triangle(337,83-x,340,30-x,390,91-x);
    fill(75, 240, 67);    
    rect(0, 100, 400, 300);
    image(tree3Img, 360,75,23,32);
    image(tree3Img, 380,75,23,32);
    image(tree3Img, 300,75,23,32);
    image(tree3Img, 340,75,23,32);
    image(tree3Img, 368,80,23,32);
    image(tree3Img, 328,80,23,32);
    image(tree3Img, 355,87,23,32);
    break;
}
};

var BAttack = function (x,y){
    var canAttack=false;
    if (y>x&&y>5){
        var firstRowEnemies=false;
        if (enemies.array[bGround.enemy].army[0].face||enemies.array[bGround.enemy].army[1].face||enemies.array[bGround.enemy].army[2].face){
            firstRowEnemies=true;
        }
        
        var firstRowHeroes=false;
        if (heroes.array[bGround.hero].army[0]||heroes.array[bGround.hero].army[1]||heroes.array[bGround.hero].army[2]||(heroes.array[bGround.hero].posInArmy<3&&heroes.array[bGround.hero].alive===true)){
            firstRowHeroes=true;
        }
        if (firstRowHeroes===true&&x<3){
            if (firstRowEnemies===true&&y<9){
                if (x===1){canAttack=true;}
                if ((x===0)&&(y===6||y===7)){canAttack=true;}
                if (x===0&&y===8&&(!enemies.array[bGround.enemy].army[0].face)&&(!enemies.array[bGround.enemy].army[1].face)){canAttack=true;}
                if ((x===2)&&(y===8||y===7)){canAttack=true;}
                if (x===2&&y===6&&(!enemies.array[bGround.enemy].army[1].face)&&(!enemies.array[bGround.enemy].army[2].face)){canAttack=true;}
            }
            if (firstRowEnemies===false){
                if (x===1){canAttack=true;}
                if ((x===0)&&(y===9||y===10)){canAttack=true;}
                if (x===0&&y===11&&(!enemies.array[bGround.enemy].army[3].face)&&(!enemies.array[bGround.enemy].army[4].face)){canAttack=true;}
                if ((x===2)&&(y===11||y===10)){canAttack=true;}
                if (x===2&&y===9&&(!enemies.array[bGround.enemy].army[4].face)&&(!enemies.array[bGround.enemy].army[5].face)){canAttack=true;}
            }
        }
        
        if (firstRowHeroes===false){
            if (firstRowEnemies===true&&y<9){
                if (x===4){canAttack=true;}
                if ((x===3)&&(y===6||y===7)){canAttack=true;}
                if (x===3&&y===8&&(!enemies.array[bGround.enemy].army[0].face)&&(!enemies.array[bGround.enemy].army[1].face)){canAttack=true;}
                if ((x===5)&&(y===8||y===7)){canAttack=true;}
                if (x===5&&y===6&&(!enemies.array[bGround.enemy].army[1].face)&&(!enemies.array[bGround.enemy].army[2].face)){canAttack=true;}
            }
            if (firstRowEnemies===false){
                if (x===4){canAttack=true;}
                if ((x===3)&&(y===9||y===10)){canAttack=true;}
                if (x===3&&y===11&&(!enemies.array[bGround.enemy].army[3].face)&&(!enemies.array[bGround.enemy].army[4].face)){canAttack=true;}
                if ((x===5)&&(y===11||y===10)){canAttack=true;}
                if (x===5&&y===9&&(!enemies.array[bGround.enemy].army[4].face)&&(!enemies.array[bGround.enemy].army[5].face)){canAttack=true;}
            }
        }
    }
    
    if (x>y&&x>5){
        var firstRowEnemies=false;
        if (enemies.array[bGround.enemy].army[0].face||enemies.array[bGround.enemy].army[1].face||enemies.array[bGround.enemy].army[2].face){
            firstRowEnemies=true;
        }
        
        var firstRowHeroes=false;
        if (heroes.array[bGround.hero].army[0]||heroes.array[bGround.hero].army[1]||heroes.array[bGround.hero].army[2]||(heroes.array[bGround.hero].posInArmy<3&&heroes.array[bGround.hero].alive===true)){
            firstRowHeroes=true;
        }
        if (firstRowEnemies===true&&x<9){
            if (firstRowHeroes===true&&y<3){
                if (x===7){canAttack=true;}
                if ((x===6)&&(y===0||y===1)){canAttack=true;}
                if (x===6&&y===2&&(!heroes.array[bGround.hero].army[0])&&(!heroes.array[bGround.hero].army[1])&&(heroes.array[bGround.hero].posInArmy!==0||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==1||heroes.array[bGround.hero].alive===false)){canAttack=true;}
                if ((x===8)&&(y===1||y===2)){canAttack=true;}
                if (x===8&&y===0&&(!heroes.array[bGround.hero].army[1])&&(!heroes.array[bGround.hero].army[2])&&(heroes.array[bGround.hero].posInArmy!==1||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==2||heroes.array[bGround.hero].alive===false)){canAttack=true;}
            }
            if (firstRowHeroes===false){
                if (x===7){canAttack=true;}
                if ((x===6)&&(y===3||y===4)){canAttack=true;}
                if (x===6&&y===5&&(!heroes.array[bGround.hero].army[3])&&(!heroes.array[bGround.hero].army[4])&&(heroes.array[bGround.hero].posInArmy!==3||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==4||heroes.array[bGround.hero].alive===false)){canAttack=true;}
                if ((x===8)&&(y===4||y===5)){canAttack=true;}
                if (x===8&&y===3&&(!heroes.array[bGround.hero].army[4])&&(!heroes.array[bGround.hero].army[5])&&(heroes.array[bGround.hero].posInArmy!==4||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==5||heroes.array[bGround.hero].alive===false)){canAttack=true;}
            }
        }
        
        if (firstRowEnemies===false){
            if (firstRowHeroes===true&&y<3){
                if (x===10){canAttack=true;}
                if ((x===9)&&(y===0||y===1)){canAttack=true;}
                if (x===9&&y===2&&(!heroes.array[bGround.hero].army[0])&&(!heroes.array[bGround.hero].army[1])&&(heroes.array[bGround.hero].posInArmy!==0||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==1||heroes.array[bGround.hero].alive===false)){canAttack=true;}
                if ((x===11)&&(y===1||y===2)){canAttack=true;}
                if (x===11&&y===0&&(!heroes.array[bGround.hero].army[1])&&(!heroes.array[bGround.hero].army[2])&&(heroes.array[bGround.hero].posInArmy!==1||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==2||heroes.array[bGround.hero].alive===false)){canAttack=true;}
            }
            if (firstRowHeroes===false){
                if (x===10){canAttack=true;}
                if ((x===9)&&(y===3||y===4)){canAttack=true;}
                if (x===9&&y===5&&(!heroes.array[bGround.hero].army[3])&&(!heroes.array[bGround.hero].army[4])&&(heroes.array[bGround.hero].posInArmy!==3||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==4||heroes.array[bGround.hero].alive===false)){canAttack=true;}
                if ((x===11)&&(y===4||y===5)){canAttack=true;}
                if (x===11&&y===3&&(!heroes.array[bGround.hero].army[4])&&(!heroes.array[bGround.hero].army[5])&&(heroes.array[bGround.hero].posInArmy!==4||heroes.array[bGround.hero].alive===false)&&(heroes.array[bGround.hero].posInArmy!==5||heroes.array[bGround.hero].alive===false)){canAttack=true;}
            }
        }
    }
    
    
    
    return canAttack;
};

var selectorColor = function(x,y){
    var color =-1;
    if (x===y){
        if (x<6){
            if (x===heroes.array[bGround.hero].posInArmy){
                if ((heroes.array[bGround.hero].attackType===2||heroes.array[bGround.hero].attackType===3)&&(heroes.array[bGround.hero].attackSide===2||heroes.array[bGround.hero].attackSide===3)){
                    if (heroes.array[bGround.hero].attackSide===2){color=3;}
                    else{
                        if (heroes.array[bGround.hero].attackSide===3)
                            {if (heroes.array[bGround.hero].hitPoints>=0){color=3;}else{color=0;}}
                        else{color=2;}
                    }
                }else{color=1;}
            }
            if (heroes.array[bGround.hero].army[x]){
                if ((heroes.array[bGround.hero].army[x].attackType===2||heroes.array[bGround.hero].army[x].attackType===3)&&(heroes.array[bGround.hero].army[x].attackSide===2||heroes.array[bGround.hero].army[x].attackSide===3)){
                    if (heroes.array[bGround.hero].army[x].attackSide===2){color=3;}
                    else{
                        if (heroes.array[bGround.hero].army[x].attackSide===3)
                            {if (heroes.array[bGround.hero].army[x].hitPoints>=0){color=3;}else{color=0;}}
                        else{color=2;}
                    }
                }else{color=1;}
            }
        }
        if (x>=6){
            if (enemies.array[bGround.enemy].army[x-6].face){
                if ((enemies.array[bGround.enemy].army[x-6].attackType===2||enemies.array[bGround.enemy].army[x-6].attackType===3)&&(enemies.array[bGround.enemy].army[x-6].attackSide===2||enemies.array[bGround.enemy].army[x-6].attackSide===3)){
                    if (enemies.array[bGround.enemy].army[x-6].attackSide===2){color=3;}
                    else{
                        if (enemies.array[bGround.enemy].army[x-6].attackSide===3){
                            if (enemies.array[bGround.enemy].army[x-6].hitPoints>=0){color=3;}else{color=0;}}
                        else{color=2;}
                    }
                }else{color=1;}
            }
        }
    }
    
    ///here ends x===y
    else{
        if (x<6){
                if (x===heroes.array[bGround.hero].posInArmy){
                    if (heroes.array[bGround.hero].attackSide===1){
                        if (heroes.array[bGround.hero].attackType===1){
                            if (BAttack(x,y)){
                                color=0;
                            }else{
                                color=2;
                            }
                        }
                        if (heroes.array[bGround.hero].attackType===2||heroes.array[bGround.hero].attackType===3){
                            if (y>5){
                                color=0;
                            }else{
                                color=2;
                            }
                        }
                    }
                    
                    if (heroes.array[bGround.hero].attackSide===2){
                        if (heroes.array[bGround.hero].attackType===2||heroes.array[bGround.hero].attackType===3){
                            if (y>5){
                                color=2;
                            }else{
                                color=3;
                            }
                        }
                    }
                    
                    if (heroes.array[bGround.hero].attackSide===3){
                        if (heroes.array[bGround.hero].attackType===3){
                            if (heroes.array[bGround.hero].hitPoints<0){
                                color=0;
                            }else{
                                color=3;
                            }
                        }
                    }
                    
                    
                //attackType:atktype, //1-Nearest,2-Any,3-All
                //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
                }
                else{
                    if (heroes.array[bGround.hero].army[x].attackSide===1){
                        if (heroes.array[bGround.hero].army[x].attackType===1){
                            if (BAttack(x,y)){
                                color=0;
                            }else{
                                color=2;
                            }
                        }
                        if (heroes.array[bGround.hero].army[x].attackType===2||heroes.array[bGround.hero].army[x].attackType===3){
                            if (y>5){
                                color=0;
                            }else{
                                color=2;
                            }
                        }
                        
                    }
                    
                    if (heroes.array[bGround.hero].army[x].attackSide===2){
                        if (heroes.array[bGround.hero].army[x].attackType===2||heroes.array[bGround.hero].army[x].attackType===3){
                            if (y>5){
                                color=2;
                            }else{
                                color=3;
                            }
                        }
                        
                    }
                    
                    if (heroes.array[bGround.hero].army[x].attackSide===3){
                        if (heroes.array[bGround.hero].army[x].attackType===3){
                            if (heroes.array[bGround.hero].army[x].hitPoints<0){
                                color=0;
                            }else{
                                color=3;
                            }
                        }
                    }
                //attackType:atktype, //1-Nearest,2-Any,3-All
                //attackSide:atkside, //1-Enemy,2-Ally,3-Any Side
                }
        }else{
            if (enemies.array[bGround.enemy].army[x-6].attackSide===1){
                        if (enemies.array[bGround.enemy].army[x-6].attackType===1){
                            if (BAttack(x,y)){
                                color=0;
                            }else{
                                color=2;
                            }
                        }
                        if (enemies.array[bGround.enemy].army[x-6].attackType===2||enemies.array[bGround.enemy].army[x-6].attackType===3){
                            if (y<6){
                                color=0;
                            }else{
                                color=2;
                            }
                        }
                        
             }
             
             if (enemies.array[bGround.enemy].army[x-6].attackSide===2){
                        if (enemies.array[bGround.enemy].army[x-6].attackType===2||enemies.array[bGround.enemy].army[x-6].attackType===3){
                            if (y<6){
                                color=2;
                            }else{
                                color=3;
                            }
                        }
                        
             }
             if (enemies.array[bGround.enemy].army[x-6].attackSide===3){
                        if (enemies.array[bGround.enemy].army[x-6].attackType===3){
                            if (enemies.array[bGround.enemy].army[x-6].hitPoints<0){
                                color=0;
                            }else{
                                color=3;
                            }
                        }
                    }
        }
    }
    
    return color;
};

var setAndDoIACDamage = function (attacker,attacked,lArray){
    var newArray=[];
    for (var i=0;i<lArray.length;i++){
        newArray[i]=lArray[i];
    }
    var damage=0;
    var type=0;
    var side=0;
    
    if (attacker<6){
           if(heroes.array[bGround.hero].posInArmy===attacker) {
            damage=heroes.array[bGround.hero].hitPoints; 
            type=heroes.array[bGround.hero].attackType;
            side=heroes.array[bGround.hero].attackSide;
           }
           else{
            damage=heroes.array[bGround.hero].army[attacker].hitPoints;
            type=heroes.array[bGround.hero].army[attacker].attackType;
            side=heroes.array[bGround.hero].army[attacker].attackSide;
           }
        }else{
        damage=enemies.array[bGround.enemy].army[attacker-6].hitPoints;
        type=enemies.array[bGround.enemy].army[attacker-6].attackType;
        side=enemies.array[bGround.enemy].army[attacker-6].attackSide;
        }
    
    switch(type){
        case 3:
            if(side<3){
               if((side===2&&attacker<6)||(side===1&&attacker>=6)){
                    for (var i=0;i<6;i++)
                    {
                        if (newArray[i]!==undefined){
                            newArray[i]+=damage;
                        }
                    }
                }
                if((side===1&&attacker<6)||(side===2&&attacker>=6)){
                    for (var i=0;i<6;i++)
                    {
                        if (newArray[i+6]!==undefined){
                            newArray[i+6]+=damage;
                        }
                    }
                } 
            }
            else{
                for (var i=0;i<6;i++)
                    {
                        if (newArray[i]!==undefined){
                            newArray[i]+=damage;
                        }
                        if (newArray[i+6]!==undefined){
                            newArray[i+6]+=damage;
                        }
                    }
            }
            
        break;
        default:
            newArray[attacked]+=damage;
    }
    
    for (var i=0;i<newArray.length;i++){
        //kill units
        if (newArray[i]!==undefined&&newArray[i]<=0){
            newArray[i]=undefined;
        }
        //no over heal
        if (i<6){
            if (newArray[i]!==undefined&&heroes.array[bGround.hero].army[i]&&newArray[i]>heroes.array[bGround.hero].army[i].maxhealth){
                newArray[i]=heroes.array[bGround.hero].army[i].maxhealth;
            }
            
        }else{
            if (newArray[i]!==undefined&&newArray[i]>enemies.array[bGround.enemy].army[i-6].maxhealth){
                newArray[i]=enemies.array[bGround.enemy].army[i-6].maxhealth;
            }
        }
    }
    
    if (newArray[heroes.array[bGround.hero].posInArmy]!==undefined&&newArray[heroes.array[bGround.hero].posInArmy]>heroes.array[bGround.hero].maxhealth){
        newArray[heroes.array[bGround.hero].posInArmy]=heroes.array[bGround.hero].maxhealth;
    }
    if (newArray[heroes.array[bGround.hero].posInArmy]===1){
        newArray[i]=undefined;
    }
    
    
    return newArray;
};

//1-Nearest,2-Any,3-All
//1-Enemy,2-Ally,3-Any Side
var setDamage = function (){
    var damage=0;
    var type=0;
    var side=0;
    
    if (BQueue.attacker<6){
           if(heroes.array[bGround.hero].posInArmy===BQueue.attacker) {
            damage=heroes.array[bGround.hero].hitPoints; 
            type=heroes.array[bGround.hero].attackType;
            side=heroes.array[bGround.hero].attackSide;
           }
           else{
            damage=heroes.array[bGround.hero].army[BQueue.attacker].hitPoints;
            type=heroes.array[bGround.hero].army[BQueue.attacker].attackType;
            side=heroes.array[bGround.hero].army[BQueue.attacker].attackSide;
           }
        }else{
        damage=enemies.array[bGround.enemy].army[BQueue.attacker-6].hitPoints;
        type=enemies.array[bGround.enemy].army[BQueue.attacker-6].attackType;
        side=enemies.array[bGround.enemy].army[BQueue.attacker-6].attackSide;
        }
        
    dArray.damage=damage;
    
    switch(type){
        case 3:
            if(side<3){
               if((side===2&&BQueue.attacker<6)||(side===1&&BQueue.attacker>=6)){
                   //heroes.array[bGround.hero].health+=damage;
                   dArray.positions.push(heroes.array[bGround.hero].posInArmy);
                    for (var i=0;i<6;i++)
                    {
                        if (heroes.array[bGround.hero].army[i]){
                            //heroes.array[bGround.hero].army[i].health+=damage;
                            dArray.positions.push(i);
                        }
                    }
                }
                if((side===1&&BQueue.attacker<6)||(side===2&&BQueue.attacker>=6)){
                    for (var i=0;i<6;i++)
                    {
                        if (enemies.array[bGround.enemy].army[i].face){
                            //enemies.array[bGround.enemy].army[i].health+=damage;
                            dArray.positions.push(i+6);
                        }
                    }
                } 
            }
            else{
                //heroes.array[bGround.hero].health+=damage;
                dArray.positions.push(heroes.array[bGround.hero].posInArmy);
                for (var i=0;i<6;i++)
                {
                    if (heroes.array[bGround.hero].army[i]){
                        //heroes.array[bGround.hero].army[i].health+=damage;
                        dArray.positions.push(i);
                    }
                    if (enemies.array[bGround.enemy].army[i].face){
                        //enemies.array[bGround.enemy].army[i].health+=damage;
                        dArray.positions.push(i+6);
                    }
                }
            }
            
        break;
        default:
        
        if (BQueue.attacked<6){
           if(heroes.array[bGround.hero].posInArmy===BQueue.attacked) {
            //heroes.array[bGround.hero].health+=damage; 
            dArray.positions.push(heroes.array[bGround.hero].posInArmy);
           }
           else{
            //heroes.array[bGround.hero].army[BQueue.attacked].health+=damage;
            dArray.positions.push(BQueue.attacked);
           }
        }else{
        //enemies.array[bGround.enemy].army[BQueue.attacked-6].health+=damage;
        dArray.positions.push(BQueue.attacked);
        }
    }
    
};

var drawLifeBar = function(i,iLife,nLife){
    noStroke();
    fill(252, 33, 33);
    rect(BGP.positions[i][0],BGP.positions[i][1]+BGP.height, BGP.width, 7, 3);
    fill(128, 252, 128);
    rect(BGP.positions[i][0]+1,BGP.positions[i][1]+BGP.height+1, iLife*(BGP.width-1)/nLife, 6);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(BGP.positions[i][0],BGP.positions[i][1]+BGP.height, BGP.width, 7, 3);
    
    fill(0, 0, 255);
    var f = createFont("Verdana");
    textAlign(CENTER, BASELINE);
    textFont(f, 8);
    text(iLife+"/"+nLife,BGP.positions[i][0]+BGP.width/2,BGP.positions[i][1]+BGP.height+7);
    f = createFont("Arial");
    textFont(f, 12);
    textAlign(LEFT, BASELINE);
    
};

var doDamage = function(){
    while(dArray.positions.length!==0){
        var pos = dArray.positions.pop();
        if (heroes.array[bGround.hero].posInArmy===pos){
            heroes.array[bGround.hero].health+=dArray.damage;
        }else{
            if (pos<6){
                heroes.array[bGround.hero].army[pos].health+=dArray.damage;
            }
            else{
                enemies.array[bGround.enemy].army[pos-6].health+=dArray.damage;
            }
            
        }
    }
    
};

var backToZero = function(){
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].health<0){
                heroes.array[bGround.hero].army[i].health=0;
            }
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].health<0){
                enemies.array[bGround.enemy].army[i].health=0;
            }
    }
    if (heroes.array[bGround.hero].health<1){
        heroes.array[bGround.hero].health=1;
    }
};

var checkHeroAlone = function(){
    BQueue.isHeroAlone=true;
    
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].health>0){
                BQueue.isHeroAlone=false;
            }
    }
    
};

var isDamaged = function(){
    var yes=false;
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].health===0){
                yes=true;
            }
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].health===0){
                yes=true;
            }
    }
    if ((heroes.array[bGround.hero].health===1)&&(heroes.array[bGround.hero].alive===true)){
        yes=true;
    }
    return yes;
};

var fadeHero = function(){
    
    if(minTrans===255&&maxTrans>0){
	    maxTrans=maxTrans-pace;
	    
	    image(heroes.array[bGround.hero].face,BGP.positions[heroes.array[bGround.hero].posInArmy][0],BGP.positions[heroes.array[bGround.hero].posInArmy][1],BGP.width,BGP.height);
        drawLifeBar(heroes.array[bGround.hero].posInArmy,heroes.array[bGround.hero].health,heroes.array[bGround.hero].maxhealth);
        
        BGP.positions[heroes.array[bGround.hero].posInArmy][0]-=floor(200/floor(255/pace));
        if(maxTrans<(255-pace)/2){
            BGP.positions[heroes.array[bGround.hero].posInArmy][1]+=3;
        }
        if(maxTrans>(255-pace)/2)
        {
            BGP.positions[heroes.array[bGround.hero].posInArmy][1]-=3;
        }
	}
	
	if (maxTrans<0){
	    maxTrans=0;
	    heroRet=false;
	}
	
	if(minTrans<255){
	    minTrans=minTrans+pace;
        image(heroes.array[bGround.hero].face,BGP.positions[heroes.array[bGround.hero].posInArmy][0],BGP.positions[heroes.array[bGround.hero].posInArmy][1],BGP.width,BGP.height);
        drawLifeBar(heroes.array[bGround.hero].posInArmy,heroes.array[bGround.hero].health,heroes.array[bGround.hero].maxhealth);
        var rtt="retreat";
            
                //draw retreet text
        var f = createFont("Terminal");
        textFont(f, 24);
        
        fill(0, 0, 0);
        text(rtt,BGP.positions[i][0]-2,BGP.positions[i][1]+BGP.height);
        text(rtt,BGP.positions[i][0]+2,BGP.positions[i][1]+BGP.height);
        text(rtt,BGP.positions[i][0],BGP.positions[i][1]-2+BGP.height);
        text(rtt,BGP.positions[i][0],BGP.positions[i][1]+2+BGP.height);
        fill(255, 0, 0);
        text(rtt,BGP.positions[i][0],BGP.positions[i][1]+BGP.height);
    
        fill(255, 255, 255);
        f = createFont("Arial", 5);
        textFont(f, 12);
            
	}
	else{
	    minTrans=255;
	}
};

var fadeUnits = function(){ //animation for dead units
    //var minTrans=0;
    //var maxTrans=255;

//main if
if (isDamaged()){
    if(minTrans===255&&maxTrans>0){
	    maxTrans=maxTrans-pace;
	    
	    //retreating hero

	    if((heroes.array[bGround.hero].health===1)&&(heroes.array[bGround.hero].alive===true&&BQueue.isHeroAlone===false)){
                BGP.positions[heroes.array[bGround.hero].posInArmy][0]-=floor(200/floor(255/pace));
                
                image(heroes.array[bGround.hero].face,BGP.positions[heroes.array[bGround.hero].posInArmy][0],BGP.positions[heroes.array[bGround.hero].posInArmy][1],BGP.width,BGP.height);
                drawLifeBar(heroes.array[bGround.hero].posInArmy,heroes.array[bGround.hero].health,heroes.array[bGround.hero].maxhealth);
                
                if(maxTrans<(255-pace)/2){
                    BGP.positions[heroes.array[bGround.hero].posInArmy][1]+=3;
                }
                if(maxTrans>(255-pace)/2)
                {
                    BGP.positions[heroes.array[bGround.hero].posInArmy][1]-=3;
                }
            }
	    
	}
	
	if (maxTrans<0){
	    maxTrans=0;
	}
	
	if(minTrans<255){
	    minTrans=minTrans+pace;
	    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].health===0){
                image(heroes.array[bGround.hero].army[i].face,BGP.positions[i][0],BGP.positions[i][1],BGP.width,BGP.height);
                drawLifeBar(i,heroes.array[bGround.hero].army[i].health,heroes.array[bGround.hero].army[i].maxhealth);
            }
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].health===0){
                scale(-1, 1);
                image(enemies.array[bGround.enemy].army[i].face,-1*BGP.positions[i+6][0]-BGP.width,BGP.positions[i+6][1],BGP.width,BGP.height);
                scale(-1, 1);
                drawLifeBar(i+6,enemies.array[bGround.enemy].army[i].health,enemies.array[bGround.enemy].army[i].maxhealth);
            }
	        if ((heroes.array[bGround.hero].posInArmy===i)&&(heroes.array[bGround.hero].health===1)&&(heroes.array[bGround.hero].alive===true)){
                image(heroes.array[bGround.hero].face,BGP.positions[i][0],BGP.positions[i][1],BGP.width,BGP.height);
                drawLifeBar(i,heroes.array[bGround.hero].health,heroes.array[bGround.hero].maxhealth);
                
                if (BQueue.isHeroAlone===false){
                    var rtt="retreat";
            
                    //draw retreet text
                    var f = createFont("Terminal");
                    textFont(f, 24);
            
                    fill(0, 0, 0);
                    text(rtt,BGP.positions[i][0]-2,BGP.positions[i][1]+BGP.height);
                    text(rtt,BGP.positions[i][0]+2,BGP.positions[i][1]+BGP.height);
                    text(rtt,BGP.positions[i][0],BGP.positions[i][1]-2+BGP.height);
                    text(rtt,BGP.positions[i][0],BGP.positions[i][1]+2+BGP.height);
                    fill(255, 0, 0);
                    text(rtt,BGP.positions[i][0],BGP.positions[i][1]+BGP.height);
        
                    fill(255, 255, 255);
                    f = createFont("Arial", 5);
                    textFont(f, 12);
                }
                
            }
	        
            
            
	    }
	}
	else{
	    minTrans=255;
	}
    
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].health===0){
                var grfx3 = createGraphics(BGP.width, BGP.height, JAVA2D);
                grfx3.background(0, 0);
                grfx3.image(heroes.array[bGround.hero].army[i].face,0,0,BGP.width, BGP.height);
                
                var grfx2 = createGraphics(BGP.width, BGP.height, JAVA2D);
                grfx2.background(0, 0); 
                grfx2.tint(0,0,0,minTrans-(255-maxTrans));
                grfx2.image(grfx3,0,0,BGP.width, BGP.height);
                
                grfx2.filter(INVERT);//invert the colors of the whole canvas
	            image(grfx2,BGP.positions[i][0],BGP.positions[i][1],BGP.width,BGP.height);// drawing the black shape over the existiong image
	            grfx2.filter(INVERT);
	            drawLifeBar(i,heroes.array[bGround.hero].army[i].health,heroes.array[bGround.hero].army[i].maxhealth);
            }
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].health===0){
                var grfx3 = createGraphics(BGP.width, BGP.height, JAVA2D);
                grfx3.background(0, 0);
                grfx3.image(enemies.array[bGround.enemy].army[i].face,0,0,BGP.width, BGP.height);
                
                var grfx2 = createGraphics(BGP.width, BGP.height, JAVA2D);
                grfx2.background(0, 0); 
                grfx2.tint(0,0,0,minTrans-(255-maxTrans));
                grfx2.image(grfx3,0,0,BGP.width, BGP.height);
                
                grfx2.filter(INVERT);//invert the colors of the whole canvas
                scale(-1, 1);
	            image(grfx2,-1*BGP.positions[i+6][0]-BGP.width,BGP.positions[i+6][1],BGP.width,BGP.height);// drawing the black shape over the existiong image
	            scale(-1, 1);
	            grfx2.filter(INVERT);
	            drawLifeBar(i+6,enemies.array[bGround.enemy].army[i].health,enemies.array[bGround.enemy].army[i].maxhealth);
            }
            if (heroes.array[bGround.hero].posInArmy===i&&heroes.array[bGround.hero].health===1&&BQueue.isHeroAlone===true&&heroes.array[bGround.hero].alive===true){
                var grfx3 = createGraphics(BGP.width, BGP.height, JAVA2D);
                grfx3.background(0, 0);
                grfx3.image(heroes.array[bGround.hero].face,0,0,BGP.width, BGP.height);
                
                var grfx2 = createGraphics(BGP.width, BGP.height, JAVA2D);
                grfx2.background(0, 0); 
                grfx2.tint(0,0,0,minTrans-(255-maxTrans));
                grfx2.image(grfx3,0,0,BGP.width, BGP.height);
                
                grfx2.filter(INVERT);//invert the colors of the whole canvas
	            image(grfx2,BGP.positions[i][0],BGP.positions[i][1],BGP.width,BGP.height);// drawing the black shape over the existiong image
	            grfx2.filter(INVERT);
	            drawLifeBar(i,heroes.array[bGround.hero].health,heroes.array[bGround.hero].maxhealth);
            }
            
    }
   // filter(INVERT);// inverting the colors again so now the black shadow becomes white
}
else{
    maxTrans=0;
}
};

var upgradeUnitsAnim = function(){ //animation for upgrading units

    var upPace=2;
    var addedtime=20;
    var XPAnimState2=XPAnimState;
    
    if (XPAnimState2>=BGP.height){
        XPAnimState2=BGP.height-1;
    }

    if (XPAnimState<=BGP.height+addedtime){
        
        if (heroes.array[bGround.hero].alive===true){
            image(heroes.array[bGround.hero].face,BGP.positions[heroes.array[bGround.hero].posInArmy][0], BGP.positions[heroes.array[bGround.hero].posInArmy][1],BGP.width,BGP.height);
        }
        
        if (heroes.array[bGround.hero].alive===true&&heroes.array[bGround.hero].XP>=heroes.array[bGround.hero].maxXP){
            image(glow,BGP.positions[heroes.array[bGround.hero].posInArmy][0], BGP.positions[heroes.array[bGround.hero].posInArmy][1],BGP.width,XPAnimState2);
            var strokesize=2;
            stroke(255, 242, 0);
            strokeWeight(strokesize*2);
            line(BGP.positions[heroes.array[bGround.hero].posInArmy][0], BGP.positions[heroes.array[bGround.hero].posInArmy][1]+XPAnimState2-strokesize, BGP.positions[heroes.array[bGround.hero].posInArmy][0]+BGP.width, BGP.positions[heroes.array[bGround.hero].posInArmy][1]+XPAnimState2-strokesize);
        }
  
  var upgfx = createGraphics(BGP.width, BGP.height, JAVA2D);
  var upgfx2 = createGraphics(BGP.width, BGP.height, JAVA2D);
  for (var i=0;i<6;i++){
      if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].XP>=heroes.array[bGround.hero].army[i].maxXP){
          if(heroes.array[bGround.hero].army[i].upgradeTo!==-1){
                
                upgfx.background(0, 0);
                upgfx2.background(0, 0);
                upgfx.image(unitTypeArray[heroes.array[bGround.hero].army[i].upgradeTo].face, 0, 0,BGP.width, BGP.height);
                upgfx2.image(heroes.array[bGround.hero].army[i].face, 0, 0,BGP.width, BGP.height); 
                var upimg1=upgfx.get(0,0,BGP.width,XPAnimState2);
                var upimg2=upgfx2.get(0,XPAnimState2,BGP.width,BGP.height-XPAnimState2);
                image(upimg1,BGP.positions[i][0],BGP.positions[i][1]);
                image(upimg2,BGP.positions[i][0],BGP.positions[i][1]+XPAnimState2);
          }else{
              image(heroes.array[bGround.hero].army[i].face,BGP.positions[i][0], BGP.positions[i][1],BGP.width,BGP.height);
          }
            image(glow,BGP.positions[i][0], BGP.positions[i][1],BGP.width,XPAnimState2);
            var strokesize=2;
            stroke(255, 242, 0);
            strokeWeight(strokesize*2);
            line(BGP.positions[i][0], BGP.positions[i][1]+XPAnimState2-strokesize, BGP.positions[i][0]+BGP.width, BGP.positions[i][1]+XPAnimState2-strokesize);
      }else{
          if (heroes.array[bGround.hero].army[i]){
              image(heroes.array[bGround.hero].army[i].face,BGP.positions[i][0], BGP.positions[i][1],BGP.width,BGP.height);
          }
      }
      if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].XP>=enemies.array[bGround.enemy].army[i].maxXP){
          if(enemies.array[bGround.enemy].army[i].upgradeTo!==-1){
                upgfx.background(0, 0);
                upgfx2.background(0, 0);
                upgfx.image(unitTypeArray[enemies.array[bGround.enemy].army[i].upgradeTo].face, 0, 0,BGP.width, BGP.height);
                upgfx2.image(enemies.array[bGround.enemy].army[i].face, 0, 0,BGP.width, BGP.height); 
                var upimg1=upgfx.get(0,0,BGP.width,XPAnimState2);
                var upimg2=upgfx2.get(0,XPAnimState2,BGP.width,BGP.height-XPAnimState2);
                scale(-1, 1);
                image(upimg1,-1*BGP.positions[i+6][0]-BGP.width,BGP.positions[i+6][1]);
                image(upimg2,-1*BGP.positions[i+6][0]-BGP.width,BGP.positions[i+6][1]+XPAnimState2);
                scale(-1, 1);
          }else{
              scale(-1, 1);
              image(enemies.array[bGround.enemy].army[i].face,-1*BGP.positions[i+6][0]-BGP.width, BGP.positions[i+6][1],BGP.width,BGP.height);
              scale(-1, 1);
          }
            image(glow,BGP.positions[i+6][0], BGP.positions[i+6][1],BGP.width,XPAnimState2);
            var strokesize=2;
            stroke(255, 242, 0);
            strokeWeight(strokesize*2);
            line(BGP.positions[i+6][0], BGP.positions[i+6][1]+XPAnimState2-strokesize, BGP.positions[i+6][0]+BGP.width, BGP.positions[i+6][1]+XPAnimState2-strokesize);
      }
      else{
          if (enemies.array[bGround.enemy].army[i].face){
              scale(-1, 1);
              image(enemies.array[bGround.enemy].army[i].face,-1*BGP.positions[i+6][0]-BGP.width, BGP.positions[i+6][1],BGP.width,BGP.height);
              scale(-1, 1);
          }
      }
  }
        
        XPAnimState=XPAnimState+upPace; 
        
    }else{
        Act.Session++;
    }

};

var drawDamage = function(){
    
    var dmg="";
    var Bwi=BGP.width/4;
    var Bhe=BGP.height/2-dArray.state+dArray.lastState/2;
    if (dArray.damage>0){dmg='+';}
    dmg=""+dmg+dArray.damage;
    
    var f = createFont("Terminal");
    textFont(f, 24);
    
    for (i=0;i<dArray.positions.length;i++){
        
        fill(0, 0, 0);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi-2,BGP.positions[dArray.positions[i]][1]+Bhe);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi+2,BGP.positions[dArray.positions[i]][1]+Bhe);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi,BGP.positions[dArray.positions[i]][1]+Bhe-2);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi,BGP.positions[dArray.positions[i]][1]+Bhe+2);
        
        if (dArray.damage<0){
            fill(255, 0, 0);
        }else{
            fill(110, 177, 194);
        }
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi,BGP.positions[dArray.positions[i]][1]+Bhe);
    }
    
    //BGP.width,BGP.height
    
    fill(255, 255, 255);
    f = createFont("Arial", 5);
    textFont(f, 12);
};

var drawXP = function(){
    
    if (XPAnimState<50){
        XPAnimState++;
    }else{
        Act.Session++;
    }
    
    var Bwi=0;
    var Bhe=BGP.height/2;
    var heroXPtxt="+"+bGround.enemyXPperUnit+"XP";
    var enemyXPtxt="+"+bGround.heroXPperUnit+"XP";
    var f = createFont("Terminal");
    textFont(f, 24);
    for (var i=0;i<6;i++)
    {
    if ((heroes.array[bGround.hero].army[i])&&(heroes.array[bGround.hero].army[i].health>0)){
    fill(0, 0, 0);
    text(heroXPtxt,BGP.positions[i][0]+Bwi-2,BGP.positions[i][1]-XPAnimState+Bhe);
    text(heroXPtxt,BGP.positions[i][0]+Bwi+2,BGP.positions[i][1]-XPAnimState+Bhe);
    text(heroXPtxt,BGP.positions[i][0]+Bwi,BGP.positions[i][1]-XPAnimState+Bhe-2);
    text(heroXPtxt,BGP.positions[i][0]+Bwi,BGP.positions[i][1]-XPAnimState+Bhe+2);
    fill(110, 177, 194);
    text(heroXPtxt,BGP.positions[i][0]+Bwi,BGP.positions[i][1]-XPAnimState+Bhe);
    }
    if ((enemies.array[bGround.enemy].army[i].face)&&(enemies.array[bGround.enemy].army[i].health>0)){
    fill(0, 0, 0);
    text(enemyXPtxt,BGP.positions[i+6][0]+Bwi-2,BGP.positions[i+6][1]-XPAnimState+Bhe);
    text(enemyXPtxt,BGP.positions[i+6][0]+Bwi+2,BGP.positions[i+6][1]-XPAnimState+Bhe);
    text(enemyXPtxt,BGP.positions[i+6][0]+Bwi,BGP.positions[i+6][1]-XPAnimState+Bhe-2);
    text(enemyXPtxt,BGP.positions[i+6][0]+Bwi,BGP.positions[i+6][1]-XPAnimState+Bhe+2);
    fill(110, 177, 194);
    text(enemyXPtxt,BGP.positions[i+6][0]+Bwi,BGP.positions[i+6][1]-XPAnimState+Bhe);
    }
    }
        
    if (heroes.array[bGround.hero].health>1&&heroes.array[bGround.hero].alive===true){
    fill(0, 0, 0);
    text(heroXPtxt,BGP.positions[heroes.array[bGround.hero].posInArmy][0]+Bwi-2,BGP.positions[heroes.array[bGround.hero].posInArmy][1]-XPAnimState+Bhe);
    text(heroXPtxt,BGP.positions[heroes.array[bGround.hero].posInArmy][0]+Bwi+2,BGP.positions[heroes.array[bGround.hero].posInArmy][1]-XPAnimState+Bhe);
    text(heroXPtxt,BGP.positions[heroes.array[bGround.hero].posInArmy][0]+Bwi,BGP.positions[heroes.array[bGround.hero].posInArmy][1]-XPAnimState+Bhe+2);
    text(heroXPtxt,BGP.positions[heroes.array[bGround.hero].posInArmy][0]+Bwi,BGP.positions[heroes.array[bGround.hero].posInArmy][1]-XPAnimState+Bhe-2);
    fill(110, 177, 194);
    text(heroXPtxt,BGP.positions[heroes.array[bGround.hero].posInArmy][0]+Bwi,BGP.positions[heroes.array[bGround.hero].posInArmy][1]-XPAnimState+Bhe);
    }
    
/*    for (i=0;i<dArray.positions.length;i++){
        
        fill(0, 0, 0);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi-2,BGP.positions[dArray.positions[i]][1]+Bhe);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi+2,BGP.positions[dArray.positions[i]][1]+Bhe);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi,BGP.positions[dArray.positions[i]][1]+Bhe-2);
        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi,BGP.positions[dArray.positions[i]][1]+Bhe+2);
        
        fill(110, 177, 194);

        text(dmg,BGP.positions[dArray.positions[i]][0]+Bwi,BGP.positions[dArray.positions[i]][1]+Bhe);
    }*/
    
    //BGP.width,BGP.height
    
    fill(255, 255, 255);
    f = createFont("Arial", 5);
    textFont(f, 12);
};

var inFront2 = function(n){//function that checks if  the unit is in front of the queue and has not previously moved

    var yes=1;
    var remInTurn=BQueue.totalN-BQueue.playedAK%BQueue.totalN;
    for (var i=0;i<remInTurn;i++){
        if (BQueue.array[i]===n){
           yes=0;
        }
    }
    //debug(remInTurn,yes);
    return yes;
};


var inFront = function(n){//function that checks if  the unit is in front of the queue and has not previously moved
    var is=0;
    for (var i=0;i<BQueue.array.length;i++){
        if (BQueue.array[i]===n){
            is++;
        }
    }
    //var yes=1;
    //var remInTurn=BQueue.totalN-BQueue.playedAK%BQueue.totalN;
    //for (var i=0;i<remInTurn;i++){
        //if (BQueue.array[i]===n){
           //yes=0;
       // }
    //}
    //debug(remInTurn,yes);
    //return yes;
    return is;
};

var removeFromQueue = function(n,oldAK){
    var auxAK=BQueue.playedAK;
    BQueue.playedAK=oldAK;
    var inF=inFront(n);
    for (var i=0;i<inF;i++){
        BQueue.totalQ++;
        addQueue();
        if (BQueue.array[BQueue.array.length-1]===n){
            inF++;
        }
    }
    //for (var i=0;i<BQueue.totalQ;i++){
       // if(BQueue.array[i]===n){
            //var auxAK=BQueue.playedAK;
            //BQueue.playedAK=oldAK-floor((BQueue.playedAK)/BQueue.totalN)-!(inFront(BQueue.array[i]));
            //BQueue.array.splice(i,1);
            //addQueue();
            //BQueue.playedAK=auxAK;
            //checkQueueSkip();
        //}
    //}
    //debug(BQueue.array);
    for (var i=0;i<BQueue.array.length;i++){
        if(BQueue.array[i]===n){
            BQueue.array.splice(i,1);
            i=i-1;
        }
    }
    //debug(BQueue.array);
    BQueue.playedAK=auxAK;
    BQueue.totalQ=8;
};

var killUnits =function (){
    
    for (var i=0;i<6;i++)
        {
            
            if ((heroes.array[bGround.hero].army[i])&&(heroes.array[bGround.hero].army[i].health<=0)){
                var oldAK=BQueue.playedAK;
                
                BQueue.playedAK=BQueue.playedAK-floor((BQueue.playedAK)/BQueue.totalN)-inFront2(i);
                removeFromQueue(i,oldAK);
                delete heroes.array[bGround.hero].army[i];
                //heroes.array[bGround.hero].army[i]=[];
                BQueue.totalN--;
                //removeFromQueue(i,oldAK);
            }
            if ((enemies.array[bGround.enemy].army[i].face)&&(enemies.array[bGround.enemy].army[i].health<=0)){
                var oldAK=BQueue.playedAK;
                
                BQueue.playedAK=BQueue.playedAK-floor((BQueue.playedAK)/BQueue.totalN)-inFront2(i+6);
                removeFromQueue(i+6,oldAK);
                delete enemies.array[bGround.enemy].army[i];
                enemies.array[bGround.enemy].army[i]=[];
                BQueue.totalN--;
                //removeFromQueue(i+6,oldAK);
            }
        }
        
    if (heroes.array[bGround.hero].health<=1&&heroes.array[bGround.hero].alive===true){
        
        var oldAK=BQueue.playedAK;
        BQueue.playedAK=BQueue.playedAK-floor((BQueue.playedAK)/BQueue.totalN)-inFront2(heroes.array[bGround.hero].posInArmy);
        
        removeFromQueue(heroes.array[bGround.hero].posInArmy,oldAK);
        BQueue.totalN--;
        heroes.array[bGround.hero].alive=false;
    }
    
    //fix for overcure
    if (heroes.array[bGround.hero].health>heroes.array[bGround.hero].maxhealth){
        heroes.array[bGround.hero].health=heroes.array[bGround.hero].maxhealth;
    }
    for (var i=0;i<6;i++)
        {
            
            if ((heroes.array[bGround.hero].army[i])&&(heroes.array[bGround.hero].army[i].health>heroes.array[bGround.hero].army[i].maxhealth)){
                heroes.array[bGround.hero].army[i].health=heroes.array[bGround.hero].army[i].maxhealth;
            }
            if ((enemies.array[bGround.enemy].army[i].face)&&(enemies.array[bGround.enemy].army[i].health>enemies.array[bGround.enemy].army[i].maxhealth)){
                enemies.array[bGround.enemy].army[i].health=enemies.array[bGround.enemy].army[i].maxhealth;
            }
        }
    
    
        
    //add rest of units    
    //for (var i=BQueue.array.length;i<BQueue.totalQ;i++)
   // {
        //queueOffset=BQueue.width;
            //BQueue.skip=BQueue.totalQ;
        //fSize=0; 
        //addQueue();
        //checkQueueSkip();
   // }   
    //debug(BQueue.array);
    //debug(BQueue.skip,BQueue.playedAK,BQueue.totalN);
};

var RemAllFromQueue = function (){
    var remF=0;
    for(var i=0;i<6;i++){
        BQueue.totalQ++;
        addQueue();
    }
    while (remF<BQueue.totalN-BQueue.playedAK%BQueue.totalN){
        BQueue.array.splice(0,1);
        remF++;
        BQueue.totalQ--;
    }
    
    while (BQueue.totalN<BQueue.array.length){
        BQueue.array.splice(BQueue.totalN,1);
        BQueue.totalQ--;
    }
    
    var remU=0;
    while(BQueue.array[remU]!==undefined){
        var next=1;
        if(BQueue.array[remU]>5){
            if(enemies.array[bGround.enemy].army[BQueue.array[remU]-6].face&&enemies.array[bGround.enemy].army[BQueue.array[remU]-6].hitPoints<0){
                BQueue.array.splice(remU,1);
                BQueue.totalQ--;
                BQueue.totalN--;
                next=0;
            }
        }else{
            if(heroes.array[bGround.hero].army[BQueue.array[remU]]&&heroes.array[bGround.hero].army[BQueue.array[remU]].hitPoints<0){
                BQueue.array.splice(remU,1);
                BQueue.totalQ--;
                BQueue.totalN--;
                next=0;
            }
            if(heroes.array[bGround.hero].posInArmy===BQueue.array[remU]&&heroes.array[bGround.hero].hitPoints<0){
                BQueue.array.splice(remU,1);
                BQueue.totalQ--;
                BQueue.totalN--;
                next=0;
            }
        }
        remU=remU+next;
    }
    
    //BQueue.totalQ=0;
    BQueue.skip=0;
    resetSkip();
    btnb12.lock=0;
};

var checkBVicory = function(){
    
    var yes=false;

    var nmher=true;
    var nmene=true;
    //check if hero is not dead
    if (heroes.array[bGround.hero].alive===true){nmher=false;}
    //check if there are hero 
    for (var i=0;i<6;i++)
        {
            if (heroes.array[bGround.hero].army[i]){nmher=false;}
            if (enemies.array[bGround.enemy].army[i].face){nmene=false;}
        }
    if (nmher||nmene){
        yes=true;
    }
    
    return yes;
};

var getSID = function(){
    var sid = 1;
    if (BQueue.attacker>5){
        sid =-1;
    }
    return sid;
};

var moveCurrentUnit = function(idx,maxStep){
    var smallJump = 10;
    var sid=getSID();
    var MoveSpeed=12;
    var posx1=BGP.positions[BQueue.attacker][0]; 
    var posy1=BGP.positions[BQueue.attacker][1];
    var posx2=BGP.positions[BQueue.attacked][0]-(BGP.width+3)*sid; 
    var posy2=BGP.positions[BQueue.attacked][1];
    if (animStep%2===0 &&animStep!==0){
        posy1=posy1+smallJump;
    }
    var ipoth=sqrt(pow(posx1-posx2,2)+pow(posy1-posy2,2));
    var mov1=0;
    var mov2=0;
    if (ipoth!==0){
        mov1=MoveSpeed*((posx1-posx2)/ipoth);
        mov2=MoveSpeed*((posy1-posy2)/ipoth);
    }
    if (animStep<maxStep){
        if (abs(posx1-posx2)>MoveSpeed && animStep<idx){
            BGP.positions[BQueue.attacker][0]=BGP.positions[BQueue.attacker][0]-mov1;
            BGP.positions[BQueue.attacker][1]=BGP.positions[BQueue.attacker][1]-mov2;
            if (animStep!==0){
                if (animStep%2===1){
                     BGP.positions[BQueue.attacker][1]=BGP.positions[BQueue.attacker][1]-smallJump;
                }
                else{
                     BGP.positions[BQueue.attacker][1]=BGP.positions[BQueue.attacker][1]+smallJump;
                }
            }
            
                animStep=animStep+1;
        }else{
            
              animStep=animStep+idx;
            
        }
        return ;
    }
    
    if (animStep>=maxStep){
        animStep=animStep-1;
        BGP.positions[BQueue.attacker][0]=BGP.positions[BQueue.attacker][0]+mov1;
        BGP.positions[BQueue.attacker][1]=BGP.positions[BQueue.attacker][1]+mov2;
        if (animStep!==maxStep){
            if (animStep%2===1){
                 BGP.positions[BQueue.attacker][1]=BGP.positions[BQueue.attacker][1]+smallJump;
            }
            else{
                 BGP.positions[BQueue.attacker][1]=BGP.positions[BQueue.attacker][1]-smallJump;
            }
        }else{
            BGP.positions[BQueue.attacker][0]=round(BGP.positions[BQueue.attacker][0]);
            BGP.positions[BQueue.attacker][1]=round(BGP.positions[BQueue.attacker][1]);
            Act.Session++;
        }
    }
    
    
};

var drawFist = function (){
    var Pfingers=3;
    var pLength=200;
    var pWidth=200;
    var PstartX=pLength/Pfingers/2;
    var PstartY=0;
    var Psections=4;
    var pLSec=pLength/Psections;
    var pWSec=pWidth/Pfingers;
    var Fistgfx = createGraphics(pLength+pLength/Pfingers/2, pWidth, P2D);
    
    Fistgfx.background(0,0);
    Fistgfx.fill(255, 0, 0);
    Fistgfx.stroke(0, 0, 0);
    Fistgfx.strokeWeight(1);
    
    Fistgfx.rect(PstartX+pLSec,PstartY-1,pLSec,pWidth-pWSec/5);
    Fistgfx.bezier(PstartX+pLSec, PstartY, PstartX, PstartY, PstartX, PstartY+pWSec, PstartX, PstartY+pWSec);
    Fistgfx.bezier(PstartX+pLength/2, PstartY+pWidth, PstartX, PstartY+pWidth,  PstartX, PstartY+pWidth*(Pfingers-1)/Pfingers, PstartX, PstartY+pWidth*(Pfingers-1)/Pfingers);
    for (var i=0; i<Pfingers;i++){
        Fistgfx.strokeWeight(2);
        Fistgfx.rect(PstartX+pLength/2-1,PstartY+pWSec*i,pLSec+2,pWSec);
        Fistgfx.strokeWeight(1);
        Fistgfx.bezier(PstartX+pLength*(Psections-1)/Psections, PstartY+pWSec*i, PstartX+pLength*(Psections-1)/Psections+pLSec, PstartY+pWSec*i, PstartX+pLength*(Psections-1)/Psections+pLSec, PstartY+pWSec*(i+1), PstartX+pLength*(Psections-1)/Psections, PstartY+pWSec*(i+1));
        Fistgfx.bezier(PstartX+pLength/2, PstartY+pWSec*i, PstartX+pLSec, PstartY+pWSec*i, PstartX+pLSec, PstartY+pWSec*(i+1), PstartX+pLength/2, PstartY+pWSec*(i+1));
    }

    Fistgfx.noStroke();
    Fistgfx.triangle(PstartX+pLSec+4, PstartY+pWidth-pWSec/4, PstartX+pLSec+4, PstartY+pWidth/2, PstartX, PstartY+pWidth*(Pfingers-1)/Pfingers);
    Fistgfx.triangle(PstartX-1,PstartY+pWSec, PstartX+pLSec, PstartY, PstartX+pLSec, PstartY+pWSec);
    Fistgfx.rect(PstartX,PstartY+pWSec,pLSec,pWidth*(Pfingers-2)/Pfingers);
    Fistgfx.stroke(0, 0, 0);
    Fistgfx.strokeWeight(1);
    Fistgfx.rect(PstartX+pLSec,PstartY+pWSec-1,pWSec,pWidth/2-pWSec+3);
    Fistgfx.strokeWeight(1);
    Fistgfx.bezier(PstartX+pLSec, PstartY+pWidth/2, PstartX+pLSec, PstartY+pWidth/2+pLSec, PstartX+pLSec+pWSec, PstartY+pWidth/2+pLSec, PstartX+pLSec+pWSec, PstartY+pWidth/2);

    Fistgfx.bezier(PstartX+pLSec+pWSec, PstartY+pWSec, PstartX+pLSec+pWSec, PstartY, PstartX+pLSec, PstartY, PstartX+pLSec, PstartY);
    Fistgfx.stroke(0, 0, 0);
    Fistgfx.strokeWeight(1);

    Fistgfx.ellipse(PstartX+pLSec/4, PstartY+pWidth/2, pLength/Pfingers, pWidth*(Pfingers-1)/Pfingers);

    Fistgfx.noStroke();
    Fistgfx.triangle(PstartX+pLSec-1, PstartY+pWSec+1, PstartX+pLSec+pWSec, PstartY+pWSec+1, PstartX+pLSec, PstartY);
    
    return Fistgfx;
    
};

var fistDrawing=drawFist();

var doAnimation = function (){
    
    var typeN;
    
    if(BQueue.attacker===heroes.array[bGround.hero].posInArmy){
        typeN=heroes.array[bGround.hero].attackNum;
    }else{
        if(heroes.array[bGround.hero].army[BQueue.attacker]){
            typeN=heroes.array[bGround.hero].army[BQueue.attacker].attackNum;
        }else{
            if(enemies.array[bGround.enemy].army[BQueue.attacker-6].face){
                typeN=enemies.array[bGround.enemy].army[BQueue.attacker-6].attackNum; 
            }
        }
    }
    
    switch(typeN){
    case 0:  
        var aSP=1000;
        var count=-80;
        var idx=1000;
        var sid=getSID();
    
        moveCurrentUnit(idx,16000);
        if (animStep<16000){
            
            var pX1=BGP.positions[BQueue.attacker][0]+(BGP.width/1-BGP.width/3)*sid;
            var pY1=BGP.positions[BQueue.attacker][1]-BGP.height/5;
            
            var pX1s=BGP.width;
            var pY1s=BGP.height;

            var gfxsw = createGraphics(pX1s, pY1s/10, JAVA2D);
            var gfx2sw = createGraphics(pX1s+pY1s/20, pX1s*2, JAVA2D);
         
            gfxsw.background(0,0);
            gfx2sw.background(0,0);
            //image(bck, 0, 0,400,400);
            var c = color(0, 255, 0,150);
            var value = alpha(c);
            gfxsw.fill(0, 255, 0, value);
            gfxsw.noStroke();
            
            gfxsw.rect(0,0,pX1s,pY1s/10,30);
            
            gfxsw.fill(255, 0, 0);
            
            gfxsw.filter(INVERT);
            gfxsw.image(topBottomIMG,0,-pY1s/2+1,pX1s,pY1s-2);
            gfxsw.image(topBottomIMG,0,-pY1s/2+1,pX1s,pY1s-2);
            gfxsw.image(topBottomIMG,0,-pY1s/2+1,pX1s,pY1s-2);
            gfxsw.filter(INVERT);
                    
            gfxsw.rect(0,0,pX1s/3,pY1s/10);
            
            gfxsw.stroke(204, 255, 0);
            
            gfx2sw.translate (pY1s/20, pX1s);
            gfx2sw.rotate(radians(-80+animStep/100));
            
            gfx2sw.image(gfxsw,0,-pY1s/20,pX1s,pY1s/10);
            gfx2sw.rotate(radians(80));
            gfx2sw.translate(-pY1s/20,-pX1s);
            if (sid===-1){
                scale(-1, 1);
                image(gfx2sw,-pX1-BGP.width/1,pY1,pX1s,pX1s*2);
                scale(-1, 1);
            }else{
                image(gfx2sw,pX1,pY1,pX1s,pX1s*2);
            }
            
            stroke(255, 0, 0);
            strokeWeight(3);
            
            if(animStep>8000){
                if (BQueue.attacker>5){
                    line(BGP.positions[BQueue.attacked][0]+BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height/5,BGP.positions[BQueue.attacked][0]+BGP.width-BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height-BGP.height/5);
                }else{
                    line(BGP.positions[BQueue.attacked][0]+BGP.width-BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height/5,BGP.positions[BQueue.attacked][0]+BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height-BGP.height/5);
                }
            }
        }
        
    break;
    
    case 1:
        
        var sid=1;
        if (BQueue.attacked>5){
            sid =-1;
        }
        var wi=plus.width-36;
        var hy=plus.height-37;
        var idx=4;
        
        var ex11=0;
        var ey11=0;
        var ex12=30;
        var ey12=30;

        var ex21=BGP.positions[BQueue.attacked][0];
        var ey21=BGP.positions[BQueue.attacked][1];
        var ex22=BGP.width;
        var ey22=BGP.height;
        
        var difI=BGP.width/8;

        var iMax=(2*BGP.width)/3;    
        
        var i1=animStep%iMax;
        var i2=(animStep+difI)%iMax;
        var i3=(animStep+difI*2)%iMax;
        
        if (animStep%(iMax*2)>=iMax){i1=iMax-animStep%iMax;}
        if ((animStep+difI)%(iMax*2)>=iMax){i2=iMax-(animStep+difI)%iMax;}
        if ((animStep+difI*2)%(iMax*2)>=iMax){i3=iMax-(animStep+difI*2)%iMax;}
        
        if (animStep<200){
            animStep=animStep+idx;
            
            var gfxhl = createGraphics(wi, hy, JAVA2D);
            var gfxhl2 = createGraphics(wi, hy, JAVA2D);
            var gfxhl3 = createGraphics(wi, hy, JAVA2D);
            
            gfxhl.background(0,0);
            gfxhl2.background(0, 0);
            gfxhl3.background(0, 0);

            gfxhl.image(plus,-16,-26);
            gfxhl2.tint(0,0,0,255);
            gfxhl2.image(gfxhl,0,0);
    
            gfxhl2.filter(INVERT);

            gfxhl3.tint(0,192,255,255);
            gfxhl3.image(gfxhl2,0,0);
            
            
            image(gfxhl3,ex22*3/8+ex21-ex22/8-(iMax-i1)/2,ey22/4+ey21-ey22/8-(iMax-i1)/2,ex22/4+(iMax-i1),ey22/4+(iMax-i1));
            image(gfxhl3,ex22/4+ex21-ex22/8-(iMax-i2)/2,ey22*3/4+ey21-ey22/8-(iMax-i2)/2,ex22/4+(iMax-i2),ey22/4+(iMax-i2));
            image(gfxhl3,ex22*3/4+ex21-ex22/8-i3/2,ey22/2+ey21-ey22/8-i3/2,ex22/4+i3,ey22/4+i3);
        }
        else{
            Act.Session++;
        }
    break;
    
    
    case 2:
        
        var aSP=100;
        var index=10;
        var extra=30;
        if (animStep<aSP+extra){
            animStep=animStep+index;
            var prop=1;
            var prop2=0;
            
            if (animStep<aSP){
                prop=(animStep/index)/(aSP/index);
            }
            
            if (animStep>=extra){
                prop2=(((animStep-extra)/index))/(aSP/index);
            }
            
            var sid=1;
            if (BQueue.attacker>5){
                sid =-1;
            }
            
            stroke(189, 28, 28);
            strokeWeight(4);
            
            var pX1=BGP.positions[BQueue.attacker][0]+BGP.width/2+BGP.width/12*sid;
            var pY1=BGP.positions[BQueue.attacker][1]+BGP.height-BGP.height/3-BGP.height/12;
            var pX2=BGP.positions[BQueue.attacked][0]+BGP.width/2-BGP.width/12*sid;
            var pY2=BGP.positions[BQueue.attacked][1]+BGP.height-BGP.height/3-BGP.height/12;
            
            line(floor(pX1+(pX2-pX1)*prop2),floor(pY1+(pY2-pY1)*prop2),floor(pX1+(pX2-pX1)*prop),floor(pY1+(pY2-pY1)*prop));
            
            stroke(0, 0, 0);
            strokeWeight(1);
            
        }
        else{
            Act.Session++;
        }
    break;
    case 3:
        var aSP=1000;
        var count=-80;
        var idx=1000;
        var sid=getSID();
        
        moveCurrentUnit(idx,16000);
        
        if (animStep<16000){
            var pX1=BGP.positions[BQueue.attacker][0]+(BGP.width/1-BGP.width/3)*sid;
            var pY1=BGP.positions[BQueue.attacker][1]-BGP.height/5;//+BGP.height/5
            
            var pX1s=BGP.width;
            var pY1s=BGP.height;

            var gfxsw = createGraphics(pX1s, pY1s/10, JAVA2D);
            var gfx2sw = createGraphics(pX1s+pY1s/20, pX1s*2, JAVA2D);
         
            gfxsw.background(0,0);
            gfx2sw.background(0,0);
            //image(bck, 0, 0,400,400);
            var c = color(0, 0, 255,150);
            var value = alpha(c);
            gfxsw.fill(0, 0, 255, value);
            gfxsw.noStroke();
            
            gfxsw.rect(0,0,pX1s,pY1s/10,30);
            
            gfxsw.fill(0, 0, 0);
            
            gfxsw.filter(INVERT);
            gfxsw.image(topBottomIMG,0,-pY1s/2+1,pX1s,pY1s-2);
            gfxsw.image(topBottomIMG,0,-pY1s/2+1,pX1s,pY1s-2);
            gfxsw.image(topBottomIMG,0,-pY1s/2+1,pX1s,pY1s-2);
            gfxsw.filter(INVERT);
                    
            gfxsw.rect(0,0,pX1s/3,pY1s/10);
            
            gfxsw.stroke(0, 0, 255);
            
            gfx2sw.translate (pY1s/20, pX1s);
            gfx2sw.rotate(radians(-80+animStep/100));
            
            gfx2sw.image(gfxsw,0,-pY1s/20,pX1s,pY1s/10);
            gfx2sw.rotate(radians(80));
            gfx2sw.translate(-pY1s/20,-pX1s);
            if (sid===-1){
                scale(-1, 1);
                image(gfx2sw,-pX1-BGP.width/1,pY1,pX1s,pX1s*2);
            }else{
                image(gfx2sw,pX1,pY1,pX1s,pX1s*2);
            }
            stroke(255, 0, 0);
            strokeWeight(3);
            if(animStep>8000){
                if (BQueue.attacker>5){
                    line(BGP.positions[BQueue.attacked][0]+BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height/5,BGP.positions[BQueue.attacked][0]+BGP.width-BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height-BGP.height/5);
                }else{
                    line(BGP.positions[BQueue.attacked][0]+BGP.width-BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height/5,BGP.positions[BQueue.attacked][0]+BGP.width/6,BGP.positions[BQueue.attacked][1]+BGP.height-BGP.height/5);
                }
            }
            
        }
        
    break;
    
    case 4:
        var aSP=180;
        var speedL=3;
        var godP=-100;
        var arch=30;
        if (animStep<aSP){
            animStep=animStep+speedL;
            
            if (BQueue.attacker<6){
                for (var i=0;i<6;i++){
                    if(heroes.array[bGround.hero].army[i]||heroes.array[bGround.hero].posInArmy===i){
                        var indexI=180;
                        var indexJ=0;
                        if (animStep<180){indexI=animStep;}//increace small light beam angle
                        if (indexI-arch>0){indexJ=animStep-arch;}//increace second part of small light beem angle
    
                        fill(255, 234, 0,128);
                        stroke(255, 234, 0);
                        beginShape();
                        noFill();
                        arc(BGP.positions[i][0]+BGP.width/2, BGP.positions[i][1]+BGP.height-BGP.height/8, BGP.width, BGP.height/8*2, 0, 180);
                        fill(255, 234, 0,128);
                        vertex(BGP.positions[i][0]+BGP.width/2, godP);
                        vertex(BGP.positions[i][0]+BGP.width, BGP.positions[i][1]+BGP.height-BGP.height/8);
                        endShape();
    
                        //small one
                        fill(255, 234, 0,128);
                        stroke(255, 234, 0);
                        beginShape();
                        arc(BGP.positions[i][0]+BGP.width/2, BGP.positions[i][1]+BGP.height-BGP.height/8, BGP.width, BGP.height/8*2, indexJ, indexI);
                        fill(255, 234, 0,128);
                        noStroke();
                        vertex(BGP.positions[i][0]+BGP.width/2, godP);
                        endShape();
                    }
                }
            }else{
                for (var i=0;i<6;i++){
                    if(enemies.array[bGround.enemy].army[i].face){
                        var indexI=180;
                        var indexJ=0;
                        if (animStep<180){indexI=animStep;}//increace small light beam angle
                        if (indexI-arch>0){indexJ=animStep-arch;}//increace second part of small light beem angle
    
                        fill(255, 234, 0,128);
                        stroke(255, 234, 0);
                        beginShape();
                        noFill();
                        arc(BGP.positions[i+6][0]+BGP.width/2, BGP.positions[i+6][1]+BGP.height-BGP.height/8, BGP.width, BGP.height/8*2, 0, 180);
                        fill(255, 234, 0,128);
                        vertex(BGP.positions[i+6][0]+BGP.width/2, godP);
                        vertex(BGP.positions[i+6][0]+BGP.width, BGP.positions[i+6][1]+BGP.height-BGP.height/8);
                        endShape();
    
                        //small one
                        fill(255, 234, 0,128);
                        stroke(255, 234, 0);
                        beginShape();
                        arc(BGP.positions[i+6][0]+BGP.width/2, BGP.positions[i+6][1]+BGP.height-BGP.height/8, BGP.width, BGP.height/8*2, 180-indexI, 180-indexJ);
                        fill(255, 234, 0,128);
                        noStroke();
                        vertex(BGP.positions[i+6][0]+BGP.width/2, godP);
                        endShape();
                    }
                }
            }
        }
        else{
            Act.Session++;
        }
    break;
    
    case 5:
        var aSP=200;
        var aSPF=500;
        var index=5;
        var amp=1.3;
        var fallSpeedCoef=10;
        
        var jump=50;
        
        if (animStep<aSPF){
            if (animStep<aSP){
                animStep=animStep+index;
                
                var widthCoef=80/aSP;
                var heightCoef=(tree5Img.width*1.2*amp-30)/aSP;
                noStroke();
                fill(0, 0, 0,128);
                if (BQueue.attacker<6){
                    ellipse(BGP.positions[7][0]+tree5Img.width*1.2*amp/2,BGP.positions[7][1]+BGP.height-tree5Img.height*amp+40+tree5Img.height*amp-60,animStep*heightCoef,animStep*widthCoef);
                
                    image(tree5Img, BGP.positions[7][0],BGP.positions[7][1]+BGP.height-tree5Img.height*amp+40+(-aSP+animStep)*fallSpeedCoef  ,tree5Img.width*1.2*amp,tree5Img.height*amp);
                }else{
                    ellipse(BGP.positions[4][0]+tree5Img.width*1.2*amp/2,BGP.positions[4][1]+BGP.height-tree5Img.height*amp+40+tree5Img.height*amp-60,animStep*heightCoef,animStep*widthCoef);
                
                    image(tree5Img, BGP.positions[4][0],BGP.positions[4][1]+BGP.height-tree5Img.height*amp+40+(-aSP+animStep)*fallSpeedCoef  ,tree5Img.width*1.2*amp,tree5Img.height*amp);
                }
                
            }else{
                
                animStep=animStep+index;
                if (animStep-aSP<=jump/2){
                    for(var i=0;i<6;i++){
                        if (BQueue.attacker<6){BGP.positions[i+6][1]--;}
                        else{BGP.positions[i][1]--;}
                    }
                }else{
                    if (animStep-aSP<=jump){
                        for(var i=0;i<6;i++){
                            if (BQueue.attacker<6){BGP.positions[i+6][1]++;}
                            else{BGP.positions[i][1]++;}
                        }
                    }
                }
                
            if (BQueue.attacker<6){ 
                image(tree5Img, BGP.positions[7][0],BGP.positions[7][1]+BGP.height-tree5Img.height*amp+40+(BGP.positions[0][1]-BGP.positions[6][1]) ,tree5Img.width*1.2*amp,tree5Img.height*amp);
                
            }else{
                image(tree5Img, BGP.positions[4][0],BGP.positions[4][1]+BGP.height-tree5Img.height*amp+40+(BGP.positions[6][1]-BGP.positions[0][1]) ,tree5Img.width*1.2*amp,tree5Img.height*amp);
                }
            }
        }
        else{
            Act.Session++;
        }
        
    break;
    
    case 6:  
        var aSP=1000;
        var count=-80;
        var idx=1000;
        var sid=getSID();
        var MoveSpeed=12;
        moveCurrentUnit(idx,16000);
        if (animStep<16000){
            
            var pX1=BGP.positions[BQueue.attacker][0]+(BGP.width/1-BGP.width/3)*sid;
            var pY1=BGP.positions[BQueue.attacker][1]+BGP.height/3;
            
            var pX1s=BGP.height/2;
            var pY1s=BGP.height/2;

            var gfxsw = createGraphics(pX1s, pY1s/10, JAVA2D);
            var gfx2sw = createGraphics(pX1s+pY1s/20, pX1s*2, JAVA2D);
         
            gfxsw.background(0,0);
            gfx2sw.background(0,0);
            //image(bck, 0, 0,400,400);
            var c = color(0, 255, 0,150);
            var value = alpha(c);
            gfxsw.fill(0, 255, 0, value);
            gfxsw.noStroke();
            
            gfxsw.rect(0,0,pX1s,pY1s/10,30);
            
            gfxsw.fill(255, 0, 0);
            
                    
            gfxsw.rect(0,0,pX1s/3,pY1s/10);
            
            gfxsw.stroke(204, 255, 0);
            
            gfx2sw.translate (pY1s/20, pX1s);
            gfx2sw.rotate(radians(-80+animStep/100));
            
            gfx2sw.image(gfxsw,0,-pY1s/20,pX1s,pY1s/10);
            gfx2sw.rotate(radians(80));
            gfx2sw.translate(-pY1s/20,-pX1s);
            
            stroke(255, 0, 0);
            strokeWeight(3);
            
            if(animStep>10000){
                if (sid===-1){
                    scale(-1, 1);
                    image(fistDrawing,-pX1-BGP.width/1,pY1,pX1s,pY1s);
                    scale(-1, 1);
                }else{
                    image(fistDrawing,pX1+round(animStep-8000)/1000*5,pY1,pX1s,pY1s);
                }
            }

            if(animStep>11900){
                var backS=1;
                if (animStep>13900){backS=backS*(-1);}
                    if (BQueue.attacker<6){
                        BGP.positions[BQueue.attacked][0]+=backS;
                    }
                    else {
                        BGP.positions[BQueue.attacked][0]-=backS;
                    }
            }
            
        }
        
        
    break;
    
    case 7:
        var posx=BGP.positions[BQueue.attacker][0]+BGP.width/2;
        var posy=BGP.positions[BQueue.attacker][1]+BGP.height/2;
        var side =getSID();
        var radius = BGP.height+BGP.height/3;
        var arcstroke=10;
        var arclen=60;
        var spikelen=10;
        var spiketip=30;
        var spikegap=5;
        var startang=-90+side*20;
        var endang=-90+side*160;
        var startp=startang;
        var mspeed=3*side;
        var idx=1000;
        var adjAnimStep=round(((animStep-10000)/idx-1)*mspeed);
        var curentMaxstep=round((140+arclen)/mspeed*side)*idx;
        moveCurrentUnit(idx,curentMaxstep);
        if (animStep<curentMaxstep){
            if(animStep>10000){
                stroke(255, 0, 0);
                strokeWeight(arcstroke);
                noFill();
                var endp=startang+adjAnimStep;
                if (endp*side>=endang*side)
                {
                    endp=endang;
                }
                
                if ((endp-arclen*side)*side>startang*side&&endp*side<endang*side){
                    startp=(endp)-arclen*side;
                }
                if (endp*side>=endang*side){
                    startp=startang+adjAnimStep-arclen*side;
                }
                
                if (side===1){
                    arc(posx, posy, radius, radius, startp, endp);
                }else{
                    arc(posx, posy, radius, radius, endp, startp);
                }

                strokeWeight(0);
                strokeWeight(1);
                stroke(0, 0, 255);
                fill(0, 0, 255);
                var spikep=endp;
                if (endp*side>=endang*side){
                    spikep=startp+arclen*side;
                }
                
                for (var i=0;i*side<=spikep*side-startp*side;i+=spikelen*side+spikegap*side){
                    
                    
                  if (i*side+endp*side>=spikep*side) { 
                        triangle(posx+radius/2*sin(spikep+90-i),posy-radius/2*cos(spikep+90-i),
                        posx+radius/2*sin(spikep+90-spikelen*side-i),posy-radius/2*cos(spikep+90-spikelen*side-i),
                        posx+(spiketip+radius)/2*sin(spikep+90-spikelen*side/2-i),posy-(spiketip+radius)/2*cos(spikep+90-spikelen*side/2-i));}
                }
                if ((adjAnimStep+startang-arclen*side)*side<=endang*side){
                    //animStep+=mspeed;
                }
            }
            if(animStep>11900){
                
            }
        }
        
        
    break;
    
    case 8:
        
        var posx=BGP.positions[BQueue.attacked][0];
        var posy=BGP.positions[BQueue.attacked][1];
        var minTrans=0;
        var maxTrans=255;
        var pace=10;
        var aSP=511;
        if (animStep<aSP){
            var gfxHeal2 = createGraphics(BGP.width, BGP.height, JAVA2D);
            gfxHeal2.background(0, 0);
            if(BQueue.attacked<6){
            if (heroes.array[bGround.hero].posInArmy===BQueue.attacked){
                gfxHeal2.image(heroes.array[bGround.hero].face, 0, 0,BGP.width, BGP.height);
            }else{
                gfxHeal2.image(heroes.array[bGround.hero].army[BQueue.attacked].face, 0, 0,BGP.width, BGP.height);
            }
            }else
            {
                gfxHeal2.scale(-1, 1);
                gfxHeal2.image(enemies.array[bGround.enemy].army[BQueue.attacked-6].face, -1*BGP.width, 0,BGP.width, BGP.height);
                gfxHeal2.scale(-1, 1);
            }
            //gfxHeal2.image(wallImg, 0, 0,BGP.width, BGP.height);
            if (animStep>255){
                maxTrans=maxTrans-(animStep-255);
            }
            if (maxTrans<0){
	            maxTrans=0;//correcting pace 
            }
            animStep+=pace;
            minTrans=animStep;
            if(minTrans>255){
                minTrans=255;
            }
            var gfxHeal2b = createGraphics(BGP.width, BGP.height, JAVA2D);
            gfxHeal2b.background(0, 0);
            gfxHeal2b.tint(96,96,256,minTrans-(255-maxTrans));
            gfxHeal2b.image(gfxHeal2,0,0);
            var bl=-22+minTrans/10;
            image(gfxHeal2b, posx-bl, posy-bl,gfxHeal2.width+(bl*2),gfxHeal2.height+(bl*2));
        }
        else{
            Act.Session++;
        }
            
    break;
    
    default:
        var aSP=100;
        var index=10;
        if (animStep<aSP){
            animStep=animStep+index;
        }
        else{
            Act.Session++;
        }
    break;
    
    }
};

var doAction = function (){
        switch(Act.Session) {
        case 0: //jump in front
            if(BQueue.array[0]>5&&BQueue.played===0&&bGround.r>=0){
                bGround.r-=1;
            }else{
            if (BQueue.array[0]<6){
                BGP.positions[BQueue.array[0]][0]+=Act.x;
                if(Act.initSession<Act.totalFrames/2){
                    BGP.positions[BQueue.array[0]][1]-=Act.y;
                }else{
                    BGP.positions[BQueue.array[0]][1]+=Act.y;
                }
            }
            else{
                BGP.positions[BQueue.array[0]][0]-=Act.x;
                if(Act.initSession<Act.totalFrames/2){
                    BGP.positions[BQueue.array[0]][1]-=Act.y;
                }else{
                    BGP.positions[BQueue.array[0]][1]+=Act.y;
                }
            }
            if (Act.initSession===Act.totalFrames){
                     Act.Session++;
            }
            else{
                Act.initSession++; 
            }
            }
        
            break;
        case 1://set damage
            setDamage();
            animStep=0;
            Act.Session++;
            break;
        case 2://draw action
            break;
        case 3://draw damage
            if (dArray.state!==dArray.lastState){
                dArray.state++;
            }else{
                Act.Session++;
                dArray.state=0;
            }
            break;
        case 4: //do damage
            doDamage();
            backToZero();
            checkHeroAlone();
            minTrans=0;
            maxTrans=255;
            Act.Session++;
            break;
        case 5: //fade dying units
            Act.damageSession=1;
            if (maxTrans===0)
            {
                Act.Session++;
            }
            break;
        case 6://kill units
            killUnits();
            Act.Session++;
            break;
        case 7: //jump back
            if (BQueue.array[0]<6){
                BGP.positions[BQueue.array[0]][0]-=Act.x;
                if(Act.finalSession<Act.totalFrames/2){
                    BGP.positions[BQueue.array[0]][1]-=Act.y;
                }else{
                    BGP.positions[BQueue.array[0]][1]+=Act.y;
                }
            }
            else{
                BGP.positions[BQueue.array[0]][0]+=Act.x;
                if(Act.finalSession<Act.totalFrames/2){
                    BGP.positions[BQueue.array[0]][1]-=Act.y;
                }else{
                    BGP.positions[BQueue.array[0]][1]+=Act.y;
                }
            }
            if (Act.finalSession===Act.totalFrames){
                     Act.Session++;
            }
            else{
                Act.finalSession++; 
            }
            break;
        case 8:
            if (checkBVicory()&&btnb14.lock===1){
                addXP();
                XPAnimState=0;
            }
            Act.Session++;
            break;
        case 9: //draw XP
            
        break;
        case 10:
            if (checkUpgrade()){
              Act.Session++; 
              XPAnimState=1;
            }else{
                Act.Session=Act.Session+3;
            }
            
        break;
        case 11: //draw upgrade
        
        break;
        case 12: //replace units
            for (var i=0;i<6;i++)
            {
                if ((heroes.array[bGround.hero].army[i])&&(heroes.array[bGround.hero].army[i].XP>=heroes.array[bGround.hero].army[i].maxXP)){
                    Act.Session=9;
                    if(heroes.array[bGround.hero].army[i].upgradeTo===-1){
                    var leftXP=heroes.array[bGround.hero].army[i].XP;
                    heroes.array[bGround.hero].army[i].maxhealth=floor(heroes.array[bGround.hero].army[i].maxhealth*2);
                    heroes.array[bGround.hero].army[i].health=heroes.array[bGround.hero].army[i].maxhealth;
                    heroes.array[bGround.hero].army[i].level++;
                    heroes.array[bGround.hero].army[i].hitPoints=heroes.array[bGround.hero].army[i].hitPoints*2;
                    heroes.array[bGround.hero].army[i].maxXP=heroes.array[bGround.hero].army[i].maxXP*2;
                    heroes.array[bGround.hero].army[i].XP=leftXP;
                    }else{
                        var replacementUnit=heroes.array[bGround.hero].army[i].upgradeTo;
                        var leftXP=heroes.array[bGround.hero].army[i].XP;
                        delete heroes.array[bGround.hero].army[i];
                        heroes.array[bGround.hero].army[i]=copyUnit(unitTypeArray[replacementUnit]);
                        heroes.array[bGround.hero].army[i].XP=leftXP;
                    }
                    
                }
                if ((enemies.array[bGround.enemy].army[i].face)&&(enemies.array[bGround.enemy].army[i].XP>=enemies.array[bGround.enemy].army[i].maxXP)){
                    Act.Session=9;
                    if(enemies.array[bGround.enemy].army[i].upgradeTo===-1){
                    var leftXP=enemies.array[bGround.enemy].army[i].XP;
                    enemies.array[bGround.enemy].army[i].maxhealth=floor(enemies.array[bGround.enemy].army[i].maxhealth*2);
                    enemies.array[bGround.enemy].army[i].health=enemies.array[bGround.enemy].army[i].maxhealth;
                    enemies.array[bGround.enemy].army[i].level++;
                    enemies.array[bGround.enemy].army[i].hitPoints=enemies.array[bGround.enemy].army[i].hitPoints*2;
                    enemies.array[bGround.enemy].army[i].maxXP=enemies.array[bGround.enemy].army[i].maxXP*2;
                    enemies.array[bGround.enemy].army[i].XP=leftXP;    
                    }else{
                        var replacementUnit=enemies.array[bGround.enemy].army[i].upgradeTo;
                        var leftXP=enemies.array[bGround.enemy].army[i].XP;
                        delete enemies.array[bGround.enemy].army[i];
                        enemies.array[bGround.enemy].army[i]=[];
                        enemies.array[bGround.enemy].army[i]=copyUnit(unitTypeArray[replacementUnit]);
                        enemies.array[bGround.enemy].army[i].XP=leftXP;
                    }
    
                }
            }
        
            if (heroes.array[bGround.hero].XP>=heroes.array[bGround.hero].maxXP){
                UpgradeHeroF();
                Act.Session=9;
            }
        Act.Session++; 
        break;
        case 13: //move queue
            if (checkBVicory()){
                if (btnb14.lock===1){
                    btnb14.lock=0;
                    RemAllFromQueue();
                    BQueue.played=0;
                    BQueue.playedAK=0;
                    queueOffset=BQueue.width;
                    fSize=0;
                    BQueue.skip=BQueue.totalQ;
                }else{
                    BQueue.array.splice(0,1);
                    BQueue.totalQ--;
                    BQueue.skip=BQueue.totalQ;
                    BQueue.played++;
                    BQueue.playedAK++;
                    queueOffset=BQueue.width;
                    fSize=0; 
                }
            }else{
                BQueue.array.splice(0,1);
                BQueue.played++;
                BQueue.playedAK++;
                addQueue();
                queueOffset=BQueue.width;
                fSize=0;
                checkQueueSkip();
            }
            Act.inProgress=false;
            Act.Session++;
            break;
    }
};

var createLivesArrayIAC = function(){
    
    var LivesArray = [];
    for (var i=0;i<6;i++){
        if (heroes.array[bGround.hero].army[i]){
            LivesArray[i]=heroes.array[bGround.hero].army[i].health;
        }else {LivesArray[i]=undefined;}
        if (enemies.array[bGround.enemy].army[i].face){
            LivesArray[i+6]=enemies.array[bGround.enemy].army[i].health;
        }else {LivesArray[i+6]=undefined;}
    }
    if (heroes.array[bGround.hero].health>1){
        LivesArray[heroes.array[bGround.hero].posInArmy]=heroes.array[bGround.hero].health;
    }
    return LivesArray;
};


var calculateAIUnitHeuristic = function(){
};

var calculateAIHeuristic = function(livesArray){
    var value = 0;
    var unitValue=1000;
    var heroValue=1500;
    var countHeroes=0;
    var countEnemies=0;
    
    for (var i=0;i<6;i++){
            if (livesArray[i]){
                countHeroes++;
            }
            if (livesArray[i+6]){
                countEnemies++;
            }
    }
    
    for (var i=0;i<6;i++){
        if (heroes.array[bGround.hero].army[i]&&livesArray[i]===undefined){
            value= value+unitValue*heroes.array[bGround.hero].army[i].level;
        }
        if (enemies.array[bGround.enemy].army[i].face&&livesArray[i+6]===undefined){
            value= value-unitValue*enemies.array[bGround.enemy].army[i].level;
        }
    }
    if (livesArray[heroes.array[bGround.hero].posInArmy]===undefined){
        value= value+heroValue*heroes.array[bGround.hero].level;
    }
    
    for (var i=0;i<6;i++){
        if (livesArray[i]!==undefined){
            value= value-livesArray[i];
        }
        if (livesArray[i+6]!==undefined){
            value= value+livesArray[i+6];
        }
    }
    
    if (countHeroes===0){value=value+100000;}
    if (countEnemies===0){value=value-100000;}
    
    return value;
};

var createPossibleAttakedIAC = function(attacker, lArray){
    var localIAC=IAcontainer();
    if (attacker!==undefined){
        for (var i=0;i<12;i++){
            if (selectorColor(attacker,i)===0||selectorColor(attacker,i)===3){
                if(lArray[i]!==undefined){
                    localIAC.array.push(i);
                }
            }
        }
    }
    
    return localIAC;
};

var calculateMinimum = function (MArray){
    var minimum=MArray[0];
    for (var i=1;i<MArray.length;i++){
        if (minimum){
            if (MArray[i]&&minimum>MArray[i]){
                minimum = MArray[i];
            }
        }
        else{
            minimum = MArray[i];
        }
    }
    return minimum;
};

var calculateMaximum = function (MArray){
    var maximum=MArray[0];
    for (var i=1;i<MArray.length;i++){
        if (maximum){
            if (MArray[i]&&maximum<MArray[i]){
                maximum = MArray[i];
            }
        }
        else{
            maximum = MArray[i];
        }
    }
    return maximum;
};

var selectMaximum = function (MArray){
    var maximum=MArray[0];
    for (var i=1;i<MArray.length;i++){
        if (maximum<MArray[i]){
            maximum = MArray[i];
        }
    }
    
    var randAr=[];
    for (var i=0;i<MArray.length;i++){
        if (maximum===MArray[i]){
            randAr.push(i);
        }
    }
    return randAr[floor(random(randAr.length))];
};

var AItree=[];

var cleanIATree = function(){
    AItree=[];
    for (var i=0;i<8;i++){
        AItree[i]=[];
    }
};

var pushAItree = function (tDepth, lArray){
    for (var i=0;i<lArray.length;i++){
        AItree[tDepth].push(lArray[i]);
    }
    AItree[tDepth].push("-");
};

var calculateIAAttackNext = function(Xposition, lArray){
    var depth = 4;
    if (Xposition===0){
        cleanIATree();
    }
    
    if (Xposition===depth||BQueue.array[Xposition]===undefined){
        pushAItree(Xposition,lArray);
        return calculateAIHeuristic(lArray);
    }
    var hArray=[];
    
    var localIAC = createPossibleAttakedIAC(BQueue.array[Xposition],lArray);
    if (localIAC.array.length===0){
        hArray.push(calculateIAAttackNext(Xposition+1,lArray));
    }
    else{
        for (var i=0;i<localIAC.array.length;i++){
            var newArray = setAndDoIACDamage(BQueue.array[Xposition],localIAC.array[i],lArray);
            hArray.push(calculateIAAttackNext(Xposition+1,newArray));
        }
    }
    
    pushAItree(Xposition,hArray);
    if (Xposition===0){
        //debug("tree");
        //debug(AItree);
        //debug("chosen  "+localIAC.array[selectMaximum(hArray)]);
        for (var i=0;i<AItree[depth].length;i++)
            {
                var partial = [];
                while (AItree[depth][i]!=="-"){
                    partial.push(AItree[depth][i]);
                    i++;
                }
                //debug(partial);
            }
        return localIAC.array[selectMaximum(hArray)];
    }
    
    if (BQueue.array[Xposition]>6) {
        return calculateMaximum(hArray);
    }else{
        return calculateMinimum(hArray);
    }
    
};

var drawAllSelectors = function (x,y){
    if (x<6&&y===0)
    {
        if((heroes.array[bGround.hero].posInArmy===x&&heroes.array[bGround.hero].attackType>2)||(heroes.array[bGround.hero].army[x]&&heroes.array[bGround.hero].army[x].attackType>2)){
        for (var i=0;i<6;i++)
        {
            if(enemies.array[bGround.enemy].army[i].face){
                drawBSelector(BGP.positions[i+6][0],BGP.positions[i+6][1],BGP.width,y);
            }
        }
        }
    }
    if (x>=6&&y===0)
    {if(enemies.array[bGround.enemy].army[x-6].face&&enemies.array[bGround.enemy].army[x-6].attackType>2){
        for (var i=0;i<6;i++)
        {
            if(heroes.array[bGround.hero].army[i]||heroes.array[bGround.hero].posInArmy===i){
                drawBSelector(BGP.positions[i][0],BGP.positions[i][1],BGP.width,y);
            }
        }
    }
    }
    
    
    if (x<6&&y===3)
    {
        if((heroes.array[bGround.hero].posInArmy===x&&heroes.array[bGround.hero].attackType>2)||(heroes.array[bGround.hero].army[x]&&heroes.array[bGround.hero].army[x].attackType>2)){
        for (var i=0;i<6;i++)
        {
            if(heroes.array[bGround.hero].army[i]||heroes.array[bGround.hero].posInArmy===i){
                drawBSelector(BGP.positions[i][0],BGP.positions[i][1],BGP.width,y);
            }
        }
        }
    }
    if (x>=6&&y===3)
    {
        if(enemies.array[bGround.enemy].army[x-6].face&&enemies.array[bGround.enemy].army[x-6].attackType>2){
        for (var i=0;i<6;i++)
        {
            if(enemies.array[bGround.enemy].army[i].face){
                drawBSelector(BGP.positions[i+6][0],BGP.positions[i+6][1],BGP.width,y);
            }
        }
        }
    }
    
    //ataching everything
    if (x<6){
    if((heroes.array[bGround.hero].posInArmy===x&&heroes.array[bGround.hero].attackSide===3)||(heroes.array[bGround.hero].army[x]&&heroes.array[bGround.hero].army[x].attackSide===3)){
        for (var i=0;i<6;i++)
        {
            if(heroes.array[bGround.hero].army[i]||heroes.array[bGround.hero].posInArmy===i){
                drawBSelector(BGP.positions[i][0],BGP.positions[i][1],BGP.width,y);
            }
            if(enemies.array[bGround.enemy].army[i].face){
                drawBSelector(BGP.positions[i+6][0],BGP.positions[i+6][1],BGP.width,y);
            }
        }
    }
    }else{
        if((enemies.array[bGround.enemy].army[x-6].face&&enemies.array[bGround.enemy].army[x-6].attackSide===3)){
            for (var i=0;i<6;i++)
        {
            if(heroes.array[bGround.hero].army[i]||heroes.array[bGround.hero].posInArmy===i){
                drawBSelector(BGP.positions[i][0],BGP.positions[i][1],BGP.width,y);
            }
            if(enemies.array[bGround.enemy].army[i].face){
                drawBSelector(BGP.positions[i+6][0],BGP.positions[i+6][1],BGP.width,y);
            }
        }
        }
    }
};

var drawBattleButtons = function(){
    
    noStroke();
    noFill();
    //strokeWeight(0);
    
    
    for (var i=0;i<battlePanelBtns.array.length;i++)
        {
            drawBtn(battlePanelBtns.array[i]);
        }
        
    for (var i=0;i<6;i++)
        {
            if (heroes.array[bGround.hero].posInArmy===i&&heroes.array[bGround.hero].alive===true){
                image(heroes.array[bGround.hero].face,battlePanelBtns.array[i].x1,battlePanelBtns.array[i].y1,battlePanelBtns.array[i].x2,battlePanelBtns.array[i].y2);
            }
            if (heroes.array[bGround.hero].army[i]){
                image(heroes.array[bGround.hero].army[i].face,battlePanelBtns.array[i].x1,battlePanelBtns.array[i].y1,battlePanelBtns.array[i].x2,battlePanelBtns.array[i].y2);
            }
            if (enemies.array[bGround.enemy].army[i].face){
                image(enemies.array[bGround.enemy].army[i].face,battlePanelBtns.array[i+6].x1,battlePanelBtns.array[i+6].y1,battlePanelBtns.array[i].x2,battlePanelBtns.array[i].y2);
            }
        }
};

var drawBattle = function(){
    
    if(bGround.r>=27){bGround.r-=5;bGround.r1-=5;
    
    noFill();
    strokeWeight(14);
    stroke(240, 66, 3);
    for (var j=0;j<360;j=j+60){
    
    
    
    var x1=bGround.x+bGround.r2*cos(bGround.r+j);
    var y1=bGround.y+bGround.r2*sin(bGround.r+j);
    var x2=bGround.x+bGround.r1*cos(bGround.r+j);
    var y2=bGround.y+bGround.r1*sin(bGround.r+j);
    var x3=bGround.x+(bGround.r2-bGround.r1)*5/4*cos(bGround.r+j-50);
    var y3=bGround.y+(bGround.r2-bGround.r1)*5/4*sin(bGround.r+j-50);
    var x4=bGround.x+(bGround.r2-bGround.r1)*1/4*cos(bGround.r+j-50);
    var y4=bGround.y+(bGround.r2-bGround.r1)*1/4*sin(bGround.r+j-50);

    bezier(x1, y1, x3, y3, x4, y4, x2, y2);
    }

}
    
    else{
        var sides=6;//move to 6 when game is done
        
        drawBattleScene(bScene.currentSelected);
        if (!Act.inProgress&&BQueue.totalQ>0&&heroRet===false){
            drawBSelector(BGP.positions[BQueue.array[0]][0],BGP.positions[BQueue.array[0]][1],BGP.width,1);
        }
        
        var obu=OverBattleUnits();
        var ov=overQueue();
        for (var i=0;i<12;i++){
                battlePanelBtns.array[i].lock=0;
            }
        
        if ((obu!==-1)&&(BQueue.array[0]<sides)&&(!Act.inProgress)&&(heroRet===false)){
            if (selectorColor(BQueue.array[0],obu)===0||selectorColor(BQueue.array[0],obu)===3){
                drawAllSelectors(BQueue.array[0],selectorColor(BQueue.array[0],obu));
            }
            drawBSelector(BGP.positions[obu][0],BGP.positions[obu][1],BGP.width,selectorColor(BQueue.array[0],obu));
            battlePanelBtns.array[obu].lock=1;
        }
        if ((ov!==-1)){
            battlePanelBtns.array[BQueue.array[ov]].lock=1;
        }
        
        if ((overQueue()!==-1)&&(BQueue.array[0]<sides)&&(!Act.inProgress)&&(heroRet===false)){
            if (selectorColor(BQueue.array[0],overQueue())===0||selectorColor(BQueue.array[0],overQueue())===3){
                drawAllSelectors(BQueue.array[0],selectorColor(BQueue.array[0],overQueue()));
            }
            drawBSelector(BGP.positions[BQueue.array[overQueue()]][0],BGP.positions[BQueue.array[overQueue()]][1],BGP.width,selectorColor(BQueue.array[0],BQueue.array[ov]));
        }
        if (overBattleMenu()!==-1&&(heroRet===false)){
            if (BQueue.array[0]<sides){
                if (selectorColor(BQueue.array[0],overBattleMenu())===0||selectorColor(BQueue.array[0],overBattleMenu())===3){
                drawAllSelectors(BQueue.array[0],selectorColor(BQueue.array[0],overBattleMenu()));
            }
                drawBSelector(BGP.positions[overBattleMenu()][0],BGP.positions[overBattleMenu()][1],BGP.width,selectorColor(BQueue.array[0],overBattleMenu()));
            }
            battlePanelBtns.array[overBattleMenu()].lock=1;
            if (overBattleMenu()===heroes.array[bGround.hero].posInArmy&&heroes.array[bGround.hero].alive===true)
            {
                drawUnitRect4(125,0,150,143,heroes.array[bGround.hero]);
            }
            if (overBattleMenu()<sides&&heroes.array[bGround.hero].army[overBattleMenu()])
            {
                drawUnitRect4(125,0,150,143,heroes.array[bGround.hero].army[overBattleMenu()]);
            }
            if (overBattleMenu()>=sides&&enemies.array[bGround.enemy].army[overBattleMenu()-6].face)
            {
                drawUnitRect4(125,0,150,143,enemies.array[bGround.enemy].army[overBattleMenu()-6]);
            }
        }
        
        if (smove===smaxMove||smove===-1*sminMove){
        smoveInc=-1*smoveInc;
        }
        smove=smove+smoveInc;
        
        noStroke();
        //stroke(0, 0, 0);
        
        for (var i=0;i<3;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].health>0){
                if (Act.Session!==11){
                image(heroes.array[bGround.hero].army[i].face,BGP.positions[i][0],BGP.positions[i][1],BGP.width,BGP.height);
                }
                drawLifeBar(i,heroes.array[bGround.hero].army[i].health,heroes.array[bGround.hero].army[i].maxhealth);
            }
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].health>0){
                if (Act.Session!==11){
                scale(-1, 1);
                image(enemies.array[bGround.enemy].army[i].face,-1*BGP.positions[i+6][0]-BGP.width,BGP.positions[i+6][1],BGP.width,BGP.height);
                scale(-1, 1);
                }
                drawLifeBar(i+6,enemies.array[bGround.enemy].army[i].health,enemies.array[bGround.enemy].army[i].maxhealth);
            }
            if(heroes.array[bGround.hero].posInArmy===i&&heroes.array[bGround.hero].health>1){
                if (Act.Session!==11){
                image(heroes.array[bGround.hero].face,BGP.positions[i][0],BGP.positions[i][1],BGP.width,BGP.height);
                }
                drawLifeBar(i,heroes.array[bGround.hero].health,heroes.array[bGround.hero].maxhealth);
            }
            ///////////+3
            if (heroes.array[bGround.hero].army[i+3]&&heroes.array[bGround.hero].army[i+3].health>0){
                if (Act.Session!==11){
                image(heroes.array[bGround.hero].army[i+3].face,BGP.positions[i+3][0],BGP.positions[i+3][1],BGP.width,BGP.height);
                }
                drawLifeBar(i+3,heroes.array[bGround.hero].army[i+3].health,heroes.array[bGround.hero].army[i+3].maxhealth);
            }
            if (enemies.array[bGround.enemy].army[i+3].face&&enemies.array[bGround.enemy].army[i+3].health>0){
                if (Act.Session!==11){
                scale(-1, 1);
                image(enemies.array[bGround.enemy].army[i+3].face,-1*BGP.positions[i+3+6][0]-BGP.width,BGP.positions[i+3+6][1],BGP.width,BGP.height);
                scale(-1, 1);
                }
                drawLifeBar(i+3+6,enemies.array[bGround.enemy].army[i+3].health,enemies.array[bGround.enemy].army[i+3].maxhealth);
            }
            if(heroes.array[bGround.hero].posInArmy===i+3&&heroes.array[bGround.hero].health>1){
                if (Act.Session!==11){
                image(heroes.array[bGround.hero].face,BGP.positions[i+3][0],BGP.positions[i+3][1],BGP.width,BGP.height);
                }
                drawLifeBar(i+3,heroes.array[bGround.hero].health,heroes.array[bGround.hero].maxhealth);
            }
            
            
        }
        
    if (Act.Session===2){
       doAnimation();
    }
        
    if (Act.Session===5){
       fadeUnits();
    }
    
    if (Act.Session===9){
        if (checkBVicory()&&btnb14.lock===1){
            drawXP();
        }else{
            Act.Session++;
        }
    }
    
    if (Act.Session===11){
        upgradeUnitsAnim();
    }
    
    if (heroRet===true){
       fadeHero();
    }
        
        //draw damage
    if (dArray.state>0){
        drawDamage();
    }
        
    //text("heigth : "+BQueue.height,10,10);
    //text("width : "+BQueue.width,10,30);
    //text("total soldiers : "+BQueue.totalN,10,50);
    //text("total queue units : "+BQueue.totalQ,10,70);
    
    
    drawBattleButtons();
    
    stroke(0,0,0);
    strokeWeight(1);
    
    var mve=52;
    
    if (ov===BQueue.totalQ-1&&ov!==1){mve=102;}
    if (ov===0){mve=2;}
    
    if (ov!==-1){
            if (BQueue.array[ov]===heroes.array[bGround.hero].posInArmy&&heroes.array[bGround.hero].alive===true)
            {
                drawUnitRect5(2+BQueue.width*overQueue()-mve,200,149,143,heroes.array[bGround.hero]);
            }
            if (BQueue.array[ov]<6&&heroes.array[bGround.hero].army[BQueue.array[ov]])
            {
                drawUnitRect5(2+BQueue.width*ov-mve,200,149,143,heroes.array[bGround.hero].army[BQueue.array[ov]]);
            }
            if (BQueue.array[ov]>=6&&enemies.array[bGround.enemy].army[BQueue.array[ov]-6].face)
            {
                drawUnitRect5(2+BQueue.width*ov-mve,200,149,143,enemies.array[bGround.enemy].army[BQueue.array[ov]-6]);
            }
        }
    
    //drawQueue 
    drawQueue(ov,obu,overBattleMenu());
    }
    
};

var resetQueueSpeeds = function(){
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]){
                heroes.array[bGround.hero].army[i].queueSpeed=0;
            }
    }
    for (var i=0;i<6;i++){
            if (enemies.array[bGround.enemy].army[i].face){
                enemies.array[bGround.enemy].army[i].queueSpeed=0;
            }
    }
    
    heroes.array[bGround.hero].queueSpeed=0;

};

var initQueue = function(){
    var current=0;
    var speed=-1;
    var oldspeed=-1;
    
    while(current<BQueue.totalQ){
    
    oldspeed=round(speed);
    if (current%BQueue.totalN===0){
        oldspeed=-1;
    }
    speed=-1;
    //calculate max speed on field
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].speed+heroes.array[bGround.hero].army[i].queueSpeed>speed&&checkAheadQueue(current,i)){
                speed=heroes.array[bGround.hero].army[i].speed+heroes.array[bGround.hero].army[i].queueSpeed;
            }
    }
    for (var i=0;i<6;i++){
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].speed+enemies.array[bGround.enemy].army[i].queueSpeed>speed&&checkAheadQueue(current,i+6)){
                speed=enemies.array[bGround.enemy].army[i].speed+enemies.array[bGround.enemy].army[i].queueSpeed;
            }
    }
    if (heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed>speed&&checkAheadQueue(current,heroes.array[bGround.hero].posInArmy)&&heroes.array[bGround.hero].alive===true){
        speed=heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed;
    }
    
    //add unit with max speed into que
    for (var i=5;i>-1;i--){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].speed+heroes.array[bGround.hero].army[i].queueSpeed===speed&&checkAheadQueue(current,i)){
                BQueue.array[current]=i;
            }
    }
    for (var i=5;i>-1;i--){
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].speed+enemies.array[bGround.enemy].army[i].queueSpeed===speed&&checkAheadQueue(current,i+6)){
                BQueue.array[current]=i+6;
            }
    }
    if (heroes.array[bGround.hero].speed+heroes.array[bGround.hero].queueSpeed===speed&&checkAheadQueue(current,heroes.array[bGround.hero].posInArmy)&&heroes.array[bGround.hero].alive===true){
        BQueue.array[current]=heroes.array[bGround.hero].posInArmy;
    }
    
    //adding queue speed
    if (oldspeed!==round(speed)){
    
    for (var i=0;i<6;i++){
            if (heroes.array[bGround.hero].army[i]&&heroes.array[bGround.hero].army[i].speed===round(speed)&&i!==BQueue.array[current]){
                heroes.array[bGround.hero].army[i].queueSpeed+=0.01;
            }
    }
    for (var i=0;i<6;i++){
            if (enemies.array[bGround.enemy].army[i].face&&enemies.array[bGround.enemy].army[i].speed===round(speed)&&i+6!==BQueue.array[current]){
                enemies.array[bGround.enemy].army[i].queueSpeed+=0.01;
            }
    }
    if (heroes.array[bGround.hero].speed===round(speed)&&heroes.array[bGround.hero].posInArmy!==BQueue.array[current]&&heroes.array[bGround.hero].alive===true){
        heroes.array[bGround.hero].queueSpeed+=0.01;
    }
    
    }
    
    current++;
    
    }
    
};

var drawVictoryScreen = function(){
    
    background(195, 208, 240);
    
    var f = createFont("Lucida Sans", 20);
    textFont(f, 20);
    
    fill(226, 255, 61);
    textFont(f, 60);
    fill(255, 33, 33);
    text("Victory", 100, 86);
    
    textFont(f, 58);
    fill(33, 44, 255);
    text("Victory", 104, 88);
    
    textFont(f, 56);
    fill(255, 222, 8);
    text("Victory", 108, 90);
    
    
    
    fill(75, 240, 67);
    quad(100, 100, 300, 100, 400, 350, 0, 350);
    
    var i=206;
    var j=155;
    var Initbl=60;
    //trees
    image(tree2Img, 220, 80 ,30,40);
    image(tree2Img, 250, 80 ,30,40);
    image(tree2Img, 280, 80 ,30,40);
    image(tree2Img, 253, 100 ,33,43);
    image(tree2Img, 285, 100 ,33,43);
    image(tree2Img, 291, 120 ,35,45);
    
    image(tree3Img, 150, 80 ,30,40);
    image(tree3Img, 120, 80 ,30,40);
    image(tree3Img, 90, 80 ,30,40);
    image(tree3Img, 83, 100 ,33,43);
    image(tree3Img, 113, 100 ,33,43);
    image(tree3Img, 75, 120 ,35,45);
    
    image(tree5Img, 310, 172 ,30,45);

    image(tree2Img, 10,260,55,72);
    
    var mLevel=0;
    var mXP=0;
    var tHero=-1;
    for(var i=0;i<heroes.array.length;i++){
        if (heroes.array[i].level>mLevel)
        {
            mLevel=heroes.array[i].level;
        }
    }
    
    for(var i=0;i<heroes.array.length;i++){
        if (heroes.array[i].level===mLevel)
        {
            if (heroes.array[i].XP>=mXP){
                mXP=heroes.array[i].XP;
                tHero=i;
            }
        }
    }
    
if (heroes.array[tHero].army[3]){image(heroes.array[tHero].army[3].face,180,180,47,50);}
if (heroes.array[tHero].army[4]){image(heroes.array[tHero].army[4].face,120,180,47,50);}
if (heroes.array[tHero].army[5]){image(heroes.array[tHero].army[5].face,230,180,47,50);}
    
if (heroes.array[tHero].army[0]){image(heroes.array[tHero].army[0].face,160,230,52,55);}
if (heroes.array[tHero].army[1]){image(heroes.array[tHero].army[1].face,90,230,52,55);}
if (heroes.array[tHero].army[2]){image(heroes.array[tHero].army[2].face,250,230,52,55);}
    
    image(heroes.array[tHero].face,170,260,65,75);
    
    textFont(f, 12);
    fill(167, 50, 214);
    text("You have cleared all the monsters from the forest in "+gDay+" days", 25, 372);
};

var draw = function() {
     noStroke();
     noTint();// tint bug fix
   
if (worldstate===0){
    drawInitScreen();
    var startBtn = button(245,323,113,31,10);
    drawBtn(startBtn);
    if ((mouseX>245)&&(mouseY>323)&&(mouseX<245+113)&&(mouseY<323+31)&&(mouseIsPressed)){
        worldstate=1;
        mouseLock=1;
    }
}

if (worldstate===1){   

    // draw sky
    background(195, 208, 240);

    //verify if there are heroes in the house
    myHouse.inHouse=-1;
    for (var ind=0; ind<heroes.array.length;ind++) {
    if(((heroes.array[ind].x===startX)&&(heroes.array[ind].y===startY-1))){
        myHouse.inHouse=ind;
    }
}
    
    if((mouseIsPressed)&&(mouseLock===0)&&(eMenu.show===false)&&(vMenu.show===false)&&(overMenu()!==-1)&&(avUpgr.upgradeHero===-1)){
        pressButton(overMenu());
        mouseLock=1;
        ithemSelected=-1;
    }

    if((mouseIsPressed===true)&&(mouseLock===0)&&(overUpgradeButtons()!==-1)&&(avUpgr.upgradeHero!==-1)){
        mouseLock=1;
        pressUpgradeBtn(overUpgradeButtons());    
    }
    
    if((mouseIsPressed)&&(mouseLock===0)&&(eMenu.show===false)&&(vMenu.show===false)&&(overMenu()===-1)&&(avUpgr.upgradeHero===-1)){
        if (heroOutsidePanel.active===true){
            if (overPannelButtons(nearHero(heroOutsidePanel.hero))!==-1)
                {
                    mInX=mouseX;mInY=mouseY;
                    pressUnitPanelBtn(overPannelButtons(nearHero(heroOutsidePanel.hero)),nearHero(heroOutsidePanel.hero));
                    
                }
            else{
                ithemSelected=-1;
            }
            mouseLock=1;
            //(overHeroPanel()===true)&&
        }else if(EnemyPanel.active===true){
        }else if(vMenu.show===true){
        }else{
        heroOutsidePanel.active=false;
        for (var i=0;i<heroPanelBtns.array.length;i++){
            heroPanelBtns.array[i].lock=0;
        }
         var nowX=round(((mouseX-offsetX-(blocksize/2))/blocksize));
         var nowY=round((mouseY-offsetY-(blocksize/2))/(blocksize/2));
        mouseLock=1;
        if ((curSel.selected===1)&&(curSel.x===nowX)&&(curSel.y===nowY)){
            curSel.selected=0;
        }else{
            if ((curSel.selected===1)&&(curSel.x===startX)&&(curSel.y===startY-1)&&((nowX===startX-1)||(nowX===startX+1)||((nowX===startX)))&&((nowY===startY-1)||(nowY===startY-2)||(nowY===startY-3))){curSel.selected=0;}
            else{
                curSel.x=nowX;
                curSel.y=nowY;
                curSel.selected=1;
            }
        }

var ind;

var over=true;
for (ind=0; ind<heroes.array.length;ind++) {
   if ((heroes.array[ind].x===curSel.x)&&(heroes.array[ind].y===curSel.y)) {
       var sel2=false;
       for (var ind2=0; ind2<heroes.array.length;ind2++){
           if (heroes.array[ind].selected===1){sel2=true;}
       }
       if (sel2===false)
       {over = false;}
       
   }
   }

CalculateAIPaths();
if((tMap.map[curSel.x])&&(tMap.map[curSel.x][curSel.y]>=10)&&(myHouse.inHouse===-1)){
    curSel.x=startX;curSel.y=startY-1;
}

for (ind=0; ind<heroes.array.length;ind++) {
if ((heroes.array[ind].selected===1)&&over){
    if ((tMap.map[curSel.x])&&((tMap.map[curSel.x][curSel.y] === 0)||(tMap.map[curSel.x][curSel.y]>10))&&(AIM.map[curSel.x][curSel.y]<heroes.array[ind].walkpoints)){
        //||(tMap.map[curSel.x][curSel.y]>10)
        //heroes.array[ind].x=curSel.x; 
        //heroes.array[ind].y=curSel.y;
        curSel.selected=0;
        heroes.array[ind].selected=0;
        
        heroes.array[ind].nowFrame=frameCount;
        
        //adding the AI path
        heroes.array[ind].AIpath.push([curSel.x,curSel.y]);
        var tmpx=curSel.x;
        var tmpy=curSel.y;
        while (AIM.map[tmpx][tmpy]>0){
            var auxx=tmpx;
            var auxy=tmpy;
        if(checkCoord(tmpx-1,tmpy)){
        if (AIM.map[tmpx-1][tmpy]<AIM.map[auxx][auxy])
            {auxx=tmpx-1;auxy=tmpy;}}
            
        if(checkCoord(tmpx-1,tmpy-1)){
        if (AIM.map[tmpx-1][tmpy-1]<AIM.map[auxx][auxy])
            {auxx=tmpx-1;auxy=tmpy-1;}}
            
        if(checkCoord(tmpx-1,tmpy+1)){
        if (AIM.map[tmpx-1][tmpy+1]<AIM.map[auxx][auxy])
            {auxx=tmpx-1;auxy=tmpy+1;}}
            
        if(checkCoord(tmpx,tmpy-1)){
        if (AIM.map[tmpx][tmpy-1]<AIM.map[auxx][auxy])
            {auxx=tmpx;auxy=tmpy-1;}}
            
        if(checkCoord(tmpx,tmpy+1)){
        if (AIM.map[tmpx][tmpy+1]<AIM.map[auxx][auxy])
            {auxx=tmpx;auxy=tmpy+1;}}
            
        if(checkCoord(tmpx+1,tmpy)){
        if (AIM.map[tmpx+1][tmpy]<AIM.map[auxx][auxy])
            {auxx=tmpx+1;auxy=tmpy;}}
            
        if(checkCoord(tmpx+1,tmpy-1)){
        if (AIM.map[tmpx+1][tmpy-1]<AIM.map[auxx][auxy])
            {auxx=tmpx+1;auxy=tmpy-1;}}
            
        if(checkCoord(tmpx+1,tmpy+1)){
        if (AIM.map[tmpx+1][tmpy+1]<AIM.map[auxx][auxy])
            {auxx=tmpx+1;auxy=tmpy+1;}}
               
        tmpx=auxx;
        tmpy=auxy;
        heroes.array[ind].AIpath[heroes.array[ind].AIpath.length]=[];
        heroes.array[ind].AIpath[heroes.array[ind].AIpath.length-1][0]=tmpx;
        heroes.array[ind].AIpath[heroes.array[ind].AIpath.length-1][1]=tmpy;
        }
        
    }
    else {
        heroes.array[ind].selected=0;
    }
}
}
}
}

for (var is=0; is<heroes.array.length;is++) {
    for (var i1 =heroes.array[is].radius; i1>0; i1-=1)
        {
            for (var i2 =0 ; i2<heroes.array[is].radius+1-i1;i2+=1){
                
        if(checkCoord(heroes.array[is].x+i1-1,heroes.array[is].y+i2)){            
        fow.map[heroes.array[is].x+i1-1][heroes.array[is].y+i2]=0; addToPixelMinimap(heroes.array[is].x+i1-1,heroes.array[is].y+i2);} 
        
        if(checkCoord(heroes.array[is].x-i1+1,heroes.array[is].y+i2)){  
         fow.map[heroes.array[is].x-i1+1][heroes.array[is].y+i2]=0;addToPixelMinimap(heroes.array[is].x-i1+1,heroes.array[is].y+i2);}
         
         if(checkCoord(heroes.array[is].x+i1-1,heroes.array[is].y-i2)){
              fow.map[heroes.array[is].x+i1-1][heroes.array[is].y-i2]=0;addToPixelMinimap(heroes.array[is].x+i1-1,heroes.array[is].y-i2);}
              
        if(checkCoord(heroes.array[is].x-i1+1,heroes.array[is].y-i2)){ 
              fow.map[heroes.array[is].x-i1+1][heroes.array[is].y-i2]=0;addToPixelMinimap(heroes.array[is].x-i1+1,heroes.array[is].y-i2);}
}
}
}

if(mouseIsPressed){
        mouseLock=1;
}

fill(247, 255, 0);

if((mouseIsPressed===false)&&(mouseLock===1)){
    mouseLock=0;
    if((heroOutsidePanel.hero!==-1)&&(overPannelButtons(nearHero(heroOutsidePanel.hero))!==-1)&&(ithemSelected!==-1)){
            if(ithemSelected!==overPannelButtons(nearHero(heroOutsidePanel.hero))){
                movePannelItem(ithemSelected,overPannelButtons(nearHero(heroOutsidePanel.hero)));
            }
    }
    ithemSelected=-1;
}

if((mouseIsPressed===true)&&(mouseLock===1)&&(overMenu()===3))
{
    pressButton(overMenu());
}


if((mouseIsPressed===true)&&(mouseLock===1)&&(ithemSelected!==-1)&&((mInX!==mouseX)||(mInY!==mouseY))){
        if (ithemSelected!==-1){noCursor();}
            moveUnitInPanel();
} else{
        offX = 0;
        offY = 0;
        cursor();
 }

    for (var i = 0 ;i < gMap.sizeX ; i+=1 ){
        for (var j = 0 ;j < gMap.sizeY ; j+=1 )
        {
        
// draw land

drawGrownd(gMap.map[i][j],i*blocksize+offsetX,j*(blocksize/2)+offsetY);

  //draw seletor
   if ((curSel.selected===1)&&(curSel.x>=0)&&(curSel.x<gMap.sizeX)&&(curSel.y>=0)&&(curSel.y<gMap.sizeY)&&(gMap.map[curSel.x][curSel.y] !== -1)&&(curSel.x===i)&&(curSel.y===j)){
        if(tMap.map[curSel.x][curSel.y]>=10){
        }
        else{
        image(selectorImg, curSel.x*blocksize+offsetX, curSel.y*(blocksize/2)+offsetY-blocksize/4 ,blocksize,blocksize);
        }
    }

//draw monsters
for (var ih=0; ih<enemies.array.length ;ih+=1){
    if((enemies.array[ih].x===i)&&(enemies.array[ih].y===j)&&(fow.map[i][j]!==fowstandard))
       {
           var lead=0;
           while (!enemies.array[ih].army[lead].face){
                lead++;  
           }
           noFill();
           stroke(242, 56, 53);
           ellipse(i*blocksize+offsetX+blocksize/2, j*(blocksize/2)+offsetY-blocksize/4+blocksize/1.3 , blocksize/1.6, blocksize/3);
           image(enemies.array[ih].army[lead].face, i*blocksize+offsetX+blocksize/12, j*(blocksize/2)+offsetY-blocksize/4+blocksize/12 ,blocksize/1.2,blocksize/1.2);
           noStroke();
       }
}

if (fow.map[i][j]!==fowstandard){
    if(tMap.map[curSel.x]&&tMap.map[curSel.x][curSel.y]>=10){
    drawTree(i*blocksize+offsetX,j*(blocksize/2)+offsetY-blocksize/4,tMap.map[i][j],1);}
    else{drawTree(i*blocksize+offsetX,j*(blocksize/2)+offsetY-blocksize/4,tMap.map[i][j],0);}
// draw trees          
        }
// fog of war
else{
            image(fogOfWarImg, i*blocksize+offsetX, j*(blocksize/2)+offsetY+(blocksize/4)+(blocksize/32) ,blocksize,blocksize/2);
            }
//uncoment this for full AIM            
//text(AIM.map[i][j],i*blocksize+offsetX,j*(blocksize/2    )+offsetY+(blocksize/2));
for (indx=0; indx<heroes.array.length;indx++) {
if (heroes.array[indx].selected===1){
    if ((AIM.map[i][j]>=heroes.array[indx].walkpoints)&&((tMap.map[i][j]<10)||(AIM.map[startX][startY-1]>=heroes.array[indx].walkpoints))){
    image(grayImg, i*blocksize+offsetX,j*(blocksize/2    )+offsetY+(blocksize/4) ,blocksize,blocksize);
    
    }   
}}


//draw heroes
for (var ih=0; ih<heroes.array.length ;ih+=1){
    if((heroes.array[ih].x===i)&&(heroes.array[ih].y===j))
       {drawHeroe(ih);}
    
    if(heroes.array[ih].AIpath.length>0){
    if((heroes.array[ih].AIpath[heroes.array[ih].AIpath.length-1][0]===i)&&(heroes.array[ih].AIpath[heroes.array[ih].AIpath.length-1][1]===j))
        {drawHeroe(ih);}
        
//bug fix
   if((heroes.array[ih].AIpath[heroes.array[ih].AIpath.length-1][0]===i-1)&&(heroes.array[ih].AIpath[heroes.array[ih].AIpath.length-1][1]===j)){drawHeroe(ih);}
    }
    
}

        }
}


//draw reward
if (reward.nrOfPhases>=reward.currentIncrement&&avUpgr.upgradeHero===-1){
    drawReward();
}


//move hero

var jump =-2;

for (indx=0; indx<heroes.array.length;indx++) {
    if (heroes.array[indx].AIpath.length>0){ 
        
        var wherex=heroes.array[indx].AIpath[heroes.array[indx].AIpath.length-1][0]-heroes.array[indx].x;
        var wherey=heroes.array[indx].AIpath[heroes.array[indx].AIpath.length-1][1]-heroes.array[indx].y;
        
        if ((frameCount-heroes.array[indx].nowFrame) % 12 === 2){
            heroes.array[indx].offsetX=round(blocksize/12)*2*wherex;
            heroes.array[indx].offsetY=jump+round(blocksize/24)*2*wherey;
        }
        if ((frameCount-heroes.array[indx].nowFrame) % 12 === 4){
            heroes.array[indx].offsetX=round(blocksize/12)*4*wherex;
            heroes.array[indx].offsetY=0+round(blocksize/24)*4*wherey;
        } 
        if ((frameCount-heroes.array[indx].nowFrame) % 12 === 6){
            heroes.array[indx].offsetX=round(blocksize/12)*6*wherex;
            heroes.array[indx].offsetY=jump+round(blocksize/24)*6*wherey;
        }
        if ((frameCount-heroes.array[indx].nowFrame) % 12 ===8){
            heroes.array[indx].offsetX=round(blocksize/12)*8*wherex;
            heroes.array[indx].offsetY=0+round(blocksize/24)*8*wherey;
        }

        if ((frameCount-heroes.array[indx].nowFrame) % 12 === 10){
            heroes.array[indx].offsetX=round(blocksize/12)*10*wherex;
            heroes.array[indx].offsetY=jump+round(blocksize/24)*10*wherey;
        }

        if ((frameCount-heroes.array[indx].nowFrame) % 12 === 0){
            
            var AIMX=heroes.array[indx].AIpath[heroes.array[indx].AIpath.length-1][0];
            var AIMY=heroes.array[indx].AIpath[heroes.array[indx].AIpath.length-1][1];
            
            if (isMonster(AIMX,AIMY)===false){
                heroes.array[indx].walkpoints=heroes.array[indx].walkpoints-(AIM.map[AIMX][AIMY]-AIM.map[heroes.array[indx].x][heroes.array[indx].y]);
            }else{
                var coef=1;
                if (((heroes.array[indx].x-AIMX)*(heroes.array[indx].x-AIMX)===1)&&((heroes.array[indx].y-AIMY)*(heroes.array[indx].y-AIMY)===1)){
                    coef=1.5;
                }
                var hdval=(handicap[gMap.map[AIMX][AIMY]]+handicap[gMap.map[AIMX-1][AIMY-1]])*coef;
                heroes.array[indx].walkpoints=heroes.array[indx].walkpoints-hdval;
            }
                   
            heroes.array[indx].x=AIMX;
            heroes.array[indx].y=AIMY;
            
            heroes.array[indx].AIpath.pop();
            heroes.array[indx].offsetX=0;
            heroes.array[indx].offsetY=0;
        }
    }
}

fill(255, 0, 0);

//for (indx=0; indx<heroes.array.length;indx++) {
//    for (indy=0; indy<heroes.array[indx].AIpath.length;indy++){
//        text(
//        AIM.map[heroes.array[indx].AIpath[indy][0]][heroes.array[indx].AIpath[indy][1]],
//        heroes.array[indx].AIpath[indy][0]*blocksize+offsetX,
//        heroes.array[indx].AIpath[indy][1]*(blocksize/2    )+offsetY+(blocksize/2));
//    }
//}

//fill(255, 255, 255);

//mouse 
    
//map movement    
    if ((mouseX<20)&&(mouseX>0)){offsetX+=mouseSpeed; }
    if ((mouseX>380)&&(mouseX<400)){offsetX-=mouseSpeed; }
    if ((mouseY<20)&&(mouseY>0)){offsetY+=mouseSpeed; }
    if ((mouseY>380)&&(mouseY<400)){offsetY-=mouseSpeed; }
    
    //text(heroes.array.indexOf(0), 50, 50);  
    
    for (indx=0;indx<menuBtns.array.length;indx++)
    {
        drawBtn(menuBtns.array[indx]);
    }

    drawUnitRectangle();
    drawEnemyRectangle();
    if(eMenu.show===true){
        drawError();
    }
    
    if (CheckVictory()){
        vMenu.show=true;
    }
 
    if(GoToBattle()){
        bScene.currentSelected=floor(random(0,bScene.totalScenes));
        BQueue.totalN=calcTotalN(bGround.hero,bGround.enemy);
        BQueue.totalQ=8;
        BQueue.played=0;
        BQueue.playedAK=0;
        btnb12.lock=0;btnb13.lock=0;btnb14.lock=1;
        calculateBattleXP();
        calculateBattleReward();
        resetQueueSpeeds();
        initQueue();
        checkHeroAlone();
        
        
        bGround.r=270;
        bGround.r1=250;

        if (heroes.array[bGround.hero].alive===true)//reset in case hero is dead
        {
            heroRet=false;
        }else{
            if (BQueue.isHeroAlone===false){
                heroRet=true;
            }else{
                heroRet=false;
            }
            
            minTrans=0;
            maxTrans=255;
        }
        
        //debug("heroAlive=",heroes.array[bGround.hero].alive,"hroRet=",heroRet,"BQueue.IsHeroAlone=",BQueue.isHeroAlone);
        
        worldstate=4;
    }

    drawVictory();
    
    //gold
    fill(247, 255, 0);
    text(gold, 365, 25); 
    fill(255, 255, 255);
    image(goldImg, 340, 0 ,20,30);
    
    //day
    drawClock();
    fill(255, 0, 64);
    text("Day "+gDay, 355, 340); 
    fill(255, 255, 255);
    
    
    drawUpgradeRectangle();
}

if (worldstate===3){
    
    //verify if there are heroes in the house
    myHouse.inHouse=-1;
    for (var ind=0; ind<heroes.array.length;ind++) {
    if(((heroes.array[ind].x===startX)&&(heroes.array[ind].y===startY-1))){
        myHouse.inHouse=ind;
    }
}

    drawInsideHouse();
    
    if((mouseIsPressed)&&(overUnitMenu()!==-1)&&(mouseLock===0)&&(eMenu.show===false)&&(checkOver()===false)&&(hMenu.pressed!==-1)){
        mouseLock=1;
        var pos=-1;
        for (var i=0; i<12;i++){
            if (houseBtns.array[i].lock===1){
                pos=i;
            }
        }
        pressUnitButton(overUnitMenu(),pos);
        mInX=mouseX;mInY=mouseY;
    }
    
    if((mouseIsPressed)&&(overHouseMenu()!==-1)&&(mouseLock===0)&&(eMenu.show===false)){
        mouseLock=1;
        pressHouseButton(overHouseMenu());
        mInX=mouseX;mInY=mouseY;
        if (checkOverNoLock()===true){
            ithemSelected=overHouseMenu();
        }
    }
    
    
    if(eMenu.show===true){
        drawError();
    }
    
    if(mouseIsPressed){
        mouseLock=1;
    }
    
    if((mouseIsPressed===false)&&(mouseLock===1)){
        mouseLock=0;
        if((overHouseMenu()!==-1)&&(ithemSelected!==-1)){
            moveItem(ithemSelected,overHouseMenu());
        }
        
        ithemSelected=-1;
    }
    
    if((mouseIsPressed===true)&&(mouseLock===1)&&((mInX!==mouseX)||(mInY!==mouseY))){
        if (ithemSelected!==-1){noCursor();}
        moveUnitInMenu();
    }
    else{
        offX = 0;
        offY = 0;
        cursor();
    }
}

if (worldstate===4){
    var over=-1;
    if (OverBattleUnits()!==-1){
        over=OverBattleUnits();
    }
    if (overQueue()!==-1){
        over=BQueue.array[overQueue()];
    }
    if (overBattleMenu()!==-1){
        over=overBattleMenu();
    }
    
    if((mouseIsPressed===false)&&(mouseLock===1)){
        mouseLock=0;
    }
    if(mouseIsPressed&&over!==-1&&(btnb14.lock===1||BQueue.array.length!==0)&&(selectorColor(BQueue.array[0],over)===0||selectorColor(BQueue.array[0],over)===3)&&mouseLock===0&&(!Act.inProgress)&&(heroRet===false)&&(BQueue.array[0]<6||BQueue.array[0]===undefined)){
        mouseLock=1;
        checkQueueSkip();
        BQueue.skip=BQueue.totalQ;
        BQueue.attacker=BQueue.array[0];
        BQueue.attacked=over;
        initAction();
    }
    if((BQueue.array[0]>5)&&(!Act.inProgress)&&(heroRet===false)){
        if(bGround.r<27&&queueOffset===0){
            if (IAwait===maxIAwait){
                IAwait=0;
                BQueue.skip=BQueue.totalQ;
                BQueue.attacker=BQueue.array[0];
                //debug("heuristic is "+calculateAIHeuristic(createLivesArrayIAC()));
                var attackIt=calculateIAAttackNext(0,createLivesArrayIAC());
                if (attackIt!==undefined)
                {
                    BQueue.attacked=attackIt;
                    initAction();
                }
                else
                {
                    if (battlePanelBtns.array[12].lock===0)
                    {pressRBButton(12);}
                    else{pressRBButton(13);}
                }
            }else{
                IAwait++;
            }
        }
    }
    if (Act.inProgress){
        doAction();
    }
    if(BQueue.totalQ===0){
        battlePanelBtns.array[12].lock=1;
        battlePanelBtns.array[13].lock=1;
    }
    drawBattle();
    if(mouseIsPressed&&overRBMenu()!==-1&&mouseLock===0&&(!Act.inProgress)&&battlePanelBtns.array[overRBMenu()].lock===0&&(heroRet===false)&&(BQueue.array[0]<6||BQueue.array[0]===undefined)){
        pressRBButton(overRBMenu());
        mouseLock=1;
        
    }
}

if (worldstate===5){
    drawVictoryScreen();
}

};
