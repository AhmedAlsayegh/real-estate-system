import { connectDB } from "../../../lib/db";
import Tenant from "../../../models/Tenant";

export async function POST(req) {
  await connectDB(); // 🔥 مهم جدًا
  const data = await req.json();
  const tenant = await Tenant.create(data);
  return Response.json(tenant);
}

export async function GET() {
  await connectDB(); // 🔥 مهم جدًا
  const tenants = await Tenant.find();
  return Response.json(tenants);
}