import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog'
import { Button } from './components/ui/button';
import useGlobalState from './hook/use-context';
import { useEffect } from 'react';
const App = () => {
  const { global, setGlobal } = useGlobalState();
  useEffect(() => {
    setGlobal(prev => ({ ...prev, store: { ...prev.store, name: 'first user' } }))
  }, [setGlobal])
  console.log(global);
  return (
    <main className="min-h-screen bg-cyan-200 flex justify-center items-center">
      <h1 className='text-3xl'>Welcome to Presto</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>New Presentation</Button>
        </DialogTrigger>
        <DialogContent>
        <DialogHeader>
          <DialogTitle>New Presentation</DialogTitle>
          <DialogDescription>
            Create a new presentation by entering the name and description
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              placeholder='Demo'
              className="col-span-3 px-2 py-1 border-slate-400 border-2 rounded-sm"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="description" className="text-right">
              Description
            </label>
            <input
              id="description"
              className="col-span-3 px-2 py-1 border-slate-400 border-2 rounded-sm"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

export default App;
