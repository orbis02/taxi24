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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasajeroController = void 0;
const common_1 = require("@nestjs/common");
const pasajero_service_1 = require("./pasajero.service");
const create_pasajero_dto_1 = require("./dto/create-pasajero.dto");
const swagger_1 = require("@nestjs/swagger");
let PasajeroController = class PasajeroController {
    constructor(pasajeroService) {
        this.pasajeroService = pasajeroService;
    }
    create(createPasajeroDto) {
        return this.pasajeroService.create(createPasajeroDto);
    }
    findAll() {
        return this.pasajeroService.findAll();
    }
    findOne(id) {
        return this.pasajeroService.findOne(+id);
    }
    findAllInRange(Actuallatitud, Actuallongitud) {
        return this.pasajeroService.ToptreOnRange(Actuallatitud, Actuallongitud);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pasajero_dto_1.CreatePasajeroDto]),
    __metadata("design:returntype", void 0)
], PasajeroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('pasajeros'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PasajeroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PasajeroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('ToptreOnRange/:Actuallatitud/:Actuallongitud'),
    __param(0, (0, common_1.Param)('Actuallatitud')),
    __param(1, (0, common_1.Param)('Actuallongitud')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PasajeroController.prototype, "findAllInRange", null);
PasajeroController = __decorate([
    (0, swagger_1.ApiTags)('Control de Pasajero'),
    (0, common_1.Controller)('pasajero'),
    __metadata("design:paramtypes", [pasajero_service_1.PasajeroService])
], PasajeroController);
exports.PasajeroController = PasajeroController;
//# sourceMappingURL=pasajero.controller.js.map