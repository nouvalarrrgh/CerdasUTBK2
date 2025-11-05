"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold mb-6">Login UTBK-SNBT</h1>

        <input className="mb-3 w-full border rounded px-3 py-2" placeholder="Username / Email" />
        <input type="password" className="mb-3 w-full border rounded px-3 py-2" placeholder="Password" />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4">
          Masuk
        </button>

        <p className="text-center text-sm">
          Belum punya akun?{" "}
          <Link href="/pembayaran" className="text-blue-600 font-semibold hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
