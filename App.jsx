import React, { useState } from "react";

const users = [
  {
    nama: "Andi Kurniawan",
    nik: "3210123456780001",
    email: "irawan@gmail.com",
    password: "irawan123",
    saldo: "Rp 120.000.000",
    status: "Aktif"
  }
];

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar User JMO</h1>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user, idx) => (
          <div key={idx} onClick={() => setSelectedUser(user)} className="p-4 border rounded cursor-pointer hover:bg-gray-100">
            <div className="font-semibold">{user.nama}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setSelectedUser(null)}>
          <div className="bg-white p-6 rounded shadow-md" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-2">Detail User</h2>
            <p><strong>Nama:</strong> {selectedUser.nama}</p>
            <p><strong>NIK:</strong> {selectedUser.nik}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Password:</strong> {selectedUser.password}</p>
            <p><strong>Saldo JHT:</strong> {selectedUser.saldo}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setSelectedUser(null)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}