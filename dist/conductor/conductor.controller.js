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
exports.ConductorController = void 0;
const common_1 = require("@nestjs/common");
const conductor_service_1 = require("./conductor.service");
const create_conductor_dto_1 = require("./dto/create-conductor.dto");
const swagger_1 = require("@nestjs/swagger");
let ConductorController = class ConductorController {
    constructor(conductorService) {
        this.conductorService = conductorService;
    }
    create(createConductorDto) {
        return this.conductorService.create(createConductorDto);
    }
    findAll() {
        return this.conductorService.findAll();
    }
    findAllAvailable() {
        return this.conductorService.findAllAvailable();
    }
    findOne(id) {
        return this.conductorService.findOne(+id);
    }
    findAllInRange(Actuallatitud, Actuallongitud) {
        return this.conductorService.findAllInRange(Actuallatitud, Actuallongitud);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conductor_dto_1.CreateConductorDto]),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('todosdisponible'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "findAllAvailable", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('disponiblesenrango/:Actuallatitud/:Actuallongitud'),
    __param(0, (0, common_1.Param)('Actuallatitud')),
    __param(1, (0, common_1.Param)('Actuallongitud')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConductorController.prototype, "findAllInRange", null);
ConductorController = __decorate([
    (0, swagger_1.ApiTags)('Control de Conductores'),
    (0, common_1.Controller)('conductor'),
    __metadata("design:paramtypes", [conductor_service_1.ConductorService])
], ConductorController);
exports.ConductorController = ConductorController;
//# sourceMappingURL=conductor.controller.js.map