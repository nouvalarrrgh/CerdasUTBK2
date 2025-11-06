import { useState } from 'react';
export default function Daftar(){
  const [nama,setNama]=useState(''); const [email,setEmail]=useState(''); const [wa,setWa]=useState(''); const [password,setPassword]=useState(''); const [loading,setLoading]=useState(false);
  async function submit(e){ e.preventDefault(); setLoading(true);
    const res = await fetch('/api/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({nama,email,whatsapp:wa,password})});
    setLoading(false);
    if(res.ok) window.location.href='/konfirmasi'; else { const j=await res.json(); alert(j?.message||'Gagal daftar'); }
  }
  return (
    <div className="min-h-screen flex items-center justify-center" style={{background:'#f1f8ff'}}>
      <div className="card w-full max-w-md">
        <h2 style={{fontSize:18,fontWeight:700}}>Daftar Paket Intensif UTBK 1 Tahun</h2>
        <div style={{marginTop:8, marginBottom:12, padding:10, background:'#eff6ff', borderRadius:8}}><span style={{textDecoration:'line-through', color:'#64748b'}}>Rp 459.000</span> <span style={{color:'#dc2626', fontWeight:700, marginLeft:8}}>Rp 89.000</span></div>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Nama Lengkap" value={nama} onChange={e=>setNama(e.target.value)} required />
          <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="w-full border p-2 rounded" placeholder="No WhatsApp" value={wa} onChange={e=>setWa(e.target.value)} required />
          <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn-blue w-full">{loading? 'Memproses...':'Lanjut ke Pembayaran'}</button>
        </form>
      </div>
    </div>
  );
}
