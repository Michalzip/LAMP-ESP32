#pragma once
#include <WebServer.h>
#include "Board.h"

class HttpHandlers
{
public:
    HttpHandlers(WebServer &server, Board &board);
    void handleSolidLight();
    void handleSecionRainbowLight();
    void handleSecionFireLight();

private:
    WebServer &server;
    Board &board;
};