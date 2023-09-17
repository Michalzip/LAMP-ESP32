
#pragma once
#include "Board.h"

class RainbowLight
{
public:
    RainbowLight(Board &board);
    void setRainbowLight();

private:
    Board &board;
};
