#include "HttpHandlers.h"
#include "Board.h"
#include "StableLight.h"
#include "Board.h"
#include "FireLight.h"
#include "RainbowLight.h"

HttpHandlers::HttpHandlers(WebServer &server, Board &board) : server(server), board(board)
{
}

void HttpHandlers::handleSolidLight()
{
    StableLight stableLight(board);
    uint8_t redValue = static_cast<uint8_t>(server.arg("r").toInt());
    uint8_t greenValue = static_cast<uint8_t>(server.arg("g").toInt());
    uint8_t blueValue = static_cast<uint8_t>(server.arg("b").toInt());

    stableLight.setStableLight(redValue, greenValue, blueValue);
}

void HttpHandlers::handleSecionFireLight()
{
    FireLight fireLight(board);

    fireLight.setFireLight();
}

void HttpHandlers::handleSecionRainbowLight()
{
    RainbowLight rainbowLight(board);

    rainbowLight.setRainbowLight();
}
