export class Usuario {
    constructor (id,nombre,fechaCreacion){
        this.id =id;
        this.nombre= nombre;
        this.fechaCreacion = fechaCreacion || new Data().toISOString();

    }

    static validar(nombre){
        if(!nombre || nombre.trim().length === 0){
            throw new Error('El nombre no puede estar vació');

        }
        if(nombre.length > 50){
            throw new Error('El nombre no puede tener más de 50 caracteres');

        }
        return true;
    }
}