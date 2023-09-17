#pragma once
#include <FastLED.h>
#define NUM_LEDS 60
#define DATA_PIN 5

class Board
{
public:
    Board();
    void setupLEDs();
    CRGB leds[NUM_LEDS];

};
