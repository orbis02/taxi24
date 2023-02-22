"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViajesModule = void 0;
const common_1 = require("@nestjs/common");
const viajes_service_1 = require("./viajes.service");
const viajes_controller_1 = require("./viajes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const viaje_entity_1 = require("./entities/viaje.entity");
const conductor_entity_1 = require("../conductor/entities/conductor.entity");
const pasajero_service_1 = require("../pasajero/pasajero.service");
const pasajero_entity_1 = require("../pasajero/entities/pasajero.entity");
const geolocalitation_service_1 = require("../geolocalitation/geolocalitation.service");
const facturas_entity_1 = require("./entities/facturas.entity");
let ViajesModule = class ViajesModule {
};
ViajesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([viaje_entity_1.ViajeEntity, conductor_entity_1.ConductorEntity, pasajero_entity_1.PasajeroEntity, facturas_entity_1.FacturaEntity])],
        controllers: [viajes_controller_1.ViajesController],
        providers: [viajes_service_1.ViajesService, pasajero_service_1.PasajeroService, geolocalitation_service_1.GeolacalitationServices]
    })
], ViajesModule);
exports.ViajesModule = ViajesModule;
//# sourceMappingURL=viajes.module.js.map