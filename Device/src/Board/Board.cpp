#include "Board.h"
#include <FastLED.h>

Board::Board()
{
}

void Board::setupLEDs()
{
    FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
}
