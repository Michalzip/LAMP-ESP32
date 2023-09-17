#include "FireLight.h"
#include <FastLED.h>

FireLight::FireLight(Board &board) : board(board)
{
}

bool gReverseDirection = false;

void FireLight::setFireLight()
{

    static uint8_t heat[NUM_LEDS];

    CRGB *leds = board.leds;

    for (int i = 0; i < NUM_LEDS; i++)
    {
        heat[i] = qsub8(heat[i], random8(0, ((COOLING * 10) / NUM_LEDS) + 2));
    }

    for (int k = NUM_LEDS - 1; k >= 2; k--)
    {
        heat[k] = (heat[k - 1] + heat[k - 2] + heat[k - 2]) / 3;
    }

    if (random8() < SPARKING)
    {
        int y = random8(7);
        heat[y] = qadd8(heat[y], random8(160, 255));
    }

    for (int j = 0; j < NUM_LEDS; j++)
    {
        CRGB color = HeatColor(heat[j]);
        int pixelnumber;
        if (gReverseDirection)
        {
            pixelnumber = (NUM_LEDS - 1) - j;
        }
        else
        {
            pixelnumber = j;
        }

        leds[pixelnumber] = color;
    }

    FastLED.show();
    FastLED.delay(1000 / 60);
}