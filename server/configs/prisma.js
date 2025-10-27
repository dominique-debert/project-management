import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
// neonConfig.poolQueryViaFetch = true

// Use a safe global cache to avoid creating multiple PrismaClient instances in dev hot-reload
const connectionString = process.env.DATABASE_URL || "";
const adapter = new PrismaNeon({ connectionString });

const _global = globalThis;
_global.prisma = _global.prisma || new PrismaClient({ adapter });
const prisma = _global.prisma;

if (process.env.NODE_ENV === "development") _global.prisma = prisma;

export default prisma;
