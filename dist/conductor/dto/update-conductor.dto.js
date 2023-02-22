"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConductorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_conductor_dto_1 = require("./create-conductor.dto");
class UpdateConductorDto extends (0, mapped_types_1.PartialType)(create_conductor_dto_1.CreateConductorDto) {
}
exports.UpdateConductorDto = UpdateConductorDto;
//# sourceMappingURL=update-conductor.dto.js.map