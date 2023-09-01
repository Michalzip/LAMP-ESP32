#ifndef HttpController_H
#define HttpController_H
#include "Board.h"
#include "BlinkLight.h"
#include <WebServer.h>

class HttpController
{
public:
    HttpController();
    void startServer();
    void listenRequest();
    void handleSolidLight();
    void handleModeLight();
    WebServer server;

private:
    Board boardInstance;
    BlinkLight Light;
};

#endif