import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import supabase from "@/config/supabaseClient";
import { CirclePlus } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

export default function AddItemDialog() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState(5);

  const dialogRef = useRef<HTMLButtonElement>(null);

  const resetInput = () => {
    setTitle("");
    setMethod("");
    setRating(5);
    if (dialogRef.current) {
      dialogRef.current.remove();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !method || rating < 0 || rating > 10) {
      alert("Please fill in all fields");
      return;
    }

    const { data, error } = await supabase
      .from("smoothies")
      .insert([{ title, method, rating }]);

    if (error) {
      alert(`Error: ${error.message}`);
      return;
    }

    if (data) {
      dialogRef.current?.click();
      alert("Item added successfully!");
      resetInput();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="col-span-1 hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150">
          <CardContent className="h-full flex flex-col items-center justify-evenly">
            <CirclePlus size={48} color="#6a7282 " />
            <h2 className="text-gray-500">Add Item</h2>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="justify-end">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="method" className="justify-end">
                Method
              </Label>
              <Textarea
                id="method"
                className="col-span-3"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="justify-end">
                Rating
              </Label>
              <div className="col-span-3 flex items-center gap-2">
                <span>0</span>
                <Slider
                  id="title"
                  defaultValue={[rating]}
                  onValueChange={(value) => setRating(value[0])}
                  max={10}
                  step={1}
                  className="col-span-3"
                />
                <span>10</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild ref={dialogRef}>
              <Button
                className="hover:cursor-pointer"
                type="button"
                variant="secondary"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="hover:cursor-pointer" type="submit">
              Add Item
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
