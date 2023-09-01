#ifndef BLINKLIGHT_H_
#define BLINKLIGHT_H_
#include "Board.h"

class BlinkLight
{
public:
    BlinkLight(Board &board); // Konstruktor
    void setCloudColor(uint8_t r, uint8_t g, uint8_t b);

private:
    Board &w; // Referencja do Board
};

#endif