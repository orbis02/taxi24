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
exports.ConductorService = void 0;
const common_1 = require("@nestjs/common");
const conductor_entity_1 = require("./entities/conductor.entity");
const conductor_repository_1 = require("./conductor.repository");
const typeorm_1 = require("@nestjs/typeorm");
const geolocalitation_service_1 = require("../geolocalitation/geolocalitation.service");
let ConductorService = class ConductorService {
    constructor(conductorRepository, geolacalitationServices) {
        this.conductorRepository = conductorRepository;
        this.geolacalitationServices = geolacalitationServices;
    }
    async create(createConductorDto) {
        const { identificacion } = createConductorDto;
        const conductor = await this.conductorRepository.findOneBy({ identificacion: identificacion });
        if (conductor) {
            throw new common_1.ConflictException('El conductor ya existe');
        }
        else {
            const Conductor = this.conductorRepository.create(createConductorDto);
            return this.conductorRepository.save(Conductor);
        }
    }
    async findAll() {
        const conductores = await this.conductorRepository.find();
        if (!conductores.length) {
            throw new common_1.NotFoundException('No se econtraron conductores');
        }
        return conductores;
    }
    async findAllAvailable() {
        const conductores = await this.conductorRepository.find({ where: { status: true } });
        if (!conductores.length) {
            throw new common_1.NotFoundException('No se econtraron conductores disponibles');
        }
        return conductores;
    }
    async findOne(id) {
        const conductor = await this.conductorRepository.findOneBy({ id: id });
        if (!conductor) {
            throw new common_1.NotFoundException('El conductor no existe');
        }
        return conductor;
    }
    async findAllInRange(Actuallatitud, Actuallongitud) {
        const conductores = await this.conductorRepository.find({ where: { status: true } });
        if (!conductores.length) {
            throw new common_1.NotFoundException('No se econtraron conductores disponibles');
        }
        const conductoresOnRange = [];
        await conductores.forEach(async (element) => {
            let distance = this.geolacalitationServices.calculateDistance(+Actuallatitud, +Actuallongitud, +element.lat, +element.lon);
            if (distance <= 3) {
                element['distance'] = distance;
                conductoresOnRange.push(element);
            }
        });
        return (!conductoresOnRange.length) ? new common_1.NotFoundException('No se encontraron conductores disponible en un rango de 3km') : conductoresOnRange;
    }
};
ConductorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conductor_entity_1.ConductorEntity)),
    __metadata("design:paramtypes", [conductor_repository_1.ConductorRepository,
        geolocalitation_service_1.GeolacalitationServices])
], ConductorService);
exports.ConductorService = ConductorService;
//# sourceMappingURL=conductor.service.js.map