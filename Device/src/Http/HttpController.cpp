#include "HttpController.h"
#include "Board.h"
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <uri/UriBraces.h>
#include "BlinkLight.h"
#include <HTTPClient.h>

HttpController::HttpController() : Light(boardInstance), server(80)
{
}

void HttpController::startServer()
{
    WiFi.begin("", "");

    Serial.println("Connecting to WiFi ");

    // time to connecct
    while (WiFi.status() != WL_CONNECTED)
    {
      
        Serial.println("Try to connect");
        delay(100);
        Serial.print(".");
    
    }

    Serial.println("Connected!");

    Serial.println(WiFi.localIP());
    // ACTIVE ENDPOINTS
    this->server.on("/custom-color",HTTP_GET,std::bind(&HttpController::handleSolidLight, this));
    this->server.on("/section-color", std::bind(&HttpController::handleModeLight, this));

    this->server.begin();
}

void HttpController::listenRequest()
{
    this->server.handleClient();
    delay(2);
}

void HttpController::handleSolidLight()
{


    String redValue = server.arg("r");
    String greenValue = server.arg("g");
    String blueValue = server.arg("b");

     Serial.print(redValue);
      Serial.print(greenValue);
       Serial.print(blueValue);

    this->server.enableCORS();
    server.sendHeader("Content-Type", "application/json");
    server.send(200, "application/json");

    // String blinkingParam = server.arg("blinking");

    // Serial.println("hello here StateColor named blinking :)");

    // Light.setCloudColor(255, 255, 255);

    
}

void HttpController::handleModeLight()
{
}
