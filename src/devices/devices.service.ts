import { Injectable } from '@nestjs/common';
import {PrismaService} from 'src/prisma.service'
import { Devices } from './devices.model'


@Injectable()
export class DevicesService  {
  constructor(private prisma: PrismaService) {}

  async getAllDevices(): Promise<Devices[]>{
    return this.prisma.devices.findMany()
  }

  async getDevices(id: number ) : Promise <Devices | null>{
    return this.prisma.devices.findUnique({where : {id:Number(id)}})
  }

  async createDevices(data: Devices) : Promise<Devices>{
    return this.prisma.devices.create({
        data, 
    })
  }

  async updateDevices(id:number, data: Devices) : Promise <Devices> {
    return this.prisma.devices.update({
        where : {id:Number(id)},
        data: { name :  data.name, connectionTime: data.connectionTime, disconnectionTime: data.disconnectionTime }
    })
  }

  async deleteDevices(id:number): Promise <Devices>{
    return this.prisma.devices.delete({
        where : {id:Number(id)}
    })
  } 
}
