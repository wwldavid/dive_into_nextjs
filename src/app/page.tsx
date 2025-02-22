import { addTodo, getTodos } from "@/actions";
import ClientButton from "@/components/client-button";
import SubmitButton from "@/components/submit-button";



export default async function Page() {
 
  const todos = await getTodos()

  return (
    <div className="p-10">
      <div className="flex">
          <form action={addTodo}>
             <input type="text" name="todo" className="border p-2" />
             <SubmitButton/>
          </form>
          <ClientButton> Icecream </ClientButton>
      </div>
    
      <ul className="leading-8 mt-4">
         {
           todos.map((todo, index) => <li key={index} >{todo}</li>)
          }
      </ul>
    </div>
  );
}
