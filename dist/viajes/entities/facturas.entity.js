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
exports.FacturaEntity = void 0;
const typeorm_1 = require("typeorm");
const viaje_entity_1 = require("./viaje.entity");
let FacturaEntity = class FacturaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FacturaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => viaje_entity_1.ViajeEntity, viaje => viaje.id, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", viaje_entity_1.ViajeEntity)
], FacturaEntity.prototype, "viaje", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FacturaEntity.prototype, "distancia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FacturaEntity.prototype, "precio_por_kilometro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FacturaEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], FacturaEntity.prototype, "estado", void 0);
FacturaEntity = __decorate([
    (0, typeorm_1.Entity)('facturas')
], FacturaEntity);
exports.FacturaEntity = FacturaEntity;
//# sourceMappingURL=facturas.entity.js.map