import { connectDB } from "../../../lib/db";
import Tenant from "../../../models/Tenant";

export async function GET() {
  await connectDB();
  const tenants = await Tenant.find();
  return Response.json(tenants);
}
