#include "RainbowLight.h"
#include <FastLED.h>
#include "Board.h"

RainbowLight::RainbowLight(Board &board) : board(board)
{
}

CRGB Scroll(int pos);

void RainbowLight::setRainbowLight()
{

    for (int j = 0; j < 256; j++)
    {
        for (int i = 0; i < NUM_LEDS; i++)
        {
            board.leds[i] = Scroll((i * 256 / NUM_LEDS + j) % 256);
        }

        FastLED.show();
        delay(1);
    }
}

CRGB Scroll(int pos)
{
    CRGB color(0, 0, 0);
    if (pos < 85)
    {
        color.g = 0;
        color.r = ((float)pos / 85.0f) * 255.0f;
        color.b = 255 - color.r;
    }
    else if (pos < 170)
    {
        color.g = ((float)(pos - 85) / 85.0f) * 255.0f;
        color.r = 255 - color.g;
        color.b = 0;
    }
    else if (pos < 256)
    {
        color.b = ((float)(pos - 170) / 85.0f) * 255.0f;
        color.g = 255 - color.b;
        color.r = 1;
    }
    return color;
}