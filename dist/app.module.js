"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const conductor_module_1 = require("./conductor/conductor.module");
const pasajero_module_1 = require("./pasajero/pasajero.module");
const viajes_module_1 = require("./viajes/viajes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => ({
                    name: 'default',
                    type: 'postgres',
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
            conductor_module_1.ConductorModule,
            pasajero_module_1.PasajeroModule,
            viajes_module_1.ViajesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map