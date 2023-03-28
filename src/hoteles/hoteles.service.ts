import { Hotel } from './hoteles.model';
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HotelesService {
    private hoteles: Hotel[] =[];

    insertHotel(descripcion: string, direccion: string, facebook: string, instagram: string, name: string,
    municipios: string, numero_RNT: string, numero_estrellas: string, ruta_turistica: string, servicios_destacados: string,
    servicios_generales: string, servicios_habitacion: string, telefono: string, tripadvisor: string,
    ubicacion: string, whatsapp: string){
        const id= uuidv4()
        const newHotel = new Hotel(id,descripcion, direccion, facebook, instagram, name, municipios, numero_RNT,
        numero_estrellas, ruta_turistica, servicios_destacados, servicios_generales, servicios_habitacion, telefono,
        tripadvisor, ubicacion, whatsapp);
        this.hoteles.push(newHotel);
        return id; 
    }

    getHoteles(){
        return[...this.hoteles]
    }

    getHotel(id: string){
        return this.getHotelById(id)[0];
    }
    updateHotel(id: string, descripcion: string, direccion: string, facebook: string, instagram: string, name: string,
    municipios: string, numero_RNT: string, numero_estrellas: string, ruta_turistica: string, servicios_destacados: string,
    servicios_generales: string, servicios_habitacion: string, telefono: string, tripadvisor: string,
    ubicacion: string, whatsapp: string,)
    {
        const [targetHotel, index] = this.getHotelById(id);
        const nhp = { ... targetHotel, descripcion, direccion, facebook, instagram, name, municipios, numero_RNT,
        numero_estrellas, ruta_turistica, servicios_destacados, servicios_generales, servicios_habitacion, telefono,
        tripadvisor, ubicacion, whatsapp };
        const newHotel = new Hotel(id, nhp.descripcion, nhp.direccion, nhp.facebook, nhp.instagram,nhp.name, nhp.municipios, nhp.numero_RNT,
        nhp.numero_estrellas, nhp.ruta_turistica, nhp.servicios_destacados, nhp.servicios_generales, nhp.servicios_habitacion,
        nhp.telefono, nhp.tripadvisor, nhp.ubicacion, nhp.whatsapp);
        this.hoteles[index] = newHotel;
        return newHotel;
    }
    
    deleteHotel(id: string){
        const[_, index] = this.getHotelById(id);
        this.hoteles.splice(index, 1);
    }

    private getHotelById(id: string): [Hotel, number]{
        const index = this.hoteles.findIndex ((h) => h.id = id);
        return [this.hoteles[index], index];
    }
}



