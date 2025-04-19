import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../components/ui/hover-card";
import Link from "next/link";

type TCompany = {
    companyName: string;
    companyLogo: string;
    companyDescription: string;
    companyJoinDate: string;
    companyLink: string;
    label: string
    size: "sm" | "lg" | "default"
}

export function CompanyHoverCard({ companyName, companyLogo, companyDescription, companyJoinDate, companyLink, label, size }: TCompany) {
    return (
        <Link href={companyLink} target="_blank" rel="noopener noreferrer">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link" size={size} className="p-0 h-fit">{label} {companyName}</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                        <Avatar>
                            <AvatarImage className="object-contain" src={companyLogo} />
                            <AvatarFallback>{companyName}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{companyName}</h4>
                            <p className="text-sm">
                                {companyDescription}
                            </p>
                            <div className="flex items-center pt-2">
                                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    Joined {companyJoinDate}
                                </span>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </Link>
    )
}
