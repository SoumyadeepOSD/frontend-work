import { Card } from "@/components/ui/card";
import PopupCard from "./popup-card";
import { SkeletonFormat } from "./skeleton-format";

interface PopupCardProps {
    firstLine: boolean;
    secondLine: boolean;
    thirdLine: boolean;
    firstDone: boolean;
    secondDone: boolean;
    thirdDone: boolean;
};

const SkeletonStructure = ({ firstLine, secondLine, thirdLine, firstDone, secondDone, thirdDone }: PopupCardProps) => {
    const numberOfCards = 3; // Adjust this if you need a different number of cards

    return (
        <section className="w-full flex flex-col items-center justify-center gap-5 my-10 relative">
            {Array.from({ length: numberOfCards }).map((_, index) => (
                <Card key={index} className="w-[80%] h-40 flex flex-col items-start justify-between p-5">
                    <SkeletonFormat />
                    <SkeletonFormat />
                </Card>
            ))}
            <PopupCard 
                firstLine={firstLine} 
                secondLine={secondLine} 
                thirdLine={thirdLine} 
                firstDone={firstDone} 
                secondDone={secondDone} 
                thirdDone={thirdDone} 
            />
        </section>
    );
};

export default SkeletonStructure;
