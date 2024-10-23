import { Boxes, ClipboardX, TrendingUpDown, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Charts } from "../../_components/stats";


export default function Page() {
    return (
        <div className="flex flex-col gap-2">
            <div className="p-4 mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total des commandes
                        </CardTitle>
                        <Boxes className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">75</div>
                        <p className="text-xs text-muted-foreground">
                            +4% (30 days)
                        </p>
                    </CardContent>
                </Card>

                <Card >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total livré
                        </CardTitle>
                        <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">325</div>
                        <p className="text-xs text-muted-foreground">
                            -11% (30 days)
                        </p>
                    </CardContent>
                </Card>

                <Card >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total annulé
                        </CardTitle>
                        <ClipboardX className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">23</div>
                        <p className="text-xs text-muted-foreground">
                            -3% (30 days)
                        </p>
                    </CardContent>
                </Card>

                <Card >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Revenu total
                        </CardTitle>
                        <TrendingUpDown className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1200 MAD</div>
                        <p className="text-xs text-muted-foreground">
                            +12% (30 days)
                        </p>
                    </CardContent>
                </Card>
            </div>
            <Charts />

        </div >
    )
}
