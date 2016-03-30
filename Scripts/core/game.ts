﻿//*********************************************************************
//Source file: game.ts                                                *
//Author name: Kateryna Bilokhvost                                    *
//Initial commit: March 26, 2016                                      *
//Last modified by: Kateryna Bilokhvost                               *
//Last date modified: March 29, 2016                                  *
//Commit history: 13 commits, GitHub Link:                            *
//https://github.com/bilokhvost/COMP397-Asgnmnt3/commits/master       *
//Program description: This is a simple side scrolling 2D arcade game *
// (left to right). The main purpose is to collect as many eggs as it *
// possible and to avoid eagles that steal player’s health..          *
//*********************************************************************
/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;
var totalScore:number;

// Game Scenes
var menu: scenes.Menu;
var play: scenes.Play;
var end: scenes.End;
var instructions: scenes.Instructions;

var assetData:objects.Asset[] = [
    // Add your Assets here
    {id: "StartButton", src:"../../Assets/images/PlayButton.png"},
    {id: "InstructionsButton", src:"../../Assets/images/InstructionsButton.png"},
    {id: "menuBackground", src:"../../Assets/images/menuBackground.png"},
     {id: "instructionsBackground", src:"../../Assets/images/instructionsBackground.jpg"},
     {id: "endBackground", src:"../../Assets/images/endBackground.png"},
    {id: "grass", src:"../../Assets/images/grass.gif"},
    {id: "rabbit", src:"../../Assets/images/rabbit.png"},
    {id: "egg", src:"../../Assets/images/egg.png"},
    {id: "superegg", src:"../../Assets/images/superEgg.png"},
    {id: "eagle", src:"../../Assets/images/eagle.png"},
    {id: "music", src:"../../Assets/audio/bunnyhop.ogg"}, 
    {id: "musicFinal", src:"../../Assets/audio/eastersong.ogg"},
    {id: "eagleEat", src:"../../Assets/audio/eagle.ogg"},
    {id: "eggPick", src:"../../Assets/audio/egg.ogg"},
    {id: "superPick", src:"../../Assets/audio/superEgg.ogg"},
    {id: "bell", src:"../../Assets/audio/bell.ogg"},
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
     // add background music
    createjs.Sound.play("music", { loop: -1 });
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTIONS:
            // show the INSTRUCTIONS scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRUCTIONS Scene");
            break;
         case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;