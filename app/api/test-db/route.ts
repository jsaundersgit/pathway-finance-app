import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    // Check for connection string from environment variables
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL

    if (!connectionString) {
      return NextResponse.json(
        {
          ok: false,
          error: "No DATABASE_URL or POSTGRES_URL environment variable found",
          availableEnvVars: Object.keys(process.env).filter(
            (key) => key.includes("DATABASE") || key.includes("POSTGRES"),
          ),
        },
        { status: 500 },
      )
    }

    // Create Neon SQL client and test connection
    const sql = neon(connectionString)
    const result = await sql`select now() as server_time, version()`

    return NextResponse.json({
      ok: true,
      data: result[0],
      timestamp: new Date().toISOString(),
    })
  } catch (err: any) {
    return NextResponse.json(
      {
        ok: false,
        error: err.message,
        errorType: err.constructor.name,
      },
      { status: 500 },
    )
  }
}
