#include "BlinkLight.h"
// #include "Board.h"
#include <FastLED.h>

BlinkLight::BlinkLight(Board &board) : w(board)
{
    // Constructor implementation
}

void BlinkLight::setCloudColor(uint8_t r, uint8_t g, uint8_t b)
{

    CRGB *leds = w.leds;

    for (int colorLed = 0; colorLed < NUM_LEDS; colorLed = colorLed + 1)
    {
        leds[colorLed] = CRGB(r, g, b);
    }

    FastLED.setBrightness(255);
    FastLED.show();

    delay(1000);

    FastLED.setBrightness(0);
    FastLED.show();
    delay(1000);
}