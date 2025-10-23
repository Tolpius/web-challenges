import {Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController{
    @Get("/")
    showHello(){
        return "Hello World";
    }
}

@Module({
    controllers: [AppController]
})
class AppModule{}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(2323)
    console.log(`Server is running on port ${await app.getUrl()}`)
}

bootstrap();