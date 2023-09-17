#pragma once

#include "Board.h"

#include <WebServer.h>
#include "HttpEndpoints.h"

class HttpServer
{
public:
    HttpServer();
    void startServer();
    void listenRequest();
    void handleSolidLight();
    void handleModeLight();
    WebServer server;
};
