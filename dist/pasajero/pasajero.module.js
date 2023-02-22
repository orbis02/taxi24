"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasajeroModule = void 0;
const common_1 = require("@nestjs/common");
const pasajero_service_1 = require("./pasajero.service");
const pasajero_controller_1 = require("./pasajero.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pasajero_entity_1 = require("./entities/pasajero.entity");
const geolocalitation_service_1 = require("../geolocalitation/geolocalitation.service");
const conductor_entity_1 = require("../conductor/entities/conductor.entity");
let PasajeroModule = class PasajeroModule {
};
PasajeroModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pasajero_entity_1.PasajeroEntity, conductor_entity_1.ConductorEntity])],
        controllers: [pasajero_controller_1.PasajeroController],
        providers: [pasajero_service_1.PasajeroService, geolocalitation_service_1.GeolacalitationServices]
    })
], PasajeroModule);
exports.PasajeroModule = PasajeroModule;
//# sourceMappingURL=pasajero.module.js.map