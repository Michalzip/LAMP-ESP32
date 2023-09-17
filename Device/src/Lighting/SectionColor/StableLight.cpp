
#include <FastLED.h>
#include "StableLight.h"

StableLight::StableLight(Board &board) : board(board)
{
}

void StableLight::setStableLight(uint8_t r, uint8_t g, uint8_t b)
{

    CRGB *leds = board.leds;

    for (int colorLed = 0; colorLed < NUM_LEDS; colorLed = colorLed + 1)
    {
        leds[colorLed] = CRGB(r, g, b);
    }

    FastLED.setBrightness(255);
    FastLED.show();

    delay(1000);
}
