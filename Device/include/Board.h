#ifndef BOARD_H
#define BOARD_H

#include <FastLED.h>

#define NUM_LEDS 16
#define DATA_PIN 26

class Board
{
public:
    Board();
    void setupLEDs();
    CRGB leds[NUM_LEDS];
};

#endif