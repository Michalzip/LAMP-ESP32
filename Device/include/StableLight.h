#pragma once
#include "Board.h"

class StableLight
{
public:
    StableLight(Board &board);
    void setStableLight(uint8_t r, uint8_t g, uint8_t b);

private:
    Board &board;
};
