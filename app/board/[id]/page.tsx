import { BoardColumn } from "@/features/boardColumn";
import { TTicketChipProps, TicketChip } from "@/features/ticketBoardChip";

const dummyData: TTicketChipProps[] = [
    {
        title: "Ticket1",
        description: "description 1234"
    },
    {
        title: "Ticket1",
        description: "description 1234"
    },
    {
        title: "Ticket1",
        description: "description 1234"
    },
]
export default function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            My Board: {params.id}
            <TicketChip title={"Ticket1"} description="description 1234" />
            <BoardColumn column_name="TODO"
                ticket_chips={dummyData} 
            />
        </div>
    )
}