import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist/decorators";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entities";
import { TemaService } from "../services/tema.service";

@ApiTags('Tema')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/tema')
export class TemaController {
    constructor(private readonly temaService: TemaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tema[]> {
        return this.temaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
        return this.temaService.findById(id);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findBydescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
        return this.temaService.findByDescricao(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Tema: Tema): Promise<Tema> {
        return this.temaService.create(Tema);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Tema: Tema): Promise<Tema> {
        return this.temaService.update(Tema);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.temaService.delete(id);
    }
}