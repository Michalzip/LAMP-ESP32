#include "HttpServer.h"
#include "Board.h"
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <uri/UriBraces.h>
#include <HTTPClient.h>

HttpServer::HttpServer() : server(80)
{
}

void HttpServer::startServer()
{

    WiFi.begin("SSID", "PASSWORD");

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println(WiFi.localIP());
    }

    server.begin();
}

void HttpServer::listenRequest()
{
    server.handleClient();
}
