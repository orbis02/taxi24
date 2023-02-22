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
exports.PasajeroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const conductor_repository_1 = require("../conductor/conductor.repository");
const conductor_entity_1 = require("../conductor/entities/conductor.entity");
const geolocalitation_service_1 = require("../geolocalitation/geolocalitation.service");
const pasajero_entity_1 = require("./entities/pasajero.entity");
const pasajero_repository_1 = require("./pasajero.repository");
let PasajeroService = class PasajeroService {
    constructor(pasajeroRepository, conductorRepository, geolacalitationServices) {
        this.pasajeroRepository = pasajeroRepository;
        this.conductorRepository = conductorRepository;
        this.geolacalitationServices = geolacalitationServices;
    }
    async create(createPasajeroDto) {
        const { correo } = createPasajeroDto;
        const pasajero = await this.pasajeroRepository.findOneBy({ correo: correo });
        if (pasajero) {
            throw new common_1.ConflictException('El pasajero ya existe');
        }
        else {
            const Pasajero = this.pasajeroRepository.create(createPasajeroDto);
            return this.pasajeroRepository.save(Pasajero);
        }
    }
    async findAll() {
        const pasajeros = await this.pasajeroRepository.find();
        if (!pasajeros.length) {
            throw new common_1.NotFoundException('No se econtraron pasajeros');
        }
        return pasajeros;
    }
    async findOne(id) {
        const pasajero = await this.pasajeroRepository.findOneBy({ id: id });
        if (!pasajero) {
            throw new common_1.NotFoundException('El pasajero no existe');
        }
        return pasajero;
    }
    async ToptreOnRange(Actuallatitud, Actuallongitud) {
        const conductores = await this.conductorRepository.find({ where: { status: true } });
        if (!conductores.length) {
            throw new common_1.NotFoundException('No se econtraron conductores disponibles');
        }
        const conductoresOnRange = [];
        await conductores.forEach(async (element) => {
            let distance = this.geolacalitationServices.calculateDistance(+Actuallatitud, +Actuallongitud, +element.lat, +element.lon);
            element['distance'] = distance;
            conductoresOnRange.push(element);
        });
        const conductoresCloser = this.geolacalitationServices.getTopThreeLocations(conductoresOnRange);
        return (!conductoresCloser.length) ? new common_1.NotFoundException('No se encontraron conductores disponible') : conductoresCloser;
    }
};
PasajeroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pasajero_entity_1.PasajeroEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(conductor_entity_1.ConductorEntity)),
    __metadata("design:paramtypes", [pasajero_repository_1.PasajeroRepository,
        conductor_repository_1.ConductorRepository,
        geolocalitation_service_1.GeolacalitationServices])
], PasajeroService);
exports.PasajeroService = PasajeroService;
//# sourceMappingURL=pasajero.service.js.map