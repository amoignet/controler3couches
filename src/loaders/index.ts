import { Application } from 'express';
import express from './express';
import mysql from './mysql';

export default async (app: Application) => {

    express(app);

    await mysql();
};
