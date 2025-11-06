import bcrypt from 'bcryptjs';
import { supabaseAdmin } from '../../lib/supabaseServer';
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  const { nama,email,whatsapp,password } = req.body || {};
  if(!email||!password) return res.status(400).json({message:'email+password required'});
  const hash = bcrypt.hashSync(password,10);
  const { error } = await supabaseAdmin.from('users').insert([{name:nama,email,whatsapp,password_hash:hash}]);
  if(error) return res.status(500).json({message:error.message});
  res.status(200).json({ok:true});
}
