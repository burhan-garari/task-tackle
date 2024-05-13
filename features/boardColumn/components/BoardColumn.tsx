import { TTicketChipProps, TicketChip } from "@/features/ticketBoardChip";
type TBoardColumnProps = {
    column_name: string;
    ticket_chips: TTicketChipProps[];
};

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  


function BoardColumn({column_name, ticket_chips}: TBoardColumnProps) {
    return (
        <Accordion 
            type="single" 
            defaultValue="column"
            collapsible
            className="min-w-[300px] max-w-[480px] p-2 border-2 rounded-lg"
        >
            <AccordionItem value="column" className="border-b-0">
                <AccordionTrigger>
                    {column_name}
                </AccordionTrigger>
                <AccordionContent className="pb-0 flex flex-col gap-2">
                    {
                       ticket_chips.map(
                        (ticket_chip) => <TicketChip {...ticket_chip} />
                       ) 
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default BoardColumn;