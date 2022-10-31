import { IsNotEmpty } from "class-validator";
import { Tema } from "../../Tema/entities/tema.entities";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'tb_postagens'})
export class Postagem {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn()
    @ApiProperty()
    data: Date;

    @ApiProperty({ type: () => Tema})
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ApiProperty({ type: () => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}
