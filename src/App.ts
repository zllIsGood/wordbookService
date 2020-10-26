/*
 * @Author: zll 
 * @Date: 2020-04-18 10:55:02 
 * @Last Modified by: zhoulanglang
 * @Last Modified time: 2020-10-26 14:07:01
 */
// var express = require('express');
import express from 'express';
import { BaseClass } from './core/BaseClass';

export class App extends BaseClass {
    app
    public static ins(): App {
        return super.ins();
    }

    public constructor() {
        super();
        this.app = express();
    }
    init(models) {
        this.setStaticFile()
        this.appGet(models)
    }

    setStaticFile() {
        this.app.use(express.static('E:/izhou/wordbookService/'));   //静态文件
    }

    appGet(models: any[]) {
        for (let m of models) {
            m.ins().init(this.app)
        }
    }
}