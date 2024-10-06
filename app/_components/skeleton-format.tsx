import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonFormat() {
    return (
        <div className="flex items-center space-x-4 w-full">
            <Skeleton className="h-12 w-12 rounded-full" />

            <div className="flex flex-row items-start w-full gap-36">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    )
}
