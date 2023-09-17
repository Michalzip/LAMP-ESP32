#include "HttpEndpoints.h"
#include "HttpHandlers.h"
#include "Board.h"

HttpEndpoints::HttpEndpoints(WebServer &server, Board &board) : server(server), handlers(server, board)
{
}

int activeEndpoint = 0;

void HttpEndpoints::setupEndpoints()
{

    server.enableCORS(true);

    server.on("/custom-color", HTTP_GET, [&]()
              {    
                activateEndpoint(1);
                server.send(200); });

    server.on("/section-color/rainbow", HTTP_GET, [&]()
              { 
                activateEndpoint(2);
                server.send(200); });

    server.on("/section-color/fire", HTTP_GET, [&]()
              { 
                activateEndpoint(3);
                server.send(200); });
}

void HttpEndpoints::activateEndpoint(int endpointNumber)
{
    activeEndpoint = endpointNumber;
}

void HttpEndpoints::handleEndpoints()
{
    switch (activeEndpoint)
    {
    case 1:
        handlers.handleSolidLight();
        break;
    case 2:
        handlers.handleSecionRainbowLight();
        break;
    case 3:
        handlers.handleSecionFireLight();
        break;

    default:
        server.send(404);
        break;
    }
}
