"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasajeroDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pasajero_dto_1 = require("./create-pasajero.dto");
class UpdatePasajeroDto extends (0, mapped_types_1.PartialType)(create_pasajero_dto_1.CreatePasajeroDto) {
}
exports.UpdatePasajeroDto = UpdatePasajeroDto;
//# sourceMappingURL=update-pasajero.dto.js.map