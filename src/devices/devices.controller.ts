import { DevicesService } from "./devices.service";
import { Devices } from "./devices.model";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


@Controller('api/v1/devices')
export class DevicesController{
    constructor(private readonly devicesService: DevicesService){}

    @Get()
    async getAllDevices() : Promise<Devices[]>{
        return this.devicesService.getAllDevices()
    }

    @Post()
    async postDevices(@Body() postData: Devices): Promise<Devices>{
        return this.devicesService.createDevices(postData)
    }

    @Get(':id')
    async getDevices(@Param('id')id: number) : Promise <Devices | null>{
        return this.devicesService.getDevices(id)
    }

    @Put(':id')
    async updateDevices(@Param('id')id: number , @Body() postData: Devices) : Promise <Devices | null>{
        return this.devicesService.updateDevices(id , postData)
    }

    @Delete(':id')
    async deleteDevices (@Param('id')id: number) : Promise <Devices >{
        return this.devicesService.deleteDevices(id)
    }
}