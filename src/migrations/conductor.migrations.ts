
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedConductoresTable1614112212465 implements MigrationInterface {

  
  
    public async up(queryRunner: QueryRunner): Promise<void> {
     
      
      
        await queryRunner.query(`
        INSERT INTO public.condunctor( nombre, telefono, correo, lat, lon, identificacion)
        VALUES
        ('MARIA DEL PILAR ALBA GUERRERO', '809 475 8596', 'malba@qik.com.do', '18.48130016924156', '-69.91304301827681', '031-2222222-2'),
        ('JUANA FIOR DALIZA CHAVEZ MOLIN', '809 467 8397', 'fchavez@bpd.com.do', '18.47654484739131', '-69.90720307427016', '402-2222222-2'),
        ('LAURA PATRICIA BAEZ GERMAN', '829 567 2498', 'abaez@qik.com.do', '18.467459822159682', '-69.90878138643119', '000-0000000-0'),
        ('RAINE SANCHEZ', '809 545 9393', 'rs@gmail.com', '19.460279767344712','-70.67976821151278', '000-0000000-0'),
        ('RICHARS VICTORIANO', '809 545 9395', 'rv@gmail.com', '19.440711453058793','-70.72280240106836','000-0000000-0');
      INSERT INTO public.pasajero
       (nombre, telefonon, correo)
       VALUES
       ('DAGOBERTO MORILLO', '(809) 763-9027', 'DMC@gmail.com'),
       ('ORBIS POLANCO', '(809) 436-8559', 'orbispm@gmail.com'),
       ('RANDY VASQUEZ', '(829) 695-5643', 'rmvasquez@gmail.com');
       INSERT INTO public.viaje(
       lat_partida, lon_partida, lat_destino, lon_destino, estado_carrera, "pasajeroId", "conductorId")

       VALUES
       ('19.45379356283074','-70.7061090576719', '19.437829336696844','-70.66157105151157', false, 2, 4),
       ('18.47654484739131', '-69.90720307427016', '18.467459822159682', '-69.90894720036778', true, 3, 2),
       ('18.467459822159682', '-69.90878138643119', '18.4858600255777', '-69.9046360380167', true, 1, 3);
       UPDATE public.condunctor
       SET status=false WHERE id IN(2,3);
     INSERT INTO 
        public.facturas(
    distancia, precio_por_kilometro, total, estado, "viajeId")
       VALUES
       (5, 50, 250,true, 1);
      `);

   
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // En este caso, no hacemos nada en el método down ya que no queremos eliminar los conductores insertados
    await queryRunner.query(`DROP TABLE condunctor,facturas,pasajero,viaje,migrations_typeorm CASCADE;`);
  }
}
