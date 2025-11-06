import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage(){ 
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [loading,setLoading]=useState(false);
  async function handleLogin(e){ e.preventDefault(); setLoading(true);
    const res = await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
    setLoading(false);
    if(res.ok) window.location.href='/dashboard'; else { const j=await res.json(); alert(j?.message||'Login gagal'); }
  }
  return (
    <div className="min-h-screen flex items-center justify-center" style={{background:'#f8fafc'}}>
      <div className="card w-full max-w-md">
        <div style={{textAlign:'center'}}>
          <img src="/logo.svg" alt="logo" style={{width:140,margin:'0 auto'}}/>
          <h1 style={{marginTop:8,fontSize:20,fontWeight:700,color:'#0f172a'}}>Masuk ke Cerdas UTBK</h1>
          <p style={{color:'#64748b'}}>Akses materi & tryout - Paket Intensif 1 Tahun</p>
        </div>
        <form onSubmit={handleLogin} className="mt-4 space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn-blue w-full">{loading? 'Memproses...':'Masuk'}</button>
        </form>
        <p className="mt-4 text-center text-sm">Belum punya akun? <Link href="/daftar"><a style={{color:'#0ea5e9'}}>Daftar di sini</a></Link></p>
      </div>
    </div>
  );
}
