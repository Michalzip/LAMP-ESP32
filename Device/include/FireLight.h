
#pragma once
#include "Board.h"

// highest value = less fire
#define COOLING 55
// higest value = more roaring fire
#define SPARKING 120

class FireLight
{
public:
    FireLight(Board &board);
    void setFireLight();

private:
    Board &board;
};
