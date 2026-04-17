import mongoose from "mongoose";

const TenantSchema = new mongoose.Schema({
  name: String,
  phone: String,
  rent: Number,
});

export default mongoose.models.Tenant ||
  mongoose.model("Tenant", TenantSchema);