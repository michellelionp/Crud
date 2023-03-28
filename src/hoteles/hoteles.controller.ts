import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { HotelesService } from './hoteles.service';

@Controller('hoteles')
export class HotelesController {
  constructor(private readonly hotelService: HotelesService) {}

  @Get()
  getHoteles(){
    return 'Hello';
  }

  @Post()
  insertHotel(
    @Body('descripcion') descripcion: string,
    @Body('direccion') direccion: string,
    @Body('facebook') facebook: string,
    @Body('instagram') instagram: string,
    @Body('name') name: string,
    @Body('municipios') municipios: string,
    @Body('numero_RNT') numero_RNT: string,
    @Body('numero_estrellas') numero_estrellas: string,
    @Body('ruta_turistica') ruta_turistica: string,
    @Body('servicios_destacados') servicios_destacados: string,
    @Body('servicios_generales') servicios_generales: string,
    @Body('servicios_habitacion') servicios_habitacion: string,
    @Body('telefono') telefono: string,
    @Body('tripadvisor') tripadvisor: string,
    @Body('ubicacion') ubicacion: string,
    @Body('whatsapp') whatsapp: string,
  ) {
    const hotelId = this.hotelService.insertHotel(descripcion, direccion, facebook, instagram, name, municipios, numero_RNT,
      numero_estrellas, ruta_turistica, servicios_destacados, servicios_generales, servicios_habitacion, telefono,
      tripadvisor, ubicacion, whatsapp);
        return {
            id: hotelId,
        };
    }
    @Get()
    getAllUsers(){
      return this.hotelService.getHoteles();
    }

    @Get(':HotelId')
    getHotel(@Param('hotelId') hotelId: string){
      return this.hotelService.getHotel(hotelId);
    }

    @Put(':userId')
    updateHotel(
      @Param('HotelId') hotelId: string,
      @Body('descripcion') descripcion: string,
      @Body('direccion') direccion: string,
      @Body('facebook') facebook: string,
      @Body('instagram') instagram: string,
      @Body('name') name: string,
      @Body('municipios') municipios: string,
      @Body('numero_RNT') numero_RNT: string,
      @Body('numero_estrellas') numero_estrellas: string,
      @Body('ruta_turistica') ruta_turistica: string,
      @Body('servicios_destacados') servicios_destacados: string,
      @Body('servicios_generales') servicios_generales: string,
      @Body('servicios_habitacion') servicios_habitacion: string,
      @Body('telefono') telefono: string,
      @Body('tripadvisor') tripadvisor: string,
      @Body('ubicacion') ubicacion: string,
      @Body('whatsapp') whatsapp: string,
    ){
      return this.hotelService.updateHotel(hotelId,descripcion, direccion, facebook, instagram, name, municipios, numero_RNT,
        numero_estrellas, ruta_turistica, servicios_destacados, servicios_generales, servicios_habitacion, telefono,
        tripadvisor, ubicacion, whatsapp);
    }

  @Delete(':hotelId')
  deteleHotel(@Param('hotelId') hotelId: string){
    this.hotelService.deleteHotel(hotelId);
  } 
}

