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
exports.ViajesController = void 0;
const common_1 = require("@nestjs/common");
const viajes_service_1 = require("./viajes.service");
const create_viaje_dto_1 = require("./dto/create-viaje.dto");
const swagger_1 = require("@nestjs/swagger");
let ViajesController = class ViajesController {
    constructor(viajesService) {
        this.viajesService = viajesService;
    }
    create(createViajeDto) {
        return this.viajesService.create(createViajeDto);
    }
    findAll() {
        return this.viajesService.findAll();
    }
    update(id) {
        return this.viajesService.update(+id);
    }
};
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_viaje_dto_1.CreateViajeDto]),
    __metadata("design:returntype", void 0)
], ViajesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('activos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViajesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('completar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ViajesController.prototype, "update", null);
ViajesController = __decorate([
    (0, swagger_1.ApiTags)('Control de Viajes'),
    (0, common_1.Controller)('viajes'),
    __metadata("design:paramtypes", [viajes_service_1.ViajesService])
], ViajesController);
exports.ViajesController = ViajesController;
//# sourceMappingURL=viajes.controller.js.map