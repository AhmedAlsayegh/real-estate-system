"use client";
import { useState, useEffect } from "react";

export default function Tenants() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rent, setRent] = useState("");
  const [tenants, setTenants] = useState([]);

  // جلب البيانات
  const fetchTenants = async () => {
    const res = await fetch("/api/tenants");
    const data = await res.json();
    setTenants(data);
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  const handleSubmit = async () => {
    await fetch("/api/tenants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, rent }),
    });

    setName("");
    setPhone("");
    setRent("");

    fetchTenants();
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* الفورم */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h1 className="text-xl font-bold mb-4">إضافة مستأجر</h1>

          <div className="grid grid-cols-3 gap-4">
            <input
              className="p-3 border rounded"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="p-3 border rounded"
              placeholder="الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              className="p-3 border rounded"
              placeholder="الإيجار"
              type="number"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl"
          >
            حفظ
          </button>
        </div>

        {/* الجدول */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">المستأجرين</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">الاسم</th>
                <th className="p-2">الهاتف</th>
                <th className="p-2">الإيجار</th>
              </tr>
            </thead>

            <tbody>
              {tenants.map((t, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{t.name}</td>
                  <td className="p-2">{t.phone}</td>
                  <td className="p-2">{t.rent}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}