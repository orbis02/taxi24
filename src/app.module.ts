import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductorModule } from './conductor/conductor.module';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './helpers/config';
import { PasajeroModule } from './pasajero/pasajero.module';
import { ViajesModule } from './viajes/viajes.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        name: 'default',
        type: 'postgres' as 'postgres',
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
        migrations: [__dirname + '/**/*.migrations{.ts,.js}'],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: false,
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
