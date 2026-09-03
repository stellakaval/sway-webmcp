import {createClient} from '@supabase/supabase-js';
import type {BoardState} from './types';

const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_ANON_KEY;
export const isSupabaseConfigured=Boolean(url&&key);
const client=isSupabaseConfigured?createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true}}):null;
const boardId=()=>{let value=localStorage.getItem('sway-cloud-board-id');if(!value){value=crypto.randomUUID();localStorage.setItem('sway-cloud-board-id',value)}return value};

export async function persistBoard(state:BoardState){if(!client)return 'local' as const;let {data:{user}}=await client.auth.getUser();if(!user){const result=await client.auth.signInAnonymously();user=result.data.user;if(result.error)throw result.error}if(!user)throw new Error('Anonymous session unavailable');const {error}=await client.from('boards').upsert({id:boardId(),owner_id:user.id,occasion_id:state.occasionId,brief:state.brief,weights:state.weights,state},{onConflict:'id'});if(error)throw error;return 'cloud' as const}
