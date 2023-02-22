"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateViajeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_viaje_dto_1 = require("./create-viaje.dto");
class UpdateViajeDto extends (0, mapped_types_1.PartialType)(create_viaje_dto_1.CreateViajeDto) {
}
exports.UpdateViajeDto = UpdateViajeDto;
//# sourceMappingURL=update-viaje.dto.js.map