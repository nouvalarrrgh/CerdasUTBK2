interface Props {
  params: { id: string };
}

export default function InvoicePage({ params }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-4">Invoice Pendaftaran</h1>
        <p className="text-gray-700">Kode Invoice:</p>
        <p className="text-3xl font-bold text-blue-600">{params.id}</p>
      </div>
    </div>
  );
}
