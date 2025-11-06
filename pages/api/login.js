import bcrypt from 'bcryptjs';
import { supabaseAdmin } from '../../lib/supabaseServer';
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  const { email,password } = req.body || {};
  if(!email||!password) return res.status(400).json({message:'email+password required'});
  const { data, error } = await supabaseAdmin.from('users').select('*').eq('email',email).single();
  if(error||!data) return res.status(401).json({message:'not found'});
  const match = bcrypt.compareSync(password, data.password_hash);
  if(!match) return res.status(401).json({message:'invalid'});
  res.status(200).json({ok:true});
}
