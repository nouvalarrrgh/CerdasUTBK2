"use client";

export default function PembayaranPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Pembayaran Kontrak Bimbel</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nama Lengkap</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Nomor WhatsApp</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Lanjut ke Pembayaran
          </button>
        </form>
      </div>
    </div>
  );
}
