import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "src/Tema/services/tema.service";
import { TemaModule } from "src/Tema/tema.module";
import { PostagemController } from "./controller/postagem.controller";
import { Postagem } from "./entities/postagem.entities";
import { PostagemService } from "./services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}