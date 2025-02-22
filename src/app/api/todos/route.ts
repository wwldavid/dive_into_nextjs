import { NextResponse } from "next/server"

const data = ['eating','sleeping','typing']

export async function GET(){
  return NextResponse.json({data});
}

export async function POST(request:Request){
  const formData = await request.formData();
  const todo = formData.get('todo') as string;
  data.push(todo);
  return NextResponse.json({data})
}