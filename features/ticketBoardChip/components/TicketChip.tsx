import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export type TTicketChipProps = {
    title: string;
    description: string;
}

function TicketChip({title, description}: TTicketChipProps) {
    return (
        <Card className="rounded-lg">
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default TicketChip;
  