#pragma once
#include <WebServer.h>
#include "HttpHandlers.h"

class HttpEndpoints
{
public:
    HttpEndpoints(WebServer &server, Board &board);

    void setupEndpoints();
    void activateEndpoint(int endpointNumber);
    void handleEndpoints();

private:
    WebServer &server;
    HttpHandlers handlers;
};