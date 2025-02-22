'use server'

import { revalidatePath, revalidateTag } from "next/cache"

const data = ['eating', 'sleeping','coding']

export async function getTodos(){
  return data
}

export async function addTodo(prevState:{message: string },formData: FormData){
  const todo = formData.get('todo') as string
  data.push(todo)
 
  console.log(data);
  
  revalidatePath('/')
  // revalidateTag('xxx')
  return {
    ...prevState,
    message: `add ${todo} success!`
  }

}