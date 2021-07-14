function move(ninja){
    if(keyDown(RIGHT_ARROW)){
        ninja.x += 10;
    }

    if(keyDown(LEFT_ARROW)){
        ninja.x -= 10;
    }
}