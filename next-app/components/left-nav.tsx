import { Button } from '@/components/ui/button';
import { Menu } from "lucide-react"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';

export function SheetDemo() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>
					<Menu className="h-4 w-4 fill-current"  /></Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Title</SheetTitle>
					<SheetDescription>
						Description
					</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					Footer
					{/*<SheetClose asChild>*/}
					{/*	<Button type="submit">Save changes</Button>*/}
					{/*</SheetClose>*/}
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
