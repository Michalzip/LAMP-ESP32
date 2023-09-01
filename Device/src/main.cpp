#include "HttpController.h"
#include "Board.h"
#include <Arduino.h>
#include <FastLED.h>

HttpController http;
Board board;

void setup()
{
  Serial.begin(921600);

  http.startServer();

  board.setupLEDs();
}

void loop()
{
  http.listenRequest();
}
