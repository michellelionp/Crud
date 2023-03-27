import { Module } from '@nestjs/common';

@Module({})
export class Hotel {
  constructor(
    public id: string,
    public descripcion: string,
    public direccion: string,
    public facebook: string,
    public instagram: string,
    public name: string,
    public municipios: string,
    public numero_RNT: string,
    public numero_estrellas: string,
    public ruta_turistica: string,
    public servicios_destacados: string,
    public servicios_generales: string,
    public servicios_habitacion: string,
    public telefono: string,
    public tripadvisor: string,
    public ubicacion: string,
    public whatsapp: string,
  ) {}
}
