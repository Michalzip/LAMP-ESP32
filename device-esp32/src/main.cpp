#include "HttpHandlers.h"
#include "HttpServer.h"
#include "HttpEndpoints.h"
#include "Board.h"
#include <Arduino.h>
#include <FastLED.h>

HttpServer http;
Board board;
HttpEndpoints httpEndpoints(http.server, board);

void setup()
{
  Serial.begin(921600);

  http.startServer();

  board.setupLEDs();

  httpEndpoints.setupEndpoints();
}

void loop()
{

  http.listenRequest();
  delay(2);
  httpEndpoints.handleEndpoints();
}
