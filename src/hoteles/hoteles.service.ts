import { Hotel } from './hoteles.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable
export class HotelesService {
    private hoteles: Hotel[] =[];

    insertHotel(id: string, descripcion: string, direccion: string, facebook: string, instagram: string, name: string,
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
        return this.hoteles.find(h => h.id = id);
    }
}
