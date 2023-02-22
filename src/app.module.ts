import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductorModule } from './conductor/conductor.module';
import { PasajeroModule } from './pasajero/pasajero.module';
import { ViajesModule } from './viajes/viajes.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        name: 'default',
        type: 'postgres' as 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pg2022*',
        database: 'DBTaxi24',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
        migrations: [__dirname + '/**/*.migrations{.ts,.js}'],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: true,
      }),
    }),
    ConductorModule,
    PasajeroModule,
    ViajesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
