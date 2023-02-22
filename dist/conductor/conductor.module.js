"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConductorModule = void 0;
const common_1 = require("@nestjs/common");
const conductor_service_1 = require("./conductor.service");
const conductor_controller_1 = require("./conductor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const conductor_entity_1 = require("./entities/conductor.entity");
const geolocalitation_service_1 = require("../geolocalitation/geolocalitation.service");
let ConductorModule = class ConductorModule {
};
ConductorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([conductor_entity_1.ConductorEntity])],
        controllers: [conductor_controller_1.ConductorController],
        providers: [conductor_service_1.ConductorService, geolocalitation_service_1.GeolacalitationServices]
    })
], ConductorModule);
exports.ConductorModule = ConductorModule;
//# sourceMappingURL=conductor.module.js.map