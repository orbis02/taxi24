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
exports.ViajesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const viaje_entity_1 = require("./entities/viaje.entity");
const viajes_repository_1 = require("./viajes.repository");
const pasajero_service_1 = require("../pasajero/pasajero.service");
const conductor_entity_1 = require("../conductor/entities/conductor.entity");
const conductor_repository_1 = require("../conductor/conductor.repository");
const facturas_entity_1 = require("./entities/facturas.entity");
const facturars_repository_1 = require("./facturars.repository");
const geolocalitation_service_1 = require("../geolocalitation/geolocalitation.service");
const config_1 = require("../helpers/config");
let ViajesService = class ViajesService {
    constructor(viajesRepository, conductorRepository, facturaRepository, pasajeroService, geolacalitationServices) {
        this.viajesRepository = viajesRepository;
        this.conductorRepository = conductorRepository;
        this.facturaRepository = facturaRepository;
        this.pasajeroService = pasajeroService;
        this.geolacalitationServices = geolacalitationServices;
    }
    async create(createViajeDto) {
        const { lat_partida, lon_partida } = createViajeDto;
        const conductor = await this.pasajeroService.ToptreOnRange(lat_partida, lon_partida);
        if (conductor.length < 0) {
            throw new common_1.NotFoundException('No existen conductores disponblie en este momento');
        }
        const conductorseleccionado = await this.conductorRepository.findOneBy({ id: conductor[0].id });
        const pasajero = await this.pasajeroService.findOne(createViajeDto.pasajeroid);
        const NuevoViaje = new viaje_entity_1.ViajeEntity();
        NuevoViaje.lat_partida = lat_partida;
        NuevoViaje.lon_partida = lon_partida;
        NuevoViaje.conductor = conductorseleccionado;
        NuevoViaje.pasajero = pasajero;
        NuevoViaje.lat_destino = createViajeDto.lat_destino;
        NuevoViaje.lon_destino = createViajeDto.lon_destino;
        const viaje = await this.viajesRepository.create(NuevoViaje);
        const res = await this.viajesRepository.save(viaje);
        if (res.id > 0) {
            conductorseleccionado.status = false;
            await this.conductorRepository.save(conductorseleccionado);
            return res;
        }
    }
    async findAll() {
        const viajes = await this.viajesRepository.find({ where: { estado_carrera: true } });
        if (viajes.length <= 0) {
            throw new common_1.NotFoundException('No existen viajes activos');
        }
        return viajes;
    }
    async update(id) {
        const viaje = await this.viajesRepository.findOneBy({ id: id });
        if (!viaje) {
            throw new common_1.NotFoundException('No se encontro el viaje indicado');
        }
        viaje.estado_carrera = false;
        const result = await this.viajesRepository.save(viaje);
        if (result) {
            const distancia = await this.geolacalitationServices.calculateDistance(+viaje.lat_partida, +viaje.lon_partida, +viaje.lat_destino, +viaje.lon_destino);
            const Newfactura = new facturas_entity_1.FacturaEntity();
            Newfactura.distancia = +distancia.toFixed(0);
            Newfactura.viaje = viaje;
            Newfactura.precio_por_kilometro = config_1.PRECIO_POR_KILOMENTRO;
            Newfactura.total = +(distancia * config_1.PRECIO_POR_KILOMENTRO).toFixed(0);
            const factura = await this.facturaRepository.create(Newfactura);
            return await this.facturaRepository.save(factura);
        }
    }
};
ViajesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(viaje_entity_1.ViajeEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(conductor_entity_1.ConductorEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(facturas_entity_1.FacturaEntity)),
    __metadata("design:paramtypes", [viajes_repository_1.ViajeRepository,
        conductor_repository_1.ConductorRepository,
        facturars_repository_1.FacturaRepository,
        pasajero_service_1.PasajeroService,
        geolocalitation_service_1.GeolacalitationServices])
], ViajesService);
exports.ViajesService = ViajesService;
//# sourceMappingURL=viajes.service.js.map