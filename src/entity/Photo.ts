/*
 * @Author: zhoulanglang 
 * @Date: 2020-10-26 15:14:46 
 * @Last Modified by: zhoulanglang
 * @Last Modified time: 2020-10-26 15:19:03
 */
import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;
}
