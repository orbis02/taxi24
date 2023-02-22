"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViajeEntity = void 0;
const conductor_entity_1 = require("../../conductor/entities/conductor.entity");
const pasajero_entity_1 = require("../../pasajero/entities/pasajero.entity");
const typeorm_1 = require("typeorm");
let ViajeEntity = class ViajeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ViajeEntity.prototype, "lat_partida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ViajeEntity.prototype, "lon_partida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ViajeEntity.prototype, "lat_destino", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ViajeEntity.prototype, "lon_destino", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pasajero_entity_1.PasajeroEntity, pasajero => pasajero.id, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pasajero_entity_1.PasajeroEntity)
], ViajeEntity.prototype, "pasajero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => conductor_entity_1.ConductorEntity, conductor => conductor.id, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", conductor_entity_1.ConductorEntity)
], ViajeEntity.prototype, "conductor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], ViajeEntity.prototype, "estado_carrera", void 0);
ViajeEntity = __decorate([
    (0, typeorm_1.Entity)('viaje')
], ViajeEntity);
exports.ViajeEntity = ViajeEntity;
//# sourceMappingURL=viaje.entity.js.map