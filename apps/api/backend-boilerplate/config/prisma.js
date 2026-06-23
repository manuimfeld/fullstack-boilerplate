import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// 1. Creamos el pool de conexiones nativo apuntando a tu variable de entorno
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// 2. Pasamos obligatoriamente el adaptador al constructor de Prisma v7
export const prisma = new PrismaClient({ adapter });
